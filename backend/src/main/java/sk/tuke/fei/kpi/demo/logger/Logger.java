package sk.tuke.fei.kpi.demo.logger;


import java.text.SimpleDateFormat;
import java.util.Date;

public class Logger
{

    private static Logger instance_logger = null;
    private final String DATE_FORMAT = "HH:mm:ss.SSS";


    public static Logger getInstance() {
        if (instance_logger == null) {
            instance_logger = new Logger();
        }

        return instance_logger;
    }

    private String getTimeFormat() { return new SimpleDateFormat(DATE_FORMAT).format(new Date()); }


    public void finish(String caller, int port) {
        System.out.println(" [FINISH] Terminating " + caller + " at port [" + port  + "]");
    }

    public void init(String caller) {
        System.out.println("Timestamp -> " + getTimeFormat() + " | init | Running  " + caller);
    }


    public void info(String caller, String message) {
        System.out.println("Timestamp -> " + getTimeFormat()  + " | info | " + caller + " | " + message);
    }


    public void warning(String caller, String message) {
        System.out.println("[WARNING] " + caller + " : " + message);
    }

    public void error(String caller, String message) {
        System.err.println("Timestamp -> " + getTimeFormat() + "  \t !!! ERROR   " + caller + " | " + message);
    }



}
