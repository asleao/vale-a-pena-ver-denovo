package questao1;

/**
 * Created by aleao on 26/03/17.
 */
public class main {
    public static void main(String[] args) {
        SensorTemperatura sensorExternoUm = new SensorTemperatura(20);
        SensorTemperatura sensorExternoDois = new SensorTemperatura(20);
        SensorTemperatura sensorExternoTres = new SensorTemperatura(20);

        ArCondicionado sensor1 = new ArCondicionado();
        ArCondicionado sensor2 = new ArCondicionado();
        ArCondicionado sensor3 = new ArCondicionado();

        sensor1.addObserver(sensorExternoUm);
        sensor1.setTemperaturaExterna(12);

        sensor2.addObserver(sensorExternoDois);
        sensor2.setTemperaturaExterna(12);

        sensor3.addObserver(sensorExternoTres);
        sensor3.setTemperaturaExterna(12);
        sensor3.setTemperaturaExterna(24);
    }
}
