/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package questao3.app;

import questao3.control.Cidade;
import questao3.model.AbstractAvaliadorDirecional;

/**
 *
 * @author Leticia
 */
public class Application {
    public static void main(String[] args) {
        
        Cidade cidadeSelecionada = AbstractAvaliadorDirecional.processar("Oeste Aberdeen Birmingham Liverpool Southampton");
        cidadeSelecionada.resposta();
    }
}
