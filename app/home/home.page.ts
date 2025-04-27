import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}



  valorEmp:number = 0;
 taxa:number = 0;
 prazo:number = 0;
 total = '0';
 prazoMes:number = 0;
 taxa2:number = 0;
 valorEmp2:number = 0;


 calcularEmpres(){
 this.taxa2 = this.taxa/100;
 this.valorEmp2 = (this.valorEmp * this.taxa2) + this.valorEmp;
 this.total = (this.valorEmp2/this.prazo).toFixed(2)




 }


 //ativ 02

 alertButtons = ['Ok'];

 valorProd:number = 0;
 valorDesconto:number = 0;
valorTotal = 0;
valorDesconto2 = 0;

calcularDesconto(){
this.valorDesconto2 = this.valorDesconto/100;
this.valorTotal = this.valorProd*this.valorDesconto2;
}










//ativ 03
diariasDj = 0;
valorDiaria = 0;
valorRefeicao = 0;
resultDiario = '';
resultRefeicao = '';
valorHotel: number = 0;

calcularEstadia(){
if (this.resultDiario == 'economico') {
 this.valorDiaria = 150;
  
}else if (this.resultDiario == 'padrao') {
  this.valorDiaria = 250;
} else if (this.resultDiario == 'luxo') {
  this.valorDiaria = 400;
};

if (this.resultRefeicao == 'semRefeicao') {
  this.valorRefeicao = 0;
  
}else if (this.resultRefeicao == 'cafeManha'){
  this.valorRefeicao = 30;
}else if (this.resultRefeicao == 'meiaPensao'){
  this.valorRefeicao = 70;
}else if (this.resultRefeicao == 'pensaoCompleta'){
  this.valorRefeicao = 120;
};

this.valorHotel = Number(this.valorDiaria + this.valorRefeicao) * Number(this.diariasDj);


  

}
}









