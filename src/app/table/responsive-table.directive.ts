import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appResponsiveTable]'
})
export class ResponsiveTableDirective implements OnInit {

  readonly overflowCssClassName = 'overflowhide';
  readonly showCssClassName = 'show';
  readonly hideCssClassName = 'hide';

  constructor(private element: ElementRef) { }


  ngOnInit(): void {
   
    const allThs: any[] = this.element.nativeElement.querySelectorAll('th');
    const allTds: any[] = this.element.nativeElement.querySelectorAll('td');
    this.addInitalStyles(allThs);
    this.addInitalStyles(allTds);


    console.log("all th", this.element.nativeElement.querySelectorAll('th'));

  }

  private addInitalStyles(allThs: any[]) {
    allThs.forEach((th: any) => this.addInitClasses(th));
  }

  addInitClasses(element: any) {
    element.classList.add(this.overflowCssClassName);
    element.classList.add(this.showCssClassName);
  }


}


// (function() {

//   let nowWidth = $(".t1").width();
//   let parentWidth = $(".t1").parent().width();
//   while (nowWidth > parentWidth) {
//     if (nowWidth > parentWidth) {
//       $(".t1").children("thead").children("tr").find(".overflowhide.show:last").removeClass("show").addClass("hide");
//       $(".t1").children("tbody").children("tr").find(".overflowhide.show:last").removeClass("show").addClass("hide");

//       nowWidth = $(".t1").width();
//     }
//   }
// toggleInfoColumn();
// })();

// let output = document.getElementById("output");
// let originalWidth = $(".t1").width();

// window.onresize = () => {

//   let nowWidth = $(".t1").width();
//   let parentWidth = $(".t1").parent().width();
//   if (nowWidth > parentWidth) {
//     originalWidth = $(".t1").width();
//     $(".t1").children("thead").children("tr").find(".overflowhide.show:last").removeClass("show").addClass("hide");
//     $(".t1").children("tbody").children("tr").find(".overflowhide.show:last").removeClass("show").addClass("hide");
//   } else if (originalWidth < parentWidth) {
//     $(".t1").children("thead").children("tr").find(".overflowhide.hide:last").removeClass("hide").addClass("show");
//     $(".t1").children("tbody").children("tr").find(".overflowhide.hide:last").removeClass("hide").addClass("show");
//   }
//   toggleInfoColumn();
// }