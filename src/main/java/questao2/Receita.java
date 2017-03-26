package questao2;

/**
 * Created by aleao on 26/03/17.
 */
public class Receita {
    private double imposto;
    private ImpostoStrategy estrategiaImposto;

    public Receita(double valorBruto){
        if(valorBruto<1710.79)
            estrategiaImposto = new Faixa1();
        else {
            if((valorBruto>=1710.79) && (valorBruto<2563.92)){
                estrategiaImposto = new Faixa2();
            }else {
                if ((valorBruto>=2563.92) && (valorBruto<=3418.59)){
                    estrategiaImposto = new Faixa3();
                }
                else {
                    if ((valorBruto>=3418.60) && (valorBruto<4271.59)){
                        estrategiaImposto = new Faixa4();
                    } else {
                        if (valorBruto>=4271.59){
                            estrategiaImposto = new Faixa5();
                        }
                    }
                }
            }
        }


    }
    public double calculaImposto(double valorBruto) {
        return estrategiaImposto.calculaImposto(valorBruto);
    }

    public double getAliquota() {
        return estrategiaImposto.getAliquota();
    }
}
