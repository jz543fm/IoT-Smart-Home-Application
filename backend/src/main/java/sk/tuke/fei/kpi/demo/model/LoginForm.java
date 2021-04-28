package sk.tuke.fei.kpi.demo.model;

import lombok.Data;

import java.io.Serializable;

@Data
public class LoginForm implements Serializable {
    private String username;
    private String password;
}
