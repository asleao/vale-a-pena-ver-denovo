package questao1;

import java.util.ArrayList;

/**
 * Created by aleao on 24/03/17.
 */
public class ArCondicionado extends Observable{
    private ArrayList<Observer> monitores;
    private int temperaturaExterna;
    private int temperaturaInterna;

    public ArCondicionado(){
        this.monitores = new ArrayList();
    }
    public int getTemperaturaInterna() {
        return temperaturaInterna;
    }

    public void setTemperaturaInterna(int temperaturaInterna) {
        this.temperaturaInterna = temperaturaInterna;
        notifyObserver();
    }

    public void setTemperaturaExterna(int temperaturaExterna) {
        this.temperaturaExterna = temperaturaExterna;
        notifyObserver();
    }

    public int getTemperaturaExterna() {
        return this.temperaturaExterna;
    }

    public int calculaMedia(int sensor1, int sensor2, int sensor3) {
        int media = (sensor1+sensor2+sensor3)/3;
        return media;
    }
}
