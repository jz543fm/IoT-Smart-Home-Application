package sk.tuke.fei.kpi.demo.controller;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import sk.tuke.fei.kpi.demo.logger.Logger;
import sk.tuke.fei.kpi.demo.mapper.LightMapper;
import sk.tuke.fei.kpi.demo.mapper.LightViewDTO;
import sk.tuke.fei.kpi.demo.service.LightService;

import java.io.*;
import java.net.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class LightController {


    private final LightService lightService;

    private final LightMapper lightMapper;

    @Autowired
    public LightController(LightService lightService, LightMapper lightMapper) {
        this.lightService = lightService;
        this.lightMapper = lightMapper;
    }

    @GetMapping("light/name-contains/{keyword}")
    public Page<LightViewDTO> getAllByNameContaining(@RequestParam(defaultValue = "0") int page,
                                                     @RequestParam(defaultValue = "9") int size,
                                                     @PathVariable("keyword") String keyword) {
        Logger.getInstance().info("Method LightNameContains", "[CONTROLLER] LightController \n");

        Page<LightViewDTO> lightViewDTOS = this.lightService.findLightByNameContaining(keyword, PageRequest.of(page, size))
                .map(LightMapper.INSTANCE::toLightViewDTO);

        return lightViewDTOS;
    }


    @SneakyThrows
    @RequestMapping(value = "/rest/light/all-on", method = RequestMethod.GET)
    public void getOn() {

        Logger.getInstance().info("Method GetOn", "[INFO] LightController \n");

        URL url = new URL("https://openlab.kpi.fei.tuke.sk/rest/light/all-on");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        while ((inputLine = in.readLine()) != null) {
            System.out.println(inputLine);
        }
        in.close();
    }

    @SneakyThrows
    @RequestMapping(value = "/rest/light/all-off", method = RequestMethod.GET)
    public void getOff() {
        Logger.getInstance().info("Method getOff", "[CONTROLLER] LightController \n");

        URL url = new URL("https://openlab.kpi.fei.tuke.sk/rest/light/all-off");
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestMethod("GET");
        BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String inputLine;
        while ((inputLine = in.readLine()) != null) {
            System.out.println(inputLine);
        }
        in.close();
    }

    @RequestMapping(value = "/change/color", consumes = "application/json", method = RequestMethod.POST)
    public void ChangeColor(@RequestBody String json) throws IOException {
        try {
            Logger.getInstance().info("Method ChangeColor", "[CONTROLLER] LightController \n");

            URL url = new URL("https://openlab.kpi.fei.tuke.sk/rest/light");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setDoOutput(true);
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json");
            String input = json;
//            String input = "{\"colors\":[\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0055aa33\",\"0022bca4\",\"0022bca4\",\"0055aa33\",\"0022bca4\"],\"duration\":500}";

            OutputStream os = conn.getOutputStream();
            os.write(input.getBytes());
            os.flush();
            /*
            if (conn.getResponseCode() != HttpURLConnection.HTTP_CREATED) {
                throw new RuntimeException("Failed : HTTP error code : "
                        + conn.getResponseCode());
            }
*/
            BufferedReader br = new BufferedReader(new InputStreamReader(
                    (conn.getInputStream())));

            String output;
            System.out.println("Output from Server .... \n");
            while ((output = br.readLine()) != null) {
                System.out.println(output);
            }

            conn.disconnect();

        } catch (MalformedURLException e) {
            Logger.getInstance().error("MalformedURLException", "Printing Stack trace: \n");

            e.printStackTrace();

        } catch (IOException e) {
            Logger.getInstance().error("IOException", "Printing Stack trace: \n");
            e.printStackTrace();

        }
    }

}




