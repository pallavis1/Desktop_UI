import { Component, OnInit } from '@angular/core';
import { TRANSLATE } from 'src/app/shared/constant/translate';
import { CdkDrag, CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';
// import { CdkResize, CdkResizeEnd } from '@angular/cdk/resize';

@Component({
  selector: 'app-floor-plan',
  templateUrl: './floor-plan.component.html',
  styleUrls: ['./floor-plan.component.scss']
})
export class FloorPlanComponent implements OnInit {
  TRANSLATE: any = TRANSLATE['en'];
  // onDragStarted(event: CdkDragStart): void {
  //   // Handle drag start event here
  // }

  // onDragEnded(event: CdkDragEnd): void {
  //   // Handle drag end event here
  // }

  // onResizeEnded(event: CdkResizeEnd): void {
  //   // Handle resize end event here
  // }
  constructor() { 
    window.onload = function() {
      initDragElement();
      // initResizeElement();
    };
    
    function initDragElement() {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      var popups = document.getElementsByClassName("popup");
      var elmnt = null;
      var currentZIndex = 100; //TODO reset z index when a threshold is passed
    
      for (var i = 0; i < popups.length; i++) {
        var popup = popups[i];
        var header = getHeader(popup);
    
        // popup.onmousedown = function() {
        //   this.style.zIndex = "" + ++currentZIndex;
        // };
    
        if (header) {
          header.parentPopup = popup;
          header.onmousedown = dragMouseDown;
        }
      }
    
      function dragMouseDown(e) {
        elmnt = this.parentPopup;
        elmnt.style.zIndex = "" + ++currentZIndex;
    
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        if (!elmnt) {
          return;
        }
    
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
        elmnt.style.position = 'absolute';
      }
    
      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    
      function getHeader(element) {
        var headerItems = element.getElementsByClassName("drag_icon");
    
        if (headerItems.length === 1) {
          return headerItems[0];
        }
    
        return null;
      }
    }
    
  }

  ngOnInit() {
  }

  
  
}
