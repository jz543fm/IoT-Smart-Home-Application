package sk.tuke.fei.kpi.demo.model.sensors;

import io.swagger.v3.core.util.Json;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "sensor_a")
public class SensorA {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "mac_addr", nullable = false, unique = true)
    private String macAddr;

    @Column(nullable = true)
    private float temp1;

    @Column(nullable = true)
    private float temp2;

    @Column(nullable = true)
    private int light;

    @Column(nullable = true)
    private float pres;

    @Column(nullable = true)
    private float humi;

    @Column(nullable = true)
    private int vol;

    @Column(nullable = true)
    private String json;


}
