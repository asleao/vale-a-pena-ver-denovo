package questao1;

/**
 * Created by aleao on 24/03/17.
 */
public class ArCondicionado {

    private int temperaturaExterna;
    private int temperaturaInterna;

    public int getTemperaturaInterna() {
        return temperaturaInterna;
    }

    public void setTemperaturaInterna(int temperaturaInterna) {
        this.temperaturaInterna = temperaturaInterna;
    }

    public void setTemperaturaExterna(int temperaturaExterna) {
        this.temperaturaExterna = temperaturaExterna;
    }

    public int getTemperaturaExterna() {
        return this.temperaturaExterna;
    }

    public int calculaMedia(int sensor1, int sensor2, int sensor3) {
        int media = (sensor1+sensor2+sensor3)/3;
        return media;
    }
}
