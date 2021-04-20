package sk.tuke.fei.kpi.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import sk.tuke.fei.kpi.demo.mapper.LightMapper;
import sk.tuke.fei.kpi.demo.mapper.LightViewDTO;
import sk.tuke.fei.kpi.demo.service.LightService;

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



}
