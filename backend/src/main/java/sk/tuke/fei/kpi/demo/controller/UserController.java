package sk.tuke.fei.kpi.demo.controller;


import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sk.tuke.fei.kpi.demo.dto.UserDTO;
import sk.tuke.fei.kpi.demo.mapper.UserMapper;
import sk.tuke.fei.kpi.demo.model.JwtResponse;
import sk.tuke.fei.kpi.demo.model.LoginForm;
import sk.tuke.fei.kpi.demo.model.User;
import sk.tuke.fei.kpi.demo.security.jwt.JwtTokenUtil;
import sk.tuke.fei.kpi.demo.service.UserService;


@CrossOrigin("*")
@RestController
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private AuthenticationManager authenticationManager;


    private final UserMapper userMapper;

    @Autowired
    public UserController(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @SneakyThrows
    @PostMapping(path = "/login", consumes = "application/json", produces = "application/json")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginForm loginForm) {

        try {
            final UserDetails userDetails = userService.loadUserByUsername(loginForm.getUsername());

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginForm.getUsername(),
                    loginForm.getPassword(), userDetails.getAuthorities()));

            final String token = jwtTokenUtil.generateToken(userDetails);

            String role = "USER";

            if (!userDetails.getAuthorities().isEmpty()) role = userDetails.getAuthorities().iterator().next().toString();

            return ResponseEntity.ok(new JwtResponse(token, userDetails.getUsername(), role));
        } catch (AuthenticationException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    @PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<UserDTO> save(@RequestBody UserDTO userDTO) {

        if (userService.findByEmail(userDTO.getEmail()).isPresent()) {
            return ResponseEntity.unprocessableEntity().build();
        }

        User user = userMapper.toUser(userDTO);

        try {

            UserDTO savedUserDTO = userMapper.toUserDTO(userService.save(user));

            return ResponseEntity.ok(savedUserDTO);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }


}
