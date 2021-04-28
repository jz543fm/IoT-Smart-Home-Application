package sk.tuke.fei.kpi.demo.controller;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import sk.tuke.fei.kpi.demo.mapper.LightMapper;
import sk.tuke.fei.kpi.demo.mapper.LightViewDTO;
import sk.tuke.fei.kpi.demo.service.LightService;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URI;
import java.net.URL;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class LightController {


    private final LightService lightService;

    private final LightMapper lightMapper;

    @Autowired
    public LightController(LightService lightService, LightMapper lightMapper){
        this.lightService = lightService;
        this.lightMapper = lightMapper;
    }

    @GetMapping("light/name-contains/{keyword}")
    public Page<LightViewDTO> getAllByNameContaining(@RequestParam(defaultValue = "0") int page,
                                                       @RequestParam(defaultValue = "9") int size,
                                                       @PathVariable("keyword") String keyword) {
        Page<LightViewDTO> lightViewDTOS = this.lightService.findLightByNameContaining(keyword, PageRequest.of(page, size))
                .map(LightMapper.INSTANCE::toLightViewDTO);

        return lightViewDTOS;
    }


    /*
            GET REQ TO /rest/light/all-on switch all lights to white

     */




      /*
            GET REQ TO /rest/light/all-off switch all lights  off and turn of automatic mode

     */


      /*

            POST REQ TO /rest/light for setting each light to specific color
       */

    @SneakyThrows
    @RequestMapping(value ="/rest/light/all-on", method = RequestMethod.GET)
    public void getOn()   {

        URL url = new URL("https://openlab.kpi.fei.tuke.sk/rest/light/all-on");
        HttpURLConnection con = (HttpURLConnection) url.openConnection(); con.setRequestMethod("GET");
        BufferedReader in = new BufferedReader(new InputStreamReader( con.getInputStream()));
        String inputLine; while ((inputLine = in.readLine()) != null) { System.out.println(inputLine); } in.close();
    }

    @SneakyThrows
    @RequestMapping(value ="/rest/light/all-off", method = RequestMethod.GET)
    public void getOff()   {

        URL url = new URL("https://openlab.kpi.fei.tuke.sk/rest/light/all-off");
        HttpURLConnection con = (HttpURLConnection) url.openConnection(); con.setRequestMethod("GET");
        BufferedReader in = new BufferedReader(new InputStreamReader( con.getInputStream()));
        String inputLine; while ((inputLine = in.readLine()) != null) { System.out.println(inputLine); } in.close();
    }

}
