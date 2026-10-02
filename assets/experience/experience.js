var pp=0,Pu=1,mp=2;var _o=1,gp=2,ua=3,zr=0,Fn=1,Xi=2,qi=0,fa=1,Iu=2,Lu=3,Du=4,_p=5;var hs=100,xp=101,vp=102,yp=103,Sp=104,Mp=200,bp=201,wp=202,Tp=203,Nu=204,Uu=205,Ep=206,Ap=207,Cp=208,Rp=209,Pp=210,Ip=211,Lp=212,Dp=213,Np=214,Ul=0,Fl=1,Ol=2,na=3,Bl=4,kl=5,zl=6,Vl=7,Fu=0,Up=1,Fp=2,Pi=0,Ou=1,Bu=2,ku=3,xo=4,zu=5,Vu=6,Gu=7;var Hu=300,Vr=301,us=302,fc=303,dc=304,vo=306,Gl=1e3,Vi=1001,Hl=1002,cn=1003,Op=1004;var yo=1005;var en=1006,pc=1007;var Gr=1008;var ii=1009,Wu=1010,Xu=1011,da=1012,mc=1013,Ii=1014,Li=1015,Di=1016,gc=1017,_c=1018,pa=1020,qu=35902,Yu=35899,Zu=1021,Ju=1022,_i=1023,Gi=1026,Hr=1027,$u=1028,xc=1029,Wr=1030,vc=1031;var yc=1033,So=33776,Mo=33777,bo=33778,wo=33779,Sc=35840,Mc=35841,bc=35842,wc=35843,Tc=36196,Ec=37492,Ac=37496,Cc=37488,Rc=37489,To=37490,Pc=37491,Ic=37808,Lc=37809,Dc=37810,Nc=37811,Uc=37812,Fc=37813,Oc=37814,Bc=37815,kc=37816,zc=37817,Vc=37818,Gc=37819,Hc=37820,Wc=37821,Xc=36492,qc=36494,Yc=36495,Zc=36283,Jc=36284,Eo=36285,$c=36286;var Za=2300,Wl=2301,Ll=2302,bu=2303,wu=2400,Tu=2401,Eu=2402;var Bp=3200;var Kc=0,kp=1,ur="",dn="srgb",Ja="srgb-linear",$a="linear",mt="srgb";var Dl=7680;var zp=519,Vp=512,Gp=513,Hp=514,jc=515,Wp=516,Xp=517,Qc=518,qp=519,Yp=35044;var Ku="300 es",Ci=2e3,Ka=2001;function U_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function F_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ia(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zp(){let r=ia("canvas");return r.style.display="block",r}var Xd={},ra=null;function ju(...r){let e="THREE."+r.shift();ra?ra("log",e,...r):console.log(e,...r)}function Jp(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ze(...r){r=Jp(r);let e="THREE."+r.shift();if(ra)ra("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ge(...r){r=Jp(r);let e="THREE."+r.shift();if(ra)ra("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ls(...r){let e=r.join(" ");e in Xd||(Xd[e]=!0,ze(...r))}function $p(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Kp={[Ul]:Fl,[Ol]:zl,[Bl]:Vl,[na]:kl,[Fl]:Ul,[zl]:Ol,[Vl]:Bl,[kl]:na},Hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qd=1234567,qa=Math.PI/180,sa=180/Math.PI;function ma(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function Qu(r,e){return(r%e+e)%e}function O_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function B_(r,e,t){return r!==e?(t-r)/(e-r):0}function Ya(r,e,t){return(1-t)*r+t*e}function k_(r,e,t,n){return Ya(r,e,1-Math.exp(-t*n))}function z_(r,e=1){return e-Math.abs(Qu(r,e*2)-e)}function V_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function G_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function H_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function W_(r,e){return r+Math.random()*(e-r)}function X_(r){return r*(.5-Math.random())}function q_(r){r!==void 0&&(qd=r);let e=qd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Y_(r){return r*qa}function Z_(r){return r*sa}function J_(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function $_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function K_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function j_(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ea(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ao={DEG2RAD:qa,RAD2DEG:sa,generateUUID:ma,clamp:ct,euclideanModulo:Qu,mapLinear:O_,inverseLerp:B_,lerp:Ya,damp:k_,pingpong:z_,smoothstep:V_,smootherstep:G_,randInt:H_,randFloat:W_,randFloatSpread:X_,seededRandom:q_,degToRad:Y_,radToDeg:Z_,isPowerOfTwo:J_,ceilPowerOfTwo:$_,floorPowerOfTwo:K_,setQuaternionFromProperEuler:j_,normalize:Nn,denormalize:ea},et=class r{static{r.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Wi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let w=Math.acos(p),C=Math.sin(w);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Z=class r{static{r.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},iu=new Z,Yd=new Wi,Ze=class r{static{r.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],w=i[1],C=i[4],y=i[7],S=i[2],b=i[5],E=i[8];return s[0]=a*_+o*w+l*S,s[3]=a*p+o*C+l*b,s[6]=a*m+o*y+l*E,s[1]=c*_+h*w+d*S,s[4]=c*p+h*C+d*b,s[7]=c*m+h*y+d*E,s[2]=u*_+f*w+g*S,s[5]=u*p+f*C+g*b,s[8]=u*m+f*y+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ru.makeScale(e,t)),this}rotate(e){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ru.makeRotation(-e)),this}translate(e,t){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ru.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ru=new Ze,Zd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q_(){let r={enabled:!0,workingColorSpace:Ja,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(i.r=ta(i.r),i.g=ta(i.g),i.b=ta(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ur?$a:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ja]:{primaries:e,whitePoint:n,transfer:$a,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Zd,fromXYZ:Jd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),r}var lt=Q_();function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var zs,Xl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=ia("canvas")),zs.width=e.width,zs.height=e.height;let i=zs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ia("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},e0=0,aa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=ma(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(su(i[a].image)):s.push(su(i[a]))}else s=su(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function su(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var t0=0,au=new Z,Mn=class r extends Hi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Vi,i=Vi,s=en,a=Gr,o=_i,l=ii,c=r.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ma(),this.name="",this.source=new aa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(au).x}get height(){return this.source.getSize(au).y}get depth(){return this.source.getSize(au).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gl:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gl:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Hu;Mn.DEFAULT_ANISOTROPY=1;var Nt=class r{static{r.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,y=(f+1)/2,S=(m+1)/2,b=(h+u)/4,E=(d+_)/4,x=(g+p)/4;return C>y&&C>S?C<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(C),i=b/n,s=E/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=x/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=E/s,i=x/s),this.set(n,i,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-_)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ql=class extends Hi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new Mn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new aa(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ja=class extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yl=class extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var kt=class r{static{r.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,l,c,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,f,g,_,p)}set(e,t,n,i,s,a,o,l,c,h,d,u,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n0,e,i0)}lookAt(e,t,n){let i=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Er.crossVectors(n,Qn),Er.lengthSq()===0&&(Math.abs(n.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Er.crossVectors(n,Qn)),Er.normalize(),dl.crossVectors(Qn,Er),i[0]=Er.x,i[4]=dl.x,i[8]=Qn.x,i[1]=Er.y,i[5]=dl.y,i[9]=Qn.y,i[2]=Er.z,i[6]=dl.z,i[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],w=n[3],C=n[7],y=n[11],S=n[15],b=i[0],E=i[4],x=i[8],T=i[12],A=i[1],L=i[5],D=i[9],O=i[13],I=i[2],B=i[6],q=i[10],z=i[14],j=i[3],H=i[7],R=i[11],K=i[15];return s[0]=a*b+o*A+l*I+c*j,s[4]=a*E+o*L+l*B+c*H,s[8]=a*x+o*D+l*q+c*R,s[12]=a*T+o*O+l*z+c*K,s[1]=h*b+d*A+u*I+f*j,s[5]=h*E+d*L+u*B+f*H,s[9]=h*x+d*D+u*q+f*R,s[13]=h*T+d*O+u*z+f*K,s[2]=g*b+_*A+p*I+m*j,s[6]=g*E+_*L+p*B+m*H,s[10]=g*x+_*D+p*q+m*R,s[14]=g*T+_*O+p*z+m*K,s[3]=w*b+C*A+y*I+S*j,s[7]=w*E+C*L+y*B+S*H,s[11]=w*x+C*D+y*q+S*R,s[15]=w*T+C*O+y*z+S*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],w=l*f-c*u,C=o*f-c*d,y=o*u-l*d,S=a*f-c*h,b=a*u-l*h,E=a*d-o*h;return t*(_*w-p*C+m*y)-n*(g*w-p*S+m*b)+i*(g*C-_*S+m*E)-s*(g*y-_*b+p*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],w=t*o-n*a,C=t*l-i*a,y=t*c-s*a,S=n*l-i*o,b=n*c-s*o,E=i*c-s*l,x=h*_-d*g,T=h*p-u*g,A=h*m-f*g,L=d*p-u*_,D=d*m-f*_,O=u*m-f*p,I=w*O-C*D+y*L+S*A-b*T+E*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/I;return e[0]=(o*O-l*D+c*L)*B,e[1]=(i*D-n*O-s*L)*B,e[2]=(_*E-p*b+m*S)*B,e[3]=(u*b-d*E-f*S)*B,e[4]=(l*A-a*O-c*T)*B,e[5]=(t*O-i*A+s*T)*B,e[6]=(p*y-g*E-m*C)*B,e[7]=(h*E-u*y+f*C)*B,e[8]=(a*D-o*A+c*x)*B,e[9]=(n*A-t*D-s*x)*B,e[10]=(g*b-_*y+m*w)*B,e[11]=(d*y-h*b-f*w)*B,e[12]=(o*T-a*L-l*x)*B,e[13]=(t*L-n*T+i*x)*B,e[14]=(_*C-g*S-p*w)*B,e[15]=(h*S-d*C+u*w)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,_=a*h,p=a*d,m=o*d,w=l*c,C=l*h,y=l*d,S=n.x,b=n.y,E=n.z;return i[0]=(1-(_+m))*S,i[1]=(f+y)*S,i[2]=(g-C)*S,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+m))*b,i[6]=(p+w)*b,i[7]=0,i[8]=(g+C)*E,i[9]=(p-w)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Vs.set(i[0],i[1],i[2]).length(),o=Vs.set(i[4],i[5],i[6]).length(),l=Vs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),wi.copy(this);let c=1/a,h=1/o,d=1/l;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=d,wi.elements[9]*=d,wi.elements[10]*=d,t.setFromRotationMatrix(wi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Ci,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Ci)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ka)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ci,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Ci)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ka)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vs=new Z,wi=new kt,n0=new Z(0,0,0),i0=new Z(1,1,1),Er=new Z,dl=new Z,Qn=new Z,$d=new kt,Kd=new Wi,hr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};hr.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r0=0,jd=new Z,Gs=new Wi,ir=new kt,pl=new Z,Ga=new Z,s0=new Z,a0=new Wi,Qd=new Z(1,0,0),ep=new Z(0,1,0),tp=new Z(0,0,1),np={type:"added"},o0={type:"removed"},Hs={type:"childadded",child:null},ou={type:"childremoved",child:null},qn=class r extends Hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new Z,t=new hr,n=new Wi,i=new Z(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Ze}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ep,e)}rotateZ(e){return this.rotateOnAxis(tp,e)}translateOnAxis(e,t){return jd.copy(e).applyQuaternion(this.quaternion),this.position.add(jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ep,e)}translateZ(e){return this.translateOnAxis(tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pl.copy(e):pl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Ga,pl,this.up):ir.lookAt(pl,Ga,this.up),this.quaternion.setFromRotationMatrix(ir),i&&(ir.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(ir),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(np),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o0),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(np),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,a0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qn.DEFAULT_UP=new Z(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var lr=class extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}},l0={type:"move"},la=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ar={h:0,s:0,l:0},ml={h:0,s:0,l:0};function lu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=lt.workingColorSpace){if(e=Qu(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=lu(a,s,e+1/3),this.g=lu(a,s,e),this.b=lu(a,s,e-1/3)}return lt.colorSpaceToWorking(this,i),this}setStyle(e,t=dn){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){let n=jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return lt.workingToColorSpace(yn.copy(this),e),Math.round(ct(yn.r*255,0,255))*65536+Math.round(ct(yn.g*255,0,255))*256+Math.round(ct(yn.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,s=yn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=dn){lt.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,i=yn.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ar),this.setHSL(Ar.h+e,Ar.s+t,Ar.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ar),e.getHSL(ml);let n=Ya(Ar.h,ml.h,t),i=Ya(Ar.s,ml.s,t),s=Ya(Ar.l,ml.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new Qe;Qe.NAMES=jp;var Qa=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},eo=class extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hr,this.environmentIntensity=1,this.environmentRotation=new hr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ti=new Z,rr=new Z,cu=new Z,sr=new Z,Ws=new Z,Xs=new Z,ip=new Z,hu=new Z,uu=new Z,fu=new Z,du=new Nt,pu=new Nt,mu=new Nt,Ir=class r{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ti.subVectors(e,t),i.cross(Ti);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ti.subVectors(i,t),rr.subVectors(n,t),cu.subVectors(e,t);let a=Ti.dot(Ti),o=Ti.dot(rr),l=Ti.dot(cu),c=rr.dot(rr),h=rr.dot(cu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,sr.x),l.addScaledVector(a,sr.y),l.addScaledVector(o,sr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return du.setScalar(0),pu.setScalar(0),mu.setScalar(0),du.fromBufferAttribute(e,t),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(du,s.x),a.addScaledVector(pu,s.y),a.addScaledVector(mu,s.z),a}static isFrontFacing(e,t,n,i){return Ti.subVectors(n,t),rr.subVectors(e,t),Ti.cross(rr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),Ti.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Ws.subVectors(i,n),Xs.subVectors(s,n),hu.subVectors(e,n);let l=Ws.dot(hu),c=Xs.dot(hu);if(l<=0&&c<=0)return t.copy(n);uu.subVectors(e,i);let h=Ws.dot(uu),d=Xs.dot(uu);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ws,a);fu.subVectors(e,s);let f=Ws.dot(fu),g=Xs.dot(fu);if(g>=0&&f<=g)return t.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Xs,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return ip.subVectors(s,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(ip,o);let m=1/(p+_+u);return a=_*m,o=u*m,t.copy(n).addScaledVector(Ws,a).addScaledVector(Xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Lr=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(s,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gl.copy(n.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ha),_l.subVectors(this.max,Ha),qs.subVectors(e.a,Ha),Ys.subVectors(e.b,Ha),Zs.subVectors(e.c,Ha),Cr.subVectors(Ys,qs),Rr.subVectors(Zs,Ys),rs.subVectors(qs,Zs);let t=[0,-Cr.z,Cr.y,0,-Rr.z,Rr.y,0,-rs.z,rs.y,Cr.z,0,-Cr.x,Rr.z,0,-Rr.x,rs.z,0,-rs.x,-Cr.y,Cr.x,0,-Rr.y,Rr.x,0,-rs.y,rs.x,0];return!gu(t,qs,Ys,Zs,_l)||(t=[1,0,0,0,1,0,0,0,1],!gu(t,qs,Ys,Zs,_l))?!1:(xl.crossVectors(Cr,Rr),t=[xl.x,xl.y,xl.z],gu(t,qs,Ys,Zs,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ar=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ei=new Z,gl=new Lr,qs=new Z,Ys=new Z,Zs=new Z,Cr=new Z,Rr=new Z,rs=new Z,Ha=new Z,_l=new Z,xl=new Z,ss=new Z;function gu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ss.fromArray(r,s);let o=i.x*Math.abs(ss.x)+i.y*Math.abs(ss.y)+i.z*Math.abs(ss.z),l=e.dot(ss),c=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Jt=new Z,vl=new et,c0=0,gi=class extends Hi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yp,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ea(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ea(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ea(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ea(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ea(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),i=Nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var to=class extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var no=class extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Un=class extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}},h0=new Lr,Wa=new Z,_u=new Z,ca=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):h0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);let t=Wa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(_u)),this.expandByPoint(Wa.copy(e.center).sub(_u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},u0=0,mi=new kt,xu=new qn,Js=new Z,ei=new Lr,Xa=new Lr,ln=new Z,Ri=class r extends Hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U_(e)?no:to)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Un(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ca);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Xa.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(ei.min,Xa.min),ei.expandByPoint(ln),ln.addVectors(ei.max,Xa.max),ei.expandByPoint(ln)):(ei.expandByPoint(Xa.min),ei.expandByPoint(Xa.max))}ei.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)ln.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ln));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ln.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(e,c),ln.add(Js)),i=Math.max(i,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new Z,l[x]=new Z;let c=new Z,h=new Z,d=new Z,u=new et,f=new et,g=new et,_=new Z,p=new Z;function m(x,T,A){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),u.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[x].add(_),o[T].add(_),o[A].add(_),l[x].add(p),l[T].add(p),l[A].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let x=0,T=w.length;x<T;++x){let A=w[x],L=A.start,D=A.count;for(let O=L,I=L+D;O<I;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let C=new Z,y=new Z,S=new Z,b=new Z;function E(x){S.fromBufferAttribute(i,x),b.copy(S);let T=o[x];C.copy(T),C.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(b,T);let L=y.dot(l[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,L)}for(let x=0,T=w.length;x<T;++x){let A=w[x],L=A.start,D=A.count;for(let O=L,I=L+D;O<I;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new Z,s=new Z,a=new Z,o=new Z,l=new Z,c=new Z,h=new Z,d=new Z;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new gi(u,h,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var vu=new Z,f0=new Z,d0=new Ze,Ai=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=vu.subVectors(n,t).cross(f0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(vu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||d0.getNormalMatrix(e),i=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},p0=0,Dr=class extends Hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=fa,this.side=zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nu,this.blendDst=Uu,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dl,this.stencilZFail=Dl,this.stencilZPass=Dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ai().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var or=new Z,yu=new Z,yl=new Z,Sl=new Z,io=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){yu.copy(e).add(t).multiplyScalar(.5),yl.copy(t).sub(e).normalize(),Sl.copy(this.origin).sub(yu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(yl),o=Sl.dot(this.direction),l=-Sl.dot(yl),c=Sl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(yu).addScaledVector(yl,u),f}intersectSphere(e,t){if(e.radius<0)return null;or.subVectors(e.center,this.origin);let n=or.dot(this.direction),i=or.dot(or)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=n.x-a.x,w=n.y-a.y,C=n.z-a.z,y=Math.abs(l),S=Math.abs(c),b=Math.abs(h),E,x,T,A,L,D,O,I,B,q,z,j;if(y>=S&&y>=b?(T=l,D=d,B=g,j=m,l>=0?(E=c,x=h,A=u,L=f,O=_,I=p,q=w,z=C):(E=h,x=c,A=f,L=u,O=p,I=_,q=C,z=w)):S>=b?(T=c,D=u,B=_,j=w,c>=0?(E=h,x=l,A=f,L=d,O=p,I=g,q=C,z=m):(E=l,x=h,A=d,L=f,O=g,I=p,q=m,z=C)):(T=h,D=f,B=p,j=C,h>=0?(E=l,x=c,A=d,L=u,O=g,I=_,q=m,z=w):(E=c,x=l,A=u,L=d,O=_,I=g,q=w,z=m)),T===0)return null;let H=E/T,R=x/T,K=1/T,Se=A-H*D,Me=L-R*D,Ve=O-H*B,ke=I-R*B,He=q-H*j,J=z-R*j,ee=He*ke-J*Ve,_e=Se*J-Me*He,Oe=Ve*Me-ke*Se;if(i){if(ee<0||_e<0||Oe<0)return null}else if((ee<0||_e<0||Oe<0)&&(ee>0||_e>0||Oe>0))return null;let me=ee+_e+Oe;if(me===0)return null;let Ue=K*(ee*D+_e*B+Oe*j);return(me>0?Ue<0:Ue>0)?null:this.at(Ue/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cs=class extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.combine=Fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},rp=new kt,as=new io,Ml=new ca,sp=new Z,bl=new Z,wl=new Z,Tl=new Z,Su=new Z,El=new Z,ap=new Z,Al=new Z,Yn=class extends qn{constructor(e=new Ri,t=new cs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){El.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Su.fromBufferAttribute(d,e),a?El.addScaledVector(Su,h):El.addScaledVector(Su.sub(t),h))}t.add(El)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(s),as.copy(e.ray).recast(e.near),!(Ml.containsPoint(as.origin)===!1&&(as.intersectSphere(Ml,sp)===null||as.origin.distanceToSquared(sp)>(e.far-e.near)**2))&&(rp.copy(s).invert(),as.copy(e.ray).applyMatrix4(rp),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],w=Math.max(p.start,f.start),C=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,S=C;y<S;y+=3){let b=o.getX(y),E=o.getX(y+1),x=o.getX(y+2);i=Cl(this,m,e,n,c,h,d,b,E,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let w=o.getX(p),C=o.getX(p+1),y=o.getX(p+2);i=Cl(this,a,e,n,c,h,d,w,C,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],w=Math.max(p.start,f.start),C=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=w,S=C;y<S;y+=3){let b=y,E=y+1,x=y+2;i=Cl(this,m,e,n,c,h,d,b,E,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let w=p,C=p+1,y=p+2;i=Cl(this,a,e,n,c,h,d,w,C,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}};function m0(r,e,t,n,i,s,a,o){let l;if(e.side===Fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===zr,o),l===null)return null;Al.copy(o),Al.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Al);return c<t.near||c>t.far?null:{distance:c,point:Al.clone(),object:r}}function Cl(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,bl),r.getVertexPosition(l,wl),r.getVertexPosition(c,Tl);let h=m0(r,e,t,n,bl,wl,Tl,ap);if(h){let d=new Z;Ir.getBarycoord(ap,bl,wl,Tl,d),i&&(h.uv=Ir.getInterpolatedAttribute(i,o,l,c,d,new et)),s&&(h.uv1=Ir.getInterpolatedAttribute(s,o,l,c,d,new et)),a&&(h.normal=Ir.getInterpolatedAttribute(a,o,l,c,d,new Z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new Z,materialIndex:0};Ir.getNormal(bl,wl,Tl,u.normal),h.face=u,h.barycoord=d}return h}var Zl=class extends Mn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=cn,h=cn,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var os=new ca,g0=new et(.5,.5),Rl=new Z,ro=class{constructor(e=new Ai,t=new Ai,n=new Ai,i=new Ai,s=new Ai,a=new Ai){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ci,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],p=s[10],m=s[11],w=s[12],C=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-a,f-h,m-g,S-w).normalize(),i[1].setComponents(c+a,f+h,m+g,S+w).normalize(),i[2].setComponents(c+o,f+d,m+_,S+C).normalize(),i[3].setComponents(c-o,f-d,m-_,S-C).normalize(),n)i[4].setComponents(l,u,p,y).normalize(),i[5].setComponents(c-l,f-u,m-p,S-y).normalize();else if(i[4].setComponents(c-l,f-u,m-p,S-y).normalize(),t===Ci)i[5].setComponents(c+l,f+u,m+p,S+y).normalize();else if(t===Ka)i[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){os.center.set(0,0,0);let t=g0.distanceTo(e.center);return os.radius=.7071067811865476+t,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Rl.x=i.normal.x>0?e.max.x:e.min.x,Rl.y=i.normal.y>0?e.max.y:e.min.y,Rl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var so=class extends Mn{constructor(e,t,n,i,s=en,a=en,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var ao=class extends Mn{constructor(e=[],t=Vr,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var Nr=class extends Mn{constructor(e,t,n=Ii,i,s,a,o=cn,l=cn,c,h=Gi,d=1){if(h!==Gi&&h!==Hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new aa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Jl=class extends Nr{constructor(e,t=Ii,n=Vr,i,s,a=cn,o=cn,l,c=Gi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},oo=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ur=class r extends Ri{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(h,3)),this.setAttribute("uv",new Un(d,2));function g(_,p,m,w,C,y,S,b,E,x,T){let A=y/E,L=S/x,D=y/2,O=S/2,I=b/2,B=E+1,q=x+1,z=0,j=0,H=new Z;for(let R=0;R<q;R++){let K=R*L-O;for(let Se=0;Se<B;Se++){let Me=Se*A-D;H[_]=Me*w,H[p]=K*C,H[m]=I,c.push(H.x,H.y,H.z),H[_]=0,H[p]=0,H[m]=b>0?1:-1,h.push(H.x,H.y,H.z),d.push(Se/E),d.push(1-R/x),z+=1}}for(let R=0;R<x;R++)for(let K=0;K<E;K++){let Se=u+K+B*R,Me=u+K+B*(R+1),Ve=u+(K+1)+B*(R+1),ke=u+(K+1)+B*R;l.push(Se,Me,ke),l.push(Me,Ve,ke),j+=6}o.addGroup(f,j,T),f+=j,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var lo=class r extends Ri{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new Z,h=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Un(a,3)),this.setAttribute("normal",new Un(o,3)),this.setAttribute("uv",new Un(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Fr=class r extends Ri{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let w=m*u-a;for(let C=0;C<c;C++){let y=C*d-s;g.push(y,-w,0),_.push(0,0,1),p.push(C/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let C=w+c*m,y=w+c*(m+1),S=w+1+c*(m+1),b=w+1+c*m;f.push(C,y,b),f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function fs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(op(i))i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(op(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function bn(r){let e={};for(let t=0;t<r.length;t++){let n=fs(r[t]);for(let i in n)e[i]=n[i]}return e}function op(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function _0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ef(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var Qp={clone:fs,merge:bn},x0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x0,this.fragmentShader=v0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=_0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Qe().setHex(i.value);break;case"v2":this.uniforms[n].value=new et().fromArray(i.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"m4":this.uniforms[n].value=new kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},$l=class extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},co=class extends Dr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kc,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Kl=class extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jl=class extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $s(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Mu(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Or=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ql=class extends Or{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tu:s=e,o=2*t-n;break;case Eu:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tu:a=e,l=2*n-t;break;case Eu:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,w=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,C=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let S=0;S!==o;++S)s[S]=m*a[h+S]+w*a[c+S]+C*a[l+S]+y*a[d+S];return s}},ec=class extends Or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},tc=class extends Or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},nc=class extends Or{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(i-t),_=1-g;for(let p=0;p!==o;++p)s[p]=a[c+p]*_+a[l+p]*g;return s}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=f*u+g*2,w=d[m],C=d[m+1],y=e*u+g*2,S=h[y],b=h[y+1],E=S0(n,t,w,S,i);s[g]=em(E,_,C,b,p)}return s}};function em(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function y0(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function S0(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=em(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=y0(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var ni=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$s(t,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$s(e.times,Array),values:$s(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Mu(e.settings)&&(n.settings={inTangents:$s(e.settings.inTangents,Array),outTangents:$s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Za:t=this.InterpolantFactoryMethodDiscrete;break;case Wl:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break;case bu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Za;case this.InterpolantFactoryMethodLinear:return Wl;case this.InterpolantFactoryMethodSmooth:return Ll;case this.InterpolantFactoryMethodBezier:return bu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Mu(this.settings)&&(lp(this.settings.inTangents,e),lp(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&F_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ll,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Mu(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function lp(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Wl;var Br=class extends ni{constructor(e,t,n){super(e,t,n)}};Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=Za;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}};ic.prototype.ValueTypeName="color";var rc=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}};rc.prototype.ValueTypeName="number";var sc=class extends Or{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Wi.slerpFlat(s,0,a,c-o,a,c,l);return s}},ho=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new sc(this.times,this.values,this.getValueSize(),e)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends ni{constructor(e,t,n){super(e,t,n)}};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=Za;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}};ac.prototype.ValueTypeName="vector";var Nl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(cp(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!cp(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function cp(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var oc=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tm=new oc,ha=class{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=new WeakMap,lc=class extends ha{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Nl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Ks.get(a);d===void 0&&(d=[],Ks.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=ia("img");function l(){h(),t&&t(this);let d=Ks.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Ks.delete(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),Nl.remove(`image:${e}`);let u=Ks.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Ks.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Nl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var uo=class extends ha{constructor(e){super(e)}load(e,t,n,i){let s=new Mn,a=new lc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},cc=class extends qn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},fo=class extends cc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};var Pl=new Z,Il=new Wi,zi=new Z,po=class extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pl,Il,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Il,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pl,Il,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pl,Il,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pr=new Z,hp=new et,up=new et,Sn=class extends po{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,hp,up),t.subVectors(up,hp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var mo=class extends po{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var js=-90,Qs=1,hc=class extends qn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Sn(js,Qs,e,t);i.layers=this.layers,this.add(i);let s=new Sn(js,Qs,e,t);s.layers=this.layers,this.add(s);let a=new Sn(js,Qs,e,t);a.layers=this.layers,this.add(a);let o=new Sn(js,Qs,e,t);o.layers=this.layers,this.add(o);let l=new Sn(js,Qs,e,t);l.layers=this.layers,this.add(l);let c=new Sn(js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},uc=class extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var tf="\\[\\]\\.:\\/",M0=new RegExp("["+tf+"]","g"),nf="[^"+tf+"]",b0="[^"+tf.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",nf),T0=/(WCOD+)?/.source.replace("WCOD",b0),E0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nf),A0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nf),C0=new RegExp("^"+w0+T0+E0+A0+"$"),R0=["material","materials","bones","map"],Au=class{constructor(e,t,n){let i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(M0,"")}static parseTrackName(e){let t=C0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);R0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Au;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Dw=new Float32Array(1);var fp=new kt,go=class{constructor(e,t,n=0,i=1/0){this.ray=new io(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return fp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(fp),this}intersectObject(e,t=!0,n=[]){return Cu(e,this,n,t),n.sort(dp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Cu(e[i],this,n,t);return n.sort(dp),n}};function dp(r,e){return r.distance-e.distance}function Cu(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Cu(s[a],e,t,!0)}}var Ru=class r{static{r.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function rf(r,e,t,n){let i=P0(n);switch(t){case Zu:return r*e;case $u:return r*e/i.components*i.byteLength;case xc:return r*e/i.components*i.byteLength;case Wr:return r*e*2/i.components*i.byteLength;case vc:return r*e*2/i.components*i.byteLength;case Ju:return r*e*3/i.components*i.byteLength;case _i:return r*e*4/i.components*i.byteLength;case yc:return r*e*4/i.components*i.byteLength;case So:case Mo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bo:case wo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mc:case wc:return Math.max(r,16)*Math.max(e,8)/4;case Sc:case bc:return Math.max(r,8)*Math.max(e,8)/2;case Tc:case Ec:case Cc:case Rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ac:case To:case Pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Hc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Xc:case qc:case Yc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zc:case Jc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Eo:case $c:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function P0(r){switch(r){case ii:case Wu:return{byteLength:1,components:1};case da:case Xu:case Di:return{byteLength:2,components:1};case gc:case _c:return{byteLength:2,components:4};case Ii:case mc:case Li:return{byteLength:4,components:1};case qu:case Yu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bm(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function L0(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var D0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,B0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
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
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V0=`#ifdef USE_BATCHING
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
#endif`,G0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,q0=`#ifdef USE_IRIDESCENCE
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
#endif`,Y0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,nx=`#define PI 3.141592653589793
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
} // validated`,ix=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rx=`vec3 transformedNormal = objectNormal;
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
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ax=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cx="gl_FragColor = linearToOutputTexel( gl_FragColor );",hx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,Sx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Tx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
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
				#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Px=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
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
#endif`,Ix=`uniform sampler2D dfgLUT;
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
		float roughness = material.clearcoatRoughness;
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
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
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
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
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
}`,Lx=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
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
#endif`,Nx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ux=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
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
#endif`,Fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ox=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hx=`#if defined( USE_POINTS_UV )
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
#endif`,Wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jx=`#ifdef USE_MORPHTARGETS
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
#endif`,$x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nv=`#ifdef USE_NORMALMAP
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
#endif`,iv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ov=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
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
#endif`,gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_v=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xv=`float getShadowMask() {
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
}`,vv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,Sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,bv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ev=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Av=`#ifdef USE_TRANSMISSION
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
#endif`,Cv=`#ifdef USE_TRANSMISSION
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nv=`uniform sampler2D t2D;
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`#include <common>
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
}`,zv=`#if DEPTH_PACKING == 3200
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
}`,Vv=`#define DISTANCE
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
}`,Gv=`#define DISTANCE
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
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xv=`uniform float scale;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Yv=`#include <common>
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#define LAMBERT
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
}`,$v=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
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
}`,Kv=`#define MATCAP
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
}`,jv=`#define MATCAP
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
}`,Qv=`#define NORMAL
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
}`,ey=`#define NORMAL
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
}`,ty=`#define PHONG
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
}`,ny=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,iy=`#define STANDARD
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
}`,ry=`#define STANDARD
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
#include <cube_uv_reflection_fragment>
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
}`,sy=`#define TOON
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
}`,ay=`#define TOON
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
}`,oy=`uniform float size;
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
}`,ly=`uniform vec3 diffuse;
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
}`,cy=`#include <common>
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
}`,hy=`uniform vec3 color;
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
}`,uy=`uniform float rotation;
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
}`,fy=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:D0,alphahash_pars_fragment:N0,alphamap_fragment:U0,alphamap_pars_fragment:F0,alphatest_fragment:O0,alphatest_pars_fragment:B0,aomap_fragment:k0,aomap_pars_fragment:z0,batching_pars_vertex:V0,batching_vertex:G0,begin_vertex:H0,beginnormal_vertex:W0,bsdfs:X0,iridescence_fragment:q0,bumpmap_pars_fragment:Y0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:J0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:K0,color_fragment:j0,color_pars_fragment:Q0,color_pars_vertex:ex,color_vertex:tx,common:nx,cube_uv_reflection_fragment:ix,defaultnormal_vertex:rx,displacementmap_pars_vertex:sx,displacementmap_vertex:ax,emissivemap_fragment:ox,emissivemap_pars_fragment:lx,colorspace_fragment:cx,colorspace_pars_fragment:hx,envmap_fragment:ux,envmap_common_pars_fragment:fx,envmap_pars_fragment:dx,envmap_pars_vertex:px,envmap_physical_pars_fragment:Tx,envmap_vertex:mx,fog_vertex:gx,fog_pars_vertex:_x,fog_fragment:xx,fog_pars_fragment:vx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:Sx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:bx,lights_pars_begin:wx,lights_toon_fragment:Ex,lights_toon_pars_fragment:Ax,lights_phong_fragment:Cx,lights_phong_pars_fragment:Rx,lights_physical_fragment:Px,lights_physical_pars_fragment:Ix,lights_fragment_begin:Lx,lights_fragment_maps:Dx,lights_fragment_end:Nx,lightprobes_pars_fragment:Ux,logdepthbuf_fragment:Fx,logdepthbuf_pars_fragment:Ox,logdepthbuf_pars_vertex:Bx,logdepthbuf_vertex:kx,map_fragment:zx,map_pars_fragment:Vx,map_particle_fragment:Gx,map_particle_pars_fragment:Hx,metalnessmap_fragment:Wx,metalnessmap_pars_fragment:Xx,morphinstance_vertex:qx,morphcolor_vertex:Yx,morphnormal_vertex:Zx,morphtarget_pars_vertex:Jx,morphtarget_vertex:$x,normal_fragment_begin:Kx,normal_fragment_maps:jx,normal_pars_fragment:Qx,normal_pars_vertex:ev,normal_vertex:tv,normalmap_pars_fragment:nv,clearcoat_normal_fragment_begin:iv,clearcoat_normal_fragment_maps:rv,clearcoat_pars_fragment:sv,iridescence_pars_fragment:av,opaque_fragment:ov,packing:lv,premultiplied_alpha_fragment:cv,project_vertex:hv,dithering_fragment:uv,dithering_pars_fragment:fv,roughnessmap_fragment:dv,roughnessmap_pars_fragment:pv,shadowmap_pars_fragment:mv,shadowmap_pars_vertex:gv,shadowmap_vertex:_v,shadowmask_pars_fragment:xv,skinbase_vertex:vv,skinning_pars_vertex:yv,skinning_vertex:Sv,skinnormal_vertex:Mv,specularmap_fragment:bv,specularmap_pars_fragment:wv,tonemapping_fragment:Tv,tonemapping_pars_fragment:Ev,transmission_fragment:Av,transmission_pars_fragment:Cv,uv_pars_fragment:Rv,uv_pars_vertex:Pv,uv_vertex:Iv,worldpos_vertex:Lv,background_vert:Dv,background_frag:Nv,backgroundCube_vert:Uv,backgroundCube_frag:Fv,cube_vert:Ov,cube_frag:Bv,depth_vert:kv,depth_frag:zv,distance_vert:Vv,distance_frag:Gv,equirect_vert:Hv,equirect_frag:Wv,linedashed_vert:Xv,linedashed_frag:qv,meshbasic_vert:Yv,meshbasic_frag:Zv,meshlambert_vert:Jv,meshlambert_frag:$v,meshmatcap_vert:Kv,meshmatcap_frag:jv,meshnormal_vert:Qv,meshnormal_frag:ey,meshphong_vert:ty,meshphong_frag:ny,meshphysical_vert:iy,meshphysical_frag:ry,meshtoon_vert:sy,meshtoon_frag:ay,points_vert:oy,points_frag:ly,shadow_vert:cy,shadow_frag:hy,sprite_vert:uy,sprite_frag:fy},ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Zi={basic:{uniforms:bn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:bn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:bn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:bn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:bn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:bn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:bn([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:bn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:bn([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:bn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:bn([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:bn([ve.common,ve.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:bn([ve.lights,ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Zi.physical={uniforms:bn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var eh={r:0,b:0,g:0},dy=new kt,wm=new Ze;wm.set(-1,0,0,0,1,0,0,0,1);function py(r,e,t,n,i,s){let a=new Qe(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let y=w.backgroundBlurriness>0;C=e.get(C,y)}return C}function g(w){let C=!1,y=f(w);y===null?p(a,o):y&&y.isColor&&(p(y,1),C=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(w,C){let y=f(C);y&&(y.isCubeTexture||y.mapping===vo)?(c===void 0&&(c=new Yn(new Ur(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:fs(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dy.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wm),c.material.toneMapped=lt.getTransfer(y.colorSpace)!==mt,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Yn(new Fr(2,2),new ti({name:"BackgroundMaterial",uniforms:fs(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,C){w.getRGB(eh,ef(r)),t.buffers.color.setClear(eh.r,eh.g,eh.b,C,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,C=1){a.set(w),o=C,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,p(a,o)},render:g,addToRenderList:_,dispose:m}}function my(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(L,D,O,I,B){let q=!1,z=d(L,I,O,D);s!==z&&(s=z,c(s.object)),q=f(L,I,O,B),q&&g(L,I,O,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(L,D,O,I),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function h(L){return r.deleteVertexArray(L)}function d(L,D,O,I){let B=I.wireframe===!0,q=n[D.id];q===void 0&&(q={},n[D.id]=q);let z=L.isInstancedMesh===!0?L.id:0,j=q[z];j===void 0&&(j={},q[z]=j);let H=j[O.id];H===void 0&&(H={},j[O.id]=H);let R=H[B];return R===void 0&&(R=u(l()),H[B]=R),R}function u(L){let D=[],O=[],I=[];for(let B=0;B<t;B++)D[B]=0,O[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,D,O,I){let B=s.attributes,q=D.attributes,z=0,j=O.getAttributes();for(let H in j)if(j[H].location>=0){let K=B[H],Se=q[H];if(Se===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(Se=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(Se=L.instanceColor)),K===void 0||K.attribute!==Se||Se&&K.data!==Se.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function g(L,D,O,I){let B={},q=D.attributes,z=0,j=O.getAttributes();for(let H in j)if(j[H].location>=0){let K=q[H];K===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let Se={};Se.attribute=K,K&&K.data&&(Se.data=K.data),B[H]=Se,z++}s.attributes=B,s.attributesNum=z,s.index=I}function _(){let L=s.newAttributes;for(let D=0,O=L.length;D<O;D++)L[D]=0}function p(L){m(L,0)}function m(L,D){let O=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;O[L]=1,I[L]===0&&(r.enableVertexAttribArray(L),I[L]=1),B[L]!==D&&(r.vertexAttribDivisor(L,D),B[L]=D)}function w(){let L=s.newAttributes,D=s.enabledAttributes;for(let O=0,I=D.length;O<I;O++)D[O]!==L[O]&&(r.disableVertexAttribArray(O),D[O]=0)}function C(L,D,O,I,B,q,z){z===!0?r.vertexAttribIPointer(L,D,O,B,q):r.vertexAttribPointer(L,D,O,I,B,q)}function y(L,D,O,I){_();let B=I.attributes,q=O.getAttributes(),z=D.defaultAttributeValues;for(let j in q){let H=q[j];if(H.location>=0){let R=B[j];if(R===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(R=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(R=L.instanceColor)),R!==void 0){let K=R.normalized,Se=R.itemSize,Me=e.get(R);if(Me===void 0)continue;let Ve=Me.buffer,ke=Me.type,He=Me.bytesPerElement,J=ke===r.INT||ke===r.UNSIGNED_INT||R.gpuType===mc;if(R.isInterleavedBufferAttribute){let ee=R.data,_e=ee.stride,Oe=R.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<H.locationSize;me++)m(H.location+me,ee.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<H.locationSize;me++)p(H.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let me=0;me<H.locationSize;me++)C(H.location+me,Se/H.locationSize,ke,K,_e*He,(Oe+Se/H.locationSize*me)*He,J)}else{if(R.isInstancedBufferAttribute){for(let ee=0;ee<H.locationSize;ee++)m(H.location+ee,R.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ee=0;ee<H.locationSize;ee++)p(H.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let ee=0;ee<H.locationSize;ee++)C(H.location+ee,Se/H.locationSize,ke,K,Se*He,Se/H.locationSize*ee*He,J)}}else if(z!==void 0){let K=z[j];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(H.location,K);break;case 3:r.vertexAttrib3fv(H.location,K);break;case 4:r.vertexAttrib4fv(H.location,K);break;default:r.vertexAttrib1fv(H.location,K)}}}}w()}function S(){T();for(let L in n){let D=n[L];for(let O in D){let I=D[O];for(let B in I){let q=I[B];for(let z in q)h(q[z].object),delete q[z];delete I[B]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;let D=n[L.id];for(let O in D){let I=D[O];for(let B in I){let q=I[B];for(let z in q)h(q[z].object),delete q[z];delete I[B]}}delete n[L.id]}function E(L){for(let D in n){let O=n[D];for(let I in O){let B=O[I];if(B[L.id]===void 0)continue;let q=B[L.id];for(let z in q)h(q[z].object),delete q[z];delete B[L.id]}}}function x(L){for(let D in n){let O=n[D],I=L.isInstancedMesh===!0?L.id:0,B=O[I];if(B!==void 0){for(let q in B){let z=B[q];for(let j in z)h(z[j].object),delete z[j];delete B[q]}delete O[I],Object.keys(O).length===0&&delete n[D]}}}function T(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function gy(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function _y(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==_i&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ii&&E!==Li&&!x&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:y,maxSamples:S,samples:b}}function xy(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Ai,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let w=s?0:n,C=w*4,y=m.clippingState||null;l.value=y,y=h(g,u,C,f);for(let S=0;S!==C;++S)y[S]=t[S];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let C=0,y=f;C!==_;++C,y+=4)a.copy(d[C]).applyMatrix4(w,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var _a=4,vy=6,yy=20,Sy=256,Co=new mo,nm=new Qe,sf=null,af=0,of=0,lf=!1,My=new Z,ds=new Z,nh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=My}=s;sf=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sf,af,of),this._renderer.xr.enabled=lf,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sf=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),of=this._renderer.getActiveMipmapLevel(),lf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:Di,format:_i,colorSpace:Ja,depthBuffer:!1},i=im(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=im(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=by(s)),this._blurMaterial=Ty(s,e,t),this._ggxMaterial=wy(s,e,t)}return i}_compileMaterial(e){let t=new Yn(new Ri,e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,n,i,s){let l=new Sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(nm),d.toneMapping=Pi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yn(new Ur,new cs({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,m=!1,w=e.background;w?w.isColor&&(p.color.copy(w),e.background=null,m=!0):(p.color.copy(nm),m=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[C],s.y,s.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[C]));let S=this._cubeSize;ga(i,y*S,C>2?S:0,S,S),d.setRenderTarget(i),m&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Vr||e.mapping===us;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rm());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Co)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],p=3*_*(n>g-_a?n-g+_a:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ga(s,p,m,3*_,2*_),i.setRenderTarget(s),i.render(o,Co),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,ga(e,p,m,3*_,2*_),i.setRenderTarget(e),i.render(o,Co)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-_a?i-this._lodMax+_a:0),u=4*(this._cubeSize-h);ga(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Co)}};function by(r){let e=[],t=[],n=r,i=r-_a+1+vy;for(let s=0;s<i;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let w=m%3*2/3-1,C=m>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];g.set(y,f*u*m);for(let S=0;S<u;S++){let b=h[S*2]*2-1,E=h[S*2+1]*2-1;m===0?ds.set(1,E,b):m===1?ds.set(-b,1,-E):m===2?ds.set(-b,E,1):m===3?ds.set(-1,E,-b):m===4?ds.set(-b,-1,E):ds.set(b,E,-1),ds.toArray(_,(m*u+S)*f)}}let p=new Ri;p.setAttribute("position",new gi(g,f)),p.setAttribute("outputDirection",new gi(_,f)),t.push(new Yn(p,null)),n>_a&&n--}return{lodMeshes:t,sizeLods:e}}function im(r,e,t){let n=new Xn(r,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function wy(r,e,t){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:sh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Ty(r,e,t){return new ti({name:"SphericalGaussianBlur",defines:{SAMPLES:yy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:sh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

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

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function rm(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function sm(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function sh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ih=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ao(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ur(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:qi});s.uniforms.tEquirect.value=t;let a=new Yn(i,s),o=t.minFilter;return t.minFilter===Gr&&(t.minFilter=en),new hc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};function Ey(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===fc||f===dc)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new ih(g.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===fc||f===dc,_=f===Vr||f===us;if(g||_){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new nh(r)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let w=u.image;return g&&w&&w.height>0||_&&w&&l(w)?(n===null&&(n=new nh(r)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===fc?u.mapping=Vr:f===dc&&(u.mapping=us),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Ay(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ls("WebGLRenderer: "+n+" extension not supported."),i}}}function Cy(r,e,t,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let w=f.array;_=f.version;for(let C=0,y=w.length;C<y;C+=3){let S=w[C+0],b=w[C+1],E=w[C+2];u.push(S,b,b,E,E,S)}}else{let w=g.array;_=g.version;for(let C=0,y=w.length/3-1;C<y;C+=3){let S=C+0,b=C+1,E=C+2;u.push(S,b,b,E,E,S)}}let p=new(g.count>=65535?no:to)(u,1);p.version=_;let m=s.get(d);m&&e.remove(m),s.set(d,p)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Ry(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Py(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Iy(r,e,t){let n=new WeakMap,i=new Nt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let y=o.attributes.position.count*C,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*S*4*d),E=new ja(b,y,S,d);E.type=Li,E.needsUpdate=!0;let x=C*4;for(let A=0;A<d;A++){let L=p[A],D=m[A],O=w[A],I=y*S*4*A;for(let B=0;B<L.count;B++){let q=B*x;f===!0&&(i.fromBufferAttribute(L,B),b[I+q+0]=i.x,b[I+q+1]=i.y,b[I+q+2]=i.z,b[I+q+3]=0),g===!0&&(i.fromBufferAttribute(D,B),b[I+q+4]=i.x,b[I+q+5]=i.y,b[I+q+6]=i.z,b[I+q+7]=0),_===!0&&(i.fromBufferAttribute(O,B),b[I+q+8]=i.x,b[I+q+9]=i.y,b[I+q+10]=i.z,b[I+q+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new et(y,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Ly(r,e,t,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Dy={[Ou]:"LINEAR_TONE_MAPPING",[Bu]:"REINHARD_TONE_MAPPING",[ku]:"CINEON_TONE_MAPPING",[xo]:"ACES_FILMIC_TONE_MAPPING",[Vu]:"AGX_TONE_MAPPING",[Gu]:"NEUTRAL_TONE_MAPPING",[zu]:"CUSTOM_TONE_MAPPING"};function Ny(r,e,t,n,i,s){let a=new Xn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ri;c.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Un([0,2,0,0,2,0],2));let h=new $l({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Yn(c,h),u=new mo(-1,1,1,-1,0,1),f=null,g=null,_=!1,p,m=null,w=[],C=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let b=0;b<w.length;b++){let E=w[b];E.setSize&&E.setSize(y,S)}},this.setEffects=function(y){w=y,C=w.length>0&&w[0].isRenderPass===!0;let S=a.width,b=a.height;w.length>0&&o===null&&(o=new Xn(S,b,{type:Di,depthBuffer:!1,stencilBuffer:!1}),l=new Xn(S,b,{type:Di,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<w.length;E++){let x=w[E];x.setSize&&x.setSize(S,b)}},this.begin=function(y,S){if(_||y.toneMapping===Pi&&w.length===0)return!1;if(m=S,S!==null){let b=S.width,E=S.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return C===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Pi,!0},this.hasRenderPass=function(){return C},this.end=function(y,S){y.toneMapping=p,_=!0;let b=a,E=o;for(let x=0;x<w.length;x++){let T=w[x];T.enabled!==!1&&(T.render(y,E,b,S),T.needsSwap!==!1&&(b=E,E=E===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},lt.getTransfer(f)===mt&&(h.defines.SRGB_TRANSFER="");let x=Dy[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(m),y.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Tm=new Mn,uf=new Nr(1,1),Em=new ja,Am=new Yl,Cm=new ao,am=[],om=[],lm=new Float32Array(16),cm=new Float32Array(9),hm=new Float32Array(4);function va(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=am[i];if(s===void 0&&(s=new Float32Array(i),am[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ah(r,e){let t=om[e];t===void 0&&(t=new Int32Array(e),om[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Uy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Fy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function Oy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function By(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function ky(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;hm.set(n),r.uniformMatrix2fv(this.addr,!1,hm),nn(t,n)}}function zy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;cm.set(n),r.uniformMatrix3fv(this.addr,!1,cm),nn(t,n)}}function Vy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;lm.set(n),r.uniformMatrix4fv(this.addr,!1,lm),nn(t,n)}}function Gy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Hy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function Wy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function Xy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function qy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Yy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function Zy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function Jy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function $y(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(uf.compareFunction=t.isReversedDepthBuffer()?Qc:jc,s=uf):s=Tm,t.setTexture2D(e||s,i)}function Ky(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Am,i)}function jy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cm,i)}function Qy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Em,i)}function eS(r){switch(r){case 5126:return Uy;case 35664:return Fy;case 35665:return Oy;case 35666:return By;case 35674:return ky;case 35675:return zy;case 35676:return Vy;case 5124:case 35670:return Gy;case 35667:case 35671:return Hy;case 35668:case 35672:return Wy;case 35669:case 35673:return Xy;case 5125:return qy;case 36294:return Yy;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return jy;case 36289:case 36303:case 36311:case 36292:return Qy}}function tS(r,e){r.uniform1fv(this.addr,e)}function nS(r,e){let t=va(e,this.size,2);r.uniform2fv(this.addr,t)}function iS(r,e){let t=va(e,this.size,3);r.uniform3fv(this.addr,t)}function rS(r,e){let t=va(e,this.size,4);r.uniform4fv(this.addr,t)}function sS(r,e){let t=va(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function aS(r,e){let t=va(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function oS(r,e){let t=va(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function lS(r,e){r.uniform1iv(this.addr,e)}function cS(r,e){r.uniform2iv(this.addr,e)}function hS(r,e){r.uniform3iv(this.addr,e)}function uS(r,e){r.uniform4iv(this.addr,e)}function fS(r,e){r.uniform1uiv(this.addr,e)}function dS(r,e){r.uniform2uiv(this.addr,e)}function pS(r,e){r.uniform3uiv(this.addr,e)}function mS(r,e){r.uniform4uiv(this.addr,e)}function gS(r,e,t){let n=this.cache,i=e.length,s=ah(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=uf:a=Tm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function _S(r,e,t){let n=this.cache,i=e.length,s=ah(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Am,s[a])}function xS(r,e,t){let n=this.cache,i=e.length,s=ah(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Cm,s[a])}function vS(r,e,t){let n=this.cache,i=e.length,s=ah(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Em,s[a])}function yS(r){switch(r){case 5126:return tS;case 35664:return nS;case 35665:return iS;case 35666:return rS;case 35674:return sS;case 35675:return aS;case 35676:return oS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return hS;case 35669:case 35673:return uS;case 5125:return fS;case 36294:return dS;case 36295:return pS;case 36296:return mS;case 35678:case 36198:case 36298:case 36306:case 35682:return gS;case 35679:case 36299:case 36307:return _S;case 35680:case 36300:case 36308:case 36293:return xS;case 36289:case 36303:case 36311:case 36292:return vS}}var ff=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eS(t.type)}},df=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=yS(t.type)}},pf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},cf=/(\w+)(\])?(\[|\.)?/g;function um(r,e){r.seq.push(e),r.map[e.id]=e}function SS(r,e,t){let n=r.name,i=n.length;for(cf.lastIndex=0;;){let s=cf.exec(n),a=cf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){um(t,c===void 0?new ff(o,r,e):new df(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new pf(o),um(t,d)),t=d}}}var xa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);SS(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function fm(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var MS=37297,bS=0;function wS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dm=new Ze;function TS(r){lt._getMatrix(dm,lt.workingColorSpace,r);let e=`mat3( ${dm.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(r)){case $a:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function pm(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wS(r.getShaderSource(e),o)}else return s}function ES(r,e){let t=TS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var AS={[Ou]:"Linear",[Bu]:"Reinhard",[ku]:"Cineon",[xo]:"ACESFilmic",[Vu]:"AgX",[Gu]:"Neutral",[zu]:"Custom"};function CS(r,e){let t=AS[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var th=new Z;function RS(){lt.getLuminanceCoefficients(th);let r=th.x.toFixed(4),e=th.y.toFixed(4),t=th.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function IS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Po(r){return r!==""}function mm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var DS=/^[ \t]*#include +<([\w\d./]+)>/gm;function mf(r){return r.replace(DS,US)}var NS=new Map;function US(r,e){let t=Je[e];if(t===void 0){let n=NS.get(e);if(n!==void 0)t=Je[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return mf(t)}var FS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(r){return r.replace(FS,OS)}function OS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function xm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var BS={[_o]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function kS(r){return BS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var zS={[Vr]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[vo]:"ENVMAP_TYPE_CUBE_UV"};function VS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":zS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var GS={[us]:"ENVMAP_MODE_REFRACTION"};function HS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":GS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var WS={[Fu]:"ENVMAP_BLENDING_MULTIPLY",[Up]:"ENVMAP_BLENDING_MIX",[Fp]:"ENVMAP_BLENDING_ADD"};function XS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":WS[r.combine]||"ENVMAP_BLENDING_NONE"}function qS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YS(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=kS(t),c=VS(t),h=HS(t),d=XS(t),u=qS(t),f=PS(t),g=IS(s),_=i.createProgram(),p,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Po).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Po).join(`
`),m.length>0&&(m+=`
`)):(p=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),m=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Je.tonemapping_pars_fragment:"",t.toneMapping!==Pi?CS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,ES("linearToOutputTexel",t.outputColorSpace),RS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),a=mf(a),a=mm(a,t),a=gm(a,t),o=mf(o),o=mm(o,t),o=gm(o,t),a=_m(a),o=_m(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Ku?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ku?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=w+p+a,y=w+m+o,S=fm(i,i.VERTEX_SHADER,C),b=fm(i,i.FRAGMENT_SHADER,y);i.attachShader(_,S),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(L){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(S)||"",I=i.getShaderInfoLog(b)||"",B=D.trim(),q=O.trim(),z=I.trim(),j=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,b);else{let R=pm(i,S,"vertex"),K=pm(i,b,"fragment");Ge("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+R+`
`+K)}else B!==""?ze("WebGLProgram: Program Info Log:",B):(q===""||z==="")&&(H=!1);H&&(L.diagnostics={runnable:j,programLog:B,vertexShader:{log:q,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(S),i.deleteShader(b),x=new xa(i,_),T=LS(i,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,MS)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}var ZS=0,gf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _f(e),t.set(e,n)),n}},_f=class{constructor(e){this.id=ZS++,this.code=e,this.usedTimes=0}};function JS(r){return r===Wr||r===To||r===Eo}function $S(r,e,t,n,i,s){let a=new oa,o=new gf,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,T,A,L,D,O){let I=L.fog,B=D.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||q,z),H=j&&j.mapping===vo?j.image.height:null,R=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&ze("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=K!==void 0?K.length:0,Me=0;B.morphAttributes.position!==void 0&&(Me=1),B.morphAttributes.normal!==void 0&&(Me=2),B.morphAttributes.color!==void 0&&(Me=3);let Ve,ke,He,J;if(R){let De=Zi[R];Ve=De.vertexShader,ke=De.fragmentShader}else{Ve=x.vertexShader,ke=x.fragmentShader;let De=o.getVertexShaderStage(x),se=o.getFragmentShaderStage(x);o.update(x,De,se),He=De.id,J=se.id}let ee=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,me=D.isBatchedMesh===!0,Ue=!!x.map,Be=!!x.matcap,Pe=!!j,Xe=!!x.aoMap,Ke=!!x.lightMap,V=!!x.bumpMap&&x.wireframe===!1,it=!!x.normalMap,xt=!!x.displacementMap,Dt=!!x.emissiveMap,qe=!!x.metalnessMap,dt=!!x.roughnessMap,F=x.anisotropy>0,It=x.clearcoat>0,We=x.dispersion>0,P=x.retroreflectivity>0,v=x.iridescence>0,k=x.sheen>0,W=x.transmission>0,$=F&&!!x.anisotropyMap,ce=It&&!!x.clearcoatMap,ae=It&&!!x.clearcoatNormalMap,Q=It&&!!x.clearcoatRoughnessMap,ne=v&&!!x.iridescenceMap,fe=v&&!!x.iridescenceThicknessMap,Ee=k&&!!x.sheenColorMap,de=k&&!!x.sheenRoughnessMap,ue=!!x.specularMap,le=!!x.specularColorMap,Ie=!!x.specularIntensityMap,Fe=W&&!!x.transmissionMap,N=W&&!!x.thicknessMap,he=!!x.gradientMap,te=!!x.alphaMap,pe=x.alphaTest>0,xe=!!x.alphaHash,ie=!!x.extensions,oe=Pi;x.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(oe=r.toneMapping);let re={shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:Ve,fragmentShader:ke,defines:x.defines,customVertexShaderID:He,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:me,batchingColor:me&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ue,matcap:Be,envMap:Pe,envMapMode:Pe&&j.mapping,envMapCubeUVHeight:H,aoMap:Xe,lightMap:Ke,bumpMap:V,normalMap:it,displacementMap:xt,emissiveMap:Dt,normalMapObjectSpace:it&&x.normalMapType===kp,normalMapTangentSpace:it&&x.normalMapType===Kc,packedNormalMap:it&&x.normalMapType===Kc&&JS(x.normalMap.format),metalnessMap:qe,roughnessMap:dt,anisotropy:F,anisotropyMap:$,clearcoat:It,clearcoatMap:ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:Q,dispersion:We,retroreflection:P,iridescence:v,iridescenceMap:ne,iridescenceThicknessMap:fe,sheen:k,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:ue,specularColorMap:le,specularIntensityMap:Ie,transmission:W,transmissionMap:Fe,thicknessMap:N,gradientMap:he,opaque:x.transparent===!1&&x.blending===fa&&x.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:xe,combine:x.combine,mapUv:Ue&&g(x.map.channel),aoMapUv:Xe&&g(x.aoMap.channel),lightMapUv:Ke&&g(x.lightMap.channel),bumpMapUv:V&&g(x.bumpMap.channel),normalMapUv:it&&g(x.normalMap.channel),displacementMapUv:xt&&g(x.displacementMap.channel),emissiveMapUv:Dt&&g(x.emissiveMap.channel),metalnessMapUv:qe&&g(x.metalnessMap.channel),roughnessMapUv:dt&&g(x.roughnessMap.channel),anisotropyMapUv:$&&g(x.anisotropyMap.channel),clearcoatMapUv:ce&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(x.sheenRoughnessMap.channel),specularMapUv:ue&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:Ie&&g(x.specularIntensityMap.channel),transmissionMapUv:Fe&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:te&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(it||F),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Ue||te),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&it===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ue&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===mt,decodeVideoTextureEmissive:Dt&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xi,flipSided:x.side===Fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ie&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&x.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function p(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)T.push(A),T.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(m(T,x),w(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function w(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let T=f[x.type],A;if(T){let L=Zi[T];A=Qp.clone(L.uniforms)}else A=x.uniforms;return A}function y(x,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new YS(r,T,x,i),c.push(A),h.set(T,A)),A}function S(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:C,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:E}}function KS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function jS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function vm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ym(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let w=r[e];return w===void 0?(w={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},r[e]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=g,w.materialVariant=a(u),w.groupOrder=_,w.renderOrder=u.renderOrder,w.z=p,w.group=m),e++,w}function l(u,f,g,_,p,m,w){w.reversedDepth===!0&&(p=-p);let C=o(u,f,g,_,p,m);g.transmission>0?n.push(C):g.transparent===!0?i.push(C):t.push(C)}function c(u,f,g,_,p,m){let w=o(u,f,g,_,p,m);g.transmission>0?n.unshift(w):g.transparent===!0?i.unshift(w):t.unshift(w)}function h(u,f){t.length>1&&t.sort(u||jS),n.length>1&&n.sort(f||vm),i.length>1&&i.sort(f||vm)}function d(){for(let u=e,f=r.length;u<f;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function QS(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new ym,r.set(n,[a])):i>=s.length?(a=new ym,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function eM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new Qe};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=t,t}}}function tM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var nM=0;function iM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function rM(r){let e=new eM,t=tM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let i=new Z,s=new kt,a=new kt;function o(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,w=0,C=0,y=0,S=0,b=0,E=0,x=0,T=0,A=0;c.sort(iM);for(let D=0,O=c.length;D<O;D++){let I=c[D],B=I.color,q=I.intensity,z=I.distance,j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Wr?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=B.r*q,d+=B.g*q,u+=B.b*q;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],q);A++}else if(I.isSunLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,K=t.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=K,n.sunShadowMap[g]=j;let Se=R.getViewportCount();for(let Me=0;Me<Se;Me++)n.sunShadowMatrix[_+Me]=R.getMatrix(Me),n.sunShadowCascade[_+Me]=R._cascadeData[Me];_+=Se,g++}n.sun[f]=H,f++}else if(I.isDirectionalLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let R=I.shadow,K=t.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=I.shadow.matrix,S++}n.directional[p]=H,p++}else if(I.isSpotLight){let H=e.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(B).multiplyScalar(q),H.distance=z,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[w]=H;let R=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,R.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[w]=R.matrix,I.castShadow){let K=t.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,n.spotShadow[w]=K,n.spotShadowMap[w]=j,E++}w++}else if(I.isRectAreaLight){let H=e.get(I);H.color.copy(B).multiplyScalar(q),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[C]=H,C++}else if(I.isPointLight){let H=e.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let R=I.shadow,K=t.get(I);K.shadowIntensity=R.intensity,K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=I.shadow.matrix,b++}n.point[m]=H,m++}else if(I.isHemisphereLight){let H=e.get(I);H.skyColor.copy(I.color).multiplyScalar(q),H.groundColor.copy(I.groundColor).multiplyScalar(q),n.hemi[y]=H,y++}}C>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==w||L.rectAreaLength!==C||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==E||L.numSpotMaps!==x||L.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=w,n.rectArea.length=C,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=w,L.rectAreaLength=C,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=E,L.numSpotMaps=x,L.numLightProbes=A,n.version=nM++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let w=0,C=c.length;w<C;w++){let y=c[w];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),u++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let S=n.hemi[p];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Sm(r){let e=new rM(r),t=[],n=[],i=[];function s(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function sM(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new Sm(r),e.set(i,[o])):s>=a.length?(o=new Sm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var aM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oM=`uniform sampler2D shadow_pass;
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
}`,lM=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],cM=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Mm=new kt,Ro=new Z,hf=new Z;function hM(r,e,t){let n=new ro,i=new et,s=new et,a=new Nt,o=new Kl,l=new jl,c={},h=t.maxTextureSize,d={[zr]:Fn,[Fn]:zr,[Xi]:Xi},u=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:aM,fragmentShader:oM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ri;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Yn(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_o;let m=this.type;this.render=function(b,E,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;this.type===gp&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=_o);let T=r.getRenderTarget(),A=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(qi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=m!==this.type;O&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=b.length;I<B;I++){let q=b[I],z=q.shadow;if(z===void 0){ze("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let j=z.getFrameExtents();i.multiply(j),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,z.mapSize.y=s.y));let H=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=H,z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ua){if(q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Xn(i.x,i.y,{format:Wr,type:Di,minFilter:en,magFilter:en,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new Nr(i.x,i.y,Li),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=Gi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn}else q.isPointLight?(z.map=new ih(i.x),z.map.depthTexture=new Jl(i.x,Ii)):(z.map=new Xn(i.x,i.y),z.map.depthTexture=new Nr(i.x,i.y,Ii)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=Gi,this.type===_o?(z.map.depthTexture.compareFunction=H?Qc:jc,z.map.depthTexture.minFilter=en,z.map.depthTexture.magFilter=en):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=cn,z.map.depthTexture.magFilter=cn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let R=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,x);for(let K=0;K<R;K++){let Se=z.getCamera(K);if(q.isPointLight){let Me=z.camera,Ve=z.matrix,ke=q.distance||Me.far;ke!==Me.far&&(Me.far=ke,Me.updateProjectionMatrix()),Ro.setFromMatrixPosition(q.matrixWorld),Me.position.copy(Ro),hf.copy(Me.position),hf.add(lM[K]),Me.up.copy(cM[K]),Me.lookAt(hf),Me.updateMatrixWorld(),Ve.makeTranslation(-Ro.x,-Ro.y,-Ro.z),Mm.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Mm,Me.coordinateSystem,Me.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,K),r.clear();else{K===0&&(r.setRenderTarget(z.map),r.clear());let Me=z.getViewport(K);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),D.viewport(a)}n=z.getFrustum(K),y(E,x,Se,q,this.type)}z.isPointLightShadow!==!0&&this.type===ua&&w(z,x),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(T,A,L)};function w(b,E){let x=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Xn(i.x,i.y,{format:Wr,type:Di}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,x,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,x,f,_,null)}function C(b,E,x,T){let A=null,L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)A=L;else if(A=x.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=A.uuid,O=E.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let B=I[O];B===void 0&&(B=A.clone(),I[O]=B,E.addEventListener("dispose",S)),A=B}if(A.visible=E.visible,A.wireframe=E.wireframe,T===ua?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:d[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=r.properties.get(A);D.light=x}return A}function y(b,E,x,T,A){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===ua)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let O=e.update(b),I=b.material;if(Array.isArray(I)){let B=O.groups;for(let q=0,z=B.length;q<z;q++){let j=B[q],H=I[j.materialIndex];if(H&&H.visible){let R=C(b,H,T,A);b.onBeforeShadow(r,b,E,x,O,R,j),r.renderBufferDirect(x,null,O,R,b,j),b.onAfterShadow(r,b,E,x,O,R,j)}}}else if(I.visible){let B=C(b,I,T,A);b.onBeforeShadow(r,b,E,x,O,B,null),r.renderBufferDirect(x,null,O,B,b,null),b.onAfterShadow(r,b,E,x,O,B,null)}}let D=b.children;for(let O=0,I=D.length;O<I;O++)y(D[O],E,x,T,A)}function S(b){b.target.removeEventListener("dispose",S);for(let x in c){let T=c[x],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function uM(r,e){function t(){let N=!1,he=new Nt,te=null,pe=new Nt(0,0,0,0);return{setMask:function(xe){te!==xe&&!N&&(r.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){N=xe},setClear:function(xe,ie,oe,re,De){De===!0&&(xe*=re,ie*=re,oe*=re),he.set(xe,ie,oe,re),pe.equals(he)===!1&&(r.clearColor(xe,ie,oe,re),pe.copy(he))},reset:function(){N=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let N=!1,he=!1,te=null,pe=null,xe=null;return{setReversed:function(ie){if(he!==ie){let oe=e.get("EXT_clip_control");ie?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),he=ie;let re=xe;xe=null,this.setClear(re)}},getReversed:function(){return he},setTest:function(ie){ie?ee(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(ie){te!==ie&&!N&&(r.depthMask(ie),te=ie)},setFunc:function(ie){if(he&&(ie=Kp[ie]),pe!==ie){switch(ie){case Ul:r.depthFunc(r.NEVER);break;case Fl:r.depthFunc(r.ALWAYS);break;case Ol:r.depthFunc(r.LESS);break;case na:r.depthFunc(r.LEQUAL);break;case Bl:r.depthFunc(r.EQUAL);break;case kl:r.depthFunc(r.GEQUAL);break;case zl:r.depthFunc(r.GREATER);break;case Vl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){xe!==ie&&(xe=ie,he&&(ie=1-ie),r.clearDepth(ie))},reset:function(){N=!1,te=null,pe=null,xe=null,he=!1}}}function i(){let N=!1,he=null,te=null,pe=null,xe=null,ie=null,oe=null,re=null,De=null;return{setTest:function(se){N||(se?ee(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(se){he!==se&&!N&&(r.stencilMask(se),he=se)},setFunc:function(se,Ne,Ae){(te!==se||pe!==Ne||xe!==Ae)&&(r.stencilFunc(se,Ne,Ae),te=se,pe=Ne,xe=Ae)},setOp:function(se,Ne,Ae){(ie!==se||oe!==Ne||re!==Ae)&&(r.stencilOp(se,Ne,Ae),ie=se,oe=Ne,re=Ae)},setLocked:function(se){N=se},setClear:function(se){De!==se&&(r.clearStencil(se),De=se)},reset:function(){N=!1,he=null,te=null,pe=null,xe=null,ie=null,oe=null,re=null,De=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,w=null,C=null,y=null,S=null,b=null,E=null,x=new Qe(0,0,0),T=0,A=!1,L=null,D=null,O=null,I=null,B=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,j=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=j>=2);let R=null,K={},Se=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Ve=new Nt().fromArray(Se),ke=new Nt().fromArray(Me);function He(N,he,te,pe){let xe=new Uint8Array(4),ie=r.createTexture();r.bindTexture(N,ie),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<te;oe++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(he+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return ie}let J={};J[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(na),V(!1),it(Pu),ee(r.CULL_FACE),Xe(qi);function ee(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function _e(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Oe(N,he){return u[N]!==he?(r.bindFramebuffer(N,he),u[N]=he,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=he),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=he),!0):!1}function me(N,he){let te=g,pe=!1;if(N){te=f.get(he),te===void 0&&(te=[],f.set(he,te));let xe=N.textures;if(te.length!==xe.length||te[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,oe=xe.length;ie<oe;ie++)te[ie]=r.COLOR_ATTACHMENT0+ie;te.length=xe.length,pe=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,pe=!0);pe&&r.drawBuffers(te)}function Ue(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Be={[hs]:r.FUNC_ADD,[xp]:r.FUNC_SUBTRACT,[vp]:r.FUNC_REVERSE_SUBTRACT};Be[yp]=r.MIN,Be[Sp]=r.MAX;let Pe={[Mp]:r.ZERO,[bp]:r.ONE,[wp]:r.SRC_COLOR,[Nu]:r.SRC_ALPHA,[Pp]:r.SRC_ALPHA_SATURATE,[Cp]:r.DST_COLOR,[Ep]:r.DST_ALPHA,[Tp]:r.ONE_MINUS_SRC_COLOR,[Uu]:r.ONE_MINUS_SRC_ALPHA,[Rp]:r.ONE_MINUS_DST_COLOR,[Ap]:r.ONE_MINUS_DST_ALPHA,[Ip]:r.CONSTANT_COLOR,[Lp]:r.ONE_MINUS_CONSTANT_COLOR,[Dp]:r.CONSTANT_ALPHA,[Np]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(N,he,te,pe,xe,ie,oe,re,De,se){if(N===qi){p===!0&&(_e(r.BLEND),p=!1);return}if(p===!1&&(ee(r.BLEND),p=!0),N!==_p){if(N!==m||se!==A){if((w!==hs||S!==hs)&&(r.blendEquation(r.FUNC_ADD),w=hs,S=hs),se)switch(N){case fa:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Iu:r.blendFunc(r.ONE,r.ONE);break;case Lu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Du:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",N);break}else switch(N){case fa:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Iu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lu:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",N);break}C=null,y=null,b=null,E=null,x.set(0,0,0),T=0,m=N,A=se}return}xe=xe||he,ie=ie||te,oe=oe||pe,(he!==w||xe!==S)&&(r.blendEquationSeparate(Be[he],Be[xe]),w=he,S=xe),(te!==C||pe!==y||ie!==b||oe!==E)&&(r.blendFuncSeparate(Pe[te],Pe[pe],Pe[ie],Pe[oe]),C=te,y=pe,b=ie,E=oe),(re.equals(x)===!1||De!==T)&&(r.blendColor(re.r,re.g,re.b,De),x.copy(re),T=De),m=N,A=!1}function Ke(N,he){N.side===Xi?_e(r.CULL_FACE):ee(r.CULL_FACE);let te=N.side===Fn;he&&(te=!te),V(te),N.blending===fa&&N.transparent===!1?Xe(qi):Xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let pe=N.stencilWrite;o.setTest(pe),pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function it(N){N!==pp?(ee(r.CULL_FACE),N!==D&&(N===Pu?r.cullFace(r.BACK):N===mp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),D=N}function xt(N){N!==O&&(z&&r.lineWidth(N),O=N)}function Dt(N,he,te){N?(ee(r.POLYGON_OFFSET_FILL),(I!==he||B!==te)&&(I=he,B=te,a.getReversed()&&(he=-he),r.polygonOffset(he,te))):_e(r.POLYGON_OFFSET_FILL)}function qe(N){N?ee(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function dt(N){N===void 0&&(N=r.TEXTURE0+q-1),R!==N&&(r.activeTexture(N),R=N)}function F(N,he,te){te===void 0&&(R===null?te=r.TEXTURE0+q-1:te=R);let pe=K[te];pe===void 0&&(pe={type:void 0,texture:void 0},K[te]=pe),(pe.type!==N||pe.texture!==he)&&(R!==te&&(r.activeTexture(te),R=te),r.bindTexture(N,he||J[N]),pe.type=N,pe.texture=he)}function It(){let N=K[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function We(){try{r.compressedTexImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function v(){try{r.texSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function k(){try{r.texSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ce(){try{r.texStorage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ae(){try{r.texStorage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function Q(){try{r.texImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ne(){try{r.texImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function fe(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function Ee(N,he){d[N]!==he&&(r.pixelStorei(N,he),d[N]=he)}function de(N){Ve.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Ve.copy(N))}function ue(N){ke.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ke.copy(N))}function le(N,he){let te=c.get(he);te===void 0&&(te=new WeakMap,c.set(he,te));let pe=te.get(N);pe===void 0&&(pe=r.getUniformBlockIndex(he,N.name),te.set(N,pe))}function Ie(N,he){let pe=c.get(he).get(N);l.get(he)!==pe&&(r.uniformBlockBinding(he,pe,N.__bindingPointIndex),l.set(he,pe))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,K={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,w=null,C=null,y=null,S=null,b=null,E=null,x=new Qe(0,0,0),T=0,A=!1,L=null,D=null,O=null,I=null,B=null,Ve.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:Oe,drawBuffers:me,useProgram:Ue,setBlending:Xe,setMaterial:Ke,setFlipSided:V,setCullFace:it,setLineWidth:xt,setPolygonOffset:Dt,setScissorTest:qe,activeTexture:dt,bindTexture:F,unbindTexture:It,compressedTexImage2D:We,compressedTexImage3D:P,texImage2D:Q,texImage3D:ne,pixelStorei:Ee,getParameter:fe,updateUBOMapping:le,uniformBlockBinding:Ie,texStorage2D:ce,texStorage3D:ae,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:de,viewport:ue,reset:Fe}}function fM(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,v){return g?new OffscreenCanvas(P,v):ia("canvas")}function p(P,v,k){let W=1,$=We(P);if(($.width>k||$.height>k)&&(W=k/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ce=Math.floor(W*$.width),ae=Math.floor(W*$.height);u===void 0&&(u=_(ce,ae));let Q=v?_(ce,ae):u;return Q.width=ce,Q.height=ae,Q.getContext("2d").drawImage(P,0,0,ce,ae),ze("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ce+"x"+ae+")."),Q}else return"data"in P&&ze("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function m(P){return P.generateMipmaps}function w(P){r.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,v,k,W,$,ce=!1){if(P!==null){if(r[P]!==void 0)return r[P];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===r.RED&&(k===r.FLOAT&&(Q=r.R32F),k===r.HALF_FLOAT&&(Q=r.R16F),k===r.UNSIGNED_BYTE&&(Q=r.R8),k===r.UNSIGNED_SHORT&&ae&&(Q=ae.R16_EXT),k===r.SHORT&&ae&&(Q=ae.R16_SNORM_EXT)),v===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.R8UI),k===r.UNSIGNED_SHORT&&(Q=r.R16UI),k===r.UNSIGNED_INT&&(Q=r.R32UI),k===r.BYTE&&(Q=r.R8I),k===r.SHORT&&(Q=r.R16I),k===r.INT&&(Q=r.R32I)),v===r.RG&&(k===r.FLOAT&&(Q=r.RG32F),k===r.HALF_FLOAT&&(Q=r.RG16F),k===r.UNSIGNED_BYTE&&(Q=r.RG8),k===r.UNSIGNED_SHORT&&ae&&(Q=ae.RG16_EXT),k===r.SHORT&&ae&&(Q=ae.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RG8UI),k===r.UNSIGNED_SHORT&&(Q=r.RG16UI),k===r.UNSIGNED_INT&&(Q=r.RG32UI),k===r.BYTE&&(Q=r.RG8I),k===r.SHORT&&(Q=r.RG16I),k===r.INT&&(Q=r.RG32I)),v===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),k===r.UNSIGNED_INT&&(Q=r.RGB32UI),k===r.BYTE&&(Q=r.RGB8I),k===r.SHORT&&(Q=r.RGB16I),k===r.INT&&(Q=r.RGB32I)),v===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),k===r.UNSIGNED_INT&&(Q=r.RGBA32UI),k===r.BYTE&&(Q=r.RGBA8I),k===r.SHORT&&(Q=r.RGBA16I),k===r.INT&&(Q=r.RGBA32I)),v===r.RGB&&(k===r.UNSIGNED_SHORT&&ae&&(Q=ae.RGB16_EXT),k===r.SHORT&&ae&&(Q=ae.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),v===r.RGBA){let ne=ce?$a:lt.getTransfer($);k===r.FLOAT&&(Q=r.RGBA32F),k===r.HALF_FLOAT&&(Q=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Q=ne===mt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&ae&&(Q=ae.RGBA16_EXT),k===r.SHORT&&ae&&(Q=ae.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(P,v){let k;return P?v===null||v===Ii||v===pa?k=r.DEPTH24_STENCIL8:v===Li?k=r.DEPTH32F_STENCIL8:v===da&&(k=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===pa?k=r.DEPTH_COMPONENT24:v===Li?k=r.DEPTH_COMPONENT32F:v===da&&(k=r.DEPTH_COMPONENT16),k}function b(P,v){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==cn&&P.minFilter!==en?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function E(P){let v=P.target;v.removeEventListener("dispose",E),T(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function x(P){let v=P.target;v.removeEventListener("dispose",x),L(v)}function T(P){let v=n.get(P);if(v.__webglInit===void 0)return;let k=P.source,W=f.get(k);if(W){let $=W[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(P),Object.keys(W).length===0&&f.delete(k)}n.remove(P)}function A(P){let v=n.get(P);r.deleteTexture(v.__webglTexture);let k=P.source,W=f.get(k);delete W[v.__cacheKey],a.memory.textures--}function L(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let $=0;$<v.__webglFramebuffer[W].length;$++)r.deleteFramebuffer(v.__webglFramebuffer[W][$]);else r.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)r.deleteFramebuffer(v.__webglFramebuffer[W]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=P.textures;for(let W=0,$=k.length;W<$;W++){let ce=n.get(k[W]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(P)}let D=0;function O(){D=0}function I(){return D}function B(P){D=P}function q(){let P=D;return P>=i.maxTextures&&ze("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,P}function z(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function j(P,v){let k=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let W=P.image;if(W===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(k,P,v);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+v)}function H(P,v){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){_e(k,P,v);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+v)}function R(P,v){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){_e(k,P,v);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+v)}function K(P,v){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Oe(k,P,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+v)}let Se={[Gl]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[Hl]:r.MIRRORED_REPEAT},Me={[cn]:r.NEAREST,[Op]:r.NEAREST_MIPMAP_NEAREST,[yo]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[pc]:r.LINEAR_MIPMAP_NEAREST,[Gr]:r.LINEAR_MIPMAP_LINEAR},Ve={[Vp]:r.NEVER,[qp]:r.ALWAYS,[Gp]:r.LESS,[jc]:r.LEQUAL,[Hp]:r.EQUAL,[Qc]:r.GEQUAL,[Wp]:r.GREATER,[Xp]:r.NOTEQUAL};function ke(P,v){if(v.type===Li&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===en||v.magFilter===pc||v.magFilter===yo||v.magFilter===Gr||v.minFilter===en||v.minFilter===pc||v.minFilter===yo||v.minFilter===Gr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Se[v.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Se[v.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Se[v.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Me[v.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Me[v.minFilter]),v.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===cn||v.minFilter!==yo&&v.minFilter!==Gr||v.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function He(P,v){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",E));let W=v.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let ce=z(v);if(ce!==P.__cacheKey){$[ce]===void 0&&($[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[ce].usedTimes++;let ae=$[P.__cacheKey];ae!==void 0&&($[P.__cacheKey].usedTimes--,ae.usedTimes===0&&A(v)),P.__cacheKey=ce,P.__webglTexture=$[ce].texture}return k}function J(P,v,k){return Math.floor(Math.floor(P/k)/v)}function ee(P,v,k,W){let ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,k,W,v.data);else{ce.sort((Ee,de)=>Ee.start-de.start);let ae=0;for(let Ee=1;Ee<ce.length;Ee++){let de=ce[ae],ue=ce[Ee],le=de.start+de.count,Ie=J(ue.start,v.width,4),Fe=J(de.start,v.width,4);ue.start<=le+1&&Ie===Fe&&J(ue.start+ue.count-1,v.width,4)===Ie?de.count=Math.max(de.count,ue.start+ue.count-de.start):(++ae,ce[ae]=ue)}ce.length=ae+1;let Q=t.getParameter(r.UNPACK_ROW_LENGTH),ne=t.getParameter(r.UNPACK_SKIP_PIXELS),fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ee=0,de=ce.length;Ee<de;Ee++){let ue=ce[Ee],le=Math.floor(ue.start/4),Ie=Math.ceil(ue.count/4),Fe=le%v.width,N=Math.floor(le/v.width),he=Ie,te=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(r.UNPACK_SKIP_ROWS,N),t.texSubImage2D(r.TEXTURE_2D,0,Fe,N,he,te,k,W,v.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,Q),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(r.UNPACK_SKIP_ROWS,fe)}}function _e(P,v,k){let W=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=r.TEXTURE_3D);let $=He(P,v),ce=v.source;t.bindTexture(W,P.__webglTexture,r.TEXTURE0+k);let ae=n.get(ce);if(ce.version!==ae.__version||$===!0){if(t.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let te=lt.getPrimaries(lt.workingColorSpace),pe=v.colorSpace===ur?null:lt.getPrimaries(v.colorSpace),xe=v.colorSpace===ur||te===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let ne=p(v.image,!1,i.maxTextureSize);ne=It(v,ne);let fe=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type),de=y(v.internalFormat,fe,Ee,v.normalized,v.colorSpace,v.isVideoTexture);ke(W,v);let ue,le=v.mipmaps,Ie=v.isVideoTexture!==!0,Fe=ae.__version===void 0||$===!0,N=ce.dataReady,he=b(v,ne);if(v.isDepthTexture)de=S(v.format===Hr,v.type),Fe&&(Ie?t.texStorage2D(r.TEXTURE_2D,1,de,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,Ee,null));else if(v.isDataTexture)if(le.length>0){Ie&&Fe&&t.texStorage2D(r.TEXTURE_2D,he,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)ue=le[te],Ie?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ee,ue.data):t.texImage2D(r.TEXTURE_2D,te,de,ue.width,ue.height,0,fe,Ee,ue.data);v.generateMipmaps=!1}else Ie?(Fe&&t.texStorage2D(r.TEXTURE_2D,he,de,ne.width,ne.height),N&&ee(v,ne,fe,Ee)):t.texImage2D(r.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,Ee,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,de,le[0].width,le[0].height,ne.depth);for(let te=0,pe=le.length;te<pe;te++)if(ue=le[te],v.format!==_i)if(fe!==null)if(Ie){if(N)if(v.layerUpdates.size>0){let xe=rf(ue.width,ue.height,v.format,v.type);for(let ie of v.layerUpdates){let oe=ue.data.subarray(ie*xe/ue.data.BYTES_PER_ELEMENT,(ie+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,ie,ue.width,ue.height,1,fe,oe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,fe,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ne.depth,0,ue.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,fe,Ee,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ne.depth,0,fe,Ee,ue.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ie&&Fe&&t.texStorage2D(r.TEXTURE_2D,he,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)ue=le[te],v.format!==_i?fe!==null?Ie?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,te,de,ue.width,ue.height,0,ue.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ee,ue.data):t.texImage2D(r.TEXTURE_2D,te,de,ue.width,ue.height,0,fe,Ee,ue.data)}else if(v.isDataArrayTexture)if(Ie){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,de,ne.width,ne.height,ne.depth),N)if(v.layerUpdates.size>0){let te=rf(ne.width,ne.height,v.format,v.type);for(let pe of v.layerUpdates){let xe=ne.data.subarray(pe*te/ne.data.BYTES_PER_ELEMENT,(pe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,ne.width,ne.height,1,fe,Ee,xe)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ee,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,fe,Ee,ne.data);else if(v.isData3DTexture)Ie?(Fe&&t.texStorage3D(r.TEXTURE_3D,he,de,ne.width,ne.height,ne.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ee,ne.data)):t.texImage3D(r.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,fe,Ee,ne.data);else if(v.isFramebufferTexture){if(Fe)if(Ie)t.texStorage2D(r.TEXTURE_2D,he,de,ne.width,ne.height);else{let te=ne.width,pe=ne.height;for(let xe=0;xe<he;xe++)t.texImage2D(r.TEXTURE_2D,xe,de,te,pe,0,fe,Ee,null),te>>=1,pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){let te=r.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(v),te.onpaint=pe=>{let xe=pe.changedElements;for(let ie of d)xe.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ne);else{let xe=r.RGBA,ie=r.RGBA,oe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xe,ie,oe,ne)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(le.length>0){if(Ie&&Fe){let te=We(le[0]);t.texStorage2D(r.TEXTURE_2D,he,de,te.width,te.height)}for(let te=0,pe=le.length;te<pe;te++)ue=le[te],Ie?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe,Ee,ue):t.texImage2D(r.TEXTURE_2D,te,de,fe,Ee,ue);v.generateMipmaps=!1}else if(Ie){if(Fe){let te=We(ne);t.texStorage2D(r.TEXTURE_2D,he,de,te.width,te.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Ee,ne)}else t.texImage2D(r.TEXTURE_2D,0,de,fe,Ee,ne);m(v)&&w(W),ae.__version=ce.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Oe(P,v,k){if(v.image.length!==6)return;let W=He(P,v),$=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+k);let ce=n.get($);if($.version!==ce.__version||W===!0){t.activeTexture(r.TEXTURE0+k);let ae=lt.getPrimaries(lt.workingColorSpace),Q=v.colorSpace===ur?null:lt.getPrimaries(v.colorSpace),ne=v.colorSpace===ur||ae===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let fe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!fe&&!Ee?de[ie]=p(v.image[ie],!0,i.maxCubemapSize):de[ie]=Ee?v.image[ie].image:v.image[ie],de[ie]=It(v,de[ie]);let ue=de[0],le=s.convert(v.format,v.colorSpace),Ie=s.convert(v.type),Fe=y(v.internalFormat,le,Ie,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,he=ce.__version===void 0||W===!0,te=$.dataReady,pe=b(v,ue);ke(r.TEXTURE_CUBE_MAP,v);let xe;if(fe){N&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Fe,ue.width,ue.height);for(let ie=0;ie<6;ie++){xe=de[ie].mipmaps;for(let oe=0;oe<xe.length;oe++){let re=xe[oe];v.format!==_i?le!==null?N?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Fe,re.width,re.height,0,re.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,Ie,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Fe,re.width,re.height,0,le,Ie,re.data)}}}else{if(xe=v.mipmaps,N&&he){xe.length>0&&pe++;let ie=We(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,le,Ie,de[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,de[ie].width,de[ie].height,0,le,Ie,de[ie].data);for(let oe=0;oe<xe.length;oe++){let De=xe[oe].image[ie].image;N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,De.width,De.height,le,Ie,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Fe,De.width,De.height,0,le,Ie,De.data)}}else{N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le,Ie,de[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,le,Ie,de[ie]);for(let oe=0;oe<xe.length;oe++){let re=xe[oe];N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,le,Ie,re.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Fe,le,Ie,re.image[ie])}}}m(v)&&w(r.TEXTURE_CUBE_MAP),ce.__version=$.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function me(P,v,k,W,$,ce){let ae=s.convert(k.format,k.colorSpace),Q=s.convert(k.type),ne=y(k.internalFormat,ae,Q,k.normalized,k.colorSpace),fe=n.get(v),Ee=n.get(k);if(Ee.__renderTarget=v,!fe.__hasExternalTextures){let de=Math.max(1,v.width>>ce),ue=Math.max(1,v.height>>ce);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,ce,ne,de,ue,v.depth,0,ae,Q,null):t.texImage2D($,ce,ne,de,ue,0,ae,Q,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),dt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,$,Ee.__webglTexture,0,qe(v)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,$,Ee.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(P,v,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),v.depthBuffer){let W=v.depthTexture,$=W&&W.isDepthTexture?W.type:null,ce=S(v.stencilBuffer,$),ae=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;dt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(v),ce,v.width,v.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(v),ce,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ce,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,P)}else{let W=v.textures;for(let $=0;$<W.length;$++){let ce=W[$],ae=s.convert(ce.format,ce.colorSpace),Q=s.convert(ce.type),ne=y(ce.internalFormat,ae,Q,ce.normalized,ce.colorSpace);dt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(v),ne,v.width,v.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(v),ne,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ne,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(P,v,k){let W=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),ke(r.TEXTURE_CUBE_MAP,v.depthTexture);let fe=s.convert(v.depthTexture.format),Ee=s.convert(v.depthTexture.type),de;v.depthTexture.format===Gi?de=r.DEPTH_COMPONENT24:v.depthTexture.format===Hr&&(de=r.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,de,v.width,v.height,0,fe,Ee,null)}}else j(v.depthTexture,0);let ce=$.__webglTexture,ae=qe(v),Q=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,ne=v.depthTexture.format===Hr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===Gi)dt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,ce,0);else if(v.depthTexture.format===Hr)dt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,Q,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ne,Q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pe(P){let v=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=W}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Be(v.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?Be(v.__webglFramebuffer[0],P,0):Be(v.__webglFramebuffer,P,0)}else if(k){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=r.createRenderbuffer(),Ue(v.__webglDepthbuffer[W],P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ce)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ue(v.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(P,v,k){let W=n.get(P);v!==void 0&&me(W.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Pe(P)}function Ke(P){let v=P.texture,k=n.get(P),W=n.get(v);P.addEventListener("dispose",x);let $=P.textures,ce=P.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=v.version,a.memory.textures++),ce){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let ne=0;ne<v.mipmaps.length;ne++)k.__webglFramebuffer[Q][ne]=r.createFramebuffer()}else k.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)k.__webglFramebuffer[Q]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ae)for(let Q=0,ne=$.length;Q<ne;Q++){let fe=n.get($[Q]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&dt(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){let ne=$[Q];k.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);let fe=s.convert(ne.format,ne.colorSpace),Ee=s.convert(ne.type),de=y(ne.internalFormat,fe,Ee,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),ue=qe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,de,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),ke(r.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)me(k.__webglFramebuffer[Q][ne],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne);else me(k.__webglFramebuffer[Q],P,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(v)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Q=0,ne=$.length;Q<ne;Q++){let fe=$[Q],Ee=n.get(fe),de=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),ke(de,fe),me(k.__webglFramebuffer,P,fe,r.COLOR_ATTACHMENT0+Q,de,0),m(fe)&&w(de)}t.unbindTexture()}else{let Q=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,W.__webglTexture),ke(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)me(k.__webglFramebuffer[ne],P,v,r.COLOR_ATTACHMENT0,Q,ne);else me(k.__webglFramebuffer,P,v,r.COLOR_ATTACHMENT0,Q,0);m(v)&&w(Q),t.unbindTexture()}P.depthBuffer&&Pe(P)}function V(P){let v=P.textures;for(let k=0,W=v.length;k<W;k++){let $=v[k];if(m($)){let ce=C(P),ae=n.get($).__webglTexture;t.bindTexture(ce,ae),w(ce),t.unbindTexture()}}}let it=[],xt=[];function Dt(P){if(P.samples>0){if(dt(P)===!1){let v=P.textures,k=P.width,W=P.height,$=r.COLOR_BUFFER_BIT,ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(P),Q=v.length>1;if(Q)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let Ee=n.get(v[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,k,W,0,0,k,W,$,r.NEAREST),l===!0&&(it.length=0,xt.length=0,it.push(r.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(it.push(ce),xt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let Ee=n.get(v[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let v=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function qe(P){return Math.min(i.maxSamples,P.samples)}function dt(P){let v=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function F(P){let v=a.render.frame;h.get(P)!==v&&(h.set(P,v),P.update())}function It(P,v){let k=P.colorSpace,W=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Ja&&k!==ur&&(lt.getTransfer(k)===mt?(W!==_i||$!==ii)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",k)),v}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=I,this.setTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=R,this.setTextureCube=K,this.rebindTextures=Xe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dM(r,e){function t(n,i=ur){let s,a=lt.getTransfer(i);if(n===ii)return r.UNSIGNED_BYTE;if(n===gc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===_c)return r.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Wu)return r.BYTE;if(n===Xu)return r.SHORT;if(n===da)return r.UNSIGNED_SHORT;if(n===mc)return r.INT;if(n===Ii)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===Di)return r.HALF_FLOAT;if(n===Zu)return r.ALPHA;if(n===Ju)return r.RGB;if(n===_i)return r.RGBA;if(n===Gi)return r.DEPTH_COMPONENT;if(n===Hr)return r.DEPTH_STENCIL;if(n===$u)return r.RED;if(n===xc)return r.RED_INTEGER;if(n===Wr)return r.RG;if(n===vc)return r.RG_INTEGER;if(n===yc)return r.RGBA_INTEGER;if(n===So||n===Mo||n===bo||n===wo)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sc||n===Mc||n===bc||n===wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tc||n===Ec||n===Ac||n===Cc||n===Rc||n===To||n===Pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tc||n===Ec)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ac)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Cc)return s.COMPRESSED_R11_EAC;if(n===Rc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===To)return s.COMPRESSED_RG11_EAC;if(n===Pc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ic||n===Lc||n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc||n===Gc||n===Hc||n===Wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ic)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Nc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xc||n===qc||n===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xc)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zc||n===Jc||n===Eo||n===$c)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===pa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var pM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mM=`
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

}`,xf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new oo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ti({vertexShader:pM,fragmentShader:mM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new Fr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vf=class extends Hi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new xf,m={},w=t.getContextAttributes(),C=null,y=null,S=[],b=[],E=new et,x=null,T=null,A=new Sn;A.viewport=new Nt;let L=new Sn;L.viewport=new Nt;let D=[A,L],O=new uc,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=S[J];return ee===void 0&&(ee=new la,S[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=S[J];return ee===void 0&&(ee=new la,S[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=S[J];return ee===void 0&&(ee=new la,S[J]=ee),ee.getHandSpace()};function q(J){let ee=b.indexOf(J.inputSource);if(ee===-1)return;let _e=S[ee];_e!==void 0&&(_e.update(J.inputSource,J.frame,c||a),_e.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",j);for(let J=0;J<S.length;J++){let ee=b[J];ee!==null&&(b[J]=null,S[J].disconnect(ee))}I=null,B=null,p.reset();for(let J in m)delete m[J];if(e.setRenderTarget(C),f=null,u=null,d=null,i=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(C=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",z),i.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,me=null;w.depth&&(me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=w.stencil?Hr:Gi,Oe=w.stencil?pa:Ii);let Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Xn(u.textureWidth,u.textureHeight,{format:_i,type:ii,depthTexture:new Nr(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Xn(f.framebufferWidth,f.framebufferHeight,{format:_i,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(J){for(let ee=0;ee<J.removed.length;ee++){let _e=J.removed[ee],Oe=b.indexOf(_e);Oe>=0&&(b[Oe]=null,S[Oe].disconnect(_e))}for(let ee=0;ee<J.added.length;ee++){let _e=J.added[ee],Oe=b.indexOf(_e);if(Oe===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=b.length){b.push(_e),Oe=Ue;break}else if(b[Ue]===null){b[Ue]=_e,Oe=Ue;break}if(Oe===-1)break}let me=S[Oe];me&&me.connect(_e)}}let H=new Z,R=new Z;function K(J,ee,_e){H.setFromMatrixPosition(ee.matrixWorld),R.setFromMatrixPosition(_e.matrixWorld);let Oe=H.distanceTo(R),me=ee.projectionMatrix.elements,Ue=_e.projectionMatrix.elements,Be=me[14]/(me[10]-1),Pe=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],Ke=(me[9]-1)/me[5],V=(me[8]-1)/me[0],it=(Ue[8]+1)/Ue[0],xt=Be*V,Dt=Be*it,qe=Oe/(-V+it),dt=qe*-V;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(dt),J.translateZ(qe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),me[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let F=Be+qe,It=Pe+qe,We=xt-dt,P=Dt+(Oe-dt),v=Xe*Pe/It*F,k=Ke*Pe/It*F;J.projectionMatrix.makePerspective(We,P,v,k,F,It),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Se(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let ee=J.near,_e=J.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(_e=p.depthFar)),O.near=L.near=A.near=ee,O.far=L.far=A.far=_e,(I!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),I=O.near,B=O.far),O.layers.mask=J.layers.mask|6,A.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;let Oe=J.parent,me=O.cameras;Se(O,Oe);for(let Ue=0;Ue<me.length;Ue++)Se(me[Ue],Oe);me.length===2?K(O,A,L):O.projectionMatrix.copy(A.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Me(J,O,Oe)};function Me(J,ee,_e){_e===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(_e.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=sa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(O)},this.getCameraTexture=function(J){return m[J]};let Ve=null;function ke(J,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Oe=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let Pe=0;Pe<_e.length;Pe++){let Xe=_e[Pe],Ke=null;if(f!==null)Ke=f.getViewport(Xe);else{let it=d.getViewSubImage(u,Xe);Ke=it.viewport,Pe===0&&(e.setRenderTargetTextures(y,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(y))}let V=D[Pe];V===void 0&&(V=new Sn,V.layers.enable(Pe),V.viewport=new Nt,D[Pe]=V),V.matrix.fromArray(Xe.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Xe.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Pe===0&&(O.matrix.copy(V.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(V)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Pe=d.getDepthInformation(_e[0]);Pe&&Pe.isValid&&Pe.texture&&p.init(Pe,i.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Pe=0;Pe<_e.length;Pe++){let Xe=_e[Pe].camera;if(Xe){let Ke=m[Xe];Ke||(Ke=new oo,m[Xe]=Ke);let V=d.getCameraImage(Xe);Ke.sourceTexture=V}}}}for(let _e=0;_e<S.length;_e++){let Oe=b[_e],me=S[_e];Oe!==null&&me!==void 0&&me.update(Oe,ee,c||a)}Ve&&Ve(J,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let He=new bm;He.setAnimationLoop(ke),this.setAnimationLoop=function(J){Ve=J},this.dispose=function(){}}},gM=new kt,Rm=new Ze;Rm.set(-1,0,0,0,1,0,0,0,1);function _M(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ef(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,w,C,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,w,C):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Fn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Fn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let w=e.get(m),C=w.envMap,y=w.envMapRotation;C&&(p.envMap.value=C,p.envMapRotation.value.setFromMatrix4(gM.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Rm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,w,C){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=C*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let w=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xM(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function c(y,S){let b=i[y.id];b===void 0&&(p(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",w));let E=S.program;n.updateUBOMapping(y,E);let x=e.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function h(y){let S=d();y.__bindingPointIndex=S;let b=r.createBuffer(),E=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],b=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,T=b.length;x<T;x++){let A=b[x];if(Array.isArray(A))for(let L=0,D=A.length;L<D;L++)f(A[L],x,L,E);else f(A,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,b,E){if(_(y,S,b,E)===!0){let x=y.__offset,T=y.value;if(Array.isArray(T)){let A=0;for(let L=0;L<T.length;L++){let D=T[L],O=m(D);g(D,y.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function g(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function _(y,S,b,E){let x=y.value,T=S+"_"+b;if(E[T]===void 0)return typeof x=="number"||typeof x=="boolean"?E[T]=x:ArrayBuffer.isView(x)?E[T]=x.slice():E[T]=x.clone(),!0;{let A=E[T];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return E[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function p(y){let S=y.uniforms,b=0,E=16;for(let T=0,A=S.length;T<A;T++){let L=Array.isArray(S[T])?S[T]:[S[T]];for(let D=0,O=L.length;D<O;D++){let I=L[D],B=Array.isArray(I.value)?I.value:[I.value];for(let q=0,z=B.length;q<z;q++){let j=B[q],H=m(j),R=b%E,K=R%H.boundary,Se=R+K;b+=K,Se!==0&&E-Se<H.storage&&(b+=E-Se),I.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=H.storage}}}let x=b%E;return x>0&&(b+=E-x),y.__size=b,y.__cache={},this}function m(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),S}function w(y){let S=y.target;S.removeEventListener("dispose",w);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function C(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:C}}var vM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yi=null;function yM(){return Yi===null&&(Yi=new Zl(vM,16,16,Wr,Di),Yi.name="DFG_LUT",Yi.minFilter=en,Yi.magFilter=en,Yi.wrapS=Vi,Yi.wrapT=Vi,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}var rh=class{constructor(e={}){let{canvas:t=Zp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ii}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([yc,vc,xc]),m=new Set([ii,Ii,da,pa,gc,_c]),w=new Uint32Array(4),C=new Int32Array(4),y=new Z,S=null,b=null,E=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,L=!1,D=null,O=null,I=null,B=null;this._outputColorSpace=dn;let q=0,z=0,j=null,H=-1,R=null,K=new Nt,Se=new Nt,Me=null,Ve=new Qe(0),ke=0,He=t.width,J=t.height,ee=1,_e=null,Oe=null,me=new Nt(0,0,He,J),Ue=new Nt(0,0,He,J),Be=!1,Pe=new ro,Xe=!1,Ke=!1,V=new kt,it=new Z,xt=new Nt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function dt(){return j===null?ee:1}let F=n;function It(M,U){return t.getContext(M,U)}let We,P,v,k,W,$,ce,ae,Q,ne,fe,Ee,de,ue,le,Ie,Fe,N,he,te,pe,xe,ie;try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),F===null){let U="webgl2";if(F=It(U,M),F===null)throw It(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(M){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ge("WebGLRenderer: "+M.message),M}function oe(){We=new Ay(F),We.init(),pe=new dM(F,We),P=new _y(F,We,e,pe),v=new uM(F,We),P.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),O=F.createFramebuffer(),I=F.createFramebuffer(),B=F.createFramebuffer(),k=new Py(F),W=new KS,$=new fM(F,We,v,W,P,pe,k),ce=new Ey(A),ae=new L0(F),xe=new my(F,ae),Q=new Cy(F,ae,k,xe),ne=new Ly(F,Q,ae,xe,k),N=new Iy(F,P,$),le=new xy(W),fe=new $S(A,ce,We,P,xe,le),Ee=new _M(A,W),de=new QS,ue=new sM(We),Fe=new py(A,ce,v,ne,g,l),Ie=new hM(A,ne,P),ie=new xM(F,k,P,v),he=new gy(F,We,k),te=new Ry(F,We,k),k.programs=fe.programs,A.capabilities=P,A.extensions=We,A.properties=W,A.renderLists=de,A.shadowMap=Ie,A.state=v,A.info=k}_!==ii&&(T=new Ny(_,t.width,t.height,o,i,s));let re=new vf(A,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=We.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=We.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(He,J,!1))},this.getSize=function(M){return M.set(He,J)},this.setSize=function(M,U,Y=!0){if(re.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}He=M,J=U,t.width=Math.floor(M*ee),t.height=Math.floor(U*ee),Y===!0&&(t.style.width=M+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(He*ee,J*ee).floor()},this.setDrawingBufferSize=function(M,U,Y){He=M,J=U,ee=Y,t.width=Math.floor(M*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===ii){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(K)},this.getViewport=function(M){return M.copy(me)},this.setViewport=function(M,U,Y,G){M.isVector4?me.set(M.x,M.y,M.z,M.w):me.set(M,U,Y,G),v.viewport(K.copy(me).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,U,Y,G){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,U,Y,G),v.scissor(Se.copy(Ue).multiplyScalar(ee).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(M){v.setScissorTest(Be=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){Oe=M},this.getClearColor=function(M){return M.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Y=!0){let G=0;if(M){let X=!1;if(j!==null){let ge=j.texture.format;X=p.has(ge)}if(X){let ge=j.texture.type,we=m.has(ge),ye=Fe.getClearColor(),Ce=Fe.getClearAlpha(),Le=ye.r,je=ye.g,at=ye.b;we?(w[0]=Le,w[1]=je,w[2]=at,w[3]=Ce,F.clearBufferuiv(F.COLOR,0,w)):(C[0]=Le,C[1]=je,C[2]=at,C[3]=Ce,F.clearBufferiv(F.COLOR,0,C))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),de.dispose(),ue.dispose(),W.dispose(),ce.dispose(),ne.dispose(),xe.dispose(),ie.dispose(),fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",At),re.removeEventListener("sessionend",yt),ht.stop()};function De(M){M.preventDefault(),ju("WebGLRenderer: Context Lost."),L=!0}function se(){ju("WebGLRenderer: Context Restored."),L=!1;let M=k.autoReset,U=Ie.enabled,Y=Ie.autoUpdate,G=Ie.needsUpdate,X=Ie.type;oe(),k.autoReset=M,Ie.enabled=U,Ie.autoUpdate=Y,Ie.needsUpdate=G,Ie.type=X}function Ne(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ae(M){let U=M.target;U.removeEventListener("dispose",Ae),Ye(U)}function Ye(M){qt(M),W.remove(M)}function qt(M){let U=W.get(M).programs;U!==void 0&&(U.forEach(function(Y){fe.releaseProgram(Y)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Y,G,X,ge){U===null&&(U=Dt);let we=X.isMesh&&X.matrixWorld.determinantAffine()<0,ye=on(M,U,Y,G,X);v.setMaterial(G,we);let Ce=Y.index,Le=1;if(G.wireframe===!0){if(Ce=Q.getWireframeAttribute(Y),Ce===void 0)return;Le=2}let je=Y.drawRange,at=Y.attributes.position,Re=je.start*Le,pt=(je.start+je.count)*Le;ge!==null&&(Re=Math.max(Re,ge.start*Le),pt=Math.min(pt,(ge.start+ge.count)*Le)),Ce!==null?(Re=Math.max(Re,0),pt=Math.min(pt,Ce.count)):at!=null&&(Re=Math.max(Re,0),pt=Math.min(pt,at.count));let Zt=pt-Re;if(Zt<0||Zt===1/0)return;xe.setup(X,G,ye,Y,Ce);let Ct,St=he;if(Ce!==null&&(Ct=ae.get(Ce),St=te,St.setIndex(Ct)),X.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*dt()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(X.isLine){let xn=G.linewidth;xn===void 0&&(xn=1),v.setLineWidth(xn*dt()),X.isLineSegments?St.setMode(F.LINES):X.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else X.isPoints?St.setMode(F.POINTS):X.isSprite&&St.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(We.get("WEBGL_multi_draw"))St.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let xn=X._multiDrawStarts,be=X._multiDrawCounts,Dn=X._multiDrawCount,ft=Ce?ae.get(Ce).bytesPerElement:1,pi=W.get(G).currentProgram.getUniforms();for(let ki=0;ki<Dn;ki++)pi.setValue(F,"_gl_DrawID",ki),St.render(xn[ki]/ft,be[ki])}else if(X.isInstancedMesh)St.renderInstances(Re,Zt,X.count);else if(Y.isInstancedBufferGeometry){let xn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,be=Math.min(Y.instanceCount,xn);St.renderInstances(Re,Zt,be)}else St.render(Re,Zt)};function rt(M,U,Y,G){D!==null&&M.isNodeMaterial&&D.setObject(G,M),Xe===!0&&le.setState(M,Y,!1),M.transparent===!0&&M.side===Xi&&M.forceSinglePass===!1?(M.side=Fn,M.needsUpdate=!0,Bt(M,U,G),M.side=zr,M.needsUpdate=!0,Bt(M,U,G),M.side=Xi):Bt(M,U,G)}this.compile=function(M,U,Y=null){Y===null&&(Y=M),D!==null&&D.renderStart(M,U,Y),b=ue.get(Y),b.init(U),x.push(b),Y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),M!==Y&&M.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),Ke=this.localClippingEnabled,Xe=le.init(this.clippingPlanes,Ke),Xe===!0&&le.setGlobalState(this.clippingPlanes,U),D!==null&&Ie.render(b.state.shadowsArray,Y,U);let G=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ge=X.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){let ye=ge[we];rt(ye,Y,U,X),G.add(ye)}else rt(ge,Y,U,X),G.add(ge)}),b=x.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(M,U,Y=null){let G=this.compile(M,U,Y);return new Promise(X=>{function ge(){if(G.forEach(function(we){let Ce=W.get(we).currentProgram;(Ce===void 0||Ce.isReady())&&G.delete(we)}),G.size===0){X(M);return}setTimeout(ge,10)}We.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Et=null;function an(M){Et&&Et(M)}function At(){ht.stop()}function yt(){ht.start()}let ht=new bm;ht.setAnimationLoop(an),typeof self<"u"&&ht.setContext(self),this.setAnimationLoop=function(M){Et=M,re.setAnimationLoop(M),M===null?ht.stop():ht.start()},re.addEventListener("sessionstart",At),re.addEventListener("sessionend",yt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(M,U);let Y=re.enabled===!0&&re.isPresenting===!0,G=T!==null&&(j===null||Y)&&T.begin(A,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,U,j),b=ue.get(M,x.length),b.init(U),b.state.textureUnits=$.getTextureUnits(),x.push(b),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(V,Ci,U.reversedDepth),Ke=this.localClippingEnabled,Xe=le.init(this.clippingPlanes,Ke),S=de.get(M,E.length),S.init(),E.push(S),re.enabled===!0&&re.isPresenting===!0){let we=A.xr.getDepthSensingMesh();we!==null&&In(we,U,-1/0,A.sortObjects)}In(M,U,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(_e,Oe),qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,qe&&Fe.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&le.beginShadows();let X=b.state.shadowsArray;if(Ie.render(X,M,U),Xe===!0&&le.endShadows(),(G&&T.hasRenderPass())===!1){let we=S.opaque,ye=S.transmissive;if(b.setupLights(),U.isArrayCamera){let Ce=U.cameras;if(ye.length>0)for(let Le=0,je=Ce.length;Le<je;Le++){let at=Ce[Le];_n(we,ye,M,at)}qe&&Fe.render(M);for(let Le=0,je=Ce.length;Le<je;Le++){let at=Ce[Le];wt(S,M,at,at.viewport)}}else ye.length>0&&_n(we,ye,M,U),qe&&Fe.render(M),wt(S,M,U)}j!==null&&z===0&&($.updateMultisampleRenderTarget(j),$.updateRenderTargetMipmap(j)),G&&T.end(A),M.isScene===!0&&M.onAfterRender(A,M,U),xe.resetDefaultState(),H=-1,R=null,x.pop(),x.length>0?(b=x[x.length-1],$.setTextureUnits(b.state.textureUnits),Xe===!0&&le.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,D!==null&&D.renderEnd()};function In(M,U,Y,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Pe)){G&&xt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);let we=ne.update(M),ye=M.material;ye.visible&&S.push(M,we,ye,Y,xt.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Pe))){let we=ne.update(M),ye=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),xt.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),xt.copy(we.boundingSphere.center)),xt.applyMatrix4(M.matrixWorld).applyMatrix4(V)),Array.isArray(ye)){let Ce=we.groups;for(let Le=0,je=Ce.length;Le<je;Le++){let at=Ce[Le],Re=ye[at.materialIndex];Re&&Re.visible&&S.push(M,we,Re,Y,xt.z,at,U)}}else ye.visible&&S.push(M,we,ye,Y,xt.z,null,U)}}let ge=M.children;for(let we=0,ye=ge.length;we<ye;we++)In(ge[we],U,Y,G)}function wt(M,U,Y,G){let{opaque:X,transmissive:ge,transparent:we}=M;b.setupLightsView(Y),Xe===!0&&le.setGlobalState(A.clippingPlanes,Y),G&&v.viewport(K.copy(G)),X.length>0&&Ln(X,U,Y),ge.length>0&&Ln(ge,U,Y),we.length>0&&Ln(we,U,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function _n(M,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Re=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Xn(1,1,{generateMipmaps:!0,type:Re?Di:ii,minFilter:Gr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let ge=b.state.transmissionRenderTarget[G.id],we=G.viewport||K;ge.setSize(we.z*A.transmissionResolutionScale,we.w*A.transmissionResolutionScale);let ye=A.getRenderTarget(),Ce=A.getActiveCubeFace(),Le=A.getActiveMipmapLevel();A.setRenderTarget(ge),A.getClearColor(Ve),ke=A.getClearAlpha(),ke<1&&A.setClearColor(16777215,.5),A.clear(),qe&&Fe.render(Y);let je=A.toneMapping;A.toneMapping=Pi;let at=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Xe===!0&&le.setGlobalState(A.clippingPlanes,G),Ln(M,Y,G),$.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge),We.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let pt=0,Zt=U.length;pt<Zt;pt++){let Ct=U[pt],{object:St,geometry:xn,material:be,group:Dn}=Ct;if(be.side===Xi&&St.layers.test(G.layers)){let ft=be.side;be.side=Fn,be.needsUpdate=!0,Yt(St,Y,G,xn,be,Dn),be.side=ft,be.needsUpdate=!0,Re=!0}}Re===!0&&($.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge))}A.setRenderTarget(ye,Ce,Le),A.setClearColor(Ve,ke),at!==void 0&&(G.viewport=at),A.toneMapping=je}function Ln(M,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let X=0,ge=M.length;X<ge;X++){let we=M[X],{object:ye,geometry:Ce,group:Le}=we,je=we.material;je.allowOverride===!0&&G!==null&&(je=G),ye.layers.test(Y.layers)&&Yt(ye,U,Y,Ce,je,Le)}}function Yt(M,U,Y,G,X,ge){D!==null&&X.isNodeMaterial&&D.setObject(M,X),M.onBeforeRender(A,U,Y,G,X,ge),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(A,U,Y,G,M,ge),X.transparent===!0&&X.side===Xi&&X.forceSinglePass===!1?(X.side=Fn,X.needsUpdate=!0,A.renderBufferDirect(Y,U,G,X,M,ge),X.side=zr,X.needsUpdate=!0,A.renderBufferDirect(Y,U,G,X,M,ge),X.side=Xi):A.renderBufferDirect(Y,U,G,X,M,ge),M.onAfterRender(A,U,Y,G,X,ge)}function Bt(M,U,Y){U.isScene!==!0&&(U=Dt);let G=W.get(M),X=b.state.lights,ge=b.state.shadowsArray,we=X.state.version,ye=fe.getParameters(M,X.state,ge,U,Y,b.state.lightProbeGridArray),Ce=fe.getProgramCacheKey(ye),Le=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let je=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ce.get(M.envMap||G.environment,je),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",Ae),Le=new Map,G.programs=Le);let at=Le.get(Ce);if(at!==void 0){if(G.currentProgram===at&&G.lightsStateVersion===we)return Bi(M,ye),at}else ye.uniforms=fe.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,Y,ye),M.onBeforeCompile(ye,A),at=fe.acquireProgram(ye,Ce),Le.set(Ce,at),G.uniforms=ye.uniforms;let Re=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=le.uniform),Bi(M,ye),G.needsLights=di(M),G.lightsStateVersion=we,G.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.sunLights.value=X.state.sun,Re.sunLightShadows.value=X.state.sunShadow,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.sunShadowMatrix.value=X.state.sunShadowMatrix,Re.sunShadowCascade.value=X.state.sunShadowCascade,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=at,G.uniformsList=null,at}function Qt(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=xa.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Bi(M,U){let Y=W.get(M);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Fs(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=M.length;Y<G;Y++){let X=M[Y];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function on(M,U,Y,G,X){U.isScene!==!0&&(U=Dt),$.resetTextureUnits();let ge=U.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ye=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:lt.workingColorSpace,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Le=ce.get(G.envMap||we,Ce),je=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,at=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!Y.morphAttributes.position,pt=!!Y.morphAttributes.normal,Zt=!!Y.morphAttributes.color,Ct=Pi;G.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ct=A.toneMapping);let St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xn=St!==void 0?St.length:0,be=W.get(G),Dn=b.state.lights;if(Xe===!0&&(Ke===!0||M!==R)){let Tt=M===R&&G.id===H;le.setState(G,M,Tt)}let ft=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Dn.state.version||be.outputColorSpace!==ye||X.isBatchedMesh&&be.batching===!1||!X.isBatchedMesh&&be.batching===!0||X.isBatchedMesh&&be.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&be.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&be.instancing===!1||!X.isInstancedMesh&&be.instancing===!0||X.isSkinnedMesh&&be.skinning===!1||!X.isSkinnedMesh&&be.skinning===!0||X.isInstancedMesh&&be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&be.instancingMorph===!1&&X.morphTexture!==null||be.envMap!==Le||G.fog===!0&&be.fog!==ge||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==le.numPlanes||be.numIntersection!==le.numIntersection)||be.vertexAlphas!==je||be.vertexTangents!==at||be.morphTargets!==Re||be.morphNormals!==pt||be.morphColors!==Zt||be.toneMapping!==Ct||be.morphTargetsCount!==xn||!!be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,be.__version=G.version);let pi=be.currentProgram;ft===!0&&(pi=Bt(G,U,X),D&&G.isNodeMaterial&&D.onUpdateProgram(G,pi,be));let ki=!1,br=!1,Bs=!1,vt=pi.getUniforms(),Wt=be.uniforms;if(v.useProgram(pi.program)&&(ki=!0,br=!0,Bs=!0),G.id!==H&&(H=G.id,br=!0),be.needsLights){let Tt=Fs(b.state.lightProbeGridArray,X);be.lightProbeGrid!==Tt&&(be.lightProbeGrid=Tt,br=!0)}if(ki||R!==M){v.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),vt.setValue(F,"projectionMatrix",M.projectionMatrix),vt.setValue(F,"viewMatrix",M.matrixWorldInverse);let Tr=vt.map.cameraPosition;Tr!==void 0&&Tr.setValue(F,it.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),R!==M&&(R=M,br=!0,Bs=!0)}if(be.needsLights&&(Dn.state.sunShadowMap.length>0&&vt.setValue(F,"sunShadowMap",Dn.state.sunShadowMap,$),Dn.state.directionalShadowMap.length>0&&vt.setValue(F,"directionalShadowMap",Dn.state.directionalShadowMap,$),Dn.state.spotShadowMap.length>0&&vt.setValue(F,"spotShadowMap",Dn.state.spotShadowMap,$),Dn.state.pointShadowMap.length>0&&vt.setValue(F,"pointShadowMap",Dn.state.pointShadowMap,$)),X.isSkinnedMesh){vt.setOptional(F,X,"bindMatrix"),vt.setOptional(F,X,"bindMatrixInverse");let Tt=X.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),vt.setValue(F,"boneTexture",Tt.boneTexture,$))}X.isBatchedMesh&&(vt.setOptional(F,X,"batchingTexture"),vt.setValue(F,"batchingTexture",X._matricesTexture,$),vt.setOptional(F,X,"batchingIdTexture"),vt.setValue(F,"batchingIdTexture",X._indirectTexture,$),vt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&vt.setValue(F,"batchingColorTexture",X._colorsTexture,$));let wr=Y.morphAttributes;if((wr.position!==void 0||wr.normal!==void 0||wr.color!==void 0)&&N.update(X,Y,pi),(br||be.receiveShadow!==X.receiveShadow)&&(be.receiveShadow=X.receiveShadow,vt.setValue(F,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=yM()),br){if(vt.setValue(F,"toneMappingExposure",A.toneMappingExposure),be.needsLights&&Ht(Wt,Bs),ge&&G.fog===!0&&Ee.refreshFogUniforms(Wt,ge),Ee.refreshMaterialUniforms(Wt,G,ee,J,b.state.transmissionRenderTarget[M.id]),be.needsLights&&be.lightProbeGrid){let Tt=be.lightProbeGrid;Wt.probesSH.value=Tt.texture,Wt.probesMin.value.copy(Tt.boundingBox.min),Wt.probesMax.value.copy(Tt.boundingBox.max),Wt.probesResolution.value.copy(Tt.resolution)}xa.upload(F,Qt(be),Wt,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xa.upload(F,Qt(be),Wt,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(F,"center",X.center),vt.setValue(F,"modelViewMatrix",X.modelViewMatrix),vt.setValue(F,"normalMatrix",X.normalMatrix),vt.setValue(F,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){let Tt=G.uniformsGroups;for(let Tr=0,ks=Tt.length;Tr<ks;Tr++){let Wd=Tt[Tr];ie.update(Wd,pi),ie.bind(Wd,pi)}}return pi}function Ht(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function di(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,U,Y){let G=W.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(M.texture).__webglTexture=U,W.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Y=W.get(M);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Y=0){j=M,q=U,z=Y;let G=null,X=!1,ge=!1;if(M){let ye=W.get(M);if(ye.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),K.copy(M.viewport),Se.copy(M.scissor),Me=M.scissorTest,v.viewport(K),v.scissor(Se),v.setScissorTest(Me),H=-1;return}else if(ye.__webglFramebuffer===void 0)$.setupRenderTarget(M);else if(ye.__hasExternalTextures)$.rebindTextures(M,W.get(M.texture).__webglTexture,W.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let je=M.depthTexture;if(ye.__boundDepthTexture!==je){if(je!==null&&W.has(je)&&(M.width!==je.image.width||M.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(M)}}let Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ge=!0);let Le=W.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?G=Le[U][Y]:G=Le[U],X=!0):M.samples>0&&$.useMultisampledRTT(M)===!1?G=W.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[Y]:G=Le,K.copy(M.viewport),Se.copy(M.scissor),Me=M.scissorTest}else K.copy(me).multiplyScalar(ee).floor(),Se.copy(Ue).multiplyScalar(ee).floor(),Me=Be;if(Y!==0&&(G=O),v.bindFramebuffer(F.FRAMEBUFFER,G)&&v.drawBuffers(M,G),v.viewport(K),v.scissor(Se),v.setScissorTest(Me),X){let ye=W.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,Y)}else if(ge){let ye=U;for(let Ce=0;Ce<M.textures.length;Ce++){let Le=W.get(M.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,Y,ye)}}else if(M!==null&&Y!==0){let ye=W.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,Y)}H=-1};function Os(M){let U=W.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=P.textureFormatReadable(M.format),U.__typeReadable=P.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,Y,G,X,ge,we,ye=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){v.bindFramebuffer(F.FRAMEBUFFER,Ce);try{let Le=M.textures[ye],je=Le.format,at=Le.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Re=Os(Le);if(Re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&Y>=0&&Y<=M.height-X&&F.readPixels(U,Y,G,X,pe.convert(je),pe.convert(at),ge)}finally{let Le=j!==null?W.get(j).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,U,Y,G,X,ge,we,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(U>=0&&U<=M.width-G&&Y>=0&&Y<=M.height-X){v.bindFramebuffer(F.FRAMEBUFFER,Ce);let Le=M.textures[ye],je=Le.format,at=Le.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Re=Os(Le);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,X,pe.convert(je),pe.convert(at),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Zt=j!==null?W.get(j).__webglFramebuffer:null;v.bindFramebuffer(F.FRAMEBUFFER,Zt);let Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $p(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,pt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(pt),F.deleteSync(Ct),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Y=0){let G=Math.pow(2,-Y),X=Math.floor(M.image.width*G),ge=Math.floor(M.image.height*G),we=U!==null?U.x:0,ye=U!==null?U.y:0;$.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,we,ye,X,ge),v.unbindTexture()},this.copyTextureToTexture=function(M,U,Y=null,G=null,X=0,ge=0){let we,ye,Ce,Le,je,at,Re,pt,Zt,Ct=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(Y!==null)we=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,je=Y.min.y,at=Y.isBox3?Y.min.z:0;else{let Wt=Math.pow(2,-X);we=Math.floor(Ct.width*Wt),ye=Math.floor(Ct.height*Wt),M.isDataArrayTexture?Ce=Ct.depth:M.isData3DTexture?Ce=Math.floor(Ct.depth*Wt):Ce=1,Le=0,je=0,at=0}G!==null?(Re=G.x,pt=G.y,Zt=G.z):(Re=0,pt=0,Zt=0);let St=pe.convert(U.format),xn=pe.convert(U.type),be;U.isData3DTexture?($.setTexture3D(U,0),be=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),be=F.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),be=F.TEXTURE_2D),v.activeTexture(F.TEXTURE0),v.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Dn=v.getParameter(F.UNPACK_ROW_LENGTH),ft=v.getParameter(F.UNPACK_IMAGE_HEIGHT),pi=v.getParameter(F.UNPACK_SKIP_PIXELS),ki=v.getParameter(F.UNPACK_SKIP_ROWS),br=v.getParameter(F.UNPACK_SKIP_IMAGES);v.pixelStorei(F.UNPACK_ROW_LENGTH,Ct.width),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct.height),v.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),v.pixelStorei(F.UNPACK_SKIP_ROWS,je),v.pixelStorei(F.UNPACK_SKIP_IMAGES,at);let Bs=M.isDataArrayTexture||M.isData3DTexture,vt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Wt=W.get(M),wr=W.get(U),Tt=W.get(Wt.__renderTarget),Tr=W.get(wr.__renderTarget);v.bindFramebuffer(F.READ_FRAMEBUFFER,Tt.__webglFramebuffer),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let ks=0;ks<Ce;ks++)Bs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(M).__webglTexture,X,at+ks),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(U).__webglTexture,ge,Zt+ks)),F.blitFramebuffer(Le,je,we,ye,Re,pt,we,ye,F.DEPTH_BUFFER_BIT,F.NEAREST);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||W.has(M)){let Wt=W.get(M),wr=W.get(U);v.bindFramebuffer(F.READ_FRAMEBUFFER,I),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Tt=0;Tt<Ce;Tt++)Bs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,X,at+Tt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,X),vt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wr.__webglTexture,ge,Zt+Tt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wr.__webglTexture,ge),X!==0?F.blitFramebuffer(Le,je,we,ye,Re,pt,we,ye,F.COLOR_BUFFER_BIT,F.NEAREST):vt?F.copyTexSubImage3D(be,ge,Re,pt,Zt+Tt,Le,je,we,ye):F.copyTexSubImage2D(be,ge,Re,pt,Le,je,we,ye);v.bindFramebuffer(F.READ_FRAMEBUFFER,null),v.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else vt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(be,ge,Re,pt,Zt,we,ye,Ce,St,xn,Ct.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(be,ge,Re,pt,Zt,we,ye,Ce,St,Ct.data):F.texSubImage3D(be,ge,Re,pt,Zt,we,ye,Ce,St,xn,Ct):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,Re,pt,we,ye,St,xn,Ct.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,Re,pt,Ct.width,Ct.height,St,Ct.data):F.texSubImage2D(F.TEXTURE_2D,ge,Re,pt,we,ye,St,xn,Ct);v.pixelStorei(F.UNPACK_ROW_LENGTH,Dn),v.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ft),v.pixelStorei(F.UNPACK_SKIP_PIXELS,pi),v.pixelStorei(F.UNPACK_SKIP_ROWS,ki),v.pixelStorei(F.UNPACK_SKIP_IMAGES,br),ge===0&&U.generateMipmaps&&F.generateMipmap(be),v.unbindTexture()},this.initRenderTarget=function(M){W.get(M).__webglFramebuffer===void 0&&$.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$.setTextureCube(M,0):M.isData3DTexture?$.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$.setTexture2DArray(M,0):$.setTexture2D(M,0),v.unbindTexture()},this.resetState=function(){q=0,z=0,j=null,v.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};function fr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},Of,pn,Lt,vi=1e8,bt=1/vi,Af=Math.PI*2,MM=Af/4,bM=0,km=Math.sqrt,wM=Math.cos,TM=Math.sin,rn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},pr=function(e){return typeof e=="number"},gh=function(e){return typeof e>"u"},Ki=function(e){return typeof e=="object"},$n=function(e){return e!==!1},Bf=function(){return typeof window<"u"},oh=function(e){return zt(e)||rn(e)},zm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,EM=/random\([^)]+\)/g,AM=/,\s*/g,Pm=/(?:-?\.?\d|\.)+/gi,kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_s=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zf=/[+-]=-?[.\d]+/,CM=/[^,'"\[\]\s]+/gi,RM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,Ji,Cf,Vf,si={},uh={},Vm,Gm=function(e){return(uh=Sa(e,si))&&En},_h=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Oo=function(e,t){return!t&&console.warn(e)},Hm=function(e,t){return e&&(si[e]=t)&&uh&&(uh[e]=t)||si},Bo=function(){return 0},PM={suppressEvents:!0,isStart:!0,kill:!1},lh={suppressEvents:!0,kill:!1},IM={suppressEvents:!0},Gf={},qr=[],Rf={},Wm,Zn={},Sf={},Im=30,ch=[],Hf="",Wf=function(e){var t=e[0],n,i;if(Ki(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ch.length;i--&&!ch[i].targetTest(t););n=ch[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zf(e[i],n)))||e.splice(i,1);return e},Yr=function(e){return e._gsap||Wf(yi(e))[0]._gsap},Xf=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():gh(n)&&e.getAttribute&&e.getAttribute(t)||n},On=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},LM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},fh=function(){var e=qr.length,t=qr.slice(0),n,i;for(Rf={},qr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qf=function(e){return!!(e._initted||e._startAt||e.add)},Xm=function(e,t,n,i){qr.length&&!pn&&fh(),e.render(t,n,i||!!(pn&&t<0&&qf(e))),qr.length&&!pn&&fh()},qm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(CM).length<2?t:rn(e)?e.trim():e},Ym=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},DM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Sa=function(e,t){for(var n in t)e[n]=t[n];return e},Lm=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ki(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},dh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Do=function(e){var t=e.parent||Ft,n=e.keyframes?DM(Tn(e.keyframes)):ai;if($n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},NM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Zm=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},xh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},UM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pf=function(e,t,n,i){return e._startAt&&(pn?e._startAt.revert(lh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},FM=function r(e){return!e||e._ts&&r(e.parent)},Dm=function(e){return e._repeat?Ma(e._tTime,e=e.duration()+e._rDelay)*e:0},Ma=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},ph=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vh=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},yh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vh(e),n._dirty||ps(n,e)),e},Jm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ph(e.rawTime(),t),(!t._dur||Vo(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},$i=function(e,t,n,i){return t.parent&&Zr(t),t._start=Ut((pr(n)?n:n||e!==Ft?xi(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Zm(e,t,"_first","_last",e._sort?"_start":0),If(t)||(e._recent=t),i||Jm(e,t),e._ts<0&&yh(e,e._tTime),e},$m=function(e,t){return(si.ScrollTrigger||_h("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},Km=function(e,t,n,i,s){if(Kf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!pn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wm!==Jn.frame)return qr.push(e),e._lazy=[s,i],1},OM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},If=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},BM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&OM(e)&&!(!e._initted&&If(e))||(e._ts<0||e._dp._ts<0)&&!If(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=Vo(0,e._tDur,t),h=Ma(l,o),e._yoyo&&h&1&&(a=1-a),h!==Ma(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||pn||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&Km(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Pf(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Zr(e,1),!n&&!pn&&(ri(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ba=function(e,t,n,i){var s=e._repeat,a=Ut(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ut(a*(s+1)+e._rDelay*s):a,o>0&&!i&&yh(e,e._tTime=e._tDur*o),e.parent&&vh(e),n||ps(e.parent,e),e},Nm=function(e){return e instanceof wn?ps(e):ba(e,e._dur)},zM={_start:0,endTime:Bo,totalDuration:Bo},xi=function r(e,t,n){var i=e.labels,s=e._recent||zM,a=e.duration()>=vi?s.endTime(!1):e._dur,o,l,c;return rn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},No=function(e,t,n){var i=pr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;a.immediateRender=$n(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Xt(t[0],a,t[s+1])},Jr=function(e,t){return e||e===0?t(e):t},Vo=function(e,t,n){return n<e?e:n>t?t:n},mn=function(e,t){return!rn(e)||!(t=RM.exec(e))?"":t[1]},VM=function(e,t,n){return Jr(n,function(i){return Vo(e,t,i)})},Lf=[].slice,jm=function(e,t){return e&&Ki(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ki(e[0]))&&!e.nodeType&&e!==Ji},GM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return rn(i)&&!t||jm(i,1)?(s=n).push.apply(s,yi(i)):n.push(i)})||n},yi=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):rn(e)&&!n&&(Cf||!wa())?Lf.call((t||Vf).querySelectorAll(e),0):Tn(e)?GM(e,n):jm(e)?Lf.call(e,0):e?[e]:[]},Df=function(e){return e=yi(e)[0]||Oo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yi(t,n.querySelectorAll?n:n===e?Oo("Invalid scope")||Vf.createElement("div"):e)}},Qm=function(e){return e.sort(function(){return .5-Math.random()})},eg=function(e){if(zt(e))return e;var t=Ki(e)?e:{each:e},n=ms(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return rn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||t).length,p=a[_],m,w,C,y,S,b,E,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,vi])[1],!T){for(E=-vi;E<(E=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(p=a[_]=[],m=l?Math.min(T,_)*h-.5:i%T,w=T===vi?0:l?_*d/T-.5:i/T|0,E=0,x=vi,b=0;b<_;b++)C=b%T-m,y=w-(b/T|0),p[b]=S=c?Math.abs(c==="y"?y:C):km(C*C+y*y),S>E&&(E=S),S<x&&(x=S);i==="random"&&Qm(p),p.max=E-x,p.min=x,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=mn(t.amount||t.each)||0,n=n&&_<0?tb(n):n}return _=(p[u]-p.min)/p.max||0,Ut(p.b+(n?n(_):_)*p.v)+p.u}},Nf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(pr(n)?0:mn(n))}},tg=function(e,t){var n=Tn(e),i,s;return!n&&Ki(e)&&(i=n=e.radius||vi,e.values?(e=yi(e.values),(s=!pr(e[0]))&&(i*=i)):e=Nf(e.increment)),Jr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=vi,h=0,d=e.length,u,f;d--;)s?(u=e[d].x-o,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?e[h]:a,s||h===a||pr(a)?h:h+mn(a)}:Nf(e))},ng=function(e,t,n,i){return Jr(Tn(e)?!t:n===!0?!!(n=0):!i,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},HM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},WM=function(e,t){return function(n){return e(parseFloat(n))+(t||mn(n))}},XM=function(e,t,n){return rg(e,t,0,1,n)},ig=function(e,t,n){return Jr(n,function(i){return e[~~t(i)]})},qM=function r(e,t,n){var i=t-e;return Tn(e)?ig(e,r(0,e.length),t):Jr(n,function(s){return(i+(s-e)%i)%i+e})},YM=function r(e,t,n){var i=t-e,s=i*2;return Tn(e)?ig(e,r(0,e.length-1),t):Jr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ta=function(e){return e.replace(EM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(AM);return ng(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},rg=function(e,t,n,i,s){var a=t-e,o=i-n;return Jr(s,function(l){return n+((l-e)/a*o||0)})},ZM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=rn(e),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=t}else i||(e=Sa(Tn(e)?[]:{},e));if(!h){for(l in t)Jf.call(o,e,l,"get",t[l]);s=function(g){return ed(g,o)||(a?e.p:e)}}}return Jr(n,s)},Um=function(e,t,n){var i=e.labels,s=vi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ri=function(e,t,n){var i=e.vars,s=i[t],a=Lt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qr.length&&fh(),o&&(Lt=o),h=l?s.apply(c,l):s.call(c),Lt=a,h},Io=function(e){return Zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pn),e.progress()<1&&ri(e,"onInterrupt"),e},ya,sg=[],ag=function(e){if(e)if(e=!e.name&&e.default||e,Bf()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Bo,render:ed,add:Jf,kill:ub,modifier:hb,rawVars:0},a={targetTest:0,get:0,getSetter:Sh,aliases:{},register:0};if(wa(),e!==i){if(Zn[t])return;ai(i,ai(dh(e,s),a)),Sa(i.prototype,Sa(s,dh(e,a))),Zn[i.prop=t]=i,e.targetTest&&(ch.push(i),Gf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hm(t,i),e.register&&e.register(En,i,Bn)}else sg.push(e)},Mt=255,Lo={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},Mf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},og=function(e,t,n){var i=e?pr(e)?[e>>16,e>>8&Mt,e&Mt]:0:Lo.black,s,a,o,l,c,h,d,u,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Lo[e])i=Lo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Pm),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Mf(l+1/3,s,a),i[1]=Mf(l,s,a),i[2]=Mf(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(kf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Pm)||Lo.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Mt,a=i[1]/Mt,o=i[2]/Mt,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},lg=function(e){var t=[],n=[],i=-1;return e.split(dr).forEach(function(s){var a=s.match(_s)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Fm=function(e,t,n){var i="",s=(e+i).match(dr),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=og(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=lg(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(dr,"1").split(_s),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(dr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},dr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Lo)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),JM=/hsl[a]?\(/,Yf=function(e){var t=e.join(" "),n;if(dr.lastIndex=0,dr.test(t))return n=JM.test(t),e[1]=Fm(e[1],n),e[0]=Fm(e[0],n,lg(e[1])),!0},ko,Jn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,f,g=function _(p){var m=r()-i,w=p===!0,C,y,S,b;if((m>e||m<0)&&(n+=m-t),i+=m,S=i-n,C=S-a,(C>0||w)&&(b=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=C+(C>=s?4:s-C),y=1),w||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](S,u,b,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return u/(1e3/(p||60))},wake:function(){Vm&&(!Cf&&Bf()&&(Ji=Cf=window,Vf=Ji.document||{},si.gsap=En,(Ji.gsapVersions||(Ji.gsapVersions=[])).push(En.version),Gm(uh||Ji.GreenSockGlobals||!Ji.gsap&&Ji||{}),sg.forEach(ag)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},ko=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ko=0,c=Bo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,w){var C=m?function(y,S,b,E){p(y,S,b,E),d.remove(C)}:p;return d.remove(p),o[w?"unshift":"push"](C),wa(),C},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),wa=function(){return!ko&&Jn.wake()},ut={},$M=/^[\d.\-M][\d.\-,\s]/,KM=/["']/g,jM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(KM,"").trim():+c,i=l.substr(o+1).trim();return t},QM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},eb=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[jM(t[1])]:QM(e).split(",").map(qm)):ut._CE&&$M.test(e)?ut._CE("",e):n},tb=function(e){return function(t){return 1-e(1-t)}},ms=function(e,t){return e&&(zt(e)?e:ut[e]||eb(e))||t},vs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return On(e,function(o){ut[o]=si[o]=s,ut[a=o.toLowerCase()]=n;for(var l in s)ut[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[o+"."+l]=s[l]}),s},cg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},bf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Af*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*TM((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:cg(o);return s=Af/s,l.config=function(c,h){return r(e,c,h)},l},wf=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:cg(n);return i.config=function(s){return r(e,s)},i};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;vs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;vs("Elastic",bf("in"),bf("out"),bf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};vs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);vs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});vs("Circ",function(r){return-(km(1-r*r)-1)});vs("Sine",function(r){return r===1?1:-wM(r*MM)+1});vs("Back",wf("in"),wf("out"),wf());ut.SteppedEase=ut.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-bt;return function(o){return((i*Vo(0,a,o)|0)+s)*n}}};Fo.ease=ut["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Hf+=r+","+r+"Params,"});var Zf=function(e,t){this.id=bM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xf,this.set=t?t.getSetter:Sh},zo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ba(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),ko||Jn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ba(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(wa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yh(this,n),!s._dp||s.parent||Jm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$i(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Xm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Dm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Dm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ma(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ph(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(Vo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),vh(this),UM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$i(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ph(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=IM);var i=pn;return pn=n,qf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Nm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Nm(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(xi(this,n),$n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=zt(n)?n:Ym,l=function(){var h=i.then;i.then=null,s&&s(),zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Io(this)},r})();ai(zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var wn=(function(r){Bm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=$n(n.sortChildren),Ft&&$i(n.parent||Ft,fr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&$m(fr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return No(0,arguments,this),this},t.from=function(i,s,a){return No(1,arguments,this),this},t.fromTo=function(i,s,a,o){return No(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(i,s,xi(this,a),1),this},t.call=function(i,s,a){return $i(this,Xt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Xt(i,a,xi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Do(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,Do(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ut(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,g,_,p,m,w,C,y,S,b,E;if(this!==Ft&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,C=this._ts,m=!C,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(u=Ut(h%p),h===l?(_=this._repeat,u=c):(S=Ut(h/p),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=Ma(this._tTime,p),!o&&this._tTime&&S!==_&&this._tTime-S*p-this._dur<=0&&(S=_),b&&_&1&&(u=c-u,E=1),_!==S&&!this._lock){var x=b&&S&1,T=x===(b&&_&1);if(_<S&&(x=!x),o=x?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Ut(_*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=kM(this,Ut(o),Ut(u)),w&&(h-=u-(u=w._start))),this._tTime=h,this._time=u,this._act=!!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!S&&(ri(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=-bt);break}}f=g}else{f=this._last;for(var A=i<0?i:u;f;){if(g=f._prev,(f._act||A<=f._end)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,a||pn&&qf(f)),u!==this._time||!this._ts&&!m){w=0,g&&(h+=this._zTime=A?-bt:bt);break}}f=g}}if(w&&!s&&(this.pause(),w.render(u>=o?0:-bt)._zTime=u>=o?1:-1,this._ts))return this._start=y,vh(this),this.render(i,s,a);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Zr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(ri(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(pr(s)||(s=xi(this,s,i)),!(i instanceof zo)){if(Tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(rn(i))return this.addLabel(i,s);if(zt(i))i=Xt.delayedCall(0,i);else return this}return this!==i?$i(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-vi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Xt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return rn(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&xh(this,i),i===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Jn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=xi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Xt.delayedCall(0,s||Bo,a);return o.data="isPause",this._hasPause=1,$i(this,o,xi(this,i))},t.removePause=function(i){var s=this._first;for(i=xi(this,i);s;)s._start===i&&s.data==="isPause"&&Zr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Xr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=yi(i),l=this._first,c=pr(s),h;l;)l instanceof Xt?LM(l._targets,o)&&(c?(!Xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=xi(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=Xt.to(a,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||bt,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&ba(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ai({startAt:{time:xi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Um(this,xi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Um(this,xi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ut(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ps(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=vi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,$i(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ut(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ba(a,a===Ft&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ft._ts&&(Xm(Ft,ph(i,Ft)),Wm=Jn.frame),Jn.frame>=Im){Im+=Kn.autoSleep||120;var s=Ft._first;if((!s||!s._ts)&&Kn.autoSleep&&Jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jn.sleep()}}},e})(zo);ai(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var nb=function(e,t,n,i,s,a,o){var l=new Bn(this._pt,e,t,0,1,Qf,null,s),c=0,h=0,d,u,f,g,_,p,m,w;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ta(i)),a&&(w=[n,i],a(w,e,t),n=w[0],i=w[1]),u=n.match(yf)||[];d=yf.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(p=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?xs(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},c=yf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(zf.test(i)||m)&&(l.e=0),this._pt=l,l},Jf=function(e,t,n,i,s,a,o,l,c,h){zt(i)&&(i=i(s||0,e,a));var d=e[t],u=n!=="get"?n:zt(d)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=zt(d)?c?ob:fg:jf,g;if(rn(i)&&(~i.indexOf("random(")&&(i=Ta(i)),i.charAt(1)==="="&&(g=xs(u,i)+(mn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Uf)return!isNaN(u*i)&&i!==""?(g=new Bn(this._pt,e,t,+u||0,i-(u||0),typeof d=="boolean"?cb:dg,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&_h(t,i),nb.call(this,e,t,u,i,f,l||Kn.stringFilter,c))},ib=function(e,t,n,i,s){if(zt(e)&&(e=Uo(e,s,t,n,i)),!Ki(e)||e.style&&e.nodeType||Tn(e)||zm(e))return rn(e)?Uo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Uo(e[o],s,t,n,i);return a},$f=function(e,t,n,i,s,a){var o,l,c,h;if(Zn[e]&&(o=new Zn[e]).init(s,o.rawVars?t[e]:ib(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Bn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ya))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Xr,Uf,Kf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,w=m&&m.data==="nested"?m.vars.targets:p,C=e._overwrite==="auto"&&!Of,y=e.timeline,S=i.easeReverse||d,b,E,x,T,A,L,D,O,I,B,q,z,j;if(y&&(!u||!s)&&(s="none"),e._ease=ms(s,Fo.ease),e._rEase=S&&(ms(S)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||u&&!i.stagger){if(O=p[0]?Yr(p[0]).harness:0,z=O&&i[O.prop],b=dh(i,Gf),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?lh:PM),_._lazy=0),a){if(Zr(e._startAt=Xt.set(p,ai({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn||!o&&!f)&&e._startAt.revert(lh),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),x=ai({overwrite:!1,data:"isFromStart",lazy:o&&!_&&$n(l),immediateRender:o,stagger:0,parent:m},b),z&&(x[O.prop]=z),Zr(e._startAt=Xt.set(p,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pn?e._startAt.revert(lh):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&$n(l)||l&&!g,E=0;E<p.length;E++){if(A=p[E],D=A._gsap||Wf(p)[E]._gsap,e._ptLookup[E]=B={},Rf[D.id]&&qr.length&&fh(),q=w===p?E:w.indexOf(A),O&&(I=new O).init(A,z||b,e,q,w)!==!1&&(e._pt=T=new Bn(e._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){B[H]=T}),I.priority&&(L=1)),!O||z)for(x in b)Zn[x]&&(I=$f(x,b,e,q,A,w))?I.priority&&(L=1):B[x]=T=Jf.call(e,A,x,"get",b[x],q,w,0,i.stringFilter);e._op&&e._op[E]&&e.kill(A,e._op[E]),C&&e._pt&&(Xr=e,Ft.killTweensOf(A,B,e.globalTime(t)),j=!e.parent,Xr=0),e._pt&&l&&(Rf[D.id]=1)}L&&td(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,u&&t<=0&&y.render(vi,!0,!0)},rb=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Uf=1,e.vars[t]="+=0",Kf(e,o),Uf=0,l?Oo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Vt(n)+mn(d.e)),d.b&&(d.b=h.s+mn(d.b))},sb=function(e,t){var n=e[0]?Yr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Sa({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ab=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Uo=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):rn(e)&&~e.indexOf("random(")?Ta(e):e},hg=Hf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",ug={};On(hg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ug[r]=1});var Xt=(function(r){Bm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Do(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=i.parent||Ft,w=(Tn(n)||zm(n)?pr(n[0]):"length"in i)?[n]:yi(n),C,y,S,b,E,x,T,A;if(o._targets=w.length?Wf(w):Oo("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||oh(c)||oh(h)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(C=o.timeline=new wn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:w}),C.kill(),C.parent=C._dp=fr(o),C._start=0,u||oh(c)||oh(h)){if(b=w.length,T=u&&eg(u),Ki(u))for(E in u)~hg.indexOf(E)&&(A||(A={}),A[E]=u[E]);for(y=0;y<b;y++)S=dh(i,ug),S.stagger=0,L&&(S.easeReverse=L),A&&Sa(S,A),x=w[y],S.duration=+Uo(c,fr(o),y,x,w),S.delay=(+Uo(h,fr(o),y,x,w)||0)-o._delay,!u&&b===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),C.to(x,S,T?T(y,x,w):0),C._ease=ut.none;C.duration()?c=h=0:o.timeline=0}else if(g){Do(ai(C.vars.defaults,{ease:"none"})),C._ease=ms(g.ease||i.ease||"none");var D=0,O,I,B;if(Tn(g))g.forEach(function(q){return C.to(w,q,">")}),C.duration();else{S={};for(E in g)E==="ease"||E==="easeEach"||ab(E,g[E],S,g.easeEach);for(E in S)for(O=S[E].sort(function(q,z){return q.t-z.t}),D=0,y=0;y<O.length;y++)I=O[y],B={ease:I.e,duration:(I.t-(y?O[y-1].t:0))/100*c},B[E]=I.v,C.to(w,B,D),D+=B.duration;C.duration()<c&&C.to({},{duration:c-C.duration()})}}c||o.duration(c=C.duration())}else o.timeline=0;return f===!0&&!Of&&(Xr=fr(o),Ft.killTweensOf(w),Xr=0),$i(m,fr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Ut(m._time)&&$n(d)&&FM(fr(o))&&m.data!=="nested")&&(o._tTime=-bt,o.render(Math.max(0,-h)||0)),p&&$m(fr(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-bt&&!h?l:i<bt?0:i,u,f,g,_,p,m,w,C;if(!c)BM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,C=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Ut(d%_),d===l?(g=this._repeat,u=c):(p=Ut(d/_),g=~~p,g&&g===p?(u=c,g--):u>c&&(u=c)),m=this._yoyo&&g&1,m&&(u=c-u),p=Ma(this._tTime,_),u===o&&!a&&this._initted&&g===p)return this._tTime=d,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Ut(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Km(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var S=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(u/c);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!p&&(ri(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(w,f.d),f=f._next;C&&C.render(i<0?i:C._dur*C._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Pf(this,i,s,a),ri(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Pf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Zr(this,1),!s&&!(h&&!o)&&(d||o||m)&&(ri(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ko||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Kf(this,c),h=this._ease(c/this._dur),rb(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(yh(this,0),this.parent||Zm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xr&&Xr.vars.overwrite!==!0)._first||Io(this),this.parent&&a!==this.timeline.totalDuration()&&ba(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?yi(i):o,c=this._ptLookup,h=this._pt,d,u,f,g,_,p,m;if((!s||s==="all")&&NM(o,l))return s==="all"&&(this._pt=0),Io(this);for(d=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},On(s,function(w){return _[w]=1}),s=_),s=sb(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){u=c[m],s==="all"?(d[m]=s,g=u,f={}):(f=d[m]=d[m]||{},g=s);for(_ in g)p=u&&u[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&xh(this,p,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Io(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return No(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return No(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ft.killTweensOf(i,s,a)},e})(zo);ai(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var e=new wn,t=Lf.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var jf=function(e,t,n){return e[t]=n},fg=function(e,t,n){return e[t](n)},ob=function(e,t,n,i){return e[t](i.fp,n)},lb=function(e,t,n){return e.setAttribute(t,n)},Sh=function(e,t){return zt(e[t])?fg:gh(e[t])&&e.setAttribute?lb:jf},dg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},cb=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Qf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},ed=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},hb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},ub=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?xh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},fb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},td=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Bn=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||dg,this.d=l||this,this.set=c||jf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=fb,this.m=n,this.mt=s,this.tween=i},r})();On(Hf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Gf[r]=1});si.TweenMax=si.TweenLite=Xt;si.TimelineLite=si.TimelineMax=wn;Ft=new wn({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=Yf;var gs=[],hh={},db=[],Om=0,pb=0,Tf=function(e){return(hh[e]||db).map(function(t){return t()})},Ff=function(){var e=Date.now(),t=[];e-Om>2&&(Tf("matchMediaInit"),gs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Ji.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Tf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Om=e,Tf("matchMedia"))},pg=(function(){function r(t,n){this.selector=n&&Df(n),this.data=[],this._r=[],this.isReverted=!1,this.id=pb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var a=this,o=function(){var c=Lt,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Df(s)),Lt=a,d=i.apply(a,arguments),zt(d)&&a._r.push(d),Lt=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=gs.length;a--;)gs[a].id===this.id&&gs.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),mb=(function(){function r(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ki(n)||(n={matches:n});var a=new pg(0,s||this.scope),o=a.conditions={},l,c,h;Lt&&!a.selector&&(a.selector=Lt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Ji.matchMedia(n[c]),l&&(gs.indexOf(a)<0&&gs.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ff):l.addEventListener("change",Ff)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),mh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ag(i)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){rn(e)&&(e=yi(e)[0]);var s=Yr(e||{}).get,a=n?Ym:qm;return n==="native"&&(n=""),e&&(t?a((Zn[t]&&Zn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Zn[o]&&Zn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=yi(e),e.length>1){var i=e.map(function(h){return En.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var a=Zn[t],o=Yr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;ya._pt=0,d.init(e,n?h+n:h,ya,0,[e]),d.render(1,d),ya._pt&&ed(1,ya)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=En.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,Fo.ease)),Lm(Fo,e||{})},config:function(e){return Lm(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Zn[o]&&!si[o]&&Oo(t+" effect requires "+o+" plugin.")}),Sf[t]=function(o,l,c){return n(yi(o),ai(l||{},s),c)},a&&(wn.prototype[t]=function(o,l,c){return this.add(Sf[t](o,Ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):ut},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),i,s;for(n.smoothChildTiming=$n(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Xt&&i.vars.onComplete===i._targets[0]))&&$i(n,i,i._start-i._delay),i=s;return $i(Ft,n,0),n},context:function(e,t){return e?new pg(e,t):Lt},matchMedia:function(e){return new mb(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Ff()},addEventListener:function(e,t){var n=hh[e]||(hh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=hh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:qM,wrapYoyo:YM,distribute:eg,random:ng,snap:tg,normalize:XM,getUnit:mn,clamp:VM,splitColor:og,toArray:yi,selector:Df,mapRange:rg,pipe:HM,unitize:WM,interpolate:ZM,shuffle:Qm},install:Gm,effects:Sf,ticker:Jn,updateRoot:wn.updateRoot,plugins:Zn,globalTimeline:Ft,core:{PropTween:Bn,globals:Hm,Tween:Xt,Timeline:wn,Animation:zo,getCache:Yr,_removeLinkedListItem:xh,reverting:function(){return pn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Of=e}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return mh[r]=Xt[r]});Jn.add(wn.updateRoot);ya=mh.to({},{duration:0});var gb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_b=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=gb(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ef=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(rn(s)&&(l={},On(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}_b(o,s)}}}},En=mh.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ef("roundProps",Nf),Ef("modifiers"),Ef("snap",tg))||mh;Xt.version=wn.version=En.version="3.15.0";Vm=1;Bf()&&wa();var xb=ut.Power0,vb=ut.Power1,yb=ut.Power2,Sb=ut.Power3,Mb=ut.Power4,bb=ut.Linear,wb=ut.Quad,Tb=ut.Cubic,Eb=ut.Quart,Ab=ut.Quint,Cb=ut.Strong,Rb=ut.Elastic,Pb=ut.Back,Ib=ut.SteppedEase,Lb=ut.Bounce,Db=ut.Sine,Nb=ut.Expo,Ub=ut.Circ;var mg,$r,Aa,od,bs,Fb,gg,ld,Ob=function(){return typeof window<"u"},gr={},Ms=180/Math.PI,Ca=Math.PI/180,Ea=Math.atan2,_g=1e8,cd=/([A-Z])/g,Bb=/(left|right|width|margin|padding|x)/i,kb=/[\s,\(]\S/,ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},id=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Hb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Tg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Eg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Wb=function(e,t,n){return e.style[t]=n},Xb=function(e,t,n){return e.style.setProperty(t,n)},qb=function(e,t,n){return e._gsap[t]=n},Yb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Zb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Jb=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ot="transform",jn=Ot+"Origin",$b=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in gr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ji[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=mr(i,o)}):this.tfm[e]=a.x?a[e]:mr(i,e),e===jn&&(this.tfm.zOrigin=a.zOrigin);else return ji.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ot)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},Ag=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Kb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ld(),(!s||!s.isStart)&&!n[Ot]&&(Ag(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cg=function(e,t){var n={target:e,props:[],revert:Kb,save:$b};return e._gsap||En.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Rg,rd=function(e,t){var n=$r.createElementNS?$r.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):$r.createElement(e);return n&&n.style?n:$r.createElement(e)},oi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ra(t)||t,1)||""},xg="O,Moz,ms,Ms,Webkit".split(","),Ra=function(e,t,n){var i=t||bs,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(xg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?xg[a]:"")+e},sd=function(){Ob()&&window.document&&(mg=window,$r=mg.document,Aa=$r.documentElement,bs=rd("div")||{style:{}},Fb=rd("div"),Ot=Ra(Ot),jn=Ot+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rg=!!Ra("perspective"),ld=En.core.reverting,od=1)},vg=function(e){var t=e.ownerSVGElement,n=rd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Aa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Aa.removeChild(n),s},yg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Pg=function(e){var t,n;try{t=e.getBBox()}catch{t=vg(e),n=1}return t&&(t.width||t.height)||n||(t=vg(e)),t&&!t.width&&!t.x&&!t.y?{x:+yg(e,["x","cx","x1"])||0,y:+yg(e,["y","cy","y1"])||0,width:0,height:0}:t},Ig=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pg(e))},jr=function(e,t){if(t){var n=e.style,i;t in gr&&t!==jn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cd,"-$1").toLowerCase())):n.removeAttribute(t)}},Kr=function(e,t,n,i,s,a){var o=new Bn(e._pt,t,n,0,1,a?Eg:Tg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Sg={deg:1,rad:1,turn:1},jb={grid:1,flex:1},Qr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=bs.style,l=Bb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||Sg[i]||Sg[a])return s;if(a!=="px"&&!u&&(s=r(e,t,n,"px")),m=e.getCTM&&Ig(e),(f||a==="%")&&(gr[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Vt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===$r||!_.appendChild)&&(_=$r.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Jn.time&&!p.uncache)return Vt(s/p.width*d);if(f&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=d+i,g=e[h],w?e.style[t]=w:jr(e,t)}else(f||a==="%")&&!jb[oi(_,"display")]&&(o.position=oi(e,"position")),_===e&&(o.position="static"),_.appendChild(bs),g=bs[h],_.removeChild(bs),o.position="absolute";return l&&f&&(p=Yr(_),p.time=Jn.time,p.width=_[h]),Vt(u?g*s/d:g&&s?d/g*s:0)},mr=function(e,t,n,i){var s;return od||sd(),t in ji&&t!=="transform"&&(t=ji[t],~t.indexOf(",")&&(t=t.split(",")[0])),gr[t]&&t!=="transform"?(s=Wo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:bh(oi(e,jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Mh[t]&&Mh[t](e,t,n)||oi(e,t)||Xf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qr(e,t,s,n)+n:s},Qb=function(e,t,n,i){if(!n||n==="none"){var s=Ra(t,e,1),a=s&&oi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var o=new Bn(this._pt,e.style,t,0,1,Qf),l=0,c=0,h,d,u,f,g,_,p,m,w,C,y,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=oi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=oi(e,t)||i,_?e.style[t]=_:jr(e,t)),h=[n,i],Yf(h),n=h[0],i=h[1],u=n.match(_s)||[],S=i.match(_s)||[],S.length){for(;d=_s.exec(i);)p=d[0],w=i.substring(l,d.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),p!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),p.charAt(1)==="="&&(p=xs(f,p)+y),m=parseFloat(p),C=p.substr((m+"").length),l=_s.lastIndex-C.length,C||(C=C||Kn.units[t]||y,l===i.length&&(i+=C,o.e+=C)),y!==C&&(f=Qr(e,t,_,C)||0),o._pt={_next:o._pt,p:w||c===1?w:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Eg:Tg;return zf.test(i)&&(o.e=0),this._pt=o,o},Mg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ew=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Mg[n]||n,t[1]=Mg[i]||i,t.join(" ")},tw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],gr[o]&&(l=1,o=o==="transformOrigin"?jn:Ot),jr(n,o);l&&(jr(n,Ot),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wo(n,1),a.uncache=1,Ag(i)))}},Mh={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Bn(e._pt,t,n,0,0,tw);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ho=[1,0,0,1,0,0],Lg={},Dg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},bg=function(e){var t=oi(e,Ot);return Dg(t)?Ho:t.substr(7).match(kf).map(Vt)},hd=function(e,t){var n=e._gsap||Yr(e),i=e.style,s=bg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ho:s):(s===Ho&&!e.offsetParent&&e!==Aa&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Aa.appendChild(e)),s=bg(e),l?i.display=l:jr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Aa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ad=function(e,t,n,i,s,a){var o=e._gsap,l=s||hd(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],g=l[1],_=l[2],p=l[3],m=l[4],w=l[5],C=t.split(" "),y=parseFloat(C[0])||0,S=parseFloat(C[1])||0,b,E,x,T;n?l!==Ho&&(E=f*p-g*_)&&(x=y*(p/E)+S*(-_/E)+(_*w-p*m)/E,T=y*(-g/E)+S*(f/E)-(f*w-g*m)/E,y=x,S=T):(b=Pg(e),y=b.x+(~C[0].indexOf("%")?y/100*b.width:y),S=b.y+(~(C[1]||C[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&o.smooth?(m=y-c,w=S-h,o.xOffset=d+(m*f+w*_)-m,o.yOffset=u+(m*g+w*p)-w):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[jn]="0px 0px",a&&(Kr(a,o,"xOrigin",c,y),Kr(a,o,"yOrigin",h,S),Kr(a,o,"xOffset",d,o.xOffset),Kr(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Wo=function(e,t){var n=e._gsap||new Zf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=oi(e,jn)||"0",h,d,u,f,g,_,p,m,w,C,y,S,b,E,x,T,A,L,D,O,I,B,q,z,j,H,R,K,Se,Me,Ve,ke;return h=d=u=_=p=m=w=C=y=0,f=g=1,n.svg=!!(e.getCTM&&Ig(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),E=hd(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),ad(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,b=n.yOrigin||0,E!==Ho&&(L=E[0],D=E[1],O=E[2],I=E[3],h=B=E[4],d=q=E[5],E.length===6?(f=Math.sqrt(L*L+D*D),g=Math.sqrt(I*I+O*O),_=L||D?Ea(D,L)*Ms:0,w=O||I?Ea(O,I)*Ms+_:0,w&&(g*=Math.abs(Math.cos(w*Ca))),n.svg&&(h-=S-(S*L+b*O),d-=b-(S*D+b*I))):(ke=E[6],Me=E[7],R=E[8],K=E[9],Se=E[10],Ve=E[11],h=E[12],d=E[13],u=E[14],x=Ea(ke,Se),p=x*Ms,x&&(T=Math.cos(-x),A=Math.sin(-x),z=B*T+R*A,j=q*T+K*A,H=ke*T+Se*A,R=B*-A+R*T,K=q*-A+K*T,Se=ke*-A+Se*T,Ve=Me*-A+Ve*T,B=z,q=j,ke=H),x=Ea(-O,Se),m=x*Ms,x&&(T=Math.cos(-x),A=Math.sin(-x),z=L*T-R*A,j=D*T-K*A,H=O*T-Se*A,Ve=I*A+Ve*T,L=z,D=j,O=H),x=Ea(D,L),_=x*Ms,x&&(T=Math.cos(x),A=Math.sin(x),z=L*T+D*A,j=B*T+q*A,D=D*T-L*A,q=q*T-B*A,L=z,B=j),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=Vt(Math.sqrt(L*L+D*D+O*O)),g=Vt(Math.sqrt(q*q+ke*ke)),x=Ea(B,q),w=Math.abs(x)>2e-4?x*Ms:0,y=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dg(oi(e,Ot)),z&&e.setAttribute("transform",z))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(f*=-1,w+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Vt(f),n.scaleY=Vt(g),n.rotation=Vt(_)+o,n.rotationX=Vt(p)+o,n.rotationY=Vt(m)+o,n.skewX=w+o,n.skewY=C+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jn]=bh(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?iw:Rg?Ng:nw,n.uncache=0,n},bh=function(e){return(e=e.split(" "))[0]+" "+e[1]},nd=function(e,t,n){var i=mn(t);return Vt(parseFloat(t)+parseFloat(Qr(e,"x",n+"px",i)))+i},nw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ng(e,t)},ys="0deg",Go="0px",Ss=") ",Ng=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,w=n.target,C=n.zOrigin,y="",S=m==="auto"&&e&&e!==1||m===!0;if(C&&(d!==ys||h!==ys)){var b=parseFloat(h)*Ca,E=Math.sin(b),x=Math.cos(b),T;b=parseFloat(d)*Ca,T=Math.cos(b),a=nd(w,a,E*T*-C),o=nd(w,o,-Math.sin(b)*-C),l=nd(w,l,x*T*-C+C)}p!==Go&&(y+="perspective("+p+Ss),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||a!==Go||o!==Go||l!==Go)&&(y+=l!==Go||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ss),c!==ys&&(y+="rotate("+c+Ss),h!==ys&&(y+="rotateY("+h+Ss),d!==ys&&(y+="rotateX("+d+Ss),(u!==ys||f!==ys)&&(y+="skew("+u+", "+f+Ss),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ss),w.style[Ot]=y||"translate(0, 0)"},iw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,w=n.forceCSS,C=parseFloat(a),y=parseFloat(o),S,b,E,x,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ca,c*=Ca,S=Math.cos(l)*d,b=Math.sin(l)*d,E=Math.sin(l-c)*-u,x=Math.cos(l-c)*u,c&&(h*=Ca,T=Math.tan(c-h),T=Math.sqrt(1+T*T),E*=T,x*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),S*=T,b*=T)),S=Vt(S),b=Vt(b),E=Vt(E),x=Vt(x)):(S=d,x=u,b=E=0),(C&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(C=Qr(f,"x",a,"px"),y=Qr(f,"y",o,"px")),(g||_||p||m)&&(C=Vt(C+g-(g*S+_*E)+p),y=Vt(y+_-(g*b+_*x)+m)),(i||s)&&(T=f.getBBox(),C=Vt(C+i/100*T.width),y=Vt(y+s/100*T.height)),T="matrix("+S+","+b+","+E+","+x+","+C+","+y+")",f.setAttribute("transform",T),w&&(f.style[Ot]=T)},rw=function(e,t,n,i,s){var a=360,o=rn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ms:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*_g)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*_g)%a-~~(c/a)*a)),e._pt=u=new Bn(e._pt,t,n,i,c,zb),u.e=h,u.u="deg",e._props.push(n),u},wg=function(e,t){for(var n in t)e[n]=t[n];return e},sw=function(e,t,n){var i=wg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ot]=t,o=Wo(n,1),jr(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],a[Ot]=t,o=Wo(n,1),a[Ot]=c);for(l in gr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=mn(c),g=mn(h),d=f!==g?Qr(n,l,c,g):parseFloat(c),u=parseFloat(h),e._pt=new Bn(e._pt,o,l,d,u-d,id),e._pt.u=g||0,e._props.push(l));wg(o,i)};On("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Mh[e>1?"border"+r:r]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return mr(o,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,d)}});var ud={name:"css",register:sd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,u,f,g,_,p,m,w,C,y,S,b,E,x,T;od||sd(),this.styles=this.styles||Cg(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Zn[_]&&$f(_,t,n,i,e,s)))){if(f=typeof h,g=Mh[_],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ta(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",dr.lastIndex=0,dr.test(c)||(p=mn(c),m=mn(h),m?p!==m&&(c=Qr(e,_,c,m)+m):p&&(h+=p)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=Ta(c)),mn(c+"")||c==="auto"||(c+=Kn.units[_]||mn(mr(e,_))||""),(c+"").charAt(1)==="="&&(c=mr(e,_))):c=mr(e,_),u=parseFloat(c),w=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),d=parseFloat(h),_ in ji&&(_==="autoAlpha"&&(u===1&&mr(e,"visibility")==="hidden"&&d&&(u=0),x.push("visibility",0,o.visibility),Kr(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ji[_],~_.indexOf(",")&&(_=_.split(",")[0]))),C=_ in gr,C){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=oi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=h,h=oi(e,"perspective"),A?e.style.perspective=A:jr(e,"perspective")}d=parseFloat(h)}if(y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Wo(e,t.parseTransform),b=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new Bn(this._pt,o,Ot,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new Bn(this._pt,S,"scaleY",S.scaleY,(w?xs(S.scaleY,w+d):d)-S.scaleY||0,id),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(jn,0,o[jn]),h=ew(h),S.svg?ad(e,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==S.zOrigin&&Kr(this,S,"zOrigin",S.zOrigin,m),Kr(this,o,_,bh(c),bh(h)));continue}else if(_==="svgOrigin"){ad(e,h,1,b,0,this);continue}else if(_ in Lg){rw(this,S,_,u,w?xs(u,w+h):h);continue}else if(_==="smoothOrigin"){Kr(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){sw(this,h,e);continue}}else _ in o||(_=Ra(_)||_);if(C||(d||d===0)&&(u||u===0)&&!kb.test(h)&&_ in o)p=(c+"").substr((u+"").length),d||(d=0),m=mn(h)||(_ in Kn.units?Kn.units[_]:p),p!==m&&(u=Qr(e,_,c,m)),this._pt=new Bn(this._pt,C?S:o,_,u,(w?xs(u,w+d):d)-u,!C&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?Hb:id),this._pt.u=m||0,C&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=Gb):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Vb);else if(_ in o)Qb.call(this,e,_,c,w?w+h:h);else if(_ in e)this.add(e,_,c||e[_],w?w+h:h,i,s);else if(_!=="parseTransform"){_h(_,h);continue}C||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,c||e[_])),a.push(_)}}E&&td(this)},render:function(e,t){if(t.tween._time||!ld())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:mr,aliases:ji,getSetter:function(e,t,n){var i=ji[t];return i&&i.indexOf(",")<0&&(t=i),t in gr&&t!==jn&&(e._gsap.x||mr(e,"x"))?n&&gg===n?t==="scale"?Yb:qb:(gg=n||{})&&(t==="scale"?Zb:Jb):e.style&&!gh(e.style[t])?Wb:~t.indexOf("-")?Xb:Sh(e,t)},core:{_removeProperty:jr,_getMatrix:hd}};En.utils.checkPrefix=Ra;En.core.getStyleSaver=Cg;(function(r,e,t,n){var i=On(r+","+e+","+t,function(s){gr[s]=1});On(e,function(s){Kn.units[s]="deg",Lg[s]=1}),ji[i[13]]=r+","+e,On(n,function(s){var a=s.split(":");ji[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"});En.registerPlugin(ud);var es=En.registerPlugin(ud)||En,yA=es.core.Tween;function Ug(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function aw(r,e,t){return e&&Ug(r.prototype,e),t&&Ug(r,t),r}var gn,Eh,ow,li,ts,ns,Ia,Og,ws,La,Bg,_r,Ni,kg,zg=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},Vg=1,Pa=[],tt=[],Ui=[],qo=Date.now,fd=function(e,t){return t},lw=function(){var e=La.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,tt),i.push.apply(i,Ui),tt=n,Ui=i,fd=function(a,o){return t[a](o)}},vr=function(e,t){return~Ui.indexOf(e)&&Ui[Ui.indexOf(e)+1][t]},Yo=function(e){return!!~Bg.indexOf(e)},zn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},kn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},wh="scrollLeft",Th="scrollTop",dd=function(){return _r&&_r.isPressed||tt.cache++},Ah=function(e,t){var n=function i(s){if(s||s===0){Vg&&(li.history.scrollRestoration="manual");var a=_r&&_r.isPressed;s=i.v=Math.round(s)||(_r&&_r.iOS?1:0),e(s),i.cacheID=tt.cache,a&&fd("ss",s)}else(t||tt.cache!==i.cacheID||fd("ref"))&&(i.cacheID=tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:wh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ah(function(r){return arguments.length?li.scrollTo(r,$t.sc()):li.pageXOffset||ts[wh]||ns[wh]||Ia[wh]||0})},$t={s:Th,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:Ah(function(r){return arguments.length?li.scrollTo(An.sc(),r):li.pageYOffset||ts[Th]||ns[Th]||Ia[Th]||0})},Vn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},cw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},xr=function(e,t){var n=t.s,i=t.sc;Yo(e)&&(e=ts.scrollingElement||ns);var s=tt.indexOf(e),a=i===$t.sc?1:2;!~s&&(s=tt.push(e)-1),tt[s+a]||zn(e,"scroll",dd);var o=tt[s+a],l=o||(tt[s+a]=Ah(vr(e,n),!0)||(Yo(e)?i:Ah(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},Ch=function(e,t,n){var i=e,s=e,a=qo(),o=a,l=t||50,c=Math.max(500,l*3),h=function(g,_){var p=qo();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(g){var _=o,p=s,m=qo();return(g||g===0)&&g!==i&&h(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:h,reset:d,getVelocity:u}},Xo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Fg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Gg=function(){La=gn.core.globals().ScrollTrigger,La&&La.core&&lw()},Hg=function(e){return gn=e||zg(),!Eh&&gn&&typeof document<"u"&&document.body&&(li=window,ts=document,ns=ts.documentElement,Ia=ts.body,Bg=[li,ts,ns,Ia],ow=gn.utils.clamp,kg=gn.core.context||function(){},ws="onpointerenter"in Ia?"pointer":"mouse",Og=Gt.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ni=Gt.eventTypes=("ontouchstart"in ns?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ns?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Vg=0},500),Eh=1),La||Gg(),Eh};An.op=$t;tt.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Eh||Hg(gn)||console.warn("Please gsap.registerPlugin(Observer)"),La||Gg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,w=n.onDrag,C=n.onPress,y=n.onRelease,S=n.onRight,b=n.onLeft,E=n.onUp,x=n.onDown,T=n.onChangeX,A=n.onChangeY,L=n.onChange,D=n.onToggleX,O=n.onToggleY,I=n.onHover,B=n.onHoverEnd,q=n.onMove,z=n.ignoreCheck,j=n.isNormalizer,H=n.onGestureStart,R=n.onGestureEnd,K=n.onWheel,Se=n.onEnable,Me=n.onDisable,Ve=n.onClick,ke=n.scrollSpeed,He=n.capture,J=n.allowClicks,ee=n.lockAxis,_e=n.onLockAxis;this.target=o=Vn(o)||ns,this.vars=n,f&&(f=gn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,ke=ke||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(Ia).lineHeight)||22);var Oe,me,Ue,Be,Pe,Xe,Ke,V=this,it=0,xt=0,Dt=n.passive||!h&&n.passive!==!1,qe=xr(o,An),dt=xr(o,$t),F=qe(),It=dt(),We=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ni[0]==="pointerdown",P=Yo(o),v=o.ownerDocument||ts,k=[0,0,0],W=[0,0,0],$=0,ce=function(){return $=qo()},ae=function(re,De){return(V.event=re)&&f&&cw(re.target,f)||De&&We&&re.pointerType!=="touch"||z&&z(re,De)},Q=function(){V._vx.reset(),V._vy.reset(),me.pause(),d&&d(V)},ne=function(){var re=V.deltaX=Fg(k),De=V.deltaY=Fg(W),se=Math.abs(re)>=i,Ne=Math.abs(De)>=i;L&&(se||Ne)&&L(V,re,De,k,W),se&&(S&&V.deltaX>0&&S(V),b&&V.deltaX<0&&b(V),T&&T(V),D&&V.deltaX<0!=it<0&&D(V),it=V.deltaX,k[0]=k[1]=k[2]=0),Ne&&(x&&V.deltaY>0&&x(V),E&&V.deltaY<0&&E(V),A&&A(V),O&&V.deltaY<0!=xt<0&&O(V),xt=V.deltaY,W[0]=W[1]=W[2]=0),(Be||Ue)&&(q&&q(V),Ue&&(p&&Ue===1&&p(V),w&&w(V),Ue=0),Be=!1),Xe&&!(Xe=!1)&&_e&&_e(V),Pe&&(K(V),Pe=!1),Oe=0},fe=function(re,De,se){k[se]+=re,W[se]+=De,V._vx.update(re),V._vy.update(De),c?Oe||(Oe=requestAnimationFrame(ne)):ne()},Ee=function(re,De){ee&&!Ke&&(V.axis=Ke=Math.abs(re)>Math.abs(De)?"x":"y",Xe=!0),Ke!=="y"&&(k[2]+=re,V._vx.update(re,!0)),Ke!=="x"&&(W[2]+=De,V._vy.update(De,!0)),c?Oe||(Oe=requestAnimationFrame(ne)):ne()},de=function(re){if(!ae(re,1)){re=Xo(re,h);var De=re.clientX,se=re.clientY,Ne=De-V.x,Ae=se-V.y,Ye=V.isDragging;V.x=De,V.y=se,(Ye||(Ne||Ae)&&(Math.abs(V.startX-De)>=s||Math.abs(V.startY-se)>=s))&&(Ue||(Ue=Ye?2:1),Ye||(V.isDragging=!0),Ee(Ne,Ae))}},ue=V.onPress=function(oe){ae(oe,1)||oe&&oe.button||(V.axis=Ke=null,me.pause(),V.isPressed=!0,oe=Xo(oe),it=xt=0,V.startX=V.x=oe.clientX,V.startY=V.y=oe.clientY,V._vx.reset(),V._vy.reset(),zn(j?o:v,Ni[1],de,Dt,!0),V.deltaX=V.deltaY=0,C&&C(V))},le=V.onRelease=function(oe){if(!ae(oe,1)){kn(j?o:v,Ni[1],de,!0);var re=!isNaN(V.y-V.startY),De=V.isDragging,se=De&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ne=Xo(oe);!se&&re&&(V._vx.reset(),V._vy.reset(),h&&J&&gn.delayedCall(.08,function(){if(qo()-$>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(v.createEvent){var Ae=v.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,li,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Ae)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&De&&!j&&me.restart(!0),Ue&&ne(),m&&De&&m(V),y&&y(V,se)}},Ie=function(re){return re.touches&&re.touches.length>1&&(V.isGesturing=!0)&&H(re,V.isDragging)},Fe=function(){return(V.isGesturing=!1)||R(V)},N=function(re){if(!ae(re)){var De=qe(),se=dt();fe((De-F)*ke,(se-It)*ke,1),F=De,It=se,d&&me.restart(!0)}},he=function(re){if(!ae(re)){re=Xo(re,h),K&&(Pe=!0);var De=(re.deltaMode===1?l:re.deltaMode===2?li.innerHeight:1)*g;fe(re.deltaX*De,re.deltaY*De,0),d&&!j&&me.restart(!0)}},te=function(re){if(!ae(re)){var De=re.clientX,se=re.clientY,Ne=De-V.x,Ae=se-V.y;V.x=De,V.y=se,Be=!0,d&&me.restart(!0),(Ne||Ae)&&Ee(Ne,Ae)}},pe=function(re){V.event=re,I(V)},xe=function(re){V.event=re,B(V)},ie=function(re){return ae(re)||Xo(re,h)&&Ve(V)};me=V._dc=gn.delayedCall(u||.25,Q).pause(),V.deltaX=V.deltaY=0,V._vx=Ch(0,50,!0),V._vy=Ch(0,50,!0),V.scrollX=qe,V.scrollY=dt,V.isDragging=V.isGesturing=V.isPressed=!1,kg(this),V.enable=function(oe){return V.isEnabled||(zn(P?v:o,"scroll",dd),a.indexOf("scroll")>=0&&zn(P?v:o,"scroll",N,Dt,He),a.indexOf("wheel")>=0&&zn(o,"wheel",he,Dt,He),(a.indexOf("touch")>=0&&Og||a.indexOf("pointer")>=0)&&(zn(o,Ni[0],ue,Dt,He),zn(v,Ni[2],le),zn(v,Ni[3],le),J&&zn(o,"click",ce,!0,!0),Ve&&zn(o,"click",ie),H&&zn(v,"gesturestart",Ie),R&&zn(v,"gestureend",Fe),I&&zn(o,ws+"enter",pe),B&&zn(o,ws+"leave",xe),q&&zn(o,ws+"move",te)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Be=Ue=!1,V._vx.reset(),V._vy.reset(),F=qe(),It=dt(),oe&&oe.type&&ue(oe),Se&&Se(V)),V},V.disable=function(){V.isEnabled&&(Pa.filter(function(oe){return oe!==V&&Yo(oe.target)}).length||kn(P?v:o,"scroll",dd),V.isPressed&&(V._vx.reset(),V._vy.reset(),kn(j?o:v,Ni[1],de,!0)),kn(P?v:o,"scroll",N,He),kn(o,"wheel",he,He),kn(o,Ni[0],ue,He),kn(v,Ni[2],le),kn(v,Ni[3],le),kn(o,"click",ce,!0),kn(o,"click",ie),kn(v,"gesturestart",Ie),kn(v,"gestureend",Fe),kn(o,ws+"enter",pe),kn(o,ws+"leave",xe),kn(o,ws+"move",te),V.isEnabled=V.isPressed=V.isDragging=!1,Me&&Me(V))},V.kill=V.revert=function(){V.disable();var oe=Pa.indexOf(V);oe>=0&&Pa.splice(oe,1),_r===V&&(_r=0)},Pa.push(V),j&&Yo(o)&&(_r=V),V.enable(_)},aw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.15.0";Gt.create=function(r){return new Gt(r)};Gt.register=Hg;Gt.getAll=function(){return Pa.slice()};Gt.getById=function(r){return Pa.filter(function(e){return e.vars.id===r})[0]};zg()&&gn.registerPlugin(Gt);var Te,Fa,st,_t,ui,gt,Ad,Wh,ol,el,Jo,Rh,Cn,Yh,yd,Hn,Wg,Xg,Oa,o_,pd,l_,Gn,Sd,c_,h_,is,Md,Cd,Ba,Rd,tl,bd,md,Ph=1,Rn=Date.now,gd=Rn(),bi=0,$o=0,qg=function(e,t,n){var i=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Yg=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},hw=function r(){return $o&&requestAnimationFrame(r)},Zg=function(){return Yh=1},Jg=function(){return Yh=0},Qi=function(e){return e},Ko=function(e){return Math.round(e*1e5)/1e5||0},u_=function(){return typeof window<"u"},f_=function(){return Te||u_()&&(Te=window.gsap)&&Te.registerPlugin&&Te},Ps=function(e){return!!~Ad.indexOf(e)},d_=function(e){return(e==="Height"?Rd:st["inner"+e])||ui["client"+e]||gt["client"+e]},p_=function(e){return vr(e,"getBoundingClientRect")||(Ps(e)?function(){return Hh.width=st.innerWidth,Hh.height=Rd,Hh}:function(){return yr(e)})},uw=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=vr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?d_(s):e["client"+s])||0}},fw=function(e,t){return!t||~Ui.indexOf(e)?p_(e):function(){return Hh}},er=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=vr(e,n))?a()-p_(e)()[s]:Ps(e)?(ui[n]||gt[n])-d_(i):e[n]-e["offset"+i])},Ih=function(e,t){for(var n=0;n<Oa.length;n+=3)(!t||~t.indexOf(Oa[n+1]))&&e(Oa[n],Oa[n+1],Oa[n+2])},hi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},jo=function(e){return typeof e=="number"},Ts=function(e){return typeof e=="object"},Zo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Da=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Na=Math.abs,m_="left",g_="top",Pd="right",Id="bottom",As="width",Cs="height",nl="Right",il="Left",rl="Top",sl="Bottom",Kt="padding",Si="margin",za="Width",Ld="Height",sn="px",Mi=function(e){return st.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},dw=function(e){var t=Mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},$g=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yr=function(e,t){var n=t&&Mi(e)[yd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Xh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},__=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},pw=function(e){return function(t){return Te.utils.snap(__(e),t)}},Dd=function(e){var t=Te.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},mw=function(e){return function(t,n){return Dd(__(e))(t,n.direction)}},Lh=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},un=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Dh=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nh={toggleActions:"play",anticipatePin:0},qh={top:0,left:0,center:.5,bottom:1,right:1},kh=function(e,t){if(hi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in qh?qh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Uh=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=_t.createElement("div"),_=Ps(n)||vr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?gt:n.tagName==="IFRAME"?n.contentDocument.body:n,w=e.indexOf("start")!==-1,C=w?c:h,y="border-color:"+C+";font-size:"+d+";color:"+C+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(y+=(i===$t?Pd:Id)+":"+(a+parseFloat(u))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=w,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],zh(g,0,i,w),g},zh=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+za]=1,s["border"+o+za]=0,s[n.p]=t+"px",Te.set(e,s)},nt=[],wd={},ll,jg=function(){return Rn()-bi>34&&(ll||(ll=requestAnimationFrame(Sr)))},Ua=function(){(!Gn||!Gn.isPressed||Gn.startX>gt.clientWidth)&&(tt.cache++,Gn?ll||(ll=requestAnimationFrame(Sr)):Sr(),bi||Ls("scrollStart"),bi=Rn())},_d=function(){h_=st.innerWidth,c_=st.innerHeight},Qo=function(e){tt.cache++,(e===!0||!Cn&&!l_&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!Sd||h_!==st.innerWidth||Math.abs(st.innerHeight-c_)>st.innerHeight*.25))&&Wh.restart(!0)},Is={},gw=[],x_=function r(){return hn($e,"scrollEnd",r)||Es(!0)},Ls=function(e){return Is[e]&&Is[e].map(function(t){return t()})||gw},ci=[],v_=function(e){for(var t=0;t<ci.length;t+=5)(!e||ci[t+4]&&ci[t+4].query===e)&&(ci[t].style.cssText=ci[t+1],ci[t].getBBox&&ci[t].setAttribute("transform",ci[t+2]||""),ci[t+3].uncache=1)},y_=function(){return tt.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},Nd=function(e,t){var n;for(Hn=0;Hn<nt.length;Hn++)n=nt[Hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));tl=!0,t&&v_(t),t||Ls("revert")},S_=function(e,t){tt.cache++,(t||!Wn)&&tt.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),hi(e)&&(st.history.scrollRestoration=Cd=e)},Wn,Rs=0,Qg,_w=function(){if(Qg!==Rs){var e=Qg=Rs;requestAnimationFrame(function(){return e===Rs&&Es(!0)})}},M_=function(){gt.appendChild(Ba),Rd=!Gn&&Ba.offsetHeight||st.innerHeight,gt.removeChild(Ba)},e_=function(e){return ol(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Es=function(e,t){if(ui=_t.documentElement,gt=_t.body,Ad=[st,_t,ui,gt],bi&&!e&&!tl){un($e,"scrollEnd",x_);return}M_(),Wn=$e.isRefreshing=!0,tl||y_();var n=Ls("refreshInit");o_&&$e.sort(),t||Nd(),tt.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),nt.slice(0).forEach(function(i){return i.refresh()}),tl=!1,nt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),bd=1,e_(!0),nt.forEach(function(i){var s=er(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),e_(!1),bd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),tt.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),S_(Cd,1),Wh.pause(),Rs++,Wn=2,Sr(2),nt.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Wn=$e.isRefreshing=!1,Ls("refresh")},Td=0,Vh=1,al,Sr=function(e){if(e===2||!Wn&&!tl){$e.isUpdating=!0,al&&al.update(0);var t=nt.length,n=Rn(),i=n-gd>=50,s=t&&nt[0].scroll();if(Vh=Td>s?-1:1,Wn||(Td=s),i&&(bi&&!Yh&&n-bi>200&&(bi=0,Ls("scrollEnd")),Jo=gd,gd=n),Vh<0){for(Hn=t;Hn-- >0;)nt[Hn]&&nt[Hn].update(0,i);Vh=1}else for(Hn=0;Hn<t;Hn++)nt[Hn]&&nt[Hn].update(0,i);$e.isUpdating=!1}ll=0},Ed=[m_,g_,Id,Pd,Si+sl,Si+nl,Si+rl,Si+il,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Gh=Ed.concat([As,Cs,"boxSizing","max"+za,"max"+Ld,"position",Si,Kt,Kt+rl,Kt+nl,Kt+sl,Kt+il]),xw=function(e,t,n){ka(n);var i=e._gsap;if(i.spacerIsNative)ka(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xd=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ed.length,a=t.style,o=e.style,l;s--;)l=Ed[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Id]=o[Pd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[As]=Xh(e,An)+sn,a[Cs]=Xh(e,$t)+sn,a[Kt]=o[Si]=o[g_]=o[m_]="0",ka(i),o[As]=o["max"+za]=n[As],o[Cs]=o["max"+Ld]=n[Cs],o[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},vw=/([A-Z])/g,ka=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(vw,"-$1").toLowerCase())}},Fh=function(e){for(var t=Gh.length,n=e.style,i=[],s=0;s<t;s++)i.push(Gh[s],n[Gh[s]]);return i.t=e,i},yw=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Hh={left:0,top:0},t_=function(e,t,n,i,s,a,o,l,c,h,d,u,f,g){Pn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?kh("0"+e.substr(3),n):0));var _=f?f.time():0,p,m,w;if(f&&f.seek(0),isNaN(e)||(e=+e),jo(e))f&&(e=Te.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,e)),o&&zh(o,n,i,!0);else{Pn(t)&&(t=t(l));var C=(e||"0").split(" "),y,S,b,E;w=Vn(t,l)||gt,y=yr(w)||{},(!y||!y.left&&!y.top)&&Mi(w).display==="none"&&(E=w.style.display,w.style.display="block",y=yr(w),E?w.style.display=E:w.style.removeProperty("display")),S=kh(C[0],y[i.d]),b=kh(C[1]||"0",n),e=y[i.p]-c[i.p]-h+S+s-b,o&&zh(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var x=e+n,T=a._isStart;p="scroll"+i.d2,zh(a,x,i,T&&x>20||!T&&(d?Math.max(gt[p],ui[p]):a.parentNode[p])<=x+1),d&&(c=yr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+sn))}return f&&w&&(p=yr(w),f.seek(u),m=yr(w),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*u),f&&f.seek(_),f?e:Math.round(e)},Sw=/(webkit|moz|length|cssText|inset)/i,n_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===gt){e._stOrig=s.cssText,o=Mi(e);for(a in o)!+a&&!Sw.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},b_=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Oh=function(e,t,n){var i={};i[t.p]="+="+n,Te.set(e,i)},i_=function(e,t){var n=xr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,h,d){var u=a.tween,f=l.onComplete,g={};c=c||n();var _=b_(n,c,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){tt.cache++,a.tween&&Sr()},l.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Te.to(e,l),u};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(e,"wheel",n.wheelHandler),$e.isTouch&&un(e,"touchmove",n.wheelHandler),s},$e=(function(){function r(t,n){Fa||r.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Md(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$o){this.update=this.refresh=this.kill=Qi;return}n=$g(hi(n)||jo(n)||n.nodeType?{trigger:n}:n,Nh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,w=s.onSnapComplete,C=s.once,y=s.snap,S=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,T=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:$t,L=!d&&d!==0,D=Vn(n.scroller||st),O=Te.core.getCache(D),I=Ps(D),B=("pinType"in n?n.pinType:vr(D,"pinType")||I&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=L&&n.toggleActions.split(" "),j="markers"in n?n.markers:Nh.markers,H=I?0:parseFloat(Mi(D)["border"+A.p2+za])||0,R=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Se=uw(D,I,A),Me=fw(D,I),Ve=0,ke=0,He=0,J=xr(D,A),ee,_e,Oe,me,Ue,Be,Pe,Xe,Ke,V,it,xt,Dt,qe,dt,F,It,We,P,v,k,W,$,ce,ae,Q,ne,fe,Ee,de,ue,le,Ie,Fe,N,he,te,pe,xe;if(R._startClamp=R._endClamp=!1,R._dir=A,p*=45,R.scroller=D,R.scroll=E?E.time.bind(E):J,me=J(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(o_=1,n.refreshPriority===-9999&&(al=R)),O.tweenScroll=O.tweenScroll||{top:i_(D,$t),left:i_(D,An)},R.tweenTo=ee=O.tweenScroll[A.p],R.scrubDuration=function(se){Ie=jo(se)&&se,Ie?le?le.duration(se):le=Te.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ie,paused:!0,onComplete:function(){return m&&m(R)}}):(le&&le.progress(1).kill(),le=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),de=0,l||(l=i.vars.id)),y&&((!Ts(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in gt.style&&Te.set(I?[gt,ui]:D,{scrollBehavior:"auto"}),tt.forEach(function(se){return Pn(se)&&se.target===(I?_t.scrollingElement||ui:D)&&(se.smooth=!1)}),Oe=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?pw(i):y.snapTo==="labelsDirectional"?mw(i):y.directional!==!1?function(se,Ne){return Dd(y.snapTo)(se,Rn()-ke<500?0:Ne.direction)}:Te.utils.snap(y.snapTo),Fe=y.duration||{min:.1,max:2},Fe=Ts(Fe)?el(Fe.min,Fe.max):el(Fe,Fe),N=Te.delayedCall(y.delay||Ie/2||.1,function(){var se=J(),Ne=Rn()-ke<500,Ae=ee.tween;if((Ne||Math.abs(R.getVelocity())<10)&&!Ae&&!Yh&&Ve!==se){var Ye=(se-Be)/qe,qt=i&&!L?i.totalProgress():Ye,rt=Ne?0:(qt-ue)/(Rn()-Jo)*1e3||0,Et=Te.utils.clamp(-Ye,1-Ye,Na(rt/2)*rt/.185),an=Ye+(y.inertia===!1?0:Et),At,yt,ht=y,In=ht.onStart,wt=ht.onInterrupt,_n=ht.onComplete;if(At=Oe(an,R),jo(At)||(At=an),yt=Math.max(0,Math.round(Be+At*qe)),se<=Pe&&se>=Be&&yt!==se){if(Ae&&!Ae._initted&&Ae.data<=Na(yt-se))return;y.inertia===!1&&(Et=At-Ye),ee(yt,{duration:Fe(Na(Math.max(Na(an-qt),Na(At-qt))*.185/rt/.05||0)),ease:y.ease||"power3",data:Na(yt-se),onInterrupt:function(){return N.restart(!0)&&wt&&Da(R,wt)},onComplete:function(){R.update(),Ve=J(),i&&!L&&(le?le.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),de=ue=i&&!L?i.totalProgress():R.progress,w&&w(R),_n&&Da(R,_n)}},se,Et*qe,yt-se-Et*qe),In&&Da(R,In,ee.tween)}}else R.isActive&&Ve!==se&&N.restart(!0)}).pause()),l&&(wd[l]=R),u=R.trigger=Vn(u||f!==!0&&f),xe=u&&u._gsap&&u._gsap.stRevert,xe&&(xe=xe(R)),f=f===!0?u:Vn(f),hi(o)&&(o={targets:u,className:o}),f&&(g===!1||g===Si||(g=!g&&f.parentNode&&f.parentNode.style&&Mi(f.parentNode).display==="flex"?!1:Kt),R.pin=f,_e=Te.core.getCache(f),_e.spacer?dt=_e.pinState:(b&&(b=Vn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),_e.spacerIsNative=!!b,b&&(_e.spacerState=Fh(b))),_e.spacer=We=b||_t.createElement("div"),We.classList.add("pin-spacer"),l&&We.classList.add("pin-spacer-"+l),_e.pinState=dt=Fh(f)),n.force3D!==!1&&Te.set(f,{force3D:!0}),R.spacer=We=_e.spacer,Ee=Mi(f),ce=Ee[g+A.os2],v=Te.getProperty(f),k=Te.quickSetter(f,A.a,sn),xd(f,We,Ee),It=Fh(f)),j){xt=Ts(j)?$g(j,Kg):Kg,V=Uh("scroller-start",l,D,A,xt,0),it=Uh("scroller-end",l,D,A,xt,0,V),P=V["offset"+A.op.d2];var ie=Vn(vr(D,"content")||D);Xe=this.markerStart=Uh("start",l,ie,A,xt,P,0,E),Ke=this.markerEnd=Uh("end",l,ie,A,xt,P,0,E),E&&(pe=Te.quickSetter([Xe,Ke],A.a,sn)),!B&&!(Ui.length&&vr(D,"fixedMarkers")===!0)&&(dw(I?gt:D),Te.set([V,it],{force3D:!0}),Q=Te.quickSetter(V,A.a,sn),fe=Te.quickSetter(it,A.a,sn))}if(E){var oe=E.vars.onUpdate,re=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),oe&&oe.apply(E,re||[])})}if(R.previous=function(){return nt[nt.indexOf(R)-1]},R.next=function(){return nt[nt.indexOf(R)+1]},R.revert=function(se,Ne){if(!Ne)return R.kill(!0);var Ae=se!==!1||!R.enabled,Ye=Cn;Ae!==R.isReverted&&(Ae&&(he=Math.max(J(),R.scroll.rec||0),He=R.progress,te=i&&i.progress()),Xe&&[Xe,Ke,V,it].forEach(function(qt){return qt.style.display=Ae?"none":"block"}),Ae&&(Cn=R,R.update(Ae)),f&&(!S||!R.isActive)&&(Ae?xw(f,We,dt):xd(f,We,Mi(f),ae)),Ae||R.update(Ae),Cn=Ye,R.isReverted=Ae)},R.refresh=function(se,Ne,Ae,Ye){if(!((Cn||!R.enabled)&&!Ne)){if(f&&se&&bi){un(r,"scrollEnd",x_);return}!Wn&&K&&K(R),Cn=R,ee.tween&&!Ae&&(ee.tween.kill(),ee.tween=0),le&&le.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ge){return ge.vars.immediateRender&&ge.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var qt=Se(),rt=Me(),Et=E?E.duration():er(D,A),an=qe<=.01||!qe,At=0,yt=Ye||0,ht=Ts(Ae)?Ae.end:n.end,In=n.endTrigger||u,wt=Ts(Ae)?Ae.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),_n=R.pinnedContainer=n.pinnedContainer&&Vn(n.pinnedContainer,R),Ln=u&&Math.max(0,nt.indexOf(R))||0,Yt=Ln,Bt,Qt,Bi,Fs,on,Ht,di,Os,M,U,Y,G,X;for(j&&Ts(Ae)&&(G=Te.getProperty(V,A.p),X=Te.getProperty(it,A.p));Yt-- >0;)Ht=nt[Yt],Ht.end||Ht.refresh(0,1)||(Cn=R),di=Ht.pin,di&&(di===u||di===f||di===_n)&&!Ht.isReverted&&(U||(U=[]),U.unshift(Ht),Ht.revert(!0,!0)),Ht!==nt[Yt]&&(Ln--,Yt--);for(Pn(wt)&&(wt=wt(R)),wt=qg(wt,"start",R),Be=t_(wt,u,qt,A,J(),Xe,V,R,rt,H,B,Et,E,R._startClamp&&"_startClamp")||(f?-.001:0),Pn(ht)&&(ht=ht(R)),hi(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(hi(wt)?wt.split(" ")[0]:"")+ht:(At=kh(ht.substr(2),qt),ht=hi(wt)?wt:(E?Te.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Be):Be)+At,In=u)),ht=qg(ht,"end",R),Pe=Math.max(Be,t_(ht||(In?"100% 0":Et),In,qt,A,J()+At,Ke,it,R,rt,H,B,Et,E,R._endClamp&&"_endClamp"))||-.001,At=0,Yt=Ln;Yt--;)Ht=nt[Yt]||{},di=Ht.pin,di&&Ht.start-Ht._pinPush<=Be&&!E&&Ht.end>0&&(Bt=Ht.end-(R._startClamp?Math.max(0,Ht.start):Ht.start),(di===u&&Ht.start-Ht._pinPush<Be||di===_n)&&isNaN(wt)&&(At+=Bt*(1-Ht.progress)),di===f&&(yt+=Bt));if(Be+=At,Pe+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!Wn&&(R._endClamp=Pe||-.001,Pe=Math.min(Pe,er(D,A))),qe=Pe-Be||(Be-=.01)&&.001,an&&(He=Te.utils.clamp(0,1,Te.utils.normalize(Be,Pe,he))),R._pinPush=yt,Xe&&At&&(Bt={},Bt[A.a]="+="+At,_n&&(Bt[A.p]="-="+J()),Te.set([Xe,Ke],Bt)),f&&!(bd&&R.end>=er(D,A)))Bt=Mi(f),Fs=A===$t,Bi=J(),W=parseFloat(v(A.a))+yt,!Et&&Pe>1&&(Y=(I?_t.scrollingElement||ui:D).style,Y={style:Y,value:Y["overflow"+A.a.toUpperCase()]},I&&Mi(gt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(Y.style["overflow"+A.a.toUpperCase()]="scroll")),xd(f,We,Bt),It=Fh(f),Qt=yr(f,!0),Os=B&&xr(D,Fs?An:$t)(),g?(ae=[g+A.os2,qe+yt+sn],ae.t=We,Yt=g===Kt?Xh(f,A)+qe+yt:0,Yt&&(ae.push(A.d,Yt+sn),We.style.flexBasis!=="auto"&&(We.style.flexBasis=Yt+sn)),ka(ae),_n&&nt.forEach(function(ge){ge.pin===_n&&ge.vars.pinSpacing!==!1&&(ge._subPinOffset=!0)}),B&&J(he)):(Yt=Xh(f,A),Yt&&We.style.flexBasis!=="auto"&&(We.style.flexBasis=Yt+sn)),B&&(on={top:Qt.top+(Fs?Bi-Be:Os)+sn,left:Qt.left+(Fs?Os:Bi-Be)+sn,boxSizing:"border-box",position:"fixed"},on[As]=on["max"+za]=Math.ceil(Qt.width)+sn,on[Cs]=on["max"+Ld]=Math.ceil(Qt.height)+sn,on[Si]=on[Si+rl]=on[Si+nl]=on[Si+sl]=on[Si+il]="0",on[Kt]=Bt[Kt],on[Kt+rl]=Bt[Kt+rl],on[Kt+nl]=Bt[Kt+nl],on[Kt+sl]=Bt[Kt+sl],on[Kt+il]=Bt[Kt+il],F=yw(dt,on,S),Wn&&J(0)),i?(M=i._initted,pd(1),i.render(i.duration(),!0,!0),$=v(A.a)-W+qe+yt,ne=Math.abs(qe-$)>1,B&&ne&&F.splice(F.length-2,2),i.render(0,!0,!0),M||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),pd(0)):$=qe,Y&&(Y.value?Y.style["overflow"+A.a.toUpperCase()]=Y.value:Y.style.removeProperty("overflow-"+A.a));else if(u&&J()&&!E)for(Qt=u.parentNode;Qt&&Qt!==gt;)Qt._pinOffset&&(Be-=Qt._pinOffset,Pe-=Qt._pinOffset),Qt=Qt.parentNode;U&&U.forEach(function(ge){return ge.revert(!1,!0)}),R.start=Be,R.end=Pe,me=Ue=Wn?he:J(),!E&&!Wn&&(me<he&&J(he),R.scroll.rec=0),R.revert(!1,!0),ke=Rn(),N&&(Ve=-1,N.restart(!0)),Cn=0,i&&L&&(i._initted||te)&&i.progress()!==te&&i.progress(te||0,!0).render(i.time(),!0,!0),(an||He!==R.progress||E||_||i&&!i._initted)&&(i&&!L&&(i._initted||He||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Be<-.001&&!He?Te.utils.normalize(Be,Pe,0):He,!0),R.progress=an||(me-Be)/qe===He?0:He),f&&g&&(We._pinOffset=Math.round(R.progress*$)),le&&le.invalidate(),isNaN(G)||(G-=Te.getProperty(V,A.p),X-=Te.getProperty(it,A.p),Oh(V,A,G),Oh(Xe,A,G-(Ye||0)),Oh(it,A,X),Oh(Ke,A,X-(Ye||0))),an&&!Wn&&R.update(),h&&!Wn&&!Dt&&(Dt=!0,h(R),Dt=!1)}},R.getVelocity=function(){return(J()-Ue)/(Rn()-Jo)*1e3||0},R.endAnimation=function(){Zo(R.callbackAnimation),i&&(le?le.progress(1):i.paused()?L||Zo(i,R.direction<0,1):Zo(i,i.reversed()))},R.labelToScroll=function(se){return i&&i.labels&&(Be||R.refresh()||Be)+i.labels[se]/i.duration()*qe||0},R.getTrailing=function(se){var Ne=nt.indexOf(R),Ae=R.direction>0?nt.slice(0,Ne).reverse():nt.slice(Ne+1);return(hi(se)?Ae.filter(function(Ye){return Ye.vars.preventOverlaps===se}):Ae).filter(function(Ye){return R.direction>0?Ye.end<=Be:Ye.start>=Pe})},R.update=function(se,Ne,Ae){if(!(E&&!Ae&&!se)){var Ye=Wn===!0?he:R.scroll(),qt=se?0:(Ye-Be)/qe,rt=qt<0?0:qt>1?1:qt||0,Et=R.progress,an,At,yt,ht,In,wt,_n,Ln;if(Ne&&(Ue=me,me=E?J():Ye,y&&(ue=de,de=i&&!L?i.totalProgress():rt)),p&&f&&!Cn&&!Ph&&bi&&(!rt&&Be<Ye+(Ye-Ue)/(Rn()-Jo)*p?rt=1e-4:rt===1&&Pe>Ye+(Ye-Ue)/(Rn()-Jo)*p&&(rt=.9999)),rt!==Et&&R.enabled){if(an=R.isActive=!!rt&&rt<1,At=!!Et&&Et<1,wt=an!==At,In=wt||!!rt!=!!Et,R.direction=rt>Et?1:-1,R.progress=rt,In&&!Cn&&(yt=rt&&!Et?0:rt===1?1:Et===1?2:3,L&&(ht=!wt&&z[yt+1]!=="none"&&z[yt+1]||z[yt],Ln=i&&(ht==="complete"||ht==="reset"||ht in i))),T&&(wt||Ln)&&(Ln||d||!i)&&(Pn(T)?T(R):R.getTrailing(T).forEach(function(Bi){return Bi.endAnimation()})),L||(le&&!Cn&&!Ph?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",rt,i._tTime/i._tDur):(le.vars.totalProgress=rt,le.invalidate().restart())):i&&i.totalProgress(rt,!!(Cn&&(ke||se)))),f){if(se&&g&&(We.style[g+A.os2]=ce),!B)k(Ko(W+$*rt));else if(In){if(_n=!se&&rt>Et&&Pe+1>Ye&&Ye+1>=er(D,A),S)if(!se&&(an||_n)){var Yt=yr(f,!0),Bt=Ye-Be;n_(f,gt,Yt.top+(A===$t?Bt:0)+sn,Yt.left+(A===$t?0:Bt)+sn)}else n_(f,We);ka(an||_n?F:It),ne&&rt<1&&an||k(W+(rt===1&&!_n?$:0))}}y&&!ee.tween&&!Cn&&!Ph&&N.restart(!0),o&&(wt||C&&rt&&(rt<1||!md))&&ol(o.targets).forEach(function(Bi){return Bi.classList[an||C?"add":"remove"](o.className)}),a&&!L&&!se&&a(R),In&&!Cn?(L&&(Ln&&(ht==="complete"?i.pause().totalProgress(1):ht==="reset"?i.restart(!0).pause():ht==="restart"?i.restart(!0):i[ht]()),a&&a(R)),(wt||!md)&&(c&&wt&&Da(R,c),q[yt]&&Da(R,q[yt]),C&&(rt===1?R.kill(!1,1):q[yt]=0),wt||(yt=rt===1?1:3,q[yt]&&Da(R,q[yt]))),x&&!an&&Math.abs(R.getVelocity())>(jo(x)?x:2500)&&(Zo(R.callbackAnimation),le?le.progress(1):Zo(i,ht==="reverse"?1:!rt,1))):L&&a&&!Cn&&a(R)}if(fe){var Qt=E?Ye/E.duration()*(E._caScrollDist||0):Ye;Q(Qt+(V._isFlipped?1:0)),fe(Qt)}pe&&pe(-Ye/E.duration()*(E._caScrollDist||0))}},R.enable=function(se,Ne){R.enabled||(R.enabled=!0,un(D,"resize",Qo),I||un(D,"scroll",Ua),K&&un(r,"refreshInit",K),se!==!1&&(R.progress=He=0,me=Ue=Ve=J()),Ne!==!1&&R.refresh())},R.getTween=function(se){return se&&ee?ee.tween:le},R.setPositions=function(se,Ne,Ae,Ye){if(E){var qt=E.scrollTrigger,rt=E.duration(),Et=qt.end-qt.start;se=qt.start+Et*se/rt,Ne=qt.start+Et*Ne/rt}R.refresh(!1,!1,{start:Yg(se,Ae&&!!R._startClamp),end:Yg(Ne,Ae&&!!R._endClamp)},Ye),R.update()},R.adjustPinSpacing=function(se){if(ae&&se){var Ne=ae.indexOf(A.d)+1;ae[Ne]=parseFloat(ae[Ne])+se+sn,ae[1]=parseFloat(ae[1])+se+sn,ka(ae)}},R.disable=function(se,Ne){if(se!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Ne||le&&le.pause(),he=0,_e&&(_e.uncache=1),K&&hn(r,"refreshInit",K),N&&(N.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!I)){for(var Ae=nt.length;Ae--;)if(nt[Ae].scroller===D&&nt[Ae]!==R)return;hn(D,"resize",Qo),I||hn(D,"scroll",Ua)}},R.kill=function(se,Ne){R.disable(se,Ne),le&&!Ne&&le.kill(),l&&delete wd[l];var Ae=nt.indexOf(R);Ae>=0&&nt.splice(Ae,1),Ae===Hn&&Vh>0&&Hn--,Ae=0,nt.forEach(function(Ye){return Ye.scroller===R.scroller&&(Ae=1)}),Ae||Wn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Ne||i.kill()),Xe&&[Xe,Ke,V,it].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),al===R&&(al=0),f&&(_e&&(_e.uncache=1),Ae=0,nt.forEach(function(Ye){return Ye.pin===f&&Ae++}),Ae||(_e.spacer=0)),n.onKill&&n.onKill(R)},nt.push(R),R.enable(!1,!1),xe&&xe(R),i&&i.add&&!qe){var De=R.update;R.update=function(){R.update=De,tt.cache++,Be||Pe||R.refresh()},Te.delayedCall(.01,R.update),qe=.01,Be=Pe=0}else R.refresh();f&&_w()},r.register=function(n){return Fa||(Te=n||f_(),u_()&&window.document&&r.enable(),Fa=$o),Fa},r.defaults=function(n){if(n)for(var i in n)Nh[i]=n[i];return Nh},r.disable=function(n,i){$o=0,nt.forEach(function(a){return a[i?"kill":"disable"](n)}),hn(st,"wheel",Ua),hn(_t,"scroll",Ua),clearInterval(Rh),hn(_t,"touchcancel",Qi),hn(gt,"touchstart",Qi),Lh(hn,_t,"pointerdown,touchstart,mousedown",Zg),Lh(hn,_t,"pointerup,touchend,mouseup",Jg),Wh.kill(),Ih(hn);for(var s=0;s<tt.length;s+=3)Dh(hn,tt[s],tt[s+1]),Dh(hn,tt[s],tt[s+2])},r.enable=function(){if(st=window,_t=document,ui=_t.documentElement,gt=_t.body,Te){if(ol=Te.utils.toArray,el=Te.utils.clamp,Md=Te.core.context||Qi,pd=Te.core.suppressOverwrites||Qi,Cd=st.history.scrollRestoration||"auto",Td=st.pageYOffset||0,Te.core.globals("ScrollTrigger",r),gt){$o=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",M_(),hw(),Gt.register(Te),r.isTouch=Gt.isTouch,is=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sd=Gt.isTouch===1,un(st,"wheel",Ua),Ad=[st,_t,ui,gt],Te.matchMedia?(r.matchMedia=function(h){var d=Te.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Te.addEventListener("matchMediaInit",function(){y_(),Nd()}),Te.addEventListener("matchMediaRevert",function(){return v_()}),Te.addEventListener("matchMedia",function(){Es(0,1),Ls("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return _d(),_d})):console.warn("Requires GSAP 3.11.0 or later"),_d(),un(_t,"scroll",Ua);var n=gt.hasAttribute("style"),i=gt.style,s=i.borderTopStyle,a=Te.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=yr(gt),$t.m=Math.round(o.top+$t.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(gt.setAttribute("style",""),gt.removeAttribute("style")),Rh=setInterval(jg,250),Te.delayedCall(.5,function(){return Ph=0}),un(_t,"touchcancel",Qi),un(gt,"touchstart",Qi),Lh(un,_t,"pointerdown,touchstart,mousedown",Zg),Lh(un,_t,"pointerup,touchend,mouseup",Jg),yd=Te.utils.checkPrefix("transform"),Gh.push(yd),Fa=Rn(),Wh=Te.delayedCall(.2,Es).pause(),Oa=[_t,"visibilitychange",function(){var h=st.innerWidth,d=st.innerHeight;_t.hidden?(Wg=h,Xg=d):(Wg!==h||Xg!==d)&&Qo()},_t,"DOMContentLoaded",Es,st,"load",Es,st,"resize",Qo],Ih(un),nt.forEach(function(h){return h.enable(0,1)}),l=0;l<tt.length;l+=3)Dh(hn,tt[l],tt[l+1]),Dh(hn,tt[l],tt[l+2])}else if(_t){var c=function h(){r.enable(),_t.removeEventListener("DOMContentLoaded",h)};_t.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(md=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Rh)||(Rh=i)&&setInterval(jg,i),"ignoreMobileResize"in n&&(Sd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ih(hn)||Ih(un,n.autoRefreshEvents||"none"),l_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Vn(n),a=tt.indexOf(s),o=Ps(s);~a&&tt.splice(a,o?6:2),i&&(o?Ui.unshift(st,i,gt,i,ui,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){nt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(hi(n)?Vn(n):n).getBoundingClientRect(),o=a[s?As:Cs]*i||0;return s?a.right-o>0&&a.left+o<st.innerWidth:a.bottom-o>0&&a.top+o<st.innerHeight},r.positionInViewport=function(n,i,s){hi(n)&&(n=Vn(n));var a=n.getBoundingClientRect(),o=a[s?As:Cs],l=i==null?o/2:i in qh?qh[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/st.innerWidth:(a.top+l)/st.innerHeight},r.killAll=function(n){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Is.killAll||[];Is={},i.forEach(function(s){return s()})}},r})();$e.version="3.15.0";$e.saveStyles=function(r){return r?ol(r).forEach(function(e){if(e&&e.style){var t=ci.indexOf(e);t>=0&&ci.splice(t,5),ci.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),Md())}}):ci};$e.revert=function(r,e){return Nd(!r,e)};$e.create=function(r,e){return new $e(r,e)};$e.refresh=function(r){return r?Qo(!0):(Fa||$e.register())&&Es(!0)};$e.update=function(r){return++tt.cache&&Sr(r===!0?2:0)};$e.clearScrollMemory=S_;$e.maxScroll=function(r,e){return er(r,e?An:$t)};$e.getScrollFunc=function(r,e){return xr(Vn(r),e?An:$t)};$e.getById=function(r){return wd[r]};$e.getAll=function(){return nt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!bi};$e.snapDirectional=Dd;$e.addEventListener=function(r,e){var t=Is[r]||(Is[r]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(r,e){var t=Is[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var d=[],u=[],f=Te.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Pn(s)&&(s=s(),un($e,"refresh",function(){return s=e.batchMax()})),ol(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push($e.create(c))}),t};var r_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},vd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===ui&&r(gt,t)},Bh={auto:1,scroll:1},Mw=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Te.core.getCache(s),o=Rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Bh[(l=Mi(s)).overflowY]||Bh[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ps(s)&&(Bh[(l=Mi(s)).overflowY]||Bh[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},w_=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&Mw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(_t,Gt.eventTypes[0],a_,!1,!0)},onDisable:function(){return hn(_t,Gt.eventTypes[0],a_,!0)}})},bw=/(input|label|select|textarea)/i,s_,a_=function(e){var t=bw.test(e.target.tagName);(t||s_)&&(e._gsapAllow=!0,s_=t)},ww=function(e){Ts(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Vn(e.target)||ui,h=Te.core.globals().ScrollSmoother,d=h&&h.get(),u=is&&(e.content&&Vn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=xr(c,$t),g=xr(c,An),_=1,p=(Gt.isTouch&&st.visualViewport?st.visualViewport.scale*st.visualViewport.width:st.outerWidth)/st.innerWidth,m=0,w=Pn(i)?function(){return i(o)}:function(){return i||2.8},C,y,S=w_(c,e.type,!0,s),b=function(){return y=!1},E=Qi,x=Qi,T=function(){l=er(c,$t),x=el(is?1:0,l),n&&(E=el(0,er(c,An))),C=Rs},A=function(){u._gsap.y=Ko(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(y){requestAnimationFrame(b);var j=Ko(o.deltaY/2),H=x(f.v-j);if(u&&H!==f.v+f.offset){f.offset=H-f.v;var R=Ko((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=tt.cache,Sr()}return!0}f.offset&&A(),y=!0},D,O,I,B,q=function(){T(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return u&&Te.set(u,{y:"+=0"}),e.ignoreCheck=function(z){return is&&z.type==="touchmove"&&L(z)||_>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=_;_=Ko((st.visualViewport&&st.visualViewport.scale||1)/p),D.pause(),z!==_&&vd(c,_>1.01?!0:n?!1:"x"),O=g(),I=f(),T(),C=Rs},e.onRelease=e.onGestureStart=function(z,j){if(f.offset&&A(),!j)B.restart(!0);else{tt.cache++;var H=w(),R,K;n&&(R=g(),K=R+H*.05*-z.velocityX/.227,H*=r_(g,R,K,er(c,An)),D.vars.scrollX=E(K)),R=f(),K=R+H*.05*-z.velocityY/.227,H*=r_(f,R,K,er(c,$t)),D.vars.scrollY=x(K),D.invalidate().duration(H).play(.01),(is&&D.vars.scrollY>=l||R>=l-1)&&Te.to({},{onUpdate:q,duration:H})}a&&a(z)},e.onWheel=function(){D._ts&&D.pause(),Rn()-m>1e3&&(C=0,m=Rn())},e.onChange=function(z,j,H,R,K){if(Rs!==C&&T(),j&&n&&g(E(R[2]===j?O+(z.startX-z.x):g()+j-R[1])),H){f.offset&&A();var Se=K[2]===H,Me=Se?I+z.startY-z.y:f()+H-K[1],Ve=x(Me);Se&&Me!==Ve&&(I+=Ve-Me),f(Ve)}(H||j)&&Sr()},e.onEnable=function(){vd(c,n?!1:"x"),$e.addEventListener("refresh",q),un(st,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){vd(c,!0),hn(st,"resize",q),$e.removeEventListener("refresh",q),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=is,is&&!f()&&f(1),is&&Te.ticker.add(Qi),B=o._dc,D=Te.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:b_(f,f(),function(){return D.pause()})},onUpdate:Sr,onComplete:B.vars.onComplete}),o};$e.sort=function(r){if(Pn(r))return nt.sort(r);var e=st.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+st.innerHeight}),nt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$e.observe=function(r){return new Gt(r)};$e.normalizeScroll=function(r){if(typeof r>"u")return Gn;if(r===!0&&Gn)return Gn.enable();if(r===!1){Gn&&Gn.kill(),Gn=r;return}var e=r instanceof Gt?r:ww(r);return Gn&&Gn.target===e.target&&Gn.kill(),Ps(e.target)&&(Gn=e),e};$e.core={_getVelocityProp:Ch,_inputObserver:w_,_scrollers:tt,_proxies:Ui,bridge:{ss:function(){bi||Ls("scrollStart"),bi=Rn()},ref:function(){return Cn}}};f_()&&Te.registerPlugin($e);var Ud=[{id:"jaunt",source:"assets/Seedance 2 0 - Referenceuse The Exact Jaunt Portable Speaker As The Only Product Reference  Preserve 4K(1).mp4",title:"JAUNT \u2014 One Beat",category:"Audio / Product film",categories:["film","product"],width:1920,height:1080,video:!0,new:!0,duration:15.061,full:"assets/portfolio/jaunt.mp4",preview:"assets/portfolio/jaunt-preview.mp4",thumbnail:"assets/portfolio/jaunt.webp",posterTime:10.8,previewStart:8.561},{id:"tiktak-superhero",source:"assets/Dara\u2019s TikTak Superhero Adventure.png",title:"TikTak \u2014 Superhero Adventure",category:"TikTak / Character poster",categories:["poster","character","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Dara\u2019s TikTak Superhero Adventure.png",thumbnail:"assets/portfolio/tiktak-superhero.webp"},{id:"blood-orange-summer",source:"assets/Seedance 2_0 - 15-Second Premium Lifestyle Soda Commercial_ Emotional Summer Energy_ Ultra-Photoreal.mp4",title:"Blood Orange \u2014 A Taste of Summer",category:"Beverage / Lifestyle film",categories:["film","product"],width:1280,height:720,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blood-orange-summer.mp4",preview:"assets/portfolio/blood-orange-summer-preview.mp4",thumbnail:"assets/portfolio/blood-orange-summer.webp",posterTime:11.8,previewStart:8.569},{id:"blink-watch",source:"assets/Seedance 2_0 - Create a premium cinematic luxury watch advertisement for a brand called BLINK_Use th.mp4",title:"BLINK \u2014 A Moment in Time",category:"Watches / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blink-watch.mp4",preview:"assets/portfolio/blink-watch-preview.mp4",thumbnail:"assets/portfolio/blink-watch.webp",posterTime:6.8,previewStart:6.8},{id:"toyota",source:"assets/Toyota_web.mp4",title:"Toyota \u2014 Automotive Film",category:"Automotive / Brand film",categories:["film"],width:1880,height:1080,video:!0,new:!1,duration:78.4,full:"assets/portfolio/toyota.mp4",preview:"assets/portfolio/toyota-preview.mp4",thumbnail:"assets/portfolio/toyota.webp",posterTime:12,previewStart:12},{id:"dara-funfair",source:"assets/2.mp4",title:"Dara \u2014 The Funfair Adventure",category:"TikTak / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-funfair.mp4",preview:"assets/portfolio/dara-funfair-preview.mp4",thumbnail:"assets/portfolio/dara-funfair.webp",posterTime:14,previewStart:14}];var Fd={projects:[{id:"jaunt",source:"assets/Seedance 2 0 - Referenceuse The Exact Jaunt Portable Speaker As The Only Product Reference  Preserve 4K(1).mp4",title:"JAUNT \u2014 One Beat",category:"Audio / Product film",categories:["film","product"],width:1920,height:1080,video:!0,new:!0,duration:15.061,full:"assets/portfolio/jaunt.mp4",preview:"assets/portfolio/jaunt-preview.mp4",thumbnail:"assets/portfolio/jaunt.webp",posterTime:10.8,previewStart:8.561},{id:"blood-orange-summer",source:"assets/Seedance 2_0 - 15-Second Premium Lifestyle Soda Commercial_ Emotional Summer Energy_ Ultra-Photoreal.mp4",title:"Blood Orange \u2014 A Taste of Summer",category:"Beverage / Lifestyle film",categories:["film","product"],width:1280,height:720,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blood-orange-summer.mp4",preview:"assets/portfolio/blood-orange-summer-preview.mp4",thumbnail:"assets/portfolio/blood-orange-summer.webp",posterTime:11.8,previewStart:8.569},{id:"blink-watch",source:"assets/Seedance 2_0 - Create a premium cinematic luxury watch advertisement for a brand called BLINK_Use th.mp4",title:"BLINK \u2014 A Moment in Time",category:"Watches / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blink-watch.mp4",preview:"assets/portfolio/blink-watch-preview.mp4",thumbnail:"assets/portfolio/blink-watch.webp",posterTime:6.8,previewStart:6.8},{id:"tiktak-superhero",source:"assets/Dara\u2019s TikTak Superhero Adventure.png",title:"TikTak \u2014 Superhero Adventure",category:"TikTak / Character poster",categories:["poster","character","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Dara\u2019s TikTak Superhero Adventure.png",thumbnail:"assets/portfolio/tiktak-superhero.webp"},{id:"zero-lemon",source:"assets/hf_20260930_230457_450eef86-45bf-4454-853f-bb9d635c3e55.mp4",title:"Zero \u2014 Lemon in Motion",category:"Beverage / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/zero-lemon.mp4",preview:"assets/portfolio/zero-lemon-preview.mp4",thumbnail:"assets/portfolio/zero-lemon.webp",posterTime:11.5,previewStart:8.572},{id:"dara-funfair",source:"assets/2.mp4",title:"Dara \u2014 The Funfair Adventure",category:"TikTak / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-funfair.mp4",preview:"assets/portfolio/dara-funfair-preview.mp4",thumbnail:"assets/portfolio/dara-funfair.webp",posterTime:14,previewStart:14},{id:"blood-orange-rhythm",source:"assets/Seedance 2_0 - 15-Second Rhythm-Driven Global Soda Commercial_ Premium Sound Design_ Ultra-Photoreal.mp4",title:"Blood Orange \u2014 Find Your Rhythm",category:"Beverage / Product film",categories:["film","product"],width:1280,height:720,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blood-orange-rhythm.mp4",preview:"assets/portfolio/blood-orange-rhythm-preview.mp4",thumbnail:"assets/portfolio/blood-orange-rhythm.webp",posterTime:12,previewStart:8.569},{id:"tiktak-cozy",source:"assets/Dara with TikTak snacks, cozy room.png",title:"TikTak \u2014 A Little Everyday Joy",category:"TikTak / Character poster",categories:["poster","character","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Dara with TikTak snacks, cozy room.png",thumbnail:"assets/portfolio/tiktak-cozy.webp"},{id:"panda",source:"assets/hf_20260930_230458_602c55c7-0b2f-4b14-80e4-2bec2f7e0349.mp4",title:"Panda \u2014 The Perfect Crunch",category:"Snacks / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/panda.mp4",preview:"assets/portfolio/panda-preview.mp4",thumbnail:"assets/portfolio/panda.webp",posterTime:11.5,previewStart:8.572},{id:"zero-rice-poster",source:"assets/Warm Kitchen Rice Celebration.png",title:"Zero Rice \u2014 Made for Sharing",category:"Zero / Lifestyle poster",categories:["poster","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Warm Kitchen Rice Celebration.png",thumbnail:"assets/portfolio/zero-rice-poster.webp"},{id:"dara-transformation",source:"assets/Dara\u2019s TikTak Hero Transformation.png",title:"Dara \u2014 Hero Transformation",category:"TikTak / Visual story",categories:["poster","character","product"],width:1672,height:941,video:!1,new:!0,full:"assets/Dara\u2019s TikTak Hero Transformation.png",thumbnail:"assets/portfolio/dara-transformation.webp"},{id:"tiktak-family",source:"assets/Warm family moments, crispy cheese puffs.png",title:"TikTak \u2014 Family Moments",category:"TikTak / Visual story",categories:["poster","product"],width:1672,height:941,video:!1,new:!0,full:"assets/Warm family moments, crispy cheese puffs.png",thumbnail:"assets/portfolio/tiktak-family.webp"},{id:"tiktak-crunch",source:"assets/TikTak Cheese Crunch in Motion.png",title:"TikTak \u2014 Cheese Crunch",category:"TikTak / Product poster",categories:["poster","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/TikTak Cheese Crunch in Motion.png",thumbnail:"assets/portfolio/tiktak-crunch.webp"},{id:"zero-rice",source:"assets/hf_20260930_230457_46195c35-5fa4-4d89-9489-27e570017282.mp4",title:"Zero \u2014 Every Grain",category:"Food / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/zero-rice.mp4",preview:"assets/portfolio/zero-rice-preview.mp4",thumbnail:"assets/portfolio/zero-rice.webp",posterTime:11,previewStart:8.572},{id:"dara-character",source:"assets/dara.png",title:"Dara \u2014 Everyday Hero",category:"TikTak / Character design",categories:["poster","character"],width:1254,height:1254,video:!1,new:!0,full:"assets/dara.png",thumbnail:"assets/portfolio/dara-character.webp"},{id:"dara-snack",source:"assets/3.mp4",title:"Dara \u2014 Snack Break",category:"TikTak / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-snack.mp4",preview:"assets/portfolio/dara-snack-preview.mp4",thumbnail:"assets/portfolio/dara-snack.webp",posterTime:18,previewStart:18},{id:"gundakam",source:"assets/doy gundakam.mp4",title:"Gundakam \u2014 A Fresh Perspective",category:"Dairy / Product film",categories:["film","product"],width:1920,height:1080,video:!0,new:!0,duration:15.092971,full:"assets/portfolio/gundakam.mp4",preview:"assets/portfolio/gundakam-preview.mp4",thumbnail:"assets/portfolio/gundakam.webp",posterTime:11,previewStart:8.593},{id:"energy",source:"assets/hf_20260930_230458_782c2634-362c-4988-b3ca-a8c454f5838b.mp4",title:"Energy \u2014 Electric Red",category:"Beverage / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/energy.mp4",preview:"assets/portfolio/energy-preview.mp4",thumbnail:"assets/portfolio/energy.webp",posterTime:11.5,previewStart:8.572},{id:"ceylon-tea",source:"assets/hf_20260930_230459_bfdf752b-710d-4ac4-a486-bcf5af001ab0.mp4",title:"Ceylon Tea \u2014 The Golden Pour",category:"Tea / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/ceylon-tea.mp4",preview:"assets/portfolio/ceylon-tea-preview.mp4",thumbnail:"assets/portfolio/ceylon-tea.webp",posterTime:11.5,previewStart:8.572},{id:"hes-clean",source:"assets/hf_20260930_230459_d754f928-73d2-4180-97d9-a8d98f92a962.mp4",title:"HES \u2014 A Brighter Clean",category:"Home care / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/hes-clean.mp4",preview:"assets/portfolio/hes-clean-preview.mp4",thumbnail:"assets/portfolio/hes-clean.webp",posterTime:11.5,previewStart:8.572},{id:"dara-monster",source:"assets/final1.mp4",title:"Dara \u2014 The Jelly Monster",category:"TikTak / Animated film",categories:["film","character"],width:480,height:854,video:!0,new:!0,duration:22.833333,full:"assets/portfolio/dara-monster.mp4",preview:"assets/portfolio/dara-monster-preview.mp4",thumbnail:"assets/portfolio/dara-monster.webp",posterTime:15,previewStart:15},{id:"dara-city",source:"assets/2341.mp4",title:"Dara \u2014 City Adventure",category:"TikTak / Animated film",categories:["film","character"],width:480,height:854,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-city.mp4",preview:"assets/portfolio/dara-city-preview.mp4",thumbnail:"assets/portfolio/dara-city.webp",posterTime:16,previewStart:16},{id:"jelly-monster",source:"assets/monster.png",title:"The Jelly Monster",category:"TikTak / Character design",categories:["poster","character"],width:1254,height:1254,video:!1,new:!0,full:"assets/monster.png",thumbnail:"assets/portfolio/jelly-monster.webp"},{id:"tiktak-pack",source:"assets/tiktak.png",title:"TikTak \u2014 Meet the Pack",category:"TikTak / Product poster",categories:["poster","product"],width:1094,height:1438,video:!1,new:!0,full:"assets/tiktak.png",thumbnail:"assets/portfolio/tiktak-pack.webp"},{id:"saffron",source:"assets/Produce-A-Finished-15-Second-Vertical-9 (1).mp4",title:"Saffron \u2014 The Caf\xE9 Ritual",category:"Coffee / Lifestyle film",categories:["film","product"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/saffron.mp4",preview:"assets/portfolio/saffron-preview.mp4",thumbnail:"assets/portfolio/saffron.webp",posterTime:5.5,previewStart:5.5},{id:"vista",source:"assets/Produce-A-Finished-15-Second-Vertical-9 (2).mp4",title:"Vista \u2014 Space to Breathe",category:"Architecture / Brand film",categories:["film"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/vista.mp4",preview:"assets/portfolio/vista-preview.mp4",thumbnail:"assets/portfolio/vista.webp",posterTime:6,previewStart:6},{id:"clear",source:"assets/Produce-A-Finished-15-Second-Vertical-9 (3).mp4",title:"CLEAR \u2014 A Fresh Start",category:"Home care / Product film",categories:["film","product"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/clear.mp4",preview:"assets/portfolio/clear-preview.mp4",thumbnail:"assets/portfolio/clear.webp",posterTime:10.5,previewStart:8.542},{id:"automotive-detail",source:"assets/Produce-A-Finished-15-Second-Vertical-9.mp4",title:"Automotive \u2014 In Every Detail",category:"Automotive / Product film",categories:["film","product"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/automotive-detail.mp4",preview:"assets/portfolio/automotive-detail-preview.mp4",thumbnail:"assets/portfolio/automotive-detail.webp",posterTime:6,previewStart:6},{id:"iphone",source:"assets/work-iphone.jpg",title:"Apple \u2014 Cinematic Poster",category:"Technology / Product poster",categories:["poster","product"],width:2752,height:1536,video:!1,new:!1,full:"assets/work-iphone.jpg",thumbnail:"assets/portfolio/iphone.webp"},{id:"ford-film",source:"assets/work1.mp4",title:"Ford \u2014 Built for the Journey",category:"Automotive / Brand film",categories:["film"],width:720,height:1280,video:!0,new:!1,duration:15.06898,full:"assets/portfolio/ford-film.mp4",preview:"assets/portfolio/ford-film-preview.mp4",thumbnail:"assets/portfolio/ford-film.webp",posterTime:8,previewStart:8},{id:"rolex",source:"assets/work-rolex.jpg",title:"Rolex \u2014 Luxury in Detail",category:"Watches / Product poster",categories:["poster","product"],width:736,height:920,video:!1,new:!1,full:"assets/work-rolex.jpg",thumbnail:"assets/portfolio/rolex.webp"},{id:"hyper-motion",source:"assets/work2.mp4",title:"Product \u2014 Hyper-Motion",category:"Product / Motion film",categories:["film","product"],width:720,height:1280,video:!0,new:!1,duration:15.06898,full:"assets/portfolio/hyper-motion.mp4",preview:"assets/portfolio/hyper-motion-preview.mp4",thumbnail:"assets/portfolio/hyper-motion.webp",posterTime:3,previewStart:3},{id:"vfx-composite",source:"assets/work3.mp4",title:"VFX \u2014 Composite",category:"Visual effects / Film",categories:["film","vfx"],width:720,height:1280,video:!0,new:!1,duration:15.06898,full:"assets/portfolio/vfx-composite.mp4",preview:"assets/portfolio/vfx-composite-preview.mp4",thumbnail:"assets/portfolio/vfx-composite.webp",posterTime:1.5,previewStart:1.5},{id:"muse",source:"assets/work-muse.jpg",title:"Muse \u2014 Color & Flavor",category:"Beverage / Product poster",categories:["poster","product"],width:736,height:981,video:!1,new:!1,full:"assets/work-muse.jpg",thumbnail:"assets/portfolio/muse.webp"},{id:"haji-character",source:"assets/work-pizza.jpg",title:"Haji \u2014 Brand Character",category:"Character / Poster",categories:["poster","character"],width:1792,height:2400,video:!1,new:!1,full:"assets/work-pizza.jpg",thumbnail:"assets/portfolio/haji-character.webp"},{id:"kinetic",source:"assets/work4.mp4",title:"Social \u2014 Kinetic Edit",category:"Social / Motion film",categories:["film"],width:1280,height:720,video:!0,new:!1,duration:15.125,full:"assets/portfolio/kinetic.mp4",preview:"assets/portfolio/kinetic-preview.mp4",thumbnail:"assets/portfolio/kinetic.webp",posterTime:3,previewStart:3},{id:"haji-trex",source:"assets/films-trex.mp4",title:"Haji vs T-Rex",category:"Character / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!1,duration:9,full:"assets/portfolio/haji-trex.mp4",preview:"assets/portfolio/haji-trex-preview.mp4",thumbnail:"assets/portfolio/haji-trex.webp",posterTime:4,previewStart:2.5},{id:"ford-poster",source:"assets/work-ford.jpg",title:"Ford \u2014 Studio Key Art",category:"Automotive / Poster",categories:["poster","product"],width:736,height:920,video:!1,new:!1,full:"assets/work-ford.jpg",thumbnail:"assets/portfolio/ford-poster.webp"},{id:"zero-pack",source:"assets/work-zero.jpg",title:"Zero \u2014 Packaging Study",category:"Product / Poster",categories:["poster","product"],width:768,height:1344,video:!1,new:!1,full:"assets/work-zero.jpg",thumbnail:"assets/portfolio/zero-pack.webp"},{id:"toyota",source:"assets/Toyota_web.mp4",title:"Toyota \u2014 Automotive Film",category:"Automotive / Brand film",categories:["film"],width:1880,height:1080,video:!0,new:!1,duration:78.4,full:"assets/portfolio/toyota.mp4",preview:"assets/portfolio/toyota-preview.mp4",thumbnail:"assets/portfolio/toyota.webp",posterTime:12,previewStart:12}],studio:[{id:"studio-motion",source:"assets/film.mp4",title:"Product Motion",category:"Studio motion",categories:["film"],width:1080,height:1920,video:!0,new:!1,duration:15.092993,full:"assets/portfolio/studio-motion.mp4",preview:"assets/portfolio/studio-motion-preview.mp4",thumbnail:"assets/portfolio/studio-motion.webp",posterTime:3,previewStart:3}],hero:{source:"assets/Seedance 2 0 - Referenceuse The Exact Jaunt Portable Speaker As The Only Product Reference  Preserve 4K(1).mp4",preview:"assets/portfolio/jaunt-hero.mp4",thumbnail:"assets/portfolio/jaunt-hero.webp",start:.4,posterTime:4}};es.registerPlugin($e);var ot=r=>document.getElementById(r),Bd=document.documentElement,ul=ot("scroller"),Fi=ot("exhibition"),Kh=matchMedia("(max-width: 767px)"),Aw=!!navigator.connection?.saveData,tu=(r,e=0,t=1)=>Math.max(e,Math.min(t,r)),Jh=Ao.lerp,Cw=new Set(Ud.map(r=>r.id)),Gd=[...Ud.map(r=>Fd.projects.find(e=>e.id===r.id)).filter(Boolean),...Fd.projects.filter(r=>!Cw.has(r.id))],Pt=Gd,cl="all",jt=!1,T_=!1,Us=null;try{jt=localStorage.getItem("blink-exhibition-motion")==="off"}catch{}var P_=Bd.lang==="ckb"?"ku":Bd.lang,kd=new et,zd=new et,Mr=0,E_=0,Oi=[],nr=0,fi=0,Od={en:{"exhibit.kicker":"A different perspective","exhibit.title":"Step inside<br>the work.","exhibit.skip":"View the grid \u2197","exhibit.gesture":"Scroll to explore \xB7 Swipe or drag sideways","motion.off":"Reduce motion","motion.on":"Enable motion",all:"All work",film:"Films",poster:"Posters",jump:"Jump to a work",filters:"Choose a work format",prev:"Previous work",next:"Next work"},ku:{"exhibit.kicker":"\u0644\u06D5 \u0695\u0648\u0627\u0646\u06AF\u06D5\u06CC\u06D5\u06A9\u06CC \u062C\u06CC\u0627\u0648\u0627\u0632\u06D5\u0648\u06D5","exhibit.title":"\u0628\u0686\u06C6 \u0646\u0627\u0648<br>\u062C\u06CC\u0647\u0627\u0646\u06CC \u06A9\u0627\u0631\u06D5\u06A9\u0627\u0646.","exhibit.skip":"\u06A9\u0627\u0631\u06D5\u06A9\u0627\u0646 \u0628\u06D5 \u062A\u06C6\u0695 \u0628\u0628\u06CC\u0646\u06D5 \u2197","exhibit.gesture":"\u0628\u06C6 \u06AF\u06D5\u0695\u0627\u0646 \u0628\u062C\u0648\u0648\u06B5\u06CE\u0646\u06D5 \xB7 \u0628\u06D5\u0631\u06D5\u0648 \u0644\u0627\u06A9\u0627\u0646 \u0695\u0627\u06CC\u0628\u06A9\u06CE\u0634\u06D5","motion.off":"\u062C\u0648\u0648\u06B5\u06D5 \u06A9\u06D5\u0645 \u0628\u06A9\u06D5\u0648\u06D5","motion.on":"\u062C\u0648\u0648\u06B5\u06D5 \u0686\u0627\u0644\u0627\u06A9 \u0628\u06A9\u06D5",all:"\u0647\u06D5\u0645\u0648\u0648 \u06A9\u0627\u0631\u06D5\u06A9\u0627\u0646",film:"\u0641\u06CC\u0644\u0645\u06D5\u06A9\u0627\u0646",poster:"\u067E\u06C6\u0633\u062A\u06D5\u0631\u06D5\u06A9\u0627\u0646",jump:"\u06A9\u0627\u0631\u06CE\u06A9 \u0647\u06D5\u06B5\u0628\u0698\u06CE\u0631\u06D5",filters:"\u062C\u06C6\u0631\u06CC \u06A9\u0627\u0631 \u0647\u06D5\u06B5\u0628\u0698\u06CE\u0631\u06D5",prev:"\u06A9\u0627\u0631\u06CC \u067E\u06CE\u0634\u0648\u0648",next:"\u06A9\u0627\u0631\u06CC \u062F\u0648\u0627\u062A\u0631"},ar:{"exhibit.kicker":"\u0645\u0646 \u0645\u0646\u0638\u0648\u0631 \u0645\u062E\u062A\u0644\u0641","exhibit.title":"\u0627\u062F\u062E\u0644 \u0625\u0644\u0649<br>\u0639\u0627\u0644\u0645 \u0627\u0644\u0623\u0639\u0645\u0627\u0644.","exhibit.skip":"\u0639\u0631\u0636 \u0634\u0628\u0643\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u2197","exhibit.gesture":"\u0645\u0631\u0651\u0631 \u0644\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641 \xB7 \u0627\u0633\u062D\u0628 \u062C\u0627\u0646\u0628\u064A\u0627\u064B","motion.off":"\u062A\u0642\u0644\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629","motion.on":"\u062A\u0641\u0639\u064A\u0644 \u0627\u0644\u062D\u0631\u0643\u0629",all:"\u0643\u0644 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",film:"\u0627\u0644\u0623\u0641\u0644\u0627\u0645",poster:"\u0627\u0644\u0645\u0644\u0635\u0642\u0627\u062A",jump:"\u0627\u0646\u062A\u0642\u0644 \u0625\u0644\u0649 \u0639\u0645\u0644",filters:"\u0627\u062E\u062A\u0631 \u0646\u0648\u0639 \u0627\u0644\u0639\u0645\u0644",prev:"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0633\u0627\u0628\u0642",next:"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062A\u0627\u0644\u064A"}},Ds=r=>(Od[P_]||Od.en)[r]||Od.en[r],jh=()=>Bd.dir==="rtl"?-1:1;function I_(){Fi.querySelectorAll("[data-exp-i18n]").forEach(r=>r.innerHTML=Ds(r.dataset.expI18n)),ot("exhibitPrev").setAttribute("aria-label",Ds("prev")),ot("exhibitNext").setAttribute("aria-label",Ds("next")),ot("exhibitMotion").textContent=Ds(jt?"motion.on":"motion.off"),ot("exhibitFilters").setAttribute("aria-label",Ds("filters")),ot("exhibitJump").setAttribute("aria-label",Ds("jump")),ot("exhibitFilters").querySelectorAll("button").forEach(r=>{let e=r.dataset.exhibitFilter,t=Gd.filter(n=>e==="all"||(e==="film"?n.video:!n.video)).length;r.textContent=`${Ds(e)} ${t}`}),nu(),fn()}addEventListener("blink:language",r=>{P_=r.detail,I_()});function Hd(r,e){dispatchEvent(new CustomEvent("blink:open-project",{detail:{id:r,trigger:e}}))}Fi.querySelectorAll("[data-exhibit]").forEach(r=>r.addEventListener("click",e=>{e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),Hd(r.dataset.exhibit,r))}));var A_=0;function nu(){clearTimeout(A_),A_=setTimeout(()=>{$e.refresh(),Oi.forEach(r=>r.measureFrame?.()),dispatchEvent(new Event("blink:layout")),fn()},100)}function fn(){!Mr&&!document.hidden&&(Mr=requestAnimationFrame(L_))}function L_(r){if(Mr=0,document.hidden||ot("viewer").open)return;let e=Math.min((r-E_)/1e3||.016,.05);E_=r,zd.lerp(kd,1-Math.exp(-e*7));let t=!1;for(let n of Oi)!n.visible||n.failed||jt||(n.update(r/1e3,e),n.renderer.render(n.scene,n.camera),t||=n.animate||zd.distanceTo(kd)>.001);t&&(Mr=requestAnimationFrame(L_))}addEventListener("pointermove",r=>{r.pointerType!=="touch"&&(kd.set((r.clientX/innerWidth-.5)*2,-(r.clientY/innerHeight-.5)*2),jt||fn())},{passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Mr),Mr=0,Oi.forEach(r=>r.pauseMedia?.())):(Oi.filter(r=>r.visible).forEach(r=>r.onVisible?.()),fn())});new MutationObserver(()=>{ot("viewer").open?(cancelAnimationFrame(Mr),Mr=0,Oi.forEach(r=>r.pauseMedia?.())):(Oi.filter(r=>r.visible).forEach(r=>r.onVisible?.()),fn())}).observe(ot("viewer"),{attributes:!0,attributeFilter:["open"]});var Vd=class{constructor(e,t,n){this.container=e,this.root=t,this.update=n,this.visible=!1,this.animate=!1,this.failed=!1,this.renderer=new rh({alpha:!0,antialias:!Kh.matches,powerPreference:"low-power",preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,Kh.matches?1.25:1.6)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=dn,this.renderer.toneMapping=xo,this.renderer.toneMappingExposure=1.25,this.camera=new Sn(42,1,.08,80),this.scene=new eo,e.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.resize=()=>{let i=e.clientWidth,s=e.clientHeight;!i||!s||(this.renderer.setSize(i,s,!1),this.camera.aspect=i/s,this.camera.updateProjectionMatrix(),this.onResize?.(i,s),fn())},this.ro=new ResizeObserver(this.resize),this.ro.observe(e),this.io=new IntersectionObserver(i=>{this.visible=i[0].isIntersecting,this.visible?(this.onVisible?.(),fn()):this.pauseMedia?.()},{root:ul,rootMargin:"120px",threshold:0}),this.io.observe(e),this.renderer.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.failed=!0,t.classList.remove("has-webgl"),this.pauseMedia?.(),hl()}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{this.failed=!1,t.classList.add("has-webgl"),hl(),fn()}),this.resize(),Oi.push(this),t.classList.add("has-webgl")}dispose(){this.ro.disconnect(),this.io.disconnect(),this.pauseMedia?.(),this.video?.removeAttribute("src"),this.video?.load(),this.scene.traverse(e=>{e.geometry?.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n&&(n.map?.dispose(),n.dispose())})}),this.environmentTarget?.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}};function C_(r,e=.45,t=0){return new co({color:r,roughness:e,metalness:t})}function Zh(r,e,t,n=[0,0,0],i=[1,1,1]){let s=new Yn(r,e);return s.position.set(...n),s.scale.set(...i),t.add(s),s}function R_(r){let e=new cs(r),t={value:0},n={value:new et(1/1280,1/720)};return e.userData.focusBlur=t,e.userData.focusTexel=n,e.onBeforeCompile=i=>{i.uniforms.focusBlur=t,i.uniforms.focusTexel=n,i.fragmentShader=`uniform float focusBlur;
uniform vec2 focusTexel;
`+i.fragmentShader;let s=`vec4 sampledDiffuseColor = texture2D( map, vMapUv );
   if (focusBlur > 0.01) {
    vec2 d = focusTexel * focusBlur * 0.5;
    sampledDiffuseColor = vec4(0.0);
    for (int x=-2; x<=2; x++) {
     float wx = x==0 ? 6.0 : (abs(x)==1 ? 4.0 : 1.0);
     for (int y=-2; y<=2; y++) {
      float wy = y==0 ? 6.0 : (abs(y)==1 ? 4.0 : 1.0);
      sampledDiffuseColor += texture2D(map,vMapUv+vec2(float(x),float(y))*d)*(wx*wy/256.0);
     }
    }
   }`;i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",Je.map_fragment.replace("vec4 sampledDiffuseColor = texture2D( map, vMapUv );",s))},e.customProgramCacheKey=()=>"blink-focus-v1",e}var Qh,tr=0,$h=0;function fl(r){nr=tu(r),$h=nr*(Pt.length-1)*.58;let e=Math.round(nr*(Pt.length-1));if(e!==fi||!ot("exhibitCategory").textContent){fi=e;let t=Pt[e];ot("exhibitCategory").textContent=t.category,ot("exhibitOpen").textContent=t.title+" \u2197",ot("exhibitPosition").textContent=`${e+1} / ${Pt.length}`,ot("exhibitPrev").disabled=e===0,ot("exhibitNext").disabled=e===Pt.length-1,ot("exhibitJump").value=String(e),Qh?.queueVideo?.()}ot("exhibition").style.setProperty("--exhibit-progress",nr),fn()}function Rw(){let r=ot("exhibition"),e=new Vd(ot("exhibitionWorld"),r,()=>{});Qh=e,e.camera.fov=48,e.camera.updateProjectionMatrix(),e.scene.background=new Qe(1053462),e.scene.fog=new Qa(1053462,12,30);let t=new fo(12901887,1251608,2.5);e.scene.add(t);let n=Zh(new lo(17,80),C_(1449508,.85,.25),e.scene,[0,-2.2,0]);n.rotation.x=-Math.PI/2;let i=new uo,s=[],a=new Map,o=C_(5069157,.38,.55);for(let S=0;S<7;S++){let b=new lr;e.scene.add(b);let E=Zh(new Ur(1,1,.055),o,b,[0,0,-.04]),x=Zh(new Fr(1,1),R_({color:3424587}),b),T=Zh(new Fr(1,1),R_({color:6321537,transparent:!0,opacity:.08}),b);s.push({group:b,frame:E,screen:x,reflection:T,index:-1})}function l(S,b){S.map!==b&&(S.map=b,S.color.set(b?16777215:3424587),S.needsUpdate=!0)}function c(){if(!e.visible||jt||e.failed)return;let S=Math.round(tr/.58),b=new Set;for(let E=Math.max(0,S-4);E<=Math.min(Pt.length-1,S+4);E++)b.add(Pt[E].id);for(let[E,x]of a)b.has(E)||(x.texture?.dispose(),a.delete(E));for(let E=Math.max(0,S-4);E<=Math.min(Pt.length-1,S+4);E++){let x=Pt[E];if(a.has(x.id))continue;let T={texture:null};a.set(x.id,T),i.load(x.thumbnail,A=>{if(a.get(x.id)!==T){A.dispose();return}A.colorSpace=dn,A.anisotropy=Math.min(4,e.renderer.capabilities.getMaxAnisotropy()),T.texture=A,fn()},void 0,()=>fn())}}e.onVisible=()=>{c(),e.queueVideo()};let h=document.createElement("video");h.muted=!0,h.defaultMuted=!0,h.playsInline=!0,h.loop=!0,h.preload="none",e.video=h;let d=-1,u=null,f=0;function g(){h.pause();for(let S of s)S.screen.material.map===u&&l(S.screen.material,a.get(Pt[S.index]?.id)?.texture||null);u?.dispose(),u=null,d=-1}e.pauseMedia=()=>{clearTimeout(f),g(),h.removeAttribute("src"),h.load()},e.resetCatalog=()=>{e.pauseMedia(),a.forEach(S=>S.texture?.dispose()),a.clear(),tr=0,s.forEach(S=>{S.index=-1,S.group.visible=!1})},e.queueVideo=()=>{clearTimeout(f),!(!e.visible||jt||Aw||document.hidden||e.failed||ot("viewer").open)&&(f=setTimeout(()=>{let S=Pt[fi];if(!S.video){g(),e.animate=!1,fn();return}if(d===fi&&u){h.play().catch(()=>{}),fn();return}g(),d=fi,h.src=S.preview,h.load()},180))},h.addEventListener("loadeddata",()=>{!e.visible||jt||document.hidden||d!==fi||ot("viewer").open||(u?.dispose(),u=new so(h),u.colorSpace=dn,h.play().then(fn).catch(fn))}),h.addEventListener("error",()=>{g(),d=-1,fn()});let _=new go,p=new et;function m(S){let b=e.container.getBoundingClientRect();p.set((S.clientX-b.left)/b.width*2-1,-(S.clientY-b.top)/b.height*2+1),_.setFromCamera(p,e.camera);let E=_.intersectObjects(s.filter(x=>x.group.visible).map(x=>x.screen))[0];E&&Hd(Pt[E.object.userData.index].id,ot("exhibitOpen"))}Iw(e.container,m);let w=400,C=0;e.measureFrame=()=>{let S=e.container.getBoundingClientRect(),b=r.querySelector(".exhibition-heading").getBoundingClientRect(),E=r.querySelector(".exhibit-browse").getBoundingClientRect(),x=r.querySelector(".exhibit-gesture"),T=(getComputedStyle(x).display==="none"?r.querySelector(".exhibition-bottom"):x).getBoundingClientRect(),A=(innerHeight<=520?b.bottom:Math.max(b.bottom,E.bottom))-S.top+16,L=T.top-S.top-20;w=Math.max(70,L-A),C=(A+L)/2-S.height/2,fn()},e.onResize=e.measureFrame,e.measureFrame();let y=-1;return e.update=(S,b)=>{tr=jt?$h:Jh(tr,$h,1-Math.exp(-b*8)),e.animate=Math.abs(tr-$h)>.001||!h.paused;let E=Math.round(tr/.58),x=jh(),T=Kh.matches?innerHeight<760?68:58:innerHeight<760?56:48,A=e.container.clientHeight/(2*Math.tan(Ao.degToRad(T/2))*6.2);E!==y&&(c(),y=E),s.forEach((L,D)=>{let O=E+D-3,I=Pt[O];if(L.group.visible=!!I,!I)return;if(L.index!==O){L.index=O,L.screen.userData.index=O;let H=I.width/I.height,R=H>1?4.4:2.25,K=R/H;L.frame.scale.set(R+.07,K+.07,1),L.screen.scale.set(R,K,1),L.reflection.scale.set(R,-K,1),L.reflection.position.set(0,-K-.14,-.01)}let B=(O*.58-tr)*x;L.group.position.set(Math.sin(B)*8,-.12,-Math.cos(B)*8),L.group.rotation.y=-B;let q=1-Ao.smoothstep(Math.abs(O-tr/.58),.08,1.1),z=Math.min(1.3,w/(L.screen.scale.y*A),e.container.clientWidth*.92/(L.screen.scale.x*A));L.group.scale.setScalar(z*Jh(.62,1,q));let j=a.get(I.id)?.texture||null;l(L.screen.material,O===d&&u?u:j),l(L.reflection.material,j);for(let H of[L.screen.material,L.reflection.material]){let R=H.map?.image,K=R?.videoWidth||R?.width||I.width,Se=R?.videoHeight||R?.height||I.height;H.userData.focusTexel.value.set(1/K,1/Se),H.userData.focusBlur.value=(1-q)*12,H.map&&H.color.setScalar(Jh(.55,1,q))}}),e.camera.position.set(0,.25+C/A+zd.y*.09,-1.8),e.camera.lookAt(0,-.12+C/A,-8),e.camera.fov=T,e.camera.updateProjectionMatrix()},fl(0),e}function eu(r){r=tu(r),Us&&!jt&&(ul.scrollTop=Jh(Us.start,Us.end,r),$e.update()),fl(r)}var Ns={progress:0};function Va(r){r=tu(r,0,Pt.length-1);let e=r/(Pt.length-1),t=Math.abs(r-fi)>3;es.killTweensOf(Ns),Ns.progress=nr,t&&(tr=e*(Pt.length-1)*.58),es.to(Ns,{progress:e,duration:jt||t?0:.35,ease:"power2.out",onUpdate:()=>eu(Ns.progress)})}function D_(){ot("exhibitJump").replaceChildren(...Pt.map((r,e)=>{let t=document.createElement("option");return t.value=String(e),t.textContent=`${String(e+1).padStart(2,"0")} \u2014 ${r.title}`,t}))}function Pw(r){if(cl===r)return;cl=r,es.killTweensOf(Ns),Pt=Gd.filter(t=>cl==="all"||(cl==="film"?t.video:!t.video)),ot("exhibitFilters").querySelectorAll("button").forEach(t=>t.setAttribute("aria-pressed",String(t.dataset.exhibitFilter===cl)));let e=new Set(Pt.map(t=>t.id));Fi.querySelectorAll("[data-exhibit]").forEach(t=>t.hidden=!e.has(t.dataset.exhibit)),Fi.querySelector(".exhibit-fallback").scrollLeft=0,Qh?.resetCatalog?.(),tr=0,fi=-1,nr=0,D_(),fl(0),hl(),$e.refresh(),eu(0),Qh?.onVisible?.()}function Iw(r,e){let t=null;r.addEventListener("pointerdown",s=>{!s.isPrimary||s.button!==0||jt||(es.killTweensOf(Ns),t={id:s.pointerId,x:s.clientX,y:s.clientY,start:nr,index:fi,axis:null,delta:0})}),r.addEventListener("pointermove",s=>{if(!t||s.pointerId!==t.id)return;let a=s.clientX-t.x,o=s.clientY-t.y;if(!t.axis&&Math.hypot(a,o)>8&&(t.axis=Math.abs(a)>Math.abs(o)*1.15?"x":"y",t.axis==="x"&&(r.setPointerCapture(s.pointerId),r.classList.add("is-dragging"))),t.axis!=="x")return;s.cancelable&&s.preventDefault(),t.delta=-a*jh();let l=Math.max(180,Math.min(r.clientWidth*.7,600));eu(t.start+t.delta/l/(Pt.length-1))},{passive:!1});function n(s,a){if(!t||s.pointerId!==t.id)return;let o=t;if(t=null,r.classList.remove("is-dragging"),r.hasPointerCapture(s.pointerId)&&r.releasePointerCapture(s.pointerId),o.axis==="x"){let l=Math.round(nr*(Pt.length-1));!a&&Math.abs(o.delta)>40&&l===o.index&&(l+=Math.sign(o.delta)),Va(l)}else!a&&!o.axis&&Math.hypot(s.clientX-o.x,s.clientY-o.y)<8&&e(s)}r.addEventListener("pointerup",s=>n(s,!1)),r.addEventListener("pointercancel",s=>n(s,!0)),r.addEventListener("lostpointercapture",s=>{s.target===r&&n(s,!0)}),r.addEventListener("dragstart",s=>s.preventDefault());let i=0;r.addEventListener("wheel",s=>{if(jt||s.ctrlKey||Math.abs(s.deltaX)<=Math.abs(s.deltaY)||!s.deltaX)return;s.preventDefault(),es.killTweensOf(Ns);let a=s.deltaMode===1?20:s.deltaMode===2?r.clientWidth:1;eu(nr+s.deltaX*a*jh()/Math.max(180,r.clientWidth*.7)/(Pt.length-1)),clearTimeout(i),i=setTimeout(()=>Va(Math.round(nr*(Pt.length-1))),180)},{passive:!1})}ot("exhibitOpen").addEventListener("click",()=>Hd(Pt[fi].id,ot("exhibitOpen")));ot("exhibitPrev").addEventListener("click",()=>Va(fi-1));ot("exhibitNext").addEventListener("click",()=>Va(fi+1));ot("exhibitJump").addEventListener("change",r=>Va(Number(r.target.value)));ot("exhibitFilters").querySelectorAll("button").forEach(r=>r.addEventListener("click",()=>Pw(r.dataset.exhibitFilter)));ot("exhibitOpen").addEventListener("keydown",r=>{(r.key==="ArrowRight"||r.key==="ArrowLeft")&&(r.preventDefault(),Va(fi+(r.key==="ArrowRight"?1:-1)*jh()))});function hl(){Us?.kill(),Us=null,Fi.style.setProperty("--exhibit-distance",`${(Pt.length-1)*tu(innerHeight*.25,200,260)}px`),Fi.classList.toggle("is-scrollable",!jt&&Fi.classList.contains("has-webgl")),!jt&&Fi.classList.contains("has-webgl")?Us=$e.create({trigger:Fi,scroller:ul,start:()=>`top top+=${ot("mainNav").offsetHeight}`,end:"bottom bottom",onUpdate:r=>fl(r.progress)}):Oi.forEach(r=>r.pauseMedia?.()),nu(),fn()}function Lw(){if(!T_){T_=!0;try{Rw()}catch(r){console.warn("BLINK: showing ordinary exhibition links because WebGL is unavailable.",r.message)}}}function N_(){Fi.classList.toggle("is-reduced",jt),I_(),jt||Lw(),hl(),jt||Oi.filter(r=>r.visible).forEach(r=>r.onVisible?.())}ot("exhibitMotion").addEventListener("click",()=>{jt=!jt;try{localStorage.setItem("blink-exhibition-motion",jt?"off":"on")}catch{}N_(),ul.scrollTop=Fi.offsetTop-ot("mainNav").offsetHeight});Kh.addEventListener("change",()=>{Oi.forEach(r=>r.resize()),hl()});addEventListener("pagehide",r=>{r.persisted||(cancelAnimationFrame(Mr),Us?.kill(),Oi.forEach(e=>e.dispose()))});addEventListener("pageshow",nu);D_();N_();fl(0);location.hash&&requestAnimationFrame(()=>{let r=document.getElementById(location.hash.slice(1));r&&r.closest("#scroller")&&(ul.scrollTop=r.offsetTop-ot("mainNav").offsetHeight)});document.fonts.ready.then(nu);
/*! For license information please see experience.js.LEGAL.txt */
