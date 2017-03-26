package questao2;

/**
 * Created by aleao on 26/03/17.
 */
public interface ImpostoStrategy {
    public double calculaImposto(double valorBruto);
    public double getAliquota();
}
