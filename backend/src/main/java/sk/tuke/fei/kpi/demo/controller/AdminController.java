package sk.tuke.fei.kpi.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sk.tuke.fei.kpi.demo.mapper.UserMapper;
import sk.tuke.fei.kpi.demo.mapper.UserViewDTO;
import sk.tuke.fei.kpi.demo.model.User;
import sk.tuke.fei.kpi.demo.service.UserService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/admin/user")
public class AdminController {

    @Autowired
    private UserService userService;

    private final UserMapper userMapper;

    @Autowired
    public AdminController(UserMapper userMapper) {
        this.userMapper = userMapper;
    }


    @GetMapping("/")
    public Page<UserViewDTO> getAllUsers(@RequestParam(defaultValue = "0") int page,
                                         @RequestParam(defaultValue = "9") int size) {
        Page<UserViewDTO> userViewDTOS = this.userService.findAll(PageRequest.of(page, size))
                .map(UserMapper.INSTANCE::toUserViewDTO);

        return userViewDTOS;
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
        this.userService.delete(id);
        return ResponseEntity.ok().build();
    }


    @GetMapping("/all")
    public List<User> getAllUsers() {
        return this.userService.findAll();
    }
}

