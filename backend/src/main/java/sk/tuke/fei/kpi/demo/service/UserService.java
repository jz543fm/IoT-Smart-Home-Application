package sk.tuke.fei.kpi.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sk.tuke.fei.kpi.demo.logger.Logger;
import sk.tuke.fei.kpi.demo.model.User;
import sk.tuke.fei.kpi.demo.repository.UserRepository;

import java.util.Optional;

@Primary
@Service
public class UserService extends CrudService<User> implements UserDetailsService {
    String SERVICE_NAME = "UserService";

    private final UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    public User findByUsername(String firstName) {
//        return userRepository.findByFirstName(firstName);
//    }


    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }



    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        Logger.getInstance().error(SERVICE_NAME, "loadUserByUsername\n");
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty()) {
            Logger.getInstance().error(SERVICE_NAME, "UsernameNotFoundException\n");
            throw new UsernameNotFoundException(username);
        }
        return new org.springframework.security.core.userdetails.User(user.get().getEmail(),
                user.get().getPassword(), user.get().getAuthority());
    }

    @Override
    public User save(User user) {
        //register
        Logger.getInstance().info(SERVICE_NAME, "Encoding user password\n");

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Logger.getInstance().info(SERVICE_NAME, "Password encoded\n");

        try {
            User savedUser = userRepository.save(user);
            Logger.getInstance().info(SERVICE_NAME, "Saving user\n");
            return savedUser;

        } catch (Exception e) {
            Logger.getInstance().error(SERVICE_NAME, "Exception in saving user\n");
            throw new IllegalArgumentException("User saving error...\n");
        }

    }


    @Override
    protected PagingAndSortingRepository<User, Long> getRepository() {
        return userRepository;
    }



}
