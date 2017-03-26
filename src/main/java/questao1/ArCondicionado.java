package questao1;

/**
 * Created by aleao on 24/03/17.
 */
public class ArCondicionado {

    private int temperaturaExterna;

    public void setTemperaturaExterna(int temperaturaExterna) {
        this.temperaturaExterna = temperaturaExterna;
    }

    public int getTemperaturaExterna() {
        return this.temperaturaExterna;
    }

    public void calculaMedia(SensorTemperatura sensor1, SensorTemperatura sensor2, SensorTemperatura sensor3) {
        int media = (sensor1.getTemperatura()+sensor2.getTemperatura()+sensor3.getTemperatura())/3;
        setTemperaturaExterna(media);
    }
}
