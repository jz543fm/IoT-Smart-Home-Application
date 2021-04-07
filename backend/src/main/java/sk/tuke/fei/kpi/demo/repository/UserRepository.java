package sk.tuke.fei.kpi.demo.repository;


import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import sk.tuke.fei.kpi.demo.model.User;

import java.util.Optional;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Long> {

//    User findByFirstName(String firstName);

    Optional<User> findByEmail(String email);

    Optional<User> findById(Long id);
}
