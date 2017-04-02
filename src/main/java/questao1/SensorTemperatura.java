package questao1;


/**
 * Created by aleao on 24/03/17.
 */
public class SensorTemperatura implements Observer{
    private int temperatura;

    public SensorTemperatura(int temperatura) {
        this.temperatura = temperatura;
    }

    public int getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(int temperatura) {
        this.temperatura += temperatura;
    }

    public void update(Observable obs) {
        ArCondicionado arCondicionado = (ArCondicionado) obs;
        if(arCondicionado!=null){
            System.out.println(arCondicionado.getTemperaturaExterna());
        }
    }
}
