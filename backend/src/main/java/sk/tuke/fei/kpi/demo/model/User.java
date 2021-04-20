package sk.tuke.fei.kpi.demo.model;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import sk.tuke.fei.kpi.demo.Role;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.util.Collection;
import java.util.Set;

@Data
@Entity
@Table(name = "user_entity")
public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Email
    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    @Size(min = 5, message = "Length must be more than 5")
    private String password;

    @Column(nullable = true)
    private String phone;

    @Column(nullable = true)
    private String address;

    @Column(name = "zip_code", nullable = true)
    private String zipCode;

    @Transient
    public Set<GrantedAuthority> getAuthority() {
        return Set.of(new SimpleGrantedAuthority("ROLE_" + role));
    }

    @Column(nullable = false)
    private String role = Role.USER.name();


    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

}
