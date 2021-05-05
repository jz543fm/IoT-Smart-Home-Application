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
import sk.tuke.fei.kpi.demo.logger.Logger;
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
        Logger.getInstance().info("Method Login", "[CONTROLLER] UserController \n");

        try {
            final UserDetails userDetails = userService.loadUserByUsername(loginForm.getUsername());
            Logger.getInstance().info("UserDetails UserService loadUserByUsername", "[TryCatch] UserController \n");

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginForm.getUsername(),
                    loginForm.getPassword(), userDetails.getAuthorities()));
            Logger.getInstance().info("Authentification Manager Authenticate", "Authorization \n");

            final String token = jwtTokenUtil.generateToken(userDetails);
            Logger.getInstance().info("jwtTokenUtil Generate Token", "Generating \n");

            String role = "USER";

            if (!userDetails.getAuthorities().isEmpty()) role = userDetails.getAuthorities().iterator().next().toString();

            return ResponseEntity.ok(new JwtResponse(token, userDetails.getUsername(), role));
        } catch (AuthenticationException e) {
            Logger.getInstance().error("Login: AuthenticationException", "Could not authenticate!!! \n");

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }


    @PostMapping(path = "/register", consumes = "application/json", produces = "application/json")
    public ResponseEntity<UserDTO> save(@RequestBody UserDTO userDTO) {
        Logger.getInstance().info("Method Register", "[CONTROLLER] UserController \n");

        if (userService.findByEmail(userDTO.getEmail()).isPresent()) {
            Logger.getInstance().info("UserService FindByEmail Validation", "Email was used\n");

            return ResponseEntity.unprocessableEntity().build();
        }

        User user = userMapper.toUser(userDTO);

        try {

            UserDTO savedUserDTO = userMapper.toUserDTO(userService.save(user));
            Logger.getInstance().info("UserController, method: save", "Saving userDTO\n");

            return ResponseEntity.ok(savedUserDTO);
        } catch (Exception e) {
            Logger.getInstance().error("Exception", "Printing Stack trace: \n");

            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }


}
