package questao2;

/**
 * Created by aleao on 26/03/17.
 */
public class Receita {
    private double imposto;
    public double calculaImposto(double valorBruto) {
        this.imposto = valorBruto*(getAliquota(valorBruto)/100);
        return Math.round(this.imposto*100.0)/100.0;
    }

    public double getAliquota(double valorBruto) {
        double aliquota=0;
        if(valorBruto<1710.79)
            aliquota=0;
        else {
            if((valorBruto>=1710.79) && (valorBruto<2563.92)){
                aliquota=7.5;
            }else {
                if ((valorBruto>=2563.92) && (valorBruto<=3418.59)){
                    aliquota= 15;
                }
                else {
                    if ((valorBruto>=3418.60) && (valorBruto<4271.59)){
                        aliquota= 22.5;
                    } else {
                        if (valorBruto>=4271.59){
                            aliquota= 27.5;
                        }
                    }
                }
            }
        }
        return aliquota;
    }
}
