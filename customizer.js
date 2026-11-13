/* Memory Post try-it preview. Uses three.js (MIT License, Copyright 2010-2026 three.js authors), fabric.js (MIT License, Copyright 2008-2015 Printio) and qrcode-generator (MIT License, Copyright 2009 Kazuhiko Arase). */
var Xp=0,Hu=1,jp=2;var nr=1,Yp=2,fo=3,Cs=0,mn=1,Ai=2,ir=0,po=1,Wu=2,Xu=3,ju=4,qp=5;var sr=100,Zp=101,Jp=102,Kp=103,$p=104,Qp=200,tm=201,em=202,nm=203,Yu=204,qu=205,im=206,sm=207,rm=208,om=209,am=210,lm=211,cm=212,hm=213,um=214,Dl=0,Il=1,Ol=2,so=3,Ll=4,Fl=5,Nl=6,Ul=7,cc=0,dm=1,fm=2,Yn=0,Zu=1,Ju=2,Ku=3,$u=4,Qu=5,td=6,ed=7;var nd=300,rr=301,mo=302,go=303,hc=304,Bl=1e3,Si=1001,kl=1002,Ze=1003,pm=1004;var Sa=1005;var tn=1006,uc=1007;var oi=1008;var wn=1009,id=1010,sd=1011,_o=1012,dc=1013,ai=1014,li=1015,ci=1016,fc=1017,pc=1018,or=1020,rd=35902,od=35899,ad=1021,ld=1022,hi=1023,Ki=1026,Qi=1027,cd=1028,mc=1029,Es=1030,gc=1031;var _c=1033,ba=33776,Ma=33777,wa=33778,Ta=33779,xc=35840,vc=35841,yc=35842,Sc=35843,bc=36196,Mc=37492,wc=37496,Tc=37488,Cc=37489,Ca=37490,Ec=37491,Ac=37808,Rc=37809,Pc=37810,Dc=37811,Ic=37812,Oc=37813,Lc=37814,Fc=37815,Nc=37816,Uc=37817,Bc=37818,kc=37819,zc=37820,Vc=37821,Gc=36492,Hc=36494,Wc=36495,Xc=36283,jc=36284,Ea=36285,Yc=36286;var na=2300,zl=2301,Rl=2302,Nu=2303,Uu=2400,Bu=2401,ku=2402;var mm=3200;var Aa=0,gm=1,ts="",Qe="srgb",ia="srgb-linear",sa="linear",fe="srgb";var Pl=7680;var _m=519,xm=512,vm=513,ym=514,hd=515,Sm=516,bm=517,ud=518,dd=519,Mm=35044;var fd="300 es",Xn=2e3,ro=2001;function H_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function W_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ra(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wm(){let s=ra("canvas");return s.style.display="block",s}var bp={},oo=null;function pd(...s){let t="THREE."+s.shift();oo?oo("log",t,...s):console.log(t,...s)}function Tm(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ht(...s){s=Tm(s);let t="THREE."+s.shift();if(oo)oo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=Tm(s);let t="THREE."+s.shift();if(oo)oo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function ea(...s){let t=s.join(" ");t in bp||(bp[t]=!0,Ht(...s))}function Cm(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Em={[Dl]:Dl,[Ol]:Nl,[Ll]:Ll,[so]:Fl,[Il]:Il,[Nl]:Ol,[Ul]:Ul,[Fl]:so},Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var pu=Math.PI/180,Vl=180/Math.PI;function Ra(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[s&255]+on[s>>8&255]+on[s>>16&255]+on[s>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function ce(s,t,e){return Math.max(t,Math.min(e,s))}function X_(s,t){return(s%t+t)%t}function mu(s,t,e){return(1-e)*s+e*t}function Am(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function md(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function j_(s,t){if(t.constructor===Float32Array)return s;let e=md(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Y_(s,t){if(t.constructor===Float32Array)return s;let e=md(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var le=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],f=r[o+1],p=r[o+2],x=r[o+3];if(u!==x||l!==d||c!==f||h!==p){let m=l*d+c*f+h*p+u*x;m<0&&(d=-d,f=-f,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){let S=Math.acos(m),P=Math.sin(S);g=Math.sin(g*S)/P,a=Math.sin(a*S)/P,l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a}else{l=l*g+d*a,c=c*g+f*a,h=h*g+p*a,u=u*g+x*a;let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*u+l*f-c*d,t[e+1]=l*p+h*d+c*u-a*f,t[e+2]=c*p+h*f+a*d-l*u,t[e+3]=h*p-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"YXZ":this._x=d*h*u+c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"ZXY":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u-d*f*p;break;case"ZYX":this._x=d*h*u-c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u+d*f*p;break;case"YZX":this._x=d*h*u+c*f*p,this._y=c*f*u+d*h*p,this._z=c*h*p-d*f*u,this._w=c*h*u-d*f*p;break;case"XZY":this._x=d*h*u-c*f*p,this._y=c*f*u-d*h*p,this._z=c*h*p+d*f*u,this._w=c*h*u+d*f*p;break;default:Ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},it=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gu.copy(this).projectOnVector(t),this.sub(gu)}reflect(t){return this.sub(gu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},gu=new it,Mp=new wi,Xt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],p=n[8],x=i[0],m=i[3],g=i[6],S=i[1],P=i[4],T=i[7],A=i[2],D=i[5],_=i[8];return r[0]=o*x+a*S+l*A,r[3]=o*m+a*P+l*D,r[6]=o*g+a*T+l*_,r[1]=c*x+h*S+u*A,r[4]=c*m+h*P+u*D,r[7]=c*g+h*T+u*_,r[2]=d*x+f*S+p*A,r[5]=d*m+f*P+p*D,r[8]=d*g+f*T+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,p=e*u+n*d+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ea("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_u.makeScale(t,e)),this}rotate(t){return ea("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_u.makeRotation(-t)),this}translate(t,e){return ea("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_u.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},_u=new Xt,wp=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tp=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q_(){let s={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===fe&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===fe&&(i.r=io(i.r),i.g=io(i.g),i.b=io(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ts?sa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ia]:{primaries:t,whitePoint:n,transfer:sa,toXYZ:wp,fromXYZ:Tp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:wp,fromXYZ:Tp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),s}var ae=q_();function Ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function io(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Wr,Gl=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Wr===void 0&&(Wr=ra("canvas")),Wr.width=t.width,Wr.height=t.height;let i=Wr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ra("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ji(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ji(e[n]/255)*255):e[n]=Ji(e[n]);return{data:e,width:t.width,height:t.height}}else return Ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Z_=0,ao=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ra(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(xu(i[o].image)):r.push(xu(i[o]))}else r=xu(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function xu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Gl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ht("Texture: Unable to serialize Texture."),{})}var J_=0,vu=new it,pn=class s extends Mi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Si,i=Si,r=tn,o=oi,a=hi,l=wn,c=s.DEFAULT_ANISOTROPY,h=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Ra(),this.name="",this.source=new ao(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(vu).x}get height(){return this.source.getSize(vu).y}get depth(){return this.source.getSize(vu).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ht(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ht(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bl:t.x=t.x-Math.floor(t.x);break;case Si:t.x=t.x<0?0:1;break;case kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bl:t.y=t.y-Math.floor(t.y);break;case Si:t.y=t.y<0?0:1;break;case kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=nd;pn.DEFAULT_ANISOTROPY=1;var Ee=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let P=(c+1)/2,T=(f+1)/2,A=(g+1)/2,D=(h+d)/4,_=(u+x)/4,y=(p+m)/4;return P>T&&P>A?P<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(P),i=D/n,r=_/n):T>A?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=D/i,r=y/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=_/r,i=y/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-p)*(m-p)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-p)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hl=class extends Mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new pn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ao(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends Hl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},oa=class extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wl=class extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ce=class s{static{this.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Xr.setFromMatrixColumn(t,0).length(),r=1/Xr.setFromMatrixColumn(t,1).length(),o=1/Xr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+p*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d+x*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,p=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,p=a*h,x=a*u;e[0]=l*h,e[4]=p*c-f,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=p*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+p,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,f=o*c,p=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=f*u-p,e[2]=p*u-f,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K_,t,$_)}lookAt(t,e,n){let i=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),fs.crossVectors(n,Dn),fs.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),fs.crossVectors(n,Dn)),fs.normalize(),cl.crossVectors(Dn,fs),i[0]=fs.x,i[4]=cl.x,i[8]=Dn.x,i[1]=fs.y,i[5]=cl.y,i[9]=Dn.y,i[2]=fs.z,i[6]=cl.z,i[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],p=n[2],x=n[6],m=n[10],g=n[14],S=n[3],P=n[7],T=n[11],A=n[15],D=i[0],_=i[4],y=i[8],C=i[12],E=i[1],R=i[5],L=i[9],G=i[13],O=i[2],Z=i[6],$=i[10],z=i[14],F=i[3],B=i[7],J=i[11],nt=i[15];return r[0]=o*D+a*E+l*O+c*F,r[4]=o*_+a*R+l*Z+c*B,r[8]=o*y+a*L+l*$+c*J,r[12]=o*C+a*G+l*z+c*nt,r[1]=h*D+u*E+d*O+f*F,r[5]=h*_+u*R+d*Z+f*B,r[9]=h*y+u*L+d*$+f*J,r[13]=h*C+u*G+d*z+f*nt,r[2]=p*D+x*E+m*O+g*F,r[6]=p*_+x*R+m*Z+g*B,r[10]=p*y+x*L+m*$+g*J,r[14]=p*C+x*G+m*z+g*nt,r[3]=S*D+P*E+T*O+A*F,r[7]=S*_+P*R+T*Z+A*B,r[11]=S*y+P*L+T*$+A*J,r[15]=S*C+P*G+T*z+A*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],S=l*f-c*d,P=a*f-c*u,T=a*d-l*u,A=o*f-c*h,D=o*d-l*h,_=o*u-a*h;return e*(x*S-m*P+g*T)-n*(p*S-m*A+g*D)+i*(p*P-x*A+g*_)-r*(p*T-x*D+m*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],S=e*a-n*o,P=e*l-i*o,T=e*c-r*o,A=n*l-i*a,D=n*c-r*a,_=i*c-r*l,y=h*x-u*p,C=h*m-d*p,E=h*g-f*p,R=u*m-d*x,L=u*g-f*x,G=d*g-f*m,O=S*G-P*L+T*R+A*E-D*C+_*y;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/O;return t[0]=(a*G-l*L+c*R)*Z,t[1]=(i*L-n*G-r*R)*Z,t[2]=(x*_-m*D+g*A)*Z,t[3]=(d*D-u*_-f*A)*Z,t[4]=(l*E-o*G-c*C)*Z,t[5]=(e*G-i*E+r*C)*Z,t[6]=(m*T-p*_-g*P)*Z,t[7]=(h*_-d*T+f*P)*Z,t[8]=(o*L-a*E+c*y)*Z,t[9]=(n*E-e*L-r*y)*Z,t[10]=(p*D-x*T+g*S)*Z,t[11]=(u*T-h*D-f*S)*Z,t[12]=(a*C-o*R-l*y)*Z,t[13]=(e*R-n*C+i*y)*Z,t[14]=(x*P-p*A-m*S)*Z,t[15]=(h*A-u*P+d*S)*Z,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,p=r*u,x=o*h,m=o*u,g=a*u,S=l*c,P=l*h,T=l*u,A=n.x,D=n.y,_=n.z;return i[0]=(1-(x+g))*A,i[1]=(f+T)*A,i[2]=(p-P)*A,i[3]=0,i[4]=(f-T)*D,i[5]=(1-(d+g))*D,i[6]=(m+S)*D,i[7]=0,i[8]=(p+P)*_,i[9]=(m-S)*_,i[10]=(1-(d+x))*_,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Xr.set(i[0],i[1],i[2]).length(),a=Xr.set(i[4],i[5],i[6]).length(),l=Xr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ni.copy(this);let c=1/o,h=1/a,u=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=u,ni.elements[9]*=u,ni.elements[10]*=u,e.setFromRotationMatrix(ni),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Xn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),p,x;if(l)p=r/(o-r),x=o*r/(o-r);else if(a===Xn)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ro)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Xn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),p,x;if(l)p=1/(o-r),x=o/(o-r);else if(a===Xn)p=-2/(o-r),x=-(o+r)/(o-r);else if(a===ro)p=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Xr=new it,ni=new Ce,K_=new it(0,0,0),$_=new it(1,1,1),fs=new it,cl=new it,Dn=new it,Cp=new Ce,Ep=new wi,Ti=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ep.setFromEuler(this),this.setFromQuaternion(Ep,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var aa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Q_=0,Ap=new it,jr=new wi,Wi=new Ce,hl=new it,Ko=new it,tx=new it,ex=new wi,Rp=new it(1,0,0),Pp=new it(0,1,0),Dp=new it(0,0,1),Ip={type:"added"},nx={type:"removed"},Yr={type:"childadded",child:null},yu={type:"childremoved",child:null},ln=class s extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new it,e=new Ti,n=new wi,i=new it(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Xt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jr.setFromAxisAngle(t,e),this.quaternion.multiply(jr),this}rotateOnWorldAxis(t,e){return jr.setFromAxisAngle(t,e),this.quaternion.premultiply(jr),this}rotateX(t){return this.rotateOnAxis(Rp,t)}rotateY(t){return this.rotateOnAxis(Pp,t)}rotateZ(t){return this.rotateOnAxis(Dp,t)}translateOnAxis(t,e){return Ap.copy(t).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rp,t)}translateY(t){return this.translateOnAxis(Pp,t)}translateZ(t){return this.translateOnAxis(Dp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hl.copy(t):hl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(Ko,hl,this.up):Wi.lookAt(hl,Ko,this.up),this.quaternion.setFromRotationMatrix(Wi),i&&(Wi.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(Wi),this.quaternion.premultiply(jr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ip),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nx),yu.child=t,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ip),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,tx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,ex,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ln.DEFAULT_UP=new it(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zi=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},ix={type:"move"},lo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ix)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},ul={h:0,s:0,l:0};function Su(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var $t=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=X_(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Su(o,r,t+1/3),this.g=Su(o,r,t),this.b=Su(o,r,t-1/3)}return ae.colorSpaceToWorking(this,i),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&Ht("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ht("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ht("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=Rm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ht("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}copyLinearToSRGB(t){return this.r=io(t.r),this.g=io(t.g),this.b=io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ae.workingToColorSpace(an.copy(this),t),Math.round(ce(an.r*255,0,255))*65536+Math.round(ce(an.g*255,0,255))*256+Math.round(ce(an.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(an.copy(this),e);let n=an.r,i=an.g,r=an.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Qe){ae.workingToColorSpace(an.copy(this),t);let e=an.r,n=an.g,i=an.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ps),this.setHSL(ps.h+t,ps.s+e,ps.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ps),t.getHSL(ul);let n=mu(ps.h,ul.h,e),i=mu(ps.s,ul.s,e),r=mu(ps.l,ul.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new $t;$t.NAMES=Rm;var la=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},ii=new it,Xi=new it,bu=new it,ji=new it,qr=new it,Zr=new it,Op=new it,Mu=new it,wu=new it,Tu=new it,Cu=new Ee,Eu=new Ee,Au=new Ee,xs=class s{constructor(t=new it,e=new it,n=new it){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ii.subVectors(t,e),i.cross(ii);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ii.subVectors(i,e),Xi.subVectors(n,e),bu.subVectors(t,e);let o=ii.dot(ii),a=ii.dot(Xi),l=ii.dot(bu),c=Xi.dot(Xi),h=Xi.dot(bu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,p=(o*h-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ji.x),l.addScaledVector(o,ji.y),l.addScaledVector(a,ji.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Cu.setScalar(0),Eu.setScalar(0),Au.setScalar(0),Cu.fromBufferAttribute(t,e),Eu.fromBufferAttribute(t,n),Au.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Cu,r.x),o.addScaledVector(Eu,r.y),o.addScaledVector(Au,r.z),o}static isFrontFacing(t,e,n,i){return ii.subVectors(n,e),Xi.subVectors(t,e),ii.cross(Xi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),ii.cross(Xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;qr.subVectors(i,n),Zr.subVectors(r,n),Mu.subVectors(t,n);let l=qr.dot(Mu),c=Zr.dot(Mu);if(l<=0&&c<=0)return e.copy(n);wu.subVectors(t,i);let h=qr.dot(wu),u=Zr.dot(wu);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(qr,o);Tu.subVectors(t,r);let f=qr.dot(Tu),p=Zr.dot(Tu);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Zr,a);let m=h*p-f*u;if(m<=0&&u-h>=0&&f-p>=0)return Op.subVectors(r,i),a=(u-h)/(u-h+(f-p)),e.copy(i).addScaledVector(Op,a);let g=1/(m+x+d);return o=x*g,a=d*g,e.copy(n).addScaledVector(qr,o).addScaledVector(Zr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vs=class{constructor(t=new it(1/0,1/0,1/0),e=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dl.copy(n.boundingBox)),dl.applyMatrix4(t.matrixWorld),this.union(dl)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($o),fl.subVectors(this.max,$o),Jr.subVectors(t.a,$o),Kr.subVectors(t.b,$o),$r.subVectors(t.c,$o),ms.subVectors(Kr,Jr),gs.subVectors($r,Kr),Zs.subVectors(Jr,$r);let e=[0,-ms.z,ms.y,0,-gs.z,gs.y,0,-Zs.z,Zs.y,ms.z,0,-ms.x,gs.z,0,-gs.x,Zs.z,0,-Zs.x,-ms.y,ms.x,0,-gs.y,gs.x,0,-Zs.y,Zs.x,0];return!Ru(e,Jr,Kr,$r,fl)||(e=[1,0,0,0,1,0,0,0,1],!Ru(e,Jr,Kr,$r,fl))?!1:(pl.crossVectors(ms,gs),e=[pl.x,pl.y,pl.z],Ru(e,Jr,Kr,$r,fl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yi=[new it,new it,new it,new it,new it,new it,new it,new it],si=new it,dl=new vs,Jr=new it,Kr=new it,$r=new it,ms=new it,gs=new it,Zs=new it,$o=new it,fl=new it,pl=new it,Js=new it;function Ru(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Js.fromArray(s,r);let a=i.x*Math.abs(Js.x)+i.y*Math.abs(Js.y)+i.z*Math.abs(Js.z),l=t.dot(Js),c=e.dot(Js),h=n.dot(Js);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Be=new it,ml=new le,sx=0,bi=class extends Mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mm,this.updateRanges=[],this.gpuType=li,this.version=0,this._normalizationScale=t!==void 0?md(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ml.fromBufferAttribute(this,e),ml.applyMatrix3(t),this.setXY(e,ml.x,ml.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):j_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Y_(t,this.array)}};var ca=class extends bi{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ha=class extends bi{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jn=class extends bi{constructor(t,e,n){super(new Float32Array(t),e,n)}},rx=new vs,Qo=new it,Pu=new it,co=class{constructor(t=new it,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):rx.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);let e=Qo.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Qo,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(Pu)),this.expandByPoint(Qo.copy(t.center).sub(Pu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ox=0,Wn=new Ce,Du=new ln,Qr=new it,In=new vs,ta=new vs,qe=new it,ys=class s extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(H_(t)?ha:ca)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Wn.makeRotationFromQuaternion(t),this.applyMatrix4(Wn),this}rotateX(t){return Wn.makeRotationX(t),this.applyMatrix4(Wn),this}rotateY(t){return Wn.makeRotationY(t),this.applyMatrix4(Wn),this}rotateZ(t){return Wn.makeRotationZ(t),this.applyMatrix4(Wn),this}translate(t,e,n){return Wn.makeTranslation(t,e,n),this.applyMatrix4(Wn),this}scale(t,e,n){return Wn.makeScale(t,e,n),this.applyMatrix4(Wn),this}lookAt(t){return Du.lookAt(t),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new jn(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(qe.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(qe),qe.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(qe)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){let n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ta.setFromBufferAttribute(a),this.morphTargetsRelative?(qe.addVectors(In.min,ta.min),In.expandByPoint(qe),qe.addVectors(In.max,ta.max),In.expandByPoint(qe)):(In.expandByPoint(ta.min),In.expandByPoint(ta.max))}In.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)qe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(qe));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)qe.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(t,c),qe.add(Qr)),i=Math.max(i,n.distanceToSquared(qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new bi(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)a[C]=new it,l[C]=new it;let h=new it,u=new it,d=new it,f=new le,p=new le,x=new le,m=new it,g=new it;function S(C,E,R){c[C]=c[E]=c[R]=1,h.fromBufferAttribute(n,C),u.fromBufferAttribute(n,E),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,R),u.sub(h),d.sub(h),p.sub(f),x.sub(f);let L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(m.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(L),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(L),a[C].add(m),a[E].add(m),a[R].add(m),l[C].add(g),l[E].add(g),l[R].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let C=0,E=P.length;C<E;++C){let R=P[C],L=R.start,G=R.count;for(let O=L,Z=L+G;O<Z;O+=3)S(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let T=new it,A=new it,D=new it,_=new it;function y(C){D.fromBufferAttribute(i,C),_.copy(D);let E=a[C];T.copy(E),T.sub(D.multiplyScalar(D.dot(E))).normalize(),A.crossVectors(_,E);let L=A.dot(l[C])<0?-1:1;o.setXYZW(C,T.x,T.y,T.z,L)}for(let C=0,E=n.count;C<E;++C)c[C]&&y(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new bi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new it,r=new it,o=new it,a=new it,l=new it,c=new it,h=new it,u=new it;if(t)for(let d=0,f=t.count;d<f;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)qe.fromBufferAttribute(t,e),qe.normalize(),t.setXYZ(e,qe.x,qe.y,qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[f++]}return new bi(d,h,u)}if(this.index===null)return Ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Iu=new it,ax=new it,lx=new Xt,ri=class{constructor(t=new it(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Iu.subVectors(n,e).cross(ax.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lx.getNormalMatrix(t),i=this.coplanarPoint(Iu).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},cx=0,Ci=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=po,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=qu,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pl,this.stencilZFail=Pl,this.stencilZPass=Pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ht(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Ht(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new $t().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ri().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new le().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new le().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qi=new it,Ou=new it,gl=new it,_l=new it,Xl=class{constructor(t=new it,e=new it(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qi.copy(this.origin).addScaledVector(this.direction,e),qi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ou.copy(t).add(e).multiplyScalar(.5),gl.copy(e).sub(t).normalize(),_l.copy(this.origin).sub(Ou);let r=t.distanceTo(e)*.5,o=-this.direction.dot(gl),a=_l.dot(this.direction),l=-_l.dot(gl),c=_l.lengthSq(),h=Math.abs(1-o*o),u,d,f,p;if(h>0)if(u=o*l-a,d=o*a-l,p=r*h,u>=0)if(d>=-p)if(d<=p){let x=1/h;u*=x,d*=x,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-p?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=p?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ou).addScaledVector(gl,d),f}intersectSphere(t,e){if(t.radius<0)return null;qi.subVectors(t.center,this.origin);let n=qi.dot(this.direction),i=qi.dot(qi)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qi)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,d=t.y-o.y,f=t.z-o.z,p=e.x-o.x,x=e.y-o.y,m=e.z-o.z,g=n.x-o.x,S=n.y-o.y,P=n.z-o.z,T=Math.abs(l),A=Math.abs(c),D=Math.abs(h),_,y,C,E,R,L,G,O,Z,$,z,F;if(T>=A&&T>=D?(C=l,L=u,Z=p,F=g,l>=0?(_=c,y=h,E=d,R=f,G=x,O=m,$=S,z=P):(_=h,y=c,E=f,R=d,G=m,O=x,$=P,z=S)):A>=D?(C=c,L=d,Z=x,F=S,c>=0?(_=h,y=l,E=f,R=u,G=m,O=p,$=P,z=g):(_=l,y=h,E=u,R=f,G=p,O=m,$=g,z=P)):(C=h,L=f,Z=m,F=P,h>=0?(_=l,y=c,E=u,R=d,G=p,O=x,$=g,z=S):(_=c,y=l,E=d,R=u,G=x,O=p,$=S,z=g)),C===0)return null;let B=_/C,J=y/C,nt=1/C,mt=E-B*L,St=R-J*L,ot=G-B*Z,_t=O-J*Z,vt=$-B*F,Pt=z-J*F,ht=vt*_t-Pt*ot,Bt=mt*Pt-St*vt,ee=ot*St-_t*mt;if(i){if(ht<0||Bt<0||ee<0)return null}else if((ht<0||Bt<0||ee<0)&&(ht>0||Bt>0||ee>0))return null;let kt=ht+Bt+ee;if(kt===0)return null;let se=nt*(ht*L+Bt*Z+ee*F);return(kt>0?se<0:se>0)?null:this.at(se/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qs=class extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Lp=new Ce,Ks=new Xl,xl=new co,Fp=new it,vl=new it,yl=new it,Sl=new it,Lu=new it,bl=new it,Np=new it,Ml=new it,Mn=class extends ln{constructor(t=new ys,e=new Qs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){bl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Lu.fromBufferAttribute(u,t),o?bl.addScaledVector(Lu,h):bl.addScaledVector(Lu.sub(e),h))}e.add(bl)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(r),Ks.copy(t.ray).recast(t.near),!(xl.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(xl,Fp)===null||Ks.origin.distanceToSquared(Fp)>(t.far-t.near)**2))&&(Lp.copy(r).invert(),Ks.copy(t.ray).applyMatrix4(Lp),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ks)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),P=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,A=P;T<A;T+=3){let D=a.getX(T),_=a.getX(T+1),y=a.getX(T+2);i=wl(this,g,t,n,c,h,u,D,_,y),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let S=a.getX(m),P=a.getX(m+1),T=a.getX(m+2);i=wl(this,o,t,n,c,h,u,S,P,T),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=o[m.materialIndex],S=Math.max(m.start,f.start),P=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let T=S,A=P;T<A;T+=3){let D=T,_=T+1,y=T+2;i=wl(this,g,t,n,c,h,u,D,_,y),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let S=m,P=m+1,T=m+2;i=wl(this,o,t,n,c,h,u,S,P,T),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function hx(s,t,e,n,i,r,o,a){let l;if(t.side===mn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Cs,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ml);return c<e.near||c>e.far?null:{distance:c,point:Ml.clone(),object:s}}function wl(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,vl),s.getVertexPosition(l,yl),s.getVertexPosition(c,Sl);let h=hx(s,t,e,n,vl,yl,Sl,Np);if(h){let u=new it;xs.getBarycoord(Np,vl,yl,Sl,u),i&&(h.uv=xs.getInterpolatedAttribute(i,a,l,c,u,new le)),r&&(h.uv1=xs.getInterpolatedAttribute(r,a,l,c,u,new le)),o&&(h.normal=xs.getInterpolatedAttribute(o,a,l,c,u,new it),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new it,materialIndex:0};xs.getNormal(vl,yl,Sl,d.normal),h.face=d,h.barycoord=u}return h}var jl=class extends pn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Ze,h=Ze,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=new co,ux=new le(.5,.5),Tl=new it,Ss=class{constructor(t=new ri,e=new ri,n=new ri,i=new ri,r=new ri,o=new ri){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Xn,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],S=r[12],P=r[13],T=r[14],A=r[15];if(i[0].setComponents(c-o,f-h,g-p,A-S).normalize(),i[1].setComponents(c+o,f+h,g+p,A+S).normalize(),i[2].setComponents(c+a,f+u,g+x,A+P).normalize(),i[3].setComponents(c-a,f-u,g-x,A-P).normalize(),n)i[4].setComponents(l,d,m,T).normalize(),i[5].setComponents(c-l,f-d,g-m,A-T).normalize();else if(i[4].setComponents(c-l,f-d,g-m,A-T).normalize(),e===Xn)i[5].setComponents(c+l,f+d,g+m,A+T).normalize();else if(e===ro)i[5].setComponents(l,d,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(t){$s.center.set(0,0,0);let e=ux.distanceTo(t.center);return $s.radius=.7071067811865476+e,$s.applyMatrix4(t.matrixWorld),this.intersectsSphere($s)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Tl.x=i.normal.x>0?t.max.x:t.min.x,Tl.y=i.normal.y>0?t.max.y:t.min.y,Tl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Up=new Ce,Yl=class s{constructor(){this.coordinateSystem=Xn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Up.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ss),n[i].setFromProjectionMatrix(Up,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ss),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var ua=class extends pn{constructor(t=[],e=rr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},tr=class extends pn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $i=class extends pn{constructor(t,e,n=ai,i,r,o,a=Ze,l=Ze,c,h=Ki,u=1){if(h!==Ki&&h!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ao(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},da=class extends $i{constructor(t,e=ai,n=rr,i,r,o=Ze,a=Ze,l,c=Ki){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fa=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fn=class s extends ys{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new jn(c,3)),this.setAttribute("normal",new jn(h,3)),this.setAttribute("uv",new jn(u,2));function p(x,m,g,S,P,T,A,D,_,y,C){let E=T/_,R=A/y,L=T/2,G=A/2,O=D/2,Z=_+1,$=y+1,z=0,F=0,B=new it;for(let J=0;J<$;J++){let nt=J*R-G;for(let mt=0;mt<Z;mt++){let St=mt*E-L;B[x]=St*S,B[m]=nt*P,B[g]=O,c.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[g]=D>0?1:-1,h.push(B.x,B.y,B.z),u.push(mt/_),u.push(1-J/y),z+=1}}for(let J=0;J<y;J++)for(let nt=0;nt<_;nt++){let mt=d+nt+Z*J,St=d+nt+Z*(J+1),ot=d+(nt+1)+Z*(J+1),_t=d+(nt+1)+Z*J;l.push(mt,St,_t),l.push(St,ot,_t),F+=6}a.addGroup(f,F,C),f+=F,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var bs=class s extends ys{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let S=g*d-o;for(let P=0;P<c;P++){let T=P*u-r;p.push(T,-S,0),x.push(0,0,1),m.push(P/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<a;S++){let P=S+c*g,T=S+c*(g+1),A=S+1+c*(g+1),D=S+1+c*g;f.push(P,T,D),f.push(T,A,D)}this.setIndex(f),this.setAttribute("position",new jn(p,3)),this.setAttribute("normal",new jn(x,3)),this.setAttribute("uv",new jn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var pa=class extends Ci{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new $t(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function ar(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Bp(i))i.isRenderTargetTexture?(Ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Bp(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function cn(s){let t={};for(let e=0;e<s.length;e++){let n=ar(s[e]);for(let i in n)t[i]=n[i]}return t}function Bp(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function dx(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var Pm={clone:ar,merge:cn},fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=dx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new $t().setHex(i.value);break;case"v2":this.uniforms[n].value=new le().fromArray(i.value);break;case"v3":this.uniforms[n].value=new it().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ce().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ql=class extends Ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ma=class extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ho=class extends Ci{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=cc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Zl=class extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jl=class extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function to(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Cl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ms=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Kl=class extends Ms{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uu,endingEnd:Uu}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bu:r=t,a=2*e-n;break;case ku:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bu:o=t,l=2*n-e;break;case ku:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,P=(-1-f)*m+(1.5+f)*x+.5*p,T=f*m-f*x;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+S*o[c+A]+P*o[l+A]+T*o[u+A];return r}},$l=class extends Ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Ql=class extends Ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},tc=class extends Ms{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(n-e)/(i-e),x=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*p;return r}let d=a*2,f=t-1;for(let p=0;p!==a;++p){let x=o[c+p],m=o[l+p],g=f*d+p*2,S=u[g],P=u[g+1],T=t*d+p*2,A=h[T],D=h[T+1],_=gx(n,e,S,A,i);r[p]=Dm(_,x,P,D,m)}return r}};function Dm(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function mx(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function gx(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=Dm(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=mx(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Nn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=to(e,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:to(t.times,Array),values:to(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Cl(t.settings)&&(n.settings={inTangents:to(t.settings.inTangents,Array),outTangents:to(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $l(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new tc(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case na:e=this.InterpolantFactoryMethodDiscrete;break;case zl:e=this.InterpolantFactoryMethodLinear;break;case Rl:e=this.InterpolantFactoryMethodSmooth;break;case Nu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ht("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return zl;case this.InterpolantFactoryMethodSmooth:return Rl;case this.InterpolantFactoryMethodBezier:return Nu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Cl(this.settings)&&(kp(this.settings.inTangents,t),kp(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Cl(this.settings)&&(zp(this.settings.inTangents,t),zp(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Wt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&W_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rl,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[d+p]||x!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Cl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function kp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function zp(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Nn.prototype.ValueTypeName="";Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=zl;var ws=class extends Nn{constructor(t,e,n){super(t,e,n)}};ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=na;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}};ec.prototype.ValueTypeName="color";var nc=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}};nc.prototype.ValueTypeName="number";var ic=class extends Ms{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)wi.slerpFlat(r,0,o,c-a,o,c,l);return r}},ga=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ic(this.times,this.values,this.getValueSize(),t)}};ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Ts=class extends Nn{constructor(t,e,n){super(t,e,n)}};Ts.prototype.ValueTypeName="string";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=na;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends Nn{constructor(t,e,n,i){super(t,e,n,i)}};sc.prototype.ValueTypeName="vector";var rc=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],p=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Im=new rc,oc=class{constructor(t){this.manager=t!==void 0?t:Im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var _a=class extends ln{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xa=class extends _a{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fu=new Ce,Vp=new it,Gp=new it,ac=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ss,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Vp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vp),Gp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gp),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Fu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===ro||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Fu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},El=new it,Al=new wi,yi=new it,va=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(El,Al,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,Al,yi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(El,Al,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(El,Al,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_s=new it,Hp=new le,Wp=new le,On=class extends va{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(pu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(pu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,e){return this.getViewBounds(t,Hp,Wp),e.subVectors(Wp,Hp)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(pu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var er=class extends va{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zu=class extends ac{constructor(){super(new er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends _a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new zu}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var eo=-90,no=1,uo=class extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new On(eo,no,t,e);i.layers=this.layers,this.add(i);let r=new On(eo,no,t,e);r.layers=this.layers,this.add(r);let o=new On(eo,no,t,e);o.layers=this.layers,this.add(o);let a=new On(eo,no,t,e);a.layers=this.layers,this.add(a);let l=new On(eo,no,t,e);l.layers=this.layers,this.add(l);let c=new On(eo,no,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},lc=class extends On{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var _d="\\[\\]\\.:\\/",_x=new RegExp("["+_d+"]","g"),xd="[^"+_d+"]",xx="[^"+_d.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",xd),yx=/(WCOD+)?/.source.replace("WCOD",xx),Sx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xd),bx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xd),Mx=new RegExp("^"+vx+yx+Sx+bx+"$"),wx=["material","materials","bones","map"],Vu=class{constructor(t,e,n){let i=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_x,"")}static parseTrackName(t){let e=Mx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=Vu;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yw=new Float32Array(1);var Gu=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};function vd(s,t,e,n){let i=Tx(n);switch(e){case ad:return s*t;case cd:return s*t/i.components*i.byteLength;case mc:return s*t/i.components*i.byteLength;case Es:return s*t*2/i.components*i.byteLength;case gc:return s*t*2/i.components*i.byteLength;case ld:return s*t*3/i.components*i.byteLength;case hi:return s*t*4/i.components*i.byteLength;case _c:return s*t*4/i.components*i.byteLength;case ba:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wa:case Ta:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vc:case Sc:return Math.max(s,16)*Math.max(t,8)/4;case xc:case yc:return Math.max(s,8)*Math.max(t,8)/2;case bc:case Mc:case Tc:case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wc:case Ca:case Ec:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Gc:case Hc:case Wc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Xc:case jc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ea:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tx(s){switch(s){case wn:case id:return{byteLength:1,components:1};case _o:case sd:case ci:return{byteLength:2,components:1};case fc:case pc:return{byteLength:2,components:4};case ai:case dc:case li:return{byteLength:4,components:1};case rd:case od:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function tg(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ex(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<u.length;f++){let p=u[d],x=u[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,p=u.length;f<p;f++){let x=u[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Px=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ix=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ux=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Kx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$x=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ev=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ov=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,av=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,vv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,yv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Av=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rv=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Uv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vv=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ty=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ny=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ry=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ly=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,my=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,by=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,My=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Cy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ay=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Py=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Iy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ly=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,By=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ky=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$y=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:Ax,alphahash_pars_fragment:Rx,alphamap_fragment:Px,alphamap_pars_fragment:Dx,alphatest_fragment:Ix,alphatest_pars_fragment:Ox,aomap_fragment:Lx,aomap_pars_fragment:Fx,batching_pars_vertex:Nx,batching_vertex:Ux,begin_vertex:Bx,beginnormal_vertex:kx,bsdfs:zx,iridescence_fragment:Vx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Hx,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:Xx,clipping_planes_vertex:jx,color_fragment:Yx,color_pars_fragment:qx,color_pars_vertex:Zx,color_vertex:Jx,common:Kx,defaultnormal_vertex:$x,displacementmap_pars_vertex:Qx,displacementmap_vertex:tv,emissivemap_fragment:ev,emissivemap_pars_fragment:nv,colorspace_fragment:iv,colorspace_pars_fragment:sv,envmap_fragment:rv,envmap_common_pars_fragment:ov,envmap_pars_fragment:av,envmap_pars_vertex:lv,envmap_physical_pars_fragment:vv,envmap_vertex:cv,fog_vertex:hv,fog_pars_vertex:uv,fog_fragment:dv,fog_pars_fragment:fv,gradientmap_pars_fragment:pv,lightmap_pars_fragment:mv,lights_lambert_fragment:gv,lights_lambert_pars_fragment:_v,lights_pars_begin:xv,lights_toon_fragment:yv,lights_toon_pars_fragment:Sv,lights_phong_fragment:bv,lights_phong_pars_fragment:Mv,lights_physical_fragment:wv,lights_physical_pars_fragment:Tv,lights_fragment_begin:Cv,lights_fragment_maps:Ev,lights_fragment_end:Av,lightprobes_pars_fragment:Rv,logdepthbuf_fragment:Pv,logdepthbuf_pars_fragment:Dv,logdepthbuf_pars_vertex:Iv,logdepthbuf_vertex:Ov,map_fragment:Lv,map_pars_fragment:Fv,map_particle_fragment:Nv,map_particle_pars_fragment:Uv,metalnessmap_fragment:Bv,metalnessmap_pars_fragment:kv,morphinstance_vertex:zv,morphcolor_vertex:Vv,morphnormal_vertex:Gv,morphtarget_pars_vertex:Hv,morphtarget_vertex:Wv,normal_fragment_begin:Xv,normal_fragment_maps:jv,normal_pars_fragment:Yv,normal_pars_vertex:qv,normal_vertex:Zv,normalmap_pars_fragment:Jv,clearcoat_normal_fragment_begin:Kv,clearcoat_normal_fragment_maps:$v,clearcoat_pars_fragment:Qv,iridescence_pars_fragment:ty,opaque_fragment:ey,packing:ny,premultiplied_alpha_fragment:iy,project_vertex:sy,dithering_fragment:ry,dithering_pars_fragment:oy,roughnessmap_fragment:ay,roughnessmap_pars_fragment:ly,shadowmap_pars_fragment:cy,shadowmap_pars_vertex:hy,shadowmap_vertex:uy,shadowmask_pars_fragment:dy,skinbase_vertex:fy,skinning_pars_vertex:py,skinning_vertex:my,skinnormal_vertex:gy,specularmap_fragment:_y,specularmap_pars_fragment:xy,tonemapping_fragment:vy,tonemapping_pars_fragment:yy,transmission_fragment:Sy,transmission_pars_fragment:by,uv_pars_fragment:My,uv_pars_vertex:wy,uv_vertex:Ty,worldpos_vertex:Cy,background_vert:Ey,background_frag:Ay,backgroundCube_vert:Ry,backgroundCube_frag:Py,cube_vert:Dy,cube_frag:Iy,depth_vert:Oy,depth_frag:Ly,distance_vert:Fy,distance_frag:Ny,equirect_vert:Uy,equirect_frag:By,linedashed_vert:ky,linedashed_frag:zy,meshbasic_vert:Vy,meshbasic_frag:Gy,meshlambert_vert:Hy,meshlambert_frag:Wy,meshmatcap_vert:Xy,meshmatcap_frag:jy,meshnormal_vert:Yy,meshnormal_frag:qy,meshphong_vert:Zy,meshphong_frag:Jy,meshphysical_vert:Ky,meshphysical_frag:$y,meshtoon_vert:Qy,meshtoon_frag:tS,points_vert:eS,points_frag:nS,shadow_vert:iS,shadow_frag:sS,sprite_vert:rS,sprite_frag:oS},Tt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Pi={basic:{uniforms:cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:cn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:cn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:cn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:cn([Tt.points,Tt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:cn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:cn([Tt.common,Tt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:cn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:cn([Tt.sprite,Tt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:cn([Tt.common,Tt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:cn([Tt.lights,Tt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Pi.physical={uniforms:cn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var qc={r:0,b:0,g:0},aS=new Ce,eg=new Xt;eg.set(-1,0,0,0,1,0,0,0,1);function lS(s,t,e,n,i,r){let o=new $t(0),a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(S){let P=S.isScene===!0?S.background:null;if(P&&P.isTexture){let T=S.backgroundBlurriness>0;P=t.get(P,T)}return P}function p(S){let P=!1,T=f(S);T===null?m(o,a):T&&T.isColor&&(m(T,1),P=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||P)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,P){let T=f(P);T&&T.isCubeTexture?(c===void 0&&(c=new Mn(new Fn(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:ar(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,D,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(aS.makeRotationFromEuler(P.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(eg),c.material.toneMapped=ae.getTransfer(T.colorSpace)!==fe,(h!==T||u!==T.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=T,u=T.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Mn(new bs(2,2),new Ei({name:"BackgroundMaterial",uniforms:ar(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,l.material.toneMapped=ae.getTransfer(T.colorSpace)!==fe,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||u!==T.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=T,u=T.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,P){S.getRGB(qc,gd(s)),e.buffers.color.setClear(qc.r,qc.g,qc.b,P,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,P=1){o.set(S),a=P,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:p,addToRenderList:x,dispose:g}}function cS(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(R,L,G,O,Z){let $=!1,z=u(R,O,G,L);r!==z&&(r=z,c(r.object)),$=f(R,O,G,Z),$&&p(R,O,G,Z),Z!==null&&t.update(Z,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,T(R,L,G,O),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return s.createVertexArray()}function c(R){return s.bindVertexArray(R)}function h(R){return s.deleteVertexArray(R)}function u(R,L,G,O){let Z=O.wireframe===!0,$=n[L.id];$===void 0&&($={},n[L.id]=$);let z=R.isInstancedMesh===!0?R.id:0,F=$[z];F===void 0&&(F={},$[z]=F);let B=F[G.id];B===void 0&&(B={},F[G.id]=B);let J=B[Z];return J===void 0&&(J=d(l()),B[Z]=J),J}function d(R){let L=[],G=[],O=[];for(let Z=0;Z<e;Z++)L[Z]=0,G[Z]=0,O[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:O,object:R,attributes:{},index:null}}function f(R,L,G,O){let Z=r.attributes,$=L.attributes,z=0,F=G.getAttributes();for(let B in F)if(F[B].location>=0){let nt=Z[B],mt=$[B];if(mt===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor)),nt===void 0||nt.attribute!==mt||mt&&nt.data!==mt.data)return!0;z++}return r.attributesNum!==z||r.index!==O}function p(R,L,G,O){let Z={},$=L.attributes,z=0,F=G.getAttributes();for(let B in F)if(F[B].location>=0){let nt=$[B];nt===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor));let mt={};mt.attribute=nt,nt&&nt.data&&(mt.data=nt.data),Z[B]=mt,z++}r.attributes=Z,r.attributesNum=z,r.index=O}function x(){let R=r.newAttributes;for(let L=0,G=R.length;L<G;L++)R[L]=0}function m(R){g(R,0)}function g(R,L){let G=r.newAttributes,O=r.enabledAttributes,Z=r.attributeDivisors;G[R]=1,O[R]===0&&(s.enableVertexAttribArray(R),O[R]=1),Z[R]!==L&&(s.vertexAttribDivisor(R,L),Z[R]=L)}function S(){let R=r.newAttributes,L=r.enabledAttributes;for(let G=0,O=L.length;G<O;G++)L[G]!==R[G]&&(s.disableVertexAttribArray(G),L[G]=0)}function P(R,L,G,O,Z,$,z){z===!0?s.vertexAttribIPointer(R,L,G,Z,$):s.vertexAttribPointer(R,L,G,O,Z,$)}function T(R,L,G,O){x();let Z=O.attributes,$=G.getAttributes(),z=L.defaultAttributeValues;for(let F in $){let B=$[F];if(B.location>=0){let J=Z[F];if(J===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){let nt=J.normalized,mt=J.itemSize,St=t.get(J);if(St===void 0)continue;let ot=St.buffer,_t=St.type,vt=St.bytesPerElement,Pt=_t===s.INT||_t===s.UNSIGNED_INT||J.gpuType===dc;if(J.isInterleavedBufferAttribute){let ht=J.data,Bt=ht.isInterleavedBuffer===!0?ht.stride:ht.itemSize,ee=J.offset;if(ht.isInstancedInterleavedBuffer||ht.isInstancedBufferAttribute){for(let kt=0;kt<B.locationSize;kt++)g(B.location+kt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<B.locationSize;kt++)m(B.location+kt);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let kt=0;kt<B.locationSize;kt++)P(B.location+kt,mt/B.locationSize,_t,nt,Bt*vt,(ee+mt/B.locationSize*kt)*vt,Pt)}else{if(J.isInstancedBufferAttribute){for(let ht=0;ht<B.locationSize;ht++)g(B.location+ht,J.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ht=0;ht<B.locationSize;ht++)m(B.location+ht);s.bindBuffer(s.ARRAY_BUFFER,ot);for(let ht=0;ht<B.locationSize;ht++)P(B.location+ht,mt/B.locationSize,_t,nt,mt*vt,mt/B.locationSize*ht*vt,Pt)}}else if(z!==void 0){let nt=z[F];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(B.location,nt);break;case 3:s.vertexAttrib3fv(B.location,nt);break;case 4:s.vertexAttrib4fv(B.location,nt);break;default:s.vertexAttrib1fv(B.location,nt)}}}}S()}function A(){C();for(let R in n){let L=n[R];for(let G in L){let O=L[G];for(let Z in O){let $=O[Z];for(let z in $)h($[z].object),delete $[z];delete O[Z]}}delete n[R]}}function D(R){if(n[R.id]===void 0)return;let L=n[R.id];for(let G in L){let O=L[G];for(let Z in O){let $=O[Z];for(let z in $)h($[z].object),delete $[z];delete O[Z]}}delete n[R.id]}function _(R){for(let L in n){let G=n[L];for(let O in G){let Z=G[O];if(Z[R.id]===void 0)continue;let $=Z[R.id];for(let z in $)h($[z].object),delete $[z];delete Z[R.id]}}}function y(R){for(let L in n){let G=n[L],O=R.isInstancedMesh===!0?R.id:0,Z=G[O];if(Z!==void 0){for(let $ in Z){let z=Z[$];for(let F in z)h(z[F].object),delete z[F];delete Z[$]}delete G[O],Object.keys(G).length===0&&delete n[L]}}}function C(){E(),o=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfObject:y,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function hS(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];e.update(d,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function uS(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(_){return!(_!==hi&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let y=_===ci&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==wn&&_!==li&&!y&&n.convert(_)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&Ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&Ht("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:P,maxFragmentUniforms:T,maxSamples:A,samples:D}}function dS(s){let t=this,e=null,n=0,i=!1,r=!1,o=new ri,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let p=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,P=S*4,T=g.clippingState||null;l.value=T,T=h(p,d,P,f);for(let A=0;A!==P;++A)T[A]=e[A];g.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,p){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let P=0,T=f;P!==x;++P,T+=4)o.copy(u[P]).applyMatrix4(S,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Ia=class extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ua(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fn(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ir});r.uniforms.tEquirect.value=e;let o=new Mn(i,r),a=e.minFilter;return e.minFilter===oi&&(e.minFilter=tn),new uo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Om=256,fS=3,pS=20,ng=256,ig=16,mS=3,gS=new it,_S=new $t,vo=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uo(1,10,null),this._boxMesh=new Mn(new Fn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=gS}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(_S));let m=new uo(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Om,Am(t))}_fromTexture(t,e){t.mapping===rr||t.mapping===mo?this._setSize(t.image.length===0?Om:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Lm(t,!1,!1),n=Math.log2(t)-fS;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Lm(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===rr||t.mapping===mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fm()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=xS(),this._integrationMaterial=vS());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ig);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-mS)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(ng*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=yS());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Lm(s,t,e){return new Ia(s,{minFilter:oi,generateMipmaps:t,type:ci,colorSpace:ia,depthBuffer:e})}function Oa(s,t,e){return new Ei({name:s,uniforms:t,vertexShader:Qt.cube_vert,fragmentShader:e,side:mn,blending:ir,depthTest:!1,depthWrite:!1})}function xS(){return Oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ng}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vS(){return Oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ig}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function yS(){return Oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${pS}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Fm(){return Oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Nm(){return Oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function SS(s){let t=new WeakMap,e=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===go||f===hc)if(t.has(d)){let p=t.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new Ia(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===go||f===hc,x=f===rr||f===mo;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new vo(s)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let S=d.image;return p&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new vo(s)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function a(d,f){return f===go?d.mapping=rr:f===hc&&(d.mapping=mo),d}function l(d){let f=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function bS(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&ea("WebGLRenderer: "+n+" extension not supported."),i}}}function MS(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return i[x.id]!==void 0||(x.addEventListener("dispose",a),i[x.id]=new WeakRef(x),o.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let m in x)t.update(x[m],s.ARRAY_BUFFER)}function u(p){let x=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let S=x!==null?x.array.length:m.array.length/3-1,P=m.count>=65535?ha:ca,T=new P(Math.ceil(S/3)*6,1),A=T.array;if(x!==null){let _=x.array;g=x.version;for(let y=0,C=0;y<S;y+=3){let E=_[y+0],R=_[y+1],L=_[y+2];A[C++]=E,A[C++]=R,A[C++]=R,A[C++]=L,A[C++]=L,A[C++]=E}}else{g=m.version;for(let _=0,y=0;_<S;_+=3){let C=_+0,E=_+1,R=_+2;A[y++]=C,A[y++]=E,A[y++]=E,A[y++]=R,A[y++]=R,A[y++]=C}}T.version=g;let D=r.get(p);D&&t.remove(D),r.set(p,T)}function d(p){let x=r.get(p);if(x){let m=p.index;m!==null&&x.version<m.version&&u(p)}else u(p);return r.get(p)}function f(){for(let p in i){let x=i[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function wS(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){s.drawElements(n,d,r,u*o),e.update(d,n,1)}function c(u,d,f){f!==0&&(s.drawElementsInstanced(n,d,r,u*o,f),e.update(d,n,f))}function h(u,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];e.update(x,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function TS(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Wt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function CS(s,t,e){let n=new WeakMap,i=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let C=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",C)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],P=0;f===!0&&(P=1),p===!0&&(P=2),x===!0&&(P=3);let T=a.attributes.position.count*P,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let D=new Float32Array(T*A*4*u),_=new oa(D,T,A,u);_.type=li,_.needsUpdate=!0;let y=P*4;for(let E=0;E<u;E++){let R=m[E],L=g[E],G=S[E],O=T*A*4*E;for(let Z=0;Z<R.count;Z++){let $=Z*y;f===!0&&(i.fromBufferAttribute(R,Z),D[O+$+0]=i.x,D[O+$+1]=i.y,D[O+$+2]=i.z,D[O+$+3]=0),p===!0&&(i.fromBufferAttribute(L,Z),D[O+$+4]=i.x,D[O+$+5]=i.y,D[O+$+6]=i.z,D[O+$+7]=0),x===!0&&(i.fromBufferAttribute(G,Z),D[O+$+8]=i.x,D[O+$+9]=i.y,D[O+$+10]=i.z,D[O+$+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new le(T,A)},n.set(a,d),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ES(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var AS={[Zu]:"LINEAR_TONE_MAPPING",[Ju]:"REINHARD_TONE_MAPPING",[Ku]:"CINEON_TONE_MAPPING",[$u]:"ACES_FILMIC_TONE_MAPPING",[td]:"AGX_TONE_MAPPING",[ed]:"NEUTRAL_TONE_MAPPING",[Qu]:"CUSTOM_TONE_MAPPING"};function RS(s,t,e,n,i,r){let o=new Ln(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new ys;h.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new jn([0,2,0,0,2,0],2));let u=new ql({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Mn(h,u),f=new er(-1,1,1,-1,0,1),p=null,x=null,m=!1,g,S=null,P=[],T=!1;this.setSize=function(A,D){o.setSize(A,D),a!==null&&a.setSize(A,D),l!==null&&l.setSize(A,D);for(let _=0;_<P.length;_++){let y=P[_];y.setSize&&y.setSize(A,D)}},this.setEffects=function(A){P=A,T=P.length>0&&P[0].isRenderPass===!0;let D=o.width,_=o.height;P.length>0&&a===null&&(a=new Ln(D,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(D,_,{type:ci,depthBuffer:!1,stencilBuffer:!1}));let y=i===!0&&P.some(C=>C.needsDepthTexture===!0);y!==(o.depthTexture!==null)&&(y===!0&&c===null&&(c=new $i(D,_),r===!0&&(c.format=Qi,c.type=or)),o.dispose(),o.depthTexture=y?c:null,o.resolveDepthBuffer=y,o.storeMultisampledDepthBuffer=y);for(let C=0;C<P.length;C++){let E=P[C];E.setSize&&E.setSize(D,_),y&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(A,D){if(m||A.toneMapping===Yn&&P.length===0)return!1;if(S=D,D!==null){let _=D.width,y=D.height;(o.width!==_||o.height!==y)&&this.setSize(_,y)}return T===!1&&A.setRenderTarget(o),g=A.toneMapping,A.toneMapping=Yn,!0},this.hasRenderPass=function(){return T},this.end=function(A,D){A.toneMapping=g,m=!0;let _=o,y=a;for(let C=0;C<P.length;C++){let E=P[C];E.enabled!==!1&&(E.render(A,y,_,D),E.needsSwap!==!1&&(_=y,y=y===a?l:a))}if(p!==A.outputColorSpace||x!==A.toneMapping){p=A.outputColorSpace,x=A.toneMapping,u.defines={},ae.getTransfer(p)===fe&&(u.defines.SRGB_TRANSFER="");let C=AS[x];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(S),A.render(d,f),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var sg=new pn,rg=new $i(1,1),og=new da(1),ag=new oa,lg=new Wl,cg=new ua,Um=[],Bm=[],km=new Float32Array(16),zm=new Float32Array(9),Vm=new Float32Array(4);function yo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Um[i];if(r===void 0&&(r=new Float32Array(i),Um[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ge(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Kc(s,t){let e=Bm[t];e===void 0&&(e=new Int32Array(t),Bm[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function PS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function DS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),Ge(e,t)}}function IS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),Ge(e,t)}}function OS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),Ge(e,t)}}function LS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;Vm.set(n),s.uniformMatrix2fv(this.addr,!1,Vm),Ge(e,n)}}function FS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;zm.set(n),s.uniformMatrix3fv(this.addr,!1,zm),Ge(e,n)}}function NS(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;km.set(n),s.uniformMatrix4fv(this.addr,!1,km),Ge(e,n)}}function US(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function BS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),Ge(e,t)}}function kS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),Ge(e,t)}}function zS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),Ge(e,t)}}function VS(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function GS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),Ge(e,t)}}function HS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),Ge(e,t)}}function WS(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),Ge(e,t)}}function $c(s){return s.version===0&&(s.compareFunction=dd,s.needsUpdate=!0),s}function XS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=$c(rg):r=sg,e.setTexture2D(t||r,i)}function jS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lg,i)}function YS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=$c(og):r=cg,e.setTextureCube(t||r,i)}function qS(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ag,i)}function ZS(s){switch(s){case 5126:return PS;case 35664:return DS;case 35665:return IS;case 35666:return OS;case 35674:return LS;case 35675:return FS;case 35676:return NS;case 5124:case 35670:return US;case 35667:case 35671:return BS;case 35668:case 35672:return kS;case 35669:case 35673:return zS;case 5125:return VS;case 36294:return GS;case 36295:return HS;case 36296:return WS;case 35678:case 36198:case 36298:case 36306:case 35682:return XS;case 35679:case 36299:case 36307:return jS;case 35680:case 36300:case 36308:case 36293:return YS;case 36289:case 36303:case 36311:case 36292:return qS}}function JS(s,t){s.uniform1fv(this.addr,t)}function KS(s,t){let e=yo(t,this.size,2);s.uniform2fv(this.addr,e)}function $S(s,t){let e=yo(t,this.size,3);s.uniform3fv(this.addr,e)}function QS(s,t){let e=yo(t,this.size,4);s.uniform4fv(this.addr,e)}function tb(s,t){let e=yo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function eb(s,t){let e=yo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function nb(s,t){let e=yo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ib(s,t){s.uniform1iv(this.addr,t)}function sb(s,t){s.uniform2iv(this.addr,t)}function rb(s,t){s.uniform3iv(this.addr,t)}function ob(s,t){s.uniform4iv(this.addr,t)}function ab(s,t){s.uniform1uiv(this.addr,t)}function lb(s,t){s.uniform2uiv(this.addr,t)}function cb(s,t){s.uniform3uiv(this.addr,t)}function hb(s,t){s.uniform4uiv(this.addr,t)}function ub(s,t,e){let n=this.cache,i=t.length,r=Kc(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=$c(rg):o=sg;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function db(s,t,e){let n=this.cache,i=t.length,r=Kc(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||lg,r[o])}function fb(s,t,e){let n=this.cache,i=t.length,r=Kc(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=$c(og):o=cg;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function pb(s,t,e){let n=this.cache,i=t.length,r=Kc(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ag,r[o])}function mb(s){switch(s){case 5126:return JS;case 35664:return KS;case 35665:return $S;case 35666:return QS;case 35674:return tb;case 35675:return eb;case 35676:return nb;case 5124:case 35670:return ib;case 35667:case 35671:return sb;case 35668:case 35672:return rb;case 35669:case 35673:return ob;case 5125:return ab;case 36294:return lb;case 36295:return cb;case 36296:return hb;case 35678:case 36198:case 36298:case 36306:case 35682:return ub;case 35679:case 36299:case 36307:return db;case 35680:case 36300:case 36308:case 36293:return fb;case 36289:case 36303:case 36311:case 36292:return pb}}var bd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ZS(e.type)}},Md=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mb(e.type)}},wd=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},yd=/(\w+)(\])?(\[|\.)?/g;function Gm(s,t){s.seq.push(t),s.map[t.id]=t}function gb(s,t,e){let n=s.name,i=n.length;for(yd.lastIndex=0;;){let r=yd.exec(n),o=yd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Gm(e,c===void 0?new bd(a,s,t):new Md(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new wd(a),Gm(e,u)),e=u}}}var xo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);gb(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Hm(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var _b=37297,xb=0;function vb(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Wm=new Xt;function yb(s){ae._getMatrix(Wm,ae.workingColorSpace,s);let t=`mat3( ${Wm.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case sa:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return Ht("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Xm(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+vb(s.getShaderSource(t),a)}else return r}function Sb(s,t){let e=yb(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var bb={[Zu]:"Linear",[Ju]:"Reinhard",[Ku]:"Cineon",[$u]:"ACESFilmic",[td]:"AgX",[ed]:"Neutral",[Qu]:"Custom"};function Mb(s,t){let e=bb[t];return e===void 0?(Ht("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zc=new it;function wb(){ae.getLuminanceCoefficients(Zc);let s=Zc.x.toFixed(4),t=Zc.y.toFixed(4),e=Zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function Cb(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eb(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Da(s){return s!==""}function jm(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ym(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ab=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(s){return s.replace(Ab,Rb)}function Rb(s,t){let e=Qt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Td(e)}var Pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qm(s){return s.replace(Pb,Db)}function Db(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Zm(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ib={[nr]:"SHADOWMAP_TYPE_PCF",[fo]:"SHADOWMAP_TYPE_VSM"};function Ob(s){return Ib[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lb={[mo]:"ENVMAP_MODE_REFRACTION"};function Fb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Lb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nb={[cc]:"ENVMAP_BLENDING_MULTIPLY",[dm]:"ENVMAP_BLENDING_MIX",[fm]:"ENVMAP_BLENDING_ADD"};function Ub(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Nb[s.combine]||"ENVMAP_BLENDING_NONE"}function Bb(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ob(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Fb(e),u=Ub(e),d=Tb(e),f=Cb(r),p=i.createProgram(),x,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Da).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Da).join(`
`),m.length>0&&(m+=`
`)):(x=[Zm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),m=[Zm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Mb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Sb("linearToOutputTexel",e.outputColorSpace),wb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Da).join(`
`)),o=Td(o),o=jm(o,e),o=Ym(o,e),a=Td(a),a=jm(a,e),a=Ym(a,e),o=qm(o),a=qm(a),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=g+x+o,P=g+m+a,T=Hm(i,i.VERTEX_SHADER,S),A=Hm(i,i.FRAGMENT_SHADER,P);i.attachShader(p,T),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(E){if(s.debug.checkShaderErrors){let R=i.getProgramInfoLog(p)||"",L=i.getShaderInfoLog(T)||"",G=i.getShaderInfoLog(A)||"",O=R.trim(),Z=L.trim(),$=G.trim(),z=!0,F=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,T,A);else{let B=Xm(i,T,"vertex"),J=Xm(i,A,"fragment");Wt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+O+`
`+B+`
`+J)}else O!==""?Ht("WebGLProgram: Program Info Log:",O):(Z===""||$==="")&&(F=!1);F&&(E.diagnostics={runnable:z,programLog:O,vertexShader:{log:Z,prefix:x},fragmentShader:{log:$,prefix:m}})}i.deleteShader(T),i.deleteShader(A),_=new xo(i,p),y=Eb(i,p)}let _;this.getUniforms=function(){return _===void 0&&D(this),_};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(p,_b)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xb++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=A,this}var kb=0,Cd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ed(t),e.set(t,n)),n}},Ed=class{constructor(t){this.id=kb++,this.code=t,this.usedTimes=0}};function zb(s){return s===Es||s===Ca||s===Ea}function Vb(s,t,e,n,i,r){let o=new aa,a=new Cd,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,y,C,E,R,L){let G=E.fog,O=R.geometry,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=t.get(_.envMap||Z,$),F=d[_.type],B=n.precision;_.precision!==null&&(B=n.getMaxPrecision(_.precision),B!==_.precision&&Ht("WebGLProgram.getParameters:",_.precision,"not supported, using",B,"instead."));let J=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=J!==void 0?J.length:0,mt=0;O.morphAttributes.position!==void 0&&(mt=1),O.morphAttributes.normal!==void 0&&(mt=2),O.morphAttributes.color!==void 0&&(mt=3);let St,ot,_t,vt;if(F){let ut=Pi[F];St=ut.vertexShader,ot=ut.fragmentShader}else{St=_.vertexShader,ot=_.fragmentShader;let ut=a.getVertexShaderStage(_),jt=a.getFragmentShaderStage(_);a.update(_,ut,jt),_t=ut.id,vt=jt.id}let Pt=s.getRenderTarget(),ht=s.state.buffers.depth.getReversed(),Bt=R.isInstancedMesh===!0,ee=R.isBatchedMesh===!0,kt=!!_.map,se=!!_.matcap,Kt=!!z,Yt=Kt&&z.isPMREMTexture===!0,we=!!_.aoMap,ge=!!_.lightMap,ze=!!_.bumpMap&&_.wireframe===!1,me=!!_.normalMap,bn=!!_.displacementMap,Te=!!_.emissiveMap,dn=!!_.metalnessMap,Rt=!!_.roughnessMap,Vt=_.anisotropy>0,H=_.clearcoat>0,_e=_.diffuseRoughness>0,zt=_.dispersion>0,ne=_.retroreflectivity>0,ft=_.iridescence>0,xe=_.sheen>0,Lt=_.transmission>0,Dt=Vt&&!!_.anisotropyMap,I=H&&!!_.clearcoatMap,b=H&&!!_.clearcoatNormalMap,Q=H&&!!_.clearcoatRoughnessMap,pt=_e&&!!_.diffuseRoughnessMap,ct=ft&&!!_.iridescenceMap,xt=ft&&!!_.iridescenceThicknessMap,gt=xe&&!!_.sheenColorMap,at=xe&&!!_.sheenRoughnessMap,lt=!!_.specularMap,yt=!!_.specularColorMap,k=!!_.specularIntensityMap,v=Lt&&!!_.transmissionMap,M=Lt&&!!_.thicknessMap,N=!!_.gradientMap,U=!!_.alphaMap,q=_.alphaTest>0,V=!!_.alphaHash,K=!!_.extensions,Y=Yn;_.toneMapped&&(Pt===null||Pt.isXRRenderTarget===!0)&&(Y=s.toneMapping);let dt=Yt?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,It={shaderID:F,shaderType:_.type,shaderName:_.name,vertexShader:St,fragmentShader:ot,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:vt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:B,batching:ee,batchingColor:ee&&R._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&R.instanceColor!==null,instancingMorph:Bt&&R.morphTexture!==null,outputColorSpace:Pt===null?s.outputColorSpace:Pt.isXRRenderTarget===!0?Pt.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:kt,matcap:se,envMap:Kt,envMapMode:Kt&&z.mapping,envMapPMREM:Yt,envMapMaxLod:Yt?dt.length-1:null,envMapSize:Yt?dt[0].width:null,aoMap:we,lightMap:ge,bumpMap:ze,normalMap:me,displacementMap:bn,emissiveMap:Te,normalMapObjectSpace:me&&_.normalMapType===gm,normalMapTangentSpace:me&&_.normalMapType===Aa,packedNormalMap:me&&_.normalMapType===Aa&&zb(_.normalMap.format),metalnessMap:dn,roughnessMap:Rt,anisotropy:Vt,anisotropyMap:Dt,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:b,clearcoatRoughnessMap:Q,diffuseRoughness:_e,diffuseRoughnessMap:pt,dispersion:zt,retroreflection:ne,iridescence:ft,iridescenceMap:ct,iridescenceThicknessMap:xt,sheen:xe,sheenColorMap:gt,sheenRoughnessMap:at,specularMap:lt,specularColorMap:yt,specularIntensityMap:k,transmission:Lt,transmissionMap:v,thicknessMap:M,gradientMap:N,opaque:_.transparent===!1&&_.blending===po&&_.alphaToCoverage===!1,alphaMap:U,alphaTest:q,alphaHash:V,combine:_.combine,mapUv:kt&&f(_.map.channel),aoMapUv:we&&f(_.aoMap.channel),lightMapUv:ge&&f(_.lightMap.channel),bumpMapUv:ze&&f(_.bumpMap.channel),normalMapUv:me&&f(_.normalMap.channel),displacementMapUv:bn&&f(_.displacementMap.channel),emissiveMapUv:Te&&f(_.emissiveMap.channel),metalnessMapUv:dn&&f(_.metalnessMap.channel),roughnessMapUv:Rt&&f(_.roughnessMap.channel),anisotropyMapUv:Dt&&f(_.anisotropyMap.channel),clearcoatMapUv:I&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ct&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:at&&f(_.sheenRoughnessMap.channel),specularMapUv:lt&&f(_.specularMap.channel),specularColorMapUv:yt&&f(_.specularColorMap.channel),specularIntensityMapUv:k&&f(_.specularIntensityMap.channel),transmissionMapUv:v&&f(_.transmissionMap.channel),thicknessMapUv:M&&f(_.thicknessMap.channel),alphaMapUv:U&&f(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(me||Vt),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!O.attributes.uv&&(kt||U),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ht,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:mt,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:L.filter(ut=>ut.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:Y,decodeVideoTexture:kt&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===fe,decodeVideoTextureEmissive:Te&&_.emissiveMap.isVideoTexture===!0&&ae.getTransfer(_.emissiveMap.colorSpace)===fe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ai,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:K&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(K&&_.extensions.multiDraw===!0||ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function x(_){let y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)y.push(C),y.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(m(y,_),g(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function m(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapPMREM),_.push(y.envMapMaxLod),_.push(y.envMapSize),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.diffuseRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.numSunLights),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numSunLightShadows),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.numLightProbeGrids),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function g(_,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.retroreflection&&o.enable(24),y.diffuseRoughness&&o.enable(25),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),y.packedNormalMap&&o.enable(22),y.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),y.numLightProbeGrids>0&&o.enable(22),y.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){let y=d[_.type],C;if(y){let E=Pi[y];C=Pm.clone(E.uniforms)}else C=_.uniforms;return C}function P(_,y){let C=h.get(y);return C!==void 0?++C.usedTimes:(C=new Bb(s,y,_,i),c.push(C),h.set(y,C)),C}function T(_){if(--_.usedTimes===0){let y=c.indexOf(_);c[y]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function D(){a.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:S,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:D}}function Gb(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Hb(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Jm(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Km(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,x,m,g){let S=s[t];return S===void 0?(S={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[t]=S):(S.id=d.id,S.object=d,S.geometry=f,S.material=p,S.materialVariant=o(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=m,S.group=g),t++,S}function l(d,f,p,x,m,g,S){S.reversedDepth===!0&&(m=-m);let P=a(d,f,p,x,m,g);p.transmission>0?n.push(P):p.transparent===!0?i.push(P):e.push(P)}function c(d,f,p,x,m,g){let S=a(d,f,p,x,m,g);p.transmission>0?n.unshift(S):p.transparent===!0?i.unshift(S):e.unshift(S)}function h(d,f){e.length>1&&e.sort(d||Hb),n.length>1&&n.sort(f||Jm),i.length>1&&i.sort(f||Jm)}function u(){for(let d=t,f=s.length;d<f;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:u,sort:h}}function Wb(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Km,s.set(n,[o])):i>=r.length?(o=new Km,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new it,color:new $t};break;case"SpotLight":e={position:new it,direction:new it,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new it,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new it,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new it,halfWidth:new it,halfHeight:new it};break}return s[t.id]=e,e}}}function jb(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Yb=0;function qb(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Zb(s){let t=new Xb,e=jb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new it);let i=new it,r=new Ce,o=new Ce;function a(c){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,S=0,P=0,T=0,A=0,D=0,_=0,y=0,C=0,E=0;c.sort(qb);for(let L=0,G=c.length;L<G;L++){let O=c[L],Z=O.color,$=O.intensity,z=O.distance,F=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Es?F=O.shadow.map.texture:F=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)h+=Z.r*$,u+=Z.g*$,d+=Z.b*$;else if(O.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(O.sh.coefficients[B],$);E++}else if(O.isSunLight){let B=t.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let J=O.shadow,nt=e.get(O);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=nt,n.sunShadowMap[p]=F;let mt=J.getViewportCount();for(let St=0;St<mt;St++)n.sunShadowMatrix[x+St]=J.getMatrix(St),n.sunShadowCascade[x+St]=J._cascadeData[St];x+=mt,p++}n.sun[f]=B,f++}else if(O.isDirectionalLight){let B=t.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let J=O.shadow,nt=e.get(O);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,n.directionalShadow[m]=nt,n.directionalShadowMap[m]=F,n.directionalShadowMatrix[m]=O.shadow.matrix,A++}n.directional[m]=B,m++}else if(O.isSpotLight){let B=t.get(O);B.position.setFromMatrixPosition(O.matrixWorld),B.color.copy(Z).multiplyScalar($),B.distance=z,B.coneCos=Math.cos(O.angle),B.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),B.decay=O.decay,n.spot[S]=B;let J=O.shadow;if(O.map&&(n.spotLightMap[y]=O.map,y++,J.updateMatrices(O),O.castShadow&&C++),n.spotLightMatrix[S]=J.matrix,O.castShadow){let nt=e.get(O);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,n.spotShadow[S]=nt,n.spotShadowMap[S]=F,_++}S++}else if(O.isRectAreaLight){let B=t.get(O);B.color.copy(Z).multiplyScalar($),B.halfWidth.set(O.width*.5,0,0),B.halfHeight.set(0,O.height*.5,0),n.rectArea[P]=B,P++}else if(O.isPointLight){let B=t.get(O);if(B.color.copy(O.color).multiplyScalar(O.intensity),B.distance=O.distance,B.decay=O.decay,O.castShadow){let J=O.shadow,nt=e.get(O);nt.shadowIntensity=J.intensity,nt.shadowBias=J.bias,nt.shadowNormalBias=J.normalBias,nt.shadowRadius=J.radius,nt.shadowMapSize=J.mapSize,nt.shadowCameraNear=J.camera.near,nt.shadowCameraFar=J.camera.far,n.pointShadow[g]=nt,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=O.shadow.matrix,D++}n.point[g]=B,g++}else if(O.isHemisphereLight){let B=t.get(O);B.skyColor.copy(O.color).multiplyScalar($),B.groundColor.copy(O.groundColor).multiplyScalar($),n.hemi[T]=B,T++}}P>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.sunLength!==f||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==S||R.rectAreaLength!==P||R.hemiLength!==T||R.numSunShadows!==p||R.numDirectionalShadows!==A||R.numPointShadows!==D||R.numSpotShadows!==_||R.numSpotMaps!==y||R.numLightProbes!==E)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=P,n.point.length=g,n.hemi.length=T,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=D,n.pointShadowMap.length=D,n.pointShadowMatrix.length=D,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+y-C,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,R.sunLength=f,R.directionalLength=m,R.pointLength=g,R.spotLength=S,R.rectAreaLength=P,R.hemiLength=T,R.numSunShadows=p,R.numDirectionalShadows=A,R.numPointShadows=D,R.numSpotShadows=_,R.numSpotMaps=y,R.numLightProbes=E,n.version=Yb++)}function l(c,h){let u=0,d=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let S=0,P=c.length;S<P;S++){let T=c[S];if(T.isSunLight){let A=n.sun[u];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(g),u++}else if(T.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(g),d++}else if(T.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(g),p++}else if(T.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),o.identity(),r.copy(T.matrixWorld),r.premultiply(g),o.extractRotation(r),A.halfWidth.set(T.width*.5,0,0),A.halfHeight.set(0,T.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(T.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(T.matrixWorld),A.position.applyMatrix4(g),f++}else if(T.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(T.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function $m(s){let t=new Zb(s),e=[],n=[],i=[];function r(u){h.camera=u,e.length=0,n.length=0,i.length=0}function o(u){u.isLightProbeGrid?i.push(u):e.push(u)}function a(u){n.push(u)}function l(){t.setup(e),i.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Jb(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new $m(s),t.set(i,[a])):r>=o.length?(a=new $m(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qb=[new it(1,0,0),new it(-1,0,0),new it(0,1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1)],t1=[new it(0,-1,0),new it(0,-1,0),new it(0,0,1),new it(0,0,-1),new it(0,-1,0),new it(0,-1,0)],Qm=new Ce,Pa=new it,Sd=new it;function e1(s,t,e){let n=new Ss,i=new le,r=new le,o=new Ee,a=new Zl,l=new Jl,c={},h=e.maxTextureSize,u={[Cs]:mn,[mn]:Cs,[Ai]:Ai},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Kb,fragmentShader:$b}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new ys;p.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Mn(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nr;let g=this.type;this.render=function(D,_,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;this.type===Yp&&(Ht("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=nr);let C=s.getRenderTarget(),E=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),L=s.state;L.setBlending(ir),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let G=g!==this.type;G&&_.traverse(function(O){O.material&&(Array.isArray(O.material)?O.material.forEach(Z=>Z.needsUpdate=!0):O.material.needsUpdate=!0)});for(let O=0,Z=D.length;O<Z;O++){let $=D[O],z=$.shadow;if(z===void 0){Ht("WebGLShadowMap:",$,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let F=z.getFrameExtents();i.multiply(F),r.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/F.x),i.x=r.x*F.x,z.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/F.y),i.y=r.y*F.y,z.mapSize.y=r.y));let B=s.state.buffers.depth.getReversed();if(z.camera._reversedDepth=B,z.map===null||G===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===fo){if($.isPointLight){Ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Ln(i.x,i.y,{format:Es,type:ci,minFilter:tn,magFilter:tn,generateMipmaps:!1}),z.map.texture.name=$.name+".shadowMap",z.map.depthTexture=new $i(i.x,i.y,li),z.map.depthTexture.name=$.name+".shadowMapDepth",z.map.depthTexture.format=Ki,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ze,z.map.depthTexture.magFilter=Ze}else $.isPointLight?(z.map=new Ia(i.x),z.map.depthTexture=new da(i.x,ai)):(z.map=new Ln(i.x,i.y),z.map.depthTexture=new $i(i.x,i.y,ai)),z.map.depthTexture.name=$.name+".shadowMap",z.map.depthTexture.format=Ki,this.type===nr?(z.map.depthTexture.compareFunction=B?ud:hd,z.map.depthTexture.minFilter=tn,z.map.depthTexture.magFilter=tn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ze,z.map.depthTexture.magFilter=Ze);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let J=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();$.isPointLight!==!0&&z.updateMatrices($,y);let nt=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:y.layers;for(let mt=0;mt<J;mt++){let St=z.getCamera(mt);if($.isPointLight){let ot=z.camera,_t=z.matrix,vt=$.distance||ot.far;vt!==ot.far&&(ot.far=vt,ot.updateProjectionMatrix()),Pa.setFromMatrixPosition($.matrixWorld),ot.position.copy(Pa),Sd.copy(ot.position),Sd.add(Qb[mt]),ot.up.copy(t1[mt]),ot.lookAt(Sd),ot.updateMatrixWorld(),_t.makeTranslation(-Pa.x,-Pa.y,-Pa.z),Qm.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Qm,ot.coordinateSystem,ot.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)s.setRenderTarget(z.map,mt),s.clear();else{mt===0&&(s.setRenderTarget(z.map),s.clear());let ot=z.getViewport(mt);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),L.viewport(o)}n=z.getFrustum(mt),T(_,y,St,$,nt,this.type)}z.isPointLightShadow!==!0&&this.type===fo&&S(z,y),z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,E,R)};function S(D,_){let y=t.update(x);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,f.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),D.mapPass===null?D.mapPass=new Ln(i.x,i.y,{format:Es,type:ci}):(D.mapPass.width!==D.map.width||D.mapPass.height!==D.map.height)&&D.mapPass.setSize(D.map.width,D.map.height),d.uniforms.shadow_pass.value=D.map.depthTexture,d.uniforms.resolution.value.set(D.map.width,D.map.height),d.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(_,null,y,d,x,null),f.uniforms.shadow_pass.value=D.mapPass.texture,f.uniforms.resolution.value.set(D.map.width,D.map.height),f.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(_,null,y,f,x,null)}function P(D,_,y,C){let E=null,R=y.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)E=R;else if(E=y.isPointLight===!0?l:a,s.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let L=E.uuid,G=_.uuid,O=c[L];O===void 0&&(O={},c[L]=O);let Z=O[G];Z===void 0&&(Z=E.clone(),O[G]=Z,_.addEventListener("dispose",A)),E=Z}if(E.visible=_.visible,E.wireframe=_.wireframe,C===fo?E.side=_.shadowSide!==null?_.shadowSide:_.side:E.side=_.shadowSide!==null?_.shadowSide:u[_.side],E.alphaMap=_.alphaMap,E.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,E.map=_.map,E.clipShadows=_.clipShadows,E.clippingPlanes=_.clippingPlanes,E.clipIntersection=_.clipIntersection,E.displacementMap=_.displacementMap,E.displacementScale=_.displacementScale,E.displacementBias=_.displacementBias,E.wireframeLinewidth=_.wireframeLinewidth,E.linewidth=_.linewidth,y.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let L=s.properties.get(E);L.light=y}return E}function T(D,_,y,C,E,R){if(D.visible===!1)return;if(D.layers.test(E)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===fo)&&(!D.frustumCulled||D.intersectsFrustum(n))){D.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,D.matrixWorld);let O=t.update(D),Z=D.material;if(Array.isArray(Z)){let $=O.groups;for(let z=0,F=$.length;z<F;z++){let B=$[z],J=Z[B.materialIndex];if(J&&J.visible){let nt=P(D,J,C,R);D.onBeforeShadow(s,D,_,y,O,nt,B),s.renderBufferDirect(y,null,O,nt,D,B),D.onAfterShadow(s,D,_,y,O,nt,B)}}}else if(Z.visible){let $=P(D,Z,C,R);D.onBeforeShadow(s,D,_,y,O,$,null),s.renderBufferDirect(y,null,O,$,D,null),D.onAfterShadow(s,D,_,y,O,$,null)}}let G=D.children;for(let O=0,Z=G.length;O<Z;O++)T(G[O],_,y,C,E,R)}function A(D){D.target.removeEventListener("dispose",A);for(let y in c){let C=c[y],E=D.target.uuid;E in C&&(C[E].dispose(),delete C[E])}}}function n1(s,t){function e(){let k=!1,v=new Ee,M=null,N=new Ee(0,0,0,0);return{setMask:function(U){M!==U&&!k&&(s.colorMask(U,U,U,U),M=U)},setLocked:function(U){k=U},setClear:function(U,q,V,K,Y){Y===!0&&(U*=K,q*=K,V*=K),v.set(U,q,V,K),N.equals(v)===!1&&(s.clearColor(U,q,V,K),N.copy(v))},reset:function(){k=!1,M=null,N.set(-1,0,0,0)}}}function n(){let k=!1,v=!1,M=null,N=null,U=null;return{setReversed:function(q){if(v!==q){let V=t.get("EXT_clip_control");q?V.clipControlEXT(V.LOWER_LEFT_EXT,V.ZERO_TO_ONE_EXT):V.clipControlEXT(V.LOWER_LEFT_EXT,V.NEGATIVE_ONE_TO_ONE_EXT),v=q;let K=U;U=null,this.setClear(K)}},getReversed:function(){return v},setTest:function(q){q?ht(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(q){M!==q&&!k&&(s.depthMask(q),M=q)},setFunc:function(q){if(v&&(q=Em[q]),N!==q){switch(q){case Dl:s.depthFunc(s.NEVER);break;case Il:s.depthFunc(s.ALWAYS);break;case Ol:s.depthFunc(s.LESS);break;case so:s.depthFunc(s.LEQUAL);break;case Ll:s.depthFunc(s.EQUAL);break;case Fl:s.depthFunc(s.GEQUAL);break;case Nl:s.depthFunc(s.GREATER);break;case Ul:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}N=q}},setLocked:function(q){k=q},setClear:function(q){U!==q&&(U=q,v&&(q=1-q),s.clearDepth(q))},reset:function(){k=!1,M=null,N=null,U=null,v=!1}}}function i(){let k=!1,v=null,M=null,N=null,U=null,q=null,V=null,K=null,Y=null;return{setTest:function(dt){k||(dt?ht(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(dt){v!==dt&&!k&&(s.stencilMask(dt),v=dt)},setFunc:function(dt,It,ut){(M!==dt||N!==It||U!==ut)&&(s.stencilFunc(dt,It,ut),M=dt,N=It,U=ut)},setOp:function(dt,It,ut){(q!==dt||V!==It||K!==ut)&&(s.stencilOp(dt,It,ut),q=dt,V=It,K=ut)},setLocked:function(dt){k=dt},setClear:function(dt){Y!==dt&&(s.clearStencil(dt),Y=dt)},reset:function(){k=!1,v=null,M=null,N=null,U=null,q=null,V=null,K=null,Y=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,p=[],x=null,m=!1,g=null,S=null,P=null,T=null,A=null,D=null,_=null,y=new $t(0,0,0),C=0,E=!1,R=null,L=null,G=null,O=null,Z=null,$=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,F=0,B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(B)[1]),z=F>=1):B.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),z=F>=2);let J=null,nt={},mt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),ot=new Ee().fromArray(mt),_t=new Ee().fromArray(St);function vt(k,v,M,N){let U=new Uint8Array(4),q=s.createTexture();s.bindTexture(k,q),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let V=0;V<M;V++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(v,0,s.RGBA,1,1,N,0,s.RGBA,s.UNSIGNED_BYTE,U):s.texImage2D(v+V,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,U);return q}let Pt={};Pt[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Pt[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(s.DEPTH_TEST),o.setFunc(so),ze(!1),me(Hu),ht(s.CULL_FACE),we(ir);function ht(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function Bt(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function ee(k,v){return d[k]!==v?(s.bindFramebuffer(k,v),d[k]=v,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=v),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=v),!0):!1}function kt(k,v){let M=p,N=!1;if(k){M=f.get(v),M===void 0&&(M=[],f.set(v,M));let U=k.textures;if(M.length!==U.length||M[0]!==s.COLOR_ATTACHMENT0){for(let q=0,V=U.length;q<V;q++)M[q]=s.COLOR_ATTACHMENT0+q;M.length=U.length,N=!0}}else M[0]!==s.BACK&&(M[0]=s.BACK,N=!0);N&&s.drawBuffers(M)}function se(k){return x!==k?(s.useProgram(k),x=k,!0):!1}let Kt={[sr]:s.FUNC_ADD,[Zp]:s.FUNC_SUBTRACT,[Jp]:s.FUNC_REVERSE_SUBTRACT};Kt[Kp]=s.MIN,Kt[$p]=s.MAX;let Yt={[Qp]:s.ZERO,[tm]:s.ONE,[em]:s.SRC_COLOR,[Yu]:s.SRC_ALPHA,[am]:s.SRC_ALPHA_SATURATE,[rm]:s.DST_COLOR,[im]:s.DST_ALPHA,[nm]:s.ONE_MINUS_SRC_COLOR,[qu]:s.ONE_MINUS_SRC_ALPHA,[om]:s.ONE_MINUS_DST_COLOR,[sm]:s.ONE_MINUS_DST_ALPHA,[lm]:s.CONSTANT_COLOR,[cm]:s.ONE_MINUS_CONSTANT_COLOR,[hm]:s.CONSTANT_ALPHA,[um]:s.ONE_MINUS_CONSTANT_ALPHA};function we(k,v,M,N,U,q,V,K,Y,dt){if(k===ir){m===!0&&(Bt(s.BLEND),m=!1);return}if(m===!1&&(ht(s.BLEND),m=!0),k!==qp){if(k!==g||dt!==E){if((S!==sr||A!==sr)&&(s.blendEquation(s.FUNC_ADD),S=sr,A=sr),dt)switch(k){case po:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wu:s.blendFunc(s.ONE,s.ONE);break;case Xu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ju:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",k);break}else switch(k){case po:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wu:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Xu:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ju:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",k);break}P=null,T=null,D=null,_=null,y.set(0,0,0),C=0,g=k,E=dt}return}U=U||v,q=q||M,V=V||N,(v!==S||U!==A)&&(s.blendEquationSeparate(Kt[v],Kt[U]),S=v,A=U),(M!==P||N!==T||q!==D||V!==_)&&(s.blendFuncSeparate(Yt[M],Yt[N],Yt[q],Yt[V]),P=M,T=N,D=q,_=V),(K.equals(y)===!1||Y!==C)&&(s.blendColor(K.r,K.g,K.b,Y),y.copy(K),C=Y),g=k,E=!1}function ge(k,v){k.side===Ai?Bt(s.CULL_FACE):ht(s.CULL_FACE);let M=k.side===mn;v&&(M=!M),ze(M),k.blending===po&&k.transparent===!1?we(ir):we(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let N=k.stencilWrite;a.setTest(N),N&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Te(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ht(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function ze(k){R!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),R=k)}function me(k){k!==Xp?(ht(s.CULL_FACE),k!==L&&(k===Hu?s.cullFace(s.BACK):k===jp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),L=k}function bn(k){k!==G&&(z&&s.lineWidth(k),G=k)}function Te(k,v,M){k?(ht(s.POLYGON_OFFSET_FILL),(O!==v||Z!==M)&&(O=v,Z=M,o.getReversed()&&(v=-v,M=-M),s.polygonOffset(v,M))):Bt(s.POLYGON_OFFSET_FILL)}function dn(k){k?ht(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function Rt(k){k===void 0&&(k=s.TEXTURE0+$-1),J!==k&&(s.activeTexture(k),J=k)}function Vt(k,v,M){M===void 0&&(J===null?M=s.TEXTURE0+$-1:M=J);let N=nt[M];N===void 0&&(N={type:void 0,texture:void 0},nt[M]=N),(N.type!==k||N.texture!==v)&&(J!==M&&(s.activeTexture(M),J=M),s.bindTexture(k,v||Pt[k]),N.type=k,N.texture=v)}function H(){let k=nt[J];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function _e(){try{s.compressedTexImage2D(...arguments)}catch(k){Wt("WebGLState:",k)}}function zt(){try{s.compressedTexImage3D(...arguments)}catch(k){Wt("WebGLState:",k)}}function ne(){try{s.texSubImage2D(...arguments)}catch(k){Wt("WebGLState:",k)}}function ft(){try{s.texSubImage3D(...arguments)}catch(k){Wt("WebGLState:",k)}}function xe(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Wt("WebGLState:",k)}}function Lt(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Wt("WebGLState:",k)}}function Dt(){try{s.texStorage2D(...arguments)}catch(k){Wt("WebGLState:",k)}}function I(){try{s.texStorage3D(...arguments)}catch(k){Wt("WebGLState:",k)}}function b(){try{s.texImage2D(...arguments)}catch(k){Wt("WebGLState:",k)}}function Q(){try{s.texImage3D(...arguments)}catch(k){Wt("WebGLState:",k)}}function pt(k){return u[k]!==void 0?u[k]:s.getParameter(k)}function ct(k,v){u[k]!==v&&(s.pixelStorei(k,v),u[k]=v)}function xt(k){ot.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ot.copy(k))}function gt(k){_t.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),_t.copy(k))}function at(k,v){let M=c.get(v);M===void 0&&(M=new WeakMap,c.set(v,M));let N=M.get(k);N===void 0&&(N=s.getUniformBlockIndex(v,k.name),s.uniformBlockBinding(v,N,N),M.set(k,N))}function lt(k,v,M){let U=c.get(v).get(k);l[U]!==M&&(s.bindBufferBase(s.UNIFORM_BUFFER,U,M),l[U]=M)}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,nt={},d={},l={},f=new WeakMap,p=[],x=null,m=!1,g=null,S=null,P=null,T=null,A=null,D=null,_=null,y=new $t(0,0,0),C=0,E=!1,R=null,L=null,G=null,O=null,Z=null,ot.set(0,0,s.canvas.width,s.canvas.height),_t.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Bt,bindFramebuffer:ee,drawBuffers:kt,useProgram:se,setBlending:we,setMaterial:ge,setFlipSided:ze,setCullFace:me,setLineWidth:bn,setPolygonOffset:Te,setScissorTest:dn,activeTexture:Rt,bindTexture:Vt,unbindTexture:H,compressedTexImage2D:_e,compressedTexImage3D:zt,texImage2D:b,texImage3D:Q,pixelStorei:ct,getParameter:pt,updateUBOMapping:at,uniformBlockBinding:lt,texStorage2D:Dt,texStorage3D:I,texSubImage2D:ne,texSubImage3D:ft,compressedTexSubImage2D:xe,compressedTexSubImage3D:Lt,scissor:xt,viewport:gt,reset:yt}}function i1(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,u=new Set,d,f=new WeakMap,p=new Set,x=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,b){return m?new OffscreenCanvas(I,b):ra("canvas")}function S(I,b,Q){let pt=1,ct=Dt(I);if((ct.width>Q||ct.height>Q)&&(pt=Q/Math.max(ct.width,ct.height)),pt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let xt=Math.floor(pt*ct.width),gt=Math.floor(pt*ct.height);d===void 0&&(d=g(xt,gt));let at=b?g(xt,gt):d;return at.width=xt,at.height=gt,at.getContext("2d").drawImage(I,0,0,xt,gt),Ht("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+xt+"x"+gt+")."),at}else return"data"in I&&Ht("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),I;return I}function P(I){return I.generateMipmaps}function T(I){s.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(I,b,Q,pt,ct,xt=!1){if(I!==null){if(s[I]!==void 0)return s[I];Ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let gt;pt&&(gt=t.get("EXT_texture_norm16"),gt||Ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let at=b;if(b===s.RED&&(Q===s.FLOAT&&(at=s.R32F),Q===s.HALF_FLOAT&&(at=s.R16F),Q===s.UNSIGNED_BYTE&&(at=s.R8),Q===s.UNSIGNED_SHORT&&gt&&(at=gt.R16_EXT),Q===s.SHORT&&gt&&(at=gt.R16_SNORM_EXT)),b===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(at=s.R8UI),Q===s.UNSIGNED_SHORT&&(at=s.R16UI),Q===s.UNSIGNED_INT&&(at=s.R32UI),Q===s.BYTE&&(at=s.R8I),Q===s.SHORT&&(at=s.R16I),Q===s.INT&&(at=s.R32I)),b===s.RG&&(Q===s.FLOAT&&(at=s.RG32F),Q===s.HALF_FLOAT&&(at=s.RG16F),Q===s.UNSIGNED_BYTE&&(at=s.RG8),Q===s.UNSIGNED_SHORT&&gt&&(at=gt.RG16_EXT),Q===s.SHORT&&gt&&(at=gt.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(at=s.RG8UI),Q===s.UNSIGNED_SHORT&&(at=s.RG16UI),Q===s.UNSIGNED_INT&&(at=s.RG32UI),Q===s.BYTE&&(at=s.RG8I),Q===s.SHORT&&(at=s.RG16I),Q===s.INT&&(at=s.RG32I)),b===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(at=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(at=s.RGB16UI),Q===s.UNSIGNED_INT&&(at=s.RGB32UI),Q===s.BYTE&&(at=s.RGB8I),Q===s.SHORT&&(at=s.RGB16I),Q===s.INT&&(at=s.RGB32I)),b===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),Q===s.UNSIGNED_INT&&(at=s.RGBA32UI),Q===s.BYTE&&(at=s.RGBA8I),Q===s.SHORT&&(at=s.RGBA16I),Q===s.INT&&(at=s.RGBA32I)),b===s.RGB&&(Q===s.UNSIGNED_SHORT&&gt&&(at=gt.RGB16_EXT),Q===s.SHORT&&gt&&(at=gt.RGB16_SNORM_EXT),Q===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),Q===s.UNSIGNED_INT_10F_11F_11F_REV&&(at=s.R11F_G11F_B10F)),b===s.RGBA){let lt=xt?sa:ae.getTransfer(ct);Q===s.FLOAT&&(at=s.RGBA32F),Q===s.HALF_FLOAT&&(at=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(at=lt===fe?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT&&gt&&(at=gt.RGBA16_EXT),Q===s.SHORT&&gt&&(at=gt.RGBA16_SNORM_EXT),Q===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function _(I,b){let Q;return I?b===null||b===ai||b===or?Q=s.DEPTH24_STENCIL8:b===li?Q=s.DEPTH32F_STENCIL8:b===_o&&(Q=s.DEPTH24_STENCIL8,Ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ai||b===or?Q=s.DEPTH_COMPONENT24:b===li?Q=s.DEPTH_COMPONENT32F:b===_o&&(Q=s.DEPTH_COMPONENT16),Q}function y(I,b){return P(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ze&&I.minFilter!==tn?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function C(I){let b=new WeakRef(I);n.get(I).__ref=b,p.add(b),x.register(I,b,b)}function E(I){let b=n.get(I).__ref;b!==void 0&&(p.delete(b),x.unregister(b))}function R(I){G(I.target)}function L(I){O(I.target)}function G(I){I.removeEventListener("dispose",R),E(I),$(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function O(I){I.removeEventListener("dispose",L),E(I),F(I)}function Z(){for(let I of p){let b=I.deref();b!==void 0&&(b.isRenderTarget===!0?O(b):G(b))}p.clear(),u.clear()}function $(I){let b=n.get(I);if(b.__webglInit===void 0)return;let Q=I.source,pt=f.get(Q);if(pt){let ct=pt[b.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&z(I),Object.keys(pt).length===0&&f.delete(Q)}n.remove(I)}function z(I){let b=n.get(I);s.deleteTexture(b.__webglTexture);let Q=I.source,pt=f.get(Q);delete pt[b.__cacheKey],o.memory.textures--}function F(I){let b=n.get(I);b.__depthDisposeCallback&&b.__depthDisposeCallback();let Q=I.depthTexture;if(Q&&Q.renderTarget===I&&G(Q),I.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++){if(Array.isArray(b.__webglFramebuffer[ct]))for(let xt=0;xt<b.__webglFramebuffer[ct].length;xt++)s.deleteFramebuffer(b.__webglFramebuffer[ct][xt]);else s.deleteFramebuffer(b.__webglFramebuffer[ct]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ct])}else{if(Array.isArray(b.__webglFramebuffer))for(let ct=0;ct<b.__webglFramebuffer.length;ct++)s.deleteFramebuffer(b.__webglFramebuffer[ct]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ct=0;ct<b.__webglColorRenderbuffer.length;ct++)b.__webglColorRenderbuffer[ct]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ct]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let pt=I.textures;for(let ct=0,xt=pt.length;ct<xt;ct++){let gt=n.get(pt[ct]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(pt[ct])}n.remove(I)}let B=0;function J(){B=0}function nt(){return B}function mt(I){B=I}function St(){let I=B;return I>=i.maxTextures&&Ht("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),B+=1,I}function ot(I){let b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.mipmapsAutoUpdate),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function _t(I,b){let Q=n.get(I);if(I.isVideoTexture&&xe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Q.__version!==I.version){let pt=I.image;if(pt===null)Ht("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)Ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(Q,I,b);return}}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+b)}function vt(I,b){let Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){ge(Q,I,b);return}else I.isExternalTexture&&(Q.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+b)}function Pt(I,b){let Q=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Q.__version!==I.version){ge(Q,I,b);return}e.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+b)}function ht(I,b){let Q=n.get(I);if(I.version>0&&Q.__version!==I.version){ze(Q,I,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+b)}let Bt={[Bl]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[kl]:s.MIRRORED_REPEAT},ee={[Ze]:s.NEAREST,[pm]:s.NEAREST_MIPMAP_NEAREST,[Sa]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[uc]:s.LINEAR_MIPMAP_NEAREST,[oi]:s.LINEAR_MIPMAP_LINEAR},kt={[xm]:s.NEVER,[dd]:s.ALWAYS,[vm]:s.LESS,[hd]:s.LEQUAL,[ym]:s.EQUAL,[ud]:s.GEQUAL,[Sm]:s.GREATER,[bm]:s.NOTEQUAL};function se(I,b){if(b.type===li&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===tn||b.magFilter===uc||b.magFilter===Sa||b.magFilter===oi||b.minFilter===tn||b.minFilter===uc||b.minFilter===Sa||b.minFilter===oi)&&Ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Bt[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Bt[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Bt[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ee[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ee[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,kt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ze||b.minFilter!==Sa&&b.minFilter!==oi||b.type===li&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Kt(I,b){let Q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",R),C(b));let pt=b.source,ct=f.get(pt);ct===void 0&&(ct={},f.set(pt,ct));let xt=ot(b);if(xt!==I.__cacheKey){ct[xt]===void 0&&(ct[xt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ct[xt].usedTimes++;let gt=ct[I.__cacheKey];gt!==void 0&&(ct[I.__cacheKey].usedTimes--,gt.usedTimes===0&&z(b)),I.__cacheKey=xt,I.__webglTexture=ct[xt].texture}return Q}function Yt(I,b,Q){return Math.floor(Math.floor(I/Q)/b)}function we(I,b,Q,pt){let xt=I.updateRanges;if(xt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,Q,pt,b.data);else{xt.sort((k,v)=>k.start-v.start);let gt=0;for(let k=1;k<xt.length;k++){let v=xt[gt],M=xt[k],N=v.start+v.count,U=Yt(M.start,b.width,4),q=Yt(v.start,b.width,4);M.start<=N+1&&U===q&&Yt(M.start+M.count-1,b.width,4)===U?v.count=Math.max(v.count,M.start+M.count-v.start):(++gt,xt[gt]=M)}xt.length=gt+1;let at=e.getParameter(s.UNPACK_ROW_LENGTH),lt=e.getParameter(s.UNPACK_SKIP_PIXELS),yt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let k=0,v=xt.length;k<v;k++){let M=xt[k],N=Math.floor(M.start/4),U=Math.ceil(M.count/4),q=N%b.width,V=Math.floor(N/b.width),K=U,Y=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,q),e.pixelStorei(s.UNPACK_SKIP_ROWS,V),e.texSubImage2D(s.TEXTURE_2D,0,q,V,K,Y,Q,pt,b.data)}I.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,at),e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function ge(I,b,Q){let pt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=s.TEXTURE_3D);let ct=Kt(I,b),xt=b.source;e.bindTexture(pt,I.__webglTexture,s.TEXTURE0+Q);let gt=n.get(xt);if(xt.version!==gt.__version||ct===!0){if(e.activeTexture(s.TEXTURE0+Q),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let Y=ae.getPrimaries(ae.workingColorSpace),dt=b.colorSpace===ts?null:ae.getPrimaries(b.colorSpace),It=b.colorSpace===ts||Y===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It)}e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let lt=S(b.image,!1,i.maxTextureSize);lt=Lt(b,lt);let yt=r.convert(b.format,b.colorSpace),k=r.convert(b.type),v=D(b.internalFormat,yt,k,b.normalized,b.colorSpace,b.isVideoTexture);se(pt,b);let M,N=b.mipmaps,U=b.isVideoTexture!==!0,q=gt.__version===void 0||ct===!0,V=xt.dataReady,K=y(b,lt);if(b.isDepthTexture)v=_(b.format===Qi,b.type),q&&(U?e.texStorage2D(s.TEXTURE_2D,1,v,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,v,lt.width,lt.height,0,yt,k,null));else if(b.isDataTexture)if(N.length>0){U&&q&&e.texStorage2D(s.TEXTURE_2D,K,v,N[0].width,N[0].height);for(let Y=0,dt=N.length;Y<dt;Y++)M=N[Y],U?V&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,M.width,M.height,yt,k,M.data):e.texImage2D(s.TEXTURE_2D,Y,v,M.width,M.height,0,yt,k,M.data);b.generateMipmaps=!1}else U?(q&&e.texStorage2D(s.TEXTURE_2D,K,v,lt.width,lt.height),V&&we(b,lt,yt,k)):e.texImage2D(s.TEXTURE_2D,0,v,lt.width,lt.height,0,yt,k,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&q&&e.texStorage3D(s.TEXTURE_2D_ARRAY,K,v,N[0].width,N[0].height,lt.depth);for(let Y=0,dt=N.length;Y<dt;Y++)if(M=N[Y],b.format!==hi)if(yt!==null)if(U){if(V)if(b.layerUpdates.size>0){let It=vd(M.width,M.height,b.format,b.type);for(let ut of b.layerUpdates){let jt=M.data.subarray(ut*It/M.data.BYTES_PER_ELEMENT,(ut+1)*It/M.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,ut,M.width,M.height,1,yt,jt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,M.width,M.height,lt.depth,yt,M.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,v,M.width,M.height,lt.depth,0,M.data,0,0);else Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?V&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,M.width,M.height,lt.depth,yt,k,M.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Y,v,M.width,M.height,lt.depth,0,yt,k,M.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{U&&q&&e.texStorage2D(s.TEXTURE_2D,K,v,N[0].width,N[0].height);for(let Y=0,dt=N.length;Y<dt;Y++)M=N[Y],b.format!==hi?yt!==null?U?V&&e.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,M.width,M.height,yt,M.data):e.compressedTexImage2D(s.TEXTURE_2D,Y,v,M.width,M.height,0,M.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?V&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,M.width,M.height,yt,k,M.data):e.texImage2D(s.TEXTURE_2D,Y,v,M.width,M.height,0,yt,k,M.data)}else if(b.isDataArrayTexture)if(U){if(q&&e.texStorage3D(s.TEXTURE_2D_ARRAY,K,v,lt.width,lt.height,lt.depth),V)if(b.layerUpdates.size>0){let Y=vd(lt.width,lt.height,b.format,b.type);for(let dt of b.layerUpdates){let It=lt.data.subarray(dt*Y/lt.data.BYTES_PER_ELEMENT,(dt+1)*Y/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,lt.width,lt.height,1,yt,k,It)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,yt,k,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,v,lt.width,lt.height,lt.depth,0,yt,k,lt.data);else if(b.isData3DTexture)U?(q&&e.texStorage3D(s.TEXTURE_3D,K,v,lt.width,lt.height,lt.depth),V&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,yt,k,lt.data)):e.texImage3D(s.TEXTURE_3D,0,v,lt.width,lt.height,lt.depth,0,yt,k,lt.data);else if(b.isFramebufferTexture){if(q)if(U)e.texStorage2D(s.TEXTURE_2D,K,v,lt.width,lt.height);else{let Y=lt.width,dt=lt.height;for(let It=0;It<K;It++)e.texImage2D(s.TEXTURE_2D,It,v,Y,dt,0,yt,k,null),Y>>=1,dt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){let Y=s.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),lt.parentNode!==Y){Y.appendChild(lt),u.add(b),Y.onpaint=dt=>{let It=dt.changedElements;for(let ut of u)It.includes(ut.image)&&(ut.needsUpdate=!0)},Y.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,lt);else{let It=s.RGBA,ut=s.RGBA,jt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,It,ut,jt,lt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(N.length>0){if(U&&q){let Y=Dt(N[0]);e.texStorage2D(s.TEXTURE_2D,K,v,Y.width,Y.height)}for(let Y=0,dt=N.length;Y<dt;Y++)M=N[Y],U?V&&e.texSubImage2D(s.TEXTURE_2D,Y,0,0,yt,k,M):e.texImage2D(s.TEXTURE_2D,Y,v,yt,k,M);b.generateMipmaps=!1}else if(U){if(q){let Y=Dt(lt);e.texStorage2D(s.TEXTURE_2D,K,v,Y.width,Y.height)}V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,k,lt)}else e.texImage2D(s.TEXTURE_2D,0,v,yt,k,lt);P(b)&&b.mipmapsAutoUpdate===!0&&T(pt),gt.__version=xt.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ze(I,b,Q){if(b.image.length!==6)return;let pt=Kt(I,b),ct=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Q);let xt=n.get(ct);if(ct.version!==xt.__version||pt===!0){e.activeTexture(s.TEXTURE0+Q);let gt=ae.getPrimaries(ae.workingColorSpace),at=b.colorSpace===ts?null:ae.getPrimaries(b.colorSpace),lt=b.colorSpace===ts||gt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let yt=b.isCompressedTexture||b.image[0].isCompressedTexture,k=b.image[0]&&b.image[0].isDataTexture,v=[];for(let ut=0;ut<6;ut++)!yt&&!k?v[ut]=S(b.image[ut],!0,i.maxCubemapSize):v[ut]=k?b.image[ut].image:b.image[ut],v[ut]=Lt(b,v[ut]);let M=v[0],N=r.convert(b.format,b.colorSpace),U=r.convert(b.type),q=D(b.internalFormat,N,U,b.normalized,b.colorSpace),V=b.isVideoTexture!==!0,K=xt.__version===void 0||pt===!0,Y=ct.dataReady,dt=y(b,M);se(s.TEXTURE_CUBE_MAP,b);let It;if(b.isDepthTexture){if(q=_(b.format===Qi,b.type),K)if(V)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,q,M.width,M.height);else for(let ut=0;ut<6;ut++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,q,M.width,M.height,0,N,U,null)}else if(yt){V&&K&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,q,M.width,M.height);for(let ut=0;ut<6;ut++){It=v[ut].mipmaps;for(let jt=0;jt<It.length;jt++){let Ie=It[jt];b.format!==hi?N!==null?V?Y&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,jt,0,0,Ie.width,Ie.height,N,Ie.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,jt,q,Ie.width,Ie.height,0,Ie.data):Ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,jt,0,0,Ie.width,Ie.height,N,U,Ie.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,jt,q,Ie.width,Ie.height,0,N,U,Ie.data)}}}else{if(It=b.mipmaps,V&&K){It.length>0&&dt++;let ut=Dt(v[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,q,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(k){V?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,v[ut].width,v[ut].height,N,U,v[ut].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,q,v[ut].width,v[ut].height,0,N,U,v[ut].data);for(let jt=0;jt<It.length;jt++){let vi=It[jt].image[ut].image;V?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,jt+1,0,0,vi.width,vi.height,N,U,vi.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,jt+1,q,vi.width,vi.height,0,N,U,vi.data)}}else{V?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,N,U,v[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,q,N,U,v[ut]);for(let jt=0;jt<It.length;jt++){let Ie=It[jt];V?Y&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,jt+1,0,0,N,U,Ie.image[ut]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ut,jt+1,q,N,U,Ie.image[ut])}}}P(b)&&b.mipmapsAutoUpdate===!0&&T(s.TEXTURE_CUBE_MAP),xt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function me(I,b,Q,pt,ct,xt){let gt=r.convert(Q.format,Q.colorSpace),at=r.convert(Q.type),lt=D(Q.internalFormat,gt,at,Q.normalized,Q.colorSpace),yt=n.get(b),k=n.get(Q);if(k.__renderTarget=b,!yt.__hasExternalTextures){let v=Math.max(1,b.width>>xt),M=Math.max(1,b.height>>xt);ct===s.TEXTURE_3D||ct===s.TEXTURE_2D_ARRAY?e.texImage3D(ct,xt,lt,v,M,b.depth,0,gt,at,null):e.texImage2D(ct,xt,lt,v,M,0,gt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,I),ft(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,ct,k.__webglTexture,0,ne(b)):(ct===s.TEXTURE_2D||ct>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,ct,k.__webglTexture,xt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function bn(I,b,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){let pt=b.depthTexture,ct=pt&&pt.isDepthTexture?pt.type:null,xt=_(b.stencilBuffer,ct),gt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ft(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne(b),xt,b.width,b.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne(b),xt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,xt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,I)}else{let pt=b.textures;for(let ct=0;ct<pt.length;ct++){let xt=pt[ct],gt=r.convert(xt.format,xt.colorSpace),at=r.convert(xt.type),lt=D(xt.internalFormat,gt,at,xt.normalized,xt.colorSpace);ft(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ne(b),lt,b.width,b.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,ne(b),lt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,lt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(I,b,Q){let pt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(b.depthTexture);ct.__renderTarget=b;let xt=pt?b.depthTexture.image[0]:b.depthTexture.image;(!ct.__webglTexture||xt.width!==b.width||xt.height!==b.height)&&(xt.width=b.width,xt.height=b.height,b.depthTexture.needsUpdate=!0),pt?ht(b.depthTexture,0):_t(b.depthTexture,0);let gt=ct.__webglTexture,at=ne(b),lt=pt?s.TEXTURE_CUBE_MAP_POSITIVE_X+Q:s.TEXTURE_2D,yt=b.depthTexture.format===Qi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ki)ft(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,lt,gt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,yt,lt,gt,0);else if(b.depthTexture.format===Qi)ft(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,lt,gt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,yt,lt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dn(I){let b=n.get(I),Q=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){let pt=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pt){let ct=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pt.removeEventListener("dispose",ct)};pt.addEventListener("dispose",ct),b.__depthDisposeCallback=ct}b.__boundDepthTexture=pt}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(Q)for(let pt=0;pt<6;pt++)Te(b.__webglFramebuffer[pt],I,pt);else I.texture.mipmaps.length>0?Te(b.__webglFramebuffer[0],I,0):Te(b.__webglFramebuffer,I,0);else if(Q){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]===void 0)b.__webglDepthbuffer[pt]=s.createRenderbuffer(),bn(b.__webglDepthbuffer[pt],I,!1);else{let ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=b.__webglDepthbuffer[pt];s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,xt)}}else if(I.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),bn(b.__webglDepthbuffer,I,!1);else{let ct=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ct,s.RENDERBUFFER,xt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(I,b,Q){let pt=n.get(I);b!==void 0&&me(pt.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&dn(I)}function Vt(I){let b=I.texture,Q=n.get(I),pt=n.get(b);I.addEventListener("dispose",L),C(I);let ct=I.textures,xt=I.isWebGLCubeRenderTarget===!0,gt=ct.length>1;if(gt||(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=b.version,o.memory.textures++),xt){Q.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps.length>0){Q.__webglFramebuffer[at]=[];for(let lt=0;lt<b.mipmaps.length;lt++)Q.__webglFramebuffer[at][lt]=s.createFramebuffer()}else Q.__webglFramebuffer[at]=s.createFramebuffer()}else{if(b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)Q.__webglFramebuffer[at]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(gt)for(let at=0,lt=ct.length;at<lt;at++){let yt=n.get(ct[at]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&ft(I)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let at=0;at<ct.length;at++){let lt=ct[at];Q.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[at]);let yt=r.convert(lt.format,lt.colorSpace),k=r.convert(lt.type),v=D(lt.internalFormat,yt,k,lt.normalized,lt.colorSpace,I.isXRRenderTarget===!0),M=ne(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,M,v,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Q.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),bn(Q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xt){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),se(s.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)me(Q.__webglFramebuffer[at][lt],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,lt);else me(Q.__webglFramebuffer[at],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);P(b)?T(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let at=0,lt=ct.length;at<lt;at++){let yt=ct[at],k=n.get(yt),v=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(v=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(v,k.__webglTexture),se(v,yt),me(Q.__webglFramebuffer,I,yt,s.COLOR_ATTACHMENT0+at,v,0),P(yt)&&T(v)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(at,pt.__webglTexture),se(at,b),b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)me(Q.__webglFramebuffer[lt],I,b,s.COLOR_ATTACHMENT0,at,lt);else me(Q.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,at,0);P(b)?T(at):b.mipmaps.length>0&&s.texParameteri(at,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}I.depthBuffer&&dn(I)}function H(I){let b=I.textures;for(let Q=0,pt=b.length;Q<pt;Q++){let ct=b[Q];if(P(ct)&&ct.mipmapsAutoUpdate===!0){let xt=A(I),gt=n.get(ct).__webglTexture;e.bindTexture(xt,gt),T(xt),e.unbindTexture()}}}let _e=[];function zt(I){if(I.samples>0){if(ft(I)===!1){let b=I.textures,Q=I.width,pt=I.height,ct=s.COLOR_BUFFER_BIT,xt=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(I),at=b.length>1;if(at)for(let yt=0;yt<b.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<b.length;yt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ct|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ct|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let k=n.get(b[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,k,0)}s.blitFramebuffer(0,0,Q,pt,0,0,Q,pt,ct,s.NEAREST),l===!0&&(_e.length=0,_e.push(s.COLOR_ATTACHMENT0+yt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&_e.push(xt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let yt=0;yt<b.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let k=n.get(b[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,k,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ne(I){return Math.min(i.maxSamples,I.samples)}function ft(I){let b=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function xe(I){let b=o.render.frame;h.get(I)!==b&&(h.set(I,b),I.update())}function Lt(I,b){let Q=I.colorSpace,pt=I.format,ct=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Q!==ia&&Q!==ts&&(ae.getTransfer(Q)===fe?(pt!==hi||ct!==wn)&&Ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",Q)),b}function Dt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=St,this.resetTextureUnits=J,this.getTextureUnits=nt,this.setTextureUnits=mt,this.setTexture2D=_t,this.setTexture2DArray=vt,this.setTexture3D=Pt,this.setTextureCube=ht,this.rebindTextures=Rt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=dn,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ft,this.dispose=Z}function s1(s,t){function e(n,i=ts){let r,o=ae.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===fc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===id)return s.BYTE;if(n===sd)return s.SHORT;if(n===_o)return s.UNSIGNED_SHORT;if(n===dc)return s.INT;if(n===ai)return s.UNSIGNED_INT;if(n===li)return s.FLOAT;if(n===ci)return s.HALF_FLOAT;if(n===ad)return s.ALPHA;if(n===ld)return s.RGB;if(n===hi)return s.RGBA;if(n===Ki)return s.DEPTH_COMPONENT;if(n===Qi)return s.DEPTH_STENCIL;if(n===cd)return s.RED;if(n===mc)return s.RED_INTEGER;if(n===Es)return s.RG;if(n===gc)return s.RG_INTEGER;if(n===_c)return s.RGBA_INTEGER;if(n===ba||n===Ma||n===wa||n===Ta)if(o===fe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xc||n===vc||n===yc||n===Sc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===Mc||n===wc||n===Tc||n===Cc||n===Ca||n===Ec)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===Mc)return o===fe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tc)return r.COMPRESSED_R11_EAC;if(n===Cc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ca)return r.COMPRESSED_RG11_EAC;if(n===Ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ac||n===Rc||n===Pc||n===Dc||n===Ic||n===Oc||n===Lc||n===Fc||n===Nc||n===Uc||n===Bc||n===kc||n===zc||n===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===kc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return o===fe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gc||n===Hc||n===Wc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gc)return o===fe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xc||n===jc||n===Ea||n===Yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var r1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,o1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ei({vertexShader:r1,fragmentShader:o1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mn(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rd=class extends Mi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Ad,g={},S=e.getContextAttributes(),P=null,T=null,A=[],D=[],_=new le,y=null,C=null,E=new On;E.viewport=new Ee;let R=new On;R.viewport=new Ee;let L=[E,R],G=new lc,O=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ot){let _t=A[ot];return _t===void 0&&(_t=new lo,A[ot]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(ot){let _t=A[ot];return _t===void 0&&(_t=new lo,A[ot]=_t),_t.getGripSpace()},this.getHand=function(ot){let _t=A[ot];return _t===void 0&&(_t=new lo,A[ot]=_t),_t.getHandSpace()};function $(ot){let _t=D.indexOf(ot.inputSource);if(_t===-1)return;let vt=A[_t];vt!==void 0&&(vt.update(ot.inputSource,ot.frame,c||o),vt.dispatchEvent({type:ot.type,data:ot.inputSource}))}function z(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",F);for(let ot=0;ot<A.length;ot++){let _t=D[ot];_t!==null&&(D[ot]=null,A[ot].disconnect(_t))}O=null,Z=null,m.reset();for(let ot in g)delete g[ot];if(t.setRenderTarget(P),f=null,d=null,u=null,i=null,T=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(_.width,_.height,!1),C!==null){let ot=C.camera;ot.fov=C.fov,ot.zoom=C.zoom,ot.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ot){r=ot,n.isPresenting===!0&&Ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ot){a=ot,n.isPresenting===!0&&Ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ot){c=ot},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(ot){if(i=ot,i!==null){if(P=t.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",z),i.addEventListener("inputsourceschange",F),S.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Pt=null,ht=null;S.depth&&(ht=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?Qi:Ki,Pt=S.stencil?or:ai);let Bt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Ln(d.textureWidth,d.textureHeight,{format:hi,type:wn,depthTexture:new $i(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,vt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Ln(f.framebufferWidth,f.framebufferHeight,{format:hi,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),St.setContext(i),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(ot){for(let _t=0;_t<ot.removed.length;_t++){let vt=ot.removed[_t],Pt=D.indexOf(vt);Pt>=0&&(D[Pt]=null,A[Pt].disconnect(vt))}for(let _t=0;_t<ot.added.length;_t++){let vt=ot.added[_t],Pt=D.indexOf(vt);if(Pt===-1){for(let Bt=0;Bt<A.length;Bt++)if(Bt>=D.length){D.push(vt),Pt=Bt;break}else if(D[Bt]===null){D[Bt]=vt,Pt=Bt;break}if(Pt===-1)break}let ht=A[Pt];ht&&ht.connect(vt)}}function B(ot,_t){_t===null?ot.matrixWorld.copy(ot.matrix):ot.matrixWorld.multiplyMatrices(_t.matrixWorld,ot.matrix),ot.matrixWorldInverse.copy(ot.matrixWorld).invert()}this.updateCamera=function(ot){if(i===null)return;let _t=ot.near,vt=ot.far;m.texture!==null&&(m.depthNear>0&&(_t=m.depthNear),m.depthFar>0&&(vt=m.depthFar)),G.near=R.near=E.near=_t,G.far=R.far=E.far=vt,(O!==G.near||Z!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),O=G.near,Z=G.far),G.layers.mask=ot.layers.mask|6,E.layers.mask=G.layers.mask&-5,R.layers.mask=G.layers.mask&-3;let Pt=ot.parent,ht=G.cameras;B(G,Pt);for(let Bt=0;Bt<ht.length;Bt++)B(ht[Bt],Pt);G.projectionMatrix.copy(E.projectionMatrix),G.projectionMatrixInverse.copy(E.projectionMatrixInverse),C===null&&ot.isPerspectiveCamera&&(C={camera:ot,fov:ot.fov,zoom:ot.zoom}),J(ot,G,Pt)};function J(ot,_t,vt){vt===null?ot.matrix.copy(_t.matrixWorld):(ot.matrix.copy(vt.matrixWorld),ot.matrix.invert(),ot.matrix.multiply(_t.matrixWorld)),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.updateMatrixWorld(!0),ot.projectionMatrix.copy(_t.projectionMatrix),ot.projectionMatrixInverse.copy(_t.projectionMatrixInverse),ot.isPerspectiveCamera&&(ot.fov=Vl*2*Math.atan(1/ot.projectionMatrix.elements[5]),ot.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ot){l=ot,d!==null&&(d.fixedFoveation=ot),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ot)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(ot){return g[ot]};let nt=null;function mt(ot,_t){if(h=_t.getViewerPose(c||o),p=_t,h!==null){let vt=h.views;f!==null&&(t.setRenderTargetFramebuffer(T,f.framebuffer),t.setRenderTarget(T));let Pt=!1;vt.length!==G.cameras.length&&(G.cameras.length=0,Pt=!0);for(let kt=0;kt<vt.length;kt++){let se=vt[kt],Kt=null;if(f!==null)Kt=f.getViewport(se);else{let we=u.getViewSubImage(d,se);Kt=we.viewport,kt===0&&(t.setRenderTargetTextures(T,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(T))}let Yt=L[kt];Yt===void 0&&(Yt=new On,Yt.layers.enable(kt),Yt.viewport=new Ee,L[kt]=Yt),Yt.matrix.fromArray(se.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(se.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),kt===0&&(G.matrix.copy(Yt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Pt===!0&&G.cameras.push(Yt)}let ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let kt=u.getDepthInformation(vt[0]);kt&&kt.isValid&&kt.texture&&m.init(kt,i.renderState)}if(ht&&ht.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let kt=0;kt<vt.length;kt++){let se=vt[kt].camera;if(se){let Kt=g[se];Kt||(Kt=new fa,g[se]=Kt);let Yt=u.getCameraImage(se);Kt.sourceTexture=Yt}}}}for(let vt=0;vt<A.length;vt++){let Pt=D[vt],ht=A[vt];Pt!==null&&ht!==void 0&&ht.update(Pt,_t,c||o)}nt&&nt(ot,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),p=null}let St=new tg;St.setAnimationLoop(mt),this.setAnimationLoop=function(ot){nt=ot},this.dispose=function(){}}},a1=new Ce,hg=new Xt;hg.set(-1,0,0,0,1,0,0,0,1);function l1(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,gd(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,S,P,T){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,T)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,S,P):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let S=t.get(g),P=S.envMap,T=S.envMapRotation;P&&(m.envMap.value=P,m.envMapRotation.value.setFromMatrix4(a1.makeRotationFromEuler(T)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hg),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,P){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=P*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,S){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let S=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function c1(s,t,e,n){let i={},r={};function o(S,P){let T=P.program;n.uniformBlockBinding(S,T,i[S.id])}function a(S,P){let T=i[S.id];T===void 0&&(p(S),T=l(S),i[S.id]=T,S.addEventListener("dispose",m));let A=P.program;n.updateUBOMapping(S,A);let D=t.render.frame;r[S.id]!==D&&(c(S),r[S.id]=D)}function l(S){let P=s.createBuffer(),T=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),P}function c(S){let P=i[S.id],T=S.uniforms,A=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let D=0,_=T.length;D<_;D++){let y=T[D];if(Array.isArray(y))for(let C=0,E=y.length;C<E;C++)h(y[C],D,C,A);else h(y,D,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(S,P,T,A){if(d(S,P,T,A)===!0){let D=S.__offset,_=S.value;if(Array.isArray(_)){let y=0;for(let C=0;C<_.length;C++){let E=_[C],R=x(E,!0);u(E,S.__data,y),y+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,S.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,D,S.__data)}}function u(S,P,T){typeof S=="number"||typeof S=="boolean"?P[T]=S:S.isMatrix3?(P[T]=S.elements[0],P[T+1]=S.elements[1],P[T+2]=S.elements[2],P[T+3]=0,P[T+4]=S.elements[3],P[T+5]=S.elements[4],P[T+6]=S.elements[5],P[T+7]=0,P[T+8]=S.elements[6],P[T+9]=S.elements[7],P[T+10]=S.elements[8],P[T+11]=0):ArrayBuffer.isView(S)?P.set(S.subarray(0,P.length-T),T):S.toArray(P,T)}function d(S,P,T,A){let D=S.value,_=P+"_"+T;if(Array.isArray(D)){A[_]===void 0&&(A[_]=[]);let y=A[_],C=!1;for(let E=0;E<D.length;E++)f(D[E],y,E)===!0&&(C=!0);return C}return f(D,A,_)}function f(S,P,T){if(P[T]===void 0)return typeof S=="number"||typeof S=="boolean"?P[T]=S:ArrayBuffer.isView(S)?P[T]=S.slice():P[T]=S.clone(),!0;{let A=P[T];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return P[T]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function p(S){let P=S.uniforms,T=0,A=16;for(let _=0,y=P.length;_<y;_++){let C=Array.isArray(P[_])?P[_]:[P[_]];for(let E=0,R=C.length;E<R;E++){let L=C[E],G=Array.isArray(L.value)?L.value:[L.value],O=Array.isArray(P[_])||Array.isArray(L.value),Z=T;for(let z=0,F=G.length;z<F;z++){let B=G[z],J=x(B,O),nt=T%A,mt=nt%J.boundary,St=nt+mt;T+=mt,St!==0&&A-St<J.storage&&(T+=A-St),z===0&&(Z=T),T+=J.storage}let $=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new $((T-Z)/Float32Array.BYTES_PER_ELEMENT),L.__offset=Z}}let D=T%A;return D>0&&(T+=A-D),S.__size=T,S.__cache={},this}function x(S,P){let T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=16,T.storage=48):S.isMatrix4?(T.boundary=16,T.storage=64):S.isTexture?Ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):Ht("WebGLRenderer: Unsupported uniform value type.",S),P===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function m(S){let P=S.target;P.removeEventListener("dispose",m),s.deleteBuffer(i[P.id]),delete i[P.id],delete r[P.id]}function g(){for(let S in i)s.deleteBuffer(i[S]);i={},r={}}return{bind:o,update:a,dispose:g}}var h1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function u1(){return Ri===null&&(Ri=new jl(h1,16,16,Es,ci),Ri.name="DFG_LUT",Ri.minFilter=tn,Ri.magFilter=tn,Ri.wrapS=Si,Ri.wrapT=Si,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var Jc=class{constructor(t={}){let{canvas:e=wm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=wn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=f,m=new Set([_c,gc,mc]),g=new Set([wn,ai,_o,or,fc,pc]),S=new Uint32Array(4),P=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},A=null,D=null,_=[],y=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,L=null,G=null,O=null,Z=null;this._outputColorSpace=Qe;let $=0,z=0,F=null,B=-1,J=null,nt=new Ee,mt=new Ee,St=null,ot=new $t(0),_t=0,vt=e.width,Pt=e.height,ht=1,Bt=null,ee=null,kt=new Ee(0,0,vt,Pt),se=new Ee(0,0,vt,Pt),Kt=!1,Yt=new Ss,we=new Yl,ge=!1,ze=!1,me=new Ce,bn=new it,Te=new Ee,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Rt=!1;function Vt(){return F===null?ht:1}let H=n;function _e(w,W){return e.getContext(w,W)}let zt,ne,ft,xe,Lt,Dt,I,b,Q,pt,ct,xt,gt,at,lt,yt,k,v,M,N,U,q,V;try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",dt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",ut,!1),H===null){let W="webgl2";if(H=_e(W,w),H===null)throw _e(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}K()}catch(w){throw e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Wt("WebGLRenderer: "+w.message),w}function K(){zt=new bS(H),zt.init(),U=new s1(H,zt),ne=new uS(H,zt,t,U),ft=new n1(H,zt),ne.reversedDepthBuffer&&d&&ft.buffers.depth.setReversed(!0),G=H.createFramebuffer(),O=H.createFramebuffer(),Z=H.createFramebuffer(),xe=new TS(H),Lt=new Gb,Dt=new i1(H,zt,ft,Lt,ne,U,xe),I=new SS(E),b=new Ex(H),q=new cS(H,b),Q=new MS(H,b,xe,q),pt=new ES(H,Q,b,q,xe),v=new CS(H,ne,Dt),lt=new dS(Lt),ct=new Vb(E,I,zt,ne,q,lt),xt=new l1(E,Lt),gt=new Wb,at=new Jb(zt),k=new lS(E,I,ft,pt,p,l),yt=new e1(E,pt,ne),V=new c1(H,xe,ne,ft),M=new hS(H,zt,xe),N=new wS(H,zt,xe),xe.programs=ct.programs,E.capabilities=ne,E.extensions=zt,E.properties=Lt,E.renderLists=gt,E.shadowMap=yt,E.state=ft,E.info=xe}x!==wn&&(C=new RS(x,e.width,e.height,a,i,r));let Y=new Rd(E,H);this.xr=Y,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=zt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=zt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(w){w!==void 0&&(ht=w,this.setSize(vt,Pt,!1))},this.getSize=function(w){return w.set(vt,Pt)},this.setSize=function(w,W,rt=!0){if(Y.isPresenting){Ht("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=w,Pt=W,e.width=Math.floor(w*ht),e.height=Math.floor(W*ht),rt===!0&&(e.style.width=w+"px",e.style.height=W+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(vt*ht,Pt*ht).floor()},this.setDrawingBufferSize=function(w,W,rt){vt=w,Pt=W,ht=rt,e.width=Math.floor(w*rt),e.height=Math.floor(W*rt),this.setViewport(0,0,w,W)},this.setEffects=function(w){if(x===wn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let W=0;W<w.length;W++)if(w[W].isOutputPass===!0){Ht("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(nt)},this.getViewport=function(w){return w.copy(kt)},this.setViewport=function(w,W,rt,tt){w.isVector4?kt.set(w.x,w.y,w.z,w.w):kt.set(w,W,rt,tt),ft.viewport(nt.copy(kt).multiplyScalar(Vt()).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,W,rt,tt){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,W,rt,tt),ft.scissor(mt.copy(se).multiplyScalar(Vt()).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(w){ft.setScissorTest(Kt=w)},this.setOpaqueSort=function(w){Bt=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,rt=!0){let tt=0;if(w){let et=!1;if(F!==null){let Mt=F.texture.format;et=m.has(Mt)}if(et){let Mt=F.texture.type,Ot=g.has(Mt),bt=k.getClearColor(),Ct=k.getClearAlpha(),Ut=bt.r,qt=bt.g,re=bt.b;Ot?(S[0]=Ut,S[1]=qt,S[2]=re,S[3]=Ct,H.clearBufferuiv(H.COLOR,0,S)):(P[0]=Ut,P[1]=qt,P[2]=re,P[3]=Ct,H.clearBufferiv(H.COLOR,0,P))}else tt|=H.COLOR_BUFFER_BIT}W&&(tt|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),rt&&(tt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),tt!==0&&H.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),L=w},this.dispose=function(){e.removeEventListener("webglcontextlost",dt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),k.dispose(),gt.dispose(),at.dispose(),Dt.dispose(),Lt.dispose(),I.dispose(),pt.dispose(),Q.dispose(),q.dispose(),V.dispose(),ct.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",dp),Y.removeEventListener("sessionend",fp),js.stop()};function dt(w){w.preventDefault(),pd("WebGLRenderer: Context Lost."),R=!0}function It(){pd("WebGLRenderer: Context Restored."),R=!1;let w=xe.autoReset,W=yt.enabled,rt=yt.autoUpdate,tt=yt.needsUpdate,et=yt.type;K(),xe.autoReset=w,yt.enabled=W,yt.autoUpdate=rt,yt.needsUpdate=tt,yt.type=et}function ut(w){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function jt(w){let W=w.target;W.removeEventListener("dispose",jt),Ie(W)}function Ie(w){vi(w),Lt.remove(w)}function vi(w){let W=Lt.get(w).programs;W!==void 0&&(W.forEach(function(rt){ct.releaseProgram(rt)}),w.isShaderMaterial&&ct.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,rt,tt,et,Mt){W===null&&(W=dn);let Ot=et.isMesh&&et.matrixWorld.determinantAffine()<0,bt=z_(w,W,rt,tt,et);ft.setMaterial(tt,Ot);let Ct=rt.index,Ut=1;if(tt.wireframe===!0){if(Ct=Q.getWireframeAttribute(rt),Ct===void 0)return;Ut=2}let qt=rt.drawRange,re=rt.attributes.position,Ft=qt.start*Ut,oe=(qt.start+qt.count)*Ut;Mt!==null&&(Ft=Math.max(Ft,Mt.start*Ut),oe=Math.min(oe,(Mt.start+Mt.count)*Ut)),Ct!==null?(Ft=Math.max(Ft,0),oe=Math.min(oe,Ct.count)):re!=null&&(Ft=Math.max(Ft,0),oe=Math.min(oe,re.count));let Ue=oe-Ft;if(Ue<0||Ue===1/0)return;q.setup(et,tt,bt,rt,Ct);let Se,ve=M;if(Ct!==null&&(Se=b.get(Ct),ve=N,ve.setIndex(Se)),et.isMesh)tt.wireframe===!0?(ft.setLineWidth(tt.wireframeLinewidth*Vt()),ve.setMode(H.LINES)):ve.setMode(H.TRIANGLES);else if(et.isLine){let sn=tt.linewidth;sn===void 0&&(sn=1),ft.setLineWidth(sn*Vt()),et.isLineSegments?ve.setMode(H.LINES):et.isLineLoop?ve.setMode(H.LINE_LOOP):ve.setMode(H.LINE_STRIP)}else et.isPoints?ve.setMode(H.POINTS):et.isSprite&&ve.setMode(H.TRIANGLES);if(et.isBatchedMesh)if(zt.get("WEBGL_multi_draw"))ve.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{let sn=et._multiDrawStarts,Nt=et._multiDrawCounts,fn=et._multiDrawCount,de=Ct?b.get(Ct).bytesPerElement:1,Ys=Lt.get(tt).currentProgram.getUniforms();for(let rn=0;rn<fn;rn++)Ys.setValue(H,"_gl_DrawID",rn),ve.render(sn[rn]/de,Nt[rn])}else if(et.isInstancedMesh)ve.renderInstances(Ft,Ue,et.count);else if(rt.isInstancedBufferGeometry){let sn=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Nt=Math.min(rt.instanceCount,sn);ve.renderInstances(Ft,Ue,Nt)}else ve.render(Ft,Ue)};function ol(w,W,rt,tt){L!==null&&w.isNodeMaterial&&L.setObject(tt,w),ge===!0&&lt.setState(w,rt,!1),w.transparent===!0&&w.side===Ai&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,Jo(w,W,tt),w.side=Cs,w.needsUpdate=!0,Jo(w,W,tt),w.side=Ai):Jo(w,W,tt)}this.compile=function(w,W,rt=null){rt===null&&(rt=w),L!==null&&L.renderStart(w,W,rt),D=at.get(rt),D.init(W),y.push(D),rt.traverseVisible(function(et){et.isLight&&et.layers.test(W.layers)&&(D.pushLight(et),et.castShadow&&D.pushShadow(et))}),w!==rt&&w.traverseVisible(function(et){et.isLight&&et.layers.test(W.layers)&&(D.pushLight(et),et.castShadow&&D.pushShadow(et))}),D.setupLights(),L!==null&&L.updateLights(D.state.lightsArray),ze=this.localClippingEnabled,ge=lt.init(this.clippingPlanes,ze),ge===!0&&lt.setGlobalState(this.clippingPlanes,W),L!==null&&yt.render(D.state.shadowsArray,rt,W);let tt=new Set;return w.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;let Mt=et.material;if(Mt)if(Array.isArray(Mt))for(let Ot=0;Ot<Mt.length;Ot++){let bt=Mt[Ot];ol(bt,rt,W,et),tt.add(bt)}else ol(Mt,rt,W,et),tt.add(Mt)}),D=y.pop(),L!==null&&L.renderEnd(),tt},this.compileAsync=function(w,W,rt=null){let tt=this.compile(w,W,rt);return new Promise(et=>{function Mt(){if(tt.forEach(function(Ot){let Ct=Lt.get(Ot).currentProgram;(Ct===void 0||Ct.isReady())&&tt.delete(Ot)}),tt.size===0){et(w);return}setTimeout(Mt,10)}zt.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Zo=null;function du(w){Zo&&Zo(w)}function dp(){js.stop()}function fp(){js.start()}let js=new tg;js.setAnimationLoop(du),typeof self<"u"&&js.setContext(self),this.setAnimationLoop=function(w){Zo=w,Y.setAnimationLoop(w),w===null?js.stop():js.start()},Y.addEventListener("sessionstart",dp),Y.addEventListener("sessionend",fp),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;L!==null&&L.renderStart(w,W);let rt=Y.enabled===!0&&Y.isPresenting===!0,tt=C!==null&&(F===null||rt)&&C.begin(E,F);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(W),W=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(E,w,W,F),D=at.get(w,y.length),D.init(W),D.state.textureUnits=Dt.getTextureUnits(),y.push(D),me.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),W.isArrayCamera?we.setFromArrayCamera(W):Yt.setFromProjectionMatrix(me,Xn,W.reversedDepth),ze=this.localClippingEnabled,ge=lt.init(this.clippingPlanes,ze),A=gt.get(w,_.length),A.init(),_.push(A),this.info.render.frame++,Y.enabled===!0&&Y.isPresenting===!0){let Ot=E.xr.getDepthSensingMesh();Ot!==null&&fu(Ot,W,-1/0,E.sortObjects)}fu(w,W,0,E.sortObjects),A.finish(),L!==null&&L.updateLights(D.state.lightsArray),E.sortObjects===!0&&A.sort(Bt,ee),Rt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Rt&&k.addToRenderList(A,w),this.info.autoReset===!0&&this.info.reset(),ge===!0&&lt.beginShadows();let et=D.state.shadowsArray;if(yt.render(et,w,W),ge===!0&&lt.endShadows(),(tt&&C.hasRenderPass())===!1){let Ot=A.opaque,bt=A.transmissive;if(D.setupLights(),W.isArrayCamera){let Ct=W.cameras;if(bt.length>0)for(let Ut=0,qt=Ct.length;Ut<qt;Ut++){let re=Ct[Ut];mp(Ot,bt,w,re)}Rt&&k.render(w);for(let Ut=0,qt=Ct.length;Ut<qt;Ut++){let re=Ct[Ut];pp(A,w,re,re.viewport)}}else bt.length>0&&mp(Ot,bt,w,W),Rt&&k.render(w),pp(A,w,W)}F!==null&&z===0&&(Dt.updateMultisampleRenderTarget(F),Dt.updateRenderTargetMipmap(F)),tt&&C.end(E),w.isScene===!0&&w.onAfterRender(E,w,W),q.resetDefaultState(),B=-1,J=null,y.pop(),y.length>0?(D=y[y.length-1],Dt.setTextureUnits(D.state.textureUnits),ge===!0&&lt.setGlobalState(E.clippingPlanes,D.state.camera)):D=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,L!==null&&L.renderEnd()};function fu(w,W,rt,tt){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)rt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){let Ot=W.isArrayCamera?we:Yt;if(!w.frustumCulled||w.intersectsFrustum(Ot)){tt&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);let bt=pt.update(w),Ct=w.material;Ct.visible&&A.push(w,bt,Ct,rt,Te.z,null,W)}}else if(w.isMesh||w.isLine||w.isPoints){let Ot=W.isArrayCamera?we:Yt;if(!w.frustumCulled||w.intersectsFrustum(Ot)){let bt=pt.update(w),Ct=w.material;if(tt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Te.copy(bt.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Ct)){let Ut=bt.groups;for(let qt=0,re=Ut.length;qt<re;qt++){let Ft=Ut[qt],oe=Ct[Ft.materialIndex];oe&&oe.visible&&A.push(w,bt,oe,rt,Te.z,Ft,W)}}else Ct.visible&&A.push(w,bt,Ct,rt,Te.z,null,W)}}}let Mt=w.children;for(let Ot=0,bt=Mt.length;Ot<bt;Ot++)fu(Mt[Ot],W,rt,tt)}function pp(w,W,rt,tt){let{opaque:et,transmissive:Mt,transparent:Ot}=w;D.setupLightsView(rt),ge===!0&&lt.setGlobalState(E.clippingPlanes,rt),tt&&ft.viewport(nt.copy(tt)),et.length>0&&al(et,W,rt),Mt.length>0&&al(Mt,W,rt),Ot.length>0&&al(Ot,W,rt),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function mp(w,W,rt,tt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[tt.id]===void 0){let Ft=zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[tt.id]=new Ln(1,1,{generateMipmaps:!0,type:Ft?ci:wn,minFilter:oi,samples:Math.max(4,ne.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let Mt=D.state.transmissionRenderTarget[tt.id],Ot=tt.viewport||nt;Mt.setSize(Ot.z*E.transmissionResolutionScale,Ot.w*E.transmissionResolutionScale);let bt=E.getRenderTarget(),Ct=E.getActiveCubeFace(),Ut=E.getActiveMipmapLevel();E.setRenderTarget(Mt),E.getClearColor(ot),_t=E.getClearAlpha(),_t<1&&E.setClearColor(16777215,.5),E.clear(),Rt&&k.render(rt);let qt=E.toneMapping;E.toneMapping=Yn;let re=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),D.setupLightsView(tt),ge===!0&&lt.setGlobalState(E.clippingPlanes,tt),al(w,rt,tt),Dt.updateMultisampleRenderTarget(Mt),Dt.updateRenderTargetMipmap(Mt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let oe=0,Ue=W.length;oe<Ue;oe++){let Se=W[oe],{object:ve,geometry:sn,material:Nt,group:fn}=Se;if(Nt.side===Ai&&ve.layers.test(tt.layers)){let de=Nt.side;Nt.side=mn,Nt.needsUpdate=!0,gp(ve,rt,tt,sn,Nt,fn),Nt.side=de,Nt.needsUpdate=!0,Ft=!0}}Ft===!0&&(Dt.updateMultisampleRenderTarget(Mt),Dt.updateRenderTargetMipmap(Mt))}E.setRenderTarget(bt,Ct,Ut),E.setClearColor(ot,_t),re!==void 0&&(tt.viewport=re),E.toneMapping=qt}function al(w,W,rt){let tt=W.isScene===!0?W.overrideMaterial:null;for(let et=0,Mt=w.length;et<Mt;et++){let Ot=w[et],{object:bt,geometry:Ct,group:Ut}=Ot,qt=Ot.material;qt.allowOverride===!0&&tt!==null&&(qt=tt),bt.layers.test(rt.layers)&&gp(bt,W,rt,Ct,qt,Ut)}}function gp(w,W,rt,tt,et,Mt){L!==null&&et.isNodeMaterial&&L.setObject(w,et),w.onBeforeRender(E,W,rt,tt,et,Mt),w.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),et.onBeforeRender(E,W,rt,tt,w,Mt),et.transparent===!0&&et.side===Ai&&et.forceSinglePass===!1?(et.side=mn,et.needsUpdate=!0,E.renderBufferDirect(rt,W,tt,et,w,Mt),et.side=Cs,et.needsUpdate=!0,E.renderBufferDirect(rt,W,tt,et,w,Mt),et.side=Ai):E.renderBufferDirect(rt,W,tt,et,w,Mt),w.onAfterRender(E,W,rt,tt,et,Mt)}function _p(w){let W=0;for(let rt of w)rt.texture!==null&&W++;return W}function Jo(w,W,rt){W.isScene!==!0&&(W=dn);let tt=Lt.get(w),et=D.state.lights,Mt=D.state.shadowsArray,Ot=et.state.version,bt=ct.getParameters(w,et.state,Mt,W,rt,D.state.lightProbeGridArray),Ct=ct.getProgramCacheKey(bt),Ut=tt.programs;tt.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?W.environment:null,tt.fog=W.fog;let qt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;tt.envMap=I.get(w.envMap||tt.environment,qt),tt.envMapRotation=tt.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Ut===void 0&&(w.addEventListener("dispose",jt),Ut=new Map,tt.programs=Ut,tt.programVariants=new Map);let re=Ut.get(Ct);if(re!==void 0){if(tt.currentProgram===re&&tt.lightsStateVersion===Ot)return vp(w,bt),re}else bt.uniforms=ct.getUniforms(w),L!==null&&w.isNodeMaterial&&L.build(w,rt,bt),w.onBeforeCompile(bt,E),re=ct.acquireProgram(bt,Ct),Ut.set(Ct,re),tt.uniforms=bt.uniforms;let Ft=tt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ft.clippingPlanes=lt.uniform),vp(w,bt),tt.needsLights=G_(w),tt.lightsStateVersion=Ot,tt.needsLights&&(Ft.ambientLightColor.value=et.state.ambient,Ft.lightProbe.value=et.state.probe,Ft.sunLights.value=et.state.sun,Ft.sunLightShadows.value=et.state.sunShadow,Ft.directionalLights.value=et.state.directional,Ft.directionalLightShadows.value=et.state.directionalShadow,Ft.spotLights.value=et.state.spot,Ft.spotLightShadows.value=et.state.spotShadow,Ft.rectAreaLights.value=et.state.rectArea,Ft.ltc_1.value=et.state.rectAreaLTC1,Ft.ltc_2.value=et.state.rectAreaLTC2,Ft.pointLights.value=et.state.point,Ft.pointLightShadows.value=et.state.pointShadow,Ft.hemisphereLights.value=et.state.hemi,Ft.sunShadowMatrix.value=et.state.sunShadowMatrix,Ft.sunShadowCascade.value=et.state.sunShadowCascade,Ft.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Ft.spotLightMatrix.value=et.state.spotLightMatrix,Ft.spotLightMap.value=et.state.spotLightMap,Ft.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.numLightProbeGrids=_p(D.state.lightProbeGridArray),tt.currentProgram=re,tt.uniformsList=null,re}function k_(w,W,rt,tt,et){let Mt=Lt.get(w),Ot=Mt.currentProgram.id+","+tt+","+et,bt=Mt.programVariants.get(Ot);return bt===void 0?(bt=Jo(w,W,rt),Mt.programVariants.set(Ot,bt)):(Mt.currentProgram=bt,Mt.uniformsList=null,Mt.outputColorSpace=tt,Mt.toneMapping=et),bt}function xp(w){if(w.uniformsList===null){let W=w.currentProgram.getUniforms();w.uniformsList=xo.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function vp(w,W){let rt=Lt.get(w);rt.outputColorSpace=W.outputColorSpace,rt.batching=W.batching,rt.batchingColor=W.batchingColor,rt.instancing=W.instancing,rt.instancingColor=W.instancingColor,rt.instancingMorph=W.instancingMorph,rt.skinning=W.skinning,rt.morphTargets=W.morphTargets,rt.morphNormals=W.morphNormals,rt.morphColors=W.morphColors,rt.morphTargetsCount=W.morphTargetsCount,rt.numClippingPlanes=W.numClippingPlanes,rt.numIntersection=W.numClipIntersection,rt.vertexAlphas=W.vertexAlphas,rt.vertexTangents=W.vertexTangents,rt.toneMapping=W.toneMapping}function z_(w,W,rt,tt,et){W.isScene!==!0&&(W=dn),Dt.resetTextureUnits();let Mt=W.fog,Ot=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial?W.environment:null,bt=F===null?E.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ae.workingColorSpace,Ct=tt.isMeshStandardMaterial||tt.isMeshLambertMaterial&&!tt.envMap||tt.isMeshPhongMaterial&&!tt.envMap,Ut=I.get(tt.envMap||Ot,Ct),qt=tt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,re=!!rt.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),Ft=!!rt.morphAttributes.position,oe=!!rt.morphAttributes.normal,Ue=!!rt.morphAttributes.color,Se=Yn;tt.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Se=E.toneMapping);let ve=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,sn=ve!==void 0?ve.length:0,Nt=Lt.get(tt),fn=D.state.lights;if(ge===!0&&(ze===!0||w!==J)){let Ae=w===J&&tt.id===B;lt.setState(tt,w,Ae)}let de=!1,Ys=!1;tt.version===Nt.__version?Nt.needsLights&&Nt.lightsStateVersion!==fn.state.version||et.isBatchedMesh&&Nt.batching===!1||!et.isBatchedMesh&&Nt.batching===!0||et.isBatchedMesh&&Nt.batchingColor===!0&&et._colorsTexture===null||et.isBatchedMesh&&Nt.batchingColor===!1&&et._colorsTexture!==null||et.isInstancedMesh&&Nt.instancing===!1||!et.isInstancedMesh&&Nt.instancing===!0||et.isSkinnedMesh&&Nt.skinning===!1||!et.isSkinnedMesh&&Nt.skinning===!0||et.isInstancedMesh&&Nt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Nt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Nt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Nt.instancingMorph===!1&&et.morphTexture!==null||Nt.envMap!==Ut||tt.fog===!0&&Nt.fog!==Mt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==lt.numPlanes||Nt.numIntersection!==lt.numIntersection)||Nt.vertexAlphas!==qt||Nt.vertexTangents!==re||Nt.morphTargets!==Ft||Nt.morphNormals!==oe||Nt.morphColors!==Ue||Nt.morphTargetsCount!==sn||Nt.numLightProbeGrids!==_p(D.state.lightProbeGridArray)?de=!0:(Nt.outputColorSpace!==bt||Nt.toneMapping!==Se)&&(Ys=!0):(de=!0,Nt.__version=tt.version);let rn=Nt.currentProgram;(de===!0||Ys===!0)&&(rn=Ys===!0?k_(tt,W,et,bt,Se):Jo(tt,W,et),L&&tt.isNodeMaterial&&L.onUpdateProgram(tt,rn,Nt));let ll=!1,ds=!1,qs=!1,ue=rn.getUniforms(),$e=Nt.uniforms;if(ft.useProgram(rn.program)&&(ll=!0,ds=!0,qs=!0),tt.id!==B&&(B=tt.id,ds=!0),ll||J!==w){ft.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ue.setValue(H,"projectionMatrix",w.projectionMatrix),ue.setValue(H,"viewMatrix",w.matrixWorldInverse);let Ye=ue.map.cameraPosition;Ye!==void 0&&Ye.setValue(H,bn.setFromMatrixPosition(w.matrixWorld)),ne.logarithmicDepthBuffer&&ue.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ue.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,ds=!0,qs=!0)}if(Nt.needsLights&&(fn.state.sunShadowMap.length>0&&ue.setValue(H,"sunShadowMap",fn.state.sunShadowMap,Dt),fn.state.directionalShadowMap.length>0&&ue.setValue(H,"directionalShadowMap",fn.state.directionalShadowMap,Dt),fn.state.spotShadowMap.length>0&&ue.setValue(H,"spotShadowMap",fn.state.spotShadowMap,Dt),fn.state.pointShadowMap.length>0&&ue.setValue(H,"pointShadowMap",fn.state.pointShadowMap,Dt)),et.isSkinnedMesh){ue.setOptional(H,et,"bindMatrix"),ue.setOptional(H,et,"bindMatrixInverse");let Ae=et.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ue.setValue(H,"boneTexture",Ae.boneTexture,Dt))}et.isBatchedMesh&&(ue.setOptional(H,et,"batchingTexture"),ue.setValue(H,"batchingTexture",et._matricesTexture,Dt),ue.setOptional(H,et,"batchingIdTexture"),ue.setValue(H,"batchingIdTexture",et._indirectTexture,Dt),ue.setOptional(H,et,"batchingColorTexture"),et._colorsTexture!==null&&ue.setValue(H,"batchingColorTexture",et._colorsTexture,Dt));let ei=rt.morphAttributes;if((ei.position!==void 0||ei.normal!==void 0||ei.color!==void 0)&&v.update(et,rt,rn),(ds||Nt.receiveShadow!==et.receiveShadow)&&(Nt.receiveShadow=et.receiveShadow,ue.setValue(H,"receiveShadow",et.receiveShadow)),(tt.isMeshStandardMaterial||tt.isMeshLambertMaterial||tt.isMeshPhongMaterial)&&tt.envMap===null&&W.environment!==null&&($e.envMapIntensity.value=W.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=u1()),ds){if(ue.setValue(H,"toneMappingExposure",E.toneMappingExposure),Nt.needsLights&&V_($e,qs),Mt&&tt.fog===!0&&xt.refreshFogUniforms($e,Mt),xt.refreshMaterialUniforms($e,tt,ht,Pt,D.state.transmissionRenderTarget[w.id]),Nt.needsLights&&Nt.numLightProbeGrids>0){let Ae=T,Ye=0;for(let Hi of D.state.lightProbeGridArray)Hi.texture!==null&&(Ae.textures[Ye]=Hi.texture,Ae.min[Ye]=Hi.boundingBox.min,Ae.max[Ye]=Hi.boundingBox.max,Ae.resolution[Ye]=Hi.resolution,Ye++);for(let Hi in Ae)Ae[Hi].length=Ye;$e.probesSH.value=Ae.textures,$e.probesMin.value=Ae.min,$e.probesMax.value=Ae.max,$e.probesResolution.value=Ae.resolution}xo.upload(H,xp(Nt),$e,Dt)}if(tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(xo.upload(H,xp(Nt),$e,Dt),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ue.setValue(H,"center",et.center),ue.setValue(H,"modelViewMatrix",et.modelViewMatrix),ue.setValue(H,"normalMatrix",et.normalMatrix),ue.setValue(H,"modelMatrix",et.matrixWorld),tt.uniformsGroups!==void 0){let Ae=tt.uniformsGroups;for(let Ye=0,Hi=Ae.length;Ye<Hi;Ye++){let Sp=Ae[Ye];V.update(Sp,rn),V.bind(Sp,rn)}}return rn}function V_(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.sunLights.needsUpdate=W,w.sunLightShadows.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function G_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(w,W,rt){let tt=Lt.get(w);tt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,tt.__autoAllocateDepthBuffer===!1&&(tt.__useRenderToTexture=!1),Lt.get(w.texture).__webglTexture=W,Lt.get(w.depthTexture).__webglTexture=tt.__autoAllocateDepthBuffer?void 0:rt,tt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){let rt=Lt.get(w);rt.__webglFramebuffer=W,rt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(w,W=0,rt=0){F=w,$=W,z=rt;let tt=null,et=!1,Mt=!1;if(w){let bt=Lt.get(w);if(bt.__useDefaultFramebuffer!==void 0){ft.bindFramebuffer(H.FRAMEBUFFER,bt.__webglFramebuffer),nt.copy(w.viewport),mt.copy(w.scissor),St=w.scissorTest,ft.viewport(nt),ft.scissor(mt),ft.setScissorTest(St),B=-1;return}else if(bt.__webglFramebuffer===void 0)Dt.setupRenderTarget(w);else if(bt.__hasExternalTextures)Dt.rebindTextures(w,Lt.get(w.texture).__webglTexture,Lt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let qt=w.depthTexture;if(bt.__boundDepthTexture!==qt){if(qt!==null&&Lt.has(qt)&&(w.width!==qt.image.width||w.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Dt.setupDepthRenderbuffer(w)}}let Ct=w.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(Mt=!0);let Ut=Lt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ut[W])?tt=Ut[W][rt]:tt=Ut[W],et=!0):w.samples>0&&Dt.useMultisampledRTT(w)===!1?tt=Lt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ut)?tt=Ut[rt]:tt=Ut,nt.copy(w.viewport),mt.copy(w.scissor),St=w.scissorTest}else nt.copy(kt).multiplyScalar(ht).floor(),mt.copy(se).multiplyScalar(ht).floor(),St=Kt;if(rt!==0&&(tt=G),ft.bindFramebuffer(H.FRAMEBUFFER,tt)&&ft.drawBuffers(w,tt),ft.viewport(nt),ft.scissor(mt),ft.setScissorTest(St),et){let bt=Lt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,bt.__webglTexture,rt)}else if(Mt){let bt=W;for(let Ct=0;Ct<w.textures.length;Ct++){let Ut=Lt.get(w.textures[Ct]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ct,Ut.__webglTexture,rt,bt)}}else if(w!==null&&rt!==0){let bt=Lt.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bt.__webglTexture,rt)}B=-1};function yp(w){let W=Lt.get(w);return(W.__readFormat!==w.format||W.__readType!==w.type)&&(W.__readFormat=w.format,W.__readType=w.type,W.__formatReadable=ne.textureFormatReadable(w.format),W.__typeReadable=ne.textureTypeReadable(w.type)),W}this.readRenderTargetPixels=function(w,W,rt,tt,et,Mt,Ot,bt=0){if(!(w&&w.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ct=Ct[Ot],Array.isArray(Ct)&&(Ct=Ct[0])),Ct){ft.bindFramebuffer(H.FRAMEBUFFER,Ct);try{let Ut=w.textures[bt],qt=Ut.format,re=Ut.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+bt);let Ft=yp(Ut);if(Ft.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ft.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-tt&&rt>=0&&rt<=w.height-et&&H.readPixels(W,rt,tt,et,U.convert(qt),U.convert(re),Mt)}finally{let Ut=F!==null?Lt.get(F).__webglFramebuffer:null;ft.bindFramebuffer(H.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(w,W,rt,tt,et,Mt,Ot,bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Lt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ot!==void 0&&(Ct=Ct[Ot],Array.isArray(Ct)&&(Ct=Ct[0])),Ct)if(W>=0&&W<=w.width-tt&&rt>=0&&rt<=w.height-et){ft.bindFramebuffer(H.FRAMEBUFFER,Ct);let Ut=w.textures[bt],qt=Ut.format,re=Ut.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+bt);let Ft=yp(Ut);if(Ft.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ft.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,oe),H.bufferData(H.PIXEL_PACK_BUFFER,Mt.byteLength,H.STREAM_READ),H.readPixels(W,rt,tt,et,U.convert(qt),U.convert(re),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Ue=F!==null?Lt.get(F).__webglFramebuffer:null;ft.bindFramebuffer(H.FRAMEBUFFER,Ue);let Se=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Cm(H,Se,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,oe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Mt),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(oe),H.deleteSync(Se),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,rt=0){let tt=Math.pow(2,-rt),et=Math.floor(w.image.width*tt),Mt=Math.floor(w.image.height*tt),Ot=W!==null?W.x:0,bt=W!==null?W.y:0;Dt.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,Ot,bt,et,Mt),ft.unbindTexture()},this.copyTextureToTexture=function(w,W,rt=null,tt=null,et=0,Mt=0){let Ot,bt,Ct,Ut,qt,re,Ft,oe,Ue,Se=w.isCompressedTexture?w.mipmaps[Mt]:w.image;if(rt!==null)Ot=rt.max.x-rt.min.x,bt=rt.max.y-rt.min.y,Ct=rt.isBox3?rt.max.z-rt.min.z:1,Ut=rt.min.x,qt=rt.min.y,re=rt.isBox3?rt.min.z:0;else{let ue=Math.pow(2,-et);Ot=Math.floor(Se.width*ue),bt=Math.floor(Se.height*ue),w.isDataArrayTexture?Ct=Se.depth:w.isData3DTexture?Ct=Math.floor(Se.depth*ue):Ct=1,Ut=0,qt=0,re=0}tt!==null?(Ft=tt.x,oe=tt.y,Ue=tt.z):(Ft=0,oe=0,Ue=0);let ve=U.convert(W.format),sn=U.convert(W.type),Nt;W.isData3DTexture?(Dt.setTexture3D(W,0),Nt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(Dt.setTexture2DArray(W,0),Nt=H.TEXTURE_2D_ARRAY):(Dt.setTexture2D(W,0),Nt=H.TEXTURE_2D),ft.activeTexture(H.TEXTURE0),ft.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),ft.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),ft.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);let fn=ft.getParameter(H.UNPACK_ROW_LENGTH),de=ft.getParameter(H.UNPACK_IMAGE_HEIGHT),Ys=ft.getParameter(H.UNPACK_SKIP_PIXELS),rn=ft.getParameter(H.UNPACK_SKIP_ROWS),ll=ft.getParameter(H.UNPACK_SKIP_IMAGES);ft.pixelStorei(H.UNPACK_ROW_LENGTH,Se.width),ft.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Se.height),ft.pixelStorei(H.UNPACK_SKIP_PIXELS,Ut),ft.pixelStorei(H.UNPACK_SKIP_ROWS,qt),ft.pixelStorei(H.UNPACK_SKIP_IMAGES,re);let ds=w.isDataArrayTexture||w.isData3DTexture,qs=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){let ue=Lt.get(w),$e=Lt.get(W),ei=Lt.get(ue.__renderTarget),Ae=Lt.get($e.__renderTarget);ft.bindFramebuffer(H.READ_FRAMEBUFFER,ei.__webglFramebuffer),ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ye=0;Ye<Ct;Ye++)ds&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Lt.get(w).__webglTexture,et,re+Ye),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Lt.get(W).__webglTexture,Mt,Ue+Ye)),H.blitFramebuffer(Ut,qt,Ut+Ot,qt+bt,Ft,oe,Ft+Ot,oe+bt,H.DEPTH_BUFFER_BIT,H.NEAREST);ft.bindFramebuffer(H.READ_FRAMEBUFFER,null),ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(et!==0||w.isRenderTargetTexture||Lt.has(w)){let ue=Lt.get(w),$e=Lt.get(W);ft.bindFramebuffer(H.READ_FRAMEBUFFER,O),ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,Z);for(let ei=0;ei<Ct;ei++)ds?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ue.__webglTexture,et,re+ei):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ue.__webglTexture,et),qs?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$e.__webglTexture,Mt,Ue+ei):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,$e.__webglTexture,Mt),et!==0?H.blitFramebuffer(Ut,qt,Ut+Ot,qt+bt,Ft,oe,Ft+Ot,oe+bt,H.COLOR_BUFFER_BIT,H.NEAREST):qs?H.copyTexSubImage3D(Nt,Mt,Ft,oe,Ue+ei,Ut,qt,Ot,bt):H.copyTexSubImage2D(Nt,Mt,Ft,oe,Ut,qt,Ot,bt);ft.bindFramebuffer(H.READ_FRAMEBUFFER,null),ft.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else qs?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Nt,Mt,Ft,oe,Ue,Ot,bt,Ct,ve,sn,Se.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(Nt,Mt,Ft,oe,Ue,Ot,bt,Ct,ve,Se.data):H.texSubImage3D(Nt,Mt,Ft,oe,Ue,Ot,bt,Ct,ve,sn,Se):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Mt,Ft,oe,Ot,bt,ve,sn,Se.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Mt,Ft,oe,Se.width,Se.height,ve,Se.data):H.texSubImage2D(H.TEXTURE_2D,Mt,Ft,oe,Ot,bt,ve,sn,Se);ft.pixelStorei(H.UNPACK_ROW_LENGTH,fn),ft.pixelStorei(H.UNPACK_IMAGE_HEIGHT,de),ft.pixelStorei(H.UNPACK_SKIP_PIXELS,Ys),ft.pixelStorei(H.UNPACK_SKIP_ROWS,rn),ft.pixelStorei(H.UNPACK_SKIP_IMAGES,ll),Mt===0&&W.generateMipmaps===!0&&W.mipmapsAutoUpdate===!0&&H.generateMipmap(Nt),ft.unbindTexture()},this.initRenderTarget=function(w){Lt.get(w).__webglFramebuffer===void 0&&Dt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Dt.setTextureCube(w,0):w.isData3DTexture?Dt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Dt.setTexture2DArray(w,0):Dt.setTexture2D(w,0),ft.unbindTexture()},this.resetState=function(){$=0,z=0,F=null,ft.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var So=function(s,t){let i=s,r=La[t],o=null,a=0,l=null,c=[],h={},u=function(_,y){a=i*4+17,o=(function(C){let E=new Array(C);for(let R=0;R<C;R+=1){E[R]=new Array(C);for(let L=0;L<C;L+=1)E[R][L]=null}return E})(a),d(0,0),d(a-7,0),d(0,a-7),x(),p(),g(_,y),i>=7&&m(_),l==null&&(l=T(i,r,c)),S(l,y)},d=function(_,y){for(let C=-1;C<=7;C+=1)if(!(_+C<=-1||a<=_+C))for(let E=-1;E<=7;E+=1)y+E<=-1||a<=y+E||(0<=C&&C<=6&&(E==0||E==6)||0<=E&&E<=6&&(C==0||C==6)||2<=C&&C<=4&&2<=E&&E<=4?o[_+C][y+E]=!0:o[_+C][y+E]=!1)},f=function(){let _=0,y=0;for(let C=0;C<8;C+=1){u(!0,C);let E=Rs.getLostPoint(h);(C==0||_>E)&&(_=E,y=C)}return y},p=function(){for(let _=8;_<a-8;_+=1)o[_][6]==null&&(o[_][6]=_%2==0);for(let _=8;_<a-8;_+=1)o[6][_]==null&&(o[6][_]=_%2==0)},x=function(){let _=Rs.getPatternPosition(i);for(let y=0;y<_.length;y+=1)for(let C=0;C<_.length;C+=1){let E=_[y],R=_[C];if(o[E][R]==null)for(let L=-2;L<=2;L+=1)for(let G=-2;G<=2;G+=1)L==-2||L==2||G==-2||G==2||L==0&&G==0?o[E+L][R+G]=!0:o[E+L][R+G]=!1}},m=function(_){let y=Rs.getBCHTypeNumber(i);for(let C=0;C<18;C+=1){let E=!_&&(y>>C&1)==1;o[Math.floor(C/3)][C%3+a-8-3]=E}for(let C=0;C<18;C+=1){let E=!_&&(y>>C&1)==1;o[C%3+a-8-3][Math.floor(C/3)]=E}},g=function(_,y){let C=r<<3|y,E=Rs.getBCHTypeInfo(C);for(let R=0;R<15;R+=1){let L=!_&&(E>>R&1)==1;R<6?o[R][8]=L:R<8?o[R+1][8]=L:o[a-15+R][8]=L}for(let R=0;R<15;R+=1){let L=!_&&(E>>R&1)==1;R<8?o[8][a-R-1]=L:R<9?o[8][15-R-1+1]=L:o[8][15-R-1]=L}o[a-8][8]=!_},S=function(_,y){let C=-1,E=a-1,R=7,L=0,G=Rs.getMaskFunction(y);for(let O=a-1;O>0;O-=2)for(O==6&&(O-=1);;){for(let Z=0;Z<2;Z+=1)if(o[E][O-Z]==null){let $=!1;L<_.length&&($=(_[L]>>>R&1)==1),G(E,O-Z)&&($=!$),o[E][O-Z]=$,R-=1,R==-1&&(L+=1,R=7)}if(E+=C,E<0||a<=E){E-=C,C=-C;break}}},P=function(_,y){let C=0,E=0,R=0,L=new Array(y.length),G=new Array(y.length);for(let z=0;z<y.length;z+=1){let F=y[z].dataCount,B=y[z].totalCount-F;E=Math.max(E,F),R=Math.max(R,B),L[z]=new Array(F);for(let St=0;St<L[z].length;St+=1)L[z][St]=255&_.getBuffer()[St+C];C+=F;let J=Rs.getErrorCorrectPolynomial(B),mt=Fa(L[z],J.getLength()-1).mod(J);G[z]=new Array(J.getLength()-1);for(let St=0;St<G[z].length;St+=1){let ot=St+mt.getLength()-G[z].length;G[z][St]=ot>=0?mt.getAt(ot):0}}let O=0;for(let z=0;z<y.length;z+=1)O+=y[z].totalCount;let Z=new Array(O),$=0;for(let z=0;z<E;z+=1)for(let F=0;F<y.length;F+=1)z<L[F].length&&(Z[$]=L[F][z],$+=1);for(let z=0;z<R;z+=1)for(let F=0;F<y.length;F+=1)z<G[F].length&&(Z[$]=G[F][z],$+=1);return Z},T=function(_,y,C){let E=ug.getRSBlocks(_,y),R=dg();for(let G=0;G<C.length;G+=1){let O=C[G];R.put(O.getMode(),4),R.put(O.getLength(),Rs.getLengthInBits(O.getMode(),_)),O.write(R)}let L=0;for(let G=0;G<E.length;G+=1)L+=E[G].dataCount;if(R.getLengthInBits()>L*8)throw"code length overflow. ("+R.getLengthInBits()+">"+L*8+")";for(R.getLengthInBits()+4<=L*8&&R.put(0,4);R.getLengthInBits()%8!=0;)R.putBit(!1);for(;!(R.getLengthInBits()>=L*8||(R.put(236,8),R.getLengthInBits()>=L*8));)R.put(17,8);return P(R,E)};h.addData=function(_,y){y=y||"Byte";let C=null;switch(y){case"Numeric":C=d1(_);break;case"Alphanumeric":C=f1(_);break;case"Byte":C=p1(_);break;case"Kanji":C=m1(_);break;default:throw"mode:"+y}c.push(C),l=null},h.isDark=function(_,y){if(_<0||a<=_||y<0||a<=y)throw _+","+y;return o[_][y]},h.getModuleCount=function(){return a},h.make=function(){if(i<1){let _=1;for(;_<40;_++){let y=ug.getRSBlocks(_,r),C=dg();for(let R=0;R<c.length;R++){let L=c[R];C.put(L.getMode(),4),C.put(L.getLength(),Rs.getLengthInBits(L.getMode(),_)),L.write(C)}let E=0;for(let R=0;R<y.length;R++)E+=y[R].dataCount;if(C.getLengthInBits()<=E*8)break}i=_}u(!1,f())},h.createTableTag=function(_,y){_=_||2,y=typeof y>"u"?_*4:y;let C="";C+='<table style="',C+=" border-width: 0px; border-style: none;",C+=" border-collapse: collapse;",C+=" padding: 0px; margin: "+y+"px;",C+='">',C+="<tbody>";for(let E=0;E<h.getModuleCount();E+=1){C+="<tr>";for(let R=0;R<h.getModuleCount();R+=1)C+='<td style="',C+=" border-width: 0px; border-style: none;",C+=" border-collapse: collapse;",C+=" padding: 0px; margin: 0px;",C+=" width: "+_+"px;",C+=" height: "+_+"px;",C+=" background-color: ",C+=h.isDark(E,R)?"#000000":"#ffffff",C+=";",C+='"/>';C+="</tr>"}return C+="</tbody>",C+="</table>",C},h.createSvgTag=function(_,y,C,E){let R={};typeof arguments[0]=="object"&&(R=arguments[0],_=R.cellSize,y=R.margin,C=R.alt,E=R.title),_=_||2,y=typeof y>"u"?_*4:y,C=typeof C=="string"?{text:C}:C||{},C.text=C.text||null,C.id=C.text?C.id||"qrcode-description":null,E=typeof E=="string"?{text:E}:E||{},E.text=E.text||null,E.id=E.text?E.id||"qrcode-title":null;let L=h.getModuleCount()*_+y*2,G,O,Z,$,z="",F;for(F="l"+_+",0 0,"+_+" -"+_+",0 0,-"+_+"z ",z+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',z+=R.scalable?"":' width="'+L+'px" height="'+L+'px"',z+=' viewBox="0 0 '+L+" "+L+'" ',z+=' preserveAspectRatio="xMinYMin meet"',z+=E.text||C.text?' role="img" aria-labelledby="'+A([E.id,C.id].join(" ").trim())+'"':"",z+=">",z+=E.text?'<title id="'+A(E.id)+'">'+A(E.text)+"</title>":"",z+=C.text?'<description id="'+A(C.id)+'">'+A(C.text)+"</description>":"",z+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',z+='<path d="',Z=0;Z<h.getModuleCount();Z+=1)for($=Z*_+y,G=0;G<h.getModuleCount();G+=1)h.isDark(Z,G)&&(O=G*_+y,z+="M"+O+","+$+F);return z+='" stroke="transparent" fill="black"/>',z+="</svg>",z},h.createDataURL=function(_,y){_=_||2,y=typeof y>"u"?_*4:y;let C=h.getModuleCount()*_+y*2,E=y,R=C-y;return v1(C,C,function(L,G){if(E<=L&&L<R&&E<=G&&G<R){let O=Math.floor((L-E)/_),Z=Math.floor((G-E)/_);return h.isDark(Z,O)?0:1}else return 1})},h.createImgTag=function(_,y,C){_=_||2,y=typeof y>"u"?_*4:y;let E=h.getModuleCount()*_+y*2,R="";return R+="<img",R+=' src="',R+=h.createDataURL(_,y),R+='"',R+=' width="',R+=E,R+='"',R+=' height="',R+=E,R+='"',C&&(R+=' alt="',R+=A(C),R+='"'),R+="/>",R};let A=function(_){let y="";for(let C=0;C<_.length;C+=1){let E=_.charAt(C);switch(E){case"<":y+="&lt;";break;case">":y+="&gt;";break;case"&":y+="&amp;";break;case'"':y+="&quot;";break;default:y+=E;break}}return y},D=function(_){_=typeof _>"u"?2:_;let C=h.getModuleCount()*1+_*2,E=_,R=C-_,L,G,O,Z,$,z={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},F={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},B="";for(L=0;L<C;L+=2){for(O=Math.floor((L-E)/1),Z=Math.floor((L+1-E)/1),G=0;G<C;G+=1)$="\u2588",E<=G&&G<R&&E<=L&&L<R&&h.isDark(O,Math.floor((G-E)/1))&&($=" "),E<=G&&G<R&&E<=L+1&&L+1<R&&h.isDark(Z,Math.floor((G-E)/1))?$+=" ":$+="\u2588",B+=_<1&&L+1>=R?F[$]:z[$];B+=`
`}return C%2&&_>0?B.substring(0,B.length-C-1)+Array(C+1).join("\u2580"):B.substring(0,B.length-1)};return h.createASCII=function(_,y){if(_=_||1,_<2)return D(y);_-=1,y=typeof y>"u"?_*2:y;let C=h.getModuleCount()*_+y*2,E=y,R=C-y,L,G,O,Z,$=Array(_+1).join("\u2588\u2588"),z=Array(_+1).join("  "),F="",B="";for(L=0;L<C;L+=1){for(O=Math.floor((L-E)/_),B="",G=0;G<C;G+=1)Z=1,E<=G&&G<R&&E<=L&&L<R&&h.isDark(O,Math.floor((G-E)/_))&&(Z=0),B+=Z?$:z;for(O=0;O<_;O+=1)F+=B+`
`}return F.substring(0,F.length-1)},h.renderTo2dContext=function(_,y){y=y||2;let C=h.getModuleCount();for(let E=0;E<C;E++)for(let R=0;R<C;R++)_.fillStyle=h.isDark(E,R)?"black":"white",_.fillRect(R*y,E*y,y,y)},h};So.stringToBytes=function(s){let t=[];for(let e=0;e<s.length;e+=1){let n=s.charCodeAt(e);t.push(n&255)}return t};So.createStringToBytes=function(s,t){let e=(function(){let i=_1(s),r=function(){let l=i.read();if(l==-1)throw"eof";return l},o=0,a={};for(;;){let l=i.read();if(l==-1)break;let c=r(),h=r(),u=r(),d=String.fromCharCode(l<<8|c),f=h<<8|u;a[d]=f,o+=1}if(o!=t)throw o+" != "+t;return a})(),n=63;return function(i){let r=[];for(let o=0;o<i.length;o+=1){let a=i.charCodeAt(o);if(a<128)r.push(a);else{let l=e[i.charAt(o)];typeof l=="number"?(l&255)==l?r.push(l):(r.push(l>>>8),r.push(l&255)):r.push(n)}}return r}};var hn={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},La={L:1,M:0,Q:3,H:2},As={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},Rs=(function(){let s=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],t=1335,e=7973,n=21522,i={},r=function(o){let a=0;for(;o!=0;)a+=1,o>>>=1;return a};return i.getBCHTypeInfo=function(o){let a=o<<10;for(;r(a)-r(t)>=0;)a^=t<<r(a)-r(t);return(o<<10|a)^n},i.getBCHTypeNumber=function(o){let a=o<<12;for(;r(a)-r(e)>=0;)a^=e<<r(a)-r(e);return o<<12|a},i.getPatternPosition=function(o){return s[o-1]},i.getMaskFunction=function(o){switch(o){case As.PATTERN000:return function(a,l){return(a+l)%2==0};case As.PATTERN001:return function(a,l){return a%2==0};case As.PATTERN010:return function(a,l){return l%3==0};case As.PATTERN011:return function(a,l){return(a+l)%3==0};case As.PATTERN100:return function(a,l){return(Math.floor(a/2)+Math.floor(l/3))%2==0};case As.PATTERN101:return function(a,l){return a*l%2+a*l%3==0};case As.PATTERN110:return function(a,l){return(a*l%2+a*l%3)%2==0};case As.PATTERN111:return function(a,l){return(a*l%3+(a+l)%2)%2==0};default:throw"bad maskPattern:"+o}},i.getErrorCorrectPolynomial=function(o){let a=Fa([1],0);for(let l=0;l<o;l+=1)a=a.multiply(Fa([1,Ps.gexp(l)],0));return a},i.getLengthInBits=function(o,a){if(1<=a&&a<10)switch(o){case hn.MODE_NUMBER:return 10;case hn.MODE_ALPHA_NUM:return 9;case hn.MODE_8BIT_BYTE:return 8;case hn.MODE_KANJI:return 8;default:throw"mode:"+o}else if(a<27)switch(o){case hn.MODE_NUMBER:return 12;case hn.MODE_ALPHA_NUM:return 11;case hn.MODE_8BIT_BYTE:return 16;case hn.MODE_KANJI:return 10;default:throw"mode:"+o}else if(a<41)switch(o){case hn.MODE_NUMBER:return 14;case hn.MODE_ALPHA_NUM:return 13;case hn.MODE_8BIT_BYTE:return 16;case hn.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+a},i.getLostPoint=function(o){let a=o.getModuleCount(),l=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1){let f=0,p=o.isDark(u,d);for(let x=-1;x<=1;x+=1)if(!(u+x<0||a<=u+x))for(let m=-1;m<=1;m+=1)d+m<0||a<=d+m||x==0&&m==0||p==o.isDark(u+x,d+m)&&(f+=1);f>5&&(l+=3+f-5)}for(let u=0;u<a-1;u+=1)for(let d=0;d<a-1;d+=1){let f=0;o.isDark(u,d)&&(f+=1),o.isDark(u+1,d)&&(f+=1),o.isDark(u,d+1)&&(f+=1),o.isDark(u+1,d+1)&&(f+=1),(f==0||f==4)&&(l+=3)}for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(u,d)&&!o.isDark(u,d+1)&&o.isDark(u,d+2)&&o.isDark(u,d+3)&&o.isDark(u,d+4)&&!o.isDark(u,d+5)&&o.isDark(u,d+6)&&(l+=40);for(let u=0;u<a;u+=1)for(let d=0;d<a-6;d+=1)o.isDark(d,u)&&!o.isDark(d+1,u)&&o.isDark(d+2,u)&&o.isDark(d+3,u)&&o.isDark(d+4,u)&&!o.isDark(d+5,u)&&o.isDark(d+6,u)&&(l+=40);let c=0;for(let u=0;u<a;u+=1)for(let d=0;d<a;d+=1)o.isDark(d,u)&&(c+=1);let h=Math.abs(100*c/a/a-50)/5;return l+=h*10,l},i})(),Ps=(function(){let s=new Array(256),t=new Array(256);for(let n=0;n<8;n+=1)s[n]=1<<n;for(let n=8;n<256;n+=1)s[n]=s[n-4]^s[n-5]^s[n-6]^s[n-8];for(let n=0;n<255;n+=1)t[s[n]]=n;let e={};return e.glog=function(n){if(n<1)throw"glog("+n+")";return t[n]},e.gexp=function(n){for(;n<0;)n+=255;for(;n>=256;)n-=255;return s[n]},e})(),Fa=function(s,t){if(typeof s.length>"u")throw s.length+"/"+t;let e=(function(){let i=0;for(;i<s.length&&s[i]==0;)i+=1;let r=new Array(s.length-i+t);for(let o=0;o<s.length-i;o+=1)r[o]=s[o+i];return r})(),n={};return n.getAt=function(i){return e[i]},n.getLength=function(){return e.length},n.multiply=function(i){let r=new Array(n.getLength()+i.getLength()-1);for(let o=0;o<n.getLength();o+=1)for(let a=0;a<i.getLength();a+=1)r[o+a]^=Ps.gexp(Ps.glog(n.getAt(o))+Ps.glog(i.getAt(a)));return Fa(r,0)},n.mod=function(i){if(n.getLength()-i.getLength()<0)return n;let r=Ps.glog(n.getAt(0))-Ps.glog(i.getAt(0)),o=new Array(n.getLength());for(let a=0;a<n.getLength();a+=1)o[a]=n.getAt(a);for(let a=0;a<i.getLength();a+=1)o[a]^=Ps.gexp(Ps.glog(i.getAt(a))+r);return Fa(o,0).mod(i)},n},ug=(function(){let s=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],t=function(i,r){let o={};return o.totalCount=i,o.dataCount=r,o},e={},n=function(i,r){switch(r){case La.L:return s[(i-1)*4+0];case La.M:return s[(i-1)*4+1];case La.Q:return s[(i-1)*4+2];case La.H:return s[(i-1)*4+3];default:return}};return e.getRSBlocks=function(i,r){let o=n(i,r);if(typeof o>"u")throw"bad rs block @ typeNumber:"+i+"/errorCorrectionLevel:"+r;let a=o.length/3,l=[];for(let c=0;c<a;c+=1){let h=o[c*3+0],u=o[c*3+1],d=o[c*3+2];for(let f=0;f<h;f+=1)l.push(t(u,d))}return l},e})(),dg=function(){let s=[],t=0,e={};return e.getBuffer=function(){return s},e.getAt=function(n){let i=Math.floor(n/8);return(s[i]>>>7-n%8&1)==1},e.put=function(n,i){for(let r=0;r<i;r+=1)e.putBit((n>>>i-r-1&1)==1)},e.getLengthInBits=function(){return t},e.putBit=function(n){let i=Math.floor(t/8);s.length<=i&&s.push(0),n&&(s[i]|=128>>>t%8),t+=1},e},d1=function(s){let t=hn.MODE_NUMBER,e=s,n={};n.getMode=function(){return t},n.getLength=function(o){return e.length},n.write=function(o){let a=e,l=0;for(;l+2<a.length;)o.put(i(a.substring(l,l+3)),10),l+=3;l<a.length&&(a.length-l==1?o.put(i(a.substring(l,l+1)),4):a.length-l==2&&o.put(i(a.substring(l,l+2)),7))};let i=function(o){let a=0;for(let l=0;l<o.length;l+=1)a=a*10+r(o.charAt(l));return a},r=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return n},f1=function(s){let t=hn.MODE_ALPHA_NUM,e=s,n={};n.getMode=function(){return t},n.getLength=function(r){return e.length},n.write=function(r){let o=e,a=0;for(;a+1<o.length;)r.put(i(o.charAt(a))*45+i(o.charAt(a+1)),11),a+=2;a<o.length&&r.put(i(o.charAt(a)),6)};let i=function(r){if("0"<=r&&r<="9")return r.charCodeAt(0)-48;if("A"<=r&&r<="Z")return r.charCodeAt(0)-65+10;switch(r){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+r}};return n},p1=function(s){let t=hn.MODE_8BIT_BYTE,e=s,n=So.stringToBytes(s),i={};return i.getMode=function(){return t},i.getLength=function(r){return n.length},i.write=function(r){for(let o=0;o<n.length;o+=1)r.put(n[o],8)},i},m1=function(s){let t=hn.MODE_KANJI,e=s,n=So.stringToBytes;(function(o,a){let l=n(o);if(l.length!=2||(l[0]<<8|l[1])!=a)throw"sjis not supported."})("\u53CB",38726);let i=n(s),r={};return r.getMode=function(){return t},r.getLength=function(o){return~~(i.length/2)},r.write=function(o){let a=i,l=0;for(;l+1<a.length;){let c=(255&a[l])<<8|255&a[l+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(l+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),l+=2}if(l<a.length)throw"illegal char at "+(l+1)},r},fg=function(){let s=[],t={};return t.writeByte=function(e){s.push(e&255)},t.writeShort=function(e){t.writeByte(e),t.writeByte(e>>>8)},t.writeBytes=function(e,n,i){n=n||0,i=i||e.length;for(let r=0;r<i;r+=1)t.writeByte(e[r+n])},t.writeString=function(e){for(let n=0;n<e.length;n+=1)t.writeByte(e.charCodeAt(n))},t.toByteArray=function(){return s},t.toString=function(){let e="";e+="[";for(let n=0;n<s.length;n+=1)n>0&&(e+=","),e+=s[n];return e+="]",e},t},g1=function(){let s=0,t=0,e=0,n="",i={},r=function(a){n+=String.fromCharCode(o(a&63))},o=function(a){if(a<0)throw"n:"+a;if(a<26)return 65+a;if(a<52)return 97+(a-26);if(a<62)return 48+(a-52);if(a==62)return 43;if(a==63)return 47;throw"n:"+a};return i.writeByte=function(a){for(s=s<<8|a&255,t+=8,e+=1;t>=6;)r(s>>>t-6),t-=6},i.flush=function(){if(t>0&&(r(s<<6-t),s=0,t=0),e%3!=0){let a=3-e%3;for(let l=0;l<a;l+=1)n+="="}},i.toString=function(){return n},i},_1=function(s){let t=s,e=0,n=0,i=0,r={};r.read=function(){for(;i<8;){if(e>=t.length){if(i==0)return-1;throw"unexpected end of file./"+i}let l=t.charAt(e);if(e+=1,l=="=")return i=0,-1;if(l.match(/^\s$/))continue;n=n<<6|o(l.charCodeAt(0)),i+=6}let a=n>>>i-8&255;return i-=8,a};let o=function(a){if(65<=a&&a<=90)return a-65;if(97<=a&&a<=122)return a-97+26;if(48<=a&&a<=57)return a-48+52;if(a==43)return 62;if(a==47)return 63;throw"c:"+a};return r},x1=function(s,t){let e=s,n=t,i=new Array(s*t),r={};r.setPixel=function(c,h,u){i[h*e+c]=u},r.write=function(c){c.writeString("GIF87a"),c.writeShort(e),c.writeShort(n),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(e),c.writeShort(n),c.writeByte(0);let h=2,u=a(h);c.writeByte(h);let d=0;for(;u.length-d>255;)c.writeByte(255),c.writeBytes(u,d,255),d+=255;c.writeByte(u.length-d),c.writeBytes(u,d,u.length-d),c.writeByte(0),c.writeString(";")};let o=function(c){let h=c,u=0,d=0,f={};return f.write=function(p,x){if(p>>>x)throw"length over";for(;u+x>=8;)h.writeByte(255&(p<<u|d)),x-=8-u,p>>>=8-u,d=0,u=0;d=p<<u|d,u=u+x},f.flush=function(){u>0&&h.writeByte(d)},f},a=function(c){let h=1<<c,u=(1<<c)+1,d=c+1,f=l();for(let S=0;S<h;S+=1)f.add(String.fromCharCode(S));f.add(String.fromCharCode(h)),f.add(String.fromCharCode(u));let p=fg(),x=o(p);x.write(h,d);let m=0,g=String.fromCharCode(i[m]);for(m+=1;m<i.length;){let S=String.fromCharCode(i[m]);m+=1,f.contains(g+S)?g=g+S:(x.write(f.indexOf(g),d),f.size()<4095&&(f.size()==1<<d&&(d+=1),f.add(g+S)),g=S)}return x.write(f.indexOf(g),d),x.write(u,d),x.flush(),p.toByteArray()},l=function(){let c={},h=0,u={};return u.add=function(d){if(u.contains(d))throw"dup key:"+d;c[d]=h,h+=1},u.size=function(){return h},u.indexOf=function(d){return c[d]},u.contains=function(d){return typeof c[d]<"u"},u};return r},v1=function(s,t,e){let n=x1(s,t);for(let a=0;a<t;a+=1)for(let l=0;l<s;l+=1)n.setPixel(l,a,e(l,a));let i=fg();n.write(i);let r=g1(),o=i.toByteArray();for(let a=0;a<o.length;a+=1)r.writeByte(o[a]);return r.flush(),"data:image/gif;base64,"+r},Pd=So,PA=So.stringToBytes;function j(s,t,e){return(t=(function(n){var i=(function(r,o){if(typeof r!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var l=a.call(r,o||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(r)})(n,"string");return typeof i=="symbol"?i:i+""})(t))in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function pg(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(s);t&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(s,i).enumerable}))),e.push.apply(e,n)}return e}function X(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?pg(Object(e),!0).forEach((function(n){j(s,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):pg(Object(e)).forEach((function(n){Object.defineProperty(s,n,Object.getOwnPropertyDescriptor(e,n))}))}return s}function Me(s,t){if(s==null)return{};var e,n,i=(function(o,a){if(o==null)return{};var l={};for(var c in o)if({}.hasOwnProperty.call(o,c)){if(a.indexOf(c)>=0)continue;l[c]=o[c]}return l})(s,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)e=r[n],t.indexOf(e)>=0||{}.propertyIsEnumerable.call(s,e)&&(i[e]=s[e])}return i}function ki(s,t){return t||(t=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(t)}}))}var lh=class{constructor(){j(this,"browserShadowBlurConstant",1),j(this,"DPI",96),j(this,"devicePixelRatio",typeof window<"u"?window.devicePixelRatio:1),j(this,"perfLimitSizeTotal",2097152),j(this,"maxCacheSideLimit",4096),j(this,"minCacheSideLimit",256),j(this,"disableStyleCopyPaste",!1),j(this,"enableGLFiltering",!0),j(this,"textureSize",4096),j(this,"forceGLPutImageData",!1),j(this,"cachesBoundsOfCurve",!1),j(this,"fontPaths",{}),j(this,"NUM_FRACTION_DIGITS",4)}},he=new class extends lh{constructor(s){super(),this.configure(s)}configure(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.assign(this,s)}addFonts(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.fontPaths=X(X({},this.fontPaths),s)}removeFonts(){(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).forEach((s=>{delete this.fontPaths[s]}))}clearFonts(){this.fontPaths={}}restoreDefaults(s){let t=new lh,e=s?.reduce(((n,i)=>(n[i]=t[i],n)),{})||t;this.configure(e)}},Fs=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return console[s]("fabric",...e)},Kn=class extends Error{constructor(t,e){super("fabric: ".concat(t),e)}},ch=class extends Kn{constructor(t){super("".concat(t," 'options.signal' is in 'aborted' state"))}},Hd=class{},Wd=class extends Hd{testPrecision(t,e){let n="precision ".concat(e,` float;
void main(){}`),i=t.createShader(t.FRAGMENT_SHADER);return!!i&&(t.shaderSource(i,n),t.compileShader(i),!!t.getShaderParameter(i,t.COMPILE_STATUS))}queryWebGL(t){let e=t.getContext("webgl");e&&(this.maxTextureSize=e.getParameter(e.MAX_TEXTURE_SIZE),this.GLPrecision=["highp","mediump","lowp"].find((n=>this.testPrecision(e,n))),e.getExtension("WEBGL_lose_context").loseContext(),Fs("log","WebGL: max texture size ".concat(this.maxTextureSize)))}isSupported(t){return!!this.maxTextureSize&&this.maxTextureSize>=t}},y1={},mg;var Ni=()=>mg||(mg={document,window,isTouchSupported:"ontouchstart"in window||"ontouchstart"in document||window&&window.navigator&&window.navigator.maxTouchPoints>0,WebGLProbe:new Wd,dispose(){},copyPasteData:y1}),ko=()=>Ni().document,Ja=()=>Ni().window,Zg=()=>{var s;return Math.max((s=he.devicePixelRatio)!==null&&s!==void 0?s:Ja().devicePixelRatio,1)},za=new class{constructor(){j(this,"boundsOfCurveCache",{}),this.charWidthsCache=new Map}getFontCache(s){let{fontFamily:t,fontStyle:e,fontWeight:n}=s;t=t.toLowerCase();let i=this.charWidthsCache;i.has(t)||i.set(t,new Map);let r=i.get(t),o="".concat(e.toLowerCase(),"_").concat((n+"").toLowerCase());return r.has(o)||r.set(o,new Map),r.get(o)}clearFontCache(s){s?this.charWidthsCache.delete((s||"").toLowerCase()):this.charWidthsCache=new Map}limitDimsByArea(s){let{perfLimitSizeTotal:t}=he,e=Math.sqrt(t*s);return[Math.floor(e),Math.floor(t/e)]}},Xd="6.9.1";function Er(){}var Ns=Math.PI/2,rs=2*Math.PI,Sf=Math.PI/180,xn=Object.freeze([1,0,0,1,0,0]),bf=16,Ds=.4477152502,Zt="center",pe="left",Tn="top",jd="bottom",Le="right",Cn="none",Mf=/\r?\n/,Jg="moving",Uh="scaling",Kg="rotating",wf="rotate",$g="skewing",Xa="resizing",Qg="modifyPoly",S1="modifyPath",hh="changed",Bh="scale",vn="scaleX",zn="scaleY",zo="skewX",Vo="skewY",He="fill",En="stroke",uh="modified",bo="json",Dd="svg",Et=new class{constructor(){this[bo]=new Map,this[Dd]=new Map}has(s){return this[bo].has(s)}getClass(s){let t=this[bo].get(s);if(!t)throw new Kn("No class registered for ".concat(s));return t}setClass(s,t){t?this[bo].set(t,s):(this[bo].set(s.type,s),this[bo].set(s.type.toLowerCase(),s))}getSVGClass(s){return this[Dd].get(s)}setSVGClass(s,t){this[Dd].set(t??s.type.toLowerCase(),s)}},dh=new class extends Array{remove(s){let t=this.indexOf(s);t>-1&&this.splice(t,1)}cancelAll(){let s=this.splice(0);return s.forEach((t=>t.abort())),s}cancelByCanvas(s){if(!s)return[];let t=this.filter((e=>{var n;return e.target===s||typeof e.target=="object"&&((n=e.target)===null||n===void 0?void 0:n.canvas)===s}));return t.forEach((e=>e.abort())),t}cancelByTarget(s){if(!s)return[];let t=this.filter((e=>e.target===s));return t.forEach((e=>e.abort())),t}},Yd=class{constructor(){j(this,"__eventListeners",{})}on(t,e){if(this.__eventListeners||(this.__eventListeners={}),typeof t=="object")return Object.entries(t).forEach((n=>{let[i,r]=n;this.on(i,r)})),()=>this.off(t);if(e){let n=t;return this.__eventListeners[n]||(this.__eventListeners[n]=[]),this.__eventListeners[n].push(e),()=>this.off(n,e)}return()=>!1}once(t,e){if(typeof t=="object"){let n=[];return Object.entries(t).forEach((i=>{let[r,o]=i;n.push(this.once(r,o))})),()=>n.forEach((i=>i()))}if(e){let n=this.on(t,(function(){for(var i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];e.call(this,...r),n()}));return n}return()=>!1}_removeEventListener(t,e){if(this.__eventListeners[t])if(e){let n=this.__eventListeners[t],i=n.indexOf(e);i>-1&&n.splice(i,1)}else this.__eventListeners[t]=[]}off(t,e){if(this.__eventListeners)if(t===void 0)for(let n in this.__eventListeners)this._removeEventListener(n);else typeof t=="object"?Object.entries(t).forEach((n=>{let[i,r]=n;this._removeEventListener(i,r)})):this._removeEventListener(t,e)}fire(t,e){var n;if(!this.__eventListeners)return;let i=(n=this.__eventListeners[t])===null||n===void 0?void 0:n.concat();if(i)for(let r=0;r<i.length;r++)i[r].call(this,e||{})}},lr=(s,t)=>{let e=s.indexOf(t);return e!==-1&&s.splice(e,1),s},gi=s=>{if(s===0)return 1;switch(Math.abs(s)/Ns){case 1:case 3:return 0;case 2:return-1}return Math.cos(s)},_i=s=>{if(s===0)return 0;let t=s/Ns,e=Math.sign(s);switch(t){case 1:return e;case 2:return 0;case 3:return-e}return Math.sin(s)},st=class s{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;typeof t=="object"?(this.x=t.x,this.y=t.y):(this.x=t,this.y=e)}add(t){return new s(this.x+t.x,this.y+t.y)}addEquals(t){return this.x+=t.x,this.y+=t.y,this}scalarAdd(t){return new s(this.x+t,this.y+t)}scalarAddEquals(t){return this.x+=t,this.y+=t,this}subtract(t){return new s(this.x-t.x,this.y-t.y)}subtractEquals(t){return this.x-=t.x,this.y-=t.y,this}scalarSubtract(t){return new s(this.x-t,this.y-t)}scalarSubtractEquals(t){return this.x-=t,this.y-=t,this}multiply(t){return new s(this.x*t.x,this.y*t.y)}scalarMultiply(t){return new s(this.x*t,this.y*t)}scalarMultiplyEquals(t){return this.x*=t,this.y*=t,this}divide(t){return new s(this.x/t.x,this.y/t.y)}scalarDivide(t){return new s(this.x/t,this.y/t)}scalarDivideEquals(t){return this.x/=t,this.y/=t,this}eq(t){return this.x===t.x&&this.y===t.y}lt(t){return this.x<t.x&&this.y<t.y}lte(t){return this.x<=t.x&&this.y<=t.y}gt(t){return this.x>t.x&&this.y>t.y}gte(t){return this.x>=t.x&&this.y>=t.y}lerp(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.5;return e=Math.max(Math.min(1,e),0),new s(this.x+(t.x-this.x)*e,this.y+(t.y-this.y)*e)}distanceFrom(t){let e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)}midPointFrom(t){return this.lerp(t)}min(t){return new s(Math.min(this.x,t.x),Math.min(this.y,t.y))}max(t){return new s(Math.max(this.x,t.x),Math.max(this.y,t.y))}toString(){return"".concat(this.x,",").concat(this.y)}setXY(t,e){return this.x=t,this.y=e,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setFromPoint(t){return this.x=t.x,this.y=t.y,this}swap(t){let e=this.x,n=this.y;this.x=t.x,this.y=t.y,t.x=e,t.y=n}clone(){return new s(this.x,this.y)}rotate(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Tf,n=_i(t),i=gi(t),r=this.subtract(e);return new s(r.x*i-r.y*n,r.x*n+r.y*i).add(e)}transform(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return new s(t[0]*this.x+t[2]*this.y+(e?0:t[4]),t[1]*this.x+t[3]*this.y+(e?0:t[5]))}},Tf=new st(0,0),oh=s=>!!s&&Array.isArray(s._objects);function t0(s){class t extends s{constructor(){super(...arguments),j(this,"_objects",[])}_onObjectAdded(n){}_onObjectRemoved(n){}_onStackOrderChanged(n){}add(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];let o=this._objects.push(...i);return i.forEach((a=>this._onObjectAdded(a))),o}insertAt(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];return this._objects.splice(n,0,...r),r.forEach((a=>this._onObjectAdded(a))),this._objects.length}remove(){let n=this._objects,i=[];for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return o.forEach((l=>{let c=n.indexOf(l);c!==-1&&(n.splice(c,1),i.push(l),this._onObjectRemoved(l))})),i}forEachObject(n){this.getObjects().forEach(((i,r,o)=>n(i,r,o)))}getObjects(){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return i.length===0?[...this._objects]:this._objects.filter((o=>o.isType(...i)))}item(n){return this._objects[n]}isEmpty(){return this._objects.length===0}size(){return this._objects.length}contains(n,i){return!!this._objects.includes(n)||!!i&&this._objects.some((r=>r instanceof t&&r.contains(n,!0)))}complexity(){return this._objects.reduce(((n,i)=>n+=i.complexity?i.complexity():0),0)}sendObjectToBack(n){return!(!n||n===this._objects[0])&&(lr(this._objects,n),this._objects.unshift(n),this._onStackOrderChanged(n),!0)}bringObjectToFront(n){return!(!n||n===this._objects[this._objects.length-1])&&(lr(this._objects,n),this._objects.push(n),this._onStackOrderChanged(n),!0)}sendObjectBackwards(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==0){let o=this.findNewLowerIndex(n,r,i);return lr(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}bringObjectForward(n,i){if(!n)return!1;let r=this._objects.indexOf(n);if(r!==this._objects.length-1){let o=this.findNewUpperIndex(n,r,i);return lr(this._objects,n),this._objects.splice(o,0,n),this._onStackOrderChanged(n),!0}return!1}moveObjectTo(n,i){return n!==this._objects[i]&&(lr(this._objects,n),this._objects.splice(i,0,n),this._onStackOrderChanged(n),!0)}findNewLowerIndex(n,i,r){let o;if(r){o=i;for(let a=i-1;a>=0;--a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i-1;return o}findNewUpperIndex(n,i,r){let o;if(r){o=i;for(let a=i+1;a<this._objects.length;++a)if(n.isOverlapping(this._objects[a])){o=a;break}}else o=i+1;return o}collectObjects(n){let{left:i,top:r,width:o,height:a}=n,{includeIntersecting:l=!0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=[],h=new st(i,r),u=h.add(new st(o,a));for(let d=this._objects.length-1;d>=0;d--){let f=this._objects[d];f.selectable&&f.visible&&(l&&f.intersectsWithRect(h,u)||f.isContainedWithinRect(h,u)||l&&f.containsPoint(h)||l&&f.containsPoint(u))&&c.push(f)}return c}}return t}var fh=class extends Yd{_setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};for(let e in t)this.set(e,t[e])}_setObject(t){for(let e in t)this._set(e,t[e])}set(t,e){return typeof t=="object"?this._setObject(t):this._set(t,e),this}_set(t,e){this[t]=e}toggle(t){let e=this.get(t);return typeof e=="boolean"&&this.set(t,!e),this}get(t){return this[t]}};function Va(s){return Ja().requestAnimationFrame(s)}function e0(s){return Ja().cancelAnimationFrame(s)}var b1=0,Us=()=>b1++,Ui=()=>{let s=ko().createElement("canvas");if(!s||s.getContext===void 0)throw new Kn("Failed to create `canvas` element");return s},n0=()=>ko().createElement("img"),Vn=s=>{let t=Ui();return t.width=s.width,t.height=s.height,t},Cf=(s,t,e)=>s.toDataURL("image/".concat(t),e),Ef=(s,t,e)=>new Promise(((n,i)=>{s.toBlob(n,"image/".concat(t),e)})),Re=s=>s*Sf,Bi=s=>s/Sf,i0=s=>s.every(((t,e)=>t===xn[e])),un=(s,t,e)=>new st(s).transform(t,e),kn=s=>{let t=1/(s[0]*s[3]-s[1]*s[2]),e=[t*s[3],-t*s[1],-t*s[2],t*s[0],0,0],{x:n,y:i}=new st(s[4],s[5]).transform(e,!0);return e[4]=-n,e[5]=-i,e},Pe=(s,t,e)=>[s[0]*t[0]+s[2]*t[1],s[1]*t[0]+s[3]*t[1],s[0]*t[2]+s[2]*t[3],s[1]*t[2]+s[3]*t[3],e?0:s[0]*t[4]+s[2]*t[5]+s[4],e?0:s[1]*t[4]+s[3]*t[5]+s[5]],kh=(s,t)=>s.reduceRight(((e,n)=>n&&e?Pe(n,e,t):n||e),void 0)||xn.concat(),s0=s=>{let[t,e]=s;return Math.atan2(e,t)},Oo=s=>{let t=s0(s),e=Math.pow(s[0],2)+Math.pow(s[1],2),n=Math.sqrt(e),i=(s[0]*s[3]-s[2]*s[1])/n,r=Math.atan2(s[0]*s[2]+s[1]*s[3],e);return{angle:Bi(t),scaleX:n,scaleY:i,skewX:Bi(r),skewY:0,translateX:s[4]||0,translateY:s[5]||0}},Go=function(s){return[1,0,0,1,s,arguments.length>1&&arguments[1]!==void 0?arguments[1]:0]};function Nr(){let{angle:s=0}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{x:t=0,y:e=0}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Re(s),i=gi(n),r=_i(n);return[i,r,-r,i,t?t-(i*t-r*e):0,e?e-(r*t+i*e):0]}var zh=function(s){return[s,0,0,arguments.length>1&&arguments[1]!==void 0?arguments[1]:s,0,0]},r0=s=>Math.tan(Re(s)),Af=s=>[1,0,r0(s),1,0,0],Rf=s=>[1,r0(s),0,1,0,0],Ka=s=>{let{scaleX:t=1,scaleY:e=1,flipX:n=!1,flipY:i=!1,skewX:r=0,skewY:o=0}=s,a=zh(n?-t:t,i?-e:e);return r&&(a=Pe(a,Af(r),!0)),o&&(a=Pe(a,Rf(o),!0)),a},o0=s=>{let{translateX:t=0,translateY:e=0,angle:n=0}=s,i=Go(t,e);n&&(i=Pe(i,Nr({angle:n})));let r=Ka(s);return i0(r)||(i=Pe(i,r)),i},Ga=function(s){let{signal:t,crossOrigin:e=null}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise((function(n,i){if(t&&t.aborted)return i(new ch("loadImage"));let r=n0(),o;t&&(o=function(l){r.src="",i(l)},t.addEventListener("abort",o,{once:!0}));let a=function(){r.onload=r.onerror=null,o&&t?.removeEventListener("abort",o),n(r)};s?(r.onload=a,r.onerror=function(){o&&t?.removeEventListener("abort",o),i(new Kn("Error loading ".concat(r.src)))},e&&(r.crossOrigin=e),r.src=s):a()}))},Lo=function(s){let{signal:t,reviver:e=Er}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((n,i)=>{let r=[];t&&t.addEventListener("abort",i,{once:!0}),Promise.all(s.map((o=>Et.getClass(o.type).fromObject(o,{signal:t}).then((a=>(e(o,a),r.push(a),a)))))).then(n).catch((o=>{r.forEach((a=>{a.dispose&&a.dispose()})),i(o)})).finally((()=>{t&&t.removeEventListener("abort",i)}))}))},$a=function(s){let{signal:t}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return new Promise(((e,n)=>{let i=[];t&&t.addEventListener("abort",n,{once:!0});let r=Object.values(s).map((a=>a&&a.type&&Et.has(a.type)?Lo([a],{signal:t}).then((l=>{let[c]=l;return i.push(c),c})):a)),o=Object.keys(s);Promise.all(r).then((a=>a.reduce(((l,c,h)=>(l[o[h]]=c,l)),{}))).then(e).catch((a=>{i.forEach((l=>{l.dispose&&l.dispose()})),n(a)})).finally((()=>{t&&t.removeEventListener("abort",n)}))}))},Ur=function(s){return(arguments.length>1&&arguments[1]!==void 0?arguments[1]:[]).reduce(((t,e)=>(e in s&&(t[e]=s[e]),t)),{})},Pf=(s,t)=>Object.keys(s).reduce(((e,n)=>(t(s[n],n,s)&&(e[n]=s[n]),e)),{}),ye=(s,t)=>parseFloat(Number(s).toFixed(t)),Fo=s=>"matrix("+s.map((t=>ye(t,he.NUM_FRACTION_DIGITS))).join(" ")+")",Jn=s=>!!s&&s.toLive!==void 0,gg=s=>!!s&&typeof s.toObject=="function",_g=s=>!!s&&s.offsetX!==void 0&&"source"in s,cr=s=>!!s&&"multiSelectionStacking"in s;function a0(s){let t=s&&di(s),e=0,n=0;if(!s||!t)return{left:e,top:n};let i=s,r=t.documentElement,o=t.body||{scrollLeft:0,scrollTop:0};for(;i&&(i.parentNode||i.host)&&(i=i.parentNode||i.host,i===t?(e=o.scrollLeft||r.scrollLeft||0,n=o.scrollTop||r.scrollTop||0):(e+=i.scrollLeft||0,n+=i.scrollTop||0),i.nodeType!==1||i.style.position!=="fixed"););return{left:e,top:n}}var di=s=>s.ownerDocument||null,l0=s=>{var t;return((t=s.ownerDocument)===null||t===void 0?void 0:t.defaultView)||null},c0=function(s,t,e){let{width:n,height:i}=e,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;s.width=n,s.height=i,r>1&&(s.setAttribute("width",(n*r).toString()),s.setAttribute("height",(i*r).toString()),t.scale(r,r))},qd=(s,t)=>{let{width:e,height:n}=t;e&&(s.style.width=typeof e=="number"?"".concat(e,"px"):e),n&&(s.style.height=typeof n=="number"?"".concat(n,"px"):n)};function xg(s){return s.onselectstart!==void 0&&(s.onselectstart=()=>!1),s.style.userSelect=Cn,s}var ph=class{constructor(t){j(this,"_originalCanvasStyle",void 0),j(this,"lower",void 0);let e=this.createLowerCanvas(t);this.lower={el:e,ctx:e.getContext("2d")}}createLowerCanvas(t){let e=(n=t)&&n.getContext!==void 0?t:t&&ko().getElementById(t)||Ui();var n;if(e.hasAttribute("data-fabric"))throw new Kn("Trying to initialize a canvas that has already been initialized. Did you forget to dispose the canvas?");return this._originalCanvasStyle=e.style.cssText,e.setAttribute("data-fabric","main"),e.classList.add("lower-canvas"),e}cleanupDOM(t){let{width:e,height:n}=t,{el:i}=this.lower;i.classList.remove("lower-canvas"),i.removeAttribute("data-fabric"),i.setAttribute("width","".concat(e)),i.setAttribute("height","".concat(n)),i.style.cssText=this._originalCanvasStyle||"",this._originalCanvasStyle=void 0}setDimensions(t,e){let{el:n,ctx:i}=this.lower;c0(n,i,t,e)}setCSSDimensions(t){qd(this.lower.el,t)}calcOffset(){return(function(t){var e;let n=t&&di(t),i={left:0,top:0};if(!n)return i;let r=((e=l0(t))===null||e===void 0?void 0:e.getComputedStyle(t,null))||{};i.left+=parseInt(r.borderLeftWidth,10)||0,i.top+=parseInt(r.borderTopWidth,10)||0,i.left+=parseInt(r.paddingLeft,10)||0,i.top+=parseInt(r.paddingTop,10)||0;let o={left:0,top:0},a=n.documentElement;t.getBoundingClientRect!==void 0&&(o=t.getBoundingClientRect());let l=a0(t);return{left:o.left+l.left-(a.clientLeft||0)+i.left,top:o.top+l.top-(a.clientTop||0)+i.top}})(this.lower.el)}dispose(){Ni().dispose(this.lower.el),delete this.lower}},M1={backgroundVpt:!0,backgroundColor:"",overlayVpt:!0,overlayColor:"",includeDefaultValues:!0,svgViewportTransformation:!0,renderOnAddRemove:!0,skipOffscreen:!0,enableRetinaScaling:!0,imageSmoothingEnabled:!0,controlsAboveOverlay:!1,allowTouchScrolling:!1,viewportTransform:[...xn]},w1=["objects"],Ir=class s extends t0(fh){get lowerCanvasEl(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.el}get contextContainer(){var t;return(t=this.elements.lower)===null||t===void 0?void 0:t.ctx}static getDefaults(){return s.ownDefaults}constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,this.constructor.getDefaults()),this.set(e),this.initElements(t),this._setDimensionsImpl({width:this.width||this.elements.lower.el.width||0,height:this.height||this.elements.lower.el.height||0}),this.skipControlsDrawing=!1,this.viewportTransform=[...this.viewportTransform],this.calcViewportBoundaries()}initElements(t){this.elements=new ph(t)}add(){let t=super.add(...arguments);return arguments.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=super.insertAt(t,...n);return n.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),r}remove(){let t=super.remove(...arguments);return t.length>0&&this.renderOnAddRemove&&this.requestRenderAll(),t}_onObjectAdded(t){t.canvas&&t.canvas!==this&&(Fs("warn",`Canvas is trying to add an object that belongs to a different canvas.
Resulting to default behavior: removing object from previous canvas and adding to new canvas`),t.canvas.remove(t)),t._set("canvas",this),t.setCoords(),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t){t._set("canvas",void 0),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onStackOrderChanged(){this.renderOnAddRemove&&this.requestRenderAll()}getRetinaScaling(){return this.enableRetinaScaling?Zg():1}calcOffset(){return this._offset=this.elements.calcOffset()}getWidth(){return this.width}getHeight(){return this.height}setWidth(t,e){return this.setDimensions({width:t},e)}setHeight(t,e){return this.setDimensions({height:t},e)}_setDimensionsImpl(t){let{cssOnly:e=!1,backstoreOnly:n=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!e){let i=X({width:this.width,height:this.height},t);this.elements.setDimensions(i,this.getRetinaScaling()),this.hasLostContext=!0,this.width=i.width,this.height=i.height}n||this.elements.setCSSDimensions(t),this.calcOffset()}setDimensions(t,e){this._setDimensionsImpl(t,e),e&&e.cssOnly||this.requestRenderAll()}getZoom(){return this.viewportTransform[0]}setViewportTransform(t){this.viewportTransform=t,this.calcViewportBoundaries(),this.renderOnAddRemove&&this.requestRenderAll()}zoomToPoint(t,e){let n=t,i=[...this.viewportTransform],r=un(t,kn(i));i[0]=e,i[3]=e;let o=un(r,i);i[4]+=n.x-o.x,i[5]+=n.y-o.y,this.setViewportTransform(i)}setZoom(t){this.zoomToPoint(new st(0,0),t)}absolutePan(t){let e=[...this.viewportTransform];return e[4]=-t.x,e[5]=-t.y,this.setViewportTransform(e)}relativePan(t){return this.absolutePan(new st(-t.x-this.viewportTransform[4],-t.y-this.viewportTransform[5]))}getElement(){return this.elements.lower.el}clearContext(t){t.clearRect(0,0,this.width,this.height)}getContext(){return this.elements.lower.ctx}clear(){this.remove(...this.getObjects()),this.backgroundImage=void 0,this.overlayImage=void 0,this.backgroundColor="",this.overlayColor="",this.clearContext(this.getContext()),this.fire("canvas:cleared"),this.renderOnAddRemove&&this.requestRenderAll()}renderAll(){this.cancelRequestedRender(),this.destroyed||this.renderCanvas(this.getContext(),this._objects)}renderAndReset(){this.nextRenderHandle=0,this.renderAll()}requestRenderAll(){this.nextRenderHandle||this.disposed||this.destroyed||(this.nextRenderHandle=Va((()=>this.renderAndReset())))}calcViewportBoundaries(){let t=this.width,e=this.height,n=kn(this.viewportTransform),i=un({x:0,y:0},n),r=un({x:t,y:e},n),o=i.min(r),a=i.max(r);return this.vptCoords={tl:o,tr:new st(a.x,o.y),bl:new st(o.x,a.y),br:a}}cancelRequestedRender(){this.nextRenderHandle&&(e0(this.nextRenderHandle),this.nextRenderHandle=0)}drawControls(t){}renderCanvas(t,e){if(this.destroyed)return;let n=this.viewportTransform,i=this.clipPath;this.calcViewportBoundaries(),this.clearContext(t),t.imageSmoothingEnabled=this.imageSmoothingEnabled,t.patternQuality="best",this.fire("before:render",{ctx:t}),this._renderBackground(t),t.save(),t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this._renderObjects(t,e),t.restore(),this.controlsAboveOverlay||this.skipControlsDrawing||this.drawControls(t),i&&(i._set("canvas",this),i.shouldCache(),i._transformDone=!0,i.renderCache({forClipping:!0}),this.drawClipPathOnCanvas(t,i)),this._renderOverlay(t),this.controlsAboveOverlay&&!this.skipControlsDrawing&&this.drawControls(t),this.fire("after:render",{ctx:t}),this.__cleanupTask&&(this.__cleanupTask(),this.__cleanupTask=void 0)}drawClipPathOnCanvas(t,e){let n=this.viewportTransform;t.save(),t.transform(...n),t.globalCompositeOperation="destination-in",e.transform(t),t.scale(1/e.zoomX,1/e.zoomY),t.drawImage(e._cacheCanvas,-e.cacheTranslationX,-e.cacheTranslationY),t.restore()}_renderObjects(t,e){for(let n=0,i=e.length;n<i;++n)e[n]&&e[n].render(t)}_renderBackgroundOrOverlay(t,e){let n=this["".concat(e,"Color")],i=this["".concat(e,"Image")],r=this.viewportTransform,o=this["".concat(e,"Vpt")];if(!n&&!i)return;let a=Jn(n);if(n){if(t.save(),t.beginPath(),t.moveTo(0,0),t.lineTo(this.width,0),t.lineTo(this.width,this.height),t.lineTo(0,this.height),t.closePath(),t.fillStyle=a?n.toLive(t):n,o&&t.transform(...r),a){t.transform(1,0,0,1,n.offsetX||0,n.offsetY||0);let l=n.gradientTransform||n.patternTransform;l&&t.transform(...l)}t.fill(),t.restore()}if(i){t.save();let{skipOffscreen:l}=this;this.skipOffscreen=o,o&&t.transform(...r),i.render(t),this.skipOffscreen=l,t.restore()}}_renderBackground(t){this._renderBackgroundOrOverlay(t,"background")}_renderOverlay(t){this._renderBackgroundOrOverlay(t,"overlay")}getCenter(){return{top:this.height/2,left:this.width/2}}getCenterPoint(){return new st(this.width/2,this.height/2)}centerObjectH(t){return this._centerObject(t,new st(this.getCenterPoint().x,t.getCenterPoint().y))}centerObjectV(t){return this._centerObject(t,new st(t.getCenterPoint().x,this.getCenterPoint().y))}centerObject(t){return this._centerObject(t,this.getCenterPoint())}viewportCenterObject(t){return this._centerObject(t,this.getVpCenter())}viewportCenterObjectH(t){return this._centerObject(t,new st(this.getVpCenter().x,t.getCenterPoint().y))}viewportCenterObjectV(t){return this._centerObject(t,new st(t.getCenterPoint().x,this.getVpCenter().y))}getVpCenter(){return un(this.getCenterPoint(),kn(this.viewportTransform))}_centerObject(t,e){t.setXY(e,Zt,Zt),t.setCoords(),this.renderOnAddRemove&&this.requestRenderAll()}toDatalessJSON(t){return this.toDatalessObject(t)}toObject(t){return this._toObjectMethod("toObject",t)}toJSON(){return this.toObject()}toDatalessObject(t){return this._toObjectMethod("toDatalessObject",t)}_toObjectMethod(t,e){let n=this.clipPath,i=n&&!n.excludeFromExport?this._toObject(n,t,e):null;return X(X(X({version:Xd},Ur(this,e)),{},{objects:this._objects.filter((r=>!r.excludeFromExport)).map((r=>this._toObject(r,t,e)))},this.__serializeBgOverlay(t,e)),i?{clipPath:i}:null)}_toObject(t,e,n){let i;this.includeDefaultValues||(i=t.includeDefaultValues,t.includeDefaultValues=!1);let r=t[e](n);return this.includeDefaultValues||(t.includeDefaultValues=!!i),r}__serializeBgOverlay(t,e){let n={},i=this.backgroundImage,r=this.overlayImage,o=this.backgroundColor,a=this.overlayColor;return Jn(o)?o.excludeFromExport||(n.background=o.toObject(e)):o&&(n.background=o),Jn(a)?a.excludeFromExport||(n.overlay=a.toObject(e)):a&&(n.overlay=a),i&&!i.excludeFromExport&&(n.backgroundImage=this._toObject(i,t,e)),r&&!r.excludeFromExport&&(n.overlayImage=this._toObject(r,t,e)),n}toSVG(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;t.reviver=e;let n=[];return this._setSVGPreamble(n,t),this._setSVGHeader(n,t),this.clipPath&&n.push('<g clip-path="url(#'.concat(this.clipPath.clipPathId,`)" >
`)),this._setSVGBgOverlayColor(n,"background"),this._setSVGBgOverlayImage(n,"backgroundImage",e),this._setSVGObjects(n,e),this.clipPath&&n.push(`</g>
`),this._setSVGBgOverlayColor(n,"overlay"),this._setSVGBgOverlayImage(n,"overlayImage",e),n.push("</svg>"),n.join("")}_setSVGPreamble(t,e){e.suppressPreamble||t.push('<?xml version="1.0" encoding="',e.encoding||"UTF-8",`" standalone="no" ?>
`,'<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ',`"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
`)}_setSVGHeader(t,e){let n=e.width||"".concat(this.width),i=e.height||"".concat(this.height),r=he.NUM_FRACTION_DIGITS,o=e.viewBox,a;if(o)a='viewBox="'.concat(o.x," ").concat(o.y," ").concat(o.width," ").concat(o.height,'" ');else if(this.svgViewportTransformation){let l=this.viewportTransform;a='viewBox="'.concat(ye(-l[4]/l[0],r)," ").concat(ye(-l[5]/l[3],r)," ").concat(ye(this.width/l[0],r)," ").concat(ye(this.height/l[3],r),'" ')}else a='viewBox="0 0 '.concat(this.width," ").concat(this.height,'" ');t.push("<svg ",'xmlns="http://www.w3.org/2000/svg" ','xmlns:xlink="http://www.w3.org/1999/xlink" ','version="1.1" ','width="',n,'" ','height="',i,'" ',a,`xml:space="preserve">
`,"<desc>Created with Fabric.js ",Xd,`</desc>
`,`<defs>
`,this.createSVGFontFacesMarkup(),this.createSVGRefElementsMarkup(),this.createSVGClipPathMarkup(e),`</defs>
`)}createSVGClipPathMarkup(t){let e=this.clipPath;return e?(e.clipPathId="CLIPPATH_".concat(Us()),'<clipPath id="'.concat(e.clipPathId,`" >
`).concat(e.toClipPathSVG(t.reviver),`</clipPath>
`)):""}createSVGRefElementsMarkup(){return["background","overlay"].map((t=>{let e=this["".concat(t,"Color")];if(Jn(e)){let n=this["".concat(t,"Vpt")],i=this.viewportTransform,r={isType:()=>!1,width:this.width/(n?i[0]:1),height:this.height/(n?i[3]:1)};return e.toSVG(r,{additionalTransform:n?Fo(i):""})}})).join("")}createSVGFontFacesMarkup(){let t=[],e={},n=he.fontPaths;this._objects.forEach((function r(o){t.push(o),oh(o)&&o._objects.forEach(r)})),t.forEach((r=>{if(!(o=r)||typeof o._renderText!="function")return;var o;let{styles:a,fontFamily:l}=r;!e[l]&&n[l]&&(e[l]=!0,a&&Object.values(a).forEach((c=>{Object.values(c).forEach((h=>{let{fontFamily:u=""}=h;!e[u]&&n[u]&&(e[u]=!0)}))})))}));let i=Object.keys(e).map((r=>`		@font-face {
			font-family: '`.concat(r,`';
			src: url('`).concat(n[r],`');
		}
`))).join("");return i?`	<style type="text/css"><![CDATA[
`.concat(i,`]]></style>
`):""}_setSVGObjects(t,e){this.forEachObject((n=>{n.excludeFromExport||this._setSVGObject(t,n,e)}))}_setSVGObject(t,e,n){t.push(e.toSVG(n))}_setSVGBgOverlayImage(t,e,n){let i=this[e];i&&!i.excludeFromExport&&i.toSVG&&t.push(i.toSVG(n))}_setSVGBgOverlayColor(t,e){let n=this["".concat(e,"Color")];if(n)if(Jn(n)){let i=n.repeat||"",r=this.width,o=this.height,a=this["".concat(e,"Vpt")]?Fo(kn(this.viewportTransform)):"";t.push('<rect transform="'.concat(a," translate(").concat(r/2,",").concat(o/2,')" x="').concat(n.offsetX-r/2,'" y="').concat(n.offsetY-o/2,'" width="').concat(i!=="repeat-y"&&i!=="no-repeat"||!_g(n)?r:n.source.width,'" height="').concat(i!=="repeat-x"&&i!=="no-repeat"||!_g(n)?o:n.source.height,'" fill="url(#SVGID_').concat(n.id,`)"></rect>
`))}else t.push('<rect x="0" y="0" width="100%" height="100%" ','fill="',n,'"',`></rect>
`)}loadFromJSON(t,e){let{signal:n}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t)return Promise.reject(new Kn("`json` is undefined"));let i=typeof t=="string"?JSON.parse(t):t,{objects:r=[]}=i,o=Me(i,w1),{backgroundImage:a,background:l,overlayImage:c,overlay:h,clipPath:u}=o,d=this.renderOnAddRemove;return this.renderOnAddRemove=!1,Promise.all([Lo(r,{reviver:e,signal:n}),$a({backgroundImage:a,backgroundColor:l,overlayImage:c,overlayColor:h,clipPath:u},{signal:n})]).then((f=>{let[p,x]=f;return this.clear(),this.add(...p),this.set(o),this.set(x),this.renderOnAddRemove=d,this}))}clone(t){let e=this.toObject(t);return this.cloneWithoutData().loadFromJSON(e)}cloneWithoutData(){let t=Vn(this);return new this.constructor(t)}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return Cf(this.toCanvasElement(o,t),e,n)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{format:e="png",quality:n=1,multiplier:i=1,enableRetinaScaling:r=!1}=t,o=i*(r?this.getRetinaScaling():1);return Ef(this.toCanvasElement(o,t),e,n)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,{width:e,height:n,left:i,top:r,filter:o}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||this.width)*t,l=(n||this.height)*t,c=this.getZoom(),h=this.width,u=this.height,d=this.skipControlsDrawing,f=c*t,p=this.viewportTransform,x=[f,0,0,f,(p[4]-(i||0))*t,(p[5]-(r||0))*t],m=this.enableRetinaScaling,g=Vn({width:a,height:l}),S=o?this._objects.filter((P=>o(P))):this._objects;return this.enableRetinaScaling=!1,this.viewportTransform=x,this.width=a,this.height=l,this.skipControlsDrawing=!0,this.calcViewportBoundaries(),this.renderCanvas(g.getContext("2d"),S),this.viewportTransform=p,this.width=h,this.height=u,this.calcViewportBoundaries(),this.enableRetinaScaling=m,this.skipControlsDrawing=d,g}dispose(){return!this.disposed&&this.elements.cleanupDOM({width:this.width,height:this.height}),dh.cancelByCanvas(this),this.disposed=!0,new Promise(((t,e)=>{let n=()=>{this.destroy(),t(!0)};n.kill=e,this.__cleanupTask&&this.__cleanupTask.kill("aborted"),this.destroyed?t(!1):this.nextRenderHandle?this.__cleanupTask=n:n()}))}destroy(){this.destroyed=!0,this.cancelRequestedRender(),this.forEachObject((t=>t.dispose())),this._objects=[],this.backgroundImage&&this.backgroundImage.dispose(),this.backgroundImage=void 0,this.overlayImage&&this.overlayImage.dispose(),this.overlayImage=void 0,this.elements.dispose()}toString(){return"#<Canvas (".concat(this.complexity(),"): { objects: ").concat(this._objects.length," }>")}};j(Ir,"ownDefaults",M1);var T1=["touchstart","touchmove","touchend"],h0=s=>{let t=a0(s.target),e=(function(n){let i=n.changedTouches;return i&&i[0]?i[0]:n})(s);return new st(e.clientX+t.left,e.clientY+t.top)},mh=s=>T1.includes(s.type)||s.pointerType==="touch",vg=s=>{s.preventDefault(),s.stopPropagation()},Fi=s=>{let t=0,e=0,n=0,i=0;for(let r=0,o=s.length;r<o;r++){let{x:a,y:l}=s[r];(a>n||!r)&&(n=a),(a<t||!r)&&(t=a),(l>i||!r)&&(i=l),(l<e||!r)&&(e=l)}return{left:t,top:e,width:n-t,height:i-e}},C1=["translateX","translateY","scaleX","scaleY"],u0=(s,t)=>No(s,Pe(t,s.calcOwnMatrix())),No=(s,t)=>{let e=Oo(t),{translateX:n,translateY:i,scaleX:r,scaleY:o}=e,a=Me(e,C1),l=new st(n,i);s.flipX=!1,s.flipY=!1,Object.assign(s,a),s.set({scaleX:r,scaleY:o}),s.setPositionByOrigin(l,Zt,Zt)},d0=s=>{s.scaleX=1,s.scaleY=1,s.skewX=0,s.skewY=0,s.flipX=!1,s.flipY=!1,s.rotate(0)},Df=s=>({scaleX:s.scaleX,scaleY:s.scaleY,skewX:s.skewX,skewY:s.skewY,angle:s.angle,left:s.left,flipX:s.flipX,flipY:s.flipY,top:s.top}),Vh=(s,t,e)=>{let n=s/2,i=t/2,r=[new st(-n,-i),new st(n,-i),new st(-n,i),new st(n,i)].map((a=>a.transform(e))),o=Fi(r);return new st(o.width,o.height)},Qa=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xn;return Pe(kn(arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn),s)},ss=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:xn;return s.transform(Qa(t,e))},f0=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:xn,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:xn;return s.transform(Qa(t,e),!0)},Zd=(s,t,e)=>{let n=Qa(t,e);return No(s,Pe(n,s.calcOwnMatrix())),n},If=(s,t)=>{var e;let{transform:{target:n}}=t;(e=n.canvas)===null||e===void 0||e.fire("object:".concat(s),X(X({},t),{},{target:n})),n.fire(s,t)},E1={left:-.5,top:-.5,center:0,bottom:.5,right:.5},ke=s=>typeof s=="string"?E1[s]:s-.5,gh="not-allowed";function p0(s){return ke(s.originX)===ke(Zt)&&ke(s.originY)===ke(Zt)}function yg(s){return .5-ke(s)}var mi=(s,t)=>s[t],Of=(s,t,e,n)=>({e:s,transform:t,pointer:new st(e,n)});function m0(s,t){let e=s.getTotalAngle()+Bi(Math.atan2(t.y,t.x))+360;return Math.round(e%360/45)}function Gh(s,t,e,n,i){var r;let{target:o,corner:a}=s,l=o.controls[a],c=((r=o.canvas)===null||r===void 0?void 0:r.getZoom())||1,h=o.padding/c,u=(function(d,f,p,x){let m=d.getRelativeCenterPoint(),g=p!==void 0&&x!==void 0?d.translateToGivenOrigin(m,Zt,Zt,p,x):new st(d.left,d.top);return(d.angle?f.rotate(-Re(d.angle),m):f).subtract(g)})(o,new st(n,i),t,e);return u.x>=h&&(u.x-=h),u.x<=-h&&(u.x+=h),u.y>=h&&(u.y-=h),u.y<=h&&(u.y+=h),u.x-=l.offsetX,u.y-=l.offsetY,u}var g0=(s,t,e,n)=>{let{target:i,offsetX:r,offsetY:o}=t,a=e-r,l=n-o,c=!mi(i,"lockMovementX")&&i.left!==a,h=!mi(i,"lockMovementY")&&i.top!==l;return c&&i.set(pe,a),h&&i.set(Tn,l),(c||h)&&If(Jg,Of(s,t,e,n)),c||h},_h=s=>s.replace(/\s+/g," "),Sg={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#0FF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000",blanchedalmond:"#FFEBCD",blue:"#00F",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#0FF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#F0F",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#789",lightslategrey:"#789",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#0F0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#F0F",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#639",red:"#F00",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFF",whitesmoke:"#F5F5F5",yellow:"#FF0",yellowgreen:"#9ACD32"},Id=(s,t,e)=>(e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+6*(t-s)*e:e<.5?t:e<2/3?s+(t-s)*(2/3-e)*6:s),bg=(s,t,e,n)=>{s/=255,t/=255,e/=255;let i=Math.max(s,t,e),r=Math.min(s,t,e),o,a,l=(i+r)/2;if(i===r)o=a=0;else{let c=i-r;switch(a=l>.5?c/(2-i-r):c/(i+r),i){case s:o=(t-e)/c+(t<e?6:0);break;case t:o=(e-s)/c+2;break;case e:o=(s-t)/c+4}o/=6}return[Math.round(360*o),Math.round(100*a),Math.round(100*l),n]},Mg=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"1";return parseFloat(s)/(s.endsWith("%")?100:1)},Qc=s=>Math.min(Math.round(s),255).toString(16).toUpperCase().padStart(2,"0"),wg=s=>{let[t,e,n,i=1]=s,r=Math.round(.3*t+.59*e+.11*n);return[r,r,r,i]},yn=class s{constructor(t){if(j(this,"isUnrecognised",!1),t)if(t instanceof s)this.setSource([...t._source]);else if(Array.isArray(t)){let[e,n,i,r=1]=t;this.setSource([e,n,i,r])}else this.setSource(this._tryParsingColor(t));else this.setSource([0,0,0,1])}_tryParsingColor(t){return(t=t.toLowerCase())in Sg&&(t=Sg[t]),t==="transparent"?[255,255,255,0]:s.sourceFromHex(t)||s.sourceFromRgb(t)||s.sourceFromHsl(t)||(this.isUnrecognised=!0)&&[0,0,0,1]}getSource(){return this._source}setSource(t){this._source=t}toRgb(){let[t,e,n]=this.getSource();return"rgb(".concat(t,",").concat(e,",").concat(n,")")}toRgba(){return"rgba(".concat(this.getSource().join(","),")")}toHsl(){let[t,e,n]=bg(...this.getSource());return"hsl(".concat(t,",").concat(e,"%,").concat(n,"%)")}toHsla(){let[t,e,n,i]=bg(...this.getSource());return"hsla(".concat(t,",").concat(e,"%,").concat(n,"%,").concat(i,")")}toHex(){return this.toHexa().slice(0,6)}toHexa(){let[t,e,n,i]=this.getSource();return"".concat(Qc(t)).concat(Qc(e)).concat(Qc(n)).concat(Qc(Math.round(255*i)))}getAlpha(){return this.getSource()[3]}setAlpha(t){return this._source[3]=t,this}toGrayscale(){return this.setSource(wg(this.getSource())),this}toBlackWhite(t){let[e,,,n]=wg(this.getSource()),i=e<(t||127)?0:255;return this.setSource([i,i,i,n]),this}overlayWith(t){t instanceof s||(t=new s(t));let e=this.getSource(),n=t.getSource(),[i,r,o]=e.map(((a,l)=>Math.round(.5*a+.5*n[l])));return this.setSource([i,r,o,e[3]]),this}static fromRgb(t){return s.fromRgba(t)}static fromRgba(t){return new s(s.sourceFromRgb(t))}static sourceFromRgb(t){let e=_h(t).match(/^rgba?\(\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d{0,3}(?:\.\d+)?%?)\s?)?\)$/i);if(e){let[n,i,r]=e.slice(1,4).map((o=>{let a=parseFloat(o);return o.endsWith("%")?Math.round(2.55*a):a}));return[n,i,r,Mg(e[4])]}}static fromHsl(t){return s.fromHsla(t)}static fromHsla(t){return new s(s.sourceFromHsl(t))}static sourceFromHsl(t){let e=_h(t).match(/^hsla?\(\s?([+-]?\d{0,3}(?:\.\d+)?(?:deg|turn|rad)?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?[\s|,]\s?(\d{0,3}(?:\.\d+)?%?)\s?(?:\s?[,/]\s?(\d*(?:\.\d+)?%?)\s?)?\)$/i);if(!e)return;let n=(s.parseAngletoDegrees(e[1])%360+360)%360/360,i=parseFloat(e[2])/100,r=parseFloat(e[3])/100,o,a,l;if(i===0)o=a=l=r;else{let c=r<=.5?r*(i+1):r+i-r*i,h=2*r-c;o=Id(h,c,n+1/3),a=Id(h,c,n),l=Id(h,c,n-1/3)}return[Math.round(255*o),Math.round(255*a),Math.round(255*l),Mg(e[4])]}static fromHex(t){return new s(s.sourceFromHex(t))}static sourceFromHex(t){if(t.match(/^#?(([0-9a-f]){3,4}|([0-9a-f]{2}){3,4})$/i)){let e=t.slice(t.indexOf("#")+1),n;n=e.length<=4?e.split("").map((l=>l+l)):e.match(/.{2}/g);let[i,r,o,a=255]=n.map((l=>parseInt(l,16)));return[i,r,o,a/255]}}static parseAngletoDegrees(t){let e=t.toLowerCase(),n=parseFloat(e);return e.includes("rad")?Bi(n):e.includes("turn")?360*n:n}},Ar=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:bf,e=/\D{0,2}$/.exec(s),n=parseFloat(s),i=he.DPI;switch(e?.[0]){case"mm":return n*i/25.4;case"cm":return n*i/2.54;case"in":return n*i;case"pt":return n*i/72;case"pc":return n*i/72*12;case"em":return n*t;default:return n}},_0=s=>{let[t,e]=s.trim().split(" "),[n,i]=(r=t)&&r!==Cn?[r.slice(1,4),r.slice(5,8)]:r===Cn?[r,r]:["Mid","Mid"];var r;return{meetOrSlice:e||"meet",alignX:n,alignY:i}},ja=function(s,t){let e,n,i=!(arguments.length>2&&arguments[2]!==void 0)||arguments[2];if(t)if(t.toLive)e="url(#SVGID_".concat(t.id,")");else{let r=new yn(t),o=r.getAlpha();e=r.toRgb(),o!==1&&(n=o.toString())}else e="none";return i?"".concat(s,": ").concat(e,"; ").concat(n?"".concat(s,"-opacity: ").concat(n,"; "):""):"".concat(s,'="').concat(e,'" ').concat(n?"".concat(s,'-opacity="').concat(n,'" '):"")},xh=class{getSvgStyles(t){let e=this.fillRule?this.fillRule:"nonzero",n=this.strokeWidth?this.strokeWidth:"0",i=this.strokeDashArray?this.strokeDashArray.join(" "):Cn,r=this.strokeDashOffset?this.strokeDashOffset:"0",o=this.strokeLineCap?this.strokeLineCap:"butt",a=this.strokeLineJoin?this.strokeLineJoin:"miter",l=this.strokeMiterLimit?this.strokeMiterLimit:"4",c=this.opacity!==void 0?this.opacity:"1",h=this.visible?"":" visibility: hidden;",u=t?"":this.getSvgFilter(),d=ja(He,this.fill);return[ja(En,this.stroke),"stroke-width: ",n,"; ","stroke-dasharray: ",i,"; ","stroke-linecap: ",o,"; ","stroke-dashoffset: ",r,"; ","stroke-linejoin: ",a,"; ","stroke-miterlimit: ",l,"; ",d,"fill-rule: ",e,"; ","opacity: ",c,";",u,h].join("")}getSvgFilter(){return this.shadow?"filter: url(#SVGID_".concat(this.shadow.id,");"):""}getSvgCommons(){return[this.id?'id="'.concat(this.id,'" '):"",this.clipPath?'clip-path="url(#'.concat(this.clipPath.clipPathId,')" '):""].join("")}getSvgTransform(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",n=t?this.calcTransformMatrix():this.calcOwnMatrix(),i='transform="'.concat(Fo(n));return"".concat(i).concat(e,'" ')}_toSVG(t){return[""]}toSVG(t){return this._createBaseSVGMarkup(this._toSVG(t),{reviver:t})}toClipPathSVG(t){return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(t),{reviver:t})}_createBaseClipPathSVGMarkup(t){let{reviver:e,additionalTransform:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=[this.getSvgTransform(!0,n),this.getSvgCommons()].join(""),r=t.indexOf("COMMON_PARTS");return t[r]=i,e?e(t.join("")):t.join("")}_createBaseSVGMarkup(t){let{noStyle:e,reviver:n,withShadow:i,additionalTransform:r}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=e?"":'style="'.concat(this.getSvgStyles(),'" '),a=i?'style="'.concat(this.getSvgFilter(),'" '):"",l=this.clipPath,c=this.strokeUniform?'vector-effect="non-scaling-stroke" ':"",h=l&&l.absolutePositioned,u=this.stroke,d=this.fill,f=this.shadow,p=[],x=t.indexOf("COMMON_PARTS"),m;l&&(l.clipPathId="CLIPPATH_".concat(Us()),m='<clipPath id="'.concat(l.clipPathId,`" >
`).concat(l.toClipPathSVG(n),`</clipPath>
`)),h&&p.push("<g ",a,this.getSvgCommons(),` >
`),p.push("<g ",this.getSvgTransform(!1),h?"":a+this.getSvgCommons(),` >
`);let g=[o,c,e?"":this.addPaintOrder()," ",r?'transform="'.concat(r,'" '):""].join("");return t[x]=g,Jn(d)&&p.push(d.toSVG(this)),Jn(u)&&p.push(u.toSVG(this)),f&&p.push(f.toSVG(this)),l&&p.push(m),p.push(t.join("")),p.push(`</g>
`),h&&p.push(`</g>
`),n?n(p.join("")):p.join("")}addPaintOrder(){return this.paintFirst!==He?' paint-order="'.concat(this.paintFirst,'" '):""}};function Hh(s){return new RegExp("^("+s.join("|")+")\\b","i")}var Or="textDecorationThickness",x0=["fontSize","fontWeight","fontFamily","fontStyle"],v0=["underline","overline","linethrough"],y0=[...x0,"lineHeight","text","charSpacing","textAlign","styles","path","pathStartOffset","pathSide","pathAlign"],S0=[...y0,...v0,"textBackgroundColor","direction",Or],A1=[...x0,...v0,En,"strokeWidth",He,"deltaY","textBackgroundColor",Or],R1={_reNewline:Mf,_reSpacesAndTabs:/[ \t\r]/g,_reSpaceAndTab:/[ \t\r]/,_reWords:/\S+/g,fontSize:40,fontWeight:"normal",fontFamily:"Times New Roman",underline:!1,overline:!1,linethrough:!1,textAlign:pe,fontStyle:"normal",lineHeight:1.16,textBackgroundColor:"",stroke:null,shadow:null,path:void 0,pathStartOffset:0,pathSide:pe,pathAlign:"baseline",charSpacing:0,deltaY:0,direction:"ltr",CACHE_FONT_SIZE:400,MIN_TEXT_WIDTH:2,superscript:{size:.6,baseline:-.35},subscript:{size:.6,baseline:.11},_fontSizeFraction:.222,offsets:{underline:.1,linethrough:-.28167,overline:-.81333},_fontSizeMult:1.13,[Or]:66.667},Oi="justify",vh="justify-left",Ha="justify-right",Wa="justify-center",Tg,Cg,Eg,fi=String.raw(Tg||(Tg=ki(["[-+]?(?:d*.d+|d+.?)(?:[eE][-+]?d+)?"],["[-+]?(?:\\d*\\.\\d+|\\d+\\.?)(?:[eE][-+]?\\d+)?"]))),Od=String.raw(Cg||(Cg=ki(["(?:s*,?s+|s*,s*)"],["(?:\\s*,?\\s+|\\s*,\\s*)"])));var P1=new RegExp("(normal|italic)?\\s*(normal|small-caps)?\\s*(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)?\\s*("+fi+"(?:px|cm|mm|em|pt|pc|in)*)(?:\\/(normal|"+fi+"))?\\s+(.*)"),D1={cx:pe,x:pe,r:"radius",cy:Tn,y:Tn,display:"visible",visibility:"visible",transform:"transformMatrix","fill-opacity":"fillOpacity","fill-rule":"fillRule","font-family":"fontFamily","font-size":"fontSize","font-style":"fontStyle","font-weight":"fontWeight","letter-spacing":"charSpacing","paint-order":"paintFirst","stroke-dasharray":"strokeDashArray","stroke-dashoffset":"strokeDashOffset","stroke-linecap":"strokeLineCap","stroke-linejoin":"strokeLineJoin","stroke-miterlimit":"strokeMiterLimit","stroke-opacity":"strokeOpacity","stroke-width":"strokeWidth","text-decoration":"textDecoration","text-anchor":"textAnchor",opacity:"opacity","clip-path":"clipPath","clip-rule":"clipRule","vector-effect":"strokeUniform","image-rendering":"imageSmoothing","text-decoration-thickness":Or},Ld="font-size",Fd="clip-path",IA=Hh(["path","circle","polygon","polyline","ellipse","rect","line","image","text"]),OA=Hh(["symbol","image","marker","pattern","view","svg"]),Ag=Hh(["symbol","g","a","svg","clipPath","defs"]),LA=new RegExp(String.raw(Eg||(Eg=ki(["^s*(",")","(",")","(",")","(",")s*$"],["^\\s*(",")","(",")","(",")","(",")\\s*$"])),fi,Od,fi,Od,fi,Od,fi)),I1=new st(1,0),b0=new st,Lf=(s,t)=>s.rotate(t),yh=(s,t)=>new st(t).subtract(s),Sh=s=>s.distanceFrom(b0),bh=(s,t)=>Math.atan2(Do(s,t),w0(s,t)),M0=s=>bh(I1,s),Wh=s=>s.eq(b0)?s:s.scalarDivide(Sh(s)),Ff=function(s){let t=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1];return Wh(new st(-s.y,s.x).scalarMultiply(t?1:-1))},Do=(s,t)=>s.x*t.y-s.y*t.x,w0=(s,t)=>s.x*t.x+s.y*t.y,Jd=(s,t,e)=>{if(s.eq(t)||s.eq(e))return!0;let n=Do(t,e),i=Do(t,s),r=Do(e,s);return n>=0?i>=0&&r<=0:!(i<=0&&r>=0)},Rg="(-?\\d+(?:\\.\\d*)?(?:px)?(?:\\s?|$))?",Pg=new RegExp("(?:\\s|^)"+Rg+Rg+"("+fi+"?(?:px)?)?(?:\\s?|$)(?:$|\\s)"),Rr=class s{constructor(t){let e=typeof t=="string"?s.parseShadow(t):t;Object.assign(this,s.ownDefaults,e),this.id=Us()}static parseShadow(t){let e=t.trim(),[,n=0,i=0,r=0]=(Pg.exec(e)||[]).map((o=>parseFloat(o)||0));return{color:(e.replace(Pg,"")||"rgb(0,0,0)").trim(),offsetX:n,offsetY:i,blur:r}}toString(){return[this.offsetX,this.offsetY,this.blur,this.color].join("px ")}toSVG(t){let e=Lf(new st(this.offsetX,this.offsetY),Re(-t.angle)),n=new yn(this.color),i=40,r=40;return t.width&&t.height&&(i=100*ye((Math.abs(e.x)+this.blur)/t.width,he.NUM_FRACTION_DIGITS)+20,r=100*ye((Math.abs(e.y)+this.blur)/t.height,he.NUM_FRACTION_DIGITS)+20),t.flipX&&(e.x*=-1),t.flipY&&(e.y*=-1),'<filter id="SVGID_'.concat(this.id,'" y="-').concat(r,'%" height="').concat(100+2*r,'%" x="-').concat(i,'%" width="').concat(100+2*i,`%" >
	<feGaussianBlur in="SourceAlpha" stdDeviation="`).concat(ye(this.blur?this.blur/2:0,he.NUM_FRACTION_DIGITS),`"></feGaussianBlur>
	<feOffset dx="`).concat(ye(e.x,he.NUM_FRACTION_DIGITS),'" dy="').concat(ye(e.y,he.NUM_FRACTION_DIGITS),`" result="oBlur" ></feOffset>
	<feFlood flood-color="`).concat(n.toRgb(),'" flood-opacity="').concat(n.getAlpha(),`"/>
	<feComposite in2="oBlur" operator="in" />
	<feMerge>
		<feMergeNode></feMergeNode>
		<feMergeNode in="SourceGraphic"></feMergeNode>
	</feMerge>
</filter>
`)}toObject(){let t={color:this.color,blur:this.blur,offsetX:this.offsetX,offsetY:this.offsetY,affectStroke:this.affectStroke,nonScaling:this.nonScaling,type:this.constructor.type},e=s.ownDefaults;return this.includeDefaultValues?t:Pf(t,((n,i)=>n!==e[i]))}static async fromObject(t){return new this(t)}};j(Rr,"ownDefaults",{color:"rgb(0,0,0)",blur:0,offsetX:0,offsetY:0,affectStroke:!1,includeDefaultValues:!0,nonScaling:!1}),j(Rr,"type","shadow"),Et.setClass(Rr,"shadow");var Lr=(s,t,e)=>Math.max(s,Math.min(t,e)),O1=[Tn,pe,vn,zn,"flipX","flipY","originX","originY","angle","opacity","globalCompositeOperation","shadow","visible",zo,Vo],os=[He,En,"strokeWidth","strokeDashArray","width","height","paintFirst","strokeUniform","strokeLineCap","strokeDashOffset","strokeLineJoin","strokeMiterLimit","backgroundColor","clipPath"],L1={top:0,left:0,width:0,height:0,angle:0,flipX:!1,flipY:!1,scaleX:1,scaleY:1,minScaleLimit:0,skewX:0,skewY:0,originX:pe,originY:Tn,strokeWidth:1,strokeUniform:!1,padding:0,opacity:1,paintFirst:He,fill:"rgb(0,0,0)",fillRule:"nonzero",stroke:null,strokeDashArray:null,strokeDashOffset:0,strokeLineCap:"butt",strokeLineJoin:"miter",strokeMiterLimit:4,globalCompositeOperation:"source-over",backgroundColor:"",shadow:null,visible:!0,includeDefaultValues:!0,excludeFromExport:!1,objectCaching:!0,clipPath:void 0,inverted:!1,absolutePositioned:!1,centeredRotation:!0,centeredScaling:!1,dirty:!0},Nd=(s,t,e,n)=>(s<Math.abs(t)?(s=t,n=e/4):n=t===0&&s===0?e/rs*Math.asin(1):e/rs*Math.asin(t/s),{a:s,c:t,p:e,s:n}),Dg=(s,t,e,n,i)=>s*Math.pow(2,10*(n-=1))*Math.sin((n*i-t)*rs/e),T0=(s,t,e,n)=>-e*Math.cos(s/n*Ns)+e+t,Kd=(s,t,e,n)=>(s/=n)<1/2.75?e*(7.5625*s*s)+t:s<2/2.75?e*(7.5625*(s-=1.5/2.75)*s+.75)+t:s<2.5/2.75?e*(7.5625*(s-=2.25/2.75)*s+.9375)+t:e*(7.5625*(s-=2.625/2.75)*s+.984375)+t,Ig=(s,t,e,n)=>e-Kd(n-s,0,e,n)+t,F1=Object.freeze({__proto__:null,defaultEasing:T0,easeInBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*(s/=n)*s*((i+1)*s-i)+t},easeInBounce:Ig,easeInCirc:(s,t,e,n)=>-e*(Math.sqrt(1-(s/=n)*s)-1)+t,easeInCubic:(s,t,e,n)=>e*(s/n)**3+t,easeInElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l}=Nd(i,e,r,1.70158);return-Dg(o,a,l,s,n)+t},easeInExpo:(s,t,e,n)=>s===0?t:e*2**(10*(s/n-1))+t,easeInOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return(s/=n/2)<1?e/2*(s*s*((1+(i*=1.525))*s-i))+t:e/2*((s-=2)*s*((1+(i*=1.525))*s+i)+2)+t},easeInOutBounce:(s,t,e,n)=>s<n/2?.5*Ig(2*s,0,e,n)+t:.5*Kd(2*s-n,0,e,n)+.5*e+t,easeInOutCirc:(s,t,e,n)=>(s/=n/2)<1?-e/2*(Math.sqrt(1-s**2)-1)+t:e/2*(Math.sqrt(1-(s-=2)*s)+1)+t,easeInOutCubic:(s,t,e,n)=>(s/=n/2)<1?e/2*s**3+t:e/2*((s-2)**3+2)+t,easeInOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n/2)===2)return t+e;r||(r=n*(.3*1.5));let{a:o,s:a,p:l,c}=Nd(i,e,r,1.70158);return s<1?-.5*Dg(o,a,l,s,n)+t:o*Math.pow(2,-10*(s-=1))*Math.sin((s*n-a)*rs/l)*.5+c+t},easeInOutExpo:(s,t,e,n)=>s===0?t:s===n?t+e:(s/=n/2)<1?e/2*2**(10*(s-1))+t:e/2*-(2**(-10*--s)+2)+t,easeInOutQuad:(s,t,e,n)=>(s/=n/2)<1?e/2*s**2+t:-e/2*(--s*(s-2)-1)+t,easeInOutQuart:(s,t,e,n)=>(s/=n/2)<1?e/2*s**4+t:-e/2*((s-=2)*s**3-2)+t,easeInOutQuint:(s,t,e,n)=>(s/=n/2)<1?e/2*s**5+t:e/2*((s-2)**5+2)+t,easeInOutSine:(s,t,e,n)=>-e/2*(Math.cos(Math.PI*s/n)-1)+t,easeInQuad:(s,t,e,n)=>e*(s/=n)*s+t,easeInQuart:(s,t,e,n)=>e*(s/=n)*s**3+t,easeInQuint:(s,t,e,n)=>e*(s/n)**5+t,easeInSine:(s,t,e,n)=>-e*Math.cos(s/n*Ns)+e+t,easeOutBack:function(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1.70158;return e*((s=s/n-1)*s*((i+1)*s+i)+1)+t},easeOutBounce:Kd,easeOutCirc:(s,t,e,n)=>e*Math.sqrt(1-(s=s/n-1)*s)+t,easeOutCubic:(s,t,e,n)=>e*((s/n-1)**3+1)+t,easeOutElastic:(s,t,e,n)=>{let i=e,r=0;if(s===0)return t;if((s/=n)===1)return t+e;r||(r=.3*n);let{a:o,s:a,p:l,c}=Nd(i,e,r,1.70158);return o*2**(-10*s)*Math.sin((s*n-a)*rs/l)+c+t},easeOutExpo:(s,t,e,n)=>s===n?t+e:e*-(2**(-10*s/n)+1)+t,easeOutQuad:(s,t,e,n)=>-e*(s/=n)*(s-2)+t,easeOutQuart:(s,t,e,n)=>-e*((s=s/n-1)*s**3-1)+t,easeOutQuint:(s,t,e,n)=>e*((s/n-1)**5+1)+t,easeOutSine:(s,t,e,n)=>e*Math.sin(s/n*Ns)+t}),N1=()=>!1,Ya=class{constructor(t){let{startValue:e,byValue:n,duration:i=500,delay:r=0,easing:o=T0,onStart:a=Er,onChange:l=Er,onComplete:c=Er,abort:h=N1,target:u}=t;j(this,"_state","pending"),j(this,"durationProgress",0),j(this,"valueProgress",0),this.tick=this.tick.bind(this),this.duration=i,this.delay=r,this.easing=o,this._onStart=a,this._onChange=l,this._onComplete=c,this._abort=h,this.target=u,this.startValue=e,this.byValue=n,this.value=this.startValue,this.endValue=Object.freeze(this.calculate(this.duration).value)}get state(){return this._state}isDone(){return this._state==="aborted"||this._state==="completed"}start(){let t=e=>{this._state==="pending"&&(this.startTime=e||+new Date,this._state="running",this._onStart(),this.tick(this.startTime))};this.register(),this.delay>0?setTimeout((()=>Va(t)),this.delay):Va(t)}tick(t){let e=(t||+new Date)-this.startTime,n=Math.min(e,this.duration);this.durationProgress=n/this.duration;let{value:i,valueProgress:r}=this.calculate(n);this.value=Object.freeze(i),this.valueProgress=r,this._state!=="aborted"&&(this._abort(this.value,this.valueProgress,this.durationProgress)?(this._state="aborted",this.unregister()):e>=this.duration?(this.durationProgress=this.valueProgress=1,this._onChange(this.endValue,this.valueProgress,this.durationProgress),this._state="completed",this._onComplete(this.endValue,this.valueProgress,this.durationProgress),this.unregister()):(this._onChange(this.value,this.valueProgress,this.durationProgress),Va(this.tick)))}register(){dh.push(this)}unregister(){dh.remove(this)}abort(){this._state="aborted",this.unregister()}},U1=["startValue","endValue"],$d=class extends Ya{constructor(t){let{startValue:e=0,endValue:n=100}=t;super(X(X({},Me(t,U1)),{},{startValue:e,byValue:n-e}))}calculate(t){let e=this.easing(t,this.startValue,this.byValue,this.duration);return{value:e,valueProgress:Math.abs((e-this.startValue)/this.byValue)}}},B1=["startValue","endValue"],Qd=class extends Ya{constructor(t){let{startValue:e=[0],endValue:n=[100]}=t;super(X(X({},Me(t,B1)),{},{startValue:e,byValue:n.map(((i,r)=>i-e[r]))}))}calculate(t){let e=this.startValue.map(((n,i)=>this.easing(t,n,this.byValue[i],this.duration,i)));return{value:e,valueProgress:Math.abs((e[0]-this.startValue[0])/this.byValue[0])}}},k1=["startValue","endValue","easing","onChange","onComplete","abort"],z1=(s,t,e,n)=>t+e*(1-Math.cos(s/n*Ns)),Ud=s=>s&&((t,e,n)=>s(new yn(t).toRgba(),e,n)),tf=class extends Ya{constructor(t){let{startValue:e,endValue:n,easing:i=z1,onChange:r,onComplete:o,abort:a}=t,l=Me(t,k1),c=new yn(e).getSource(),h=new yn(n).getSource();super(X(X({},l),{},{startValue:c,byValue:h.map(((u,d)=>u-c[d])),easing:i,onChange:Ud(r),onComplete:Ud(o),abort:Ud(a)}))}calculate(t){let[e,n,i,r]=this.startValue.map(((a,l)=>this.easing(t,a,this.byValue[l],this.duration,l))),o=[...[e,n,i].map(Math.round),Lr(0,r,1)];return{value:o,valueProgress:o.map(((a,l)=>this.byValue[l]!==0?Math.abs((a-this.startValue[l])/this.byValue[l]):0)).find((a=>a!==0))||0}}};function Nf(s){let t=(e=>Array.isArray(e.startValue)||Array.isArray(e.endValue))(s)?new Qd(s):new $d(s);return t.start(),t}function C0(s){let t=new tf(s);return t.start(),t}var Pr=class s{constructor(t){this.status=t,this.points=[]}includes(t){return this.points.some((e=>e.eq(t)))}append(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.points=this.points.concat(e.filter((i=>!this.includes(i)))),this}static isPointContained(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0&&arguments[3];if(e.eq(n))return t.eq(e);if(e.x===n.x)return t.x===e.x&&(i||t.y>=Math.min(e.y,n.y)&&t.y<=Math.max(e.y,n.y));if(e.y===n.y)return t.y===e.y&&(i||t.x>=Math.min(e.x,n.x)&&t.x<=Math.max(e.x,n.x));{let r=yh(e,n),o=yh(e,t).divide(r);return i?Math.abs(o.x)===Math.abs(o.y):o.x===o.y&&o.x>=0&&o.x<=1}}static isPointInPolygon(t,e){let n=new st(t).setX(Math.min(t.x-1,...e.map((r=>r.x)))),i=0;for(let r=0;r<e.length;r++){let o=this.intersectSegmentSegment(e[r],e[(r+1)%e.length],t,n);if(o.includes(t))return!0;i+=+(o.status==="Intersection")}return i%2==1}static intersectLineLine(t,e,n,i){let r=!(arguments.length>4&&arguments[4]!==void 0)||arguments[4],o=!(arguments.length>5&&arguments[5]!==void 0)||arguments[5],a=e.x-t.x,l=e.y-t.y,c=i.x-n.x,h=i.y-n.y,u=t.x-n.x,d=t.y-n.y,f=c*d-h*u,p=a*d-l*u,x=h*a-c*l;if(x!==0){let m=f/x,g=p/x;return(r||0<=m&&m<=1)&&(o||0<=g&&g<=1)?new s("Intersection").append(new st(t.x+m*a,t.y+m*l)):new s}if(f===0||p===0){let m=r||o||s.isPointContained(t,n,i)||s.isPointContained(e,n,i)||s.isPointContained(n,t,e)||s.isPointContained(i,t,e);return new s(m?"Coincident":void 0)}return new s("Parallel")}static intersectSegmentLine(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!0)}static intersectSegmentSegment(t,e,n,i){return s.intersectLineLine(t,e,n,i,!1,!1)}static intersectLinePolygon(t,e,n){let i=!(arguments.length>3&&arguments[3]!==void 0)||arguments[3],r=new s,o=n.length;for(let a,l,c,h=0;h<o;h++){if(a=n[h],l=n[(h+1)%o],c=s.intersectLineLine(t,e,a,l,i,!1),c.status==="Coincident")return c;r.append(...c.points)}return r.points.length>0&&(r.status="Intersection"),r}static intersectSegmentPolygon(t,e,n){return s.intersectLinePolygon(t,e,n,!1)}static intersectPolygonPolygon(t,e){let n=new s,i=t.length,r=[];for(let o=0;o<i;o++){let a=t[o],l=t[(o+1)%i],c=s.intersectSegmentPolygon(a,l,e);c.status==="Coincident"?(r.push(c),n.append(a,l)):n.append(...c.points)}return r.length>0&&r.length===t.length?new s("Coincident"):(n.points.length>0&&(n.status="Intersection"),n)}static intersectPolygonRectangle(t,e,n){let i=e.min(n),r=e.max(n),o=new st(r.x,i.y),a=new st(i.x,r.y);return s.intersectPolygonPolygon(t,[i,o,r,a])}},ef=class extends fh{getX(){return this.getXY().x}setX(t){this.setXY(this.getXY().setX(t))}getY(){return this.getXY().y}setY(t){this.setXY(this.getXY().setY(t))}getRelativeX(){return this.left}setRelativeX(t){this.left=t}getRelativeY(){return this.top}setRelativeY(t){this.top=t}getXY(){let t=this.getRelativeXY();return this.group?un(t,this.group.calcTransformMatrix()):t}setXY(t,e,n){this.group&&(t=un(t,kn(this.group.calcTransformMatrix()))),this.setRelativeXY(t,e,n)}getRelativeXY(){return new st(this.left,this.top)}setRelativeXY(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.originX,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.originY;this.setPositionByOrigin(t,e,n)}isStrokeAccountedForInDimensions(){return!1}getCoords(){let{tl:t,tr:e,br:n,bl:i}=this.aCoords||(this.aCoords=this.calcACoords()),r=[t,e,n,i];if(this.group){let o=this.group.calcTransformMatrix();return r.map((a=>un(a,o)))}return r}intersectsWithRect(t,e){return Pr.intersectPolygonRectangle(this.getCoords(),t,e).status==="Intersection"}intersectsWithObject(t){let e=Pr.intersectPolygonPolygon(this.getCoords(),t.getCoords());return e.status==="Intersection"||e.status==="Coincident"||t.isContainedWithinObject(this)||this.isContainedWithinObject(t)}isContainedWithinObject(t){return this.getCoords().every((e=>t.containsPoint(e)))}isContainedWithinRect(t,e){let{left:n,top:i,width:r,height:o}=this.getBoundingRect();return n>=t.x&&n+r<=e.x&&i>=t.y&&i+o<=e.y}isOverlapping(t){return this.intersectsWithObject(t)||this.isContainedWithinObject(t)||t.isContainedWithinObject(this)}containsPoint(t){return Pr.isPointInPolygon(t,this.getCoords())}isOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return!!this.getCoords().some((n=>n.x<=e.x&&n.x>=t.x&&n.y<=e.y&&n.y>=t.y))||!!this.intersectsWithRect(t,e)||this.containsPoint(t.midPointFrom(e))}isPartiallyOnScreen(){if(!this.canvas)return!1;let{tl:t,br:e}=this.canvas.vptCoords;return this.intersectsWithRect(t,e)?!0:this.getCoords().every((n=>(n.x>=e.x||n.x<=t.x)&&(n.y>=e.y||n.y<=t.y)))&&this.containsPoint(t.midPointFrom(e))}getBoundingRect(){return Fi(this.getCoords())}getScaledWidth(){return this._getTransformedDimensions().x}getScaledHeight(){return this._getTransformedDimensions().y}scale(t){this._set(vn,t),this._set(zn,t),this.setCoords()}scaleToWidth(t){let e=this.getBoundingRect().width/this.getScaledWidth();return this.scale(t/this.width/e)}scaleToHeight(t){let e=this.getBoundingRect().height/this.getScaledHeight();return this.scale(t/this.height/e)}getCanvasRetinaScaling(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.getRetinaScaling())||1}getTotalAngle(){return this.group?Bi(s0(this.calcTransformMatrix())):this.angle}getViewportTransform(){var t;return((t=this.canvas)===null||t===void 0?void 0:t.viewportTransform)||xn.concat()}calcACoords(){let t=Nr({angle:this.angle}),{x:e,y:n}=this.getRelativeCenterPoint(),i=Go(e,n),r=Pe(i,t),o=this._getTransformedDimensions(),a=o.x/2,l=o.y/2;return{tl:un({x:-a,y:-l},r),tr:un({x:a,y:-l},r),bl:un({x:-a,y:l},r),br:un({x:a,y:l},r)}}setCoords(){this.aCoords=this.calcACoords()}transformMatrixKey(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=[];return!t&&this.group&&(e=this.group.transformMatrixKey(t)),e.push(this.top,this.left,this.width,this.height,this.scaleX,this.scaleY,this.angle,this.strokeWidth,this.skewX,this.skewY,+this.flipX,+this.flipY,ke(this.originX),ke(this.originY)),e}calcTransformMatrix(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0],e=this.calcOwnMatrix();if(t||!this.group)return e;let n=this.transformMatrixKey(t),i=this.matrixCache;return i&&i.key.every(((r,o)=>r===n[o]))?i.value:(this.group&&(e=Pe(this.group.calcTransformMatrix(!1),e)),this.matrixCache={key:n,value:e},e)}calcOwnMatrix(){let t=this.transformMatrixKey(!0),e=this.ownMatrixCache;if(e&&e.key===t)return e.value;let n=this.getRelativeCenterPoint(),i={angle:this.angle,translateX:n.x,translateY:n.y,scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,flipX:this.flipX,flipY:this.flipY},r=o0(i);return this.ownMatrixCache={key:t,value:r},r}_getNonTransformedDimensions(){return new st(this.width,this.height).scalarAdd(this.strokeWidth)}_calculateCurrentDimensions(t){return this._getTransformedDimensions(t).transform(this.getViewportTransform(),!0).scalarAdd(2*this.padding)}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=X({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,width:this.width,height:this.height,strokeWidth:this.strokeWidth},t),n=e.strokeWidth,i=n,r=0;this.strokeUniform&&(i=0,r=n);let o=e.width+i,a=e.height+i,l;return l=e.skewX===0&&e.skewY===0?new st(o*e.scaleX,a*e.scaleY):Vh(o,a,Ka(e)),l.scalarAdd(r)}translateToGivenOrigin(t,e,n,i,r){let o=t.x,a=t.y,l=ke(i)-ke(e),c=ke(r)-ke(n);if(l||c){let h=this._getTransformedDimensions();o+=l*h.x,a+=c*h.y}return new st(o,a)}translateToCenterPoint(t,e,n){if(e===Zt&&n===Zt)return t;let i=this.translateToGivenOrigin(t,e,n,Zt,Zt);return this.angle?i.rotate(Re(this.angle),t):i}translateToOriginPoint(t,e,n){let i=this.translateToGivenOrigin(t,Zt,Zt,e,n);return this.angle?i.rotate(Re(this.angle),t):i}getCenterPoint(){let t=this.getRelativeCenterPoint();return this.group?un(t,this.group.calcTransformMatrix()):t}getRelativeCenterPoint(){return this.translateToCenterPoint(new st(this.left,this.top),this.originX,this.originY)}getPointByOrigin(t,e){return this.translateToOriginPoint(this.getRelativeCenterPoint(),t,e)}setPositionByOrigin(t,e,n){let i=this.translateToCenterPoint(t,e,n),r=this.translateToOriginPoint(i,this.originX,this.originY);this.set({left:r.x,top:r.y})}_getLeftTopCoords(){return this.translateToOriginPoint(this.getRelativeCenterPoint(),pe,Tn)}},V1=["type"],G1=["extraParam"],es=class ah extends ef{static getDefaults(){return ah.ownDefaults}get type(){let t=this.constructor.type;return t==="FabricObject"?"object":t.toLowerCase()}set type(t){Fs("warn","Setting type has no effect",t)}constructor(t){super(),j(this,"_cacheContext",null),Object.assign(this,ah.ownDefaults),this.setOptions(t)}_createCacheCanvas(){this._cacheCanvas=Ui(),this._cacheContext=this._cacheCanvas.getContext("2d"),this._updateCacheCanvas(),this.dirty=!0}_limitCacheSize(t){let e=t.width,n=t.height,i=he.maxCacheSideLimit,r=he.minCacheSideLimit;if(e<=i&&n<=i&&e*n<=he.perfLimitSizeTotal)return e<r&&(t.width=r),n<r&&(t.height=r),t;let o=e/n,[a,l]=za.limitDimsByArea(o),c=Lr(r,a,i),h=Lr(r,l,i);return e>c&&(t.zoomX/=e/c,t.width=c,t.capped=!0),n>h&&(t.zoomY/=n/h,t.height=h,t.capped=!0),t}_getCacheCanvasDimensions(){let t=this.getTotalObjectScaling(),e=this._getTransformedDimensions({skewX:0,skewY:0}),n=e.x*t.x/this.scaleX,i=e.y*t.y/this.scaleY;return{width:Math.ceil(n+2),height:Math.ceil(i+2),zoomX:t.x,zoomY:t.y,x:n,y:i}}_updateCacheCanvas(){let t=this._cacheCanvas,e=this._cacheContext,{width:n,height:i,zoomX:r,zoomY:o,x:a,y:l}=this._limitCacheSize(this._getCacheCanvasDimensions()),c=n!==t.width||i!==t.height,h=this.zoomX!==r||this.zoomY!==o;if(!t||!e)return!1;if(c||h){n!==t.width||i!==t.height?(t.width=n,t.height=i):(e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,t.width,t.height));let u=a/2,d=l/2;return this.cacheTranslationX=Math.round(t.width/2-u)+u,this.cacheTranslationY=Math.round(t.height/2-d)+d,e.translate(this.cacheTranslationX,this.cacheTranslationY),e.scale(r,o),this.zoomX=r,this.zoomY=o,!0}return!1}setOptions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this._setOptions(t)}transform(t){let e=this.group&&!this.group._transformDone||this.group&&this.canvas&&t===this.canvas.contextTop,n=this.calcTransformMatrix(!e);t.transform(n[0],n[1],n[2],n[3],n[4],n[5])}getObjectScaling(){if(!this.group)return new st(Math.abs(this.scaleX),Math.abs(this.scaleY));let t=Oo(this.calcTransformMatrix());return new st(Math.abs(t.scaleX),Math.abs(t.scaleY))}getTotalObjectScaling(){let t=this.getObjectScaling();if(this.canvas){let e=this.canvas.getZoom(),n=this.getCanvasRetinaScaling();return t.scalarMultiply(e*n)}return t}getObjectOpacity(){let t=this.opacity;return this.group&&(t*=this.group.getObjectOpacity()),t}_constrainScale(t){return Math.abs(t)<this.minScaleLimit?t<0?-this.minScaleLimit:this.minScaleLimit:t===0?1e-4:t}_set(t,e){t!==vn&&t!==zn||(e=this._constrainScale(e)),t===vn&&e<0?(this.flipX=!this.flipX,e*=-1):t==="scaleY"&&e<0?(this.flipY=!this.flipY,e*=-1):t!=="shadow"||!e||e instanceof Rr||(e=new Rr(e));let n=this[t]!==e;return this[t]=e,n&&this.constructor.cacheProperties.includes(t)&&(this.dirty=!0),this.parent&&(this.dirty||n&&this.constructor.stateProperties.includes(t))&&this.parent._set("dirty",!0),this}isNotVisible(){return this.opacity===0||!this.width&&!this.height&&this.strokeWidth===0||!this.visible}render(t){this.isNotVisible()||this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(t.save(),this._setupCompositeOperation(t),this.drawSelectionBackground(t),this.transform(t),this._setOpacity(t),this._setShadow(t),this.shouldCache()?(this.renderCache(),this.drawCacheOnCanvas(t)):(this._removeCacheCanvas(),this.drawObject(t,!1,{}),this.dirty=!1),t.restore())}drawSelectionBackground(t){}renderCache(t){if(t=t||{},this._cacheCanvas&&this._cacheContext||this._createCacheCanvas(),this.isCacheDirty()&&this._cacheContext){let{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r}=this,{width:o,height:a}=this._cacheCanvas;this.drawObject(this._cacheContext,t.forClipping,{zoomX:e,zoomY:n,cacheTranslationX:i,cacheTranslationY:r,width:o,height:a,parentClipPaths:[]}),this.dirty=!1}}_removeCacheCanvas(){this._cacheCanvas=void 0,this._cacheContext=null}hasStroke(){return this.stroke&&this.stroke!=="transparent"&&this.strokeWidth!==0}hasFill(){return this.fill&&this.fill!=="transparent"}needsItsOwnCache(){return!!(this.paintFirst===En&&this.hasFill()&&this.hasStroke()&&this.shadow)||!!this.clipPath}shouldCache(){return this.ownCaching=this.objectCaching&&(!this.parent||!this.parent.isOnACache())||this.needsItsOwnCache(),this.ownCaching}willDrawShadow(){return!!this.shadow&&(this.shadow.offsetX!==0||this.shadow.offsetY!==0)}drawClipPathOnCache(t,e,n){t.save(),e.inverted?t.globalCompositeOperation="destination-out":t.globalCompositeOperation="destination-in",t.setTransform(1,0,0,1,0,0),t.drawImage(n,0,0),t.restore()}drawObject(t,e,n){let i=this.fill,r=this.stroke;e?(this.fill="black",this.stroke="",this._setClippingProperties(t)):this._renderBackground(t),this._render(t),this._drawClipPath(t,this.clipPath,n),this.fill=i,this.stroke=r}createClipPathLayer(t,e){let n=Vn(e),i=n.getContext("2d");if(i.translate(e.cacheTranslationX,e.cacheTranslationY),i.scale(e.zoomX,e.zoomY),t._cacheCanvas=n,e.parentClipPaths.forEach((r=>{r.transform(i)})),e.parentClipPaths.push(t),t.absolutePositioned){let r=kn(this.calcTransformMatrix());i.transform(r[0],r[1],r[2],r[3],r[4],r[5])}return t.transform(i),t.drawObject(i,!0,e),n}_drawClipPath(t,e,n){if(!e)return;e._transformDone=!0;let i=this.createClipPathLayer(e,n);this.drawClipPathOnCache(t,e,i)}drawCacheOnCanvas(t){t.scale(1/this.zoomX,1/this.zoomY),t.drawImage(this._cacheCanvas,-this.cacheTranslationX,-this.cacheTranslationY)}isCacheDirty(){let t=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.isNotVisible())return!1;let e=this._cacheCanvas,n=this._cacheContext;return!(!e||!n||t||!this._updateCacheCanvas())||!!(this.dirty||this.clipPath&&this.clipPath.absolutePositioned)&&(e&&n&&!t&&(n.save(),n.setTransform(1,0,0,1,0,0),n.clearRect(0,0,e.width,e.height),n.restore()),!0)}_renderBackground(t){if(!this.backgroundColor)return;let e=this._getNonTransformedDimensions();t.fillStyle=this.backgroundColor,t.fillRect(-e.x/2,-e.y/2,e.x,e.y),this._removeShadow(t)}_setOpacity(t){this.group&&!this.group._transformDone?t.globalAlpha=this.getObjectOpacity():t.globalAlpha*=this.opacity}_setStrokeStyles(t,e){let n=e.stroke;n&&(t.lineWidth=e.strokeWidth,t.lineCap=e.strokeLineCap,t.lineDashOffset=e.strokeDashOffset,t.lineJoin=e.strokeLineJoin,t.miterLimit=e.strokeMiterLimit,Jn(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?this._applyPatternForTransformedGradient(t,n):(t.strokeStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.strokeStyle=e.stroke)}_setFillStyles(t,e){let{fill:n}=e;n&&(Jn(n)?(t.fillStyle=n.toLive(t),this._applyPatternGradientTransform(t,n)):t.fillStyle=n)}_setClippingProperties(t){t.globalAlpha=1,t.strokeStyle="transparent",t.fillStyle="#000000"}_setLineDash(t,e){e&&e.length!==0&&t.setLineDash(e)}_setShadow(t){if(!this.shadow)return;let e=this.shadow,n=this.canvas,i=this.getCanvasRetinaScaling(),[r,,,o]=n?.viewportTransform||xn,a=r*i,l=o*i,c=e.nonScaling?new st(1,1):this.getObjectScaling();t.shadowColor=e.color,t.shadowBlur=e.blur*he.browserShadowBlurConstant*(a+l)*(c.x+c.y)/4,t.shadowOffsetX=e.offsetX*a*c.x,t.shadowOffsetY=e.offsetY*l*c.y}_removeShadow(t){this.shadow&&(t.shadowColor="",t.shadowBlur=t.shadowOffsetX=t.shadowOffsetY=0)}_applyPatternGradientTransform(t,e){if(!Jn(e))return{offsetX:0,offsetY:0};let n=e.gradientTransform||e.patternTransform,i=-this.width/2+e.offsetX||0,r=-this.height/2+e.offsetY||0;return e.gradientUnits==="percentage"?t.transform(this.width,0,0,this.height,i,r):t.transform(1,0,0,1,i,r),n&&t.transform(n[0],n[1],n[2],n[3],n[4],n[5]),{offsetX:i,offsetY:r}}_renderPaintInOrder(t){this.paintFirst===En?(this._renderStroke(t),this._renderFill(t)):(this._renderFill(t),this._renderStroke(t))}_render(t){}_renderFill(t){this.fill&&(t.save(),this._setFillStyles(t,this),this.fillRule==="evenodd"?t.fill("evenodd"):t.fill(),t.restore())}_renderStroke(t){if(this.stroke&&this.strokeWidth!==0){if(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this.strokeUniform){let e=this.getObjectScaling();t.scale(1/e.x,1/e.y)}this._setLineDash(t,this.strokeDashArray),this._setStrokeStyles(t,this),t.stroke(),t.restore()}}_applyPatternForTransformedGradient(t,e){var n;let i=this._limitCacheSize(this._getCacheCanvasDimensions()),r=this.getCanvasRetinaScaling(),o=i.x/this.scaleX/r,a=i.y/this.scaleY/r,l=Vn({width:Math.ceil(o),height:Math.ceil(a)}),c=l.getContext("2d");c&&(c.beginPath(),c.moveTo(0,0),c.lineTo(o,0),c.lineTo(o,a),c.lineTo(0,a),c.closePath(),c.translate(o/2,a/2),c.scale(i.zoomX/this.scaleX/r,i.zoomY/this.scaleY/r),this._applyPatternGradientTransform(c,e),c.fillStyle=e.toLive(t),c.fill(),t.translate(-this.width/2-this.strokeWidth/2,-this.height/2-this.strokeWidth/2),t.scale(r*this.scaleX/i.zoomX,r*this.scaleY/i.zoomY),t.strokeStyle=(n=c.createPattern(l,"no-repeat"))!==null&&n!==void 0?n:"")}_findCenterFromElement(){return new st(this.left+this.width/2,this.top+this.height/2)}clone(t){let e=this.toObject(t);return this.constructor.fromObject(e)}cloneAsImage(t){let e=this.toCanvasElement(t);return new(Et.getClass("image"))(e)}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=Df(this),n=this.group,i=this.shadow,r=Math.abs,o=t.enableRetinaScaling?Zg():1,a=(t.multiplier||1)*o,l=t.canvasProvider||(S=>new Ir(S,{enableRetinaScaling:!1,renderOnAddRemove:!1,skipOffscreen:!1}));delete this.group,t.withoutTransform&&d0(this),t.withoutShadow&&(this.shadow=null),t.viewportTransform&&Zd(this,this.getViewportTransform()),this.setCoords();let c=Ui(),h=this.getBoundingRect(),u=this.shadow,d=new st;if(u){let S=u.blur,P=u.nonScaling?new st(1,1):this.getObjectScaling();d.x=2*Math.round(r(u.offsetX)+S)*r(P.x),d.y=2*Math.round(r(u.offsetY)+S)*r(P.y)}let f=h.width+d.x,p=h.height+d.y;c.width=Math.ceil(f),c.height=Math.ceil(p);let x=l(c);t.format==="jpeg"&&(x.backgroundColor="#fff"),this.setPositionByOrigin(new st(x.width/2,x.height/2),Zt,Zt);let m=this.canvas;x._objects=[this],this.set("canvas",x),this.setCoords();let g=x.toCanvasElement(a||1,t);return this.set("canvas",m),this.shadow=i,n&&(this.group=n),this.set(e),this.setCoords(),x._objects=[],x.destroy(),g}toDataURL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Cf(this.toCanvasElement(t),t.format||"png",t.quality||1)}toBlob(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ef(this.toCanvasElement(t),t.format||"png",t.quality||1)}isType(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.includes(this.constructor.type)||e.includes(this.type)}complexity(){return 1}toJSON(){return this.toObject()}rotate(t){let{centeredRotation:e,originX:n,originY:i}=this;if(e){let{x:r,y:o}=this.getRelativeCenterPoint();this.originX=Zt,this.originY=Zt,this.left=r,this.top=o}if(this.set("angle",t),e){let{x:r,y:o}=this.translateToOriginPoint(this.getRelativeCenterPoint(),n,i);this.left=r,this.top=o,this.originX=n,this.originY=i}}setOnGroup(){}_setupCompositeOperation(t){this.globalCompositeOperation&&(t.globalCompositeOperation=this.globalCompositeOperation)}dispose(){dh.cancelByTarget(this),this.off(),this._set("canvas",void 0),this._cacheCanvas&&Ni().dispose(this._cacheCanvas),this._cacheCanvas=void 0,this._cacheContext=null}animate(t,e){return Object.entries(t).reduce(((n,i)=>{let[r,o]=i;return n[r]=this._animate(r,o,e),n}),{})}_animate(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=t.split("."),r=this.constructor.colorProperties.includes(i[i.length-1]),{abort:o,startValue:a,onChange:l,onComplete:c}=n,h=X(X({},n),{},{target:this,startValue:a??i.reduce(((u,d)=>u[d]),this),endValue:e,abort:o?.bind(this),onChange:(u,d,f)=>{i.reduce(((p,x,m)=>(m===i.length-1&&(p[x]=u),p[x])),this),l&&l(u,d,f)},onComplete:(u,d,f)=>{this.setCoords(),c&&c(u,d,f)}});return r?C0(h):Nf(h)}isDescendantOf(t){let{parent:e,group:n}=this;return e===t||n===t||!!e&&e.isDescendantOf(t)||!!n&&n!==e&&n.isDescendantOf(t)}getAncestors(){let t=[],e=this;do e=e.parent,e&&t.push(e);while(e);return t}findCommonAncestors(t){if(this===t)return{fork:[],otherFork:[],common:[this,...this.getAncestors()]};let e=this.getAncestors(),n=t.getAncestors();if(e.length===0&&n.length>0&&this===n[n.length-1])return{fork:[],otherFork:[t,...n.slice(0,n.length-1)],common:[this]};for(let i,r=0;r<e.length;r++){if(i=e[r],i===t)return{fork:[this,...e.slice(0,r)],otherFork:[],common:e.slice(r)};for(let o=0;o<n.length;o++){if(this===n[o])return{fork:[],otherFork:[t,...n.slice(0,o)],common:[this,...e]};if(i===n[o])return{fork:[this,...e.slice(0,r)],otherFork:[t,...n.slice(0,o)],common:e.slice(r)}}}return{fork:[this,...e],otherFork:[t,...n],common:[]}}hasCommonAncestors(t){let e=this.findCommonAncestors(t);return e&&!!e.common.length}isInFrontOf(t){if(this===t)return;let e=this.findCommonAncestors(t);if(e.fork.includes(t))return!0;if(e.otherFork.includes(this))return!1;let n=e.common[0]||this.canvas;if(!n)return;let i=e.fork.pop(),r=e.otherFork.pop(),o=n._objects.indexOf(i),a=n._objects.indexOf(r);return o>-1&&o>a}toObject(){let t=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).concat(ah.customProperties,this.constructor.customProperties||[]),e,n=he.NUM_FRACTION_DIGITS,{clipPath:i,fill:r,stroke:o,shadow:a,strokeDashArray:l,left:c,top:h,originX:u,originY:d,width:f,height:p,strokeWidth:x,strokeLineCap:m,strokeDashOffset:g,strokeLineJoin:S,strokeUniform:P,strokeMiterLimit:T,scaleX:A,scaleY:D,angle:_,flipX:y,flipY:C,opacity:E,visible:R,backgroundColor:L,fillRule:G,paintFirst:O,globalCompositeOperation:Z,skewX:$,skewY:z}=this;i&&!i.excludeFromExport&&(e=i.toObject(t.concat("inverted","absolutePositioned")));let F=J=>ye(J,n),B=X(X({},Ur(this,t)),{},{type:this.constructor.type,version:Xd,originX:u,originY:d,left:F(c),top:F(h),width:F(f),height:F(p),fill:gg(r)?r.toObject():r,stroke:gg(o)?o.toObject():o,strokeWidth:F(x),strokeDashArray:l&&l.concat(),strokeLineCap:m,strokeDashOffset:g,strokeLineJoin:S,strokeUniform:P,strokeMiterLimit:F(T),scaleX:F(A),scaleY:F(D),angle:F(_),flipX:y,flipY:C,opacity:F(E),shadow:a&&a.toObject(),visible:R,backgroundColor:L,fillRule:G,paintFirst:O,globalCompositeOperation:Z,skewX:F($),skewY:F(z)},e?{clipPath:e}:null);return this.includeDefaultValues?B:this._removeDefaultValues(B)}toDatalessObject(t){return this.toObject(t)}_removeDefaultValues(t){let e=this.constructor.getDefaults(),n=Object.keys(e).length>0?e:Object.getPrototypeOf(this);return Pf(t,((i,r)=>{if(r===pe||r===Tn||r==="type")return!0;let o=n[r];return i!==o&&!(Array.isArray(i)&&Array.isArray(o)&&i.length===0&&o.length===0)}))}toString(){return"#<".concat(this.constructor.type,">")}static _fromObject(t){let e=Me(t,V1),n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{extraParam:i}=n,r=Me(n,G1);return $a(e,r).then((o=>i?(delete o[i],new this(e[i],o)):new this(o)))}static fromObject(t,e){return this._fromObject(t,e)}};j(es,"stateProperties",O1),j(es,"cacheProperties",os),j(es,"ownDefaults",L1),j(es,"type","FabricObject"),j(es,"colorProperties",[He,En,"backgroundColor"]),j(es,"customProperties",[]),Et.setClass(es),Et.setClass(es,"object");var Bs=(s,t,e)=>(n,i,r,o)=>{let a=t(n,i,r,o);return a&&If(s,X(X({},Of(n,i,r,o)),e)),a};function Br(s){return(t,e,n,i)=>{let{target:r,originX:o,originY:a}=e,l=r.getRelativeCenterPoint(),c=r.translateToOriginPoint(l,o,a),h=s(t,e,n,i);return r.setPositionByOrigin(c,e.originX,e.originY),h}}var nf=Bs(Xa,Br(((s,t,e,n)=>{let i=Gh(t,t.originX,t.originY,e,n);if(ke(t.originX)===ke(Zt)||ke(t.originX)===ke(Le)&&i.x<0||ke(t.originX)===ke(pe)&&i.x>0){let{target:r}=t,o=r.strokeWidth/(r.strokeUniform?r.scaleX:1),a=p0(t)?2:1,l=r.width,c=Math.abs(i.x*a/r.scaleX)-o;return r.set("width",Math.max(c,1)),l!==r.width}return!1})));function E0(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?En:He,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h,u=t,d=e;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",r>o?(h=r,s.scale(1,o/r),d=e*r/o):o>r?(h=o,s.scale(r/o,1),u=t*o/r):h=r,s.beginPath(),s.arc(u,d,h/2,0,rs,!1),s[l](),c&&s.stroke(),s.restore()}function A0(s,t,e,n,i){n=n||{};let r=this.sizeX||n.cornerSize||i.cornerSize,o=this.sizeY||n.cornerSize||i.cornerSize,a=n.transparentCorners!==void 0?n.transparentCorners:i.transparentCorners,l=a?En:He,c=!a&&(n.cornerStrokeColor||i.cornerStrokeColor),h=r/2,u=o/2;s.save(),s.fillStyle=n.cornerColor||i.cornerColor||"",s.strokeStyle=n.cornerStrokeColor||i.cornerStrokeColor||"",s.translate(t,e);let d=i.getTotalAngle();s.rotate(Re(d)),s["".concat(l,"Rect")](-h,-u,r,o),c&&s.strokeRect(-h,-u,r,o),s.restore()}var gn=class{constructor(t){j(this,"visible",!0),j(this,"actionName",Bh),j(this,"angle",0),j(this,"x",0),j(this,"y",0),j(this,"offsetX",0),j(this,"offsetY",0),j(this,"sizeX",0),j(this,"sizeY",0),j(this,"touchSizeX",0),j(this,"touchSizeY",0),j(this,"cursorStyle","crosshair"),j(this,"withConnection",!1),Object.assign(this,t)}shouldActivate(t,e,n,i){var r;let{tl:o,tr:a,br:l,bl:c}=i;return((r=e.canvas)===null||r===void 0?void 0:r.getActiveObject())===e&&e.isControlVisible(t)&&Pr.isPointInPolygon(n,[o,a,l,c])}getActionHandler(t,e,n){return this.actionHandler}getMouseDownHandler(t,e,n){return this.mouseDownHandler}getMouseUpHandler(t,e,n){return this.mouseUpHandler}cursorStyleHandler(t,e,n){return e.cursorStyle}getActionName(t,e,n){return e.actionName}getVisibility(t,e){var n,i;return(n=(i=t._controlsVisibility)===null||i===void 0?void 0:i[e])!==null&&n!==void 0?n:this.visible}setVisibility(t,e,n){this.visible=t}positionHandler(t,e,n,i){return new st(this.x*t.x+this.offsetX,this.y*t.y+this.offsetY).transform(e)}calcCornerCoords(t,e,n,i,r,o){let a=kh([Go(n,i),Nr({angle:t}),zh((r?this.touchSizeX:this.sizeX)||e,(r?this.touchSizeY:this.sizeY)||e)]);return{tl:new st(-.5,-.5).transform(a),tr:new st(.5,-.5).transform(a),br:new st(.5,.5).transform(a),bl:new st(-.5,.5).transform(a)}}render(t,e,n,i,r){((i=i||{}).cornerStyle||r.cornerStyle)==="circle"?E0.call(this,t,e,n,i,r):A0.call(this,t,e,n,i,r)}},R0=(s,t,e)=>e.lockRotation?gh:t.cursorStyle,P0=Bs(Kg,Br(((s,t,e,n)=>{let{target:i,ex:r,ey:o,theta:a,originX:l,originY:c}=t,h=i.translateToOriginPoint(i.getRelativeCenterPoint(),l,c);if(mi(i,"lockRotation"))return!1;let u=Math.atan2(o-h.y,r-h.x),d=Math.atan2(n-h.y,e-h.x),f=Bi(d-u+a);if(i.snapAngle&&i.snapAngle>0){let x=i.snapAngle,m=i.snapThreshold||x,g=Math.ceil(f/x)*x,S=Math.floor(f/x)*x;Math.abs(f-S)<m?f=S:Math.abs(f-g)<m&&(f=g)}f<0&&(f=360+f),f%=360;let p=i.angle!==f;return i.angle=f,p})));function D0(s,t){let e=t.canvas,n=s[e.uniScaleKey];return e.uniformScaling&&!n||!e.uniformScaling&&n}function I0(s,t,e){let n=mi(s,"lockScalingX"),i=mi(s,"lockScalingY");if(n&&i||!t&&(n||i)&&e||n&&t==="x"||i&&t==="y")return!0;let{width:r,height:o,strokeWidth:a}=s;return r===0&&a===0&&t!=="y"||o===0&&a===0&&t!=="x"}var H1=["e","se","s","sw","w","nw","n","ne","e"],wo=(s,t,e)=>{let n=D0(s,e);if(I0(e,t.x!==0&&t.y===0?"x":t.x===0&&t.y!==0?"y":"",n))return gh;let i=m0(e,t);return"".concat(H1[i],"-resize")};function Uf(s,t,e,n){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},r=t.target,o=i.by,a=D0(s,r),l,c,h,u,d,f;if(I0(r,o,a))return!1;if(t.gestureScale)c=t.scaleX*t.gestureScale,h=t.scaleY*t.gestureScale;else{if(l=Gh(t,t.originX,t.originY,e,n),d=o!=="y"?Math.sign(l.x||t.signX||1):1,f=o!=="x"?Math.sign(l.y||t.signY||1):1,t.signX||(t.signX=d),t.signY||(t.signY=f),mi(r,"lockScalingFlip")&&(t.signX!==d||t.signY!==f))return!1;if(u=r._getTransformedDimensions(),a&&!o){let m=Math.abs(l.x)+Math.abs(l.y),{original:g}=t,S=m/(Math.abs(u.x*g.scaleX/r.scaleX)+Math.abs(u.y*g.scaleY/r.scaleY));c=g.scaleX*S,h=g.scaleY*S}else c=Math.abs(l.x*r.scaleX/u.x),h=Math.abs(l.y*r.scaleY/u.y);p0(t)&&(c*=2,h*=2),t.signX!==d&&o!=="y"&&(t.originX=yg(t.originX),c*=-1,t.signX=d),t.signY!==f&&o!=="x"&&(t.originY=yg(t.originY),h*=-1,t.signY=f)}let p=r.scaleX,x=r.scaleY;return o?(o==="x"&&r.set(vn,c),o==="y"&&r.set(zn,h)):(!mi(r,"lockScalingX")&&r.set(vn,c),!mi(r,"lockScalingY")&&r.set(zn,h)),p!==r.scaleX||x!==r.scaleY}var Ba=Bs(Uh,Br(((s,t,e,n)=>Uf(s,t,e,n)))),O0=Bs(Uh,Br(((s,t,e,n)=>Uf(s,t,e,n,{by:"x"})))),L0=Bs(Uh,Br(((s,t,e,n)=>Uf(s,t,e,n,{by:"y"})))),W1=["target","ex","ey","skewingSide"],Bd={x:{counterAxis:"y",scale:vn,skew:zo,lockSkewing:"lockSkewingX",origin:"originX",flip:"flipX"},y:{counterAxis:"x",scale:zn,skew:Vo,lockSkewing:"lockSkewingY",origin:"originY",flip:"flipY"}},X1=["ns","nesw","ew","nwse"],F0=(s,t,e)=>{if(t.x!==0&&mi(e,"lockSkewingY")||t.y!==0&&mi(e,"lockSkewingX"))return gh;let n=m0(e,t)%4;return"".concat(X1[n],"-resize")};function N0(s,t,e,n,i){let{target:r}=e,{counterAxis:o,origin:a,lockSkewing:l,skew:c,flip:h}=Bd[s];if(mi(r,l))return!1;let{origin:u,flip:d}=Bd[o],f=ke(e[u])*(r[d]?-1:1),p=-Math.sign(f)*(r[h]?-1:1),x=.5*-((r[c]===0&&Gh(e,Zt,Zt,n,i)[s]>0||r[c]>0?1:-1)*p)+.5;return Bs($g,Br(((g,S,P,T)=>(function(A,D,_){let{target:y,ex:C,ey:E,skewingSide:R}=D,L=Me(D,W1),{skew:G}=Bd[A],O=_.subtract(new st(C,E)).divide(new st(y.scaleX,y.scaleY))[A],Z=y[G],$=L[G],z=Math.tan(Re($)),F=A==="y"?y._getTransformedDimensions({scaleX:1,scaleY:1,skewX:0}).x:y._getTransformedDimensions({scaleX:1,scaleY:1}).y,B=2*O*R/Math.max(F,1)+z,J=Bi(Math.atan(B));y.set(G,J);let nt=Z!==y[G];if(nt&&A==="y"){let{skewX:mt,scaleX:St}=y,ot=y._getTransformedDimensions({skewY:Z}),_t=y._getTransformedDimensions(),vt=mt!==0?ot.x/_t.x:1;vt!==1&&y.set(vn,vt*St)}return nt})(s,S,new st(P,T)))))(t,X(X({},e),{},{[a]:x,skewingSide:p}),n,i)}var U0=(s,t,e,n)=>N0("x",s,t,e,n),B0=(s,t,e,n)=>N0("y",s,t,e,n);function Xh(s,t){return s[t.canvas.altActionKey]}var ka=(s,t,e)=>{let n=Xh(s,e);return t.x===0?n?zo:zn:t.y===0?n?Vo:vn:""},ur=(s,t,e)=>Xh(s,e)?F0(0,t,e):wo(s,t,e),sf=(s,t,e,n)=>Xh(s,t.target)?B0(s,t,e,n):O0(s,t,e,n),rf=(s,t,e,n)=>Xh(s,t.target)?U0(s,t,e,n):L0(s,t,e,n),Bf=()=>({ml:new gn({x:-.5,y:0,cursorStyleHandler:ur,actionHandler:sf,getActionName:ka}),mr:new gn({x:.5,y:0,cursorStyleHandler:ur,actionHandler:sf,getActionName:ka}),mb:new gn({x:0,y:.5,cursorStyleHandler:ur,actionHandler:rf,getActionName:ka}),mt:new gn({x:0,y:-.5,cursorStyleHandler:ur,actionHandler:rf,getActionName:ka}),tl:new gn({x:-.5,y:-.5,cursorStyleHandler:wo,actionHandler:Ba}),tr:new gn({x:.5,y:-.5,cursorStyleHandler:wo,actionHandler:Ba}),bl:new gn({x:-.5,y:.5,cursorStyleHandler:wo,actionHandler:Ba}),br:new gn({x:.5,y:.5,cursorStyleHandler:wo,actionHandler:Ba}),mtr:new gn({x:0,y:-.5,actionHandler:P0,cursorStyleHandler:R0,offsetY:-40,withConnection:!0,actionName:wf})}),k0=()=>({mr:new gn({x:.5,y:0,actionHandler:nf,cursorStyleHandler:ur,actionName:Xa}),ml:new gn({x:-.5,y:0,actionHandler:nf,cursorStyleHandler:ur,actionName:Xa})}),z0=()=>X(X({},Bf()),k0()),Mh=class s extends es{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,this.constructor.createControls(),s.ownDefaults),this.setOptions(t)}static createControls(){return{controls:Bf()}}_updateCacheCanvas(){let t=this.canvas;if(this.noScaleCache&&t&&t._currentTransform){let e=t._currentTransform,n=e.target,i=e.action;if(this===n&&i&&i.startsWith(Bh))return!1}return super._updateCacheCanvas()}getActiveControl(){let t=this.__corner;return t?{key:t,control:this.controls[t],coord:this.oCoords[t]}:void 0}findControl(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(!this.hasControls||!this.canvas)return;this.__corner=void 0;let n=Object.entries(this.oCoords);for(let i=n.length-1;i>=0;i--){let[r,o]=n[i],a=this.controls[r];if(a.shouldActivate(r,this,t,e?o.touchCorner:o.corner))return this.__corner=r,{key:r,control:a,coord:this.oCoords[r]}}}calcOCoords(){let t=this.getViewportTransform(),e=this.getCenterPoint(),n=Go(e.x,e.y),i=Nr({angle:this.getTotalAngle()-(this.group&&this.flipX?180:0)}),r=Pe(n,i),o=Pe(t,r),a=Pe(o,[1/t[0],0,0,1/t[3],0,0]),l=this.group?Oo(this.calcTransformMatrix()):void 0;l&&(l.scaleX=Math.abs(l.scaleX),l.scaleY=Math.abs(l.scaleY));let c=this._calculateCurrentDimensions(l),h={};return this.forEachControl(((u,d)=>{let f=u.positionHandler(c,a,this,u);h[d]=Object.assign(f,this._calcCornerCoords(u,f))})),h}_calcCornerCoords(t,e){let n=this.getTotalAngle();return{corner:t.calcCornerCoords(n,this.cornerSize,e.x,e.y,!1,this),touchCorner:t.calcCornerCoords(n,this.touchCornerSize,e.x,e.y,!0,this)}}setCoords(){super.setCoords(),this.canvas&&(this.oCoords=this.calcOCoords())}forEachControl(t){for(let e in this.controls)t(this.controls[e],e,this)}drawSelectionBackground(t){if(!this.selectionBackgroundColor||this.canvas&&this.canvas._activeObject!==this)return;t.save();let e=this.getRelativeCenterPoint(),n=this._calculateCurrentDimensions(),i=this.getViewportTransform();t.translate(e.x,e.y),t.scale(1/i[0],1/i[3]),t.rotate(Re(this.angle)),t.fillStyle=this.selectionBackgroundColor,t.fillRect(-n.x/2,-n.y/2,n.x,n.y),t.restore()}strokeBorders(t,e){t.strokeRect(-e.x/2,-e.y/2,e.x,e.y)}_drawBorders(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=X({hasControls:this.hasControls,borderColor:this.borderColor,borderDashArray:this.borderDashArray},n);t.save(),t.strokeStyle=i.borderColor,this._setLineDash(t,i.borderDashArray),this.strokeBorders(t,e),i.hasControls&&this.drawControlsConnectingLines(t,e),t.restore()}_renderControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{hasBorders:n,hasControls:i}=this,r=X({hasBorders:n,hasControls:i},e),o=this.getViewportTransform(),a=r.hasBorders,l=r.hasControls,c=Pe(o,this.calcTransformMatrix()),h=Oo(c);t.save(),t.translate(h.translateX,h.translateY),t.lineWidth=this.borderScaleFactor,this.group===this.parent&&(t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1),this.flipX&&(h.angle-=180),t.rotate(Re(this.group?h.angle:this.angle)),a&&this.drawBorders(t,h,e),l&&this.drawControls(t,e),t.restore()}drawBorders(t,e,n){let i;if(n&&n.forActiveSelection||this.group){let r=Vh(this.width,this.height,Ka(e)),o=this.isStrokeAccountedForInDimensions()?Tf:(this.strokeUniform?new st().scalarAdd(this.canvas?this.canvas.getZoom():1):new st(e.scaleX,e.scaleY)).scalarMultiply(this.strokeWidth);i=r.add(o).scalarAdd(this.borderScaleFactor).scalarAdd(2*this.padding)}else i=this._calculateCurrentDimensions().scalarAdd(this.borderScaleFactor);this._drawBorders(t,i,n)}drawControlsConnectingLines(t,e){let n=!1;t.beginPath(),this.forEachControl(((i,r)=>{i.withConnection&&i.getVisibility(this,r)&&(n=!0,t.moveTo(i.x*e.x,i.y*e.y),t.lineTo(i.x*e.x+i.offsetX,i.y*e.y+i.offsetY))})),n&&t.stroke()}drawControls(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t.save();let n=this.getCanvasRetinaScaling(),{cornerStrokeColor:i,cornerDashArray:r,cornerColor:o}=this,a=X({cornerStrokeColor:i,cornerDashArray:r,cornerColor:o},e);t.setTransform(n,0,0,n,0,0),t.strokeStyle=t.fillStyle=a.cornerColor,this.transparentCorners||(t.strokeStyle=a.cornerStrokeColor),this._setLineDash(t,a.cornerDashArray),this.forEachControl(((l,c)=>{if(l.getVisibility(this,c)){let h=this.oCoords[c];l.render(t,h.x,h.y,a,this)}})),t.restore()}isControlVisible(t){return this.controls[t]&&this.controls[t].getVisibility(this,t)}setControlVisible(t,e){this._controlsVisibility||(this._controlsVisibility={}),this._controlsVisibility[t]=e}setControlsVisibility(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Object.entries(t).forEach((e=>{let[n,i]=e;return this.setControlVisible(n,i)}))}clearContextTop(t){if(!this.canvas)return;let e=this.canvas.contextTop;if(!e)return;let n=this.canvas.viewportTransform;e.save(),e.transform(n[0],n[1],n[2],n[3],n[4],n[5]),this.transform(e);let i=this.width+4,r=this.height+4;return e.clearRect(-i/2,-r/2,i,r),t||e.restore(),e}onDeselect(t){return!1}onSelect(t){return!1}shouldStartDragging(t){return!1}onDragStart(t){return!1}canDrop(t){return!1}renderDragSourceEffect(t){}renderDropTargetEffect(t){}};function V0(s,t){return t.forEach((e=>{Object.getOwnPropertyNames(e.prototype).forEach((n=>{n!=="constructor"&&Object.defineProperty(s.prototype,n,Object.getOwnPropertyDescriptor(e.prototype,n)||Object.create(null))}))})),s}j(Mh,"ownDefaults",{noScaleCache:!0,lockMovementX:!1,lockMovementY:!1,lockRotation:!1,lockScalingX:!1,lockScalingY:!1,lockSkewingX:!1,lockSkewingY:!1,lockScalingFlip:!1,cornerSize:13,touchCornerSize:24,transparentCorners:!0,cornerColor:"rgb(178,204,255)",cornerStrokeColor:"",cornerStyle:"rect",cornerDashArray:null,hasControls:!0,borderColor:"rgb(178,204,255)",borderDashArray:null,borderOpacityWhenMoving:.4,borderScaleFactor:1,hasBorders:!0,selectionBackgroundColor:"",selectable:!0,evented:!0,perPixelTargetFind:!1,activeOn:"down",hoverCursor:null,moveCursor:null});var Je=class extends Mh{};V0(Je,[xh]),Et.setClass(Je),Et.setClass(Je,"object");var G0=(s,t,e,n)=>{let i=2*(n=Math.round(n))+1,{data:r}=s.getImageData(t-n,e-n,i,i);for(let o=3;o<r.length;o+=4)if(r[o]>0)return!1;return!0},wh=class{constructor(t){this.options=t,this.strokeProjectionMagnitude=this.options.strokeWidth/2,this.scale=new st(this.options.scaleX,this.options.scaleY),this.strokeUniformScalar=this.options.strokeUniform?new st(1/this.options.scaleX,1/this.options.scaleY):new st(1,1)}createSideVector(t,e){let n=yh(t,e);return this.options.strokeUniform?n.multiply(this.scale):n}projectOrthogonally(t,e,n){return this.applySkew(t.add(this.calcOrthogonalProjection(t,e,n)))}isSkewed(){return this.options.skewX!==0||this.options.skewY!==0}applySkew(t){let e=new st(t);return e.y+=e.x*Math.tan(Re(this.options.skewY)),e.x+=e.y*Math.tan(Re(this.options.skewX)),e}scaleUnitVector(t,e){return t.multiply(this.strokeUniformScalar).scalarMultiply(e)}},j1=new st,Th=class s extends wh{static getOrthogonalRotationFactor(t,e){let n=e?bh(t,e):M0(t);return Math.abs(n)<Ns?-1:1}constructor(t,e,n,i){super(i),j(this,"AB",void 0),j(this,"AC",void 0),j(this,"alpha",void 0),j(this,"bisector",void 0),this.A=new st(t),this.B=new st(e),this.C=new st(n),this.AB=this.createSideVector(this.A,this.B),this.AC=this.createSideVector(this.A,this.C),this.alpha=bh(this.AB,this.AC),this.bisector=Wh(Lf(this.AB.eq(j1)?this.AC:this.AB,this.alpha/2))}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e),r=Ff(i),o=s.getOrthogonalRotationFactor(r,this.bisector);return this.scaleUnitVector(r,n*o)}projectBevel(){let t=[];return(this.alpha%rs==0?[this.B]:[this.B,this.C]).forEach((e=>{t.push(this.projectOrthogonally(this.A,e)),t.push(this.projectOrthogonally(this.A,e,-this.strokeProjectionMagnitude))})),t}projectMiter(){let t=[],e=Math.abs(this.alpha),n=1/Math.sin(e/2),i=this.scaleUnitVector(this.bisector,-this.strokeProjectionMagnitude*n),r=this.options.strokeUniform?Sh(this.scaleUnitVector(this.bisector,this.options.strokeMiterLimit)):this.options.strokeMiterLimit;return Sh(i)/this.strokeProjectionMagnitude<=r&&t.push(this.applySkew(this.A.add(i))),t.push(...this.projectBevel()),t}projectRoundNoSkew(t,e){let n=[],i=new st(s.getOrthogonalRotationFactor(this.bisector),s.getOrthogonalRotationFactor(new st(this.bisector.y,this.bisector.x)));return[new st(1,0).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i),new st(0,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar).multiply(i)].forEach((r=>{Jd(r,t,e)&&n.push(this.A.add(r))})),n}projectRoundWithSkew(t,e){let n=[],{skewX:i,skewY:r,scaleX:o,scaleY:a,strokeUniform:l}=this.options,c=new st(Math.tan(Re(i)),Math.tan(Re(r))),h=this.strokeProjectionMagnitude,u=l?h/a/Math.sqrt(1/a**2+1/o**2*c.y**2):h/Math.sqrt(1+c.y**2),d=new st(Math.sqrt(Math.max(h**2-u**2,0)),u),f=l?h/Math.sqrt(1+c.x**2*(1/a)**2/(1/o+1/o*c.x*c.y)**2):h/Math.sqrt(1+c.x**2/(1+c.x*c.y)**2),p=new st(f,Math.sqrt(Math.max(h**2-f**2,0)));return[p,p.scalarMultiply(-1),d,d.scalarMultiply(-1)].map((x=>this.applySkew(l?x.multiply(this.strokeUniformScalar):x))).forEach((x=>{Jd(x,t,e)&&n.push(this.applySkew(this.A).add(x))})),n}projectRound(){let t=[];t.push(...this.projectBevel());let e=this.alpha%rs==0,n=this.applySkew(this.A),i=t[e?0:2].subtract(n),r=t[e?1:0].subtract(n),o=e?this.applySkew(this.AB.scalarMultiply(-1)):this.applySkew(this.bisector.multiply(this.strokeUniformScalar).scalarMultiply(-1)),a=Do(i,o)>0,l=a?i:r,c=a?r:i;return this.isSkewed()?t.push(...this.projectRoundWithSkew(l,c)):t.push(...this.projectRoundNoSkew(l,c)),t}projectPoints(){switch(this.options.strokeLineJoin){case"miter":return this.projectMiter();case"round":return this.projectRound();default:return this.projectBevel()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t,angle:this.alpha,bisector:this.bisector})))}},Ch=class extends wh{constructor(t,e,n){super(n),this.A=new st(t),this.T=new st(e)}calcOrthogonalProjection(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.strokeProjectionMagnitude,i=this.createSideVector(t,e);return this.scaleUnitVector(Ff(i),n)}projectButt(){return[this.projectOrthogonally(this.A,this.T,this.strokeProjectionMagnitude),this.projectOrthogonally(this.A,this.T,-this.strokeProjectionMagnitude)]}projectRound(){let t=[];if(!this.isSkewed()&&this.A.eq(this.T)){let e=new st(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.applySkew(this.A.add(e)),this.applySkew(this.A.subtract(e)))}else t.push(...new Th(this.A,this.T,this.T,this.options).projectRound());return t}projectSquare(){let t=[];if(this.A.eq(this.T)){let e=new st(1,1).scalarMultiply(this.strokeProjectionMagnitude).multiply(this.strokeUniformScalar);t.push(this.A.add(e),this.A.subtract(e))}else{let e=this.calcOrthogonalProjection(this.A,this.T,this.strokeProjectionMagnitude),n=this.scaleUnitVector(Wh(this.createSideVector(this.A,this.T)),-this.strokeProjectionMagnitude),i=this.A.add(n);t.push(i.add(e),i.subtract(e))}return t.map((e=>this.applySkew(e)))}projectPoints(){switch(this.options.strokeLineCap){case"round":return this.projectRound();case"square":return this.projectSquare();default:return this.projectButt()}}project(){return this.projectPoints().map((t=>({originPoint:this.A,projectedPoint:t})))}},H0=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2],n=[];if(s.length===0)return n;let i=s.reduce(((r,o)=>(r[r.length-1].eq(o)||r.push(new st(o)),r)),[new st(s[0])]);if(i.length===1)e=!0;else if(!e){let r=i[0],o=((a,l)=>{for(let c=a.length-1;c>=0;c--)if(l(a[c],c,a))return c;return-1})(i,(a=>!a.eq(r)));i.splice(o+1)}return i.forEach(((r,o,a)=>{let l,c;o===0?(c=a[1],l=e?r:a[a.length-1]):o===a.length-1?(l=a[o-1],c=e?r:a[0]):(l=a[o-1],c=a[o+1]),e&&a.length===1?n.push(...new Ch(r,r,t).project()):!e||o!==0&&o!==a.length-1?n.push(...new Th(r,l,c,t).project()):n.push(...new Ch(r,o===0?c:l,t).project())})),n},kf=s=>{let t={};return Object.keys(s).forEach((e=>{t[e]={},Object.keys(s[e]).forEach((n=>{t[e][n]=X({},s[e][n])}))})),t},W0=s=>s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),Na,jh=s=>{if(Na||Na||(Na="Intl"in Ja()&&"Segmenter"in Intl&&new Intl.Segmenter(void 0,{granularity:"grapheme"})),Na){let t=Na.segment(s);return Array.from(t).map((e=>{let{segment:n}=e;return n}))}return Y1(s)},Y1=s=>{let t=[];for(let e,n=0;n<s.length;n++)(e=q1(s,n))!==!1&&t.push(e);return t},q1=(s,t)=>{let e=s.charCodeAt(t);if(isNaN(e))return"";if(e<55296||e>57343)return s.charAt(t);if(55296<=e&&e<=56319){if(s.length<=t+1)throw"High surrogate without following low surrogate";let i=s.charCodeAt(t+1);if(56320>i||i>57343)throw"High surrogate without following low surrogate";return s.charAt(t)+s.charAt(t+1)}if(t===0)throw"Low surrogate without preceding high surrogate";let n=s.charCodeAt(t-1);if(55296>n||n>56319)throw"Low surrogate without preceding high surrogate";return!1},Z1=Object.freeze({__proto__:null,capitalize:function(s){let t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];return"".concat(s.charAt(0).toUpperCase()).concat(t?s.slice(1):s.slice(1).toLowerCase())},escapeXml:W0,graphemeSplit:jh}),Yh=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return s.fill!==t.fill||s.stroke!==t.stroke||s.strokeWidth!==t.strokeWidth||s.fontSize!==t.fontSize||s.fontFamily!==t.fontFamily||s.fontWeight!==t.fontWeight||s.fontStyle!==t.fontStyle||s.textDecorationThickness!==t.textDecorationThickness||s.textBackgroundColor!==t.textBackgroundColor||s.deltaY!==t.deltaY||e&&(s.overline!==t.overline||s.underline!==t.underline||s.linethrough!==t.linethrough)},X0=(s,t)=>{let e=t.split(`
`),n=[],i=-1,r={};s=kf(s);for(let o=0;o<e.length;o++){let a=jh(e[o]);if(s[o])for(let l=0;l<a.length;l++){i++;let c=s[o][l];c&&Object.keys(c).length>0&&(Yh(r,c,!0)?n.push({start:i,end:i+1,style:c}):n[n.length-1].end++),r=c||{}}else i+=a.length,r={}}return n},j0=(s,t)=>{if(!Array.isArray(s))return kf(s);let e=t.split(Mf),n={},i=-1,r=0;for(let o=0;o<e.length;o++){let a=jh(e[o]);for(let l=0;l<a.length;l++)i++,s[r]&&s[r].start<=i&&i<s[r].end&&(n[o]=n[o]||{},n[o][l]=X({},s[r].style),i===s[r].end-1&&r++)}return n},ks=["display","transform",He,"fill-opacity","fill-rule","opacity",En,"stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"];function Og(s,t){let e=s.nodeName,n=s.getAttribute("class"),i=s.getAttribute("id"),r="(?![a-zA-Z\\-]+)",o;if(o=new RegExp("^"+e,"i"),t=t.replace(o,""),i&&t.length&&(o=new RegExp("#"+i+r,"i"),t=t.replace(o,"")),n&&t.length){let a=n.split(" ");for(let l=a.length;l--;)o=new RegExp("\\."+a[l]+r,"i"),t=t.replace(o,"")}return t.length===0}function J1(s,t){let e=!0,n=Og(s,t.pop());return n&&t.length&&(e=(function(i,r){let o,a=!0;for(;i.parentElement&&i.parentElement.nodeType===1&&r.length;)a&&(o=r.pop()),a=Og(i=i.parentElement,o);return r.length===0})(s,t)),n&&e&&t.length===0}var K1=s=>{var t;return(t=D1[s])!==null&&t!==void 0?t:s},$1=new RegExp("(".concat(fi,")"),"gi"),Q1=s=>_h(s.replace($1," $1 ").replace(/,/gi," ")),Lg,Fg,Ng,Ug,Bg,kg,zg,_n="(".concat(fi,")"),tM=String.raw(Lg||(Lg=ki(["(skewX)(",")"],["(skewX)\\(","\\)"])),_n),eM=String.raw(Fg||(Fg=ki(["(skewY)(",")"],["(skewY)\\(","\\)"])),_n),nM=String.raw(Ng||(Ng=ki(["(rotate)(","(?: "," ",")?)"],["(rotate)\\(","(?: "," ",")?\\)"])),_n,_n,_n),iM=String.raw(Ug||(Ug=ki(["(scale)(","(?: ",")?)"],["(scale)\\(","(?: ",")?\\)"])),_n,_n),sM=String.raw(Bg||(Bg=ki(["(translate)(","(?: ",")?)"],["(translate)\\(","(?: ",")?\\)"])),_n,_n),rM=String.raw(kg||(kg=ki(["(matrix)("," "," "," "," "," ",")"],["(matrix)\\("," "," "," "," "," ","\\)"])),_n,_n,_n,_n,_n,_n),zf="(?:".concat(rM,"|").concat(sM,"|").concat(nM,"|").concat(iM,"|").concat(tM,"|").concat(eM,")"),oM="(?:".concat(zf,"*)"),aM=String.raw(zg||(zg=ki(["^s*(?:","?)s*$"],["^\\s*(?:","?)\\s*$"])),oM),lM=new RegExp(aM),cM=new RegExp(zf),hM=new RegExp(zf,"g");function of(s){let t=[];if(!(s=Q1(s).replace(/\s*([()])\s*/gi,"$1"))||s&&!lM.test(s))return[...xn];for(let e of s.matchAll(hM)){let n=cM.exec(e[0]);if(!n)continue;let i=xn,r=n.filter((p=>!!p)),[,o,...a]=r,[l,c,h,u,d,f]=a.map((p=>parseFloat(p)));switch(o){case"translate":i=Go(l,c);break;case wf:i=Nr({angle:l},{x:c,y:h});break;case Bh:i=zh(l,c);break;case zo:i=Af(l);break;case Vo:i=Rf(l);break;case"matrix":i=[l,c,h,u,d,f]}t.push(i)}return kh(t)}function uM(s,t,e,n){let i=Array.isArray(t),r,o=t;if(s!==He&&s!==En||t!==Cn){if(s==="strokeUniform")return t==="non-scaling-stroke";if(s==="strokeDashArray")o=t===Cn?null:t.replace(/,/g," ").split(/\s+/).map(parseFloat);else if(s==="transformMatrix")o=e&&e.transformMatrix?Pe(e.transformMatrix,of(t)):of(t);else if(s==="visible")o=t!==Cn&&t!=="hidden",e&&e.visible===!1&&(o=!1);else if(s==="opacity")o=parseFloat(t),e&&e.opacity!==void 0&&(o*=e.opacity);else if(s==="textAnchor")o=t==="start"?pe:t==="end"?Le:Zt;else if(s==="charSpacing"||s===Or)r=Ar(t,n)/n*1e3;else if(s==="paintFirst"){let a=t.indexOf(He),l=t.indexOf(En);o=He,(a>-1&&l>-1&&l<a||a===-1&&l>-1)&&(o=En)}else{if(s==="href"||s==="xlink:href"||s==="font"||s==="id")return t;if(s==="imageSmoothing")return t==="optimizeQuality";r=i?t.map(Ar):Ar(t,n)}}else o="";return!i&&isNaN(r)?o:r}function dM(s,t){let e=s.match(P1);if(!e)return;let n=e[1],i=e[3],r=e[4],o=e[5],a=e[6];n&&(t.fontStyle=n),i&&(t.fontWeight=isNaN(parseFloat(i))?i:parseFloat(i)),r&&(t.fontSize=Ar(r)),a&&(t.fontFamily=a),o&&(t.lineHeight=o==="normal"?1:o)}function fM(s,t){s.replace(/;\s*$/,"").split(";").forEach((e=>{if(!e)return;let[n,i]=e.split(":");t[n.trim().toLowerCase()]=i.trim()}))}function pM(s){let t={},e=s.getAttribute("style");return e&&(typeof e=="string"?fM(e,t):(function(n,i){Object.entries(n).forEach((r=>{let[o,a]=r;a!==void 0&&(i[o.toLowerCase()]=a)}))})(e,t)),t}var mM={stroke:"strokeOpacity",fill:"fillOpacity"};function as(s,t,e){if(!s)return{};let n,i={},r=bf;s.parentNode&&Ag.test(s.parentNode.nodeName)&&(i=as(s.parentElement,t,e),i.fontSize&&(n=r=Ar(i.fontSize)));let o=X(X(X({},t.reduce(((c,h)=>{let u=s.getAttribute(h);return u&&(c[h]=u),c}),{})),(function(c){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u={};for(let d in h)J1(c,d.split(" "))&&(u=X(X({},u),h[d]));return u})(s,e)),pM(s));o[Fd]&&s.setAttribute(Fd,o[Fd]),o[Ld]&&(n=Ar(o[Ld],r),o[Ld]="".concat(n));let a={};for(let c in o){let h=K1(c),u=uM(h,o[c],i,n);a[h]=u}a&&a.font&&dM(a.font,a);let l=X(X({},i),a);return Ag.test(s.nodeName)?l:(function(c){let h=Je.getDefaults();return Object.entries(mM).forEach((u=>{let[d,f]=u;if(c[f]===void 0||c[d]==="")return;if(c[d]===void 0){if(!h[d])return;c[d]=h[d]}if(c[d].indexOf("url(")===0)return;let p=new yn(c[d]);c[d]=p.setAlpha(ye(p.getAlpha()*c[f],2)).toRgba()})),c})(l)}var gM=["left","top","width","height","visible"],Y0=["rx","ry"],Bn=class s extends Je{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t),this._initRxRy()}_initRxRy(){let{rx:t,ry:e}=this;t&&!e?this.ry=t:e&&!t&&(this.rx=e)}_render(t){let{width:e,height:n}=this,i=-e/2,r=-n/2,o=this.rx?Math.min(this.rx,e/2):0,a=this.ry?Math.min(this.ry,n/2):0,l=o!==0||a!==0;t.beginPath(),t.moveTo(i+o,r),t.lineTo(i+e-o,r),l&&t.bezierCurveTo(i+e-Ds*o,r,i+e,r+Ds*a,i+e,r+a),t.lineTo(i+e,r+n-a),l&&t.bezierCurveTo(i+e,r+n-Ds*a,i+e-Ds*o,r+n,i+e-o,r+n),t.lineTo(i+o,r+n),l&&t.bezierCurveTo(i+Ds*o,r+n,i,r+n-Ds*a,i,r+n-a),t.lineTo(i,r+a),l&&t.bezierCurveTo(i,r+Ds*a,i+Ds*o,r,i+o,r),t.closePath(),this._renderPaintInOrder(t)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...Y0,...t])}_toSVG(){let{width:t,height:e,rx:n,ry:i}=this;return["<rect ","COMMON_PARTS",'x="'.concat(-t/2,'" y="').concat(-e/2,'" rx="').concat(n,'" ry="').concat(i,'" width="').concat(t,'" height="').concat(e,`" />
`)]}static async fromElement(t,e,n){let i=as(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,width:a=0,height:l=0,visible:c=!0}=i,h=Me(i,gM);return new this(X(X(X({},e),h),{},{left:r,top:o,width:a,height:l,visible:!!(c&&a&&l)}))}};j(Bn,"type","Rect"),j(Bn,"cacheProperties",[...os,...Y0]),j(Bn,"ownDefaults",{rx:0,ry:0}),j(Bn,"ATTRIBUTE_NAMES",[...ks,"x","y","rx","ry","width","height"]),Et.setClass(Bn),Et.setSVGClass(Bn);var ns="initialization",Eh="added",Vf="removed",Ah="imperative",q0=(s,t)=>{let{strokeUniform:e,strokeWidth:n,width:i,height:r,group:o}=t,a=o&&o!==s?Qa(o.calcTransformMatrix(),s.calcTransformMatrix()):null,l=a?t.getRelativeCenterPoint().transform(a):t.getRelativeCenterPoint(),c=!t.isStrokeAccountedForInDimensions(),h=e&&c?f0(new st(n,n),void 0,s.calcTransformMatrix()):Tf,u=!e&&c?n:0,d=Vh(i+u,r+u,kh([a,t.calcOwnMatrix()],!0)).add(h).scalarDivide(2);return[l.subtract(d),l.add(d)]},Uo=class{calcLayoutResult(t,e){if(this.shouldPerformLayout(t))return this.calcBoundingBox(e,t)}shouldPerformLayout(t){let{type:e,prevStrategy:n,strategy:i}=t;return e===ns||e===Ah||!!n&&i!==n}shouldLayoutClipPath(t){let{type:e,target:{clipPath:n}}=t;return e!==ns&&n&&!n.absolutePositioned}getInitialSize(t,e){return e.size}calcBoundingBox(t,e){let{type:n,target:i}=e;if(n===Ah&&e.overrides)return e.overrides;if(t.length===0)return;let{left:r,top:o,width:a,height:l}=Fi(t.map((u=>q0(i,u))).reduce(((u,d)=>u.concat(d)),[])),c=new st(a,l),h=new st(r,o).add(c.scalarDivide(2));if(n===ns){let u=this.getInitialSize(e,{size:c,center:h});return{center:h,relativeCorrection:new st(0,0),size:u}}return{center:h.transform(i.calcOwnMatrix()),size:c}}};j(Uo,"type","strategy");var qa=class extends Uo{shouldPerformLayout(t){return!0}};j(qa,"type","fit-content"),Et.setClass(qa);var _M=["strategy"],xM=["target","strategy","bubbles","prevStrategy"],Z0="layoutManager",Fr=class{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new qa;j(this,"strategy",void 0),this.strategy=t,this._subscriptions=new Map}performLayout(t){let e=X(X({bubbles:!0,strategy:this.strategy},t),{},{prevStrategy:this._prevLayoutStrategy,stopPropagation(){this.bubbles=!1}});this.onBeforeLayout(e);let n=this.getLayoutResult(e);n&&this.commitLayout(e,n),this.onAfterLayout(e,n),this._prevLayoutStrategy=e.strategy}attachHandlers(t,e){let{target:n}=e;return[uh,Jg,Xa,Kg,Uh,$g,hh,Qg,S1].map((i=>t.on(i,(r=>this.performLayout(i===uh?{type:"object_modified",trigger:i,e:r,target:n}:{type:"object_modifying",trigger:i,e:r,target:n})))))}subscribe(t,e){this.unsubscribe(t,e);let n=this.attachHandlers(t,e);this._subscriptions.set(t,n)}unsubscribe(t,e){(this._subscriptions.get(t)||[]).forEach((n=>n())),this._subscriptions.delete(t)}unsubscribeTargets(t){t.targets.forEach((e=>this.unsubscribe(e,t)))}subscribeTargets(t){t.targets.forEach((e=>this.subscribe(e,t)))}onBeforeLayout(t){let{target:e,type:n}=t,{canvas:i}=e;if(n===ns||n===Eh?this.subscribeTargets(t):n===Vf&&this.unsubscribeTargets(t),e.fire("layout:before",{context:t}),i&&i.fire("object:layout:before",{target:e,context:t}),n===Ah&&t.deep){let r=Me(t,_M);e.forEachObject((o=>o.layoutManager&&o.layoutManager.performLayout(X(X({},r),{},{bubbles:!1,target:o}))))}}getLayoutResult(t){let{target:e,strategy:n,type:i}=t,r=n.calcLayoutResult(t,e.getObjects());if(!r)return;let o=i===ns?new st:e.getRelativeCenterPoint(),{center:a,correction:l=new st,relativeCorrection:c=new st}=r,h=o.subtract(a).add(l).transform(i===ns?xn:kn(e.calcOwnMatrix()),!0).add(c);return{result:r,prevCenter:o,nextCenter:a,offset:h}}commitLayout(t,e){let{target:n}=t,{result:{size:i},nextCenter:r}=e;var o,a;n.set({width:i.x,height:i.y}),this.layoutObjects(t,e),t.type===ns?n.set({left:(o=t.x)!==null&&o!==void 0?o:r.x+i.x*ke(n.originX),top:(a=t.y)!==null&&a!==void 0?a:r.y+i.y*ke(n.originY)}):(n.setPositionByOrigin(r,Zt,Zt),n.setCoords(),n.set("dirty",!0))}layoutObjects(t,e){let{target:n}=t;n.forEachObject((i=>{i.group===n&&this.layoutObject(t,e,i)})),t.strategy.shouldLayoutClipPath(t)&&this.layoutObject(t,e,n.clipPath)}layoutObject(t,e,n){let{offset:i}=e;n.set({left:n.left+i.x,top:n.top+i.y})}onAfterLayout(t,e){let{target:n,strategy:i,bubbles:r,prevStrategy:o}=t,a=Me(t,xM),{canvas:l}=n;n.fire("layout:after",{context:t,result:e}),l&&l.fire("object:layout:after",{context:t,result:e,target:n});let c=n.parent;r&&c!=null&&c.layoutManager&&((a.path||(a.path=[])).push(n),c.layoutManager.performLayout(X(X({},a),{},{target:c}))),n.set("dirty",!0)}dispose(){let{_subscriptions:t}=this;t.forEach((e=>e.forEach((n=>n())))),t.clear()}toObject(){return{type:Z0,strategy:this.strategy.constructor.type}}toJSON(){return this.toObject()}};Et.setClass(Fr,Z0);var vM=["type","objects","layoutManager"],af=class extends Fr{performLayout(){}},Ls=class s extends t0(Je){static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),j(this,"_activeObjects",[]),j(this,"__objectSelectionTracker",void 0),j(this,"__objectSelectionDisposer",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.groupInit(t,e)}groupInit(t,e){var n;this._objects=[...t],this.__objectSelectionTracker=this.__objectSelectionMonitor.bind(this,!0),this.__objectSelectionDisposer=this.__objectSelectionMonitor.bind(this,!1),this.forEachObject((i=>{this.enterGroup(i,!1)})),this.layoutManager=(n=e.layoutManager)!==null&&n!==void 0?n:new Fr,this.layoutManager.performLayout({type:ns,target:this,targets:[...t],x:e.left,y:e.top})}canEnterGroup(t){return t===this||this.isDescendantOf(t)?(Fs("error","Group: circular object trees are not supported, this call has no effect"),!1):this._objects.indexOf(t)===-1||(Fs("error","Group: duplicate objects are not supported inside group, this call has no effect"),!1)}_filterObjectsBeforeEnteringGroup(t){return t.filter(((e,n,i)=>this.canEnterGroup(e)&&i.indexOf(e)===n))}add(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];let i=this._filterObjectsBeforeEnteringGroup(e),r=super.add(...i);return this._onAfterObjectsChange(Eh,i),r}insertAt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];let r=this._filterObjectsBeforeEnteringGroup(n),o=super.insertAt(t,...r);return this._onAfterObjectsChange(Eh,r),o}remove(){let t=super.remove(...arguments);return this._onAfterObjectsChange(Vf,t),t}_onObjectAdded(t){this.enterGroup(t,!0),this.fire("object:added",{target:t}),t.fire("added",{target:this})}_onObjectRemoved(t,e){this.exitGroup(t,e),this.fire("object:removed",{target:t}),t.fire("removed",{target:this})}_onAfterObjectsChange(t,e){this.layoutManager.performLayout({type:t,targets:e,target:this})}_onStackOrderChanged(){this._set("dirty",!0)}_set(t,e){let n=this[t];return super._set(t,e),t==="canvas"&&n!==e&&(this._objects||[]).forEach((i=>{i._set(t,e)})),this}_shouldSetNestedCoords(){return this.subTargetCheck}removeAll(){return this._activeObjects=[],this.remove(...this._objects)}__objectSelectionMonitor(t,e){let{target:n}=e,i=this._activeObjects;if(t)i.push(n),this._set("dirty",!0);else if(i.length>0){let r=i.indexOf(n);r>-1&&(i.splice(r,1),this._set("dirty",!0))}}_watchObject(t,e){t&&this._watchObject(!1,e),t?(e.on("selected",this.__objectSelectionTracker),e.on("deselected",this.__objectSelectionDisposer)):(e.off("selected",this.__objectSelectionTracker),e.off("deselected",this.__objectSelectionDisposer))}enterGroup(t,e){t.group&&t.group.remove(t),t._set("parent",this),this._enterGroup(t,e)}_enterGroup(t,e){e&&No(t,Pe(kn(this.calcTransformMatrix()),t.calcTransformMatrix())),this._shouldSetNestedCoords()&&t.setCoords(),t._set("group",this),t._set("canvas",this.canvas),this._watchObject(!0,t);let n=this.canvas&&this.canvas.getActiveObject&&this.canvas.getActiveObject();n&&(n===t||t.isDescendantOf(n))&&this._activeObjects.push(t)}exitGroup(t,e){this._exitGroup(t,e),t._set("parent",void 0),t._set("canvas",void 0)}_exitGroup(t,e){t._set("group",void 0),e||(No(t,Pe(this.calcTransformMatrix(),t.calcTransformMatrix())),t.setCoords()),this._watchObject(!1,t);let n=this._activeObjects.length>0?this._activeObjects.indexOf(t):-1;n>-1&&this._activeObjects.splice(n,1)}shouldCache(){let t=Je.prototype.shouldCache.call(this);if(t){for(let e=0;e<this._objects.length;e++)if(this._objects[e].willDrawShadow())return this.ownCaching=!1,!1}return t}willDrawShadow(){if(super.willDrawShadow())return!0;for(let t=0;t<this._objects.length;t++)if(this._objects[t].willDrawShadow())return!0;return!1}isOnACache(){return this.ownCaching||!!this.parent&&this.parent.isOnACache()}drawObject(t,e,n){this._renderBackground(t);for(let r=0;r<this._objects.length;r++){var i;let o=this._objects[r];(i=this.canvas)!==null&&i!==void 0&&i.preserveObjectStacking&&o.group!==this?(t.save(),t.transform(...kn(this.calcTransformMatrix())),o.render(t),t.restore()):o.group===this&&o.render(t)}this._drawClipPath(t,this.clipPath,n)}setCoords(){super.setCoords(),this._shouldSetNestedCoords()&&this.forEachObject((t=>t.setCoords()))}triggerLayout(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.layoutManager.performLayout(X({target:this,type:Ah},t))}render(t){this._transformDone=!0,super.render(t),this._transformDone=!1}__serializeObjects(t,e){let n=this.includeDefaultValues;return this._objects.filter((function(i){return!i.excludeFromExport})).map((function(i){let r=i.includeDefaultValues;i.includeDefaultValues=n;let o=i[t||"toObject"](e);return i.includeDefaultValues=r,o}))}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.layoutManager.toObject();return X(X(X({},super.toObject(["subTargetCheck","interactive",...t])),e.strategy!=="fit-content"||this.includeDefaultValues?{layoutManager:e}:{}),{},{objects:this.__serializeObjects("toObject",t)})}toString(){return"#<Group: (".concat(this.complexity(),")>")}dispose(){this.layoutManager.unsubscribeTargets({targets:this.getObjects(),target:this}),this._activeObjects=[],this.forEachObject((t=>{this._watchObject(!1,t),t.dispose()})),super.dispose()}_createSVGBgRect(t){if(!this.backgroundColor)return"";let e=Bn.prototype._toSVG.call(this),n=e.indexOf("COMMON_PARTS");e[n]='for="group" ';let i=e.join("");return t?t(i):i}_toSVG(t){let e=["<g ","COMMON_PARTS",` >
`],n=this._createSVGBgRect(t);n&&e.push("		",n);for(let i=0;i<this._objects.length;i++)e.push("		",this._objects[i].toSVG(t));return e.push(`</g>
`),e}getSvgStyles(){let t=this.opacity!==void 0&&this.opacity!==1?"opacity: ".concat(this.opacity,";"):"",e=this.visible?"":" visibility: hidden;";return[t,this.getSvgFilter(),e].join("")}toClipPathSVG(t){let e=[],n=this._createSVGBgRect(t);n&&e.push("	",n);for(let i=0;i<this._objects.length;i++)e.push("	",this._objects[i].toClipPathSVG(t));return this._createBaseClipPathSVGMarkup(e,{reviver:t})}static fromObject(t,e){let{type:n,objects:i=[],layoutManager:r}=t,o=Me(t,vM);return Promise.all([Lo(i,e),$a(o,e)]).then((a=>{let[l,c]=a,h=new this(l,X(X(X({},o),c),{},{layoutManager:new af}));if(r){let u=Et.getClass(r.type),d=Et.getClass(r.strategy);h.layoutManager=new u(new d)}else h.layoutManager=new Fr;return h.layoutManager.subscribeTargets({type:ns,target:h,targets:h.getObjects()}),h.setCoords(),h}))}};j(Ls,"type","Group"),j(Ls,"ownDefaults",{strokeWidth:0,subTargetCheck:!1,interactive:!1}),Et.setClass(Ls);var J0=(s,t)=>Math.min(t.width/s.width,t.height/s.height),K0=(s,t)=>Math.max(t.width/s.width,t.height/s.height),lf="\\s*,?\\s*",Ua="".concat(lf,"(").concat(fi,")"),yM="".concat(Ua).concat(Ua).concat(Ua).concat(lf,"([01])").concat(lf,"([01])").concat(Ua).concat(Ua),SM={m:"l",M:"L"},bM=(s,t,e,n,i,r,o,a,l,c,h)=>{let u=gi(s),d=_i(s),f=gi(t),p=_i(t),x=e*i*f-n*r*p+o,m=n*i*f+e*r*p+a;return["C",c+l*(-e*i*d-n*r*u),h+l*(-n*i*d+e*r*u),x+l*(e*i*p+n*r*f),m+l*(n*i*p-e*r*f),x,m]},Vg=(s,t,e,n)=>{let i=Math.atan2(t,s),r=Math.atan2(n,e);return r>=i?r-i:2*Math.PI-(i-r)};function cf(s,t,e,n,i,r,o,a){let l;if(he.cachesBoundsOfCurve&&(l=[...arguments].join(),za.boundsOfCurveCache[l]))return za.boundsOfCurveCache[l];let c=Math.sqrt,h=Math.abs,u=[],d=[[0,0],[0,0]],f=6*s-12*e+6*i,p=-3*s+9*e-9*i+3*o,x=3*e-3*s;for(let T=0;T<2;++T){if(T>0&&(f=6*t-12*n+6*r,p=-3*t+9*n-9*r+3*a,x=3*n-3*t),h(p)<1e-12){if(h(f)<1e-12)continue;let C=-x/f;0<C&&C<1&&u.push(C);continue}let A=f*f-4*x*p;if(A<0)continue;let D=c(A),_=(-f+D)/(2*p);0<_&&_<1&&u.push(_);let y=(-f-D)/(2*p);0<y&&y<1&&u.push(y)}let m=u.length,g=m,S=Q0(s,t,e,n,i,r,o,a);for(;m--;){let{x:T,y:A}=S(u[m]);d[0][m]=T,d[1][m]=A}d[0][g]=s,d[1][g]=t,d[0][g+1]=o,d[1][g+1]=a;let P=[new st(Math.min(...d[0]),Math.min(...d[1])),new st(Math.max(...d[0]),Math.max(...d[1]))];return he.cachesBoundsOfCurve&&(za.boundsOfCurveCache[l]=P),P}var MM=(s,t,e)=>{let[n,i,r,o,a,l,c,h]=e,u=((d,f,p,x,m,g,S)=>{if(p===0||x===0)return[];let P=0,T=0,A=0,D=Math.PI,_=S*Sf,y=_i(_),C=gi(_),E=.5*(-C*d-y*f),R=.5*(-C*f+y*d),L=p**2,G=x**2,O=R**2,Z=E**2,$=L*G-L*O-G*Z,z=Math.abs(p),F=Math.abs(x);if($<0){let ee=Math.sqrt(1-$/(L*G));z*=ee,F*=ee}else A=(m===g?-1:1)*Math.sqrt($/(L*O+G*Z));let B=A*z*R/F,J=-A*F*E/z,nt=C*B-y*J+.5*d,mt=y*B+C*J+.5*f,St=Vg(1,0,(E-B)/z,(R-J)/F),ot=Vg((E-B)/z,(R-J)/F,(-E-B)/z,(-R-J)/F);g===0&&ot>0?ot-=2*D:g===1&&ot<0&&(ot+=2*D);let _t=Math.ceil(Math.abs(ot/D*2)),vt=[],Pt=ot/_t,ht=8/3*Math.sin(Pt/4)*Math.sin(Pt/4)/Math.sin(Pt/2),Bt=St+Pt;for(let ee=0;ee<_t;ee++)vt[ee]=bM(St,Bt,C,y,z,F,nt,mt,ht,P,T),P=vt[ee][5],T=vt[ee][6],St=Bt,Bt+=Pt;return vt})(c-s,h-t,i,r,a,l,o);for(let d=0,f=u.length;d<f;d++)u[d][1]+=s,u[d][2]+=t,u[d][3]+=s,u[d][4]+=t,u[d][5]+=s,u[d][6]+=t;return u},$0=s=>{let t=0,e=0,n=0,i=0,r=[],o,a=0,l=0;for(let c of s){let h=[...c],u;switch(h[0]){case"l":h[1]+=t,h[2]+=e;case"L":t=h[1],e=h[2],u=["L",t,e];break;case"h":h[1]+=t;case"H":t=h[1],u=["L",t,e];break;case"v":h[1]+=e;case"V":e=h[1],u=["L",t,e];break;case"m":h[1]+=t,h[2]+=e;case"M":t=h[1],e=h[2],n=h[1],i=h[2],u=["M",t,e];break;case"c":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e,h[5]+=t,h[6]+=e;case"C":a=h[3],l=h[4],t=h[5],e=h[6],u=["C",h[1],h[2],a,l,t,e];break;case"s":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"S":o==="C"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[3],e=h[4],u=["C",a,l,h[1],h[2],t,e],a=u[3],l=u[4];break;case"q":h[1]+=t,h[2]+=e,h[3]+=t,h[4]+=e;case"Q":a=h[1],l=h[2],t=h[3],e=h[4],u=["Q",a,l,t,e];break;case"t":h[1]+=t,h[2]+=e;case"T":o==="Q"?(a=2*t-a,l=2*e-l):(a=t,l=e),t=h[1],e=h[2],u=["Q",a,l,t,e];break;case"a":h[6]+=t,h[7]+=e;case"A":MM(t,e,h).forEach((d=>r.push(d))),t=h[6],e=h[7];break;case"z":case"Z":t=n,e=i,u=["Z"]}u?(r.push(u),o=u[0]):o=""}return r},Rh=(s,t,e,n)=>Math.sqrt((e-s)**2+(n-t)**2),Q0=(s,t,e,n,i,r,o,a)=>l=>{let c=l**3,h=(f=>3*f**2*(1-f))(l),u=(f=>3*f*(1-f)**2)(l),d=(f=>(1-f)**3)(l);return new st(o*c+i*h+e*u+s*d,a*c+r*h+n*u+t*d)},t_=s=>s**2,e_=s=>2*s*(1-s),n_=s=>(1-s)**2,wM=(s,t,e,n,i,r,o,a)=>l=>{let c=t_(l),h=e_(l),u=n_(l),d=3*(u*(e-s)+h*(i-e)+c*(o-i)),f=3*(u*(n-t)+h*(r-n)+c*(a-r));return Math.atan2(f,d)},TM=(s,t,e,n,i,r)=>o=>{let a=t_(o),l=e_(o),c=n_(o);return new st(i*a+e*l+s*c,r*a+n*l+t*c)},CM=(s,t,e,n,i,r)=>o=>{let a=1-o,l=2*(a*(e-s)+o*(i-e)),c=2*(a*(n-t)+o*(r-n));return Math.atan2(c,l)},Gg=(s,t,e)=>{let n=new st(t,e),i=0;for(let r=1;r<=100;r+=1){let o=s(r/100);i+=Rh(n.x,n.y,o.x,o.y),n=o}return i},EM=(s,t)=>{let e,n=0,i=0,r={x:s.x,y:s.y},o=X({},r),a=.01,l=0,c=s.iterator,h=s.angleFinder;for(;i<t&&a>1e-4;)o=c(n),l=n,e=Rh(r.x,r.y,o.x,o.y),e+i>t?(n-=a,a/=2):(r=o,n+=a,i+=e);return X(X({},o),{},{angle:h(l)})},Gf=s=>{let t,e,n=0,i=0,r=0,o=0,a=0,l=[];for(let c of s){let h={x:i,y:r,command:c[0],length:0};switch(c[0]){case"M":e=h,e.x=o=i=c[1],e.y=a=r=c[2];break;case"L":e=h,e.length=Rh(i,r,c[1],c[2]),i=c[1],r=c[2];break;case"C":t=Q0(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e=h,e.iterator=t,e.angleFinder=wM(i,r,c[1],c[2],c[3],c[4],c[5],c[6]),e.length=Gg(t,i,r),i=c[5],r=c[6];break;case"Q":t=TM(i,r,c[1],c[2],c[3],c[4]),e=h,e.iterator=t,e.angleFinder=CM(i,r,c[1],c[2],c[3],c[4]),e.length=Gg(t,i,r),i=c[3],r=c[4];break;case"Z":e=h,e.destX=o,e.destY=a,e.length=Rh(i,r,o,a),i=o,r=a}n+=e.length,l.push(e)}return l.push({length:n,x:i,y:r}),l},i_=function(s,t){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Gf(s),n=0;for(;t-e[n].length>0&&n<e.length-2;)t-=e[n].length,n++;let i=e[n],r=t/i.length,o=s[n];switch(i.command){case"M":return{x:i.x,y:i.y,angle:0};case"Z":return X(X({},new st(i.x,i.y).lerp(new st(i.destX,i.destY),r)),{},{angle:Math.atan2(i.destY-i.y,i.destX-i.x)});case"L":return X(X({},new st(i.x,i.y).lerp(new st(o[1],o[2]),r)),{},{angle:Math.atan2(o[2]-i.y,o[1]-i.x)});case"C":case"Q":return EM(i,t)}},AM=new RegExp("[mzlhvcsqta][^mzlhvcsqta]*","gi"),Hg=new RegExp(yM,"g"),RM=new RegExp(fi,"gi"),PM={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7},s_=s=>{var t;let e=[],n=(t=s.match(AM))!==null&&t!==void 0?t:[];for(let i of n){let r=i[0];if(r==="z"||r==="Z"){e.push([r]);continue}let o=PM[r.toLowerCase()],a=[];if(r==="a"||r==="A"){Hg.lastIndex=0;for(let l=null;l=Hg.exec(i);)a.push(...l.slice(1))}else a=i.match(RM)||[];for(let l=0;l<a.length;l+=o){let c=new Array(o),h=SM[r];c[0]=l>0&&h?h:r;for(let u=0;u<o;u++)c[u+1]=parseFloat(a[l+u]);e.push(c)}}return e},DM=function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e=new st(s[0]),n=new st(s[1]),i=1,r=0,o=[],a=s.length,l=a>2,c;for(l&&(i=s[2].x<n.x?-1:s[2].x===n.x?0:1,r=s[2].y<n.y?-1:s[2].y===n.y?0:1),o.push(["M",e.x-i*t,e.y-r*t]),c=1;c<a;c++){if(!e.eq(n)){let h=e.midPointFrom(n);o.push(["Q",e.x,e.y,h.x,h.y])}e=s[c],c+1<s.length&&(n=s[c+1])}return l&&(i=e.x>s[c-2].x?1:e.x===s[c-2].x?0:-1,r=e.y>s[c-2].y?1:e.y===s[c-2].y?0:-1),o.push(["L",e.x+i*t,e.y+r*t]),o},r_=(s,t)=>s.map((e=>e.map(((n,i)=>i===0||t===void 0?n:ye(n,t))).join(" "))).join(" ");function Ph(s,t){let e=s.style;e&&t&&(typeof t=="string"?e.cssText+=";"+t:Object.entries(t).forEach((n=>{let[i,r]=n;return e.setProperty(i,r)})))}var IM=(s,t)=>Math.floor(Math.random()*(t-s+1))+s;function OM(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=t.onComplete||Er,n=new(Ja()).XMLHttpRequest,i=t.signal,r=function(){n.abort()},o=function(){i&&i.removeEventListener("abort",r),n.onerror=n.ontimeout=Er};if(i&&i.aborted)throw new ch("request");return i&&i.addEventListener("abort",r,{once:!0}),n.onreadystatechange=function(){n.readyState===4&&(o(),e(n),n.onreadystatechange=Er)},n.onerror=n.ontimeout=o,n.open("get",s,!0),n.send(),n}var LM=(s,t)=>{let e=s._findCenterFromElement();s.transformMatrix&&((n=>{if(n.transformMatrix){let{scaleX:i,scaleY:r,angle:o,skewX:a}=Oo(n.transformMatrix);n.flipX=!1,n.flipY=!1,n.set(vn,i),n.set(zn,r),n.angle=o,n.skewX=a,n.skewY=0}})(s),e=e.transform(s.transformMatrix)),delete s.transformMatrix,t&&(s.scaleX*=t.scaleX,s.scaleY*=t.scaleY,s.cropX=t.cropX,s.cropY=t.cropY,e.x+=t.offsetLeft,e.y+=t.offsetTop,s.width=t.width,s.height=t.height),s.setPositionByOrigin(e,Zt,Zt)},FA=Object.freeze({__proto__:null,addTransformToObject:u0,animate:Nf,animateColor:C0,applyTransformToObject:No,calcAngleBetweenVectors:bh,calcDimensionsMatrix:Ka,calcPlaneChangeMatrix:Qa,calcVectorRotation:M0,cancelAnimFrame:e0,capValue:Lr,composeMatrix:o0,copyCanvasElement:s=>{var t;let e=Vn(s);return(t=e.getContext("2d"))===null||t===void 0||t.drawImage(s,0,0),e},cos:gi,createCanvasElement:Ui,createImage:n0,createRotateMatrix:Nr,createScaleMatrix:zh,createSkewXMatrix:Af,createSkewYMatrix:Rf,createTranslateMatrix:Go,createVector:yh,crossProduct:Do,degreesToRadians:Re,dotProduct:w0,ease:F1,enlivenObjectEnlivables:$a,enlivenObjects:Lo,findScaleToCover:K0,findScaleToFit:J0,getBoundsOfCurve:cf,getOrthonormalVector:Ff,getPathSegmentsInfo:Gf,getPointOnPath:i_,getPointer:h0,getRandomInt:IM,getRegularPolygonPath:(s,t)=>{let e=2*Math.PI/s,n=-Ns;s%2==0&&(n+=e/2);let i=new Array(s+1);for(let r=0;r<s;r++){let o=r*e+n,{x:a,y:l}=new st(gi(o),_i(o)).scalarMultiply(t);i[r]=[r===0?"M":"L",a,l]}return i[s]=["Z"],i},getSmoothPathFromPoints:DM,getSvgAttributes:s=>{let t=["instantiated_by_use","style","id","class"];switch(s){case"linearGradient":return t.concat(["x1","y1","x2","y2","gradientUnits","gradientTransform"]);case"radialGradient":return t.concat(["gradientUnits","gradientTransform","cx","cy","r","fx","fy","fr"]);case"stop":return t.concat(["offset","stop-color","stop-opacity"])}return t},getUnitVector:Wh,groupSVGElements:(s,t)=>s&&s.length===1?s[0]:new Ls(s,t),hasStyleChanged:Yh,invertTransform:kn,isBetweenVectors:Jd,isIdentityMatrix:i0,isTouchEvent:mh,isTransparent:G0,joinPath:r_,loadImage:Ga,magnitude:Sh,makeBoundingBoxFromPoints:Fi,makePathSimpler:$0,matrixToSVG:Fo,mergeClipPaths:(s,t)=>{var e;let n=s,i=t;n.inverted&&!i.inverted&&(n=t,i=s),Zd(i,(e=i.group)===null||e===void 0?void 0:e.calcTransformMatrix(),n.calcTransformMatrix());let r=n.inverted&&i.inverted;return r&&(n.inverted=i.inverted=!1),new Ls([n],{clipPath:i,inverted:r})},multiplyTransformMatrices:Pe,multiplyTransformMatrixArray:kh,parsePath:s_,parsePreserveAspectRatioAttribute:_0,parseUnit:Ar,pick:Ur,projectStrokeOnPoints:H0,qrDecompose:Oo,radiansToDegrees:Bi,removeFromArray:lr,removeTransformFromObject:(s,t)=>{let e=kn(t),n=Pe(e,s.calcOwnMatrix());No(s,n)},removeTransformMatrixForSvgParsing:LM,request:OM,requestAnimFrame:Va,resetObjectTransform:d0,rotatePoint:(s,t,e)=>s.rotate(e,t),rotateVector:Lf,saveObjectTransform:Df,sendObjectToPlane:Zd,sendPointToPlane:ss,sendVectorToPlane:f0,setStyle:Ph,sin:_i,sizeAfterTransform:Vh,string:Z1,stylesFromArray:j0,stylesToArray:X0,toBlob:Ef,toDataURL:Cf,toFixed:ye,transformPath:(s,t,e)=>(e&&(t=Pe(t,[1,0,0,1,-e.x,-e.y])),s.map((n=>{let i=[...n];for(let r=1;r<n.length-1;r+=2){let{x:o,y:a}=un({x:n[r],y:n[r+1]},t);i[r]=o,i[r+1]=a}return i}))),transformPoint:un}),hf=class extends ph{constructor(t){let{allowTouchScrolling:e=!1,containerClass:n=""}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(t),j(this,"upper",void 0),j(this,"container",void 0);let{el:i}=this.lower,r=this.createUpperCanvas();this.upper={el:r,ctx:r.getContext("2d")},this.applyCanvasStyle(i,{allowTouchScrolling:e}),this.applyCanvasStyle(r,{allowTouchScrolling:e,styles:{position:"absolute",left:"0",top:"0"}});let o=this.createContainerElement();o.classList.add(n),i.parentNode&&i.parentNode.replaceChild(o,i),o.append(i,r),this.container=o}createUpperCanvas(){let{el:t}=this.lower,e=Ui();return e.className=t.className,e.classList.remove("lower-canvas"),e.classList.add("upper-canvas"),e.setAttribute("data-fabric","top"),e.style.cssText=t.style.cssText,e.setAttribute("draggable","true"),e}createContainerElement(){let t=ko().createElement("div");return t.setAttribute("data-fabric","wrapper"),Ph(t,{position:"relative"}),xg(t),t}applyCanvasStyle(t,e){let{styles:n,allowTouchScrolling:i}=e;Ph(t,X(X({},n),{},{"touch-action":i?"manipulation":Cn})),xg(t)}setDimensions(t,e){super.setDimensions(t,e);let{el:n,ctx:i}=this.upper;c0(n,i,t,e)}setCSSDimensions(t){super.setCSSDimensions(t),qd(this.upper.el,t),qd(this.container,t)}cleanupDOM(t){let e=this.container,{el:n}=this.lower,{el:i}=this.upper;super.cleanupDOM(t),e.removeChild(i),e.removeChild(n),e.parentNode&&e.parentNode.replaceChild(n,e)}dispose(){super.dispose(),Ni().dispose(this.upper.el),delete this.upper,delete this.container}},Dh=class s extends Ir{constructor(){super(...arguments),j(this,"targets",[]),j(this,"_hoveredTargets",[]),j(this,"_currentTransform",null),j(this,"_groupSelector",null),j(this,"contextTopDirty",!1)}static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}get upperCanvasEl(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.el}get contextTop(){var t;return(t=this.elements.upper)===null||t===void 0?void 0:t.ctx}get wrapperEl(){return this.elements.container}initElements(t){this.elements=new hf(t,{allowTouchScrolling:this.allowTouchScrolling,containerClass:this.containerClass}),this._createCacheCanvas()}_onObjectAdded(t){this._objectsToRender=void 0,super._onObjectAdded(t)}_onObjectRemoved(t){this._objectsToRender=void 0,t===this._activeObject&&(this.fire("before:selection:cleared",{deselected:[t]}),this._discardActiveObject(),this.fire("selection:cleared",{deselected:[t]}),t.fire("deselected",{target:t})),t===this._hoveredTarget&&(this._hoveredTarget=void 0,this._hoveredTargets=[]),super._onObjectRemoved(t)}_onStackOrderChanged(){this._objectsToRender=void 0,super._onStackOrderChanged()}_chooseObjectsToRender(){let t=this._activeObject;return!this.preserveObjectStacking&&t?this._objects.filter((e=>!e.group&&e!==t)).concat(t):this._objects}renderAll(){this.cancelRequestedRender(),this.destroyed||(!this.contextTopDirty||this._groupSelector||this.isDrawingMode||(this.clearContext(this.contextTop),this.contextTopDirty=!1),this.hasLostContext&&(this.renderTopLayer(this.contextTop),this.hasLostContext=!1),!this._objectsToRender&&(this._objectsToRender=this._chooseObjectsToRender()),this.renderCanvas(this.getContext(),this._objectsToRender))}renderTopLayer(t){t.save(),this.isDrawingMode&&this._isCurrentlyDrawing&&(this.freeDrawingBrush&&this.freeDrawingBrush._render(),this.contextTopDirty=!0),this.selection&&this._groupSelector&&(this._drawSelection(t),this.contextTopDirty=!0),t.restore()}renderTop(){let t=this.contextTop;this.clearContext(t),this.renderTopLayer(t),this.fire("after:render",{ctx:t})}setTargetFindTolerance(t){t=Math.round(t),this.targetFindTolerance=t;let e=this.getRetinaScaling(),n=Math.ceil((2*t+1)*e);this.pixelFindCanvasEl.width=this.pixelFindCanvasEl.height=n,this.pixelFindContext.scale(e,e)}isTargetTransparent(t,e,n){let i=this.targetFindTolerance,r=this.pixelFindContext;this.clearContext(r),r.save(),r.translate(-e+i,-n+i),r.transform(...this.viewportTransform);let o=t.selectionBackgroundColor;t.selectionBackgroundColor="",t.render(r),t.selectionBackgroundColor=o,r.restore();let a=Math.round(i*this.getRetinaScaling());return G0(r,a,a,a)}_isSelectionKeyPressed(t){let e=this.selectionKey;return!!e&&(Array.isArray(e)?!!e.find((n=>!!n&&t[n]===!0)):t[e])}_shouldClearSelection(t,e){let n=this.getActiveObjects(),i=this._activeObject;return!!(!e||e&&i&&n.length>1&&n.indexOf(e)===-1&&i!==e&&!this._isSelectionKeyPressed(t)||e&&!e.evented||e&&!e.selectable&&i&&i!==e)}_shouldCenterTransform(t,e,n){if(!t)return;let i;return e===Bh||e===vn||e===zn||e===Xa?i=this.centeredScaling||t.centeredScaling:e===wf&&(i=this.centeredRotation||t.centeredRotation),i?!n:n}_getOriginFromCorner(t,e){let n={x:t.originX,y:t.originY};return e&&(["ml","tl","bl"].includes(e)?n.x=Le:["mr","tr","br"].includes(e)&&(n.x=pe),["tl","mt","tr"].includes(e)?n.y=jd:["bl","mb","br"].includes(e)&&(n.y=Tn)),n}_setupCurrentTransform(t,e,n){var i;let r=e.group?ss(this.getScenePoint(t),void 0,e.group.calcTransformMatrix()):this.getScenePoint(t),{key:o="",control:a}=e.getActiveControl()||{},l=n&&a?(i=a.getActionHandler(t,e,a))===null||i===void 0?void 0:i.bind(a):g0,c=((f,p,x,m)=>{if(!p||!f)return"drag";let g=m.controls[p];return g.getActionName(x,g,m)})(n,o,t,e),h=t[this.centeredKey],u=this._shouldCenterTransform(e,c,h)?{x:Zt,y:Zt}:this._getOriginFromCorner(e,o),d={target:e,action:c,actionHandler:l,actionPerformed:!1,corner:o,scaleX:e.scaleX,scaleY:e.scaleY,skewX:e.skewX,skewY:e.skewY,offsetX:r.x-e.left,offsetY:r.y-e.top,originX:u.x,originY:u.y,ex:r.x,ey:r.y,lastX:r.x,lastY:r.y,theta:Re(e.angle),width:e.width,height:e.height,shiftKey:t.shiftKey,altKey:h,original:X(X({},Df(e)),{},{originX:u.x,originY:u.y})};this._currentTransform=d,this.fire("before:transform",{e:t,transform:d})}setCursor(t){this.upperCanvasEl.style.cursor=t}_drawSelection(t){let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new st(e,n).transform(this.viewportTransform),a=new st(e+i,n+r).transform(this.viewportTransform),l=this.selectionLineWidth/2,c=Math.min(o.x,a.x),h=Math.min(o.y,a.y),u=Math.max(o.x,a.x),d=Math.max(o.y,a.y);this.selectionColor&&(t.fillStyle=this.selectionColor,t.fillRect(c,h,u-c,d-h)),this.selectionLineWidth&&this.selectionBorderColor&&(t.lineWidth=this.selectionLineWidth,t.strokeStyle=this.selectionBorderColor,c+=l,h+=l,u-=l,d-=l,Je.prototype._setLineDash.call(this,t,this.selectionDashArray),t.strokeRect(c,h,u-c,d-h))}findTarget(t){if(this.skipTargetFind)return;let e=this.getViewportPoint(t),n=this._activeObject,i=this.getActiveObjects();if(this.targets=[],n&&i.length>=1){if(n.findControl(e,mh(t))||i.length>1&&this.searchPossibleTargets([n],e))return n;if(n===this.searchPossibleTargets([n],e)){if(this.preserveObjectStacking){let r=this.targets;this.targets=[];let o=this.searchPossibleTargets(this._objects,e);return t[this.altSelectionKey]&&o&&o!==n?(this.targets=r,n):o}return n}}return this.searchPossibleTargets(this._objects,e)}_pointIsInObjectSelectionArea(t,e){let n=t.getCoords(),i=this.getZoom(),r=t.padding/i;if(r){let[o,a,l,c]=n,h=Math.atan2(a.y-o.y,a.x-o.x),u=gi(h)*r,d=_i(h)*r,f=u+d,p=u-d;n=[new st(o.x-p,o.y-f),new st(a.x+f,a.y-p),new st(l.x+p,l.y+f),new st(c.x-f,c.y+p)]}return Pr.isPointInPolygon(e,n)}_checkTarget(t,e){return!!(t&&t.visible&&t.evented&&this._pointIsInObjectSelectionArea(t,ss(e,void 0,this.viewportTransform))&&(!this.perPixelTargetFind&&!t.perPixelTargetFind||t.isEditing||!this.isTargetTransparent(t,e.x,e.y)))}_searchPossibleTargets(t,e){let n=t.length;for(;n--;){let i=t[n];if(this._checkTarget(i,e)){if(oh(i)&&i.subTargetCheck){let r=this._searchPossibleTargets(i._objects,e);r&&this.targets.push(r)}return i}}}searchPossibleTargets(t,e){let n=this._searchPossibleTargets(t,e);if(n&&oh(n)&&n.interactive&&this.targets[0]){let i=this.targets;for(let r=i.length-1;r>0;r--){let o=i[r];if(!oh(o)||!o.interactive)return o}return i[0]}return n}getViewportPoint(t){return this._pointer?this._pointer:this.getPointer(t,!0)}getScenePoint(t){return this._absolutePointer?this._absolutePointer:this.getPointer(t)}getPointer(t){let e=arguments.length>1&&arguments[1]!==void 0&&arguments[1],n=this.upperCanvasEl,i=n.getBoundingClientRect(),r=h0(t),o=i.width||0,a=i.height||0;o&&a||(Tn in i&&jd in i&&(a=Math.abs(i.top-i.bottom)),Le in i&&pe in i&&(o=Math.abs(i.right-i.left))),this.calcOffset(),r.x=r.x-this._offset.left,r.y=r.y-this._offset.top,e||(r=ss(r,void 0,this.viewportTransform));let l=this.getRetinaScaling();l!==1&&(r.x/=l,r.y/=l);let c=o===0||a===0?new st(1,1):new st(n.width/o,n.height/a);return r.multiply(c)}_setDimensionsImpl(t,e){this._resetTransformEventData(),super._setDimensionsImpl(t,e),this._isCurrentlyDrawing&&this.freeDrawingBrush&&this.freeDrawingBrush._setBrushStyles(this.contextTop)}_createCacheCanvas(){this.pixelFindCanvasEl=Ui(),this.pixelFindContext=this.pixelFindCanvasEl.getContext("2d",{willReadFrequently:!0}),this.setTargetFindTolerance(this.targetFindTolerance)}getTopContext(){return this.elements.upper.ctx}getSelectionContext(){return this.elements.upper.ctx}getSelectionElement(){return this.elements.upper.el}getActiveObject(){return this._activeObject}getActiveObjects(){let t=this._activeObject;return cr(t)?t.getObjects():t?[t]:[]}_fireSelectionEvents(t,e){let n=!1,i=!1,r=this.getActiveObjects(),o=[],a=[];t.forEach((l=>{r.includes(l)||(n=!0,l.fire("deselected",{e,target:l}),a.push(l))})),r.forEach((l=>{t.includes(l)||(n=!0,l.fire("selected",{e,target:l}),o.push(l))})),t.length>0&&r.length>0?(i=!0,n&&this.fire("selection:updated",{e,selected:o,deselected:a})):r.length>0?(i=!0,this.fire("selection:created",{e,selected:o})):t.length>0&&(i=!0,this.fire("selection:cleared",{e,deselected:a})),i&&(this._objectsToRender=void 0)}setActiveObject(t,e){let n=this.getActiveObjects(),i=this._setActiveObject(t,e);return this._fireSelectionEvents(n,e),i}_setActiveObject(t,e){let n=this._activeObject;return n!==t&&!(!this._discardActiveObject(e,t)&&this._activeObject)&&!t.onSelect({e})&&(this._activeObject=t,cr(t)&&n!==t&&t.set("canvas",this),t.setCoords(),!0)}_discardActiveObject(t,e){let n=this._activeObject;return!!n&&!n.onDeselect({e:t,object:e})&&(this._currentTransform&&this._currentTransform.target===n&&this.endCurrentTransform(t),cr(n)&&n===this._hoveredTarget&&(this._hoveredTarget=void 0),this._activeObject=void 0,!0)}discardActiveObject(t){let e=this.getActiveObjects(),n=this.getActiveObject();e.length&&this.fire("before:selection:cleared",{e:t,deselected:[n]});let i=this._discardActiveObject(t);return this._fireSelectionEvents(e,t),i}endCurrentTransform(t){let e=this._currentTransform;this._finalizeCurrentTransform(t),e&&e.target&&(e.target.isMoving=!1),this._currentTransform=null}_finalizeCurrentTransform(t){let e=this._currentTransform,n=e.target,i={e:t,target:n,transform:e,action:e.action};n._scaling&&(n._scaling=!1),n.setCoords(),e.actionPerformed&&(this.fire("object:modified",i),n.fire(uh,i))}setViewportTransform(t){super.setViewportTransform(t);let e=this._activeObject;e&&e.setCoords()}destroy(){let t=this._activeObject;cr(t)&&(t.removeAll(),t.dispose()),delete this._activeObject,super.destroy(),this.pixelFindContext=null,this.pixelFindCanvasEl=void 0}clear(){this.discardActiveObject(),this._activeObject=void 0,this.clearContext(this.contextTop),super.clear()}drawControls(t){let e=this._activeObject;e&&e._renderControls(t)}_toObject(t,e,n){let i=this._realizeGroupTransformOnObject(t),r=super._toObject(t,e,n);return t.set(i),r}_realizeGroupTransformOnObject(t){let{group:e}=t;if(e&&cr(e)&&this._activeObject===e){let n=Ur(t,["angle","flipX","flipY",pe,vn,zn,zo,Vo,Tn]);return u0(t,e.calcOwnMatrix()),n}return{}}_setSVGObject(t,e,n){let i=this._realizeGroupTransformOnObject(e);super._setSVGObject(t,e,n),e.set(i)}};j(Dh,"ownDefaults",{uniformScaling:!0,uniScaleKey:"shiftKey",centeredScaling:!1,centeredRotation:!1,centeredKey:"altKey",altActionKey:"shiftKey",selection:!0,selectionKey:"shiftKey",selectionColor:"rgba(100, 100, 255, 0.3)",selectionDashArray:[],selectionBorderColor:"rgba(255, 255, 255, 0.3)",selectionLineWidth:1,selectionFullyContained:!1,hoverCursor:"move",moveCursor:"move",defaultCursor:"default",freeDrawingCursor:"crosshair",notAllowedCursor:"not-allowed",perPixelTargetFind:!1,targetFindTolerance:0,skipTargetFind:!1,stopContextMenu:!1,fireRightClick:!1,fireMiddleClick:!1,enablePointerEvents:!1,containerClass:"canvas-container",preserveObjectStacking:!1});var uf=class{constructor(t){j(this,"targets",[]),j(this,"__disposer",void 0);let e=()=>{let{hiddenTextarea:i}=t.getActiveObject()||{};i&&i.focus()},n=t.upperCanvasEl;n.addEventListener("click",e),this.__disposer=()=>n.removeEventListener("click",e)}exitTextEditing(){this.target=void 0,this.targets.forEach((t=>{t.isEditing&&t.exitEditing()}))}add(t){this.targets.push(t)}remove(t){this.unregister(t),lr(this.targets,t)}register(t){this.target=t}unregister(t){t===this.target&&(this.target=void 0)}onMouseMove(t){var e;!((e=this.target)===null||e===void 0)&&e.isEditing&&this.target.updateSelectionOnMouseMove(t)}clear(){this.targets=[],this.target=void 0}dispose(){this.clear(),this.__disposer(),delete this.__disposer}},FM=["target","oldTarget","fireCanvas","e"],Un={passive:!1},Mo=(s,t)=>{let e=s.getViewportPoint(t),n=s.getScenePoint(t);return{viewportPoint:e,scenePoint:n,pointer:e,absolutePointer:n}},Is=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.addEventListener(...e)},qn=function(s){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];return s.removeEventListener(...e)},NM={mouse:{in:"over",out:"out",targetIn:"mouseover",targetOut:"mouseout",canvasIn:"mouse:over",canvasOut:"mouse:out"},drag:{in:"enter",out:"leave",targetIn:"dragenter",targetOut:"dragleave",canvasIn:"drag:enter",canvasOut:"drag:leave"}},Bo=class extends Dh{constructor(t){super(t,arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}),j(this,"_isClick",void 0),j(this,"textEditingManager",new uf(this)),["_onMouseDown","_onTouchStart","_onMouseMove","_onMouseUp","_onTouchEnd","_onResize","_onMouseWheel","_onMouseOut","_onMouseEnter","_onContextMenu","_onClick","_onDragStart","_onDragEnd","_onDragProgress","_onDragOver","_onDragEnter","_onDragLeave","_onDrop"].forEach((e=>{this[e]=this[e].bind(this)})),this.addOrRemove(Is,"add")}_getEventPrefix(){return this.enablePointerEvents?"pointer":"mouse"}addOrRemove(t,e){let n=this.upperCanvasEl,i=this._getEventPrefix();t(l0(n),"resize",this._onResize),t(n,i+"down",this._onMouseDown),t(n,"".concat(i,"move"),this._onMouseMove,Un),t(n,"".concat(i,"out"),this._onMouseOut),t(n,"".concat(i,"enter"),this._onMouseEnter),t(n,"wheel",this._onMouseWheel,{passive:!1}),t(n,"contextmenu",this._onContextMenu),t(n,"click",this._onClick),t(n,"dblclick",this._onClick),t(n,"dragstart",this._onDragStart),t(n,"dragend",this._onDragEnd),t(n,"dragover",this._onDragOver),t(n,"dragenter",this._onDragEnter),t(n,"dragleave",this._onDragLeave),t(n,"drop",this._onDrop),this.enablePointerEvents||t(n,"touchstart",this._onTouchStart,Un)}removeListeners(){this.addOrRemove(qn,"remove");let t=this._getEventPrefix(),e=di(this.upperCanvasEl);qn(e,"".concat(t,"up"),this._onMouseUp),qn(e,"touchend",this._onTouchEnd,Un),qn(e,"".concat(t,"move"),this._onMouseMove,Un),qn(e,"touchmove",this._onMouseMove,Un),clearTimeout(this._willAddMouseDown)}_onMouseWheel(t){this.__onMouseWheel(t)}_onMouseOut(t){let e=this._hoveredTarget,n=X({e:t},Mo(this,t));this.fire("mouse:out",X(X({},n),{},{target:e})),this._hoveredTarget=void 0,e&&e.fire("mouseout",X({},n)),this._hoveredTargets.forEach((i=>{this.fire("mouse:out",X(X({},n),{},{target:i})),i&&i.fire("mouseout",X({},n))})),this._hoveredTargets=[]}_onMouseEnter(t){this._currentTransform||this.findTarget(t)||(this.fire("mouse:over",X({e:t},Mo(this,t))),this._hoveredTarget=void 0,this._hoveredTargets=[])}_onDragStart(t){this._isClick=!1;let e=this.getActiveObject();if(e&&e.onDragStart(t)){this._dragSource=e;let n={e:t,target:e};return this.fire("dragstart",n),e.fire("dragstart",n),void Is(this.upperCanvasEl,"drag",this._onDragProgress)}vg(t)}_renderDragEffects(t,e,n){let i=!1,r=this._dropTarget;r&&r!==e&&r!==n&&(r.clearContextTop(),i=!0),e?.clearContextTop(),n!==e&&n?.clearContextTop();let o=this.contextTop;o.save(),o.transform(...this.viewportTransform),e&&(o.save(),e.transform(o),e.renderDragSourceEffect(t),o.restore(),i=!0),n&&(o.save(),n.transform(o),n.renderDropTargetEffect(t),o.restore(),i=!0),o.restore(),i&&(this.contextTopDirty=!0)}_onDragEnd(t){let e=!!t.dataTransfer&&t.dataTransfer.dropEffect!==Cn,n=e?this._activeObject:void 0,i={e:t,target:this._dragSource,subTargets:this.targets,dragSource:this._dragSource,didDrop:e,dropTarget:n};qn(this.upperCanvasEl,"drag",this._onDragProgress),this.fire("dragend",i),this._dragSource&&this._dragSource.fire("dragend",i),delete this._dragSource,this._onMouseUp(t)}_onDragProgress(t){let e={e:t,target:this._dragSource,dragSource:this._dragSource,dropTarget:this._draggedoverTarget};this.fire("drag",e),this._dragSource&&this._dragSource.fire("drag",e)}findDragTargets(t){return this.targets=[],{target:this._searchPossibleTargets(this._objects,this.getViewportPoint(t)),targets:[...this.targets]}}_onDragOver(t){let e="dragover",{target:n,targets:i}=this.findDragTargets(t),r=this._dragSource,o={e:t,target:n,subTargets:i,dragSource:r,canDrop:!1,dropTarget:void 0},a;this.fire(e,o),this._fireEnterLeaveEvents(n,o),n&&(n.canDrop(t)&&(a=n),n.fire(e,o));for(let l=0;l<i.length;l++){let c=i[l];c.canDrop(t)&&(a=c),c.fire(e,o)}this._renderDragEffects(t,r,a),this._dropTarget=a}_onDragEnter(t){let{target:e,targets:n}=this.findDragTargets(t),i={e:t,target:e,subTargets:n,dragSource:this._dragSource};this.fire("dragenter",i),this._fireEnterLeaveEvents(e,i)}_onDragLeave(t){let e={e:t,target:this._draggedoverTarget,subTargets:this.targets,dragSource:this._dragSource};this.fire("dragleave",e),this._fireEnterLeaveEvents(void 0,e),this._renderDragEffects(t,this._dragSource),this._dropTarget=void 0,this.targets=[],this._hoveredTargets=[]}_onDrop(t){let{target:e,targets:n}=this.findDragTargets(t),i=this._basicEventHandler("drop:before",X({e:t,target:e,subTargets:n,dragSource:this._dragSource},Mo(this,t)));i.didDrop=!1,i.dropTarget=void 0,this._basicEventHandler("drop",i),this.fire("drop:after",i)}_onContextMenu(t){let e=this.findTarget(t),n=this.targets||[],i=this._basicEventHandler("contextmenu:before",{e:t,target:e,subTargets:n});return this.stopContextMenu&&vg(t),this._basicEventHandler("contextmenu",i),!1}_onClick(t){let e=t.detail;e>3||e<2||(this._cacheTransformEventData(t),e==2&&t.type==="dblclick"&&this._handleEvent(t,"dblclick"),e==3&&this._handleEvent(t,"tripleclick"),this._resetTransformEventData())}getPointerId(t){let e=t.changedTouches;return e?e[0]&&e[0].identifier:this.enablePointerEvents?t.pointerId:-1}_isMainEvent(t){return t.isPrimary===!0||t.isPrimary!==!1&&(t.type==="touchend"&&t.touches.length===0||!t.changedTouches||t.changedTouches[0].identifier===this.mainTouchId)}_onTouchStart(t){let e=!this.allowTouchScrolling,n=this._activeObject;this.mainTouchId===void 0&&(this.mainTouchId=this.getPointerId(t)),this.__onMouseDown(t),(this.isDrawingMode||n&&this._target===n)&&(e=!0),e&&t.preventDefault(),this._resetTransformEventData();let i=this.upperCanvasEl,r=this._getEventPrefix(),o=di(i);Is(o,"touchend",this._onTouchEnd,Un),e&&Is(o,"touchmove",this._onMouseMove,Un),qn(i,"".concat(r,"down"),this._onMouseDown)}_onMouseDown(t){this.__onMouseDown(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();qn(e,"".concat(n,"move"),this._onMouseMove,Un);let i=di(e);Is(i,"".concat(n,"up"),this._onMouseUp),Is(i,"".concat(n,"move"),this._onMouseMove,Un)}_onTouchEnd(t){if(t.touches.length>0)return;this.__onMouseUp(t),this._resetTransformEventData(),delete this.mainTouchId;let e=this._getEventPrefix(),n=di(this.upperCanvasEl);qn(n,"touchend",this._onTouchEnd,Un),qn(n,"touchmove",this._onMouseMove,Un),this._willAddMouseDown&&clearTimeout(this._willAddMouseDown),this._willAddMouseDown=setTimeout((()=>{Is(this.upperCanvasEl,"".concat(e,"down"),this._onMouseDown),this._willAddMouseDown=0}),400)}_onMouseUp(t){this.__onMouseUp(t),this._resetTransformEventData();let e=this.upperCanvasEl,n=this._getEventPrefix();if(this._isMainEvent(t)){let i=di(this.upperCanvasEl);qn(i,"".concat(n,"up"),this._onMouseUp),qn(i,"".concat(n,"move"),this._onMouseMove,Un),Is(e,"".concat(n,"move"),this._onMouseMove,Un)}}_onMouseMove(t){let e=this.getActiveObject();!this.allowTouchScrolling&&(!e||!e.shouldStartDragging(t))&&t.preventDefault&&t.preventDefault(),this.__onMouseMove(t)}_onResize(){this.calcOffset(),this._resetTransformEventData()}_shouldRender(t){let e=this.getActiveObject();return!!e!=!!t||e&&t&&e!==t}__onMouseUp(t){var e;this._cacheTransformEventData(t),this._handleEvent(t,"up:before");let n=this._currentTransform,i=this._isClick,r=this._target,{button:o}=t;if(o)return(this.fireMiddleClick&&o===1||this.fireRightClick&&o===2)&&this._handleEvent(t,"up"),void this._resetTransformEventData();if(this.isDrawingMode&&this._isCurrentlyDrawing)return void this._onMouseUpInDrawingMode(t);if(!this._isMainEvent(t))return;let a,l,c=!1;if(n&&(this._finalizeCurrentTransform(t),c=n.actionPerformed),!i){let h=r===this._activeObject;this.handleSelection(t),c||(c=this._shouldRender(r)||!h&&r===this._activeObject)}if(r){let h=r.findControl(this.getViewportPoint(t),mh(t)),{key:u,control:d}=h||{};if(l=u,r.selectable&&r!==this._activeObject&&r.activeOn==="up")this.setActiveObject(r,t),c=!0;else if(d){let f=d.getMouseUpHandler(t,r,d);f&&(a=this.getScenePoint(t),f.call(d,t,n,a.x,a.y))}r.isMoving=!1}if(n&&(n.target!==r||n.corner!==l)){let h=n.target&&n.target.controls[n.corner],u=h&&h.getMouseUpHandler(t,n.target,h);a=a||this.getScenePoint(t),u&&u.call(h,t,n,a.x,a.y)}this._setCursorFromEvent(t,r),this._handleEvent(t,"up"),this._groupSelector=null,this._currentTransform=null,r&&(r.__corner=void 0),c?this.requestRenderAll():i||(e=this._activeObject)!==null&&e!==void 0&&e.isEditing||this.renderTop()}_basicEventHandler(t,e){let{target:n,subTargets:i=[]}=e;this.fire(t,e),n&&n.fire(t,e);for(let r=0;r<i.length;r++)i[r]!==n&&i[r].fire(t,e);return e}_handleEvent(t,e,n){let i=this._target,r=this.targets||[],o=X(X(X({e:t,target:i,subTargets:r},Mo(this,t)),{},{transform:this._currentTransform},e==="up:before"||e==="up"?{isClick:this._isClick,currentTarget:this.findTarget(t),currentSubTargets:this.targets}:{}),e==="down:before"||e==="down"?n:{});this.fire("mouse:".concat(e),o),i&&i.fire("mouse".concat(e),o);for(let a=0;a<r.length;a++)r[a]!==i&&r[a].fire("mouse".concat(e),o)}_onMouseDownInDrawingMode(t){this._isCurrentlyDrawing=!0,this.getActiveObject()&&(this.discardActiveObject(t),this.requestRenderAll());let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseDown(e,{e:t,pointer:e}),this._handleEvent(t,"down",{alreadySelected:!1})}_onMouseMoveInDrawingMode(t){if(this._isCurrentlyDrawing){let e=this.getScenePoint(t);this.freeDrawingBrush&&this.freeDrawingBrush.onMouseMove(e,{e:t,pointer:e})}this.setCursor(this.freeDrawingCursor),this._handleEvent(t,"move")}_onMouseUpInDrawingMode(t){let e=this.getScenePoint(t);this.freeDrawingBrush?this._isCurrentlyDrawing=!!this.freeDrawingBrush.onMouseUp({e:t,pointer:e}):this._isCurrentlyDrawing=!1,this._handleEvent(t,"up")}__onMouseDown(t){this._isClick=!0,this._cacheTransformEventData(t),this._handleEvent(t,"down:before");let e=this._target,n=!!e&&e===this._activeObject,{button:i}=t;if(i)return(this.fireMiddleClick&&i===1||this.fireRightClick&&i===2)&&this._handleEvent(t,"down",{alreadySelected:n}),void this._resetTransformEventData();if(this.isDrawingMode)return void this._onMouseDownInDrawingMode(t);if(!this._isMainEvent(t)||this._currentTransform)return;let r=this._shouldRender(e),o=!1;if(this.handleMultiSelection(t,e)?(e=this._activeObject,o=!0,r=!0):this._shouldClearSelection(t,e)&&this.discardActiveObject(t),this.selection&&(!e||!e.selectable&&!e.isEditing&&e!==this._activeObject)){let a=this.getScenePoint(t);this._groupSelector={x:a.x,y:a.y,deltaY:0,deltaX:0}}if(n=!!e&&e===this._activeObject,e){e.selectable&&e.activeOn==="down"&&this.setActiveObject(e,t);let a=e.findControl(this.getViewportPoint(t),mh(t));if(e===this._activeObject&&(a||!o)){this._setupCurrentTransform(t,e,n);let l=a?a.control:void 0,c=this.getScenePoint(t),h=l&&l.getMouseDownHandler(t,e,l);h&&h.call(l,t,this._currentTransform,c.x,c.y)}}r&&(this._objectsToRender=void 0),this._handleEvent(t,"down",{alreadySelected:n}),r&&this.requestRenderAll()}_resetTransformEventData(){this._target=this._pointer=this._absolutePointer=void 0}_cacheTransformEventData(t){this._resetTransformEventData(),this._pointer=this.getViewportPoint(t),this._absolutePointer=ss(this._pointer,void 0,this.viewportTransform),this._target=this._currentTransform?this._currentTransform.target:this.findTarget(t)}__onMouseMove(t){if(this._isClick=!1,this._cacheTransformEventData(t),this._handleEvent(t,"move:before"),this.isDrawingMode)return void this._onMouseMoveInDrawingMode(t);if(!this._isMainEvent(t))return;let e=this._groupSelector;if(e){let n=this.getScenePoint(t);e.deltaX=n.x-e.x,e.deltaY=n.y-e.y,this.renderTop()}else if(this._currentTransform)this._transformObject(t);else{let n=this.findTarget(t);this._setCursorFromEvent(t,n),this._fireOverOutEvents(t,n)}this.textEditingManager.onMouseMove(t),this._handleEvent(t,"move"),this._resetTransformEventData()}_fireOverOutEvents(t,e){let n=this._hoveredTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("mouse",{e:t,target:e,oldTarget:n,fireCanvas:!0});for(let a=0;a<o;a++)r[a]===e||i[a]&&i[a]===n||this.fireSyntheticInOutEvents("mouse",{e:t,target:r[a],oldTarget:i[a]});this._hoveredTarget=e,this._hoveredTargets=this.targets.concat()}_fireEnterLeaveEvents(t,e){let n=this._draggedoverTarget,i=this._hoveredTargets,r=this.targets,o=Math.max(i.length,r.length);this.fireSyntheticInOutEvents("drag",X(X({},e),{},{target:t,oldTarget:n,fireCanvas:!0}));for(let a=0;a<o;a++)this.fireSyntheticInOutEvents("drag",X(X({},e),{},{target:r[a],oldTarget:i[a]}));this._draggedoverTarget=t}fireSyntheticInOutEvents(t,e){let{target:n,oldTarget:i,fireCanvas:r,e:o}=e,a=Me(e,FM),{targetIn:l,targetOut:c,canvasIn:h,canvasOut:u}=NM[t],d=i!==n;if(i&&d){let f=X(X({},a),{},{e:o,target:i,nextTarget:n},Mo(this,o));r&&this.fire(u,f),i.fire(c,f)}if(n&&d){let f=X(X({},a),{},{e:o,target:n,previousTarget:i},Mo(this,o));r&&this.fire(h,f),n.fire(l,f)}}__onMouseWheel(t){this._cacheTransformEventData(t),this._handleEvent(t,"wheel"),this._resetTransformEventData()}_transformObject(t){let e=this.getScenePoint(t),n=this._currentTransform,i=n.target,r=i.group?ss(e,void 0,i.group.calcTransformMatrix()):e;n.shiftKey=t.shiftKey,n.altKey=!!this.centeredKey&&t[this.centeredKey],this._performTransformAction(t,n,r),n.actionPerformed&&this.requestRenderAll()}_performTransformAction(t,e,n){let{action:i,actionHandler:r,target:o}=e,a=!!r&&r(t,e,n.x,n.y);a&&o.setCoords(),i==="drag"&&a&&(e.target.isMoving=!0,this.setCursor(e.target.moveCursor||this.moveCursor)),e.actionPerformed=e.actionPerformed||a}_setCursorFromEvent(t,e){if(!e)return void this.setCursor(this.defaultCursor);let n=e.hoverCursor||this.hoverCursor,i=cr(this._activeObject)?this._activeObject:null,r=(!i||e.group!==i)&&e.findControl(this.getViewportPoint(t));if(r){let o=r.control;this.setCursor(o.cursorStyleHandler(t,o,e))}else e.subTargetCheck&&this.targets.concat().reverse().map((o=>{n=o.hoverCursor||n})),this.setCursor(n)}handleMultiSelection(t,e){let n=this._activeObject,i=cr(n);if(n&&this._isSelectionKeyPressed(t)&&this.selection&&e&&e.selectable&&(n!==e||i)&&(i||!e.isDescendantOf(n)&&!n.isDescendantOf(e))&&!e.onSelect({e:t})&&!n.getActiveControl()){if(i){let r=n.getObjects();if(e===n){let o=this.getViewportPoint(t);if(!(e=this.searchPossibleTargets(r,o)||this.searchPossibleTargets(this._objects,o))||!e.selectable)return!1}e.group===n?(n.remove(e),this._hoveredTarget=e,this._hoveredTargets=[...this.targets],n.size()===1&&this._setActiveObject(n.item(0),t)):(n.multiSelectAdd(e),this._hoveredTarget=n,this._hoveredTargets=[...this.targets]),this._fireSelectionEvents(r,t)}else{n.isEditing&&n.exitEditing();let r=new(Et.getClass("ActiveSelection"))([],{canvas:this});r.multiSelectAdd(n,e),this._hoveredTarget=r,this._setActiveObject(r,t),this._fireSelectionEvents([n],t)}return!0}return!1}handleSelection(t){if(!this.selection||!this._groupSelector)return!1;let{x:e,y:n,deltaX:i,deltaY:r}=this._groupSelector,o=new st(e,n),a=o.add(new st(i,r)),l=o.min(a),c=o.max(a).subtract(l),h=this.collectObjects({left:l.x,top:l.y,width:c.x,height:c.y},{includeIntersecting:!this.selectionFullyContained}),u=o.eq(a)?h[0]?[h[0]]:[]:h.length>1?h.filter((d=>!d.onSelect({e:t}))).reverse():h;if(u.length===1)this.setActiveObject(u[0],t);else if(u.length>1){let d=Et.getClass("ActiveSelection");this.setActiveObject(new d(u,{canvas:this}),t)}return this._groupSelector=null,!0}toCanvasElement(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0,{upper:n}=this.elements;n.ctx=void 0;let i=super.toCanvasElement(t,e);return n.ctx=n.el.getContext("2d"),i}clear(){this.textEditingManager.clear(),super.clear()}destroy(){this.removeListeners(),this.textEditingManager.dispose(),super.destroy()}},o_={x1:0,y1:0,x2:0,y2:0},UM=X(X({},o_),{},{r1:0,r2:0}),To=(s,t)=>isNaN(s)&&typeof t=="number"?t:s;function a_(s){return s&&/%$/.test(s)&&Number.isFinite(parseFloat(s))}function l_(s,t){let e=typeof s=="number"?s:typeof s=="string"?parseFloat(s)/(a_(s)?100:1):NaN;return Lr(0,To(e,t),1)}var BM=/\s*;\s*/,kM=/\s*:\s*/;function zM(s,t){let e,n,i=s.getAttribute("style");if(i){let o=i.split(BM);o[o.length-1]===""&&o.pop();for(let a=o.length;a--;){let[l,c]=o[a].split(kM).map((h=>h.trim()));l==="stop-color"?e=c:l==="stop-opacity"&&(n=c)}}let r=new yn(e||s.getAttribute("stop-color")||"rgb(0,0,0)");return{offset:l_(s.getAttribute("offset"),0),color:r.toRgb(),opacity:To(parseFloat(n||s.getAttribute("stop-opacity")||""),1)*r.getAlpha()*t}}function VM(s,t){let e=[],n=s.getElementsByTagName("stop"),i=l_(t,1);for(let r=n.length;r--;)e.push(zM(n[r],i));return e}function c_(s){return s.nodeName==="linearGradient"||s.nodeName==="LINEARGRADIENT"?"linear":"radial"}function h_(s){return s.getAttribute("gradientUnits")==="userSpaceOnUse"?"pixels":"percentage"}function ui(s,t){return s.getAttribute(t)}function GM(s,t){return(function(e,n){let i,{width:r,height:o,gradientUnits:a}=n;return Object.entries(e).reduce(((l,c)=>{let[h,u]=c;if(u==="Infinity")i=1;else if(u==="-Infinity")i=0;else{let d=typeof u=="string";i=d?parseFloat(u):u,d&&a_(u)&&(i*=.01,a==="pixels"&&(h!=="x1"&&h!=="x2"&&h!=="r2"||(i*=r),h!=="y1"&&h!=="y2"||(i*=o)))}return l[h]=i,l}),{})})(c_(s)==="linear"?(function(e){return{x1:ui(e,"x1")||0,y1:ui(e,"y1")||0,x2:ui(e,"x2")||"100%",y2:ui(e,"y2")||0}})(s):(function(e){return{x1:ui(e,"fx")||ui(e,"cx")||"50%",y1:ui(e,"fy")||ui(e,"cy")||"50%",r1:0,x2:ui(e,"cx")||"50%",y2:ui(e,"cy")||"50%",r2:ui(e,"r")||"50%"}})(s),X(X({},t),{},{gradientUnits:h_(s)}))}var Co=class{constructor(t){let{type:e="linear",gradientUnits:n="pixels",coords:i={},colorStops:r=[],offsetX:o=0,offsetY:a=0,gradientTransform:l,id:c}=t||{};Object.assign(this,{type:e,gradientUnits:n,coords:X(X({},e==="radial"?UM:o_),i),colorStops:r,offsetX:o,offsetY:a,gradientTransform:l,id:c?"".concat(c,"_").concat(Us()):Us()})}addColorStop(t){for(let e in t){let n=new yn(t[e]);this.colorStops.push({offset:parseFloat(e),color:n.toRgb(),opacity:n.getAlpha()})}return this}toObject(t){return X(X({},Ur(this,t)),{},{type:this.type,coords:X({},this.coords),colorStops:this.colorStops.map((e=>X({},e))),offsetX:this.offsetX,offsetY:this.offsetY,gradientUnits:this.gradientUnits,gradientTransform:this.gradientTransform?[...this.gradientTransform]:void 0})}toSVG(t){let{additionalTransform:e}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[],i=this.gradientTransform?this.gradientTransform.concat():xn.concat(),r=this.gradientUnits==="pixels"?"userSpaceOnUse":"objectBoundingBox",o=this.colorStops.map((u=>X({},u))).sort(((u,d)=>u.offset-d.offset)),a=-this.offsetX,l=-this.offsetY;var c;r==="objectBoundingBox"?(a/=t.width,l/=t.height):(a+=t.width/2,l+=t.height/2),(c=t)&&typeof c._renderPathCommands=="function"&&this.gradientUnits!=="percentage"&&(a-=t.pathOffset.x,l-=t.pathOffset.y),i[4]-=a,i[5]-=l;let h=['id="SVGID_'.concat(this.id,'"'),'gradientUnits="'.concat(r,'"'),'gradientTransform="'.concat(e?e+" ":"").concat(Fo(i),'"'),""].join(" ");if(this.type==="linear"){let{x1:u,y1:d,x2:f,y2:p}=this.coords;n.push("<linearGradient ",h,' x1="',u,'" y1="',d,'" x2="',f,'" y2="',p,`">
`)}else if(this.type==="radial"){let{x1:u,y1:d,x2:f,y2:p,r1:x,r2:m}=this.coords,g=x>m;n.push("<radialGradient ",h,' cx="',g?u:f,'" cy="',g?d:p,'" r="',g?x:m,'" fx="',g?f:u,'" fy="',g?p:d,`">
`),g&&(o.reverse(),o.forEach((P=>{P.offset=1-P.offset})));let S=Math.min(x,m);if(S>0){let P=S/Math.max(x,m);o.forEach((T=>{T.offset+=P*(1-T.offset)}))}}return o.forEach((u=>{let{color:d,offset:f,opacity:p}=u;n.push("<stop ",'offset="',100*f+"%",'" style="stop-color:',d,p!==void 0?";stop-opacity: "+p:";",`"/>
`)})),n.push(this.type==="linear"?"</linearGradient>":"</radialGradient>",`
`),n.join("")}toLive(t){let{x1:e,y1:n,x2:i,y2:r,r1:o,r2:a}=this.coords,l=this.type==="linear"?t.createLinearGradient(e,n,i,r):t.createRadialGradient(e,n,o,i,r,a);return this.colorStops.forEach((c=>{let{color:h,opacity:u,offset:d}=c;l.addColorStop(d,u!==void 0?new yn(h).setAlpha(u).toRgba():h)})),l}static async fromObject(t){let{colorStops:e,gradientTransform:n}=t;return new this(X(X({},t),{},{colorStops:e?e.map((i=>X({},i))):void 0,gradientTransform:n?[...n]:void 0}))}static fromElement(t,e,n){let i=h_(t),r=e._findCenterFromElement();return new this(X({id:t.getAttribute("id")||void 0,type:c_(t),coords:GM(t,{width:n.viewBoxWidth||n.width,height:n.viewBoxHeight||n.height}),colorStops:VM(t,n.opacity),gradientUnits:i,gradientTransform:of(t.getAttribute("gradientTransform")||"")},i==="pixels"?{offsetX:e.width/2-r.x,offsetY:e.height/2-r.y}:{offsetX:0,offsetY:0}))}};j(Co,"type","Gradient"),Et.setClass(Co,"gradient"),Et.setClass(Co,"linear"),Et.setClass(Co,"radial");var HM=["type","source","patternTransform"],Dr=class{get type(){return"pattern"}set type(t){Fs("warn","Setting type has no effect",t)}constructor(t){j(this,"repeat","repeat"),j(this,"offsetX",0),j(this,"offsetY",0),j(this,"crossOrigin",""),this.id=Us(),Object.assign(this,t)}isImageSource(){return!!this.source&&typeof this.source.src=="string"}isCanvasSource(){return!!this.source&&!!this.source.toDataURL}sourceToString(){return this.isImageSource()?this.source.src:this.isCanvasSource()?this.source.toDataURL():""}toLive(t){return this.source&&(!this.isImageSource()||this.source.complete&&this.source.naturalWidth!==0&&this.source.naturalHeight!==0)?t.createPattern(this.source,this.repeat):null}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],{repeat:e,crossOrigin:n}=this;return X(X({},Ur(this,t)),{},{type:"pattern",source:this.sourceToString(),repeat:e,crossOrigin:n,offsetX:ye(this.offsetX,he.NUM_FRACTION_DIGITS),offsetY:ye(this.offsetY,he.NUM_FRACTION_DIGITS),patternTransform:this.patternTransform?[...this.patternTransform]:null})}toSVG(t){let{width:e,height:n}=t,{source:i,repeat:r,id:o}=this,a=To(this.offsetX/e,0),l=To(this.offsetY/n,0),c=r==="repeat-y"||r==="no-repeat"?1+Math.abs(a||0):To(i.width/e,0),h=r==="repeat-x"||r==="no-repeat"?1+Math.abs(l||0):To(i.height/n,0);return['<pattern id="SVGID_'.concat(o,'" x="').concat(a,'" y="').concat(l,'" width="').concat(c,'" height="').concat(h,'">'),'<image x="0" y="0" width="'.concat(i.width,'" height="').concat(i.height,'" xlink:href="').concat(this.sourceToString(),'"></image>'),"</pattern>",""].join(`
`)}static async fromObject(t,e){let{type:n,source:i,patternTransform:r}=t,o=Me(t,HM),a=await Ga(i,X(X({},e),{},{crossOrigin:o.crossOrigin}));return new this(X(X({},o),{},{patternTransform:r&&r.slice(0),source:a}))}};j(Dr,"type","Pattern"),Et.setClass(Dr),Et.setClass(Dr,"pattern");var WM=["path","left","top"],XM=["d"],Li=class s extends Je{constructor(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{path:n,left:i,top:r}=e,o=Me(e,WM);super(),Object.assign(this,s.ownDefaults),this.setOptions(o),this._setPath(t||[],!0),typeof i=="number"&&this.set(pe,i),typeof r=="number"&&this.set(Tn,r)}_setPath(t,e){this.path=$0(Array.isArray(t)?t:s_(t)),this.setBoundingBox(e)}_findCenterFromElement(){let t=this._calcBoundsFromPath();return new st(t.left+t.width/2,t.top+t.height/2)}_renderPathCommands(t){let e=-this.pathOffset.x,n=-this.pathOffset.y;t.beginPath();for(let i of this.path)switch(i[0]){case"L":t.lineTo(i[1]+e,i[2]+n);break;case"M":t.moveTo(i[1]+e,i[2]+n);break;case"C":t.bezierCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n,i[5]+e,i[6]+n);break;case"Q":t.quadraticCurveTo(i[1]+e,i[2]+n,i[3]+e,i[4]+n);break;case"Z":t.closePath()}}_render(t){this._renderPathCommands(t),this._renderPaintInOrder(t)}toString(){return"#<Path (".concat(this.complexity(),'): { "top": ').concat(this.top,', "left": ').concat(this.left," }>")}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return X(X({},super.toObject(t)),{},{path:this.path.map((e=>e.slice()))})}toDatalessObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=this.toObject(t);return this.sourcePath&&(delete e.path,e.sourcePath=this.sourcePath),e}_toSVG(){let t=r_(this.path,he.NUM_FRACTION_DIGITS);return["<path ","COMMON_PARTS",'d="'.concat(t,`" stroke-linecap="round" />
`)]}_getOffsetTransform(){let t=he.NUM_FRACTION_DIGITS;return" translate(".concat(ye(-this.pathOffset.x,t),", ").concat(ye(-this.pathOffset.y,t),")")}toClipPathSVG(t){let e=this._getOffsetTransform();return"	"+this._createBaseClipPathSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}toSVG(t){let e=this._getOffsetTransform();return this._createBaseSVGMarkup(this._toSVG(),{reviver:t,additionalTransform:e})}complexity(){return this.path.length}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{width:e,height:n,pathOffset:i}=this._calcDimensions();this.set({width:e,height:n,pathOffset:i}),t&&this.setPositionByOrigin(i,Zt,Zt)}_calcBoundsFromPath(){let t=[],e=0,n=0,i=0,r=0;for(let o of this.path)switch(o[0]){case"L":i=o[1],r=o[2],t.push({x:e,y:n},{x:i,y:r});break;case"M":i=o[1],r=o[2],e=i,n=r;break;case"C":t.push(...cf(i,r,o[1],o[2],o[3],o[4],o[5],o[6])),i=o[5],r=o[6];break;case"Q":t.push(...cf(i,r,o[1],o[2],o[1],o[2],o[3],o[4])),i=o[3],r=o[4];break;case"Z":i=e,r=n}return Fi(t)}_calcDimensions(){let t=this._calcBoundsFromPath();return X(X({},t),{},{pathOffset:new st(t.left+t.width/2,t.top+t.height/2)})}static fromObject(t){return this._fromObject(t,{extraParam:"path"})}static async fromElement(t,e,n){let i=as(t,this.ATTRIBUTE_NAMES,n),{d:r}=i;return new this(r,X(X(X({},Me(i,XM)),e),{},{left:void 0,top:void 0}))}};j(Li,"type","Path"),j(Li,"cacheProperties",[...os,"path","fillRule"]),j(Li,"ATTRIBUTE_NAMES",[...ks,"d"]),Et.setClass(Li),Et.setSVGClass(Li);var jM=["left","top","radius"],u_=["radius","startAngle","endAngle","counterClockwise"],Ii=class s extends Je{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){return super._set(t,e),t==="radius"&&this.setRadius(e),this}_render(t){t.beginPath(),t.arc(0,0,this.radius,Re(this.startAngle),Re(this.endAngle),this.counterClockwise),this._renderPaintInOrder(t)}getRadiusX(){return this.get("radius")*this.get(vn)}getRadiusY(){return this.get("radius")*this.get(zn)}setRadius(t){this.radius=t,this.set({width:2*t,height:2*t})}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...u_,...t])}_toSVG(){let t=(this.endAngle-this.startAngle)%360;if(t===0)return["<circle ","COMMON_PARTS",'cx="0" cy="0" ','r="',"".concat(this.radius),`" />
`];{let{radius:e}=this,n=Re(this.startAngle),i=Re(this.endAngle),r=gi(n)*e,o=_i(n)*e,a=gi(i)*e,l=_i(i)*e,c=t>180?1:0,h=this.counterClockwise?0:1;return['<path d="M '.concat(r," ").concat(o," A ").concat(e," ").concat(e," 0 ").concat(c," ").concat(h," ").concat(a," ").concat(l,'" '),"COMMON_PARTS",` />
`]}}static async fromElement(t,e,n){let i=as(t,this.ATTRIBUTE_NAMES,n),{left:r=0,top:o=0,radius:a=0}=i;return new this(X(X({},Me(i,jM)),{},{radius:a,left:r-a,top:o-a}))}static fromObject(t){return super._fromObject(t)}};j(Ii,"type","Circle"),j(Ii,"cacheProperties",[...os,...u_]),j(Ii,"ownDefaults",{radius:0,startAngle:0,endAngle:360,counterClockwise:!1}),j(Ii,"ATTRIBUTE_NAMES",["cx","cy","r",...ks]),Et.setClass(Ii),Et.setSVGClass(Ii);var YM=["x1","y1","x2","y2"],qM=["x1","y1","x2","y2"],df=["x1","x2","y1","y2"],hr=class s extends Je{constructor(){let[t,e,n,i]=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[0,0,0,0],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(r),this.x1=t,this.x2=n,this.y1=e,this.y2=i,this._setWidthHeight();let{left:o,top:a}=r;typeof o=="number"&&this.set(pe,o),typeof a=="number"&&this.set(Tn,a)}_setWidthHeight(){let{x1:t,y1:e,x2:n,y2:i}=this;this.width=Math.abs(n-t),this.height=Math.abs(i-e);let{left:r,top:o,width:a,height:l}=Fi([{x:t,y:e},{x:n,y:i}]),c=new st(r+a/2,o+l/2);this.setPositionByOrigin(c,Zt,Zt)}_set(t,e){return super._set(t,e),df.includes(t)&&this._setWidthHeight(),this}_render(t){t.beginPath();let e=this.calcLinePoints();t.moveTo(e.x1,e.y1),t.lineTo(e.x2,e.y2),t.lineWidth=this.strokeWidth;let n=t.strokeStyle;var i;Jn(this.stroke)?t.strokeStyle=this.stroke.toLive(t):t.strokeStyle=(i=this.stroke)!==null&&i!==void 0?i:t.fillStyle,this.stroke&&this._renderStroke(t),t.strokeStyle=n}_findCenterFromElement(){return new st((this.x1+this.x2)/2,(this.y1+this.y2)/2)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return X(X({},super.toObject(t)),this.calcLinePoints())}_getNonTransformedDimensions(){let t=super._getNonTransformedDimensions();return this.strokeLineCap==="butt"&&(this.width===0&&(t.y-=this.strokeWidth),this.height===0&&(t.x-=this.strokeWidth)),t}calcLinePoints(){let{x1:t,x2:e,y1:n,y2:i,width:r,height:o}=this,a=t<=e?-1:1,l=n<=i?-1:1;return{x1:a*r/2,x2:a*-r/2,y1:l*o/2,y2:l*-o/2}}_toSVG(){let{x1:t,x2:e,y1:n,y2:i}=this.calcLinePoints();return["<line ","COMMON_PARTS",'x1="'.concat(t,'" y1="').concat(n,'" x2="').concat(e,'" y2="').concat(i,`" />
`)]}static async fromElement(t,e,n){let i=as(t,this.ATTRIBUTE_NAMES,n),{x1:r=0,y1:o=0,x2:a=0,y2:l=0}=i;return new this([r,o,a,l],Me(i,YM))}static fromObject(t){let{x1:e,y1:n,x2:i,y2:r}=t,o=Me(t,qM);return this._fromObject(X(X({},o),{},{points:[e,n,i,r]}),{extraParam:"points"})}};j(hr,"type","Line"),j(hr,"cacheProperties",[...os,...df]),j(hr,"ATTRIBUTE_NAMES",ks.concat(df)),Et.setClass(hr),Et.setSVGClass(hr);var Eo=class s extends Je{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_render(t){let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,n),t.lineTo(0,-n),t.lineTo(e,n),t.closePath(),this._renderPaintInOrder(t)}_toSVG(){let t=this.width/2,e=this.height/2;return["<polygon ","COMMON_PARTS",'points="',"".concat(-t," ").concat(e,",0 ").concat(-e,",").concat(t," ").concat(e),'" />']}};j(Eo,"type","Triangle"),j(Eo,"ownDefaults",{width:100,height:100}),Et.setClass(Eo),Et.setSVGClass(Eo);var d_=["rx","ry"],Os=class s extends Je{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(t){super(),Object.assign(this,s.ownDefaults),this.setOptions(t)}_set(t,e){switch(super._set(t,e),t){case"rx":this.rx=e,this.set("width",2*e);break;case"ry":this.ry=e,this.set("height",2*e)}return this}getRx(){return this.get("rx")*this.get(vn)}getRy(){return this.get("ry")*this.get(zn)}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject([...d_,...t])}_toSVG(){return["<ellipse ","COMMON_PARTS",'cx="0" cy="0" rx="'.concat(this.rx,'" ry="').concat(this.ry,`" />
`)]}_render(t){t.beginPath(),t.save(),t.transform(1,0,0,this.ry/this.rx,0,0),t.arc(0,0,this.rx,0,rs,!1),t.restore(),this._renderPaintInOrder(t)}static async fromElement(t,e,n){let i=as(t,this.ATTRIBUTE_NAMES,n);return i.left=(i.left||0)-i.rx,i.top=(i.top||0)-i.ry,new this(i)}};function ZM(s){if(!s)return[];let t=s.replace(/,/g," ").trim().split(/\s+/),e=[];for(let n=0;n<t.length;n+=2)e.push({x:parseFloat(t[n]),y:parseFloat(t[n+1])});return e}j(Os,"type","Ellipse"),j(Os,"cacheProperties",[...os,...d_]),j(Os,"ownDefaults",{rx:0,ry:0}),j(Os,"ATTRIBUTE_NAMES",[...ks,"cx","cy","rx","ry"]),Et.setClass(Os),Et.setSVGClass(Os);var JM=["left","top"],f_={exactBoundingBox:!1},Di=class s extends Je{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),j(this,"strokeDiff",void 0),Object.assign(this,s.ownDefaults),this.setOptions(e),this.points=t;let{left:n,top:i}=e;this.initialized=!0,this.setBoundingBox(!0),typeof n=="number"&&this.set(pe,n),typeof i=="number"&&this.set(Tn,i)}isOpen(){return!0}_projectStrokeOnPoints(t){return H0(this.points,t,this.isOpen())}_calcDimensions(t){t=X({scaleX:this.scaleX,scaleY:this.scaleY,skewX:this.skewX,skewY:this.skewY,strokeLineCap:this.strokeLineCap,strokeLineJoin:this.strokeLineJoin,strokeMiterLimit:this.strokeMiterLimit,strokeUniform:this.strokeUniform,strokeWidth:this.strokeWidth},t||{});let e=this.exactBoundingBox?this._projectStrokeOnPoints(t).map((c=>c.projectedPoint)):this.points;if(e.length===0)return{left:0,top:0,width:0,height:0,pathOffset:new st,strokeOffset:new st,strokeDiff:new st};let n=Fi(e),i=Ka(X(X({},t),{},{scaleX:1,scaleY:1})),r=Fi(this.points.map((c=>un(c,i,!0)))),o=new st(this.scaleX,this.scaleY),a=n.left+n.width/2,l=n.top+n.height/2;return this.exactBoundingBox&&(a-=l*Math.tan(Re(this.skewX)),l-=a*Math.tan(Re(this.skewY))),X(X({},n),{},{pathOffset:new st(a,l),strokeOffset:new st(r.left,r.top).subtract(new st(n.left,n.top)).multiply(o),strokeDiff:new st(n.width,n.height).subtract(new st(r.width,r.height)).multiply(o)})}_findCenterFromElement(){let t=Fi(this.points);return new st(t.left+t.width/2,t.top+t.height/2)}setDimensions(){this.setBoundingBox()}setBoundingBox(t){let{left:e,top:n,width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}=this._calcDimensions();this.set({width:i,height:r,pathOffset:o,strokeOffset:a,strokeDiff:l}),t&&this.setPositionByOrigin(new st(e+i/2,n+r/2),Zt,Zt)}isStrokeAccountedForInDimensions(){return this.exactBoundingBox}_getNonTransformedDimensions(){return this.exactBoundingBox?new st(this.width,this.height):super._getNonTransformedDimensions()}_getTransformedDimensions(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(this.exactBoundingBox){let o;if(Object.keys(t).some((a=>this.strokeUniform||this.constructor.layoutProperties.includes(a)))){var e,n;let{width:a,height:l}=this._calcDimensions(t);o=new st((e=t.width)!==null&&e!==void 0?e:a,(n=t.height)!==null&&n!==void 0?n:l)}else{var i,r;o=new st((i=t.width)!==null&&i!==void 0?i:this.width,(r=t.height)!==null&&r!==void 0?r:this.height)}return o.multiply(new st(t.scaleX||this.scaleX,t.scaleY||this.scaleY))}return super._getTransformedDimensions(t)}_set(t,e){let n=this.initialized&&this[t]!==e,i=super._set(t,e);return this.exactBoundingBox&&n&&((t===vn||t===zn)&&this.strokeUniform&&this.constructor.layoutProperties.includes("strokeUniform")||this.constructor.layoutProperties.includes(t))&&this.setDimensions(),i}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return X(X({},super.toObject(t)),{},{points:this.points.map((e=>{let{x:n,y:i}=e;return{x:n,y:i}}))})}_toSVG(){let t=[],e=this.pathOffset.x,n=this.pathOffset.y,i=he.NUM_FRACTION_DIGITS;for(let r=0,o=this.points.length;r<o;r++)t.push(ye(this.points[r].x-e,i),",",ye(this.points[r].y-n,i)," ");return["<".concat(this.constructor.type.toLowerCase()," "),"COMMON_PARTS",'points="'.concat(t.join(""),`" />
`)]}_render(t){let e=this.points.length,n=this.pathOffset.x,i=this.pathOffset.y;if(e&&!isNaN(this.points[e-1].y)){t.beginPath(),t.moveTo(this.points[0].x-n,this.points[0].y-i);for(let r=0;r<e;r++){let o=this.points[r];t.lineTo(o.x-n,o.y-i)}!this.isOpen()&&t.closePath(),this._renderPaintInOrder(t)}}complexity(){return this.points.length}static async fromElement(t,e,n){return new this(ZM(t.getAttribute("points")),X(X({},Me(as(t,this.ATTRIBUTE_NAMES,n),JM)),e))}static fromObject(t){return this._fromObject(t,{extraParam:"points"})}};j(Di,"ownDefaults",f_),j(Di,"type","Polyline"),j(Di,"layoutProperties",[zo,Vo,"strokeLineCap","strokeLineJoin","strokeMiterLimit","strokeWidth","strokeUniform","points"]),j(Di,"cacheProperties",[...os,"points"]),j(Di,"ATTRIBUTE_NAMES",[...ks]),Et.setClass(Di),Et.setSVGClass(Di);var Ao=class extends Di{isOpen(){return!1}};j(Ao,"ownDefaults",f_),j(Ao,"type","Polygon"),Et.setClass(Ao),Et.setSVGClass(Ao);var Ih=class extends Je{isEmptyStyles(t){if(!this.styles||t!==void 0&&!this.styles[t])return!0;let e=t===void 0?this.styles:{line:this.styles[t]};for(let n in e)for(let i in e[n])for(let r in e[n][i])return!1;return!0}styleHas(t,e){if(!this.styles||e!==void 0&&!this.styles[e])return!1;let n=e===void 0?this.styles:{0:this.styles[e]};for(let i in n)for(let r in n[i])if(n[i][r][t]!==void 0)return!0;return!1}cleanStyle(t){if(!this.styles)return!1;let e=this.styles,n,i,r=0,o=!0,a=0;for(let l in e){n=0;for(let c in e[l]){let h=e[l][c]||{};r++,h[t]!==void 0?(i?h[t]!==i&&(o=!1):i=h[t],h[t]===this[t]&&delete h[t]):o=!1,Object.keys(h).length!==0?n++:delete e[l][c]}n===0&&delete e[l]}for(let l=0;l<this._textLines.length;l++)a+=this._textLines[l].length;o&&r===a&&(this[t]=i,this.removeStyle(t))}removeStyle(t){if(!this.styles)return;let e=this.styles,n,i,r;for(i in e){for(r in n=e[i],n)delete n[r][t],Object.keys(n[r]).length===0&&delete n[r];Object.keys(n).length===0&&delete e[i]}}_extendStyles(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);this._getLineStyle(n)||this._setLineStyle(n);let r=Pf(X(X({},this._getStyleDeclaration(n,i)),e),(o=>o!==void 0));this._setStyleDeclaration(n,i,r)}getSelectionStyles(t,e,n){let i=[];for(let r=t;r<(e||t);r++)i.push(this.getStyleAtPosition(r,n));return i}getStyleAtPosition(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t);return e?this.getCompleteStyleDeclaration(n,i):this._getStyleDeclaration(n,i)}setSelectionStyles(t,e,n){for(let i=e;i<(n||e);i++)this._extendStyles(i,t);this._forceClearCache=!0}_getStyleDeclaration(t,e){var n;let i=this.styles&&this.styles[t];return i&&(n=i[e])!==null&&n!==void 0?n:{}}getCompleteStyleDeclaration(t,e){return X(X({},Ur(this,this.constructor._styleProperties)),this._getStyleDeclaration(t,e))}_setStyleDeclaration(t,e,n){this.styles[t][e]=n}_deleteStyleDeclaration(t,e){delete this.styles[t][e]}_getLineStyle(t){return!!this.styles[t]}_setLineStyle(t){this.styles[t]={}}_deleteLineStyle(t){delete this.styles[t]}};j(Ih,"_styleProperties",A1);var KM=/  +/g,$M=/"/g;function kd(s,t,e,n,i){return"		".concat((function(r,o){let{left:a,top:l,width:c,height:h}=o,u=arguments.length>2&&arguments[2]!==void 0?arguments[2]:he.NUM_FRACTION_DIGITS,d=ja(He,r,!1),[f,p,x,m]=[a,l,c,h].map((g=>ye(g,u)));return"<rect ".concat(d,' x="').concat(f,'" y="').concat(p,'" width="').concat(x,'" height="').concat(m,'"></rect>')})(s,{left:t,top:e,width:n,height:i}),`
`)}var QM=["textAnchor","textDecoration","dx","dy","top","left","fontSize","strokeWidth"],zd,Oe=class s extends Ih{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),j(this,"__charBounds",[]),Object.assign(this,s.ownDefaults),this.setOptions(e),this.styles||(this.styles={}),this.text=t,this.initialized=!0,this.path&&this.setPathInfo(),this.initDimensions(),this.setCoords()}setPathInfo(){let t=this.path;t&&(t.segmentsInfo=Gf(t.path))}_splitText(){let t=this._splitTextIntoLines(this.text);return this.textLines=t.lines,this._textLines=t.graphemeLines,this._unwrappedTextLines=t._unwrappedLines,this._text=t.graphemeText,t}initDimensions(){this._splitText(),this._clearCache(),this.dirty=!0,this.path?(this.width=this.path.width,this.height=this.path.height):(this.width=this.calcTextWidth()||this.cursorWidth||this.MIN_TEXT_WIDTH,this.height=this.calcTextHeight()),this.textAlign.includes(Oi)&&this.enlargeSpaces()}enlargeSpaces(){let t,e,n,i,r,o,a;for(let l=0,c=this._textLines.length;l<c;l++)if((this.textAlign===Oi||l!==c-1&&!this.isEndOfWrapping(l))&&(i=0,r=this._textLines[l],e=this.getLineWidth(l),e<this.width&&(a=this.textLines[l].match(this._reSpacesAndTabs)))){n=a.length,t=(this.width-e)/n;for(let h=0;h<=r.length;h++)o=this.__charBounds[l][h],this._reSpaceAndTab.test(r[h])?(o.width+=t,o.kernedWidth+=t,o.left+=i,i+=t):o.left+=i}}isEndOfWrapping(t){return t===this._textLines.length-1}missingNewlineOffset(t){return 1}get2DCursorLocation(t,e){let n=e?this._unwrappedTextLines:this._textLines,i;for(i=0;i<n.length;i++){if(t<=n[i].length)return{lineIndex:i,charIndex:t};t-=n[i].length+this.missingNewlineOffset(i,e)}return{lineIndex:i-1,charIndex:n[i-1].length<t?n[i-1].length:t}}toString(){return"#<Text (".concat(this.complexity(),'): { "text": "').concat(this.text,'", "fontFamily": "').concat(this.fontFamily,'" }>')}_getCacheCanvasDimensions(){let t=super._getCacheCanvasDimensions(),e=this.fontSize;return t.width+=e*t.zoomX,t.height+=e*t.zoomY,t}_render(t){let e=this.path;e&&!e.isNotVisible()&&e._render(t),this._setTextStyles(t),this._renderTextLinesBackground(t),this._renderTextDecoration(t,"underline"),this._renderText(t),this._renderTextDecoration(t,"overline"),this._renderTextDecoration(t,"linethrough")}_renderText(t){this.paintFirst===En?(this._renderTextStroke(t),this._renderTextFill(t)):(this._renderTextFill(t),this._renderTextStroke(t))}_setTextStyles(t,e,n){if(t.textBaseline="alphabetic",this.path)switch(this.pathAlign){case Zt:t.textBaseline="middle";break;case"ascender":t.textBaseline=Tn;break;case"descender":t.textBaseline=jd}t.font=this._getFontDeclaration(e,n)}calcTextWidth(){let t=this.getLineWidth(0);for(let e=1,n=this._textLines.length;e<n;e++){let i=this.getLineWidth(e);i>t&&(t=i)}return t}_renderTextLine(t,e,n,i,r,o){this._renderChars(t,e,n,i,r,o)}_renderTextLinesBackground(t){if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor"))return;let e=t.fillStyle,n=this._getLeftOffset(),i=this._getTopOffset();for(let r=0,o=this._textLines.length;r<o;r++){let a=this.getHeightOfLine(r);if(!this.textBackgroundColor&&!this.styleHas("textBackgroundColor",r)){i+=a;continue}let l=this._textLines[r].length,c=this._getLineLeftOffset(r),h,u,d=0,f=0,p=this.getValueOfPropertyAt(r,0,"textBackgroundColor"),x=this.getHeightOfLineImpl(r);for(let m=0;m<l;m++){let g=this.__charBounds[r][m];u=this.getValueOfPropertyAt(r,m,"textBackgroundColor"),this.path?(t.save(),t.translate(g.renderLeft,g.renderTop),t.rotate(g.angle),t.fillStyle=u,u&&t.fillRect(-g.width/2,-x*(1-this._fontSizeFraction),g.width,x),t.restore()):u!==p?(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=p,p&&t.fillRect(h,i,d,x),f=g.left,d=g.width,p=u):d+=g.kernedWidth}u&&!this.path&&(h=n+c+f,this.direction==="rtl"&&(h=this.width-h-d),t.fillStyle=u,t.fillRect(h,i,d,x)),i+=a}t.fillStyle=e,this._removeShadow(t)}_measureChar(t,e,n,i){let r=za.getFontCache(e),o=this._getFontDeclaration(e),a=n?n+t:t,l=n&&o===this._getFontDeclaration(i),c=e.fontSize/this.CACHE_FONT_SIZE,h,u,d,f;if(n&&r.has(n)&&(d=r.get(n)),r.has(t)&&(f=h=r.get(t)),l&&r.has(a)&&(u=r.get(a),f=u-d),h===void 0||d===void 0||u===void 0){let p=(function(){return zd||(zd=Vn({width:0,height:0}).getContext("2d")),zd})();this._setTextStyles(p,e,!0),h===void 0&&(f=h=p.measureText(t).width,r.set(t,h)),d===void 0&&l&&n&&(d=p.measureText(n).width,r.set(n,d)),l&&u===void 0&&(u=p.measureText(a).width,r.set(a,u),f=u-d)}return{width:h*c,kernedWidth:f*c}}getHeightOfChar(t,e){return this.getValueOfPropertyAt(t,e,"fontSize")}measureLine(t){let e=this._measureLine(t);return this.charSpacing!==0&&(e.width-=this._getWidthOfCharSpacing()),e.width<0&&(e.width=0),e}_measureLine(t){let e,n,i=0,r=this.pathSide===Le,o=this.path,a=this._textLines[t],l=a.length,c=new Array(l);this.__charBounds[t]=c;for(let h=0;h<l;h++){let u=a[h];n=this._getGraphemeBox(u,t,h,e),c[h]=n,i+=n.kernedWidth,e=u}if(c[l]={left:n?n.left+n.width:0,width:0,kernedWidth:0,height:this.fontSize,deltaY:0},o&&o.segmentsInfo){let h=0,u=o.segmentsInfo[o.segmentsInfo.length-1].length;switch(this.textAlign){case pe:h=r?u-i:0;break;case Zt:h=(u-i)/2;break;case Le:h=r?0:u-i}h+=this.pathStartOffset*(r?-1:1);for(let d=r?l-1:0;r?d>=0:d<l;r?d--:d++)n=c[d],h>u?h%=u:h<0&&(h+=u),this._setGraphemeOnPath(h,n),h+=n.kernedWidth}return{width:i,numOfSpaces:0}}_setGraphemeOnPath(t,e){let n=t+e.kernedWidth/2,i=this.path,r=i_(i.path,n,i.segmentsInfo);e.renderLeft=r.x-i.pathOffset.x,e.renderTop=r.y-i.pathOffset.y,e.angle=r.angle+(this.pathSide===Le?Math.PI:0)}_getGraphemeBox(t,e,n,i,r){let o=this.getCompleteStyleDeclaration(e,n),a=i?this.getCompleteStyleDeclaration(e,n-1):{},l=this._measureChar(t,o,i,a),c,h=l.kernedWidth,u=l.width;this.charSpacing!==0&&(c=this._getWidthOfCharSpacing(),u+=c,h+=c);let d={width:u,left:0,height:o.fontSize,kernedWidth:h,deltaY:o.deltaY};if(n>0&&!r){let f=this.__charBounds[e][n-1];d.left=f.left+f.width+l.kernedWidth-l.width}return d}getHeightOfLineImpl(t){let e=this.__lineHeights;if(e[t])return e[t];let n=this.getHeightOfChar(t,0);for(let i=1,r=this._textLines[t].length;i<r;i++)n=Math.max(this.getHeightOfChar(t,i),n);return e[t]=n*this._fontSizeMult}getHeightOfLine(t){return this.getHeightOfLineImpl(t)*this.lineHeight}calcTextHeight(){let t=0;for(let e=0,n=this._textLines.length;e<n;e++)t+=e===n-1?this.getHeightOfLineImpl(e):this.getHeightOfLine(e);return t}_getLeftOffset(){return this.direction==="ltr"?-this.width/2:this.width/2}_getTopOffset(){return-this.height/2}_renderTextCommon(t,e){t.save();let n=0,i=this._getLeftOffset(),r=this._getTopOffset();for(let o=0,a=this._textLines.length;o<a;o++)this._renderTextLine(e,t,this._textLines[o],i+this._getLineLeftOffset(o),r+n+this.getHeightOfLineImpl(o),o),n+=this.getHeightOfLine(o);t.restore()}_renderTextFill(t){(this.fill||this.styleHas(He))&&this._renderTextCommon(t,"fillText")}_renderTextStroke(t){(this.stroke&&this.strokeWidth!==0||!this.isEmptyStyles())&&(this.shadow&&!this.shadow.affectStroke&&this._removeShadow(t),t.save(),this._setLineDash(t,this.strokeDashArray),t.beginPath(),this._renderTextCommon(t,"strokeText"),t.closePath(),t.restore())}_renderChars(t,e,n,i,r,o){let a=this.textAlign.includes(Oi),l=this.path,c=!a&&this.charSpacing===0&&this.isEmptyStyles(o)&&!l,h=this.direction==="ltr",u=this.direction==="ltr"?1:-1,d=e.direction,f,p,x,m,g,S="",P=0;if(e.save(),d!==this.direction&&(e.canvas.setAttribute("dir",h?"ltr":"rtl"),e.direction=h?"ltr":"rtl",e.textAlign=h?pe:Le),r-=this.getHeightOfLineImpl(o)*this._fontSizeFraction,c)return this._renderChar(t,e,o,0,n.join(""),i,r),void e.restore();for(let T=0,A=n.length-1;T<=A;T++)m=T===A||this.charSpacing||l,S+=n[T],x=this.__charBounds[o][T],P===0?(i+=u*(x.kernedWidth-x.width),P+=x.width):P+=x.kernedWidth,a&&!m&&this._reSpaceAndTab.test(n[T])&&(m=!0),m||(f=f||this.getCompleteStyleDeclaration(o,T),p=this.getCompleteStyleDeclaration(o,T+1),m=Yh(f,p,!1)),m&&(l?(e.save(),e.translate(x.renderLeft,x.renderTop),e.rotate(x.angle),this._renderChar(t,e,o,T,S,-P/2,0),e.restore()):(g=i,this._renderChar(t,e,o,T,S,g,r)),S="",f=p,i+=u*P,P=0);e.restore()}_applyPatternGradientTransformText(t){let e=this.width+this.strokeWidth,n=this.height+this.strokeWidth,i=Vn({width:e,height:n}),r=i.getContext("2d");return i.width=e,i.height=n,r.beginPath(),r.moveTo(0,0),r.lineTo(e,0),r.lineTo(e,n),r.lineTo(0,n),r.closePath(),r.translate(e/2,n/2),r.fillStyle=t.toLive(r),this._applyPatternGradientTransform(r,t),r.fill(),r.createPattern(i,"no-repeat")}handleFiller(t,e,n){let i,r;return Jn(n)?n.gradientUnits==="percentage"||n.gradientTransform||n.patternTransform?(i=-this.width/2,r=-this.height/2,t.translate(i,r),t[e]=this._applyPatternGradientTransformText(n),{offsetX:i,offsetY:r}):(t[e]=n.toLive(t),this._applyPatternGradientTransform(t,n)):(t[e]=n,{offsetX:0,offsetY:0})}_setStrokeStyles(t,e){let{stroke:n,strokeWidth:i}=e;return t.lineWidth=i,t.lineCap=this.strokeLineCap,t.lineDashOffset=this.strokeDashOffset,t.lineJoin=this.strokeLineJoin,t.miterLimit=this.strokeMiterLimit,this.handleFiller(t,"strokeStyle",n)}_setFillStyles(t,e){let{fill:n}=e;return this.handleFiller(t,"fillStyle",n)}_renderChar(t,e,n,i,r,o,a){let l=this._getStyleDeclaration(n,i),c=this.getCompleteStyleDeclaration(n,i),h=t==="fillText"&&c.fill,u=t==="strokeText"&&c.stroke&&c.strokeWidth;if(u||h){if(e.save(),e.font=this._getFontDeclaration(c),l.textBackgroundColor&&this._removeShadow(e),l.deltaY&&(a+=l.deltaY),h){let d=this._setFillStyles(e,c);e.fillText(r,o-d.offsetX,a-d.offsetY)}if(u){let d=this._setStrokeStyles(e,c);e.strokeText(r,o-d.offsetX,a-d.offsetY)}e.restore()}}setSuperscript(t,e){this._setScript(t,e,this.superscript)}setSubscript(t,e){this._setScript(t,e,this.subscript)}_setScript(t,e,n){let i=this.get2DCursorLocation(t,!0),r=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"fontSize"),o=this.getValueOfPropertyAt(i.lineIndex,i.charIndex,"deltaY"),a={fontSize:r*n.size,deltaY:o+r*n.baseline};this.setSelectionStyles(a,t,e)}_getLineLeftOffset(t){let e=this.getLineWidth(t),n=this.width-e,i=this.textAlign,r=this.direction,o=this.isEndOfWrapping(t),a=0;return i===Oi||i===Wa&&!o||i===Ha&&!o||i===vh&&!o?0:(i===Zt&&(a=n/2),i===Le&&(a=n),i===Wa&&(a=n/2),i===Ha&&(a=n),r==="rtl"&&(i===Le||i===Oi||i===Ha?a=0:i===pe||i===vh?a=-n:i!==Zt&&i!==Wa||(a=-n/2)),a)}_clearCache(){this._forceClearCache=!1,this.__lineWidths=[],this.__lineHeights=[],this.__charBounds=[]}getLineWidth(t){if(this.__lineWidths[t]!==void 0)return this.__lineWidths[t];let{width:e}=this.measureLine(t);return this.__lineWidths[t]=e,e}_getWidthOfCharSpacing(){return this.charSpacing!==0?this.fontSize*this.charSpacing/1e3:0}getValueOfPropertyAt(t,e,n){var i;return(i=this._getStyleDeclaration(t,e)[n])!==null&&i!==void 0?i:this[n]}_renderTextDecoration(t,e){if(!this[e]&&!this.styleHas(e))return;let n=this._getTopOffset(),i=this._getLeftOffset(),r=this.path,o=this._getWidthOfCharSpacing(),a=e==="linethrough"?.5:e==="overline"?1:0,l=this.offsets[e];for(let c=0,h=this._textLines.length;c<h;c++){let u=this.getHeightOfLine(c);if(!this[e]&&!this.styleHas(e,c)){n+=u;continue}let d=this._textLines[c],f=u/this.lineHeight,p=this._getLineLeftOffset(c),x=0,m=0,g=this.getValueOfPropertyAt(c,0,e),S=this.getValueOfPropertyAt(c,0,He),P=this.getValueOfPropertyAt(c,0,Or),T=g,A=S,D=P,_=n+f*(1-this._fontSizeFraction),y=this.getHeightOfChar(c,0),C=this.getValueOfPropertyAt(c,0,"deltaY");for(let L=0,G=d.length;L<G;L++){let O=this.__charBounds[c][L];T=this.getValueOfPropertyAt(c,L,e),A=this.getValueOfPropertyAt(c,L,He),D=this.getValueOfPropertyAt(c,L,Or);let Z=this.getHeightOfChar(c,L),$=this.getValueOfPropertyAt(c,L,"deltaY");if(r&&T&&A){let z=this.fontSize*D/1e3;t.save(),t.fillStyle=S,t.translate(O.renderLeft,O.renderTop),t.rotate(O.angle),t.fillRect(-O.kernedWidth/2,l*Z+$-a*z,O.kernedWidth,z),t.restore()}else if((T!==g||A!==S||Z!==y||D!==P||$!==C)&&m>0){let z=this.fontSize*P/1e3,F=i+p+x;this.direction==="rtl"&&(F=this.width-F-m),g&&S&&P&&(t.fillStyle=S,t.fillRect(F,_+l*y+C-a*z,m,z)),x=O.left,m=O.width,g=T,P=D,S=A,y=Z,C=$}else m+=O.kernedWidth}let E=i+p+x;this.direction==="rtl"&&(E=this.width-E-m),t.fillStyle=A;let R=this.fontSize*D/1e3;T&&A&&D&&t.fillRect(E,_+l*y+C-a*R,m-o,R),n+=u}this._removeShadow(t)}_getFontDeclaration(){let{fontFamily:t=this.fontFamily,fontStyle:e=this.fontStyle,fontWeight:n=this.fontWeight,fontSize:i=this.fontSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=t.includes("'")||t.includes('"')||t.includes(",")||s.genericFonts.includes(t.toLowerCase())?t:'"'.concat(t,'"');return[e,n,"".concat(r?this.CACHE_FONT_SIZE:i,"px"),o].join(" ")}render(t){this.visible&&(this.canvas&&this.canvas.skipOffscreen&&!this.group&&!this.isOnScreen()||(this._forceClearCache&&this.initDimensions(),super.render(t)))}graphemeSplit(t){return jh(t)}_splitTextIntoLines(t){let e=t.split(this._reNewline),n=new Array(e.length),i=[`
`],r=[];for(let o=0;o<e.length;o++)n[o]=this.graphemeSplit(e[o]),r=r.concat(n[o],i);return r.pop(),{_unwrappedLines:n,lines:e,graphemeText:r,graphemeLines:n}}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return X(X({},super.toObject([...S0,...t])),{},{styles:X0(this.styles,this.text)},this.path?{path:this.path.toObject()}:{})}set(t,e){let{textLayoutProperties:n}=this.constructor;super.set(t,e);let i=!1,r=!1;if(typeof t=="object")for(let o in t)o==="path"&&this.setPathInfo(),i=i||n.includes(o),r=r||o==="path";else i=n.includes(t),r=t==="path";return r&&this.setPathInfo(),i&&this.initialized&&(this.initDimensions(),this.setCoords()),this}complexity(){return 1}static async fromElement(t,e,n){let i=as(t,s.ATTRIBUTE_NAMES,n),r=X(X({},e),i),{textAnchor:o=pe,textDecoration:a="",dx:l=0,dy:c=0,top:h=0,left:u=0,fontSize:d=bf,strokeWidth:f=1}=r,p=Me(r,QM),x=new this(_h(t.textContent||"").trim(),X({left:u+l,top:h+c,underline:a.includes("underline"),overline:a.includes("overline"),linethrough:a.includes("line-through"),strokeWidth:0,fontSize:d},p)),m=x.getScaledHeight()/x.height,g=((x.height+x.strokeWidth)*x.lineHeight-x.height)*m,S=x.getScaledHeight()+g,P=0;return o===Zt&&(P=x.getScaledWidth()/2),o===Le&&(P=x.getScaledWidth()),x.set({left:x.left-P,top:x.top-(S-x.fontSize*(.07+x._fontSizeFraction))/x.lineHeight,strokeWidth:f}),x}static fromObject(t){return this._fromObject(X(X({},t),{},{styles:j0(t.styles||{},t.text)}),{extraParam:"text"})}};j(Oe,"textLayoutProperties",y0),j(Oe,"cacheProperties",[...os,...S0]),j(Oe,"ownDefaults",R1),j(Oe,"type","Text"),j(Oe,"genericFonts",["serif","sans-serif","monospace","cursive","fantasy","system-ui","ui-serif","ui-sans-serif","ui-monospace","ui-rounded","math","emoji","fangsong"]),j(Oe,"ATTRIBUTE_NAMES",ks.concat("x","y","dx","dy","font-family","font-style","font-weight","font-size","letter-spacing","text-decoration","text-anchor")),V0(Oe,[class extends xh{_toSVG(){let s=this._getSVGLeftTopOffsets(),t=this._getSVGTextAndBg(s.textTop,s.textLeft);return this._wrapSVGTextAndBg(t)}toSVG(s){let t=this._createBaseSVGMarkup(this._toSVG(),{reviver:s,noStyle:!0,withShadow:!0}),e=this.path;return e?t+e._createBaseSVGMarkup(e._toSVG(),{reviver:s,withShadow:!0,additionalTransform:Fo(this.calcOwnMatrix())}):t}_getSVGLeftTopOffsets(){return{textLeft:-this.width/2,textTop:-this.height/2,lineTop:this.getHeightOfLine(0)}}_wrapSVGTextAndBg(s){let{textBgRects:t,textSpans:e}=s,n=this.getSvgTextDecoration(this);return[t.join(""),'		<text xml:space="preserve" ','font-family="'.concat(this.fontFamily.replace($M,"'"),'" '),'font-size="'.concat(this.fontSize,'" '),this.fontStyle?'font-style="'.concat(this.fontStyle,'" '):"",this.fontWeight?'font-weight="'.concat(this.fontWeight,'" '):"",n?'text-decoration="'.concat(n,'" '):"",this.direction==="rtl"?'direction="'.concat(this.direction,'" '):"",'style="',this.getSvgStyles(!0),'"',this.addPaintOrder()," >",e.join(""),`</text>
`]}_getSVGTextAndBg(s,t){let e=[],n=[],i,r=s;this.backgroundColor&&n.push(...kd(this.backgroundColor,-this.width/2,-this.height/2,this.width,this.height));for(let o=0,a=this._textLines.length;o<a;o++)i=this._getLineLeftOffset(o),this.direction==="rtl"&&(i+=this.width),(this.textBackgroundColor||this.styleHas("textBackgroundColor",o))&&this._setSVGTextLineBg(n,o,t+i,r),this._setSVGTextLineText(e,o,t+i,r),r+=this.getHeightOfLine(o);return{textSpans:e,textBgRects:n}}_createTextCharSpan(s,t,e,n,i){let r=he.NUM_FRACTION_DIGITS,o=this.getSvgSpanStyles(t,s!==s.trim()||!!s.match(KM)),a=o?'style="'.concat(o,'"'):"",l=t.deltaY,c=l?' dy="'.concat(ye(l,r),'" '):"",{angle:h,renderLeft:u,renderTop:d,width:f}=i,p="";if(u!==void 0){let x=f/2;h&&(p=' rotate="'.concat(ye(Bi(h),r),'"'));let m=Nr({angle:Bi(h)});m[4]=u,m[5]=d;let g=new st(-x,0).transform(m);e=g.x,n=g.y}return'<tspan x="'.concat(ye(e,r),'" y="').concat(ye(n,r),'" ').concat(c).concat(p).concat(a,">").concat(W0(s),"</tspan>")}_setSVGTextLineText(s,t,e,n){let i=this.getHeightOfLine(t),r=this.textAlign.includes(Oi),o=this._textLines[t],a,l,c,h,u,d="",f=0;n+=i*(1-this._fontSizeFraction)/this.lineHeight;for(let p=0,x=o.length-1;p<=x;p++)u=p===x||this.charSpacing||this.path,d+=o[p],c=this.__charBounds[t][p],f===0?(e+=c.kernedWidth-c.width,f+=c.width):f+=c.kernedWidth,r&&!u&&this._reSpaceAndTab.test(o[p])&&(u=!0),u||(a=a||this.getCompleteStyleDeclaration(t,p),l=this.getCompleteStyleDeclaration(t,p+1),u=Yh(a,l,!0)),u&&(h=this._getStyleDeclaration(t,p),s.push(this._createTextCharSpan(d,h,e,n,c)),d="",a=l,this.direction==="rtl"?e-=f:e+=f,f=0)}_setSVGTextLineBg(s,t,e,n){let i=this._textLines[t],r=this.getHeightOfLine(t)/this.lineHeight,o,a=0,l=0,c=this.getValueOfPropertyAt(t,0,"textBackgroundColor");for(let h=0;h<i.length;h++){let{left:u,width:d,kernedWidth:f}=this.__charBounds[t][h];o=this.getValueOfPropertyAt(t,h,"textBackgroundColor"),o!==c?(c&&s.push(...kd(c,e+l,n,a,r)),l=u,a=d,c=o):a+=f}o&&s.push(...kd(c,e+l,n,a,r))}_getSVGLineTopOffset(s){let t,e=0;for(t=0;t<s;t++)e+=this.getHeightOfLine(t);let n=this.getHeightOfLine(t);return{lineTop:e,offset:(this._fontSizeMult-this._fontSizeFraction)*n/(this.lineHeight*this._fontSizeMult)}}getSvgStyles(s){return"".concat(super.getSvgStyles(s)," text-decoration-thickness: ").concat(ye(this.textDecorationThickness*this.getObjectScaling().y/10,he.NUM_FRACTION_DIGITS),"%; white-space: pre;")}getSvgSpanStyles(s,t){let{fontFamily:e,strokeWidth:n,stroke:i,fill:r,fontSize:o,fontStyle:a,fontWeight:l,deltaY:c,textDecorationThickness:h,linethrough:u,overline:d,underline:f}=s,p=this.getSvgTextDecoration({underline:f??this.underline,overline:d??this.overline,linethrough:u??this.linethrough}),x=h||this.textDecorationThickness;return[i?ja(En,i):"",n?"stroke-width: ".concat(n,"; "):"",e?"font-family: ".concat(e.includes("'")||e.includes('"')?e:"'".concat(e,"'"),"; "):"",o?"font-size: ".concat(o,"px; "):"",a?"font-style: ".concat(a,"; "):"",l?"font-weight: ".concat(l,"; "):"",p?"text-decoration: ".concat(p,"; text-decoration-thickness: ").concat(ye(x*this.getObjectScaling().y/10,he.NUM_FRACTION_DIGITS),"%; "):"",r?ja(He,r):"",c?"baseline-shift: ".concat(-c,"; "):"",t?"white-space: pre; ":""].join("")}getSvgTextDecoration(s){return["overline","underline","line-through"].filter((t=>s[t.replace("-","")])).join(" ")}}]),Et.setClass(Oe),Et.setSVGClass(Oe);var ff=class{constructor(t){j(this,"target",void 0),j(this,"__mouseDownInPlace",!1),j(this,"__dragStartFired",!1),j(this,"__isDraggingOver",!1),j(this,"__dragStartSelection",void 0),j(this,"__dragImageDisposer",void 0),j(this,"_dispose",void 0),this.target=t;let e=[this.target.on("dragenter",this.dragEnterHandler.bind(this)),this.target.on("dragover",this.dragOverHandler.bind(this)),this.target.on("dragleave",this.dragLeaveHandler.bind(this)),this.target.on("dragend",this.dragEndHandler.bind(this)),this.target.on("drop",this.dropHandler.bind(this))];this._dispose=()=>{e.forEach((n=>n())),this._dispose=void 0}}isPointerOverSelection(t){let e=this.target,n=e.getSelectionStartFromPointer(t);return e.isEditing&&n>=e.selectionStart&&n<=e.selectionEnd&&e.selectionStart<e.selectionEnd}start(t){return this.__mouseDownInPlace=this.isPointerOverSelection(t)}isActive(){return this.__mouseDownInPlace}end(t){let e=this.isActive();return e&&!this.__dragStartFired&&(this.target.setCursorByClick(t),this.target.initDelayedCursor(!0)),this.__mouseDownInPlace=!1,this.__dragStartFired=!1,this.__isDraggingOver=!1,e}getDragStartSelection(){return this.__dragStartSelection}setDragImage(t,e){var n;let{selectionStart:i,selectionEnd:r}=e,o=this.target,a=o.canvas,l=new st(o.flipX?-1:1,o.flipY?-1:1),c=o._getCursorBoundaries(i),h=new st(c.left+c.leftOffset,c.top+c.topOffset).multiply(l).transform(o.calcTransformMatrix()),u=a.getScenePoint(t).subtract(h),d=o.getCanvasRetinaScaling(),f=o.getBoundingRect(),p=h.subtract(new st(f.left,f.top)),x=a.viewportTransform,m=p.add(u).transform(x,!0),g=o.backgroundColor,S=kf(o.styles);o.backgroundColor="";let P={stroke:"transparent",fill:"transparent",textBackgroundColor:"transparent"};o.setSelectionStyles(P,0,i),o.setSelectionStyles(P,r,o.text.length),o.dirty=!0;let T=o.toCanvasElement({enableRetinaScaling:a.enableRetinaScaling,viewportTransform:!0});o.backgroundColor=g,o.styles=S,o.dirty=!0,Ph(T,{position:"fixed",left:"".concat(-T.width,"px"),border:Cn,width:"".concat(T.width/d,"px"),height:"".concat(T.height/d,"px")}),this.__dragImageDisposer&&this.__dragImageDisposer(),this.__dragImageDisposer=()=>{T.remove()},di(t.target||this.target.hiddenTextarea).body.appendChild(T),(n=t.dataTransfer)===null||n===void 0||n.setDragImage(T,m.x,m.y)}onDragStart(t){this.__dragStartFired=!0;let e=this.target,n=this.isActive();if(n&&t.dataTransfer){let i=this.__dragStartSelection={selectionStart:e.selectionStart,selectionEnd:e.selectionEnd},r=e._text.slice(i.selectionStart,i.selectionEnd).join(""),o=X({text:e.text,value:r},i);t.dataTransfer.setData("text/plain",r),t.dataTransfer.setData("application/fabric",JSON.stringify({value:r,styles:e.getSelectionStyles(i.selectionStart,i.selectionEnd,!0)})),t.dataTransfer.effectAllowed="copyMove",this.setDragImage(t,o)}return e.abortCursorAnimation(),n}canDrop(t){if(this.target.editable&&!this.target.getActiveControl()&&!t.defaultPrevented){if(this.isActive()&&this.__dragStartSelection){let e=this.target.getSelectionStartFromPointer(t),n=this.__dragStartSelection;return e<n.selectionStart||e>n.selectionEnd}return!0}return!1}targetCanDrop(t){return this.target.canDrop(t)}dragEnterHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n&&(this.__isDraggingOver=!0)}dragOverHandler(t){let{e}=t,n=this.targetCanDrop(e);!this.__isDraggingOver&&n?this.__isDraggingOver=!0:this.__isDraggingOver&&!n&&(this.__isDraggingOver=!1),this.__isDraggingOver&&(e.preventDefault(),t.canDrop=!0,t.dropTarget=this.target)}dragLeaveHandler(){(this.__isDraggingOver||this.isActive())&&(this.__isDraggingOver=!1)}dropHandler(t){var e;let{e:n}=t,i=n.defaultPrevented;this.__isDraggingOver=!1,n.preventDefault();let r=(e=n.dataTransfer)===null||e===void 0?void 0:e.getData("text/plain");if(r&&!i){let o=this.target,a=o.canvas,l=o.getSelectionStartFromPointer(n),{styles:c}=n.dataTransfer.types.includes("application/fabric")?JSON.parse(n.dataTransfer.getData("application/fabric")):{},h=r[Math.max(0,r.length-1)],u=0;if(this.__dragStartSelection){let d=this.__dragStartSelection.selectionStart,f=this.__dragStartSelection.selectionEnd;l>d&&l<=f?l=d:l>f&&(l-=f-d),o.removeChars(d,f),delete this.__dragStartSelection}o._reNewline.test(h)&&(o._reNewline.test(o._text[l])||l===o._text.length)&&(r=r.trimEnd()),t.didDrop=!0,t.dropTarget=o,o.insertChars(r,c,l),a.setActiveObject(o),o.enterEditing(n),o.selectionStart=Math.min(l+u,o._text.length),o.selectionEnd=Math.min(o.selectionStart+r.length,o._text.length),o.hiddenTextarea.value=o.text,o._updateTextarea(),o.hiddenTextarea.focus(),o.fire(hh,{index:l+u,action:"drop"}),a.fire("text:changed",{target:o}),a.contextTopDirty=!0,a.requestRenderAll()}}dragEndHandler(t){let{e}=t;if(this.isActive()&&this.__dragStartFired&&this.__dragStartSelection){var n;let i=this.target,r=this.target.canvas,{selectionStart:o,selectionEnd:a}=this.__dragStartSelection,l=((n=e.dataTransfer)===null||n===void 0?void 0:n.dropEffect)||Cn;l===Cn?(i.selectionStart=o,i.selectionEnd=a,i._updateTextarea(),i.hiddenTextarea.focus()):(i.clearContextTop(),l==="move"&&(i.removeChars(o,a),i.selectionStart=i.selectionEnd=o,i.hiddenTextarea&&(i.hiddenTextarea.value=i.text),i._updateTextarea(),i.fire(hh,{index:o,action:"dragend"}),r.fire("text:changed",{target:i}),r.requestRenderAll()),i.exitEditing())}this.__dragImageDisposer&&this.__dragImageDisposer(),delete this.__dragImageDisposer,delete this.__dragStartSelection,this.__isDraggingOver=!1}dispose(){this._dispose&&this._dispose()}},Wg=/[ \n\.,;!\?\-]/,pf=class extends Oe{constructor(){super(...arguments),j(this,"_currentCursorOpacity",1)}initBehavior(){this._tick=this._tick.bind(this),this._onTickComplete=this._onTickComplete.bind(this),this.updateSelectionOnMouseMove=this.updateSelectionOnMouseMove.bind(this)}onDeselect(t){return this.isEditing&&this.exitEditing(),this.selected=!1,super.onDeselect(t)}_animateCursor(t){let{toValue:e,duration:n,delay:i,onComplete:r}=t;return Nf({startValue:this._currentCursorOpacity,endValue:e,duration:n,delay:i,onComplete:r,abort:()=>!this.canvas||this.selectionStart!==this.selectionEnd,onChange:o=>{this._currentCursorOpacity=o,this.renderCursorOrSelection()}})}_tick(t){this._currentTickState=this._animateCursor({toValue:0,duration:this.cursorDuration/2,delay:Math.max(t||0,100),onComplete:this._onTickComplete})}_onTickComplete(){var t;(t=this._currentTickCompleteState)===null||t===void 0||t.abort(),this._currentTickCompleteState=this._animateCursor({toValue:1,duration:this.cursorDuration,onComplete:this._tick})}initDelayedCursor(t){this.abortCursorAnimation(),this._tick(t?0:this.cursorDelay)}abortCursorAnimation(){let t=!1;[this._currentTickState,this._currentTickCompleteState].forEach((e=>{e&&!e.isDone()&&(t=!0,e.abort())})),this._currentCursorOpacity=1,t&&this.clearContextTop()}restartCursorIfNeeded(){[this._currentTickState,this._currentTickCompleteState].some((t=>!t||t.isDone()))&&this.initDelayedCursor()}selectAll(){return this.selectionStart=0,this.selectionEnd=this._text.length,this._fireSelectionChanged(),this._updateTextarea(),this}cmdAll(){this.selectAll(),this.renderCursorOrSelection()}getSelectedText(){return this._text.slice(this.selectionStart,this.selectionEnd).join("")}findWordBoundaryLeft(t){let e=0,n=t-1;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n--;for(;/\S/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findWordBoundaryRight(t){let e=0,n=t;if(this._reSpace.test(this._text[n]))for(;this._reSpace.test(this._text[n]);)e++,n++;for(;/\S/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}findLineBoundaryLeft(t){let e=0,n=t-1;for(;!/\n/.test(this._text[n])&&n>-1;)e++,n--;return t-e}findLineBoundaryRight(t){let e=0,n=t;for(;!/\n/.test(this._text[n])&&n<this._text.length;)e++,n++;return t+e}searchWordBoundary(t,e){let n=this._text,i=t>0&&this._reSpace.test(n[t])&&(e===-1||!Mf.test(n[t-1]))?t-1:t,r=n[i];for(;i>0&&i<n.length&&!Wg.test(r);)i+=e,r=n[i];return e===-1&&Wg.test(r)&&i++,i}selectWord(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.searchWordBoundary(t,-1),i=Math.max(n,this.searchWordBoundary(t,1));this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()}selectLine(t){var e;t=(e=t)!==null&&e!==void 0?e:this.selectionStart;let n=this.findLineBoundaryLeft(t),i=this.findLineBoundaryRight(t);this.selectionStart=n,this.selectionEnd=i,this._fireSelectionChanged(),this._updateTextarea()}enterEditing(t){!this.isEditing&&this.editable&&(this.enterEditingImpl(),this.fire("editing:entered",t?{e:t}:void 0),this._fireSelectionChanged(),this.canvas&&(this.canvas.fire("text:editing:entered",{target:this,e:t}),this.canvas.requestRenderAll()))}enterEditingImpl(){this.canvas&&(this.canvas.calcOffset(),this.canvas.textEditingManager.exitTextEditing()),this.isEditing=!0,this.initHiddenTextarea(),this.hiddenTextarea.focus(),this.hiddenTextarea.value=this.text,this._updateTextarea(),this._saveEditingProps(),this._setEditingProps(),this._textBeforeEdit=this.text,this._tick()}updateSelectionOnMouseMove(t){if(this.getActiveControl())return;let e=this.hiddenTextarea;di(e).activeElement!==e&&e.focus();let n=this.getSelectionStartFromPointer(t),i=this.selectionStart,r=this.selectionEnd;(n===this.__selectionStartOnMouseDown&&i!==r||i!==n&&r!==n)&&(n>this.__selectionStartOnMouseDown?(this.selectionStart=this.__selectionStartOnMouseDown,this.selectionEnd=n):(this.selectionStart=n,this.selectionEnd=this.__selectionStartOnMouseDown),this.selectionStart===i&&this.selectionEnd===r||(this._fireSelectionChanged(),this._updateTextarea(),this.renderCursorOrSelection()))}_setEditingProps(){this.hoverCursor="text",this.canvas&&(this.canvas.defaultCursor=this.canvas.moveCursor="text"),this.borderColor=this.editingBorderColor,this.hasControls=this.selectable=!1,this.lockMovementX=this.lockMovementY=!0}fromStringToGraphemeSelection(t,e,n){let i=n.slice(0,t),r=this.graphemeSplit(i).length;if(t===e)return{selectionStart:r,selectionEnd:r};let o=n.slice(t,e);return{selectionStart:r,selectionEnd:r+this.graphemeSplit(o).length}}fromGraphemeToStringSelection(t,e,n){let i=n.slice(0,t).join("").length;return t===e?{selectionStart:i,selectionEnd:i}:{selectionStart:i,selectionEnd:i+n.slice(t,e).join("").length}}_updateTextarea(){if(this.cursorOffsetCache={},this.hiddenTextarea){if(!this.inCompositionMode){let t=this.fromGraphemeToStringSelection(this.selectionStart,this.selectionEnd,this._text);this.hiddenTextarea.selectionStart=t.selectionStart,this.hiddenTextarea.selectionEnd=t.selectionEnd}this.updateTextareaPosition()}}updateFromTextArea(){if(!this.hiddenTextarea)return;this.cursorOffsetCache={};let t=this.hiddenTextarea;this.text=t.value,this.set("dirty",!0),this.initDimensions(),this.setCoords();let e=this.fromStringToGraphemeSelection(t.selectionStart,t.selectionEnd,t.value);this.selectionEnd=this.selectionStart=e.selectionEnd,this.inCompositionMode||(this.selectionStart=e.selectionStart),this.updateTextareaPosition()}updateTextareaPosition(){if(this.selectionStart===this.selectionEnd){let t=this._calcTextareaPosition();this.hiddenTextarea.style.left=t.left,this.hiddenTextarea.style.top=t.top}}_calcTextareaPosition(){if(!this.canvas)return{left:"1px",top:"1px"};let t=this.inCompositionMode?this.compositionStart:this.selectionStart,e=this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex,o=this.getValueOfPropertyAt(i,r,"fontSize")*this.lineHeight,a=e.leftOffset,l=this.getCanvasRetinaScaling(),c=this.canvas.upperCanvasEl,h=c.width/l,u=c.height/l,d=h-o,f=u-o,p=new st(e.left+a,e.top+e.topOffset+o).transform(this.calcTransformMatrix()).transform(this.canvas.viewportTransform).multiply(new st(c.clientWidth/h,c.clientHeight/u));return p.x<0&&(p.x=0),p.x>d&&(p.x=d),p.y<0&&(p.y=0),p.y>f&&(p.y=f),p.x+=this.canvas._offset.left,p.y+=this.canvas._offset.top,{left:"".concat(p.x,"px"),top:"".concat(p.y,"px"),fontSize:"".concat(o,"px"),charHeight:o}}_saveEditingProps(){this._savedProps={hasControls:this.hasControls,borderColor:this.borderColor,lockMovementX:this.lockMovementX,lockMovementY:this.lockMovementY,hoverCursor:this.hoverCursor,selectable:this.selectable,defaultCursor:this.canvas&&this.canvas.defaultCursor,moveCursor:this.canvas&&this.canvas.moveCursor}}_restoreEditingProps(){this._savedProps&&(this.hoverCursor=this._savedProps.hoverCursor,this.hasControls=this._savedProps.hasControls,this.borderColor=this._savedProps.borderColor,this.selectable=this._savedProps.selectable,this.lockMovementX=this._savedProps.lockMovementX,this.lockMovementY=this._savedProps.lockMovementY,this.canvas&&(this.canvas.defaultCursor=this._savedProps.defaultCursor||this.canvas.defaultCursor,this.canvas.moveCursor=this._savedProps.moveCursor||this.canvas.moveCursor),delete this._savedProps)}_exitEditing(){let t=this.hiddenTextarea;this.selected=!1,this.isEditing=!1,t&&(t.blur&&t.blur(),t.parentNode&&t.parentNode.removeChild(t)),this.hiddenTextarea=null,this.abortCursorAnimation(),this.selectionStart!==this.selectionEnd&&this.clearContextTop()}exitEditingImpl(){this._exitEditing(),this.selectionEnd=this.selectionStart,this._restoreEditingProps(),this._forceClearCache&&(this.initDimensions(),this.setCoords())}exitEditing(){let t=this._textBeforeEdit!==this.text;return this.exitEditingImpl(),this.fire("editing:exited"),t&&this.fire(uh),this.canvas&&(this.canvas.fire("text:editing:exited",{target:this}),t&&this.canvas.fire("object:modified",{target:this})),this}_removeExtraneousStyles(){for(let t in this.styles)this._textLines[t]||delete this.styles[t]}removeStyleFromTo(t,e){let{lineIndex:n,charIndex:i}=this.get2DCursorLocation(t,!0),{lineIndex:r,charIndex:o}=this.get2DCursorLocation(e,!0);if(n!==r){if(this.styles[n])for(let a=i;a<this._unwrappedTextLines[n].length;a++)delete this.styles[n][a];if(this.styles[r])for(let a=o;a<this._unwrappedTextLines[r].length;a++){let l=this.styles[r][a];l&&(this.styles[n]||(this.styles[n]={}),this.styles[n][i+a-o]=l)}for(let a=n+1;a<=r;a++)delete this.styles[a];this.shiftLineStyles(r,n-r)}else if(this.styles[n]){let a=this.styles[n],l=o-i;for(let c=i;c<o;c++)delete a[c];for(let c in this.styles[n]){let h=parseInt(c,10);h>=o&&(a[h-l]=a[c],delete a[c])}}}shiftLineStyles(t,e){let n=Object.assign({},this.styles);for(let i in this.styles){let r=parseInt(i,10);r>t&&(this.styles[r+e]=n[r],n[r-e]||delete this.styles[r])}}insertNewlineStyleObject(t,e,n,i){let r={},o=this._unwrappedTextLines[t].length,a=o===e,l=!1;n||(n=1),this.shiftLineStyles(t,n);let c=this.styles[t]?this.styles[t][e===0?e:e-1]:void 0;for(let u in this.styles[t]){let d=parseInt(u,10);d>=e&&(l=!0,r[d-e]=this.styles[t][u],a&&e===0||delete this.styles[t][u])}let h=!1;for(l&&!a&&(this.styles[t+n]=r,h=!0),(h||o>e)&&n--;n>0;)i&&i[n-1]?this.styles[t+n]={0:X({},i[n-1])}:c?this.styles[t+n]={0:X({},c)}:delete this.styles[t+n],n--;this._forceClearCache=!0}insertCharStyleObject(t,e,n,i){this.styles||(this.styles={});let r=this.styles[t],o=r?X({},r):{};n||(n=1);for(let l in o){let c=parseInt(l,10);c>=e&&(r[c+n]=o[c],o[c-n]||delete r[c])}if(this._forceClearCache=!0,i){for(;n--;)Object.keys(i[n]).length&&(this.styles[t]||(this.styles[t]={}),this.styles[t][e+n]=X({},i[n]));return}if(!r)return;let a=r[e?e-1:1];for(;a&&n--;)this.styles[t][e+n]=X({},a)}insertNewStyleBlock(t,e,n){let i=this.get2DCursorLocation(e,!0),r=[0],o,a=0;for(let l=0;l<t.length;l++)t[l]===`
`?(a++,r[a]=0):r[a]++;for(r[0]>0&&(this.insertCharStyleObject(i.lineIndex,i.charIndex,r[0],n),n=n&&n.slice(r[0]+1)),a&&this.insertNewlineStyleObject(i.lineIndex,i.charIndex+r[0],a),o=1;o<a;o++)r[o]>0?this.insertCharStyleObject(i.lineIndex+o,0,r[o],n):n&&this.styles[i.lineIndex+o]&&n[0]&&(this.styles[i.lineIndex+o][0]=n[0]),n=n&&n.slice(r[o]+1);r[o]>0&&this.insertCharStyleObject(i.lineIndex+o,0,r[o],n)}removeChars(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:t+1;this.removeStyleFromTo(t,e),this._text.splice(t,e-t),this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}insertChars(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:n;i>n&&this.removeStyleFromTo(n,i);let r=this.graphemeSplit(t);this.insertNewStyleBlock(r,n,e),this._text=[...this._text.slice(0,n),...r,...this._text.slice(i)],this.text=this._text.join(""),this.set("dirty",!0),this.initDimensions(),this.setCoords(),this._removeExtraneousStyles()}setSelectionStartEndWithShift(t,e,n){n<=t?(e===t?this._selectionDirection=pe:this._selectionDirection===Le&&(this._selectionDirection=pe,this.selectionEnd=t),this.selectionStart=n):n>t&&n<e?this._selectionDirection===Le?this.selectionEnd=n:this.selectionStart=n:(e===t?this._selectionDirection=Le:this._selectionDirection===pe&&(this._selectionDirection=Le,this.selectionStart=e),this.selectionEnd=n)}},mf=class extends pf{initHiddenTextarea(){let t=this.canvas&&di(this.canvas.getElement())||ko(),e=t.createElement("textarea");Object.entries({autocapitalize:"off",autocorrect:"off",autocomplete:"off",spellcheck:"false","data-fabric":"textarea",wrap:"off",name:"fabricTextarea"}).map((o=>{let[a,l]=o;return e.setAttribute(a,l)}));let{top:n,left:i,fontSize:r}=this._calcTextareaPosition();e.style.cssText="position: absolute; top: ".concat(n,"; left: ").concat(i,"; z-index: -999; opacity: 0; width: 1px; height: 1px; font-size: 1px; padding-top: ").concat(r,";"),(this.hiddenTextareaContainer||t.body).appendChild(e),Object.entries({blur:"blur",keydown:"onKeyDown",keyup:"onKeyUp",input:"onInput",copy:"copy",cut:"copy",paste:"paste",compositionstart:"onCompositionStart",compositionupdate:"onCompositionUpdate",compositionend:"onCompositionEnd"}).map((o=>{let[a,l]=o;return e.addEventListener(a,this[l].bind(this))})),this.hiddenTextarea=e}blur(){this.abortCursorAnimation()}onKeyDown(t){if(!this.isEditing)return;let e=this.direction==="rtl"?this.keysMapRtl:this.keysMap;if(t.keyCode in e)this[e[t.keyCode]](t);else{if(!(t.keyCode in this.ctrlKeysMapDown)||!t.ctrlKey&&!t.metaKey)return;this[this.ctrlKeysMapDown[t.keyCode]](t)}t.stopImmediatePropagation(),t.preventDefault(),t.keyCode>=33&&t.keyCode<=40?(this.inCompositionMode=!1,this.clearContextTop(),this.renderCursorOrSelection()):this.canvas&&this.canvas.requestRenderAll()}onKeyUp(t){!this.isEditing||this._copyDone||this.inCompositionMode?this._copyDone=!1:t.keyCode in this.ctrlKeysMapUp&&(t.ctrlKey||t.metaKey)&&(this[this.ctrlKeysMapUp[t.keyCode]](t),t.stopImmediatePropagation(),t.preventDefault(),this.canvas&&this.canvas.requestRenderAll())}onInput(t){let e=this.fromPaste,{value:n,selectionStart:i,selectionEnd:r}=this.hiddenTextarea;if(this.fromPaste=!1,t&&t.stopPropagation(),!this.isEditing)return;let o=()=>{this.updateFromTextArea(),this.fire(hh),this.canvas&&(this.canvas.fire("text:changed",{target:this}),this.canvas.requestRenderAll())};if(this.hiddenTextarea.value==="")return this.styles={},void o();let a=this._splitTextIntoLines(n).graphemeText,l=this._text.length,c=a.length,h=this.selectionStart,u=this.selectionEnd,d=h!==u,f,p,x,m,g=c-l,S=this.fromStringToGraphemeSelection(i,r,n),P=h>S.selectionStart;d?(p=this._text.slice(h,u),g+=u-h):c<l&&(p=P?this._text.slice(u+g,u):this._text.slice(h,h-g));let T=a.slice(S.selectionEnd-g,S.selectionEnd);if(p&&p.length&&(T.length&&(f=this.getSelectionStyles(h,h+1,!1),f=T.map((()=>f[0]))),d?(x=h,m=u):P?(x=u-p.length,m=u):(x=u,m=u+p.length),this.removeStyleFromTo(x,m)),T.length){let{copyPasteData:A}=Ni();e&&T.join("")===A.copiedText&&!he.disableStyleCopyPaste&&(f=A.copiedTextStyle),this.insertNewStyleBlock(T,h,f)}o()}onCompositionStart(){this.inCompositionMode=!0}onCompositionEnd(){this.inCompositionMode=!1}onCompositionUpdate(t){let{target:e}=t,{selectionStart:n,selectionEnd:i}=e;this.compositionStart=n,this.compositionEnd=i,this.updateTextareaPosition()}copy(){if(this.selectionStart===this.selectionEnd)return;let{copyPasteData:t}=Ni();t.copiedText=this.getSelectedText(),he.disableStyleCopyPaste?t.copiedTextStyle=void 0:t.copiedTextStyle=this.getSelectionStyles(this.selectionStart,this.selectionEnd,!0),this._copyDone=!0}paste(){this.fromPaste=!0}_getWidthBeforeCursor(t,e){let n,i=this._getLineLeftOffset(t);return e>0&&(n=this.__charBounds[t][e-1],i+=n.left+n.width),i}getDownCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===this._textLines.length-1||t.metaKey||t.keyCode===34)return this._text.length-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r+1,a);return this._textLines[r].slice(o).length+l+1+this.missingNewlineOffset(r)}_getSelectionForOffset(t,e){return t.shiftKey&&this.selectionStart!==this.selectionEnd&&e?this.selectionEnd:this.selectionStart}getUpCursorOffset(t,e){let n=this._getSelectionForOffset(t,e),i=this.get2DCursorLocation(n),r=i.lineIndex;if(r===0||t.metaKey||t.keyCode===33)return-n;let o=i.charIndex,a=this._getWidthBeforeCursor(r,o),l=this._getIndexOnLine(r-1,a),c=this._textLines[r].slice(0,o),h=this.missingNewlineOffset(r-1);return-this._textLines[r-1].length+l-c.length+(1-h)}_getIndexOnLine(t,e){let n=this._textLines[t],i,r,o=this._getLineLeftOffset(t),a=0;for(let l=0,c=n.length;l<c;l++)if(i=this.__charBounds[t][l].width,o+=i,o>e){r=!0;let h=o-i,u=o,d=Math.abs(h-e);a=Math.abs(u-e)<d?l:l-1;break}return r||(a=n.length-1),a}moveCursorDown(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorUpOrDown("Down",t)}moveCursorUp(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorUpOrDown("Up",t)}_moveCursorUpOrDown(t,e){let n=this["get".concat(t,"CursorOffset")](e,this._selectionDirection===Le);if(e.shiftKey?this.moveCursorWithShift(n):this.moveCursorWithoutShift(n),n!==0){let i=this.text.length;this.selectionStart=Lr(0,this.selectionStart,i),this.selectionEnd=Lr(0,this.selectionEnd,i),this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea()}}moveCursorWithShift(t){let e=this._selectionDirection===pe?this.selectionStart+t:this.selectionEnd+t;return this.setSelectionStartEndWithShift(this.selectionStart,this.selectionEnd,e),t!==0}moveCursorWithoutShift(t){return t<0?(this.selectionStart+=t,this.selectionEnd=this.selectionStart):(this.selectionEnd+=t,this.selectionStart=this.selectionEnd),t!==0}moveCursorLeft(t){this.selectionStart===0&&this.selectionEnd===0||this._moveCursorLeftOrRight("Left",t)}_move(t,e,n){let i;if(t.altKey)i=this["findWordBoundary".concat(n)](this[e]);else{if(!t.metaKey&&t.keyCode!==35&&t.keyCode!==36)return this[e]+=n==="Left"?-1:1,!0;i=this["findLineBoundary".concat(n)](this[e])}return i!==void 0&&this[e]!==i&&(this[e]=i,!0)}_moveLeft(t,e){return this._move(t,e,"Left")}_moveRight(t,e){return this._move(t,e,"Right")}moveCursorLeftWithoutShift(t){let e=!0;return this._selectionDirection=pe,this.selectionEnd===this.selectionStart&&this.selectionStart!==0&&(e=this._moveLeft(t,"selectionStart")),this.selectionEnd=this.selectionStart,e}moveCursorLeftWithShift(t){return this._selectionDirection===Le&&this.selectionStart!==this.selectionEnd?this._moveLeft(t,"selectionEnd"):this.selectionStart!==0?(this._selectionDirection=pe,this._moveLeft(t,"selectionStart")):void 0}moveCursorRight(t){this.selectionStart>=this._text.length&&this.selectionEnd>=this._text.length||this._moveCursorLeftOrRight("Right",t)}_moveCursorLeftOrRight(t,e){let n="moveCursor".concat(t).concat(e.shiftKey?"WithShift":"WithoutShift");this._currentCursorOpacity=1,this[n](e)&&(this.abortCursorAnimation(),this.initDelayedCursor(),this._fireSelectionChanged(),this._updateTextarea())}moveCursorRightWithShift(t){return this._selectionDirection===pe&&this.selectionStart!==this.selectionEnd?this._moveRight(t,"selectionStart"):this.selectionEnd!==this._text.length?(this._selectionDirection=Le,this._moveRight(t,"selectionEnd")):void 0}moveCursorRightWithoutShift(t){let e=!0;return this._selectionDirection=Le,this.selectionStart===this.selectionEnd?(e=this._moveRight(t,"selectionStart"),this.selectionEnd=this.selectionStart):this.selectionStart=this.selectionEnd,e}},Xg=s=>!!s.button,gf=class extends mf{constructor(){super(...arguments),j(this,"draggableTextDelegate",void 0)}initBehavior(){this.on("mousedown",this._mouseDownHandler),this.on("mouseup",this.mouseUpHandler),this.on("mousedblclick",this.doubleClickHandler),this.on("mousetripleclick",this.tripleClickHandler),this.draggableTextDelegate=new ff(this),super.initBehavior()}shouldStartDragging(){return this.draggableTextDelegate.isActive()}onDragStart(t){return this.draggableTextDelegate.onDragStart(t)}canDrop(t){return this.draggableTextDelegate.canDrop(t)}doubleClickHandler(t){this.isEditing&&(this.selectWord(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}tripleClickHandler(t){this.isEditing&&(this.selectLine(this.getSelectionStartFromPointer(t.e)),this.renderCursorOrSelection())}_mouseDownHandler(t){let{e,alreadySelected:n}=t;this.canvas&&this.editable&&!Xg(e)&&!this.getActiveControl()&&(this.draggableTextDelegate.start(e)||(this.canvas.textEditingManager.register(this),n&&(this.inCompositionMode=!1,this.setCursorByClick(e)),this.isEditing&&(this.__selectionStartOnMouseDown=this.selectionStart,this.selectionStart===this.selectionEnd&&this.abortCursorAnimation(),this.renderCursorOrSelection()),this.selected||(this.selected=n||this.isEditing)))}mouseUpHandler(t){let{e,transform:n}=t,i=this.draggableTextDelegate.end(e);if(this.canvas){this.canvas.textEditingManager.unregister(this);let r=this.canvas._activeObject;if(r&&r!==this)return}!this.editable||this.group&&!this.group.interactive||n&&n.actionPerformed||Xg(e)||i||this.selected&&!this.getActiveControl()&&(this.enterEditing(e),this.selectionStart===this.selectionEnd?this.initDelayedCursor(!0):this.renderCursorOrSelection())}setCursorByClick(t){let e=this.getSelectionStartFromPointer(t),n=this.selectionStart,i=this.selectionEnd;t.shiftKey?this.setSelectionStartEndWithShift(n,i,e):(this.selectionStart=e,this.selectionEnd=e),this.isEditing&&(this._fireSelectionChanged(),this._updateTextarea())}getSelectionStartFromPointer(t){let e=this.canvas.getScenePoint(t).transform(kn(this.calcTransformMatrix())).add(new st(-this._getLeftOffset(),-this._getTopOffset())),n=0,i=0,r=0;for(let c=0;c<this._textLines.length&&n<=e.y;c++)n+=this.getHeightOfLine(c),r=c,c>0&&(i+=this._textLines[c-1].length+this.missingNewlineOffset(c-1));let o=Math.abs(this._getLineLeftOffset(r)),a=this._textLines[r].length,l=this.__charBounds[r];for(let c=0;c<a;c++){let h=o+l[c].kernedWidth;if(e.x<=h){Math.abs(e.x-h)<=Math.abs(e.x-o)&&i++;break}o=h,i++}return Math.min(this.flipX?a-i:i,this._text.length)}},th="moveCursorUp",eh="moveCursorDown",nh="moveCursorLeft",ih="moveCursorRight",sh="exitEditing",jg=(s,t)=>{let e=t.getRetinaScaling();s.setTransform(e,0,0,e,0,0);let n=t.viewportTransform;s.transform(n[0],n[1],n[2],n[3],n[4],n[5])},tw=X({selectionStart:0,selectionEnd:0,selectionColor:"rgba(17,119,255,0.3)",isEditing:!1,editable:!0,editingBorderColor:"rgba(102,153,255,0.25)",cursorWidth:2,cursorColor:"",cursorDelay:1e3,cursorDuration:600,caching:!0,hiddenTextareaContainer:null,keysMap:{9:sh,27:sh,33:th,34:eh,35:ih,36:nh,37:nh,38:th,39:ih,40:eh},keysMapRtl:{9:sh,27:sh,33:th,34:eh,35:nh,36:ih,37:ih,38:th,39:nh,40:eh},ctrlKeysMapDown:{65:"cmdAll"},ctrlKeysMapUp:{67:"copy",88:"cut"}},{_selectionDirection:null,_reSpace:/\s|\r?\n/,inCompositionMode:!1}),pi=class s extends gf{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}get type(){let t=super.type;return t==="itext"?"i-text":t}constructor(t,e){super(t,X(X({},s.ownDefaults),e)),this.initBehavior()}_set(t,e){return this.isEditing&&this._savedProps&&t in this._savedProps?(this._savedProps[t]=e,this):(t==="canvas"&&(this.canvas instanceof Bo&&this.canvas.textEditingManager.remove(this),e instanceof Bo&&e.textEditingManager.add(this)),super._set(t,e))}setSelectionStart(t){t=Math.max(t,0),this._updateAndFire("selectionStart",t)}setSelectionEnd(t){t=Math.min(t,this.text.length),this._updateAndFire("selectionEnd",t)}_updateAndFire(t,e){this[t]!==e&&(this._fireSelectionChanged(),this[t]=e),this._updateTextarea()}_fireSelectionChanged(){this.fire("selection:changed"),this.canvas&&this.canvas.fire("text:selection:changed",{target:this})}initDimensions(){this.isEditing&&this.initDelayedCursor(),super.initDimensions()}getSelectionStyles(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart||0,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionEnd,n=arguments.length>2?arguments[2]:void 0;return super.getSelectionStyles(t,e,n)}setSelectionStyles(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.selectionStart||0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.selectionEnd;return super.setSelectionStyles(t,e,n)}get2DCursorLocation(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0;return super.get2DCursorLocation(t,e)}render(t){super.render(t),this.cursorOffsetCache={},this.renderCursorOrSelection()}toCanvasElement(t){let e=this.isEditing;this.isEditing=!1;let n=super.toCanvasElement(t);return this.isEditing=e,n}renderCursorOrSelection(){if(!this.isEditing||!this.canvas)return;let t=this.clearContextTop(!0);if(!t)return;let e=this._getCursorBoundaries(),n=this.findAncestorsWithClipPath(),i=n.length>0,r,o=t;if(i){r=Vn(t.canvas),o=r.getContext("2d"),jg(o,this.canvas);let a=this.calcTransformMatrix();o.transform(a[0],a[1],a[2],a[3],a[4],a[5])}if(this.selectionStart!==this.selectionEnd||this.inCompositionMode?this.renderSelection(o,e):this.renderCursor(o,e),i)for(let a of n){let l=a.clipPath,c=Vn(t.canvas),h=c.getContext("2d");if(jg(h,this.canvas),!l.absolutePositioned){let u=a.calcTransformMatrix();h.transform(u[0],u[1],u[2],u[3],u[4],u[5])}l.transform(h),l.drawObject(h,!0,{}),this.drawClipPathOnCache(o,l,c)}i&&(t.setTransform(1,0,0,1,0,0),t.drawImage(r,0,0)),this.canvas.contextTopDirty=!0,t.restore()}findAncestorsWithClipPath(){let t=[],e=this;for(;e;)e.clipPath&&t.push(e),e=e.parent;return t}_getCursorBoundaries(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1?arguments[1]:void 0,n=this._getLeftOffset(),i=this._getTopOffset(),r=this._getCursorBoundariesOffsets(t,e);return{left:n,top:i,leftOffset:r.left,topOffset:r.top}}_getCursorBoundariesOffsets(t,e){return e?this.__getCursorBoundariesOffsets(t):this.cursorOffsetCache&&"top"in this.cursorOffsetCache?this.cursorOffsetCache:this.cursorOffsetCache=this.__getCursorBoundariesOffsets(t)}__getCursorBoundariesOffsets(t){let e=0,n=0,{charIndex:i,lineIndex:r}=this.get2DCursorLocation(t);for(let c=0;c<r;c++)e+=this.getHeightOfLine(c);let o=this._getLineLeftOffset(r),a=this.__charBounds[r][i];a&&(n=a.left),this.charSpacing!==0&&i===this._textLines[r].length&&(n-=this._getWidthOfCharSpacing());let l={top:e,left:o+(n>0?n:0)};return this.direction==="rtl"&&(this.textAlign===Le||this.textAlign===Oi||this.textAlign===Ha?l.left*=-1:this.textAlign===pe||this.textAlign===vh?l.left=o-(n>0?n:0):this.textAlign!==Zt&&this.textAlign!==Wa||(l.left=o-(n>0?n:0))),l}renderCursorAt(t){this._renderCursor(this.canvas.contextTop,this._getCursorBoundaries(t,!0),t)}renderCursor(t,e){this._renderCursor(t,e,this.selectionStart)}getCursorRenderingData(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.selectionStart,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this._getCursorBoundaries(t),n=this.get2DCursorLocation(t),i=n.lineIndex,r=n.charIndex>0?n.charIndex-1:0,o=this.getValueOfPropertyAt(i,r,"fontSize"),a=this.getObjectScaling().x*this.canvas.getZoom(),l=this.cursorWidth/a,c=this.getValueOfPropertyAt(i,r,"deltaY"),h=e.topOffset+(1-this._fontSizeFraction)*this.getHeightOfLine(i)/this.lineHeight-o*(1-this._fontSizeFraction);return{color:this.cursorColor||this.getValueOfPropertyAt(i,r,"fill"),opacity:this._currentCursorOpacity,left:e.left+e.leftOffset-l/2,top:h+e.top+c,width:l,height:o}}_renderCursor(t,e,n){let{color:i,opacity:r,left:o,top:a,width:l,height:c}=this.getCursorRenderingData(n,e);t.fillStyle=i,t.globalAlpha=r,t.fillRect(o,a,l,c)}renderSelection(t,e){let n={selectionStart:this.inCompositionMode?this.hiddenTextarea.selectionStart:this.selectionStart,selectionEnd:this.inCompositionMode?this.hiddenTextarea.selectionEnd:this.selectionEnd};this._renderSelection(t,n,e)}renderDragSourceEffect(){let t=this.draggableTextDelegate.getDragStartSelection();this._renderSelection(this.canvas.contextTop,t,this._getCursorBoundaries(t.selectionStart,!0))}renderDropTargetEffect(t){let e=this.getSelectionStartFromPointer(t);this.renderCursorAt(e)}_renderSelection(t,e,n){let i=e.selectionStart,r=e.selectionEnd,o=this.textAlign.includes(Oi),a=this.get2DCursorLocation(i),l=this.get2DCursorLocation(r),c=a.lineIndex,h=l.lineIndex,u=a.charIndex<0?0:a.charIndex,d=l.charIndex<0?0:l.charIndex;for(let f=c;f<=h;f++){let p=this._getLineLeftOffset(f)||0,x=this.getHeightOfLine(f),m=0,g=0,S=0;if(f===c&&(g=this.__charBounds[c][u].left),f>=c&&f<h)S=o&&!this.isEndOfWrapping(f)?this.width:this.getLineWidth(f)||5;else if(f===h)if(d===0)S=this.__charBounds[h][d].left;else{let _=this._getWidthOfCharSpacing();S=this.__charBounds[h][d-1].left+this.__charBounds[h][d-1].width-_}m=x,(this.lineHeight<1||f===h&&this.lineHeight>1)&&(x/=this.lineHeight);let P=n.left+p+g,T=x,A=0,D=S-g;this.inCompositionMode?(t.fillStyle=this.compositionColor||"black",T=1,A=x):t.fillStyle=this.selectionColor,this.direction==="rtl"&&(this.textAlign===Le||this.textAlign===Oi||this.textAlign===Ha?P=this.width-P-D:this.textAlign===pe||this.textAlign===vh?P=n.left+p-S:this.textAlign!==Zt&&this.textAlign!==Wa||(P=n.left+p-S)),t.fillRect(P,n.top+n.topOffset+A,D,T),n.topOffset+=m}}getCurrentCharFontSize(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,"fontSize")}getCurrentCharColor(){let t=this._getCurrentCharIndex();return this.getValueOfPropertyAt(t.l,t.c,He)}_getCurrentCharIndex(){let t=this.get2DCursorLocation(this.selectionStart,!0),e=t.charIndex>0?t.charIndex-1:0;return{l:t.lineIndex,c:e}}dispose(){this.exitEditingImpl(),this.draggableTextDelegate.dispose(),super.dispose()}};j(pi,"ownDefaults",tw),j(pi,"type","IText"),Et.setClass(pi),Et.setClass(pi,"i-text");var Ro=class s extends pi{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(t,X(X({},s.ownDefaults),e))}static createControls(){return{controls:z0()}}initDimensions(){this.initialized&&(this.isEditing&&this.initDelayedCursor(),this._clearCache(),this.dynamicMinWidth=0,this._styleMap=this._generateStyleMap(this._splitText()),this.dynamicMinWidth>this.width&&this._set("width",this.dynamicMinWidth),this.textAlign.includes(Oi)&&this.enlargeSpaces(),this.height=this.calcTextHeight())}_generateStyleMap(t){let e=0,n=0,i=0,r={};for(let o=0;o<t.graphemeLines.length;o++)t.graphemeText[i]===`
`&&o>0?(n=0,i++,e++):!this.splitByGrapheme&&this._reSpaceAndTab.test(t.graphemeText[i])&&o>0&&(n++,i++),r[o]={line:e,offset:n},i+=t.graphemeLines[o].length,n+=t.graphemeLines[o].length;return r}styleHas(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[e];n&&(e=n.line)}return super.styleHas(t,e)}isEmptyStyles(t){if(!this.styles)return!0;let e,n=0,i=t+1,r=!1,o=this._styleMap[t],a=this._styleMap[t+1];o&&(t=o.line,n=o.offset),a&&(i=a.line,r=i===t,e=a.offset);let l=t===void 0?this.styles:{line:this.styles[t]};for(let c in l)for(let h in l[c]){let u=parseInt(h,10);if(u>=n&&(!r||u<e))for(let d in l[c][h])return!1}return!0}_getStyleDeclaration(t,e){if(this._styleMap&&!this.isWrapping){let n=this._styleMap[t];if(!n)return{};t=n.line,e=n.offset+e}return super._getStyleDeclaration(t,e)}_setStyleDeclaration(t,e,n){let i=this._styleMap[t];super._setStyleDeclaration(i.line,i.offset+e,n)}_deleteStyleDeclaration(t,e){let n=this._styleMap[t];super._deleteStyleDeclaration(n.line,n.offset+e)}_getLineStyle(t){let e=this._styleMap[t];return!!this.styles[e.line]}_setLineStyle(t){let e=this._styleMap[t];super._setLineStyle(e.line)}_wrapText(t,e){this.isWrapping=!0;let n=this.getGraphemeDataForRender(t),i=[];for(let r=0;r<n.wordsData.length;r++)i.push(...this._wrapLine(r,e,n));return this.isWrapping=!1,i}getGraphemeDataForRender(t){let e=this.splitByGrapheme,n=e?"":" ",i=0;return{wordsData:t.map(((r,o)=>{let a=0,l=e?this.graphemeSplit(r):this.wordSplit(r);return l.length===0?[{word:[],width:0}]:l.map((c=>{let h=e?[c]:this.graphemeSplit(c),u=this._measureWord(h,o,a);return i=Math.max(u,i),a+=h.length+n.length,{word:h,width:u}}))})),largestWordWidth:i}}_measureWord(t,e){let n,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=0;for(let o=0,a=t.length;o<a;o++)r+=this._getGraphemeBox(t[o],e,o+i,n,!0).kernedWidth,n=t[o];return r}wordSplit(t){return t.split(this._wordJoiners)}_wrapLine(t,e,n){let{largestWordWidth:i,wordsData:r}=n,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=this._getWidthOfCharSpacing(),l=this.splitByGrapheme,c=[],h=l?"":" ",u=0,d=[],f=0,p=0,x=!0;e-=o;let m=Math.max(e,i,this.dynamicMinWidth),g=r[t],S;for(f=0,S=0;S<g.length;S++){let{word:P,width:T}=g[S];f+=P.length,u+=p+T-a,u>m&&!x?(c.push(d),d=[],u=T,x=!0):u+=a,x||l||d.push(h),d=d.concat(P),p=l?0:this._measureWord([h],t,f),f++,x=!1}return S&&c.push(d),i+o>this.dynamicMinWidth&&(this.dynamicMinWidth=i-a+o),c}isEndOfWrapping(t){return!this._styleMap[t+1]||this._styleMap[t+1].line!==this._styleMap[t].line}missingNewlineOffset(t,e){return this.splitByGrapheme&&!e?this.isEndOfWrapping(t)?1:0:1}_splitTextIntoLines(t){let e=super._splitTextIntoLines(t),n=this._wrapText(e.lines,this.width),i=new Array(n.length);for(let r=0;r<n.length;r++)i[r]=n[r].join("");return e.lines=i,e.graphemeLines=n,e}getMinWidth(){return Math.max(this.minWidth,this.dynamicMinWidth)}_removeExtraneousStyles(){let t=new Map;for(let e in this._styleMap){let n=parseInt(e,10);if(this._textLines[n]){let i=this._styleMap[e].line;t.set("".concat(i),!0)}}for(let e in this.styles)t.has(e)||delete this.styles[e]}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return super.toObject(["minWidth","splitByGrapheme",...t])}};j(Ro,"type","Textbox"),j(Ro,"textLayoutProperties",[...pi.textLayoutProperties,"width"]),j(Ro,"ownDefaults",{minWidth:20,dynamicMinWidth:2,lockScalingFlip:!0,noScaleCache:!1,_wordJoiners:/[ \t\r]/,splitByGrapheme:!1}),Et.setClass(Ro);var Oh=class extends Uo{shouldPerformLayout(t){return!!t.target.clipPath&&super.shouldPerformLayout(t)}shouldLayoutClipPath(){return!1}calcLayoutResult(t,e){let{target:n}=t,{clipPath:i,group:r}=n;if(!i||!this.shouldPerformLayout(t))return;let{width:o,height:a}=Fi(q0(n,i)),l=new st(o,a);if(i.absolutePositioned)return{center:ss(i.getRelativeCenterPoint(),void 0,r?r.calcTransformMatrix():void 0),size:l};{let c=i.getRelativeCenterPoint().transform(n.calcOwnMatrix(),!0);if(this.shouldPerformLayout(t)){let{center:h=new st,correction:u=new st}=this.calcBoundingBox(e,t)||{};return{center:h.add(c),correction:u.subtract(c),size:l}}return{center:n.getRelativeCenterPoint().add(c),size:l}}}};j(Oh,"type","clip-path"),Et.setClass(Oh);var Lh=class extends Uo{getInitialSize(t,e){let{target:n}=t,{size:i}=e;return new st(n.width||i.x,n.height||i.y)}};j(Lh,"type","fixed"),Et.setClass(Lh);var _f=class extends Fr{subscribeTargets(t){let e=t.target;t.targets.reduce(((n,i)=>(i.parent&&n.add(i.parent),n)),new Set).forEach((n=>{n.layoutManager.subscribeTargets({target:n,targets:[e]})}))}unsubscribeTargets(t){let e=t.target,n=e.getObjects();t.targets.reduce(((i,r)=>(r.parent&&i.add(r.parent),i)),new Set).forEach((i=>{!n.some((r=>r.parent===i))&&i.layoutManager.unsubscribeTargets({target:i,targets:[e]})}))}},Po=class s extends Ls{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Object.assign(this,s.ownDefaults),this.setOptions(e);let{left:n,top:i,layoutManager:r}=e;this.groupInit(t,{left:n,top:i,layoutManager:r??new _f})}_shouldSetNestedCoords(){return!0}__objectSelectionMonitor(){}multiSelectAdd(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.multiSelectionStacking==="selection-order"?this.add(...e):e.forEach((i=>{let r=this._objects.findIndex((a=>a.isInFrontOf(i))),o=r===-1?this.size():r;this.insertAt(o,i)}))}canEnterGroup(t){return this.getObjects().some((e=>e.isDescendantOf(t)||t.isDescendantOf(e)))?(Fs("error","ActiveSelection: circular object trees are not supported, this call has no effect"),!1):super.canEnterGroup(t)}enterGroup(t,e){t.parent&&t.parent===t.group?t.parent._exitGroup(t):t.group&&t.parent!==t.group&&t.group.remove(t),this._enterGroup(t,e)}exitGroup(t,e){this._exitGroup(t,e),t.parent&&t.parent._enterGroup(t,!0)}_onAfterObjectsChange(t,e){super._onAfterObjectsChange(t,e);let n=new Set;e.forEach((i=>{let{parent:r}=i;r&&n.add(r)})),t===Vf?n.forEach((i=>{i._onAfterObjectsChange(Eh,e)})):n.forEach((i=>{i._set("dirty",!0)}))}onDeselect(){return this.removeAll(),!1}toString(){return"#<ActiveSelection: (".concat(this.complexity(),")>")}shouldCache(){return!1}isOnACache(){return!1}_renderControls(t,e,n){t.save(),t.globalAlpha=this.isMoving?this.borderOpacityWhenMoving:1;let i=X(X({hasControls:!1},n),{},{forActiveSelection:!0});for(let r=0;r<this._objects.length;r++)this._objects[r]._renderControls(t,i);super._renderControls(t,e),t.restore()}};j(Po,"type","ActiveSelection"),j(Po,"ownDefaults",{multiSelectionStacking:"canvas-stacking"}),Et.setClass(Po),Et.setClass(Po,"activeSelection");var xf=class{constructor(){j(this,"resources",{})}applyFilters(t,e,n,i,r){let o=r.getContext("2d");if(!o)return;o.drawImage(e,0,0,n,i);let a={sourceWidth:n,sourceHeight:i,imageData:o.getImageData(0,0,n,i),originalEl:e,originalImageData:o.getImageData(0,0,n,i),canvasEl:r,ctx:o,filterBackend:this};t.forEach((c=>{c.applyTo(a)}));let{imageData:l}=a;return l.width===n&&l.height===i||(r.width=l.width,r.height=l.height),o.putImageData(l,0,0),a}},Fh=class{constructor(){let{tileSize:t=he.textureSize}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};j(this,"aPosition",new Float32Array([0,0,0,1,1,0,1,1])),j(this,"resources",{}),this.tileSize=t,this.setupGLContext(t,t),this.captureGPUInfo()}setupGLContext(t,e){this.dispose(),this.createWebGLCanvas(t,e)}createWebGLCanvas(t,e){let n=Vn({width:t,height:e}),i=n.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,depth:!1,stencil:!1,antialias:!1});i&&(i.clearColor(0,0,0,0),this.canvas=n,this.gl=i)}applyFilters(t,e,n,i,r,o){let a=this.gl,l=r.getContext("2d");if(!a||!l)return;let c;o&&(c=this.getCachedTexture(o,e));let h={originalWidth:e.width||e.naturalWidth||0,originalHeight:e.height||e.naturalHeight||0,sourceWidth:n,sourceHeight:i,destinationWidth:n,destinationHeight:i,context:a,sourceTexture:this.createTexture(a,n,i,c?void 0:e),targetTexture:this.createTexture(a,n,i),originalTexture:c||this.createTexture(a,n,i,c?void 0:e),passes:t.length,webgl:!0,aPosition:this.aPosition,programCache:this.programCache,pass:0,filterBackend:this,targetCanvas:r},u=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,u),t.forEach((d=>{d&&d.applyTo(h)})),(function(d){let f=d.targetCanvas,p=f.width,x=f.height,m=d.destinationWidth,g=d.destinationHeight;p===m&&x===g||(f.width=m,f.height=g)})(h),this.copyGLTo2D(a,h),a.bindTexture(a.TEXTURE_2D,null),a.deleteTexture(h.sourceTexture),a.deleteTexture(h.targetTexture),a.deleteFramebuffer(u),l.setTransform(1,0,0,1,0,0),h}dispose(){this.canvas&&(this.canvas=null,this.gl=null),this.clearWebGLCaches()}clearWebGLCaches(){this.programCache={},this.textureCache={}}createTexture(t,e,n,i,r){let{NEAREST:o,TEXTURE_2D:a,RGBA:l,UNSIGNED_BYTE:c,CLAMP_TO_EDGE:h,TEXTURE_MAG_FILTER:u,TEXTURE_MIN_FILTER:d,TEXTURE_WRAP_S:f,TEXTURE_WRAP_T:p}=t,x=t.createTexture();return t.bindTexture(a,x),t.texParameteri(a,u,r||o),t.texParameteri(a,d,r||o),t.texParameteri(a,f,h),t.texParameteri(a,p,h),i?t.texImage2D(a,0,l,l,c,i):t.texImage2D(a,0,l,e,n,0,l,c,null),x}getCachedTexture(t,e,n){let{textureCache:i}=this;if(i[t])return i[t];{let r=this.createTexture(this.gl,e.width,e.height,e,n);return r&&(i[t]=r),r}}evictCachesForKey(t){this.textureCache[t]&&(this.gl.deleteTexture(this.textureCache[t]),delete this.textureCache[t])}copyGLTo2D(t,e){let n=t.canvas,i=e.targetCanvas,r=i.getContext("2d");if(!r)return;r.translate(0,i.height),r.scale(1,-1);let o=n.height-i.height;r.drawImage(n,0,o,i.width,i.height,0,0,i.width,i.height)}copyGLTo2DPutImageData(t,e){let n=e.targetCanvas.getContext("2d"),i=e.destinationWidth,r=e.destinationHeight,o=i*r*4;if(!n)return;let a=new Uint8Array(this.imageBuffer,0,o),l=new Uint8ClampedArray(this.imageBuffer,0,o);t.readPixels(0,0,i,r,t.RGBA,t.UNSIGNED_BYTE,a);let c=new ImageData(l,i,r);n.putImageData(c,0,0)}captureGPUInfo(){if(this.gpuInfo)return this.gpuInfo;let t=this.gl,e={renderer:"",vendor:""};if(!t)return e;let n=t.getExtension("WEBGL_debug_renderer_info");if(n){let i=t.getParameter(n.UNMASKED_RENDERER_WEBGL),r=t.getParameter(n.UNMASKED_VENDOR_WEBGL);i&&(e.renderer=i.toLowerCase()),r&&(e.vendor=r.toLowerCase())}return this.gpuInfo=e,e}},Vd;function ew(){let{WebGLProbe:s}=Ni();return s.queryWebGL(Ui()),he.enableGLFiltering&&s.isSupported(he.textureSize)?new Fh({tileSize:he.textureSize}):new xf}function Gd(){return!Vd&&(!(arguments.length>0&&arguments[0]!==void 0)||arguments[0])&&(Vd=ew()),Vd}var nw=["filters","resizeFilter","src","crossOrigin","type"],p_=["cropX","cropY"],Zn=class s extends Je{static getDefaults(){return X(X({},super.getDefaults()),s.ownDefaults)}constructor(t,e){super(),j(this,"_lastScaleX",1),j(this,"_lastScaleY",1),j(this,"_filterScalingX",1),j(this,"_filterScalingY",1),this.filters=[],Object.assign(this,s.ownDefaults),this.setOptions(e),this.cacheKey="texture".concat(Us()),this.setElement(typeof t=="string"?(this.canvas&&di(this.canvas.getElement())||ko()).getElementById(t):t,e)}getElement(){return this._element}setElement(t){var e;let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._element=t,this._originalElement=t,this._setWidthHeight(n),(e=t.classList)===null||e===void 0||e.add(s.CSS_CANVAS),this.filters.length!==0&&this.applyFilters(),this.resizeFilter&&this.applyResizeFilters()}removeTexture(t){let e=Gd(!1);e instanceof Fh&&e.evictCachesForKey(t)}dispose(){super.dispose(),this.removeTexture(this.cacheKey),this.removeTexture("".concat(this.cacheKey,"_filtered")),this._cacheContext=null,["_originalElement","_element","_filteredEl","_cacheCanvas"].forEach((t=>{let e=this[t];e&&Ni().dispose(e),this[t]=void 0}))}getCrossOrigin(){return this._originalElement&&(this._originalElement.crossOrigin||null)}getOriginalSize(){let t=this.getElement();return t?{width:t.naturalWidth||t.width,height:t.naturalHeight||t.height}:{width:0,height:0}}_stroke(t){if(!this.stroke||this.strokeWidth===0)return;let e=this.width/2,n=this.height/2;t.beginPath(),t.moveTo(-e,-n),t.lineTo(e,-n),t.lineTo(e,n),t.lineTo(-e,n),t.lineTo(-e,-n),t.closePath()}toObject(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=[];return this.filters.forEach((n=>{n&&e.push(n.toObject())})),X(X({},super.toObject([...p_,...t])),{},{src:this.getSrc(),crossOrigin:this.getCrossOrigin(),filters:e},this.resizeFilter?{resizeFilter:this.resizeFilter.toObject()}:{})}hasCrop(){return!!this.cropX||!!this.cropY||this.width<this._element.width||this.height<this._element.height}_toSVG(){let t=[],e=this._element,n=-this.width/2,i=-this.height/2,r=[],o=[],a="",l="";if(!e)return[];if(this.hasCrop()){let c=Us();r.push('<clipPath id="imageCrop_'+c+`">
`,'	<rect x="'+n+'" y="'+i+'" width="'+this.width+'" height="'+this.height+`" />
`,`</clipPath>
`),a=' clip-path="url(#imageCrop_'+c+')" '}if(this.imageSmoothing||(l=' image-rendering="optimizeSpeed"'),t.push("	<image ","COMMON_PARTS",'xlink:href="'.concat(this.getSvgSrc(!0),'" x="').concat(n-this.cropX,'" y="').concat(i-this.cropY,'" width="').concat(e.width||e.naturalWidth,'" height="').concat(e.height||e.naturalHeight,'"').concat(l).concat(a,`></image>
`)),this.stroke||this.strokeDashArray){let c=this.fill;this.fill=null,o=['	<rect x="'.concat(n,'" y="').concat(i,'" width="').concat(this.width,'" height="').concat(this.height,'" style="').concat(this.getSvgStyles(),`" />
`)],this.fill=c}return r=this.paintFirst!==He?r.concat(o,t):r.concat(t,o),r}getSrc(t){let e=t?this._element:this._originalElement;return e?e.toDataURL?e.toDataURL():this.srcFromAttribute?e.getAttribute("src")||"":e.src:this.src||""}getSvgSrc(t){return this.getSrc(t)}setSrc(t){let{crossOrigin:e,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Ga(t,{crossOrigin:e,signal:n}).then((i=>{e!==void 0&&this.set({crossOrigin:e}),this.setElement(i)}))}toString(){return'#<Image: { src: "'.concat(this.getSrc(),'" }>')}applyResizeFilters(){let t=this.resizeFilter,e=this.minimumScaleTrigger,n=this.getTotalObjectScaling(),i=n.x,r=n.y,o=this._filteredEl||this._originalElement;if(this.group&&this.set("dirty",!0),!t||i>e&&r>e)return this._element=o,this._filterScalingX=1,this._filterScalingY=1,this._lastScaleX=i,void(this._lastScaleY=r);let a=Vn(o),{width:l,height:c}=o;this._element=a,this._lastScaleX=t.scaleX=i,this._lastScaleY=t.scaleY=r,Gd().applyFilters([t],o,l,c,this._element),this._filterScalingX=a.width/this._originalElement.width,this._filterScalingY=a.height/this._originalElement.height}applyFilters(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.filters||[];if(t=t.filter((r=>r&&!r.isNeutralState())),this.set("dirty",!0),this.removeTexture("".concat(this.cacheKey,"_filtered")),t.length===0)return this._element=this._originalElement,this._filteredEl=void 0,this._filterScalingX=1,void(this._filterScalingY=1);let e=this._originalElement,n=e.naturalWidth||e.width,i=e.naturalHeight||e.height;if(this._element===this._originalElement){let r=Vn({width:n,height:i});this._element=r,this._filteredEl=r}else this._filteredEl&&(this._element=this._filteredEl,this._filteredEl.getContext("2d").clearRect(0,0,n,i),this._lastScaleX=1,this._lastScaleY=1);Gd().applyFilters(t,this._originalElement,n,i,this._element,this.cacheKey),this._originalElement.width===this._element.width&&this._originalElement.height===this._element.height||(this._filterScalingX=this._element.width/this._originalElement.width,this._filterScalingY=this._element.height/this._originalElement.height)}_render(t){t.imageSmoothingEnabled=this.imageSmoothing,this.isMoving!==!0&&this.resizeFilter&&this._needsResize()&&this.applyResizeFilters(),this._stroke(t),this._renderPaintInOrder(t)}drawCacheOnCanvas(t){t.imageSmoothingEnabled=this.imageSmoothing,super.drawCacheOnCanvas(t)}shouldCache(){return this.needsItsOwnCache()}_renderFill(t){let e=this._element;if(!e)return;let n=this._filterScalingX,i=this._filterScalingY,r=this.width,o=this.height,a=Math.max(this.cropX,0),l=Math.max(this.cropY,0),c=e.naturalWidth||e.width,h=e.naturalHeight||e.height,u=a*n,d=l*i,f=Math.min(r*n,c-u),p=Math.min(o*i,h-d),x=-r/2,m=-o/2,g=Math.min(r,c/n-a),S=Math.min(o,h/i-l);e&&t.drawImage(e,u,d,f,p,x,m,g,S)}_needsResize(){let t=this.getTotalObjectScaling();return t.x!==this._lastScaleX||t.y!==this._lastScaleY}_resetWidthHeight(){this.set(this.getOriginalSize())}_setWidthHeight(){let{width:t,height:e}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=this.getOriginalSize();this.width=t||n.width,this.height=e||n.height}parsePreserveAspectRatioAttribute(){let t=_0(this.preserveAspectRatio||""),e=this.width,n=this.height,i={width:e,height:n},r,o=this._element.width,a=this._element.height,l=1,c=1,h=0,u=0,d=0,f=0;return!t||t.alignX===Cn&&t.alignY===Cn?(l=e/o,c=n/a):(t.meetOrSlice==="meet"&&(l=c=J0(this._element,i),r=(e-o*l)/2,t.alignX==="Min"&&(h=-r),t.alignX==="Max"&&(h=r),r=(n-a*c)/2,t.alignY==="Min"&&(u=-r),t.alignY==="Max"&&(u=r)),t.meetOrSlice==="slice"&&(l=c=K0(this._element,i),r=o-e/l,t.alignX==="Mid"&&(d=r/2),t.alignX==="Max"&&(d=r),r=a-n/c,t.alignY==="Mid"&&(f=r/2),t.alignY==="Max"&&(f=r),o=e/l,a=n/c)),{width:o,height:a,scaleX:l,scaleY:c,offsetLeft:h,offsetTop:u,cropX:d,cropY:f}}static fromObject(t,e){let{filters:n,resizeFilter:i,src:r,crossOrigin:o,type:a}=t,l=Me(t,nw);return Promise.all([Ga(r,X(X({},e),{},{crossOrigin:o})),n&&Lo(n,e),i&&Lo([i],e),$a(l,e)]).then((c=>{let[h,u=[],[d]=[],f={}]=c;return new this(h,X(X({},l),{},{src:r,filters:u,resizeFilter:d},f))}))}static fromURL(t){let{crossOrigin:e=null,signal:n}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2?arguments[2]:void 0;return Ga(t,{crossOrigin:e,signal:n}).then((r=>new this(r,i)))}static async fromElement(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=as(t,this.ATTRIBUTE_NAMES,n);return this.fromURL(i["xlink:href"]||i.href,e,i).catch((r=>(Fs("log","Unable to parse Image",r),null)))}};j(Zn,"type","Image"),j(Zn,"cacheProperties",[...os,...p_]),j(Zn,"ownDefaults",{strokeWidth:0,srcFromAttribute:!1,minimumScaleTrigger:.5,cropX:0,cropY:0,imageSmoothing:!0}),j(Zn,"CSS_CANVAS","canvas-img"),j(Zn,"ATTRIBUTE_NAMES",[...ks,"x","y","width","height","preserveAspectRatio","xlink:href","href","crossOrigin","image-rendering"]),Et.setClass(Zn),Et.setSVGClass(Zn);var NA=Hh(["pattern","defs","symbol","metadata","clipPath","mask","desc"]);var m_=Qg,Yg=s=>function(t,e,n){let{points:i,pathOffset:r}=n;return new st(i[s]).subtract(r).transform(Pe(n.getViewportTransform(),n.calcTransformMatrix()))},g_=(s,t,e,n)=>{let{target:i,pointIndex:r}=t,o=i,a=ss(new st(e,n),void 0,o.calcOwnMatrix());return o.points[r]=a.add(o.pathOffset),o.setDimensions(),o.set("dirty",!0),!0},__=(s,t)=>function(e,n,i,r){let o=n.target,a=new st(o.points[(s>0?s:o.points.length)-1]),l=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()),c=t(e,X(X({},n),{},{pointIndex:s}),i,r),h=a.subtract(o.pathOffset).transform(o.calcOwnMatrix()).subtract(l);return o.left-=h.x,o.top-=h.y,c},qg=s=>Bs(m_,__(s,g_)),vf=(s,t,e)=>{let{path:n,pathOffset:i}=s,r=n[t];return new st(r[e]-i.x,r[e+1]-i.y).transform(Pe(s.getViewportTransform(),s.calcTransformMatrix()))};function iw(s,t,e){let{commandIndex:n,pointIndex:i}=this;return vf(e,n,i)}function sw(s,t,e,n){let{target:i}=t,{commandIndex:r,pointIndex:o}=this,a=((l,c,h,u,d)=>{let{path:f,pathOffset:p}=l,x=f[(u>0?u:f.length)-1],m=new st(x[d],x[d+1]),g=m.subtract(p).transform(l.calcOwnMatrix()),S=ss(new st(c,h),void 0,l.calcOwnMatrix());f[u][d]=S.x+p.x,f[u][d+1]=S.y+p.y,l.setDimensions();let P=m.subtract(l.pathOffset).transform(l.calcOwnMatrix()).subtract(g);return l.left-=P.x,l.top-=P.y,l.set("dirty",!0),!0})(i,e,n,r,o);return If(this.actionName,X(X({},Of(s,t,e,n)),{},{commandIndex:r,pointIndex:o})),a}var Nh=class extends gn{constructor(t){super(t)}render(t,e,n,i,r){let o=X(X({},i),{},{cornerColor:this.controlFill,cornerStrokeColor:this.controlStroke,transparentCorners:!this.controlFill});super.render(t,e,n,o,r)}},yf=class extends Nh{constructor(t){super(t)}render(t,e,n,i,r){let{path:o}=r,{commandIndex:a,pointIndex:l,connectToCommandIndex:c,connectToPointIndex:h}=this;t.save(),t.strokeStyle=this.controlStroke,this.connectionDashArray&&t.setLineDash(this.connectionDashArray);let[u]=o[a],d=vf(r,c,h);if(u==="Q"){let f=vf(r,a,l+2);t.moveTo(f.x,f.y),t.lineTo(e,n)}else t.moveTo(e,n);t.lineTo(d.x,d.y),t.stroke(),t.restore(),super.render(t,e,n,i,r)}},rh=(s,t,e,n,i,r)=>new(e?yf:Nh)(X(X({commandIndex:s,pointIndex:t,actionName:"modifyPath",positionHandler:iw,actionHandler:sw,connectToCommandIndex:i,connectToPointIndex:r},n),e?n.controlPointStyle:n.pointStyle)),UA=Object.freeze({__proto__:null,changeWidth:nf,createObjectDefaultControls:Bf,createPathControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={},n="M";return s.path.forEach(((i,r)=>{let o=i[0];switch(o!=="Z"&&(e["c_".concat(r,"_").concat(o)]=rh(r,i.length-2,!1,t)),o){case"C":e["c_".concat(r,"_C_CP_1")]=rh(r,1,!0,t,r-1,(a=>a==="C"?5:a==="Q"?3:1)(n)),e["c_".concat(r,"_C_CP_2")]=rh(r,3,!0,t,r,5);break;case"Q":e["c_".concat(r,"_Q_CP_1")]=rh(r,1,!0,t,r,3)}n=o})),e},createPolyActionHandler:qg,createPolyControls:function(s){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e={};for(let n=0;n<(typeof s=="number"?s:s.points.length);n++)e["p".concat(n)]=new gn(X({actionName:m_,positionHandler:Yg(n),actionHandler:qg(n)},t));return e},createPolyPositionHandler:Yg,createResizeControls:k0,createTextboxDefaultControls:z0,dragHandler:g0,factoryPolyActionHandler:__,getLocalPoint:Gh,polyActionHandler:g_,renderCircleControl:E0,renderSquareControl:A0,rotationStyleHandler:R0,rotationWithSnapping:P0,scaleCursorStyleHandler:wo,scaleOrSkewActionName:ka,scaleSkewCursorStyleHandler:ur,scalingEqually:Ba,scalingX:O0,scalingXOrSkewingY:sf,scalingY:L0,scalingYOrSkewingX:rf,skewCursorStyleHandler:F0,skewHandlerX:U0,skewHandlerY:B0,wrapWithFireEvent:Bs,wrapWithFixedAnchor:Br}),qh=s=>s.webgl!==void 0;var Hf="precision highp float",rw=`
    `.concat(Hf,`;
    varying vec2 vTexCoord;
    uniform sampler2D uTexture;
    void main() {
      gl_FragColor = texture2D(uTexture, vTexCoord);
    }`),ow=["type"],aw=["type"],lw=new RegExp(Hf,"g"),De=class{get type(){return this.constructor.type}constructor(){let t=Me(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},ow);Object.assign(this,this.constructor.defaults,t)}getFragmentSource(){return rw}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aPosition;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }`}createProgram(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.getFragmentSource(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:this.getVertexSource(),{WebGLProbe:{GLPrecision:i="highp"}}=Ni();i!=="highp"&&(e=e.replace(lw,Hf.replace("highp",i)));let r=t.createShader(t.VERTEX_SHADER),o=t.createShader(t.FRAGMENT_SHADER),a=t.createProgram();if(!r||!o||!a)throw new Kn("Vertex, fragment shader or program creation error");if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw new Kn("Vertex shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(r)));if(t.shaderSource(o,e),t.compileShader(o),!t.getShaderParameter(o,t.COMPILE_STATUS))throw new Kn("Fragment shader compile error for ".concat(this.type,": ").concat(t.getShaderInfoLog(o)));if(t.attachShader(a,r),t.attachShader(a,o),t.linkProgram(a),!t.getProgramParameter(a,t.LINK_STATUS))throw new Kn('Shader link error for "'.concat(this.type,'" ').concat(t.getProgramInfoLog(a)));let l=this.getUniformLocations(t,a)||{};return l.uStepW=t.getUniformLocation(a,"uStepW"),l.uStepH=t.getUniformLocation(a,"uStepH"),{program:a,attributeLocations:this.getAttributeLocations(t,a),uniformLocations:l}}getAttributeLocations(t,e){return{aPosition:t.getAttribLocation(e,"aPosition")}}getUniformLocations(t,e){let n=this.constructor.uniformLocations,i={};for(let r=0;r<n.length;r++)i[n[r]]=t.getUniformLocation(e,n[r]);return i}sendAttributeData(t,e,n){let i=e.aPosition,r=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0),t.bufferData(t.ARRAY_BUFFER,n,t.STATIC_DRAW)}_setupFrameBuffer(t){let e=t.context;if(t.passes>1){let n=t.destinationWidth,i=t.destinationHeight;t.sourceWidth===n&&t.sourceHeight===i||(e.deleteTexture(t.targetTexture),t.targetTexture=t.filterBackend.createTexture(e,n,i)),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t.targetTexture,0)}else e.bindFramebuffer(e.FRAMEBUFFER,null),e.finish()}_swapTextures(t){t.passes--,t.pass++;let e=t.targetTexture;t.targetTexture=t.sourceTexture,t.sourceTexture=e}isNeutralState(t){return!1}applyTo(t){qh(t)?(this._setupFrameBuffer(t),this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){}getCacheKey(){return this.type}retrieveShader(t){let e=this.getCacheKey();return t.programCache[e]||(t.programCache[e]=this.createProgram(t.context)),t.programCache[e]}applyToWebGL(t){let e=t.context,n=this.retrieveShader(t);t.pass===0&&t.originalTexture?e.bindTexture(e.TEXTURE_2D,t.originalTexture):e.bindTexture(e.TEXTURE_2D,t.sourceTexture),e.useProgram(n.program),this.sendAttributeData(e,n.attributeLocations,t.aPosition),e.uniform1f(n.uniformLocations.uStepW,1/t.sourceWidth),e.uniform1f(n.uniformLocations.uStepH,1/t.sourceHeight),this.sendUniformData(e,n.uniformLocations),e.viewport(0,0,t.destinationWidth,t.destinationHeight),e.drawArrays(e.TRIANGLE_STRIP,0,4)}bindAdditionalTexture(t,e,n){t.activeTexture(n),t.bindTexture(t.TEXTURE_2D,e),t.activeTexture(t.TEXTURE0)}unbindAdditionalTexture(t,e){t.activeTexture(e),t.bindTexture(t.TEXTURE_2D,null),t.activeTexture(t.TEXTURE0)}sendUniformData(t,e){}createHelpLayer(t){if(!t.helpLayer){let{sourceWidth:e,sourceHeight:n}=t,i=Vn({width:e,height:n});t.helpLayer=i}}toObject(){let t=Object.keys(this.constructor.defaults||{});return X({type:this.type},t.reduce(((e,n)=>(e[n]=this[n],e)),{}))}toJSON(){return this.toObject()}static async fromObject(t,e){return new this(Me(t,aw))}};j(De,"type","BaseFilter"),j(De,"uniformLocations",[]);var cw={multiply:`gl_FragColor.rgb *= uColor.rgb;
`,screen:`gl_FragColor.rgb = 1.0 - (1.0 - gl_FragColor.rgb) * (1.0 - uColor.rgb);
`,add:`gl_FragColor.rgb += uColor.rgb;
`,difference:`gl_FragColor.rgb = abs(gl_FragColor.rgb - uColor.rgb);
`,subtract:`gl_FragColor.rgb -= uColor.rgb;
`,lighten:`gl_FragColor.rgb = max(gl_FragColor.rgb, uColor.rgb);
`,darken:`gl_FragColor.rgb = min(gl_FragColor.rgb, uColor.rgb);
`,exclusion:`gl_FragColor.rgb += uColor.rgb - 2.0 * (uColor.rgb * gl_FragColor.rgb);
`,overlay:`
    if (uColor.r < 0.5) {
      gl_FragColor.r *= 2.0 * uColor.r;
    } else {
      gl_FragColor.r = 1.0 - 2.0 * (1.0 - gl_FragColor.r) * (1.0 - uColor.r);
    }
    if (uColor.g < 0.5) {
      gl_FragColor.g *= 2.0 * uColor.g;
    } else {
      gl_FragColor.g = 1.0 - 2.0 * (1.0 - gl_FragColor.g) * (1.0 - uColor.g);
    }
    if (uColor.b < 0.5) {
      gl_FragColor.b *= 2.0 * uColor.b;
    } else {
      gl_FragColor.b = 1.0 - 2.0 * (1.0 - gl_FragColor.b) * (1.0 - uColor.b);
    }
    `,tint:`
    gl_FragColor.rgb *= (1.0 - uColor.a);
    gl_FragColor.rgb += uColor.rgb;
    `},dr=class extends De{getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec4 uColor;
      varying vec2 vTexCoord;
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        gl_FragColor = color;
        if (color.a > 0.0) {
          `.concat(cw[this.mode],`
        }
      }
      `)}applyTo2d(t){let{imageData:{data:e}}=t,n=new yn(this.color).getSource(),i=this.alpha,r=n[0]*i,o=n[1]*i,a=n[2]*i,l=1-i;for(let c=0;c<e.length;c+=4){let h=e[c],u=e[c+1],d=e[c+2],f,p,x;switch(this.mode){case"multiply":f=h*r/255,p=u*o/255,x=d*a/255;break;case"screen":f=255-(255-h)*(255-r)/255,p=255-(255-u)*(255-o)/255,x=255-(255-d)*(255-a)/255;break;case"add":f=h+r,p=u+o,x=d+a;break;case"difference":f=Math.abs(h-r),p=Math.abs(u-o),x=Math.abs(d-a);break;case"subtract":f=h-r,p=u-o,x=d-a;break;case"darken":f=Math.min(h,r),p=Math.min(u,o),x=Math.min(d,a);break;case"lighten":f=Math.max(h,r),p=Math.max(u,o),x=Math.max(d,a);break;case"overlay":f=r<128?2*h*r/255:255-2*(255-h)*(255-r)/255,p=o<128?2*u*o/255:255-2*(255-u)*(255-o)/255,x=a<128?2*d*a/255:255-2*(255-d)*(255-a)/255;break;case"exclusion":f=r+h-2*r*h/255,p=o+u-2*o*u/255,x=a+d-2*a*d/255;break;case"tint":f=r+h*l,p=o+u*l,x=a+d*l}e[c]=f,e[c+1]=p,e[c+2]=x}}sendUniformData(t,e){let n=new yn(this.color).getSource();n[0]=this.alpha*n[0]/255,n[1]=this.alpha*n[1]/255,n[2]=this.alpha*n[2]/255,n[3]=this.alpha,t.uniform4fv(e.uColor,n)}};j(dr,"defaults",{color:"#F95C63",mode:"multiply",alpha:1}),j(dr,"type","BlendColor"),j(dr,"uniformLocations",["uColor"]),Et.setClass(dr);var hw={multiply:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.rgba *= color2.rgba;
      gl_FragColor = color;
    }
    `,mask:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform sampler2D uImage;
    uniform vec4 uColor;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      vec4 color2 = texture2D(uImage, vTexCoord2);
      color.a = color2.a;
      gl_FragColor = color;
    }
    `},uw=["type","image"],fr=class extends De{getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return hw[this.mode]}getVertexSource(){return`
    attribute vec2 aPosition;
    varying vec2 vTexCoord;
    varying vec2 vTexCoord2;
    uniform mat3 uTransformMatrix;
    void main() {
      vTexCoord = aPosition;
      vTexCoord2 = (uTransformMatrix * vec3(aPosition, 1.0)).xy;
      gl_Position = vec4(aPosition * 2.0 - 1.0, 0.0, 1.0);
    }
    `}applyToWebGL(t){let e=t.context,n=this.createTexture(t.filterBackend,this.image);this.bindAdditionalTexture(e,n,e.TEXTURE1),super.applyToWebGL(t),this.unbindAdditionalTexture(e,e.TEXTURE1)}createTexture(t,e){return t.getCachedTexture(e.cacheKey,e.getElement())}calculateMatrix(){let t=this.image,{width:e,height:n}=t.getElement();return[1/t.scaleX,0,0,0,1/t.scaleY,0,-t.left/e,-t.top/n,1]}applyTo2d(t){let{imageData:{data:e,width:n,height:i},filterBackend:{resources:r}}=t,o=this.image;r.blendImage||(r.blendImage=Ui());let a=r.blendImage,l=a.getContext("2d");a.width!==n||a.height!==i?(a.width=n,a.height=i):l.clearRect(0,0,n,i),l.setTransform(o.scaleX,0,0,o.scaleY,o.left,o.top),l.drawImage(o.getElement(),0,0,n,i);let c=l.getImageData(0,0,n,i).data;for(let h=0;h<e.length;h+=4){let u=e[h],d=e[h+1],f=e[h+2],p=e[h+3],x=c[h],m=c[h+1],g=c[h+2],S=c[h+3];switch(this.mode){case"multiply":e[h]=u*x/255,e[h+1]=d*m/255,e[h+2]=f*g/255,e[h+3]=p*S/255;break;case"mask":e[h+3]=S}}}sendUniformData(t,e){let n=this.calculateMatrix();t.uniform1i(e.uImage,1),t.uniformMatrix3fv(e.uTransformMatrix,!1,n)}toObject(){return X(X({},super.toObject()),{},{image:this.image&&this.image.toObject()})}static async fromObject(t,e){let{type:n,image:i}=t,r=Me(t,uw);return Zn.fromObject(i,e).then((o=>new this(X(X({},r),{},{image:o}))))}};j(fr,"type","BlendImage"),j(fr,"defaults",{mode:"multiply",alpha:1}),j(fr,"uniformLocations",["uTransformMatrix","uImage"]),Et.setClass(fr);var pr=class extends De{getFragmentSource(){return`
    precision highp float;
    uniform sampler2D uTexture;
    uniform vec2 uDelta;
    varying vec2 vTexCoord;
    const float nSamples = 15.0;
    vec3 v3offset = vec3(12.9898, 78.233, 151.7182);
    float random(vec3 scale) {
      /* use the fragment position for a different seed per-pixel */
      return fract(sin(dot(gl_FragCoord.xyz, scale)) * 43758.5453);
    }
    void main() {
      vec4 color = vec4(0.0);
      float totalC = 0.0;
      float totalA = 0.0;
      float offset = random(v3offset);
      for (float t = -nSamples; t <= nSamples; t++) {
        float percent = (t + offset - 0.5) / nSamples;
        vec4 sample = texture2D(uTexture, vTexCoord + uDelta * percent);
        float weight = 1.0 - abs(percent);
        float alpha = weight * sample.a;
        color.rgb += sample.rgb * alpha;
        color.a += alpha;
        totalA += weight;
        totalC += alpha;
      }
      gl_FragColor.rgb = color.rgb / totalC;
      gl_FragColor.a = color.a / totalA;
    }
  `}applyTo(t){qh(t)?(this.aspectRatio=t.sourceWidth/t.sourceHeight,t.passes++,this._setupFrameBuffer(t),this.horizontal=!0,this.applyToWebGL(t),this._swapTextures(t),this._setupFrameBuffer(t),this.horizontal=!1,this.applyToWebGL(t),this._swapTextures(t)):this.applyTo2d(t)}applyTo2d(t){let{imageData:{data:e,width:n,height:i}}=t;this.aspectRatio=n/i,this.horizontal=!0;let r=this.getBlurValue()*n,o=new Uint8ClampedArray(e),a=15,l=4*n;for(let c=0;c<e.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c-c%l,m=x+l;for(let g=-14;g<a;g++){let S=g/a,P=4*Math.floor(r*S),T=1-Math.abs(S),A=c+P;A<x?A=x:A>m&&(A=m);let D=e[A+3]*T;h+=e[A]*D,u+=e[A+1]*D,d+=e[A+2]*D,f+=D,p+=T}o[c]=h/f,o[c+1]=u/f,o[c+2]=d/f,o[c+3]=f/p}this.horizontal=!1,r=this.getBlurValue()*i;for(let c=0;c<o.length;c+=4){let h=0,u=0,d=0,f=0,p=0,x=c%l,m=o.length-l+x;for(let g=-14;g<a;g++){let S=g/a,P=Math.floor(r*S)*l,T=1-Math.abs(S),A=c+P;A<x?A=x:A>m&&(A=m);let D=o[A+3]*T;h+=o[A]*D,u+=o[A+1]*D,d+=o[A+2]*D,f+=D,p+=T}e[c]=h/f,e[c+1]=u/f,e[c+2]=d/f,e[c+3]=f/p}}sendUniformData(t,e){let n=this.chooseRightDelta();t.uniform2fv(e.uDelta,n)}isNeutralState(){return this.blur===0}getBlurValue(){let t=1,{horizontal:e,aspectRatio:n}=this;return e?n>1&&(t=1/n):n<1&&(t=n),t*this.blur*.12}chooseRightDelta(){let t=this.getBlurValue();return this.horizontal?[t,0]:[0,t]}};j(pr,"type","Blur"),j(pr,"defaults",{blur:0}),j(pr,"uniformLocations",["uDelta"]),Et.setClass(pr);var mr=class extends De{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBrightness;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += uBrightness;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.round(255*this.brightness);for(let i=0;i<e.length;i+=4)e[i]+=n,e[i+1]+=n,e[i+2]+=n}isNeutralState(){return this.brightness===0}sendUniformData(t,e){t.uniform1f(e.uBrightness,this.brightness)}};j(mr,"type","Brightness"),j(mr,"defaults",{brightness:0}),j(mr,"uniformLocations",["uBrightness"]),Et.setClass(mr);var x_={matrix:[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],colorsOnly:!0},is=class extends De{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  varying vec2 vTexCoord;
  uniform mat4 uColorMatrix;
  uniform vec4 uConstants;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color *= uColorMatrix;
    color += uConstants;
    gl_FragColor = color;
  }`}applyTo2d(t){let e=t.imageData.data,n=this.matrix,i=this.colorsOnly;for(let r=0;r<e.length;r+=4){let o=e[r],a=e[r+1],l=e[r+2];if(e[r]=o*n[0]+a*n[1]+l*n[2]+255*n[4],e[r+1]=o*n[5]+a*n[6]+l*n[7]+255*n[9],e[r+2]=o*n[10]+a*n[11]+l*n[12]+255*n[14],!i){let c=e[r+3];e[r]+=c*n[3],e[r+1]+=c*n[8],e[r+2]+=c*n[13],e[r+3]=o*n[15]+a*n[16]+l*n[17]+c*n[18]+255*n[19]}}}sendUniformData(t,e){let n=this.matrix,i=[n[0],n[1],n[2],n[3],n[5],n[6],n[7],n[8],n[10],n[11],n[12],n[13],n[15],n[16],n[17],n[18]],r=[n[4],n[9],n[14],n[19]];t.uniformMatrix4fv(e.uColorMatrix,!1,i),t.uniform4fv(e.uConstants,r)}toObject(){return X(X({},super.toObject()),{},{matrix:[...this.matrix]})}};function kr(s,t){var e;let n=(j(e=class extends is{toObject(){return{type:this.type,colorsOnly:this.colorsOnly}}},"type",s),j(e,"defaults",{colorsOnly:!1,matrix:t}),e);return Et.setClass(n,s),n}j(is,"type","ColorMatrix"),j(is,"defaults",x_),j(is,"uniformLocations",["uColorMatrix","uConstants"]),Et.setClass(is);var dw=kr("Brownie",[.5997,.34553,-.27082,0,.186,-.0377,.86095,.15059,0,-.1449,.24113,-.07441,.44972,0,-.02965,0,0,0,1,0]),fw=kr("Vintage",[.62793,.32021,-.03965,0,.03784,.02578,.64411,.03259,0,.02926,.0466,-.08512,.52416,0,.02023,0,0,0,1,0]),pw=kr("Kodachrome",[1.12855,-.39673,-.03992,0,.24991,-.16404,1.08352,-.05498,0,.09698,-.16786,-.56034,1.60148,0,.13972,0,0,0,1,0]),mw=kr("Technicolor",[1.91252,-.85453,-.09155,0,.04624,-.30878,1.76589,-.10601,0,-.27589,-.2311,-.75018,1.84759,0,.12137,0,0,0,1,0]),gw=kr("Polaroid",[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0]),_w=kr("Sepia",[.393,.769,.189,0,0,.349,.686,.168,0,0,.272,.534,.131,0,0,0,0,0,1,0]),xw=kr("BlackWhite",[1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,1.5,1.5,1.5,0,-1,0,0,0,1,0]),Za=class extends De{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.subFilters=t.subFilters||[]}applyTo(t){qh(t)&&(t.passes+=this.subFilters.length-1),this.subFilters.forEach((e=>{e.applyTo(t)}))}toObject(){return{type:this.type,subFilters:this.subFilters.map((t=>t.toObject()))}}isNeutralState(){return!this.subFilters.some((t=>!t.isNeutralState()))}static fromObject(t,e){return Promise.all((t.subFilters||[]).map((n=>Et.getClass(n.type).fromObject(n,e)))).then((n=>new this({subFilters:n})))}};j(Za,"type","Composed"),Et.setClass(Za);var gr=class extends De{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uContrast;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float contrastF = 1.015 * (uContrast + 1.0) / (1.0 * (1.015 - uContrast));
    color.rgb = contrastF * (color.rgb - 0.5) + 0.5;
    gl_FragColor = color;
  }`}isNeutralState(){return this.contrast===0}applyTo2d(t){let{imageData:{data:e}}=t,n=Math.floor(255*this.contrast),i=259*(n+255)/(255*(259-n));for(let r=0;r<e.length;r+=4)e[r]=i*(e[r]-128)+128,e[r+1]=i*(e[r+1]-128)+128,e[r+2]=i*(e[r+2]-128)+128}sendUniformData(t,e){t.uniform1f(e.uContrast,this.contrast)}};j(gr,"type","Contrast"),j(gr,"defaults",{contrast:0}),j(gr,"uniformLocations",["uContrast"]),Et.setClass(gr);var vw={Convolute_3_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1), uStepH * (h - 1));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 3.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_3_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[9];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 3.0; h+=1.0) {
        for (float w = 0.0; w < 3.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 1.0), uStepH * (h - 1.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 3.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_5_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 5.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_5_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[25];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 5.0; h+=1.0) {
        for (float w = 0.0; w < 5.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 2.0), uStepH * (h - 2.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 5.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_7_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 7.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_7_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[49];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 7.0; h+=1.0) {
        for (float w = 0.0; w < 7.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 3.0), uStepH * (h - 3.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 7.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `,Convolute_9_1:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 0);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color += texture2D(uTexture, vTexCoord + matrixPos) * uMatrix[int(h * 9.0 + w)];
        }
      }
      gl_FragColor = color;
    }
    `,Convolute_9_0:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform float uMatrix[81];
    uniform float uStepW;
    uniform float uStepH;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = vec4(0, 0, 0, 1);
      for (float h = 0.0; h < 9.0; h+=1.0) {
        for (float w = 0.0; w < 9.0; w+=1.0) {
          vec2 matrixPos = vec2(uStepW * (w - 4.0), uStepH * (h - 4.0));
          color.rgb += texture2D(uTexture, vTexCoord + matrixPos).rgb * uMatrix[int(h * 9.0 + w)];
        }
      }
      float alpha = texture2D(uTexture, vTexCoord).a;
      gl_FragColor = color;
      gl_FragColor.a = alpha;
    }
    `},_r=class extends De{getCacheKey(){return"".concat(this.type,"_").concat(Math.sqrt(this.matrix.length),"_").concat(this.opaque?1:0)}getFragmentSource(){return vw[this.getCacheKey()]}applyTo2d(t){let e=t.imageData,n=e.data,i=this.matrix,r=Math.round(Math.sqrt(i.length)),o=Math.floor(r/2),a=e.width,l=e.height,c=t.ctx.createImageData(a,l),h=c.data,u=this.opaque?1:0,d,f,p,x,m,g,S,P,T,A,D,_,y;for(D=0;D<l;D++)for(A=0;A<a;A++){for(m=4*(D*a+A),d=0,f=0,p=0,x=0,y=0;y<r;y++)for(_=0;_<r;_++)S=D+y-o,g=A+_-o,S<0||S>=l||g<0||g>=a||(P=4*(S*a+g),T=i[y*r+_],d+=n[P]*T,f+=n[P+1]*T,p+=n[P+2]*T,u||(x+=n[P+3]*T));h[m]=d,h[m+1]=f,h[m+2]=p,h[m+3]=u?n[m+3]:x}t.imageData=c}sendUniformData(t,e){t.uniform1fv(e.uMatrix,this.matrix)}toObject(){return X(X({},super.toObject()),{},{opaque:this.opaque,matrix:[...this.matrix]})}};j(_r,"type","Convolute"),j(_r,"defaults",{opaque:!1,matrix:[0,0,0,0,1,0,0,0,0]}),j(_r,"uniformLocations",["uMatrix","uOpaque","uHalfSize","uSize"]),Et.setClass(_r);var v_="Gamma",xr=class extends De{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform vec3 uGamma;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    vec3 correction = (1.0 / uGamma);
    color.r = pow(color.r, correction.r);
    color.g = pow(color.g, correction.g);
    color.b = pow(color.b, correction.b);
    gl_FragColor = color;
    gl_FragColor.rgb *= color.a;
  }
`}constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};super(t),this.gamma=t.gamma||this.constructor.defaults.gamma.concat()}applyTo2d(t){let{imageData:{data:e}}=t,n=this.gamma,i=1/n[0],r=1/n[1],o=1/n[2];this.rgbValues||(this.rgbValues={r:new Uint8Array(256),g:new Uint8Array(256),b:new Uint8Array(256)});let a=this.rgbValues;for(let l=0;l<256;l++)a.r[l]=255*Math.pow(l/255,i),a.g[l]=255*Math.pow(l/255,r),a.b[l]=255*Math.pow(l/255,o);for(let l=0;l<e.length;l+=4)e[l]=a.r[e[l]],e[l+1]=a.g[e[l+1]],e[l+2]=a.b[e[l+2]]}sendUniformData(t,e){t.uniform3fv(e.uGamma,this.gamma)}isNeutralState(){let{gamma:t}=this;return t[0]===1&&t[1]===1&&t[2]===1}toObject(){return{type:v_,gamma:this.gamma.concat()}}};j(xr,"type",v_),j(xr,"defaults",{gamma:[1,1,1]}),j(xr,"uniformLocations",["uGamma"]),Et.setClass(xr);var yw={average:`
    precision highp float;
    uniform sampler2D uTexture;
    varying vec2 vTexCoord;
    void main() {
      vec4 color = texture2D(uTexture, vTexCoord);
      float average = (color.r + color.b + color.g) / 3.0;
      gl_FragColor = vec4(average, average, average, color.a);
    }
    `,lightness:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = (max(max(col.r, col.g),col.b) + min(min(col.r, col.g),col.b)) / 2.0;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `,luminosity:`
    precision highp float;
    uniform sampler2D uTexture;
    uniform int uMode;
    varying vec2 vTexCoord;
    void main() {
      vec4 col = texture2D(uTexture, vTexCoord);
      float average = 0.21 * col.r + 0.72 * col.g + 0.07 * col.b;
      gl_FragColor = vec4(average, average, average, col.a);
    }
    `},vr=class extends De{applyTo2d(t){let{imageData:{data:e}}=t;for(let n,i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2];switch(this.mode){case"average":n=(r+o+a)/3;break;case"lightness":n=(Math.min(r,o,a)+Math.max(r,o,a))/2;break;case"luminosity":n=.21*r+.72*o+.07*a}e[i+2]=e[i+1]=e[i]=n}}getCacheKey(){return"".concat(this.type,"_").concat(this.mode)}getFragmentSource(){return yw[this.mode]}sendUniformData(t,e){t.uniform1i(e.uMode,1)}isNeutralState(){return!1}};j(vr,"type","Grayscale"),j(vr,"defaults",{mode:"average"}),j(vr,"uniformLocations",["uMode"]),Et.setClass(vr);var Sw=X(X({},x_),{},{rotation:0}),Io=class extends is{calculateMatrix(){let t=this.rotation*Math.PI,e=gi(t),n=_i(t),i=1/3,r=Math.sqrt(i)*n,o=1-e;this.matrix=[e+o/3,i*o-r,i*o+r,0,0,i*o+r,e+i*o,i*o-r,0,0,i*o-r,i*o+r,e+i*o,0,0,0,0,0,1,0]}isNeutralState(){return this.rotation===0}applyTo(t){this.calculateMatrix(),super.applyTo(t)}toObject(){return{type:this.type,rotation:this.rotation}}};j(Io,"type","HueRotation"),j(Io,"defaults",Sw),Et.setClass(Io);var yr=class extends De{applyTo2d(t){let{imageData:{data:e}}=t;for(let n=0;n<e.length;n+=4)e[n]=255-e[n],e[n+1]=255-e[n+1],e[n+2]=255-e[n+2],this.alpha&&(e[n+3]=255-e[n+3])}getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform int uInvert;
  uniform int uAlpha;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    if (uInvert == 1) {
      if (uAlpha == 1) {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,1.0 -color.a);
      } else {
        gl_FragColor = vec4(1.0 - color.r,1.0 -color.g,1.0 -color.b,color.a);
      }
    } else {
      gl_FragColor = color;
    }
  }
`}isNeutralState(){return!this.invert}sendUniformData(t,e){t.uniform1i(e.uInvert,Number(this.invert)),t.uniform1i(e.uAlpha,Number(this.alpha))}};j(yr,"type","Invert"),j(yr,"defaults",{alpha:!1,invert:!0}),j(yr,"uniformLocations",["uInvert","uAlpha"]),Et.setClass(yr);var Sr=class extends De{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uStepH;
  uniform float uNoise;
  uniform float uSeed;
  varying vec2 vTexCoord;
  float rand(vec2 co, float seed, float vScale) {
    return fract(sin(dot(co.xy * vScale ,vec2(12.9898 , 78.233))) * 43758.5453 * (seed + 0.01) / 2.0);
  }
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    color.rgb += (0.5 - rand(vTexCoord, uSeed, 0.1 / uStepH)) * uNoise;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=this.noise;for(let i=0;i<e.length;i+=4){let r=(.5-Math.random())*n;e[i]+=r,e[i+1]+=r,e[i+2]+=r}}sendUniformData(t,e){t.uniform1f(e.uNoise,this.noise/255),t.uniform1f(e.uSeed,Math.random())}isNeutralState(){return this.noise===0}};j(Sr,"type","Noise"),j(Sr,"defaults",{noise:0}),j(Sr,"uniformLocations",["uNoise","uSeed"]),Et.setClass(Sr);var br=class extends De{applyTo2d(t){let{imageData:{data:e,width:n,height:i}}=t;for(let r=0;r<i;r+=this.blocksize)for(let o=0;o<n;o+=this.blocksize){let a=4*r*n+4*o,l=e[a],c=e[a+1],h=e[a+2],u=e[a+3];for(let d=r;d<Math.min(r+this.blocksize,i);d++)for(let f=o;f<Math.min(o+this.blocksize,n);f++){let p=4*d*n+4*f;e[p]=l,e[p+1]=c,e[p+2]=h,e[p+3]=u}}}isNeutralState(){return this.blocksize===1}getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uBlocksize;
  uniform float uStepW;
  uniform float uStepH;
  varying vec2 vTexCoord;
  void main() {
    float blockW = uBlocksize * uStepW;
    float blockH = uBlocksize * uStepH;
    int posX = int(vTexCoord.x / blockW);
    int posY = int(vTexCoord.y / blockH);
    float fposX = float(posX);
    float fposY = float(posY);
    vec2 squareCoords = vec2(fposX * blockW, fposY * blockH);
    vec4 color = texture2D(uTexture, squareCoords);
    gl_FragColor = color;
  }
`}sendUniformData(t,e){t.uniform1f(e.uBlocksize,this.blocksize)}};j(br,"type","Pixelate"),j(br,"defaults",{blocksize:4}),j(br,"uniformLocations",["uBlocksize"]),Et.setClass(br);var Mr=class extends De{getFragmentSource(){return`
precision highp float;
uniform sampler2D uTexture;
uniform vec4 uLow;
uniform vec4 uHigh;
varying vec2 vTexCoord;
void main() {
  gl_FragColor = texture2D(uTexture, vTexCoord);
  if(all(greaterThan(gl_FragColor.rgb,uLow.rgb)) && all(greaterThan(uHigh.rgb,gl_FragColor.rgb))) {
    gl_FragColor.a = 0.0;
  }
}
`}applyTo2d(t){let{imageData:{data:e}}=t,n=255*this.distance,i=new yn(this.color).getSource(),r=[i[0]-n,i[1]-n,i[2]-n],o=[i[0]+n,i[1]+n,i[2]+n];for(let a=0;a<e.length;a+=4){let l=e[a],c=e[a+1],h=e[a+2];l>r[0]&&c>r[1]&&h>r[2]&&l<o[0]&&c<o[1]&&h<o[2]&&(e[a+3]=0)}}sendUniformData(t,e){let n=new yn(this.color).getSource(),i=this.distance,r=[0+n[0]/255-i,0+n[1]/255-i,0+n[2]/255-i,1],o=[n[0]/255+i,n[1]/255+i,n[2]/255+i,1];t.uniform4fv(e.uLow,r),t.uniform4fv(e.uHigh,o)}};j(Mr,"type","RemoveColor"),j(Mr,"defaults",{color:"#FFFFFF",distance:.02,useAlpha:!1}),j(Mr,"uniformLocations",["uLow","uHigh"]),Et.setClass(Mr);var wr=class extends De{sendUniformData(t,e){t.uniform2fv(e.uDelta,this.horizontal?[1/this.width,0]:[0,1/this.height]),t.uniform1fv(e.uTaps,this.taps)}getFilterWindow(){let t=this.tempScale;return Math.ceil(this.lanczosLobes/t)}getCacheKey(){let t=this.getFilterWindow();return"".concat(this.type,"_").concat(t)}getFragmentSource(){let t=this.getFilterWindow();return this.generateShader(t)}getTaps(){let t=this.lanczosCreate(this.lanczosLobes),e=this.tempScale,n=this.getFilterWindow(),i=new Array(n);for(let r=1;r<=n;r++)i[r-1]=t(r*e);return i}generateShader(t){let e=new Array(t);for(let n=1;n<=t;n++)e[n-1]="".concat(n,".0 * uDelta");return`
      precision highp float;
      uniform sampler2D uTexture;
      uniform vec2 uDelta;
      varying vec2 vTexCoord;
      uniform float uTaps[`.concat(t,`];
      void main() {
        vec4 color = texture2D(uTexture, vTexCoord);
        float sum = 1.0;
        `).concat(e.map(((n,i)=>`
              color += texture2D(uTexture, vTexCoord + `.concat(n,") * uTaps[").concat(i,"] + texture2D(uTexture, vTexCoord - ").concat(n,") * uTaps[").concat(i,`];
              sum += 2.0 * uTaps[`).concat(i,`];
            `))).join(`
`),`
        gl_FragColor = color / sum;
      }
    `)}applyToForWebgl(t){t.passes++,this.width=t.sourceWidth,this.horizontal=!0,this.dW=Math.round(this.width*this.scaleX),this.dH=t.sourceHeight,this.tempScale=this.dW/this.width,this.taps=this.getTaps(),t.destinationWidth=this.dW,super.applyTo(t),t.sourceWidth=t.destinationWidth,this.height=t.sourceHeight,this.horizontal=!1,this.dH=Math.round(this.height*this.scaleY),this.tempScale=this.dH/this.height,this.taps=this.getTaps(),t.destinationHeight=this.dH,super.applyTo(t),t.sourceHeight=t.destinationHeight}applyTo(t){qh(t)?this.applyToForWebgl(t):this.applyTo2d(t)}isNeutralState(){return this.scaleX===1&&this.scaleY===1}lanczosCreate(t){return e=>{if(e>=t||e<=-t)return 0;if(e<11920929e-14&&e>-11920929e-14)return 1;let n=(e*=Math.PI)/t;return Math.sin(e)/e*Math.sin(n)/n}}applyTo2d(t){let e=t.imageData,n=this.scaleX,i=this.scaleY;this.rcpScaleX=1/n,this.rcpScaleY=1/i;let r=e.width,o=e.height,a=Math.round(r*n),l=Math.round(o*i),c;c=this.resizeType==="sliceHack"?this.sliceByTwo(t,r,o,a,l):this.resizeType==="hermite"?this.hermiteFastResize(t,r,o,a,l):this.resizeType==="bilinear"?this.bilinearFiltering(t,r,o,a,l):this.resizeType==="lanczos"?this.lanczosResize(t,r,o,a,l):new ImageData(a,l),t.imageData=c}sliceByTwo(t,e,n,i,r){let o=t.imageData,a=.5,l=!1,c=!1,h=e*a,u=n*a,d=t.filterBackend.resources,f=0,p=0,x=e,m=0;d.sliceByTwo||(d.sliceByTwo=Ui());let g=d.sliceByTwo;(g.width<1.5*e||g.height<n)&&(g.width=1.5*e,g.height=n);let S=g.getContext("2d");for(S.clearRect(0,0,1.5*e,n),S.putImageData(o,0,0),i=Math.floor(i),r=Math.floor(r);!l||!c;)e=h,n=u,i<Math.floor(h*a)?h=Math.floor(h*a):(h=i,l=!0),r<Math.floor(u*a)?u=Math.floor(u*a):(u=r,c=!0),S.drawImage(g,f,p,e,n,x,m,h,u),f=x,p=m,m+=u;return S.getImageData(f,p,i,r)}lanczosResize(t,e,n,i,r){let o=t.imageData.data,a=t.ctx.createImageData(i,r),l=a.data,c=this.lanczosCreate(this.lanczosLobes),h=this.rcpScaleX,u=this.rcpScaleY,d=2/this.rcpScaleX,f=2/this.rcpScaleY,p=Math.ceil(h*this.lanczosLobes/2),x=Math.ceil(u*this.lanczosLobes/2),m={},g={x:0,y:0},S={x:0,y:0};return(function P(T){let A,D,_,y,C,E,R,L,G,O,Z;for(g.x=(T+.5)*h,S.x=Math.floor(g.x),A=0;A<r;A++){for(g.y=(A+.5)*u,S.y=Math.floor(g.y),C=0,E=0,R=0,L=0,G=0,D=S.x-p;D<=S.x+p;D++)if(!(D<0||D>=e)){O=Math.floor(1e3*Math.abs(D-g.x)),m[O]||(m[O]={});for(let $=S.y-x;$<=S.y+x;$++)$<0||$>=n||(Z=Math.floor(1e3*Math.abs($-g.y)),m[O][Z]||(m[O][Z]=c(Math.sqrt(Math.pow(O*d,2)+Math.pow(Z*f,2))/1e3)),_=m[O][Z],_>0&&(y=4*($*e+D),C+=_,E+=_*o[y],R+=_*o[y+1],L+=_*o[y+2],G+=_*o[y+3]))}y=4*(A*i+T),l[y]=E/C,l[y+1]=R/C,l[y+2]=L/C,l[y+3]=G/C}return++T<i?P(T):a})(0)}bilinearFiltering(t,e,n,i,r){let o,a,l,c,h,u,d,f,p,x,m,g,S,P=0,T=this.rcpScaleX,A=this.rcpScaleY,D=4*(e-1),_=t.imageData.data,y=t.ctx.createImageData(i,r),C=y.data;for(d=0;d<r;d++)for(f=0;f<i;f++)for(h=Math.floor(T*f),u=Math.floor(A*d),p=T*f-h,x=A*d-u,S=4*(u*e+h),m=0;m<4;m++)o=_[S+m],a=_[S+4+m],l=_[S+D+m],c=_[S+D+4+m],g=o*(1-p)*(1-x)+a*p*(1-x)+l*x*(1-p)+c*p*x,C[P++]=g;return y}hermiteFastResize(t,e,n,i,r){let o=this.rcpScaleX,a=this.rcpScaleY,l=Math.ceil(o/2),c=Math.ceil(a/2),h=t.imageData.data,u=t.ctx.createImageData(i,r),d=u.data;for(let f=0;f<r;f++)for(let p=0;p<i;p++){let x=4*(p+f*i),m=0,g=0,S=0,P=0,T=0,A=0,D=0,_=(f+.5)*a;for(let y=Math.floor(f*a);y<(f+1)*a;y++){let C=Math.abs(_-(y+.5))/c,E=(p+.5)*o,R=C*C;for(let L=Math.floor(p*o);L<(p+1)*o;L++){let G=Math.abs(E-(L+.5))/l,O=Math.sqrt(R+G*G);O>1&&O<-1||(m=2*O*O*O-3*O*O+1,m>0&&(G=4*(L+y*e),D+=m*h[G+3],S+=m,h[G+3]<255&&(m=m*h[G+3]/250),P+=m*h[G],T+=m*h[G+1],A+=m*h[G+2],g+=m))}}d[x]=P/g,d[x+1]=T/g,d[x+2]=A/g,d[x+3]=D/S}return u}};j(wr,"type","Resize"),j(wr,"defaults",{resizeType:"hermite",scaleX:1,scaleY:1,lanczosLobes:3}),j(wr,"uniformLocations",["uDelta","uTaps"]),Et.setClass(wr);var Tr=class extends De{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uSaturation;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float rgMax = max(color.r, color.g);
    float rgbMax = max(rgMax, color.b);
    color.r += rgbMax != color.r ? (rgbMax - color.r) * uSaturation : 0.00;
    color.g += rgbMax != color.g ? (rgbMax - color.g) * uSaturation : 0.00;
    color.b += rgbMax != color.b ? (rgbMax - color.b) * uSaturation : 0.00;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=-this.saturation;for(let i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2],l=Math.max(r,o,a);e[i]+=l!==r?(l-r)*n:0,e[i+1]+=l!==o?(l-o)*n:0,e[i+2]+=l!==a?(l-a)*n:0}}sendUniformData(t,e){t.uniform1f(e.uSaturation,-this.saturation)}isNeutralState(){return this.saturation===0}};j(Tr,"type","Saturation"),j(Tr,"defaults",{saturation:0}),j(Tr,"uniformLocations",["uSaturation"]),Et.setClass(Tr);var Cr=class extends De{getFragmentSource(){return`
  precision highp float;
  uniform sampler2D uTexture;
  uniform float uVibrance;
  varying vec2 vTexCoord;
  void main() {
    vec4 color = texture2D(uTexture, vTexCoord);
    float max = max(color.r, max(color.g, color.b));
    float avg = (color.r + color.g + color.b) / 3.0;
    float amt = (abs(max - avg) * 2.0) * uVibrance;
    color.r += max != color.r ? (max - color.r) * amt : 0.00;
    color.g += max != color.g ? (max - color.g) * amt : 0.00;
    color.b += max != color.b ? (max - color.b) * amt : 0.00;
    gl_FragColor = color;
  }
`}applyTo2d(t){let{imageData:{data:e}}=t,n=-this.vibrance;for(let i=0;i<e.length;i+=4){let r=e[i],o=e[i+1],a=e[i+2],l=Math.max(r,o,a),c=(r+o+a)/3,h=2*Math.abs(l-c)/255*n;e[i]+=l!==r?(l-r)*h:0,e[i+1]+=l!==o?(l-o)*h:0,e[i+2]+=l!==a?(l-a)*h:0}}sendUniformData(t,e){t.uniform1f(e.uVibrance,-this.vibrance)}isNeutralState(){return this.vibrance===0}};j(Cr,"type","Vibrance"),j(Cr,"defaults",{vibrance:0}),j(Cr,"uniformLocations",["uVibrance"]),Et.setClass(Cr);var BA=Object.freeze({__proto__:null,BaseFilter:De,BlackWhite:xw,BlendColor:dr,BlendImage:fr,Blur:pr,Brightness:mr,Brownie:dw,ColorMatrix:is,Composed:Za,Contrast:gr,Convolute:_r,Gamma:xr,Grayscale:vr,HueRotation:Io,Invert:yr,Kodachrome:pw,Noise:Sr,Pixelate:br,Polaroid:gw,RemoveColor:Mr,Resize:wr,Saturation:Tr,Sepia:_w,Technicolor:mw,Vibrance:Cr,Vintage:fw});var Gt=s=>Math.round(s*100)/100,el=s=>s*Math.PI/180,Xe=s=>"M"+s.map(t=>Gt(t[0])+" "+Gt(t[1])).join("L")+"Z",We=(s,t,e,n)=>`M${Gt(s-e)} ${Gt(t)}A${Gt(e)} ${Gt(n)} 0 1 1 ${Gt(s+e)} ${Gt(t)}A${Gt(e)} ${Gt(n)} 0 1 1 ${Gt(s-e)} ${Gt(t)}Z`,y_=(s,t,e,n)=>`M${Gt(s-e)} ${Gt(t)}A${Gt(e)} ${Gt(n)} 0 1 0 ${Gt(s+e)} ${Gt(t)}A${Gt(e)} ${Gt(n)} 0 1 0 ${Gt(s-e)} ${Gt(t)}Z`,Gn=(s,t,e,n,i=0)=>i?`M${Gt(s+i)} ${Gt(t)}H${Gt(s+e-i)}Q${Gt(s+e)} ${Gt(t)} ${Gt(s+e)} ${Gt(t+i)}V${Gt(t+n-i)}Q${Gt(s+e)} ${Gt(t+n)} ${Gt(s+e-i)} ${Gt(t+n)}H${Gt(s+i)}Q${Gt(s)} ${Gt(t+n)} ${Gt(s)} ${Gt(t+n-i)}V${Gt(t+i)}Q${Gt(s)} ${Gt(t)} ${Gt(s+i)} ${Gt(t)}Z`:`M${Gt(s)} ${Gt(t)}H${Gt(s+e)}V${Gt(t+n)}H${Gt(s)}Z`,tl=(s,t,e,n)=>`M${Gt(s)} ${Gt(t)}V${Gt(t+n)}H${Gt(s+e)}V${Gt(t)}Z`,Wf=(s,t,e,n,i,r=-90)=>Xe(Array.from({length:e*2},(o,a)=>{let l=el(r+a*180/e),c=a%2?i:n;return[s+Math.cos(l)*c,t+Math.sin(l)*c]})),$n=(s,t,e,n)=>[s+Math.cos(el(n))*e,t+Math.sin(el(n))*e];function Ho(s,t,e,n,i,r,o=16){let a=[],l=[];for(let c=0;c<=o;c++){let h=n+(i-n)*c/o;a.push($n(s,t,e+r/2,h)),l.unshift($n(s,t,e-r/2,h))}return Xe(a.concat(l))}function bw(){let s=7,t=()=>(s=s*16807%2147483647,s/2147483647),e="";for(let n=0;n<16;n++){let i=8+t()*84,r=8+t()*84,o=3+t()*3.5;if(n%3===0)e+=We(i,r,o,o);else{let a=t()*180,l=Math.cos(el(a)),c=Math.sin(el(a)),h=o*1.9,u=o*.7;e+=Xe([[-h,-u],[h,-u],[h,u],[-h,u]].map(([d,f])=>[i+d*l-f*c,r+d*c+f*l]))}}return e}function Mw(){let s=We(50,50,46,46)+y_(50,50,41,41)+Xe([0,1,2,3,4].map(t=>$n(50,50,16,-90+72*t)));for(let t=0;t<5;t++){let e=-90+72*t;s+=Xe([$n(50,50,14,e-7),$n(50,50,31,e-3.4),$n(50,50,31,e+3.4),$n(50,50,14,e+7)]),s+=Xe([$n(50,50,30,e-15),$n(50,50,43,e-21),$n(50,50,43,e+21),$n(50,50,30,e+15)])}return s}function ww(){let s="";for(let t=0;t<6;t++){let[e,n]=$n(50,50,26,t*60-90);s+=We(e,n,17,17)}return s+y_(50,50,11,11)}function Tw(){let s=Gn(2,14,96,3.5,1.5);for(let t=0;t<5;t++)s+=Xe([[5+19*t,17.5],[19+19*t,17.5],[12+19*t,42]]);return s}var Xf=[["box","Box",null,300,.7],["round","Rounded box",null,300,.7],["circle","Circle",null,240,1],["line","Line",null,300,.035],["triangle","Triangle",Xe([[50,6],[96,92],[4,92]]),240,1],["diamond","Diamond",Xe([[50,3],[93,50],[50,97],[7,50]]),220,1],["star","Star",Wf(50,53,5,50,20),260,1],["heart","Heart","M50 91C22 69 5 52 5 32C5 18 16 7 30 7C39 7 46 12 50 20C54 12 61 7 70 7C84 7 95 18 95 32C95 52 78 69 50 91Z",240,1],["sparkle","Sparkle","M50 3Q56 44 97 50Q56 56 50 97Q44 56 3 50Q44 44 50 3Z",220,1],["seal","Seal",Wf(50,50,18,48,41),280,1],["ribbon","Ribbon",Xe([[2,30],[98,30],[87,50],[98,70],[2,70],[13,50]]),400,1],["pennant","Pennant",Xe([[5,14],[96,50],[5,86]]),320,1],["bunting","Bunting",Tw(),440,1],["shield","Shield","M50 4L90 15V46C90 70 73 88 50 97C27 88 10 70 10 46V15Z",260,1],["arrow","Arrow",Xe([[5,38],[57,38],[57,17],[96,50],[57,83],[57,62],[5,62]]),300,1],["bubble","Speech bubble",Gn(6,10,88,58,16)+Xe([[26,66],[48,66],[22,93]]),320,1],["cap","Graduation cap",Xe([[50,13],[97,35],[50,57],[3,35]])+"M24 49L50 61L76 49V68C76 76 64 82 50 82C36 82 24 76 24 68Z"+Xe([[86.4,40.6],[89.6,39.1],[89.6,67],[86.4,67]])+Gn(84.5,67,7,15,2.5),320,1],["balloon","Balloon",We(50,37,29,34)+Xe([[45.5,70],[54.5,70],[57.5,79],[42.5,79]])+"M49 79C55 85 43 90 49 97L52 97C46 90 58 85 52 79Z",240,1],["cake","Cake",Gn(7,85,86,8,3)+Gn(14,59,72,26,4)+Gn(26,37,48,22,4)+Gn(34.5,22,5,15,1.2)+Gn(47.5,22,5,15,1.2)+Gn(60.5,22,5,15,1.2)+We(37,14.5,3.2,5.2)+We(50,14.5,3.2,5.2)+We(63,14.5,3.2,5.2),280,1],["trophy","Trophy","M28 7H72V30C72 46 62 56 50 56C38 56 28 46 28 30Z"+Ho(28,22,13,90,270,5)+Ho(72,22,13,-90,90,5)+Gn(45.5,55,9,18)+Xe([[33,72],[67,72],[72,85],[28,85]])+Gn(21,85,58,9,2),280,1],["crown","Crown",Xe([[9,31],[29,54],[50,19],[71,54],[91,31],[84,79],[16,79]])+Gn(16,83,68,10,2)+We(9,26,5.5,5.5)+We(50,13,6.5,6.5)+We(91,26,5.5,5.5),300,1],["confetti","Confetti",bw(),380,1],["sun","Sun",Wf(50,50,12,49,30)+We(50,50,25,25),260,1],["flower","Flower",ww(),260,1],["bolt","Lightning",Xe([[59,3],[19,55],[44,55],[35,97],[81,40],[55,40]]),220,1],["note","Music note",We(30,79,17,13)+Gn(41,13,6.5,68)+"M47.5 13C63 17 78 26 75 48C70 35 60 31 47.5 31Z",240,1],["paw","Paw",We(50,67,25,20)+We(21,41,10.5,13.5)+We(40,24,10.5,13.5)+We(60,24,10.5,13.5)+We(79,41,10.5,13.5),240,1],["football","Football","M4 50C24 16 76 16 96 50C76 84 24 84 4 50Z"+tl(32,48,36,4)+[36,44.7,53.3,62].map(s=>tl(s-1.5,41,3,7)+tl(s-1.5,52,3,7)).join(""),340,1],["basketball","Basketball",We(50,50,46,46)+tl(48.4,4.6,3.2,90.8)+[[6,20.4],[23.6,24.8],[51.6,24.8],[79.6,14.4]].map(([s,t])=>tl(s,48.4,t,3.2)).join("")+Ho(-12,50,34,47,-47,3.2)+Ho(112,50,34,227,133,3.2),260,1],["soccer","Soccer ball",Mw(),260,1],["baseball","Baseball",We(50,50,46,46)+Ho(-10,50,42,44,-44,3.4)+Ho(110,50,42,224,136,3.4),260,1]],Cw={back:"M14.5 5l-7 7 7 7",undo:"M4 9h11a5 5 0 010 10H8M4 9l4-4M4 9l4 4",redo:"M20 9H9a5 5 0 000 10h7M20 9l-4-4M20 9l-4 4",designs:"M4 4h7v16H4zM14 4h6v7h-6zM14 14h6v6h-6z",text:"M5 7V4h14v3M12 4v16M8.5 20h7",photos:"M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15.5 9.6v.01",art:"M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6L3.4 9.4l6-.8z",ground:"M12 3c4 5 6 8.2 6 11a6 6 0 01-12 0c0-2.8 2-6 6-11z",post:"M9 3h6v17H9zM6 21h12",plus:"M12 5v14M5 12h14",minus:"M5 12h14",copy:"M8 8h12v12H8zM16 8V4H4v12h4",up:"M12 4l8 5-8 5-8-5zM4 14l8 5 8-5",down:"M12 20l8-5-8-5-8 5zM4 10l8-5 8 5",center:"M12 3v18M6 7h12v3H6zM8 14h8v3H8z",trash:"M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13",turn:"M5 12a7 7 0 0112-5l2 2M19 5v4h-4M19 12a7 7 0 01-12 5l-2-2M5 19v-4h4",upload:"M12 16V4M7 9l5-5 5 5M4 20h16",crop:"M6 2v16h16M2 6h16v16",swap:"M4 8h13l-3-3M20 16H7l3 3",check:"M5 12.5l4.5 4.5L19 7",close:"M6 6l12 12M18 6L6 18",left:"M14.5 6l-6 6 6 6",right:"M9.5 6l6 6-6 6"},ls=(s,t=20)=>`<svg viewBox="0 0 24 24" width="${t}" height="${t}" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Cw[s]}"/></svg>`,S_=[["none","Plain"],["stripes","Stripes"],["pin","Pinstripes"],["dots","Dots"],["checks","Checks"],["zigzag","Zigzag"],["flecks","Flecks"]];function jf(s,t,e){let i=document.createElement("canvas");i.width=i.height=96;let r=i.getContext("2d");if(r.fillStyle=t,r.fillRect(0,0,96,96),r.fillStyle=e,r.strokeStyle=e,r.globalAlpha=.55,s==="stripes"){r.lineWidth=22,r.beginPath();for(let o=-96;o<192;o+=48)r.moveTo(o,108),r.lineTo(o+96+24,-12);r.stroke()}else if(s==="pin")for(let o=10;o<96;o+=24)r.fillRect(o,0,4,96);else if(s==="dots")[[24,24],[72,72]].forEach(([o,a])=>{r.beginPath(),r.arc(o,a,9,0,6.2832),r.fill()});else if(s==="checks")r.fillRect(0,0,48,48),r.fillRect(48,48,48,48);else if(s==="zigzag"){r.lineWidth=9,r.lineJoin="miter",r.beginPath();for(let o=12;o<144;o+=48){r.moveTo(-12,o+12);for(let a=0;a<=120;a+=24)r.lineTo(a,o+(a/24%2?-12:12))}r.stroke()}else if(s==="flecks"){let o=11,a=()=>(o=o*16807%2147483647,o/2147483647);for(let l=0;l<7;l++){let c=8+a()*80,h=8+a()*80;r.save(),r.translate(c,h),r.rotate(a()*3.1),r.fillRect(-9,-3,18,6),r.restore()}}return i}var Ne=476,Fe=6738,nl=3369,Yf=Ne/4.875,M_=.036,Ew=.7,Aw="#E3E8F0",zs=[["Block","Barlow Condensed",800],["Clean","Barlow",600],["Varsity","Graduate",400],["Tall","Bebas Neue",400],["Poster","Anton",400],["Slab","Alfa Slab One",400],["Serif","DM Serif Display",400],["Classic","Playfair Display",700],["Retro script","Pacifico",400],["Formal script","Great Vibes",400],["Handwritten","Caveat",600],["Marker","Permanent Marker",400]],Vs=["role","loose","pid","bw","zoomK","fx","fy","bgc","pat","fg","art"],Rw={cornerSize:13,touchCornerSize:34,transparentCorners:!1,cornerColor:"#FFFFFF",cornerStrokeColor:"#14213D",borderColor:"#F2A900",borderScaleFactor:2,cornerStyle:"circle",padding:6,lockScalingFlip:!0,snapAngle:45,snapThreshold:4},Pw=typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,Wo=(s,t)=>document.fonts&&document.fonts.load?document.fonts.load(`${t} 48px "${s}"`).catch(()=>{}):Promise.resolve(),en=(s,t,e)=>Math.max(t,Math.min(e,s));function wt(s,t,...e){let n=document.createElement(s);return Object.keys(t||{}).forEach(i=>{let r=t[i];r===!1||r==null||(i==="html"?n.innerHTML=r:i==="on"?Object.keys(r).forEach(o=>n.addEventListener(o,r[o])):i==="style"?Object.assign(n.style,r):i in n&&i!=="list"&&typeof r!="string"?n[i]=r:n.setAttribute(i,r))}),e.forEach(i=>{i!=null&&i!==!1&&n.appendChild(typeof i=="string"?document.createTextNode(i):i)}),n}var jo=new Map,Dw=0;function Zh(s){return s.pid||(s.pid="x"+ ++Dw),jo.has(s.pid)||jo.set(s.pid,s),jo.get(s.pid)}var Vr=s=>[s.naturalWidth||s.width,s.naturalHeight||s.height];function Jh(s){if(s.gray)return s.gray;let[t,e]=Vr(s.color),n=document.createElement("canvas");n.width=t,n.height=e;let i=n.getContext("2d");i.drawImage(s.color,0,0);try{let r=i.getImageData(0,0,t,e),o=r.data;for(let a=0;a<o.length;a+=4){let l=en((.299*o[a]+.587*o[a+1]+.114*o[a+2]-128)*1.06+128,0,255);o[a]=o[a+1]=o[a+2]=l}i.putImageData(r,0,0)}catch{}return s.gray=n,n}var qf=null;function w_(){if(qf)return qf;let s=document.createElement("canvas");s.width=400,s.height=500;let t=s.getContext("2d");return t.fillStyle="#E1DACB",t.fillRect(0,0,400,500),t.strokeStyle="#A99F8C",t.lineWidth=4,t.setLineDash([16,14]),t.strokeRect(22,22,356,456),t.setLineDash([]),t.fillStyle="#A99F8C",t.fillRect(170,245,60,10),t.fillRect(195,220,10,60),qf=s,s}var An=class s extends Zn{getSrc(){return"mp:"+(this.pid||"")}toObject(t=[]){let e=super.toObject(Vs.concat(t));return delete e.filters,delete e.crossOrigin,e}static fromObject(t){let e=Object.assign({},t);["type","src","filters","resizeFilter","crossOrigin","version"].forEach(i=>delete e[i]);let n=jo.get(e.pid);return Promise.resolve(new s(n?e.bw?Jh(n):n.color:w_(),e))}};An.type="Photo";Et.setClass(An);Et.setClass(An,"Photo");function zr(s,t,e){let[n,i]=Vr(s.getElement()),r=Math.max(t/n,e/i)*(s.zoomK||1),o=t/r,a=e/r,l=en((s.fx==null?.5:s.fx)*n,o/2,n-o/2),c=en((s.fy==null?.5:s.fy)*i,a/2,i-a/2);s.set({cropX:l-o/2,cropY:c-a/2,width:o,height:a,scaleX:r,scaleY:r}),s.fx=l/n,s.fy=c/i,s.setCoords()}var Yo=class s extends Bn{toObject(t=[]){let e=super.toObject(Vs.concat(t));return e.fill=this.bgc,e}static fromObject(t){let e=Object.assign({},t);delete e.type,delete e.version;let n=new s(e);return Xo(n),Promise.resolve(n)}};Yo.type="Ground";Et.setClass(Yo);Et.setClass(Yo,"Ground");function Xo(s){s.set({fill:s.pat&&s.pat!=="none"?new Dr({source:jf(s.pat,s.bgc,s.fg||"#FFFFFF"),repeat:"repeat"}):s.bgc,dirty:!0})}var b_=s=>{let t=new Yo({left:0,top:0,width:Ne,height:Fe,bgc:s,pat:"none",fg:"#FFFFFF",role:"ground",selectable:!1,evented:!1,strokeWidth:0});return Xo(t),t};function zi(s){if(s.role==="ground")return s.set({selectable:!1,evented:!1}),s;s.set(Rw),s.loose&&(s.perPixelTargetFind=!0);let t=s instanceof Oe,e=s instanceof An&&s.role!=="photo";return s.setControlsVisibility({ml:!t&&!e,mr:!t&&!e,mt:!t&&!e,mb:!t&&!e}),t&&s.set({editable:!Pw,cursorColor:"#F2A900",selectionColor:"rgba(242,169,0,.35)",editingBorderColor:"#F2A900"}),s}var Kh=s=>M_*s.fontSize*(s.scaleY||1);function il(s){let t=s.getCenterPoint();if(!(s instanceof Oe))return t;let e=s.angle*Math.PI/180;return new st(t.x+Math.sin(e)*Kh(s),t.y-Math.cos(e)*Kh(s))}function Zf(s,t,e){if(s instanceof Oe){let n=s.angle*Math.PI/180;t-=Math.sin(n)*Kh(s),e+=Math.cos(n)*Kh(s)}s.setPositionByOrigin(new st(t,e),"center","center"),s.setCoords()}function Iw(s){if(s.t==="rect")return zi(new Bn({left:s.x,top:s.y,width:s.w,height:s.h,fill:s.fill,role:"shape",strokeWidth:0}));if(s.t==="text"){let e=(s.angle||0)*Math.PI/180,n=M_*s.size,i=new pi(s.text,{originX:"center",originY:"center",left:s.cx-Math.sin(e)*n,top:s.cy+Math.cos(e)*n,angle:s.angle||0,fontFamily:s.family,fontWeight:s.weight,fontSize:s.size,charSpacing:Math.round(s.sp*1e3),fill:s.fill,role:"text"}),r=Array.from(s.text).length;return s.w&&r>1&&i.set("charSpacing",Math.round(i.charSpacing+(s.w-i.width)/(r-1)/s.size*1e3)),zi(i)}if(s.t==="photo"){let e=s.entry?Zh(s.entry):null,n=e?s.bw?Jh(e):e.color:w_(),i=new An(n,{left:s.x,top:s.y,pid:e?e.pid:"",bw:!!s.bw,role:"photo",zoomK:1,fx:.5}),[,r]=Vr(n),[o]=Vr(n),a=Math.max(s.w/o,s.h/r),l=s.h/a;return i.fy=((r-l)*(s.bias==null?.5:s.bias)+l/2)/r,zr(i,s.w,s.h),s.frame&&i.set({left:s.x-s.frame,top:s.y-s.frame,stroke:"#FFFFFF",strokeWidth:2*s.frame,strokeUniform:!0,paintFirst:"stroke"}),zi(i)}let t=Zh({color:s.canvas});return zi(new An(t.color,{left:s.x,top:s.y,scaleX:s.w/t.color.width,scaleY:s.h/t.color.height,pid:t.pid,role:"art",loose:!!s.loose}))}function T_(s){he.configure({devicePixelRatio:Math.min(window.devicePixelRatio||1,2)});let t=s.root,e=v=>t.querySelector("#"+v),n=[null,null,null,null],i=[[],[],[],[]],r=[0,0,0,0],o=["","","",""],a=[0,0,0,0],l=null,c=-1,h=!1,u=!1,d="",f="",p=[],x=null,m=null,g=null,S=0,P=0,T=zs[0],A=()=>window.innerWidth<760,D=()=>Promise.all([Wo("Barlow Condensed",800),Wo("Barlow Condensed",700),Wo("Barlow",600)]);function _(v){let M=s.pieces(v);return[b_(M.bg)].concat(M.items.map(Iw))}function y(v){let M=new Ir(void 0,{width:Ne,height:Fe,enableRetinaScaling:!1,renderOnAddRemove:!1});v.forEach(U=>M.add(U)),M.renderAll();let N={json:M.toObject(Vs),full:M.toCanvasElement(1)};return M.dispose(),N}function C(v,M){if(n[v]&&(n[v].edited||!M))return Promise.resolve();M=M||n[v]&&n[v].origin||"name";let N=++a[v];return D().then(()=>{let U=s.stamp?s.stamp():"";if(N!==a[v]||n[v]&&n[v].edited)return;let q=y(_(M));n[v]={json:q.json,full:q.full,origin:M,edited:!1},o[v]=U,i[v]=[JSON.stringify(q.json)],r[v]=0})}function E(){let v=s.stamp?s.stamp():"",M=[];return n.forEach((N,U)=>{N&&!N.edited&&N.origin&&o[U]!==v&&M.push(C(U,N.origin).then(()=>U===c&&l?nt(n[U].json):null))}),Promise.all(M).then(()=>(M.length&&(Kt(),lt()),M.length))}function R(v,M,N){let U=l.width,q=l.height,V=Math.min(.9,(q-48)/Fe),K=Ne*v,Y=Fe*v;v=en(v,V,3.2),M=K<=U-24?(U-Ne*v)/2:en(M,U-Ne*v-36,36),N=Y<=q-48?(q-Fe*v)/2:en(N,q-Fe*v-90,24),l.setViewportTransform([v,0,0,v,M,N]),e("st-zout").disabled=v<=V+1e-4,e("st-zin").disabled=v>=3.2-1e-4,t.dataset.zoom=v.toFixed(3),t.dataset.view=[v,M,N].map(dt=>Math.round(dt*1e3)/1e3).join(","),e("st-zfit").textContent=v<=V+.001?"Close up":"Whole face",F(),we()}let L=()=>l.viewportTransform;function G(v,M,N){let U=L(),q=(v-U[4])/U[0],V=(M-U[5])/U[0],K=Math.min(.9,(l.height-48)/Fe);N=en(N,K,3.2),R(N,v-q*N,M-V*N)}function O(){let v=l.width,M=A()?en(v*.62,150,240):en(v*.46,300,440);R(M/Ne,0,24)}function Z(){R(1e-4,0,0)}function $(v){let M=v.getCenterPoint(),N=L(),U=M.y*N[0]+N[5];(U<60||U>l.height-60)&&R(N[0],N[4],l.height/2-M.y*N[0])}function z(){let v=e("st-cv"),M=v.clientWidth,N=v.clientHeight;if(!(!l||!M||!N)&&(M!==l.width||N!==l.height)){let U=L(),q=!l.__sized;l.__sized=!0,l.setDimensions({width:M,height:N}),q?O():R(U[0],U[4],U[5]),Kt()}}function F(){let v=e("st-ruler"),M=Math.min(window.devicePixelRatio||1,2),N=v.clientWidth,U=v.clientHeight;if(!N||!U)return;(v.width!==Math.round(N*M)||v.height!==Math.round(U*M))&&(v.width=Math.round(N*M),v.height=Math.round(U*M));let q=v.getContext("2d"),V=L(),K=Yf*V[0];q.setTransform(M,0,0,M,0,0),q.clearRect(0,0,N,U);let Y=K>=34?1:K>=12?3:K>=6?6:12;q.fillStyle="#5B6780",q.strokeStyle="#8B95A8",q.lineWidth=1,q.font="500 10.5px Barlow, system-ui, sans-serif",q.textAlign="right",q.textBaseline="middle";for(let It=0;It<=69;It++){let ut=Math.round(V[5]+It*K)+.5;if(ut<-4||ut>U+4)continue;let jt=It%Y===0;K<5&&!jt||(q.beginPath(),q.moveTo(N-(jt?9:4),ut),q.lineTo(N,ut),q.stroke(),jt&&q.fillText(It+(It===0?" in":""),N-11,It===0?ut+6:ut))}let dt=V[5]+nl*V[0];dt>0&&dt<U&&(q.fillStyle="#B67A00",q.beginPath(),q.moveTo(N,dt),q.lineTo(N-8,dt-5),q.lineTo(N-8,dt+5),q.closePath(),q.fill())}function B(v){if(u)return;let M=L(),N=M[4],U=M[5],q=Ne*M[0],V=Fe*M[0],K=l.getRetinaScaling();v.save(),v.setTransform(K,0,0,K,0,0),v.strokeStyle="rgba(20,33,61,.55)",v.lineWidth=1,v.strokeRect(Math.round(N)-.5,Math.round(U)-.5,Math.round(q)+1,Math.round(V)+1);let Y=Math.round(U+nl*M[0])+.5;v.setLineDash([7,5]),v.strokeStyle="#F2A900",v.lineWidth=1.5,v.beginPath(),v.moveTo(N-10,Y),v.lineTo(N+q+10,Y),v.stroke(),v.setLineDash([]),v.font="600 11px Barlow, system-ui, sans-serif",v.fillStyle="#8A5E00",v.textBaseline="bottom",N+q+96<l.width&&v.fillText("seam",N+q+14,Y+5),v.strokeStyle="#E0457B",v.lineWidth=1,p.forEach(([dt,It])=>{if(v.beginPath(),dt==="v"){let ut=Math.round(N+It*M[0])+.5;v.moveTo(ut,Math.max(0,U)),v.lineTo(ut,Math.min(l.height,U+V))}else{let ut=Math.round(U+It*M[0])+.5;v.moveTo(N,ut),v.lineTo(N+q,ut)}v.stroke()}),v.restore()}function J(){l=new Bo(e("st-canvas"),{preserveObjectStacking:!0,selection:!1,enableRetinaScaling:!0,stopContextMenu:!0,controlsAboveOverlay:!0,fireRightClick:!1,targetFindTolerance:6}),l.overlayImage=new Li(`M-90000 -90000H90000V90000H-90000ZM0 0V${Fe}H${Ne}V0Z`,{fill:Aw,strokeWidth:0,objectCaching:!1,selectable:!1,evented:!1}),["selection:created","selection:updated","selection:cleared"].forEach(V=>l.on(V,()=>{d="",x&&(x=null);let K=l.getActiveObject();K&&A()&&gt(""),I(),K&&$(K)})),l.on("after:render",({ctx:V})=>B(V)),l.on("object:modified",({target:V})=>{p=[],V instanceof Oe&&(V.scaleX!==1||V.scaleY!==1)&&V.set({fontSize:Math.max(8,V.fontSize*V.scaleX),scaleX:1,scaleY:1}),ht(!0),I()}),l.on("text:editing:entered",I),l.on("text:editing:exited",()=>{ht(!0),I()}),l.on("text:changed",()=>{ht(!1);let V=e("st-words");V&&document.activeElement!==V&&(V.value=l.getActiveObject().text)}),l.on("object:scaling",({target:V,transform:K})=>{V instanceof An&&V.role==="photo"&&K&&/^m[lrtb]$/.test(K.corner||"")&&zr(V,V.width*V.scaleX,V.height*V.scaleY)}),l.on("object:moving",({target:V})=>{if(x&&x.o===V){let ut=-V.angle*Math.PI/180,jt=V.left-x.left,Ie=V.top-x.top,vi=jt*Math.cos(ut)-Ie*Math.sin(ut),ol=jt*Math.sin(ut)+Ie*Math.cos(ut),[Zo,du]=Vr(V.getElement());V.fx=x.fx-vi/(V.scaleX*Zo),V.fy=x.fy-ol/(V.scaleY*du),V.set({left:x.left,top:x.top}),zr(V,V.width*V.scaleX,V.height*V.scaleY);return}let K=il(V),Y=7/L()[0];p=[];let dt=K.x,It=K.y;Math.abs(K.x-Ne/2)<Y&&(dt=Ne/2,p.push(["v",dt])),[nl/2,nl+nl/2].forEach(ut=>{Math.abs(K.y-ut)<Y&&(It=ut,p.push(["h",ut]))}),p.length&&Zf(V,dt,It)}),l.on("mouse:up",()=>{p.length&&(p=[],l.requestRenderAll())});let v=null;l.on("mouse:down",({e:V,target:K})=>{!K&&V.type.indexOf("touch")<0&&(v={x:V.clientX,y:V.clientY,v:L().slice()})}),l.on("mouse:move",({e:V})=>{v&&V.buttons!==0?R(v.v[0],v.v[4]+V.clientX-v.x,v.v[5]+V.clientY-v.y):v=null}),l.on("mouse:up",()=>{v=null}),l.on("mouse:wheel",({e:V})=>{V.preventDefault(),V.stopPropagation();let K=L(),Y=l.upperCanvasEl.getBoundingClientRect();V.ctrlKey||V.metaKey?G(V.clientX-Y.left,V.clientY-Y.top,K[0]*Math.exp(-V.deltaY*.01)):R(K[0],K[4]-(V.shiftKey?V.deltaY:V.deltaX),K[5]-(V.shiftKey?0:V.deltaY))});let M=l.wrapperEl,N=null,U=V=>{let K=M.getBoundingClientRect();return{x:V.clientX-K.left,y:V.clientY-K.top}},q=V=>{let K=U(V.touches[0]),Y=U(V.touches[1]);return{d:Math.hypot(K.x-Y.x,K.y-Y.y)||1,x:(K.x+Y.x)/2,y:(K.y+Y.y)/2}};M.addEventListener("touchstart",V=>{if(V.touches.length===2){l._currentTransform=null,N=Object.assign({kind:"pinch",v:L().slice()},q(V)),V.preventDefault(),V.stopPropagation();return}if(V.touches.length!==1)return;let K=l.findTarget(V),Y=l.getActiveObject();if(Y&&K===Y){N=null;return}let dt=U(V.touches[0]);N={kind:"tap",x:dt.x,y:dt.y,v:L().slice(),target:K},V.preventDefault(),V.stopPropagation()},{capture:!0,passive:!1}),M.addEventListener("touchmove",V=>{if(!N)return;if(V.preventDefault(),V.stopPropagation(),N.kind==="pinch"&&V.touches.length>=2){let Y=q(V),dt=N.v[0]*Y.d/N.d,It=(N.x-N.v[4])/N.v[0],ut=(N.y-N.v[5])/N.v[0],jt=en(dt,Math.min(.9,(l.height-48)/Fe),3.2);R(jt,Y.x-It*jt,Y.y-ut*jt);return}if(V.touches.length!==1)return;let K=U(V.touches[0]);if(N.kind==="pinch"){N={kind:"pan",x:K.x,y:K.y,v:L().slice()};return}N.kind==="tap"&&Math.hypot(K.x-N.x,K.y-N.y)>7&&(N.kind="pan"),N.kind==="pan"&&R(N.v[0],N.v[4]+K.x-N.x,N.v[5]+K.y-N.y)},{capture:!0,passive:!1}),M.addEventListener("touchend",V=>{if(N){if(V.touches.length===0){if(N.kind==="tap"){let K=l.getActiveObject();K&&K.isEditing&&K.exitEditing(),N.target?l.setActiveObject(N.target):l.discardActiveObject(),l.requestRenderAll()}N=null}else if(N.kind==="pinch"&&V.touches.length===1){let K=U(V.touches[0]);N={kind:"pan",x:K.x,y:K.y,v:L().slice()}}V.preventDefault()}},{capture:!0,passive:!1}),"ResizeObserver"in window?new ResizeObserver(z).observe(e("st-cv")):window.addEventListener("resize",z)}function nt(v){h=!0;let M=L().slice();return l.loadFromJSON(v).then(()=>{l.getObjects().forEach(zi),l.discardActiveObject(),l.setViewportTransform(M),l.requestRenderAll(),h=!1,I(),_t()})}let mt=()=>l.getObjects().find(v=>v.role==="ground"),St=()=>l.getObjects().filter(v=>v.role!=="ground");function ot(){t.dataset.count=l?String(St().length):"0";let v=l&&mt();t.dataset.ground=v?v.bgc+"|"+(v.pat||"none"):""}function _t(){e("st-undo").disabled=c<0||r[c]<1,e("st-redo").disabled=c<0||r[c]>=i[c].length-1,ot()}function vt(){if(!l||c<0||h)return;let v=L(),M=l.getActiveObject(),N=M&&M.isEditing;u=!0;let U=l.toCanvasElement(1/v[0],{left:v[4],top:v[5],width:Ne*v[0],height:Fe*v[0]});u=!1,n[c].full=U,n[c].json=l.toObject(Vs),N||l.requestRenderAll(),s.onChange(c),Yt(c)}function Pt(){if(c<0||h)return;let v=JSON.stringify(l.toObject(Vs)),M=i[c];M[r[c]]!==v&&(M.length=r[c]+1,M.push(v),M.length>40&&M.shift(),r[c]=M.length-1,_t())}function ht(v){h||c<0||(n[c].edited=!0,clearTimeout(S),S=setTimeout(vt,v?60:220),clearTimeout(P),v?Pt():P=setTimeout(Pt,500),ot(),l.requestRenderAll())}function Bt(v){if(h||c<0)return;clearTimeout(P),Pt();let M=r[c]+v;M<0||M>=i[c].length||(r[c]=M,n[c].edited=!0,nt(JSON.parse(i[c][M])).then(()=>{vt()}))}function ee(v){if(h)return Promise.resolve();c>=0&&l&&(clearTimeout(S),clearTimeout(P),Pt(),vt());let M=s.kindOf(v);return M!=="free"&&(n[v]=null),(M==="free"&&n[v]?Promise.resolve():C(v,M==="free"?"name":M)).then(()=>(M!=="free"&&s.setKind(v,"free"),c=v,t.dataset.face=String(v+1),e("st-facename").textContent="Face "+(v+1)+" of 4",nt(n[v].json))).then(()=>{O(),Kt(),lt(),s.turnTo(v),_t()})}function kt(v){return g=document.activeElement,t.hidden=!1,document.documentElement.classList.add("st-open"),s.onOpen(e("st-post")),l||J(),ct(),gt(A()?"":"designs"),z(),ee(v??0).then(()=>{z();try{e("st-done").focus({preventScroll:!0})}catch{}})}function se(){if(!l||t.hidden)return;let v=l.getActiveObject();v&&v.isEditing&&v.exitEditing(),l.discardActiveObject(),clearTimeout(S),clearTimeout(P),Pt(),vt(),n.forEach((M,N)=>{M&&!M.edited&&(s.setKind(N,M.origin),n[N]=null,i[N]=[],r[N]=0)}),c=-1,t.hidden=!0,document.documentElement.classList.remove("st-open"),t.removeAttribute("data-post"),s.onClose();try{g&&g.focus&&g.focus({preventScroll:!0})}catch{}g=null}function Kt(){let v=e("st-nav");if(!l)return;let M=en(e("st-stage").clientHeight-(A()?84:92),160,640),N=Math.max(12,Math.round(M*Ne/Fe));v.textContent="",(A()?[c]:[0,1,2,3]).forEach(U=>{if(U<0)return;let q=wt("canvas",{width:N*2,height:M*2,style:{width:N+"px",height:M+"px"}}),V=wt("button",{type:"button",class:"st-strip"+(U===c?" on":""),"aria-label":"Face "+(U+1)+(U===c?", on the table":""),"data-side":String(U),on:{click:()=>{U!==c&&ee(U)}}},q,wt("span",{class:"st-win"}),A()?null:wt("b",{},String(U+1)));if(v.appendChild(V),U===c){let K=Y=>{let dt=q.getBoundingClientRect(),It=(Y.clientY-dt.top)/dt.height*Fe,ut=L();R(ut[0],ut[4],l.height/2-It*ut[0])};q.addEventListener("pointerdown",Y=>{q.setPointerCapture(Y.pointerId),K(Y),q.onpointermove=K}),q.addEventListener("pointerup",()=>{q.onpointermove=null}),q.addEventListener("pointercancel",()=>{q.onpointermove=null})}}),[0,1,2,3].forEach(Yt),we()}function Yt(v){let M=e("st-nav").querySelector('[data-side="'+v+'"]');if(!M)return;let N=M.querySelector("canvas"),U=N.getContext("2d");U.setTransform(1,0,0,1,0,0),U.clearRect(0,0,N.width,N.height),n[v]&&n[v].full?U.drawImage(n[v].full,0,0,N.width,N.height):s.drawSide(v,N)}function we(){let v=e("st-nav").querySelector(".st-strip.on");if(!v||!l)return;let M=v.querySelector("canvas"),N=v.querySelector(".st-win"),U=L(),q=M.clientHeight/Fe,V=en(-U[5]/U[0],0,Fe),K=en((l.height-U[5])/U[0],0,Fe);N.style.top=M.offsetTop+V*q+"px",N.style.height=Math.max(6,(K-V)*q)+"px"}function ge(){let v=L();return en((l.height/2-v[5])/v[0],200,Fe-200)}let ze=0;function me(v){v.set({top:en(v.top+ze++%4*60,60,Fe-60)}),v.setCoords(),l.add(v),l.setActiveObject(v),ht(!0),I()}let bn=()=>_e(mt()?mt().bgc:"#FFFFFF")<.4;function Te(v,M){let N=M&&M.font||T;return Wo(N[1],N[2]).then(()=>{let U=new pi(v,Object.assign({originX:"center",originY:"center",left:Ne/2,top:ge(),fontFamily:N[1],fontWeight:N[2],fontSize:96,fill:bn()?"#F7F2E8":"#14213D",role:"text"},M&&M.set||{}));U.angle===0&&U.width>Ne-40&&U.set("fontSize",Math.max(20,Math.floor(U.fontSize*(Ne-40)/U.width))),me(zi(U))})}function dn(v){let M=Xf.find(dt=>dt[0]===v),N=s.getRoles(),U=mt(),q=U&&_e(N.accent)===_e(U.bgc)?N.text:N.accent,V=Math.min(M[3],Ne-60),K={originX:"center",originY:"center",left:Ne/2,top:ge(),fill:q,role:"shape",art:v,strokeWidth:0},Y;v==="box"||v==="round"||v==="line"?Y=new Bn(Object.assign(K,{width:V,height:V*M[4],rx:v==="round"?28:0,ry:v==="round"?28:0})):v==="circle"?Y=new Ii(Object.assign(K,{radius:V/2})):(Y=new Li(M[2],K),Y.set({scaleX:V/100,scaleY:V/100})),me(zi(Y))}function Rt(v){let M=l.getActiveObject();if(M instanceof An&&M.role==="photo"){let Y=M.width*M.scaleX,dt=M.height*M.scaleY;M.pid=v.pid,M.setElement(M.bw?Jh(v):v.color),M.zoomK=1,M.fx=.5,M.fy=.42,zr(M,Y,dt),ht(!0),I();return}let[N,U]=Vr(v.color),q=340,V=en(q*U/N,240,520),K=new An(v.color,{left:(Ne-q)/2,top:ge()-V/2,pid:v.pid,bw:!1,role:"photo",zoomK:1,fx:.5,fy:.42,stroke:"#FFFFFF",strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"});zr(K,q,V),me(zi(K))}function Vt(v){h||c<0||(h=!0,D().then(()=>{let M=v==="blank",N=M?[b_(s.getRoles().main)]:_(v);l.discardActiveObject(),l.remove(...l.getObjects()),N.forEach(U=>l.add(U)),h=!1,M||(n[c].origin=v),ht(!0),n[c].edited=M,o[c]=s.stamp?s.stamp():"",I(),lt()}))}function H(v){if(h||c<0||v===c)return;clearTimeout(S),clearTimeout(P),Pt(),vt();let M=n[c],N=document.createElement("canvas");N.width=Ne,N.height=Fe,N.getContext("2d").drawImage(M.full,0,0),n[v]={json:JSON.parse(JSON.stringify(M.json)),full:N,origin:M.origin,edited:!0},i[v]=[JSON.stringify(n[v].json)],r[v]=0,s.setKind(v,"free"),s.onChange(v),Yt(v)}function _e(v){let M=parseInt(String(v).slice(1),16);if(isNaN(M))return 1;let N=[M>>16&255,M>>8&255,M&255].map(U=>(U/=255,U<=.03928?U/12.92:Math.pow((U+.055)/1.055,2.4)));return .2126*N[0]+.7152*N[1]+.0722*N[2]}let zt=()=>l&&l.getActiveObject(),ne=v=>()=>{let M=zt();M&&(v(M),M.setCoords(),ht(!0),I())},ft=(v,M,N,U)=>wt("button",Object.assign({type:"button",class:"st-b"+(U&&U.cls?" "+U.cls:""),title:v,"aria-label":v,"aria-pressed":U&&U.pressed!=null?String(U.pressed):null,on:{click:N}},U&&U.attrs||{}),M?wt("span",{html:ls(M,18)}):null,U&&U.iconOnly?null:wt("span",{},U&&U.text||v)),xe=v=>v.fontSize*(v.scaleY||1)*Ew/Yf;function Lt(v,M){let N=wt("div",{class:"st-sw"});return s.palette.concat([["Bright white","#FFFFFF"]]).forEach(([U,q])=>N.appendChild(wt("button",{type:"button",class:"st-chip"+(String(v).toUpperCase()===q.toUpperCase()?" on":""),title:U,"aria-label":U,style:{background:q},on:{click:()=>M(q)}}))),N.appendChild(wt("label",{class:"st-any",title:"Any color"},wt("span",{},"Any color"),wt("input",{type:"color",value:/^#[0-9a-f]{6}$/i.test(v)?v:"#14213D","aria-label":"Any color",on:{input:U=>M(U.target.value,!0)}}))),N}let Dt=(v,M,N,U,q,V,K)=>{let Y=wt("output",{},K(q));return wt("label",{class:"st-slide"},wt("span",{},v),wt("input",{type:"range",min:String(M),max:String(N),step:String(U),value:String(q),"aria-label":v,on:{input:dt=>{Y.textContent=K(+dt.target.value),V(+dt.target.value)}}}),Y)};function I(){if(!l)return;let v=zt(),M=e("st-ctx"),N=e("st-more");M.textContent="",N.textContent="",t.dataset.sel=v?v.role||"shape":"",t.dataset.info=v?JSON.stringify({role:v.role||"",text:v.text||"",font:v.fontFamily||"",size:Math.round(v.fontSize||0),fill:typeof v.fill=="string"?v.fill:"",x:Math.round(il(v).x),y:Math.round(il(v).y),angle:Math.round(v.angle||0),pid:v.pid||"",bw:!!v.bw,w:Math.round(v.getScaledWidth()),h:Math.round(v.getScaledHeight()),zoom:v.zoomK||0,fx:v.fx||0,opacity:v.opacity,editing:!!v.isEditing,even:Math.abs((v.scaleX||1)-(v.scaleY||1))<1e-6}):"";let U=K=>()=>{d=d===K?"":K,K==="adjust"&&(x=d==="adjust"?{o:zt(),left:zt().left,top:zt().top,fx:zt().fx,fy:zt().fy}:null),I()},q=(K,Y)=>wt("button",{type:"button",class:"st-b st-colorbtn","aria-label":Y,title:Y,"aria-expanded":String(d==="color"),on:{click:U("color")}},wt("i",{style:{background:/^#/.test(K)?K:"#888"}}),wt("span",{},Y)),V=()=>[wt("span",{class:"st-gap"}),ft("Center","center",ne(K=>Zf(K,Ne/2,il(K).y)),{iconOnly:!0}),ft("Bring forward","up",ne(K=>l.bringObjectForward(K)),{iconOnly:!0}),ft("Send back","down",ne(K=>{l.getObjects().indexOf(K)>1&&l.sendObjectBackwards(K)}),{iconOnly:!0}),ft("Copy","copy",Q,{iconOnly:!0}),ft("Delete","trash",b,{iconOnly:!0,cls:"st-del"})].forEach(K=>M.appendChild(K));if(!v){let K=mt();M.appendChild(wt("span",{class:"st-tip"},A()?"Tap anything to change it. Pinch to zoom.":"Click anything on the design to change it. Double-click words to retype them.")),K&&(M.appendChild(wt("span",{class:"st-gap"})),M.appendChild(q(K.bgc,"Background"))),d==="color"&&K&&N.appendChild(Lt(K.bgc,(Y,dt)=>{K.bgc=Y,Xo(K),ht(!dt),dt||I()}));return}if(v instanceof Oe){let K=zs.find(Y=>Y[1]===v.fontFamily)||zs[0];M.appendChild(wt("input",{id:"st-words",class:"st-words",type:"text",maxlength:"80",autocomplete:"off","aria-label":"Words",value:v.text,on:{input:Y=>{v.set("text",Y.target.value.length?Y.target.value:" "),v.setCoords(),ht(!1)}}})),M.appendChild(ft("Lettering: "+K[0],"text",()=>gt("text"),{text:K[0],cls:"st-fontbtn"})),M.appendChild(wt("span",{class:"st-size"},ft("Smaller","minus",ne(Y=>Y.set("fontSize",Math.max(10,Y.fontSize/1.08))),{iconOnly:!0}),wt("output",{title:"How tall the capital letters print"},xe(v).toFixed(1)+" in"),ft("Larger","plus",ne(Y=>Y.set("fontSize",Math.min(1400,Y.fontSize*1.08))),{iconOnly:!0}))),M.appendChild(q(v.fill,"Color")),M.appendChild(ft("Spacing",null,U("space"),{pressed:d==="space"})),M.appendChild(ft(Math.abs(v.angle%180)>45?"Set across":"Set down the post","turn",ne(Y=>{let dt=il(Y);Y.set("angle",Math.abs(Y.angle%180)>45?0:90),Zf(Y,dt.x,dt.y)}),{iconOnly:!0})),V(),d==="color"&&N.appendChild(Lt(v.fill,(Y,dt)=>{v.set("fill",Y),ht(!dt),dt||I()})),d==="space"&&N.appendChild(Dt("Space between letters",-60,600,10,v.charSpacing,Y=>{v.set("charSpacing",Y),v.setCoords(),ht(!1)},Y=>(Y>0?"+":"")+Math.round(Y/10)));return}if(v instanceof An&&v.role==="photo"){M.appendChild(ft("Swap photo","swap",()=>gt("photos"))),M.appendChild(ft("Black and white",null,ne(K=>{let Y=jo.get(K.pid);if(!Y)return;let dt=K.width*K.scaleX,It=K.height*K.scaleY;K.bw=!K.bw,K.setElement(K.bw?Jh(Y):Y.color),zr(K,dt,It)}),{pressed:!!v.bw})),M.appendChild(ft("Move and zoom","crop",U("adjust"),{pressed:d==="adjust"})),M.appendChild(ft("Border",null,U("border"),{pressed:d==="border"})),V(),d==="adjust"&&(N.appendChild(Dt("Zoom",1,3,.02,v.zoomK||1,K=>{v.zoomK=K,zr(v,v.width*v.scaleX,v.height*v.scaleY),x&&(x.fx=v.fx,x.fy=v.fy),ht(!1)},K=>Math.round(K*100)+"%")),N.appendChild(wt("span",{class:"st-tip"},"Drag the photo to move it inside its frame."))),d==="border"&&(N.appendChild(Dt("Border",0,30,1,v.stroke?v.strokeWidth/2:0,K=>{let Y=v.getCenterPoint();v.set({stroke:K?v.stroke||"#FFFFFF":null,strokeWidth:2*K,strokeUniform:!0,paintFirst:"stroke"}),v.setPositionByOrigin(Y,"center","center"),v.setCoords(),ht(!1)},K=>K?(K/Yf).toFixed(2)+" in":"None")),N.appendChild(Lt(v.stroke||"#FFFFFF",(K,Y)=>{v.strokeWidth||v.set({strokeWidth:10,strokeUniform:!0,paintFirst:"stroke"}),v.set("stroke",K),ht(!Y),Y||I()})));return}v instanceof An?M.appendChild(wt("span",{class:"st-tip"},"Drag to move. Pull a corner to resize.")):(M.appendChild(q(v.fill,"Color")),M.appendChild(ft("See-through",null,U("fade"),{pressed:d==="fade"})),d==="color"&&N.appendChild(Lt(v.fill,(K,Y)=>{v.set("fill",K),ht(!Y),Y||I()})),d==="fade"&&N.appendChild(Dt("See-through",0,90,5,Math.round((1-v.opacity)*100),K=>{v.set("opacity",1-K/100),ht(!1)},K=>K+"%"))),V()}function b(){let v=zt();v&&(l.remove(v),l.discardActiveObject(),ht(!0),I())}function Q(){let v=zt();v&&v.clone(Vs).then(M=>{M.set({left:v.left+26,top:v.top+40}),l.add(zi(M)),l.setActiveObject(M),ht(!0),I()})}let pt=[["designs","Designs","designs"],["text","Lettering","text"],["photos","Photos","photos"],["art","Artwork","art"],["ground","Background","ground"],["post","Post","post"]];function ct(){let v=e("st-rail");v.textContent="",pt.forEach(([M,N,U])=>v.appendChild(wt("button",{type:"button",class:"st-tab"+(M==="post"?" st-tab-post":""),"data-tab":M,"aria-pressed":"false",on:{click:()=>{M==="post"?(t.toggleAttribute("data-post"),gt(""),xt()):gt(f===M&&A()?"":M)}}},wt("span",{html:ls(U,22)}),wt("span",{},N))))}function xt(){e("st-rail").querySelectorAll(".st-tab").forEach(v=>v.setAttribute("aria-pressed",String(v.dataset.tab===f||v.dataset.tab==="post"&&t.hasAttribute("data-post"))))}function gt(v){f=v,t.dataset.tab=v,v&&t.removeAttribute("data-post"),xt(),lt(),requestAnimationFrame(z)}let at=(v,...M)=>wt("section",{class:"st-sec"},v?wt("h3",{},v):null,...M);function lt(){let v=e("st-panel");if(v&&(v.textContent="",!(!f||c<0))){if(v.appendChild(wt("div",{class:"st-phead"},wt("strong",{},(pt.find(M=>M[0]===f)||[])[1]||""),ft("Close","close",()=>gt(""),{iconOnly:!0,cls:"st-pclose"}))),f==="designs"){let M=s.fields(),N=wt("div",{class:"st-seg"});M.occasions.forEach(([Y,dt])=>N.appendChild(wt("button",{type:"button","aria-pressed":String(M.occasion===Y),on:{click:()=>{s.setField("occasion",Y),E().then(lt)}}},dt)));let U=0,q=Y=>dt=>{s.setField(Y,dt.target.value),clearTimeout(U),U=setTimeout(()=>E().then(k),350)};v.appendChild(at("Make it yours",N,wt("div",{class:"st-two"},wt("label",{},wt("span",{},"Name"),wt("input",{type:"text",maxlength:"16",value:M.name,placeholder:M.namePlaceholder,on:{input:q("name")}})),wt("label",{},wt("span",{},M.second.label),wt("input",{type:"text",inputmode:"numeric",maxlength:"4",value:M.second.value,placeholder:M.second.placeholder,on:{input:q(M.second.key)}}))),wt("div",{class:"st-lab"},"Main color"),yt(M.main,"main"),wt("div",{class:"st-lab"},"Second color"),yt(M.accent,"accent")));let V=wt("div",{class:"st-cards",id:"st-cards"});s.kinds.forEach(([Y,dt])=>V.appendChild(wt("button",{type:"button",class:"st-card"+(n[c]&&n[c].origin===Y&&!n[c].edited?" on":""),"data-kind":Y,on:{click:()=>Vt(Y)}},wt("canvas",{width:176,height:520}),wt("span",{},dt)))),V.appendChild(wt("button",{type:"button",class:"st-card","data-kind":"blank",on:{click:()=>Vt("blank")}},wt("canvas",{width:176,height:520}),wt("span",{},"Blank"))),v.appendChild(at("Designs for face "+(c+1),V,wt("p",{class:"st-fine"},"Pick one, then change anything on it. Undo brings the last design back.")));let K=wt("div",{class:"st-seg"});[0,1,2,3].filter(Y=>Y!==c).forEach(Y=>K.appendChild(wt("button",{type:"button",on:{click:dt=>{H(Y),dt.target.textContent="Face "+(Y+1)+" done"}}},"Face "+(Y+1)))),v.appendChild(at("Use this design on another face too",K)),k()}else if(f==="text"){let M=wt("div",{class:"st-adds"});[["Add a headline","YOUR HEADLINE",{font:zs[0]}],["Add a small line","A LINE OF SMALL WORDS",{font:zs[1],set:{fontSize:34,charSpacing:260}}],["Add words down the post","DOWN THE POST",{font:zs[0],set:{angle:90,fontSize:300}}],["Add script","With love",{font:zs[8],set:{fontSize:110}}]].forEach(([V,K,Y])=>M.appendChild(wt("button",{type:"button",class:"st-add",style:{fontFamily:`"${Y.font[1]}"`,fontWeight:String(Y.font[2])},on:{click:()=>Te(K,Y)}},V)));let N=wt("div",{class:"st-fonts"}),U=zt(),q=U instanceof Oe?U.fontFamily:T[1];zs.forEach(V=>{Wo(V[1],V[2]),N.appendChild(wt("button",{type:"button",class:"st-font"+(V[1]===q?" on":""),on:{click:()=>{T=V;let K=zt();K instanceof Oe?Wo(V[1],V[2]).then(()=>{K.set({fontFamily:V[1],fontWeight:V[2]}),K.setCoords(),ht(!0),I(),lt()}):Te(V[0]==="Formal script"||V[0]==="Retro script"||V[0]==="Handwritten"?"Your words":"YOUR WORDS",{font:V})}}},wt("span",{style:{fontFamily:`"${V[1]}"`,fontWeight:String(V[2])}},s.fields().name||s.fields().namePlaceholder),wt("small",{},V[0])))}),v.appendChild(at("Add words",M)),v.appendChild(at(U instanceof Oe?"Lettering for the words you picked":"Lettering",N))}else if(f==="photos"){let M=zt(),N=M instanceof An&&M.role==="photo",U=wt("div",{class:"st-photos"}),q=wt("input",{type:"file",accept:"image/*",multiple:!0,class:"st-file",id:"st-file",on:{change:V=>{s.addPhotos(V.target.files).then(K=>{V.target.value="",K.length===1&&Rt(Zh(K[0])),lt()})}}});s.library().forEach(V=>{let K=Zh(V),Y=wt("canvas",{width:180,height:180}),dt=Y.getContext("2d"),[It,ut]=Vr(K.color),jt=Math.max(180/It,180/ut);dt.drawImage(K.color,(It-180/jt)/2,(ut-180/jt)*.4,180/jt,180/jt,0,0,180,180),U.appendChild(wt("button",{type:"button",class:"st-photo","aria-label":K.sample?"Sample photo":"Your photo",on:{click:()=>Rt(K)}},Y,K.sample?wt("small",{},"Sample"):null))}),v.appendChild(at(N?"Swap the photo you picked":"Photos",wt("label",{class:"st-upload",for:"st-file"},wt("span",{html:ls("upload",20)}),wt("span",{},"Add your photos")),q,wt("p",{class:"st-fine"},N?"Tap a photo to put it in the frame you picked.":"Tap a photo to place it. Your photos stay on this device."),U))}else if(f==="art"){let M=wt("div",{class:"st-arts"});Xf.forEach(([N,U,q])=>M.appendChild(wt("button",{type:"button",class:"st-art",title:U,"aria-label":U,on:{click:()=>dn(N)},html:`<svg viewBox="0 0 100 100" aria-hidden="true">${q?`<path d="${q}"/>`:N==="circle"?'<circle cx="50" cy="50" r="40"/>':N==="line"?'<rect x="8" y="46" width="84" height="8"/>':`<rect x="12" y="24" width="76" height="52" rx="${N==="round"?12:0}"/>`}</svg>`}))),v.appendChild(at("Artwork",M,wt("p",{class:"st-fine"},"Tap a piece to drop it on the design, then give it any color.")))}else if(f==="ground"){let M=mt();if(!M)return;let N=wt("div",{class:"st-pats"});S_.forEach(([U,q])=>{let V=U==="none"?wt("canvas",{width:96,height:96}):jf(U,M.bgc,M.fg);if(U==="none"){let K=V.getContext("2d");K.fillStyle=M.bgc,K.fillRect(0,0,96,96)}N.appendChild(wt("button",{type:"button",class:"st-pat"+((M.pat||"none")===U?" on":""),on:{click:()=>{M.pat=U,Xo(M),ht(!0),lt()}}},V,wt("span",{},q)))}),v.appendChild(at("Background color",Lt(M.bgc,(U,q)=>{M.bgc=U,Xo(M),ht(!q),q||(I(),lt())}))),v.appendChild(at("Pattern",N)),M.pat&&M.pat!=="none"&&v.appendChild(at("Pattern color",Lt(M.fg,(U,q)=>{M.fg=U,Xo(M),ht(!q),q||lt()})))}}}function yt(v,M){let N=wt("div",{class:"st-sw"});return s.palette.forEach(([U,q])=>N.appendChild(wt("button",{type:"button",class:"st-chip"+(v===U?" on":""),title:U,"aria-label":U,"aria-pressed":String(v===U),style:{background:q},on:{click:()=>{s.setField(M,U),E().then(lt)}}}))),N}function k(){let v=e("st-cards");v&&v.querySelectorAll(".st-card").forEach(M=>{let N=M.querySelector("canvas");if(M.dataset.kind==="blank"){let U=N.getContext("2d");U.fillStyle=s.getRoles().main,U.fillRect(0,0,N.width,N.height)}else s.drawKind(M.dataset.kind,N)})}return e("st-undo").innerHTML=ls("undo")+"<span>Undo</span>",e("st-redo").innerHTML=ls("redo")+"<span>Redo</span>",e("st-close").innerHTML=ls("back")+"<span>Back</span>",e("st-prev").innerHTML=ls("left",18),e("st-next").innerHTML=ls("right",18),e("st-undo").addEventListener("click",()=>Bt(-1)),e("st-redo").addEventListener("click",()=>Bt(1)),e("st-done").addEventListener("click",se),e("st-close").addEventListener("click",se),e("st-prev").addEventListener("click",()=>ee((c+3)%4)),e("st-next").addEventListener("click",()=>ee((c+1)%4)),e("st-zout").addEventListener("click",()=>{let v=L();G(l.width/2,l.height/2,v[0]/1.35)}),e("st-zin").addEventListener("click",()=>{let v=L();G(l.width/2,l.height/2,v[0]*1.35)}),e("st-zfit").addEventListener("click",()=>{L()[0]<=Math.min(.9,(l.height-48)/Fe)+.001?O():Z()}),document.addEventListener("keydown",v=>{if(t.hidden||!l)return;let M=zt(),N=/^(INPUT|SELECT|TEXTAREA)$/.test(v.target.tagName)||M&&M.isEditing,U=v.ctrlKey||v.metaKey,q=v.key.toLowerCase();if(v.key==="Escape"){if(M&&M.isEditing)return;M?(l.discardActiveObject(),l.requestRenderAll()):se();return}if(!N)if(U&&q==="z")v.preventDefault(),Bt(v.shiftKey?1:-1);else if(U&&q==="y")v.preventDefault(),Bt(1);else if(U&&q==="c"&&M)M.clone(Vs).then(V=>{m=V});else if(U&&q==="v"&&m)v.preventDefault(),m.clone(Vs).then(V=>{V.set({left:V.left+26,top:en(ge()-100,0,Fe-100)}),l.add(zi(V)),l.setActiveObject(V),ht(!0),I()});else if(U&&q==="d"&&M)v.preventDefault(),Q();else if((v.key==="Delete"||v.key==="Backspace")&&M)v.preventDefault(),b();else if(M&&/^arrow/.test(q)){v.preventDefault();let V=v.shiftKey?10:2;M.set({left:M.left+(q==="arrowleft"?-V:q==="arrowright"?V:0),top:M.top+(q==="arrowup"?-V:q==="arrowdown"?V:0)}),M.setCoords(),ht(!1)}else q==="+"||q==="="?e("st-zin").click():q==="-"&&e("st-zout").click()}),{art:n,open:kt,close:se,start:C,refresh:E,show:ee,isOpen:()=>!t.hidden,store:jo}}var au=.0254,ep=5.25*au,su=34.5*au,L_=0,F_=.03,Jf=.045,$h=.15,np=F_+2*su+L_,ip=.005,sp=.022,Qh=ep+.009,tu=np+ip+sp,Hr=384,eu=Math.round(Hr*34.5/5.25),ru=Hr*.1875/5.25,te=476,Vi=3369,Hn=6738,cs=70,Kf=(Hr-2*ru)/te,Jt=cs,ie=Vi+cs,rp=[["Navy","#14213D"],["Royal","#1F4FBF"],["Sky","#6CB4EE"],["Forest","#14532D"],["Kelly","#1E9E4A"],["Teal","#178F8B"],["Maroon","#6B1524"],["Red","#B3202A"],["Coral","#EF6A55"],["Orange","#F26B21"],["Gold","#F2A900"],["Purple","#4B2A85"],["Pink","#E75480"],["Black","#161616"],["Silver","#B8BCC2"],["White","#F7F2E8"]],C_=Object.fromEntries(rp),E_="#F7F2E8",Xs="#14213D",xi="#FFD23F",Pn="#F7F2E8",Gi={graduation:{label:"Graduation",main:"Navy",accent:"Gold",name:"Maya",samples:["grad","caps","skyline","field","grad"]},birthday:{label:"Birthday",main:"Coral",accent:"Teal",name:"Eli",samples:["balloons","cake","bokeh","road","balloons"]},"senior-night":{label:"Senior night",main:"Maroon",accent:"Black",name:"Jordan",samples:["field","bokeh","skyline","field","road"]}};function A_(s){let t=parseInt(s.slice(1),16),e=[t>>16&255,t>>8&255,t&255].map(n=>(n/=255,n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)));return .2126*e[0]+.7152*e[1]+.0722*e[2]}function qo(s,t){let e=A_(s),n=A_(t);return(Math.max(e,n)+.05)/(Math.min(e,n)+.05)}var sl=s=>qo(E_,s)>=2.4?E_:Xs;function ti(s,t,e,n){return qo(s,t)>=e?s:n}var At={occasion:"graduation",name:"",year:"2027",school:"",age:"10",number:"12",sport:"",team:"",line1:"",line2:"",line3:"",main:null,accent:null,photos:[],bw:!0,faces:["name","photos","name","photos"],msg:"",more:"",from:"",line4:"",link:"",signed:!1},Rn=(s,t)=>String(s||"").trim()||t,hs={};function rl(){let s=Gi[At.occasion],t=C_[At.main||s.main],e=C_[At.accent||s.accent],n=sl(t),i=ti(e,t,2.2,n),r=qo(t,Pn)>=1.6?t:qo(e,Pn)>=1.6?e:Xs,o=sl(r),a=ti(e,r,2.2,o),l=qo(t,Pn)>=3?t:qo(e,Pn)>=3?e:Xs,c=sl(e);return{main:t,accent:e,text:n,accentText:i,blockBg:r,blockInk:o,blockAccent:a,caption:l,accentInk:c}}var je=null,hp=.7,hu=(s,t,e,n,i,r,o,a,l,c)=>{String(s).trim()&&je.push({t:"text",text:String(s),cx:t,cy:e,size:n,sp:i,weight:r,family:o,fill:a,angle:l||0,w:c||0})};function N_(s,t,e,n,i,r){let o=document.createElement("canvas");o.width=Math.max(1,Math.round(e*i)),o.height=Math.max(1,Math.round(n*i));let a=o.getContext("2d");a.scale(i,i),a.translate(-s,-t);let l=je;je=null;try{r(a)}finally{je=l}return o}function Ke(s,t,e,n,i,r){if(je){je.push({t:"rect",x:t,y:e,w:n,h:i,fill:r});return}s.fillStyle=r,s.fillRect(t,e,n,i)}function $f(s,t,e,n){Ke(s,0,t,te,e,n)}function Hs(s,t,e,n){$f(s,0,cs,t),$f(s,Vi-cs,2*cs,e),$f(s,Hn-cs,cs,n)}function Ws(s,t,e,n,i=3){Ke(s,(te-e)/2,t,e,i,n)}function R_(s,t,e){let n=0;for(let i of t)n+=s.measureText(i).width+e;return n-e}function up(s,t,e,n,i){for(let r of t)s.fillText(r,e,n),e+=s.measureText(r).width+i}function uu(s,t,e,n,i,r){s.font=e(n);let o=R_(s,t,i*n);return o>r&&(n=Math.max(8,Math.floor(n*r/o)),s.font=e(n),o=R_(s,t,i*n)),{size:n,w:o}}function us(s,t,e,n,i=40,r=.3,o=600,a="Barlow",l=1.75){s.fillStyle=n,s.textAlign="left",s.textBaseline="alphabetic",t.forEach((c,h)=>{let u=String(c).toUpperCase(),d=uu(s,u,p=>`${o} ${p}px "${a}"`,i,r,te-44),f=e+h*l*i+1.275*i;if(je){hu(u,te/2,f-hp*d.size/2,d.size,r,o,a,n,0,d.w);return}up(s,u,(te-d.w)/2,f,r*d.size)})}function Gr(s,t,e,n,i,r,o=800,a=.03){let l=String(t).toUpperCase(),c=uu(s,l,u=>`${o} ${u}px "Barlow Condensed"`,i,a,n),h=.7*c.size;if(je){hu(l,te/2,e+n/2,c.size,a,o,"Barlow Condensed",r,90,c.w);return}s.save(),s.translate(te/2,e+(n-c.w)/2),s.rotate(Math.PI/2),s.fillStyle=r,s.textAlign="left",s.textBaseline="alphabetic",up(s,l,0,h/2,a*c.size),s.restore()}function Gs(s,t,e,n,i){let r=uu(s,t,a=>`800 ${a}px "Barlow Condensed"`,n,0,te-30),o=e+.83*n-(n-r.size)*.35;if(je){hu(t,te/2,o-hp*r.size/2,r.size,0,800,"Barlow Condensed",i);return}s.fillStyle=i,s.textAlign="center",s.textBaseline="alphabetic",s.fillText(t,te/2,o)}function Sn(s,t,e,n,i,r,o,a=44){Ke(s,34,t,te-68,e,n),i=i.filter(h=>String(h).trim());let l=1.5*a,c=t+(e-i.length*l)/2;s.textAlign="left",s.textBaseline="alphabetic",i.forEach((h,u)=>{let d=String(h).toUpperCase(),f=uu(s,d,m=>`700 ${m}px "Barlow Condensed"`,a,.14,te-68-36),p=c+u*l+1.15*a-(a-f.size)*.3,x=o&&u===0?o:r;if(je){hu(d,te/2,p-hp*f.size/2,f.size,.14,700,"Barlow Condensed",x,0,f.w);return}s.fillStyle=x,up(s,d,(te-f.w)/2,p,.14*f.size)})}var Qn=(s,t,e,n)=>us(s,[t],e,n,30,.34,600);function Ow(s,t,e,n,i,r,o=.38){let a=t.naturalWidth||t.width,l=t.naturalHeight||t.height,c=Math.max(i/a,r/l),h=i/c,u=r/c;s.drawImage(t,(a-h)/2,(l-u)*o,h,u,e,n,i,r)}function nn(s,t,e,n){let r=te-68,o=At.photos.length>0,a=o?At.photos[t]:hs[Gi[At.occasion].samples[t]],l=a?o?At.bw?a.gray:a.color:a:null;if(je){je.push({t:"photo",entry:a?o?a:B_(Gi[At.occasion].samples[t]):null,bw:!!(o&&At.bw),x:34,y:e,w:r,h:n,frame:5,bias:.38});return}if(Ke(s,29,e-5,r+10,n+10,"#FFFFFF"),l){Ow(s,l,34,e,r,n);return}Ke(s,34,e,r,n,"#E1DACB"),s.strokeStyle="#A99F8C",s.lineWidth=3,s.setLineDash([14,12]),s.strokeRect(48,e+14,r-28,n-28),s.setLineDash([]),Ke(s,te/2-26,e+n/2-3,52,6,"#A99F8C"),Ke(s,te/2-3,e+n/2-26,6,52,"#A99F8C")}function Lw(s){return()=>{s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function op(s,t,e,n,i,r){if(je){je.push({t:"art",canvas:N_(0,e-24,te,n-e+48,.5,a=>op(a,t,e,n,i,r)),x:0,y:e-24,w:te,h:n-e+48,loose:!0});return}let o=Lw(r);for(let a=0;a<i;a++){let l=o()<.5?8+o()*88:te-96+o()*88,c=e+o()*(n-e),h=9+o()*11;s.fillStyle=t[Math.floor(o()*t.length)],o()<.5?(s.beginPath(),s.arc(l+h/2,c+h/2,h/2,0,6.2832),s.fill()):(s.save(),s.translate(l+h*.75,c+h*.28),s.rotate((o()-.5)*2.1),s.fillRect(-h*.75,-h*.28,h*1.5,h*.55),s.restore())}}var Fw=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","twenty-one"],Nw=s=>s.charAt(0).toUpperCase()+s.slice(1).toLowerCase(),Uw={graduation:{A(s,t,e){Ke(s,0,0,te,Hn,t.main),Hs(s,t.accent,t.accent,t.accent),us(s,["Congrats, grad"],Jt+150,t.accentText,32,.26),Ws(s,Jt+250,90,t.accentText),Gr(s,e.name,Jt+420,1830,560,t.text),Ws(s,Jt+2330,90,t.accentText),us(s,[e.school],Jt+2380,t.text,36,.22),Gr(s,"Class of "+e.year,ie+110,3e3,436,t.accentText)},B(s,t,e){Ke(s,0,0,te,Hn,Pn),Hs(s,t.accent,t.accent,t.accent),nn(s,0,Jt+90,900),Qn(s,"Freshman year",Jt+1020,t.caption),nn(s,1,Jt+1130,900),Qn(s,"Senior year",Jt+2060,t.caption),nn(s,2,Jt+2170,700),Sn(s,Jt+2930,250,t.blockBg,[e.school,"Class of "+e.year],t.blockInk,t.blockAccent),Sn(s,ie+50,170,t.blockBg,["#"+Nw(e.name).replace(/[^A-Za-z0-9]/g,"")+"Grad"+e.year.slice(-2)],t.blockAccent),nn(s,3,ie+300,820),Qn(s,"Then",ie+1150,t.caption),nn(s,4,ie+1260,980),Qn(s,"And now",ie+2270,t.caption),Sn(s,ie+2420,760,t.blockBg,[e.line1,e.line2,e.line3],t.blockInk,t.blockAccent,64)}},birthday:{A(s,t,e){Ke(s,0,0,te,Hn,t.main);let n=[ti(xi,t.main,1.5,t.text),t.text,ti(t.accent,t.main,1.5,t.text)];op(s,n,Jt+60,Vi-cs-60,34,5),op(s,n,ie+60,Hn-cs-60,34,8),Hs(s,xi,t.accent,xi),us(s,["Happy birthday"],Jt+150,t.text,32,.26),Ws(s,Jt+250,90,ti(xi,t.main,1.5,t.text)),Gr(s,e.name,Jt+520,1500,660,t.text),Ws(s,Jt+2120,90,ti(xi,t.main,1.5,t.text));let i=parseInt(e.age,10);us(s,["Look who is "+(Fw[i]||e.age)],Jt+2170,t.text,32,.26);let r=String(e.age);r.length===1?Gs(s,r,ie+690,1e3,t.text):r.length===2?(Gs(s,r[0],ie+240,1e3,t.text),Gs(s,r[1],ie+1140,1e3,t.text)):(Gs(s,r[0],ie+210,720,t.text),Gs(s,r[1],ie+890,720,t.text),Gs(s,r[2],ie+1570,720,t.text)),Sn(s,ie+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,ti(xi,t.accent,2.2,t.accentInk),64)},B(s,t,e){Ke(s,0,0,te,Hn,Pn),Hs(s,xi,t.accent,xi),nn(s,0,Jt+90,980),Qn(s,"Look who is "+e.age,Jt+1100,t.caption),nn(s,1,Jt+1210,860),Qn(s,"Make a wish",Jt+2100,t.caption),nn(s,2,Jt+2210,900),Sn(s,ie+50,170,t.blockBg,[e.age+" years of "+e.name],t.blockInk),nn(s,3,ie+300,900),Qn(s,"Then",ie+1230,t.caption),nn(s,4,ie+1340,900),Qn(s,"And now",ie+2270,t.caption),Sn(s,ie+2420,760,t.accent,[e.line1,e.line2,e.line3],t.accentInk,ti(xi,t.accent,2.2,t.accentInk),64)}},"senior-night":{A(s,t,e){Ke(s,0,0,te,Hn,t.main),Hs(s,t.accent,t.accent,t.accent),us(s,["Senior night"],Jt+150,t.text,32,.26),Ws(s,Jt+250,90,t.text),Gr(s,e.name,Jt+400,1850,520,t.text),Gs(s,e.number,Jt+2330,600,t.text),Gr(s,"Senior night "+e.year,ie+110,3e3,344,t.text)},B(s,t,e){Ke(s,0,0,te,Hn,Pn),Hs(s,t.accent,t.accent,t.accent),Sn(s,Jt+60,330,t.blockBg,["#"+e.number],t.blockInk,null,190),nn(s,0,Jt+470,1e3),Qn(s,"Freshman year",Jt+1500,t.caption),nn(s,1,Jt+1610,760),Qn(s,"Senior year",Jt+2400,t.caption),Sn(s,Jt+2520,250,ti(t.accent,Pn,1.6,Xs),[e.sport],sl(ti(t.accent,Pn,1.6,Xs))),nn(s,2,Jt+2840,340),Sn(s,ie+50,170,ti(t.accent,Pn,1.6,Xs),["Class of "+e.year],sl(ti(t.accent,Pn,1.6,Xs))),nn(s,3,ie+300,1e3),Qn(s,"Under the lights",ie+1330,t.caption),nn(s,4,ie+1440,800),Sn(s,ie+2420,760,t.blockBg,[e.team,"Class of "+e.year],t.blockInk,null,44)}}},nu={name:"Big name",photos:"Photo strip",message:"Family message",party:"Party and QR code",sign:"Sign-it",free:"Design it yourself"},P_=typeof window<"u"&&Array.isArray(window.MP_HOLD)?window.MP_HOLD:[],ap=null;function Qf(s,t){At.occasion==="birthday"?Hs(s,xi,t.accent,xi):Hs(s,t.accent,t.accent,t.accent)}function Bw(s){let t=String(s).trim(),e=t.length/2;if(t.length<=10||t.indexOf(" ")<0)return[t];let n=-1;for(let i=0;i<t.length;i++)t[i]===" "&&(n<0||Math.abs(i-e)<Math.abs(n-e))&&(n=i);return[t.slice(0,n),t.slice(n+1)]}function kw(s){return At.occasion==="birthday"?[s.name,"Turning "+s.age]:At.occasion==="senior-night"?[s.name,"#"+s.number]:[s.name,"Class of "+s.year]}function U_(s,t,e,n){let i;try{i=Pd(0,"M"),i.addData(t),i.make()}catch{i=Pd(0,"M"),i.addData("https://memorypostco.com"),i.make()}let r=i.getModuleCount(),o=3,a=n/(r+2*o),l=(te-n)/2;if(je){je.push({t:"art",canvas:N_(l,e,n,n,2,c=>U_(c,t,e,n)),x:l,y:e,w:n,h:n});return}Ke(s,l,e,n,n,"#FFFFFF"),s.fillStyle=Xs;for(let c=0;c<r;c++)for(let h=0;h<r;h++)i.isDark(c,h)&&s.fillRect(l+(o+h)*a,e+(o+c)*a,a+.35,a+.35)}var lp=['600 {s}px "Caveat"','400 {s}px "Permanent Marker"','400 {s}px "Reenie Beanie"','400 {s}px "Covered By Your Grace"'],zw=[[["So proud of you,","{NAME}!   Aunt Dana"],40,640,0,64,-4],[["GO GET 'EM","   Coach R."],150,905,1,40,3],[["Love you kiddo","      Grandpa"],56,1120,2,74,-2],[["Room 204 forever!","        Priya"],70,1370,3,54,4],[["Don't forget us :)","   Sam + Jo"],36,1650,0,60,-6],[["Keep running,","kid.   Mr. Alvarez"],84,1890,2,68,2],[["YOU DID IT!!","       Tess"],44,2180,1,44,-3],[["Proud neighbors","since day one","  The Okafors"],130,2370,3,52,3],[["Call your mother.","     Love, Dad"],44,2700,0,68,-3],[["Best friend ever.","       Dev"],60,2975,2,66,3],[["Number one fan","   your sister"],60,3560,0,66,-5],[["We watched you","grow up. So proud.","  Mrs. Lindqvist"],96,3830,3,50,2],[["CONGRATS {NAMEUP}","    Uncle Ray"],40,4170,1,42,-2],[["Save me a seat!","      Nana"],130,4420,0,60,5],[["Never change.","OK, change","a little.   Leo"],50,4770,2,72,-4],[["See you soon.","     Imani"],140,5150,3,54,3],[["Proud of you","always.   Mom"],48,5420,0,70,-3],[["WE LOVE YOU","   Tio Beto"],150,5720,1,36,2]];function Vw(s,t){s.textAlign="left",s.textBaseline="top",zw.forEach(([e,n,i,r,o,a])=>{let l=e.map(u=>u.replace("{NAMEUP}",t.name.toUpperCase()).replace("{NAME}",t.name));s.save(),s.translate(n,i),s.rotate(a*Math.PI/180),s.fillStyle="#1d1d1f",s.globalAlpha=.93,s.font=lp[r].replace("{s}",o);let c=Math.max.apply(null,l.map(u=>s.measureText(u).width)),h=te-n-14;c>h&&(o=Math.max(18,Math.floor(o*h/c)),s.font=lp[r].replace("{s}",o)),l.forEach((u,d)=>s.fillText(u,0,d*o)),s.restore()})}var D_={message(s,t,e){Ke(s,0,0,te,Hn,t.main),Qf(s,t),us(s,["A note from home"],Jt+150,t.accentText,32,.26),Ws(s,Jt+250,90,t.accentText),Gr(s,e.msg,Jt+360,2800,400,t.text),Bw(e.more).forEach((n,i)=>Gs(s,n.toUpperCase(),ie+190+i*125,118,t.accentText)),Ws(s,ie+500,90,t.accentText),nn(s,4,ie+600,1700),Sn(s,ie+2420,760,t.accent,["Love,",e.from],t.accentInk,null,52)},party(s,t,e){Ke(s,0,0,te,Hn,t.main),Qf(s,t),us(s,["You are invited"],Jt+150,t.accentText,32,.26),Ws(s,Jt+250,90,t.accentText),Gr(s,e.line1,Jt+380,2780,500,t.accentText),Sn(s,ie+60,640,t.accent,[e.line2,e.line3,e.line4],t.accentInk,null,46),U_(s,e.link,ie+860,360),us(s,["Scan for","the album"],ie+1250,t.text,30,.34,600),nn(s,3,ie+1500,760),Sn(s,ie+2420,760,Pn,kw(e),t.caption,null,52)},sign(s,t,e){Ke(s,0,0,te,Hn,Pn),Qf(s,t),Sn(s,Jt+60,330,t.blockBg,["Leave "+e.name,"a note"],t.blockInk,t.blockAccent,62),Qn(s,"Sign anywhere",Jt+440,t.caption),At.signed&&!je&&Vw(s,e),Sn(s,ie+2810,370,t.blockBg,["Thank you","for coming"],t.blockInk,t.blockAccent,52)}};function cp(s,t,e,n){let i=ap&&ap[t];i&&i.full?s.drawImage(i.full,0,e*Vi,te,Vi,0,e*Vi,te,Vi):Ke(s,0,e*Vi,te,Vi,n.main)}var tp=null;function Gw(s){let t=rl(),e=cu(),n=[];tp||(tp=document.createElement("canvas").getContext("2d")),je=n;try{lu(s==="free"?"name":s,tp,t,e)}catch{}finally{je=null}let i=Pn,r=[];return n.forEach(o=>{o.t==="rect"&&o.x<=0&&o.y<=0&&o.w>=te&&o.h>=Hn?i=o.fill:r.push(o)}),{bg:i,items:r}}var iu=[],B_=s=>hs[s]?hs[s].entry||(hs[s].entry={pid:"sample-"+s,color:hs[s],gray:hs[s],sample:!0}):null,ou=0,Hw=()=>JSON.stringify(Object.assign({},At,{photos:ou,faces:0,signed:0}))+Object.keys(hs).length;function lu(s,t,e,n){let i=Uw[At.occasion];s==="photos"?i.B(t,e,n):D_[s]?D_[s](t,e,n):i.A(t,e,n)}function cu(){let s=Gi[At.occasion],t=At.occasion==="graduation";return{name:Rn(At.name,s.name).slice(0,16),year:Rn(At.year,"2027").replace(/[^0-9]/g,"").slice(0,4)||"2027",school:Rn(At.school,"Northside High").slice(0,26),age:String(Math.min(120,Math.max(1,parseInt(At.age,10)||10))),number:Rn(At.number,"12").replace(/[^0-9]/g,"").slice(0,2)||"12",sport:Rn(At.sport,"Varsity soccer").slice(0,22),team:Rn(At.team,"Northside Hawks").slice(0,22),line1:Rn(At.line1,t?"Open house":"Party").slice(0,16),line2:Rn(At.line2,t?"Sat June 12":"Sat May 8").slice(0,16),line3:Rn(At.line3,t?"2 to 6 pm":"2 pm").slice(0,16),line4:Rn(At.line4,"418 Alder Lane").slice(0,18),msg:Rn(At.msg,"So proud of you").slice(0,18),more:Rn(At.more,"We saw all of it.").slice(0,24),from:Rn(At.from,"Mom and Dad").slice(0,16),link:Rn(At.link,"https://memorypostco.com").slice(0,120)}}var Ww=0;function Xw(s){let e=s.naturalWidth,n=s.naturalHeight,i=Math.min(1,720/Math.max(e,n)),r=Math.max(1,Math.round(e*i)),o=Math.max(1,Math.round(n*i)),a=document.createElement("canvas");a.width=r,a.height=o,a.getContext("2d").drawImage(s,0,0,r,o);let l=document.createElement("canvas");l.width=r,l.height=o;let c=l.getContext("2d");c.drawImage(a,0,0);let h=c.getImageData(0,0,r,o),u=h.data;for(let d=0;d<u.length;d+=4){let f=.299*u[d]+.587*u[d+1]+.114*u[d+2];f=Math.max(0,Math.min(255,(f-128)*1.06+128)),u[d]=u[d+1]=u[d+2]=f}return c.putImageData(h,0,0),{pid:"p"+ ++Ww,color:a,gray:l,width:r,height:o,naturalWidth:r,naturalHeight:o}}function I_(s,t,e=5){let n=Array.from(s).filter(o=>/^image\//.test(o.type)).slice(0,e),i=n.length,r=[];if(!i)return t(r);n.forEach((o,a)=>{let l=URL.createObjectURL(o),c=new Image;c.onload=()=>{try{r[a]=Xw(c)}catch{}URL.revokeObjectURL(l),--i||t(r.filter(Boolean))},c.onerror=()=>{URL.revokeObjectURL(l),--i||t(r.filter(Boolean))},c.src=l})}function jw(s){let t=s.querySelector("#make-stage"),e=s.querySelector("#make-canvas"),n=e.getContext&&e.getContext("2d");if(!n)return null;let i=document.createElement("canvas"),r;try{r=new Jc({canvas:i,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return null}if(!r.getContext())return null;r.outputColorSpace=Qe,r.toneMapping=Yn,r.shadowMap.enabled=!0,r.shadowMap.type=nr;let o=Math.min(window.innerWidth,window.innerHeight)<700,a=new la,l=document.createElement("canvas");l.width=64,l.height=256;let c=l.getContext("2d"),h=c.createLinearGradient(0,0,0,256);[[0,"#86A9E4"],[.3,"#C4D8F3"],[.44,"#FFFFFF"],[.5,"#FFFFFF"],[.53,"#8E978B"],[1,"#596257"]].forEach(([Rt,Vt])=>h.addColorStop(Rt,Vt)),c.fillStyle=h,c.fillRect(0,0,64,256);let u=new tr(l);u.mapping=go,u.colorSpace=Qe;let d=()=>{let Rt=new vo(r);a.environment=Rt.fromEquirectangular(u).texture,Rt.dispose()};d(),a.add(new xa(16777215,12765627,1.02));let f=new ya(16774890,3.3);f.position.set(-.8,4.9,3.3),f.target.position.set(0,.9,0),f.castShadow=!0,f.shadow.mapSize.set(o?1024:2048,o?1024:2048),Object.assign(f.shadow.camera,{left:-1.2,right:1.2,top:1.4,bottom:-1.2,near:1,far:9}),f.shadow.bias=-4e-4,f.shadow.normalBias=.002,f.shadow.radius=7,a.add(f,f.target);let p=Math.min(8,r.capabilities.getMaxAnisotropy()),x=[],m=Rt=>(x[Rt]||(x[Rt]=[0,1].map(()=>{let Vt=document.createElement("canvas");Vt.width=Hr,Vt.height=eu;let H=new tr(Vt);return H.colorSpace=Qe,H.anisotropy=p,H.minFilter=oi,H.magFilter=tn,H.generateMipmaps=!0,{cv:Vt,t:H}})),x[Rt]),g=new ho({color:15131612}),S=[0,1,2,3].map(Rt=>[0,1].map(Vt=>new ho({map:m(Rt%2)[Vt].t}))),P=new ma({color:14869216,roughness:.26,metalness:1,envMapIntensity:1.25}),T=new Qs({color:789516}),A=new Zi;a.add(A);let D=(Rt,Vt,H,_e=!0)=>{let zt=new Mn(Rt,Vt);return zt.position.y=H,zt.castShadow=_e,A.add(zt),zt};[1,0].forEach((Rt,Vt)=>{let H=[S[1][Rt],S[3][Rt],g,g,S[0][Rt],S[2][Rt]];D(new Fn(ep,su,ep),H,F_+su/2+Vt*(su+L_))}),D(new Fn(5*au,.03,5*au),g,np+ip-.015,!1),D(new Fn(Qh,sp-.003,Qh),P,np+ip+(sp-.003)/2),D(new Fn(Qh-.006,.003,Qh-.006),P,tu-.0015),D(new Fn($h,Jf-.004,$h),P,(Jf-.004)/2),D(new Fn($h-.008,.004,$h-.008),P,Jf-.002);let _=new Mn(new bs(6,6),new pa({opacity:.2}));_.rotation.x=-Math.PI/2,_.receiveShadow=!0,a.add(_);let y=document.createElement("canvas");y.width=y.height=128;let C=y.getContext("2d"),E=C.createRadialGradient(64,64,4,64,64,62);E.addColorStop(0,"rgba(0,0,0,.5)"),E.addColorStop(.45,"rgba(0,0,0,.2)"),E.addColorStop(1,"rgba(0,0,0,0)"),C.fillStyle=E,C.fillRect(0,0,128,128);let R=new Mn(new bs(.46,.46),new Qs({map:new tr(y),transparent:!0,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.position.y=.0015,a.add(R);let L=new er(-1,1,1,-1,.1,40),G=.115,O=new it(0,tu/2-.02,0),Z=-.7,$=0,z=null,F=!0,B=!1,J=0,nt=0,mt=0,St=1,ot=1,_t=1.36,vt=1.06,Pt=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,ht=s.querySelector("#mk-zoom");function Bt(){let Rt=Math.max(1.06,.15*mt/nt);ot=Math.max(1,Math.min(2.3,2*Rt*nt/mt/.3)),St>ot&&(St=1),vt=Rt/St,L.top=vt,L.bottom=-vt,L.left=-vt*nt/mt,L.right=vt*nt/mt,St>1&&(_t=Math.max(vt-.1,Math.min(tu+.12-vt,_t))),O.set(0,St>1?_t:tu/2-.02,0),L.position.set(0,O.y+Math.sin(G)*12,Math.cos(G)*12),L.lookAt(O),L.updateProjectionMatrix(),L.updateMatrixWorld();let Vt=new it(0,0,0).project(L);t.style.setProperty("--lawn",Math.max(0,Math.round((Vt.y+1)/2*mt+mt*.125*St))+"px"),ht&&(ht.hidden=ot<1.4,ht.setAttribute("aria-pressed",St>1?"true":"false"),ht.textContent=St>1?"Zoom out":"Zoom"),e.style.touchAction=St>1?"none":"pan-y",F=!0,Kt()}function ee(){A.rotation.y=Z,r.render(a,L),n.clearRect(0,0,e.width,e.height),n.drawImage(i,0,0),F=!1}function kt(){let Rt=e.clientWidth,Vt=e.clientHeight;!Rt||!Vt||(nt=Rt,mt=Vt,r.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),r.setSize(nt,mt,!1),Bt(),(e.width!==i.width||e.height!==i.height)&&(e.width=i.width,e.height=i.height),B&&ee())}function se(){if(J=0,z!==null){let Rt=z-Z;Math.abs(Rt)<.002?(Z=z,z=null):Z+=Rt*.16,F=!0}Math.abs($)>4e-4?(Z+=$,$*=.93,F=!0):$=0,F&&nt&&B&&ee(),(z!==null||$!==0)&&Kt()}i.addEventListener("webglcontextrestored",()=>{d(),x.forEach(Rt=>Rt.forEach(Vt=>{Vt.t.needsUpdate=!0})),F=!0,Kt()});function Kt(){J||(J=requestAnimationFrame(se))}let Yt=!1,we=0,ge=0;e.addEventListener("pointerdown",Rt=>{Yt=!0,we=Rt.clientX,ge=Rt.clientY,$=0,z=null;try{e.setPointerCapture(Rt.pointerId)}catch{}t.classList.add("turned")}),e.addEventListener("pointermove",Rt=>{if(!Yt)return;let Vt=Rt.clientX-we,H=Rt.clientY-ge;we=Rt.clientX,ge=Rt.clientY,Z+=Vt*.011,$=Vt*.011,St>1&&H&&(_t+=H*(2*vt/mt),Bt()),F=!0,Kt()}),ht&&ht.addEventListener("click",()=>{St=St>1?1:ot,t.classList.add("turned"),Bt()});let ze=()=>{Yt=!1,Kt()};e.addEventListener("pointerup",ze),e.addEventListener("pointercancel",ze);let me=Rt=>{$=0;let Vt=Math.PI/2;z=Math.round(((z===null?Z:z)- -.7)/Vt+Rt)*Vt-.7,t.classList.add("turned"),Kt()};function bn(){let Rt=rl(),Vt=cu(),H=[],_e=At.faces.map((zt,ne)=>zt==="free"?"free"+ne:zt);_e.forEach(zt=>{H.indexOf(zt)<0&&H.push(zt)}),H.forEach((zt,ne)=>[0,1].forEach(ft=>{let{cv:xe,t:Lt}=m(ne)[ft],Dt=xe.getContext("2d");Dt.setTransform(1,0,0,1,0,0),Dt.fillStyle="#EEECE6",Dt.fillRect(0,0,Hr,eu),Dt.save(),Dt.beginPath(),Dt.rect(ru,0,Hr-2*ru,eu),Dt.clip(),Dt.setTransform(Kf,0,0,Kf,ru,-ft*Vi*Kf),zt.slice(0,4)==="free"?cp(Dt,+zt.slice(4),ft,Rt):lu(zt,Dt,Rt,Vt),Dt.restore(),Dt.setTransform(1,0,0,1,0,0),Dt.fillStyle="rgba(0,0,0,.26)",Dt.fillRect(0,ft===0?eu-2:0,Hr,2),Lt.needsUpdate=!0})),_e.forEach((zt,ne)=>[0,1].forEach(ft=>{let xe=S[ne][ft],Lt=m(H.indexOf(zt))[ft].t;xe.map!==Lt&&(xe.map=Lt,xe.needsUpdate=!0)})),B=!0,F=!0,Kt()}"ResizeObserver"in window?new ResizeObserver(kt).observe(t):window.addEventListener("resize",kt),kt(),Pt||(Z=-1.75,z=-.7);let Te=Rt=>{$=0;let Vt=Rt===0?-.7:-1.22-(Rt-1)*Math.PI/2,H=z===null?Z:z,_e=2*Math.PI;Vt+=Math.round((H-Vt)/_e)*_e,z=Vt,Kt()};return{paint:bn,turn:me,showSide:Te,front:()=>{let Rt=0,Vt=9;for(let H=0;H<4;H++){let _e=Math.abs(((Z+H*Math.PI/2)%(2*Math.PI)+3*Math.PI)%(2*Math.PI)-Math.PI);_e<Vt&&(Vt=_e,Rt=H)}return Rt},show:Rt=>{let Vt=At.faces.indexOf(Rt==="B"?"photos":"name");Te(Vt<0?0:Vt)}}}function O_(){let s=document.getElementById("make");if(!s)return;let t=jw(s);if(!t)return;let e=s.closest("section"),n=F=>s.querySelector("#"+F),i=0,r=!1,o=null,a=F=>{clearTimeout(i),i=setTimeout(t.paint,F?0:70),o&&o()},l=F=>{F.isTrusted!==!1&&!r&&(r=!0,O())};s.addEventListener("input",l,!0),s.addEventListener("change",l,!0),s.addEventListener("click",F=>{F.target.closest&&F.target.closest("[data-occ],.make-turn button,#mk-clear,#mk-design,#mk-studio,#mk-free button")&&l(F)},!0),n("make-canvas").addEventListener("pointerdown",l);let c=(F,B)=>{let J=n(F);rp.forEach(([nt,mt])=>{let St=document.createElement("label");St.className="swc",St.title=nt,St.innerHTML=`<input type="radio" name="${B}" value="${nt}"><span style="background:${mt}"></span><b>${nt}</b>`,J.appendChild(St)}),J.addEventListener("change",nt=>{At[B]=nt.target.value,O(),a(!0)})};c("mk-main","main"),c("mk-accent","accent");let h=()=>{let F=Gi[At.occasion];s.querySelectorAll('input[name="main"]').forEach(B=>{B.checked=B.value===(At.main||F.main)}),s.querySelectorAll('input[name="accent"]').forEach(B=>{B.checked=B.value===(At.accent||F.accent)})};function u(){s.querySelectorAll("[data-for],[data-face]").forEach(F=>{let B=F.dataset.for,J=F.dataset.face,nt=B?B.split(" ").indexOf(At.occasion)>=0:!1,mt=J?J.split(" ").some(St=>At.faces.indexOf(St)>=0):!1;F.hidden=!(nt||mt)})}function d(F){At.occasion=F,s.querySelectorAll("[data-occ]").forEach(nt=>nt.setAttribute("aria-pressed",nt.dataset.occ===F?"true":"false")),u();let B=Gi[F],J=F==="graduation";n("mk-name").placeholder=B.name,n("mk-l1").placeholder=J?"Open house":"Party",n("mk-l2").placeholder=J?"Sat June 12":"Sat May 8",n("mk-l3").placeholder=J?"2 to 6 pm":"2 pm",h(),O(),t.show("A"),a(!0)}s.querySelectorAll("[data-occ]").forEach(F=>F.addEventListener("click",()=>d(F.dataset.occ)));let f=(F,B)=>{let J=n(F);J&&J.addEventListener("input",()=>{At[B]=J.value,a(!1)})};[["mk-name","name"],["mk-year","year"],["mk-school","school"],["mk-age","age"],["mk-number","number"],["mk-sport","sport"],["mk-team","team"],["mk-l1","line1"],["mk-l2","line2"],["mk-l3","line3"],["mk-year2","year"]].forEach(([F,B])=>f(F,B)),[["mk-msg","msg"],["mk-more","more"],["mk-from","from"],["mk-l4","line4"],["mk-link","link"]].forEach(([F,B])=>f(F,B));let p=document.getElementById("st"),x=n("make-stage"),m=x.parentNode,g=x.nextSibling,S=(F,B)=>{At.faces[F]=B;let J=n("mk-face"+(F+1));J&&(J.value=B)},P={name:["mk-name"],year:["mk-year","mk-year2"],age:["mk-age"],number:["mk-number"]},T=p?T_({root:p,palette:rp,getRoles:rl,pieces:Gw,stamp:Hw,kinds:Object.keys(nu).filter(F=>F!=="free"&&P_.indexOf(F)<0).map(F=>[F,nu[F]]),kindOf:F=>At.faces[F],setKind:(F,B)=>{S(F,B),u(),_()},turnTo:F=>t.showSide(F),onChange:()=>t.paint(),onOpen:F=>{F.appendChild(x)},onClose:()=>{m.insertBefore(x,g),u(),_(),a(!0)},fields:()=>{let F=At.occasion,B=Gi[F],J=F==="birthday"?{key:"age",label:"Turning",value:At.age,placeholder:"10"}:F==="senior-night"?{key:"number",label:"Number",value:At.number,placeholder:"12"}:{key:"year",label:"Class year",value:At.year,placeholder:"2027"};return{occasion:F,occasions:Object.keys(Gi).map(nt=>[nt,Gi[nt].label]),name:At.name,namePlaceholder:B.name,second:J,main:At.main||B.main,accent:At.accent||B.accent}},setField:(F,B)=>{if(r=!0,F==="occasion"){d(B);return}At[F]=B,(F==="main"||F==="accent")&&h(),(P[F]||[]).forEach(J=>{let nt=n(J);nt&&(nt.value=B)}),O(),a(!0)},library:()=>iu.slice().reverse().concat(Object.keys(hs).map(B_).filter(Boolean)),addPhotos:F=>new Promise(B=>I_(F,J=>{J.length&&(J.forEach(nt=>iu.push(nt)),At.photos=iu.slice(-5),ou++),G(!1),O(),a(!0),B(J)},12)),drawKind:(F,B)=>{let J=B.getContext("2d"),nt=B.width/te;J.setTransform(1,0,0,1,0,0),J.clearRect(0,0,B.width,B.height),J.save(),J.setTransform(nt,0,0,nt,0,0),J.beginPath(),J.rect(0,0,te,B.height/nt),J.clip(),lu(F,J,rl(),cu()),J.restore()},drawSide:(F,B)=>{let J=B.getContext("2d"),nt=At.faces[F],mt=rl();J.setTransform(B.width/te,0,0,B.height/Hn,0,0),nt==="free"?(cp(J,F,0,mt),cp(J,F,1,mt)):lu(nt,J,mt,cu())}}):null;ap=T?T.art:null;let A=0;T&&(o=()=>{clearTimeout(A),A=setTimeout(()=>T.refresh().then(F=>{F&&t.paint()}),320)});let D=n("mk-free");function _(){D&&(D.textContent="",At.faces.forEach((F,B)=>{if(F!=="free")return;let J=document.createElement("button");J.type="button",J.className="btn btn-line",J.textContent="Edit face "+(B+1)+" in the studio",J.addEventListener("click",()=>T.open(B)),D.appendChild(J)}))}let y=n("mk-design");y&&(y.hidden=!T,T&&y.addEventListener("click",()=>T.open(t.front())));let C=document.getElementById("mk-studio-row");C&&T&&(C.hidden=!1,n("mk-studio").addEventListener("click",()=>T.open(t.front()))),[0,1,2,3].forEach(F=>{let B=n("mk-face"+(F+1));B&&(Object.keys(nu).forEach(J=>{if(J==="free"&&!T||P_.indexOf(J)>=0)return;let nt=document.createElement("option");nt.value=J,nt.textContent=nu[J],B.appendChild(nt)}),B.value=At.faces[F],B.addEventListener("change",()=>{let J=At.faces[F];At.faces[F]=B.value;let nt=()=>{u(),_(),t.showSide(F),a(!0)};B.value==="free"?T.start(F,J==="free"?null:J).then(nt):nt()}))}),s.querySelectorAll("[data-face]").forEach(F=>F.addEventListener("focusin",()=>{let B=At.faces.indexOf(F.dataset.face.split(" ")[0]);B>=0&&t.showSide(B)}));let E=n("mk-signed");E&&E.addEventListener("change",()=>{At.signed=E.checked,a(!0),At.signed&&document.fonts&&document.fonts.load&&Promise.all(lp.map(F=>document.fonts.load(F.replace("{s}","40")))).then(()=>a(!0)).catch(()=>{})}),n("mk-year").addEventListener("input",()=>{n("mk-year2").value=n("mk-year").value}),n("mk-year2").addEventListener("input",()=>{n("mk-year").value=n("mk-year2").value});let R=n("mk-photo-note"),L=s.querySelector('label[for="mk-photos"]'),G=F=>{let B=At.photos.length;L&&(L.textContent=B===0?"Add up to 5 photos":B<5?"Add more photos":"Swap in new photos"),n("mk-clear").hidden=B===0,R.textContent=(F?"That file could not be read. Try a JPG or PNG photo. ":"")+(B===0?"Sample photos are showing. Yours stay on your device.":B+" of 5 photos on the post. They stay on your device.")};n("mk-photos").addEventListener("change",F=>{let B=F.target.files?F.target.files.length:0;I_(F.target.files,J=>{J.length&&(J.forEach(nt=>iu.push(nt)),At.photos=At.photos.concat(J).slice(-5),ou++,t.show("B")),G(B>0&&!J.length),F.target.value="",O(),a(!0)})}),n("mk-clear").addEventListener("click",()=>{At.photos=[],ou++,G(!1),O(),a(!0)}),n("mk-bw").addEventListener("change",F=>{At.bw=F.target.checked,a(!0)}),n("mk-left").addEventListener("click",()=>t.turn(-1)),n("mk-right").addEventListener("click",()=>t.turn(1));function O(){let F=Gi[At.occasion];window.MP_DESIGN=r?"Tried the preview: "+F.label+", "+(At.main||F.main)+" and "+(At.accent||F.accent)+".":""}let Z=n("mk-join");Z&&Z.addEventListener("click",()=>{let F=document.getElementById("f-occasion");F&&(F.selectedIndex={graduation:0,birthday:1,"senior-night":2}[At.occasion])}),["grad","caps","skyline","field","road","balloons","cake","bokeh"].forEach(F=>{let B=new Image;B.onload=()=>{hs[F]=B,a(!1)},B.src="img/sample-"+F+".jpg"}),(document.fonts&&document.fonts.load?Promise.all([document.fonts.load('800 64px "Barlow Condensed"'),document.fonts.load('700 64px "Barlow Condensed"'),document.fonts.load('600 32px "Barlow"')]).catch(()=>{}):Promise.resolve()).then(()=>a(!0)),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>a(!0)),e.classList.add("has-make"),s.hidden=!1,d("graduation"),window.dispatchEvent(new Event("resize"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",O_):O_();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
