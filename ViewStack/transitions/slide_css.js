define(function(){ return '\
.-d-view-stack-slide {\
  -moz-transition-property: none;\
  -webkit-transition-property: none;\
  transition-property: none;\
  -moz-transition-duration: 0s;\
  -webkit-transition-duration: 0s;\
  transition-duration: 0s;\
}\
.-d-view-stack-slide.-d-view-stack-transition {\
  -webkit-transition-property: -webkit-transform;\
  transition-property: transform;\
  -moz-transition-duration: 0.3s;\
  -webkit-transition-duration: 0.3s;\
  transition-duration: 0.3s;\
}\
.-d-view-stack-slide.-d-view-stack-out.-d-view-stack-reverse.-d-view-stack-transition,\
.-d-view-stack-slide.-d-view-stack-in {\
  -webkit-transform: translate3d(100%, 0px, 0px) !important;\
  transform: translate3d(100%, 0px, 0px) !important;\
}\
.-d-view-stack-slide.-d-view-stack-out.-d-view-stack-transition,\
.-d-view-stack-slide.-d-view-stack-in.-d-view-stack-reverse {\
  -webkit-transform: translate3d(-100%, 0px, 0px) !important;\
  transform: translate3d(-100%, 0px, 0px) !important;\
}\
.-d-view-stack-slide.-d-view-stack-out,\
.-d-view-stack-slide.-d-view-stack-in.-d-view-stack-transition {\
  -webkit-transform: translate3d(0%, 0px, 0px) !important;\
  transform: translate3d(0%, 0px, 0px) !important;\
}\
.dj_android.dj_tablet .-d-view-stack-slide.-d-view-stack-transition {\
  -moz-transition-duration: 0.6s;\
  -webkit-transition-duration: 0.6s;\
  transition-duration: 0.6s;\
  -moz-transition-timing-function: linear;\
  -webkit-transition-timing-function: linear;\
  transition-timing-function: linear;\
}\
'; } );
