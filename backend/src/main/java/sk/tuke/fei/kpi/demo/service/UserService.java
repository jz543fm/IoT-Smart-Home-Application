package sk.tuke.fei.kpi.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sk.tuke.fei.kpi.demo.model.User;
import sk.tuke.fei.kpi.demo.repository.UserRepository;

import java.util.Optional;

@Primary
@Service
public class UserService extends CrudService<User> implements UserDetailsService {

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
        Optional<User> user = userRepository.findByEmail(username);
        if (user.isEmpty()) {
            throw new UsernameNotFoundException(username);
        }
        return new org.springframework.security.core.userdetails.User(user.get().getEmail(),
                user.get().getPassword(), user.get().getAuthority());
    }

    @Override
    public User save(User user) {
        //register
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        try {
            User savedUser = userRepository.save(user);

            // initial Cart
//            Cart savedCart = cartRepository.save(new Cart(savedUser));
//            savedUser.setCart(savedCart);
            return savedUser;
        } catch (Exception e) {
            throw new IllegalArgumentException("save user error");
        }

    }


    @Override
    protected PagingAndSortingRepository<User, Long> getRepository() {
        return userRepository;
    }



}
