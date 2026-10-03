var _p=0,Iu=1,xp=2;var xo=1,vp=2,pa=3,Wr=0,Un=1,Ki=2,$i=0,ma=1,Lu=2,Du=3,Nu=4,yp=5;var ps=100,Sp=101,Mp=102,bp=103,wp=104,Tp=200,Ep=201,Ap=202,Cp=203,Uu=204,Fu=205,Rp=206,Pp=207,Ip=208,Lp=209,Dp=210,Np=211,Up=212,Fp=213,Op=214,Ol=0,Bl=1,kl=2,sa=3,zl=4,Vl=5,Gl=6,Hl=7,Ou=0,Bp=1,kp=2,Ni=0,Bu=1,ku=2,zu=3,vo=4,Vu=5,Gu=6,Hu=7;var Wu=300,Xr=301,ms=302,pc=303,mc=304,yo=306,Wl=1e3,Xi=1001,Xl=1002,ln=1003,zp=1004;var So=1005;var jt=1006,gc=1007;var qr=1008;var ii=1009,Xu=1010,qu=1011,ga=1012,_c=1013,Ui=1014,Fi=1015,Oi=1016,xc=1017,vc=1018,_a=1020,Yu=35902,Zu=35899,Ju=1021,Ku=1022,xi=1023,qi=1026,Yr=1027,$u=1028,yc=1029,Zr=1030,Sc=1031;var Mc=1033,Mo=33776,bo=33777,wo=33778,To=33779,bc=35840,wc=35841,Tc=35842,Ec=35843,Ac=36196,Cc=37492,Rc=37496,Pc=37488,Ic=37489,Eo=37490,Lc=37491,Dc=37808,Nc=37809,Uc=37810,Fc=37811,Oc=37812,Bc=37813,kc=37814,zc=37815,Vc=37816,Gc=37817,Hc=37818,Wc=37819,Xc=37820,qc=37821,Yc=36492,Zc=36494,Jc=36495,Kc=36283,$c=36284,Ao=36285,Qc=36286;var $a=2300,ql=2301,Nl=2302,wu=2303,Tu=2400,Eu=2401,Au=2402;var Vp=3200;var jc=0,Gp=1,mr="",fn="srgb",Qa="srgb-linear",ja="linear",pt="srgb";var Ul=7680;var Hp=519,Wp=512,Xp=513,qp=514,eh=515,Yp=516,Zp=517,th=518,Jp=519,Kp=35044;var Qu="300 es",Di=2e3,eo=2001;function O_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function B_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function aa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $p(){let r=aa("canvas");return r.style.display="block",r}var Zd={},oa=null;function ju(...r){let e="THREE."+r.shift();oa?oa("log",e,...r):console.log(e,...r)}function Qp(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ze(...r){r=Qp(r);let e="THREE."+r.shift();if(oa)oa("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ge(...r){r=Qp(r);let e="THREE."+r.shift();if(oa)oa("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function us(...r){let e=r.join(" ");e in Zd||(Zd[e]=!0,ze(...r))}function jp(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var em={[Ol]:Bl,[kl]:Gl,[zl]:Hl,[sa]:Vl,[Bl]:Ol,[Gl]:kl,[Hl]:zl,[Vl]:sa},Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=1234567,Ja=Math.PI/180,la=180/Math.PI;function xa(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function ef(r,e){return(r%e+e)%e}function k_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function z_(r,e,t){return r!==e?(t-r)/(e-r):0}function Ka(r,e,t){return(1-t)*r+t*e}function V_(r,e,t,n){return Ka(r,e,1-Math.exp(-t*n))}function G_(r,e=1){return e-Math.abs(ef(r,e*2)-e)}function H_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function W_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function X_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function q_(r,e){return r+Math.random()*(e-r)}function Y_(r){return r*(.5-Math.random())}function Z_(r){r!==void 0&&(Jd=r);let e=Jd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J_(r){return r*Ja}function K_(r){return r*la}function $_(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Q_(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function j_(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function e0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ia(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Co={DEG2RAD:Ja,RAD2DEG:la,generateUUID:xa,clamp:lt,euclideanModulo:ef,mapLinear:k_,inverseLerp:z_,lerp:Ka,damp:V_,pingpong:G_,smoothstep:H_,smootherstep:W_,randInt:X_,randFloat:q_,randFloatSpread:Y_,seededRandom:Z_,degToRad:J_,radToDeg:K_,isPowerOfTwo:$_,ceilPowerOfTwo:Q_,floorPowerOfTwo:j_,setQuaternionFromProperEuler:e0,normalize:Nn,denormalize:ia},it=class r{static{r.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zi=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*_;m<0&&(u=-u,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),C=Math.sin(w);p=Math.sin(p*w)/C,o=Math.sin(o*w)/C,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+_*o;let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class r{static{r.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ru.copy(this).projectOnVector(e),this.sub(ru)}reflect(e){return this.sub(ru.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ru=new J,Kd=new Zi,Ze=class r{static{r.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],w=i[1],C=i[4],y=i[7],S=i[2],b=i[5],E=i[8];return s[0]=a*_+o*w+l*S,s[3]=a*m+o*C+l*b,s[6]=a*p+o*y+l*E,s[1]=c*_+h*w+d*S,s[4]=c*m+h*C+d*b,s[7]=c*p+h*y+d*E,s[2]=u*_+f*w+g*S,s[5]=u*m+f*C+g*b,s[8]=u*p+f*y+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=u*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(su.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(su.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(su.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},su=new Ze,$d=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t0(){let r={enabled:!0,workingColorSpace:Qa,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(i.r=dr(i.r),i.g=dr(i.g),i.b=dr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(i.r=ra(i.r),i.g=ra(i.g),i.b=ra(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?ja:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Qa]:{primaries:e,whitePoint:n,transfer:ja,toXYZ:$d,fromXYZ:Qd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:$d,fromXYZ:Qd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),r}var ot=t0();function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ra(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Hs,Yl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hs===void 0&&(Hs=aa("canvas")),Hs.width=e.width,Hs.height=e.height;let i=Hs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=aa("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=dr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(dr(t[n]/255)*255):t[n]=dr(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},n0=0,ca=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(au(i[a].image)):s.push(au(i[a]))}else s=au(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function au(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Yl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}var i0=0,ou=new J,Mn=class r extends Yi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Xi,i=Xi,s=jt,a=qr,o=xi,l=ii,c=r.DEFAULT_ANISOTROPY,h=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=xa(),this.name="",this.source=new ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ou).x}get height(){return this.source.getSize(ou).y}get depth(){return this.source.getSize(ou).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wl:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wl:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=Wu;Mn.DEFAULT_ANISOTROPY=1;var Nt=class r{static{r.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let C=(c+1)/2,y=(f+1)/2,S=(p+1)/2,b=(h+u)/4,E=(d+_)/4,v=(g+m)/4;return C>y&&C>S?C<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(C),i=b/n,s=E/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=b/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=E/s,i=v/s),this.set(n,i,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zl=class extends Yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new Mn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ca(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},to=class extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jl=class extends Mn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var kt=class r{static{r.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,l,c,h,d,u,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,n,i,s,a,o,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Ws.setFromMatrixColumn(e,0).length(),s=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(r0,e,s0)}lookAt(e,t,n){let i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),Ir.crossVectors(n,jn),Ir.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),Ir.crossVectors(n,jn)),Ir.normalize(),ml.crossVectors(jn,Ir),i[0]=Ir.x,i[4]=ml.x,i[8]=jn.x,i[1]=Ir.y,i[5]=ml.y,i[9]=jn.y,i[2]=Ir.z,i[6]=ml.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],C=n[7],y=n[11],S=n[15],b=i[0],E=i[4],v=i[8],T=i[12],A=i[1],D=i[5],I=i[9],O=i[13],L=i[2],B=i[6],q=i[10],z=i[14],K=i[3],H=i[7],R=i[11],Q=i[15];return s[0]=a*b+o*A+l*L+c*K,s[4]=a*E+o*D+l*B+c*H,s[8]=a*v+o*I+l*q+c*R,s[12]=a*T+o*O+l*z+c*Q,s[1]=h*b+d*A+u*L+f*K,s[5]=h*E+d*D+u*B+f*H,s[9]=h*v+d*I+u*q+f*R,s[13]=h*T+d*O+u*z+f*Q,s[2]=g*b+_*A+m*L+p*K,s[6]=g*E+_*D+m*B+p*H,s[10]=g*v+_*I+m*q+p*R,s[14]=g*T+_*O+m*z+p*Q,s[3]=w*b+C*A+y*L+S*K,s[7]=w*E+C*D+y*B+S*H,s[11]=w*v+C*I+y*q+S*R,s[15]=w*T+C*O+y*z+S*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],w=l*f-c*u,C=o*f-c*d,y=o*u-l*d,S=a*f-c*h,b=a*u-l*h,E=a*d-o*h;return t*(_*w-m*C+p*y)-n*(g*w-m*S+p*b)+i*(g*C-_*S+p*E)-s*(g*y-_*b+m*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(s*h-o*l)+i*(s*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=t*o-n*a,C=t*l-i*a,y=t*c-s*a,S=n*l-i*o,b=n*c-s*o,E=i*c-s*l,v=h*_-d*g,T=h*m-u*g,A=h*p-f*g,D=d*m-u*_,I=d*p-f*_,O=u*p-f*m,L=w*O-C*I+y*D+S*A-b*T+E*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return e[0]=(o*O-l*I+c*D)*B,e[1]=(i*I-n*O-s*D)*B,e[2]=(_*E-m*b+p*S)*B,e[3]=(u*b-d*E-f*S)*B,e[4]=(l*A-a*O-c*T)*B,e[5]=(t*O-i*A+s*T)*B,e[6]=(m*y-g*E-p*C)*B,e[7]=(h*E-u*y+f*C)*B,e[8]=(a*I-o*A+c*v)*B,e[9]=(n*A-t*I-s*v)*B,e[10]=(g*b-_*y+p*w)*B,e[11]=(d*y-h*b-f*w)*B,e[12]=(o*T-a*D-l*v)*B,e[13]=(t*D-n*T+i*v)*B,e[14]=(_*C-g*S-m*w)*B,e[15]=(h*S-d*C+u*w)*B,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,_=a*h,m=a*d,p=o*d,w=l*c,C=l*h,y=l*d,S=n.x,b=n.y,E=n.z;return i[0]=(1-(_+p))*S,i[1]=(f+y)*S,i[2]=(g-C)*S,i[3]=0,i[4]=(f-y)*b,i[5]=(1-(u+p))*b,i[6]=(m+w)*b,i[7]=0,i[8]=(g+C)*E,i[9]=(m-w)*E,i[10]=(1-(u+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ws.set(i[0],i[1],i[2]).length(),o=Ws.set(i[4],i[5],i[6]).length(),l=Ws.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ri.copy(this);let c=1/a,h=1/o,d=1/l;return Ri.elements[0]*=c,Ri.elements[1]*=c,Ri.elements[2]*=c,Ri.elements[4]*=h,Ri.elements[5]*=h,Ri.elements[6]*=h,Ri.elements[8]*=d,Ri.elements[9]*=d,Ri.elements[10]*=d,t.setFromRotationMatrix(Ri),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Di,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Di)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===eo)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Di,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),f=-(n+i)/(n-i),g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Di)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===eo)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ws=new J,Ri=new kt,r0=new J(0,0,0),s0=new J(1,1,1),Ir=new J,ml=new J,jn=new J,jd=new kt,ep=new Zi,pr=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ep.setFromEuler(this),this.setFromQuaternion(ep,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pr.DEFAULT_ORDER="XYZ";var ha=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a0=0,tp=new J,Xs=new Zi,or=new kt,gl=new J,Xa=new J,o0=new J,l0=new Zi,np=new J(1,0,0),ip=new J(0,1,0),rp=new J(0,0,1),sp={type:"added"},c0={type:"removed"},qs={type:"childadded",child:null},lu={type:"childremoved",child:null},Xn=class r extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new J,t=new pr,n=new Zi,i=new J(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Ze}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(np,e)}rotateY(e){return this.rotateOnAxis(ip,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return tp.copy(e).applyQuaternion(this.quaternion),this.position.add(tp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(np,e)}translateY(e){return this.translateOnAxis(ip,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gl.copy(e):gl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(Xa,gl,this.up):or.lookAt(gl,Xa,this.up),this.quaternion.setFromRotationMatrix(or),i&&(or.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(or),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sp),qs.child=e,this.dispatchEvent(qs),qs.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(c0),lu.child=e,this.dispatchEvent(lu),lu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sp),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,l0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Xn.DEFAULT_UP=new J(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fr=class extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},h0={type:"move"},ua=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function cu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var at=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ot.workingColorSpace){if(e=ef(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=cu(a,s,e+1/3),this.g=cu(a,s,e),this.b=cu(a,s,e-1/3)}return ot.colorSpaceToWorking(this,i),this}setStyle(e,t=fn){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){let n=tm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return ot.workingToColorSpace(yn.copy(this),e),Math.round(lt(yn.r*255,0,255))*65536+Math.round(lt(yn.g*255,0,255))*256+Math.round(lt(yn.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(yn.copy(this),t);let n=yn.r,i=yn.g,s=yn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=fn){ot.workingToColorSpace(yn.copy(this),e);let t=yn.r,n=yn.g,i=yn.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(_l);let n=Ka(Lr.h,_l.h,t),i=Ka(Lr.s,_l.s,t),s=Ka(Lr.l,_l.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},yn=new at;at.NAMES=tm;var no=class extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pi=new J,lr=new J,hu=new J,cr=new J,Ys=new J,Zs=new J,ap=new J,uu=new J,fu=new J,du=new J,pu=new Nt,mu=new Nt,gu=new Nt,Fr=class r{constructor(e=new J,t=new J,n=new J){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Pi.subVectors(e,t),i.cross(Pi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Pi.subVectors(i,t),lr.subVectors(n,t),hu.subVectors(e,t);let a=Pi.dot(Pi),o=Pi.dot(lr),l=Pi.dot(hu),c=lr.dot(lr),h=lr.dot(hu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,cr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,cr.x),l.addScaledVector(a,cr.y),l.addScaledVector(o,cr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(e,t),mu.fromBufferAttribute(e,n),gu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(pu,s.x),a.addScaledVector(mu,s.y),a.addScaledVector(gu,s.z),a}static isFrontFacing(e,t,n,i){return Pi.subVectors(n,t),lr.subVectors(e,t),Pi.cross(lr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),Pi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Ys.subVectors(i,n),Zs.subVectors(s,n),uu.subVectors(e,n);let l=Ys.dot(uu),c=Zs.dot(uu);if(l<=0&&c<=0)return t.copy(n);fu.subVectors(e,i);let h=Ys.dot(fu),d=Zs.dot(fu);if(h>=0&&d<=h)return t.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ys,a);du.subVectors(e,s);let f=Ys.dot(du),g=Zs.dot(du);if(g>=0&&f<=g)return t.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Zs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return ap.subVectors(s,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(ap,o);let p=1/(m+_+u);return a=_*p,o=u*p,t.copy(n).addScaledVector(Ys,a).addScaledVector(Zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Or=class{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ii):Ii.fromBufferAttribute(s,a),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xl.copy(n.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qa),vl.subVectors(this.max,qa),Js.subVectors(e.a,qa),Ks.subVectors(e.b,qa),$s.subVectors(e.c,qa),Dr.subVectors(Ks,Js),Nr.subVectors($s,Ks),os.subVectors(Js,$s);let t=[0,-Dr.z,Dr.y,0,-Nr.z,Nr.y,0,-os.z,os.y,Dr.z,0,-Dr.x,Nr.z,0,-Nr.x,os.z,0,-os.x,-Dr.y,Dr.x,0,-Nr.y,Nr.x,0,-os.y,os.x,0];return!_u(t,Js,Ks,$s,vl)||(t=[1,0,0,0,1,0,0,0,1],!_u(t,Js,Ks,$s,vl))?!1:(yl.crossVectors(Dr,Nr),t=[yl.x,yl.y,yl.z],_u(t,Js,Ks,$s,vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},hr=[new J,new J,new J,new J,new J,new J,new J,new J],Ii=new J,xl=new Or,Js=new J,Ks=new J,$s=new J,Dr=new J,Nr=new J,os=new J,qa=new J,vl=new J,yl=new J,ls=new J;function _u(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ls.fromArray(r,s);let o=i.x*Math.abs(ls.x)+i.y*Math.abs(ls.y)+i.z*Math.abs(ls.z),l=e.dot(ls),c=t.dot(ls),h=n.dot(ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Jt=new J,Sl=new it,u0=0,gi=class extends Yi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:u0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kp,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ia(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),i=Nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Nn(t,this.array),n=Nn(n,this.array),i=Nn(i,this.array),s=Nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var io=class extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ro=class extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var _i=class extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}},f0=new Or,Ya=new J,xu=new J,fa=class{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):f0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ya.subVectors(e,this.center);let t=Ya.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ya,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ya.copy(e.center).add(xu)),this.expandByPoint(Ya.copy(e.center).sub(xu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},d0=0,mi=new kt,vu=new Xn,Qs=new J,ei=new Or,Za=new Or,on=new J,Ji=class r extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?ro:io)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _i(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];ei.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){let n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Za.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(ei.min,Za.min),ei.expandByPoint(on),on.addVectors(ei.max,Za.max),ei.expandByPoint(on)):(ei.expandByPoint(Za.min),ei.expandByPoint(Za.max))}ei.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)on.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(on));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)on.fromBufferAttribute(o,c),l&&(Qs.fromBufferAttribute(e,c),on.add(Qs)),i=Math.max(i,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new gi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new J,l[v]=new J;let c=new J,h=new J,d=new J,u=new it,f=new it,g=new it,_=new J,m=new J;function p(v,T,A){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,A),u.fromBufferAttribute(s,v),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,A),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[v].add(_),o[T].add(_),o[A].add(_),l[v].add(m),l[T].add(m),l[A].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,T=w.length;v<T;++v){let A=w[v],D=A.start,I=A.count;for(let O=D,L=D+I;O<L;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let C=new J,y=new J,S=new J,b=new J;function E(v){S.fromBufferAttribute(i,v),b.copy(S);let T=o[v];C.copy(T),C.sub(S.multiplyScalar(S.dot(T))).normalize(),y.crossVectors(b,T);let D=y.dot(l[v])<0?-1:1;a.setXYZW(v,C.x,C.y,C.z,D)}for(let v=0,T=w.length;v<T;++v){let A=w[v],D=A.start,I=A.count;for(let O=D,L=D+I;O<L;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new J,s=new J,a=new J,o=new J,l=new J,c=new J,h=new J,d=new J;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new gi(u,h,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var yu=new J,p0=new J,m0=new Ze,Li=class{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=yu.subVectors(n,t).cross(p0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(yu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||m0.getNormalMatrix(e),i=this.coplanarPoint(yu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},g0=0,Br=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=ma,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uu,this.blendDst=Fu,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ul,this.stencilZFail=Ul,this.stencilZPass=Ul,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Li().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ur=new J,Su=new J,Ml=new J,bl=new J,so=class{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Su.copy(e).add(t).multiplyScalar(.5),Ml.copy(t).sub(e).normalize(),bl.copy(this.origin).sub(Su);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ml),o=bl.dot(this.direction),l=-bl.dot(Ml),c=bl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Su).addScaledVector(Ml,u),f}intersectSphere(e,t){if(e.radius<0)return null;ur.subVectors(e.center,this.origin);let n=ur.dot(this.direction),i=ur.dot(ur)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,w=n.y-a.y,C=n.z-a.z,y=Math.abs(l),S=Math.abs(c),b=Math.abs(h),E,v,T,A,D,I,O,L,B,q,z,K;if(y>=S&&y>=b?(T=l,I=d,B=g,K=p,l>=0?(E=c,v=h,A=u,D=f,O=_,L=m,q=w,z=C):(E=h,v=c,A=f,D=u,O=m,L=_,q=C,z=w)):S>=b?(T=c,I=u,B=_,K=w,c>=0?(E=h,v=l,A=f,D=d,O=m,L=g,q=C,z=p):(E=l,v=h,A=d,D=f,O=g,L=m,q=p,z=C)):(T=h,I=f,B=m,K=C,h>=0?(E=l,v=c,A=d,D=u,O=g,L=_,q=p,z=w):(E=c,v=l,A=u,D=d,O=_,L=g,q=w,z=p)),T===0)return null;let H=E/T,R=v/T,Q=1/T,Se=A-H*I,Me=D-R*I,Ve=O-H*B,ke=L-R*B,He=q-H*K,Z=z-R*K,ee=He*ke-Z*Ve,_e=Se*Z-Me*He,Oe=Ve*Me-ke*Se;if(i){if(ee<0||_e<0||Oe<0)return null}else if((ee<0||_e<0||Oe<0)&&(ee>0||_e>0||Oe>0))return null;let me=ee+_e+Oe;if(me===0)return null;let Ue=Q*(ee*I+_e*B+Oe*K);return(me>0?Ue<0:Ue>0)?null:this.at(Ue/me,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fs=class extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Ou,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},op=new kt,cs=new so,wl=new fa,lp=new J,Tl=new J,El=new J,Al=new J,Mu=new J,Cl=new J,cp=new J,Rl=new J,qn=class extends Xn{constructor(e=new Ji,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){Cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Mu.fromBufferAttribute(d,e),a?Cl.addScaledVector(Mu,h):Cl.addScaledVector(Mu.sub(t),h))}t.add(Cl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(s),cs.copy(e.ray).recast(e.near),!(wl.containsPoint(cs.origin)===!1&&(cs.intersectSphere(wl,lp)===null||cs.origin.distanceToSquared(lp)>(e.far-e.near)**2))&&(op.copy(s).invert(),cs.copy(e.ray).applyMatrix4(op),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),C=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,S=C;y<S;y+=3){let b=o.getX(y),E=o.getX(y+1),v=o.getX(y+2);i=Pl(this,p,e,n,c,h,d,b,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let w=o.getX(m),C=o.getX(m+1),y=o.getX(m+2);i=Pl(this,a,e,n,c,h,d,w,C,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),C=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,S=C;y<S;y+=3){let b=y,E=y+1,v=y+2;i=Pl(this,p,e,n,c,h,d,b,E,v),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let w=m,C=m+1,y=m+2;i=Pl(this,a,e,n,c,h,d,w,C,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function _0(r,e,t,n,i,s,a,o){let l;if(e.side===Un?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Wr,o),l===null)return null;Rl.copy(o),Rl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Rl);return c<t.near||c>t.far?null:{distance:c,point:Rl.clone(),object:r}}function Pl(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Tl),r.getVertexPosition(l,El),r.getVertexPosition(c,Al);let h=_0(r,e,t,n,Tl,El,Al,cp);if(h){let d=new J;Fr.getBarycoord(cp,Tl,El,Al,d),i&&(h.uv=Fr.getInterpolatedAttribute(i,o,l,c,d,new it)),s&&(h.uv1=Fr.getInterpolatedAttribute(s,o,l,c,d,new it)),a&&(h.normal=Fr.getInterpolatedAttribute(a,o,l,c,d,new J),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new J,materialIndex:0};Fr.getNormal(Tl,El,Al,u.normal),h.face=u,h.barycoord=d}return h}var Kl=class extends Mn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=ln,h=ln,d,u){super(null,a,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hs=new fa,x0=new it(.5,.5),Il=new J,ao=class{constructor(e=new Li,t=new Li,n=new Li,i=new Li,s=new Li,a=new Li){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],u=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],w=s[12],C=s[13],y=s[14],S=s[15];if(i[0].setComponents(c-a,f-h,p-g,S-w).normalize(),i[1].setComponents(c+a,f+h,p+g,S+w).normalize(),i[2].setComponents(c+o,f+d,p+_,S+C).normalize(),i[3].setComponents(c-o,f-d,p-_,S-C).normalize(),n)i[4].setComponents(l,u,m,y).normalize(),i[5].setComponents(c-l,f-u,p-m,S-y).normalize();else if(i[4].setComponents(c-l,f-u,p-m,S-y).normalize(),t===Di)i[5].setComponents(c+l,f+u,p+m,S+y).normalize();else if(t===eo)i[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);let t=x0.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Il.x=i.normal.x>0?e.max.x:e.min.x,Il.y=i.normal.y>0?e.max.y:e.min.y,Il.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Il)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oo=class extends Mn{constructor(e,t,n,i,s=jt,a=jt,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var lo=class extends Mn{constructor(e=[],t=Xr,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}};var kr=class extends Mn{constructor(e,t,n=Ui,i,s,a,o=ln,l=ln,c,h=qi,d=1){if(h!==qi&&h!==Yr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ca(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$l=class extends kr{constructor(e,t=Ui,n=Xr,i,s,a=ln,o=ln,l,c=qi){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},co=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},zr=class r extends Ji{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new _i(c,3)),this.setAttribute("normal",new _i(h,3)),this.setAttribute("uv",new _i(d,2));function g(_,m,p,w,C,y,S,b,E,v,T){let A=y/E,D=S/v,I=y/2,O=S/2,L=b/2,B=E+1,q=v+1,z=0,K=0,H=new J;for(let R=0;R<q;R++){let Q=R*D-O;for(let Se=0;Se<B;Se++){let Me=Se*A-I;H[_]=Me*w,H[m]=Q*C,H[p]=L,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[p]=b>0?1:-1,h.push(H.x,H.y,H.z),d.push(Se/E),d.push(1-R/v),z+=1}}for(let R=0;R<v;R++)for(let Q=0;Q<E;Q++){let Se=u+Q+B*R,Me=u+Q+B*(R+1),Ve=u+(Q+1)+B*(R+1),ke=u+(Q+1)+B*R;l.push(Se,Me,ke),l.push(Me,Ve,ke),K+=6}o.addGroup(f,K,T),f+=K,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var ds=class r extends Ji{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let w=p*u-a;for(let C=0;C<c;C++){let y=C*d-s;g.push(y,-w,0),_.push(0,0,1),m.push(C/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let C=w+c*p,y=w+c*(p+1),S=w+1+c*(p+1),b=w+1+c*p;f.push(C,y,b),f.push(y,S,b)}this.setIndex(f),this.setAttribute("position",new _i(g,3)),this.setAttribute("normal",new _i(_,3)),this.setAttribute("uv",new _i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};function gs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(hp(i))i.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(hp(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function bn(r){let e={};for(let t=0;t<r.length;t++){let n=gs(r[t]);for(let i in n)e[i]=n[i]}return e}function hp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function v0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function tf(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}var nm={clone:gs,merge:bn},y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ti=class extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(i.value);break;case"v2":this.uniforms[n].value=new it().fromArray(i.value);break;case"v3":this.uniforms[n].value=new J().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ze().fromArray(i.value);break;case"m4":this.uniforms[n].value=new kt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ql=class extends ti{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ho=class extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var jl=class extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ec=class extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function js(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function bu(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Vr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tc=class extends Vr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tu,endingEnd:Tu}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eu:s=e,o=2*t-n;break;case Au:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Eu:a=e,l=2*n-t;break;case Au:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,w=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,C=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let S=0;S!==o;++S)s[S]=p*a[h+S]+w*a[c+S]+C*a[l+S]+y*a[d+S];return s}},nc=class extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},ic=class extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},rc=class extends Vr{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(i-t),_=1-g;for(let m=0;m!==o;++m)s[m]=a[c+m]*_+a[l+m]*g;return s}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=f*u+g*2,w=d[p],C=d[p+1],y=e*u+g*2,S=h[y],b=h[y+1],E=b0(n,t,w,S,i);s[g]=im(E,_,C,b,m)}return s}};function im(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function M0(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function b0(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=im(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let l=M0(s,e,t,n,i);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var ni=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=js(t,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:js(e.times,Array),values:js(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),bu(e.settings)&&(n.settings={inTangents:js(e.settings.inTangents,Array),outTangents:js(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new rc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case ql:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break;case wu:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return ql;case this.InterpolantFactoryMethodSmooth:return Nl;case this.InterpolantFactoryMethodBezier:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;bu(this.settings)&&(up(this.settings.inTangents,e),up(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&B_(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Nl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,bu(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function up(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}ni.prototype.ValueTypeName="";ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=ql;var Gr=class extends ni{constructor(e,t,n){super(e,t,n)}};Gr.prototype.ValueTypeName="bool";Gr.prototype.ValueBufferType=Array;Gr.prototype.DefaultInterpolation=$a;Gr.prototype.InterpolantFactoryMethodLinear=void 0;Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var sc=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}};sc.prototype.ValueTypeName="color";var ac=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}};ac.prototype.ValueTypeName="number";var oc=class extends Vr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zi.slerpFlat(s,0,a,c-o,a,c,l);return s}},uo=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new oc(this.times,this.values,this.getValueSize(),e)}};uo.prototype.ValueTypeName="quaternion";uo.prototype.InterpolantFactoryMethodSmooth=void 0;var Hr=class extends ni{constructor(e,t,n){super(e,t,n)}};Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=$a;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;var lc=class extends ni{constructor(e,t,n,i){super(e,t,n,i)}};lc.prototype.ValueTypeName="vector";var Fl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(fp(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!fp(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function fp(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var cc=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rm=new cc,da=class{constructor(e){this.manager=e!==void 0?e:rm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};da.DEFAULT_MATERIAL_NAME="__DEFAULT";var ea=new WeakMap,hc=class extends da{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Fl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=ea.get(a);d===void 0&&(d=[],ea.set(a,d)),d.push({onLoad:t,onError:i})}return a}let o=aa("img");function l(){h(),t&&t(this);let d=ea.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}ea.delete(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),Fl.remove(`image:${e}`);let u=ea.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}ea.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var fo=class extends da{constructor(e){super(e)}load(e,t,n,i){let s=new Mn,a=new hc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},uc=class extends Xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},po=class extends uc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}};var Ll=new J,Dl=new Zi,Wi=new J,mo=class extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ll,Dl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ll,Dl,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ll,Dl,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ll,Dl,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ur=new J,dp=new it,pp=new it,Sn=class extends mo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,dp,pp),t.subVectors(pp,dp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var go=class extends mo{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var ta=-90,na=1,fc=class extends Xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Sn(ta,na,e,t);i.layers=this.layers,this.add(i);let s=new Sn(ta,na,e,t);s.layers=this.layers,this.add(s);let a=new Sn(ta,na,e,t);a.layers=this.layers,this.add(a);let o=new Sn(ta,na,e,t);o.layers=this.layers,this.add(o);let l=new Sn(ta,na,e,t);l.layers=this.layers,this.add(l);let c=new Sn(ta,na,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},dc=class extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var nf="\\[\\]\\.:\\/",w0=new RegExp("["+nf+"]","g"),rf="[^"+nf+"]",T0="[^"+nf.replace("\\.","")+"]",E0=/((?:WC+[\/:])*)/.source.replace("WC",rf),A0=/(WCOD+)?/.source.replace("WCOD",T0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rf),R0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rf),P0=new RegExp("^"+E0+A0+C0+R0+"$"),I0=["material","materials","bones","map"],Cu=class{constructor(e,t,n){let i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Rt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w0,"")}static parseTrackName(e){let t=P0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);I0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=Cu;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bw=new Float32Array(1);var mp=new kt,_o=class{constructor(e,t,n=0,i=1/0){this.ray=new so(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mp),this}intersectObject(e,t=!0,n=[]){return Ru(e,this,n,t),n.sort(gp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Ru(e[i],this,n,t);return n.sort(gp),n}};function gp(r,e){return r.distance-e.distance}function Ru(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Ru(s[a],e,t,!0)}}var Pu=class r{static{r.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};function sf(r,e,t,n){let i=L0(n);switch(t){case Ju:return r*e;case $u:return r*e/i.components*i.byteLength;case yc:return r*e/i.components*i.byteLength;case Zr:return r*e*2/i.components*i.byteLength;case Sc:return r*e*2/i.components*i.byteLength;case Ku:return r*e*3/i.components*i.byteLength;case xi:return r*e*4/i.components*i.byteLength;case Mc:return r*e*4/i.components*i.byteLength;case Mo:case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wo:case To:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wc:case Ec:return Math.max(r,16)*Math.max(e,8)/4;case bc:case Tc:return Math.max(r,8)*Math.max(e,8)/2;case Ac:case Cc:case Pc:case Ic:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Eo:case Lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case zc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Yc:case Zc:case Jc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Kc:case $c:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ao:case Qc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function L0(r){switch(r){case ii:case Xu:return{byteLength:1,components:1};case ga:case qu:case Oi:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Ui:case _c:case Fi:return{byteLength:4,components:1};case Yu:case Zu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Em(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function N0(r){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var U0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
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
#endif`,O0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,V0=`#ifdef USE_AOMAP
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
#endif`,G0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H0=`#ifdef USE_BATCHING
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
#endif`,W0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Z0=`#ifdef USE_IRIDESCENCE
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
#endif`,J0=`#ifdef USE_BUMPMAP
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
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rx=`#define PI 3.141592653589793
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
} // validated`,sx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ax=`vec3 transformedNormal = objectNormal;
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
#endif`,ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",fx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dx=`#ifdef USE_ENVMAP
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
#endif`,px=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mx=`#ifdef USE_ENVMAP
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
#endif`,gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,xx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mx=`#ifdef USE_GRADIENTMAP
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
}`,bx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Px=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lx=`PhysicalMaterial material;
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
#endif`,Dx=`uniform sampler2D dfgLUT;
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
}`,Nx=`
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
#endif`,Ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ox=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xx=`#if defined( USE_POINTS_UV )
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
#endif`,qx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Qx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rv=`#ifdef USE_NORMALMAP
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
#endif`,sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yv=`float getShadowMask() {
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
}`,Sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mv=`#ifdef USE_SKINNING
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
#endif`,bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wv=`#ifdef USE_SKINNING
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
#endif`,Tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ev=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Av=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rv=`#ifdef USE_TRANSMISSION
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
#endif`,Pv=`#ifdef USE_TRANSMISSION
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
#endif`,Iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Uv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fv=`uniform sampler2D t2D;
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
}`,Ov=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`#include <common>
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
}`,Gv=`#if DEPTH_PACKING == 3200
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
}`,Hv=`#define DISTANCE
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
}`,Wv=`#define DISTANCE
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
}`,Xv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`uniform float scale;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,Jv=`#include <common>
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
}`,Kv=`uniform vec3 diffuse;
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
}`,$v=`#define LAMBERT
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
}`,Qv=`#define LAMBERT
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
}`,jv=`#define MATCAP
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
}`,ey=`#define MATCAP
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
}`,ty=`#define NORMAL
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
}`,ny=`#define NORMAL
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
}`,iy=`#define PHONG
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
}`,ry=`#define PHONG
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
}`,sy=`#define STANDARD
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
}`,ay=`#define STANDARD
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
}`,oy=`#define TOON
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
}`,ly=`#define TOON
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
}`,cy=`uniform float size;
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
}`,hy=`uniform vec3 diffuse;
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
}`,uy=`#include <common>
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
}`,fy=`uniform vec3 color;
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
}`,dy=`uniform float rotation;
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
}`,py=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:U0,alphahash_pars_fragment:F0,alphamap_fragment:O0,alphamap_pars_fragment:B0,alphatest_fragment:k0,alphatest_pars_fragment:z0,aomap_fragment:V0,aomap_pars_fragment:G0,batching_pars_vertex:H0,batching_vertex:W0,begin_vertex:X0,beginnormal_vertex:q0,bsdfs:Y0,iridescence_fragment:Z0,bumpmap_pars_fragment:J0,clipping_planes_fragment:K0,clipping_planes_pars_fragment:$0,clipping_planes_pars_vertex:Q0,clipping_planes_vertex:j0,color_fragment:ex,color_pars_fragment:tx,color_pars_vertex:nx,color_vertex:ix,common:rx,cube_uv_reflection_fragment:sx,defaultnormal_vertex:ax,displacementmap_pars_vertex:ox,displacementmap_vertex:lx,emissivemap_fragment:cx,emissivemap_pars_fragment:hx,colorspace_fragment:ux,colorspace_pars_fragment:fx,envmap_fragment:dx,envmap_common_pars_fragment:px,envmap_pars_fragment:mx,envmap_pars_vertex:gx,envmap_physical_pars_fragment:Ax,envmap_vertex:_x,fog_vertex:xx,fog_pars_vertex:vx,fog_fragment:yx,fog_pars_fragment:Sx,gradientmap_pars_fragment:Mx,lightmap_pars_fragment:bx,lights_lambert_fragment:wx,lights_lambert_pars_fragment:Tx,lights_pars_begin:Ex,lights_toon_fragment:Cx,lights_toon_pars_fragment:Rx,lights_phong_fragment:Px,lights_phong_pars_fragment:Ix,lights_physical_fragment:Lx,lights_physical_pars_fragment:Dx,lights_fragment_begin:Nx,lights_fragment_maps:Ux,lights_fragment_end:Fx,lightprobes_pars_fragment:Ox,logdepthbuf_fragment:Bx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:zx,logdepthbuf_vertex:Vx,map_fragment:Gx,map_pars_fragment:Hx,map_particle_fragment:Wx,map_particle_pars_fragment:Xx,metalnessmap_fragment:qx,metalnessmap_pars_fragment:Yx,morphinstance_vertex:Zx,morphcolor_vertex:Jx,morphnormal_vertex:Kx,morphtarget_pars_vertex:$x,morphtarget_vertex:Qx,normal_fragment_begin:jx,normal_fragment_maps:ev,normal_pars_fragment:tv,normal_pars_vertex:nv,normal_vertex:iv,normalmap_pars_fragment:rv,clearcoat_normal_fragment_begin:sv,clearcoat_normal_fragment_maps:av,clearcoat_pars_fragment:ov,iridescence_pars_fragment:lv,opaque_fragment:cv,packing:hv,premultiplied_alpha_fragment:uv,project_vertex:fv,dithering_fragment:dv,dithering_pars_fragment:pv,roughnessmap_fragment:mv,roughnessmap_pars_fragment:gv,shadowmap_pars_fragment:_v,shadowmap_pars_vertex:xv,shadowmap_vertex:vv,shadowmask_pars_fragment:yv,skinbase_vertex:Sv,skinning_pars_vertex:Mv,skinning_vertex:bv,skinnormal_vertex:wv,specularmap_fragment:Tv,specularmap_pars_fragment:Ev,tonemapping_fragment:Av,tonemapping_pars_fragment:Cv,transmission_fragment:Rv,transmission_pars_fragment:Pv,uv_pars_fragment:Iv,uv_pars_vertex:Lv,uv_vertex:Dv,worldpos_vertex:Nv,background_vert:Uv,background_frag:Fv,backgroundCube_vert:Ov,backgroundCube_frag:Bv,cube_vert:kv,cube_frag:zv,depth_vert:Vv,depth_frag:Gv,distance_vert:Hv,distance_frag:Wv,equirect_vert:Xv,equirect_frag:qv,linedashed_vert:Yv,linedashed_frag:Zv,meshbasic_vert:Jv,meshbasic_frag:Kv,meshlambert_vert:$v,meshlambert_frag:Qv,meshmatcap_vert:jv,meshmatcap_frag:ey,meshnormal_vert:ty,meshnormal_frag:ny,meshphong_vert:iy,meshphong_frag:ry,meshphysical_vert:sy,meshphysical_frag:ay,meshtoon_vert:oy,meshtoon_frag:ly,points_vert:cy,points_frag:hy,shadow_vert:uy,shadow_frag:fy,sprite_vert:dy,sprite_frag:py},ve={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},ji={basic:{uniforms:bn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:bn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:bn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:bn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:bn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new at(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:bn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:bn([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:bn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:bn([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:bn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:bn([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:bn([ve.common,ve.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:bn([ve.lights,ve.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ji.physical={uniforms:bn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var nh={r:0,b:0,g:0},my=new kt,Am=new Ze;Am.set(-1,0,0,0,1,0,0,0,1);function gy(r,e,t,n,i,s){let a=new at(0),o=i===!0?0:1,l,c,h=null,d=0,u=null;function f(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let y=w.backgroundBlurriness>0;C=e.get(C,y)}return C}function g(w){let C=!1,y=f(w);y===null?m(a,o):y&&y.isColor&&(m(y,1),C=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(w,C){let y=f(C);y&&(y.isCubeTexture||y.mapping===yo)?(c===void 0&&(c=new qn(new zr(1,1,1),new ti({name:"BackgroundCubeMaterial",uniforms:gs(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(my.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Am),c.material.toneMapped=ot.getTransfer(y.colorSpace)!==pt,(h!==y||d!==y.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new qn(new ds(2,2),new ti({name:"BackgroundMaterial",uniforms:gs(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=ot.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=r.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,C){w.getRGB(nh,tf(r)),t.buffers.color.setClear(nh.r,nh.g,nh.b,C,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,C=1){a.set(w),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:g,addToRenderList:_,dispose:p}}function _y(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,a=!1;function o(D,I,O,L,B){let q=!1,z=d(D,L,O,I);s!==z&&(s=z,c(s.object)),q=f(D,L,O,B),q&&g(D,L,O,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(D,I,O,L),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function h(D){return r.deleteVertexArray(D)}function d(D,I,O,L){let B=L.wireframe===!0,q=n[I.id];q===void 0&&(q={},n[I.id]=q);let z=D.isInstancedMesh===!0?D.id:0,K=q[z];K===void 0&&(K={},q[z]=K);let H=K[O.id];H===void 0&&(H={},K[O.id]=H);let R=H[B];return R===void 0&&(R=u(l()),H[B]=R),R}function u(D){let I=[],O=[],L=[];for(let B=0;B<t;B++)I[B]=0,O[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:L,object:D,attributes:{},index:null}}function f(D,I,O,L){let B=s.attributes,q=I.attributes,z=0,K=O.getAttributes();for(let H in K)if(K[H].location>=0){let Q=B[H],Se=q[H];if(Se===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Se=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Se=D.instanceColor)),Q===void 0||Q.attribute!==Se||Se&&Q.data!==Se.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function g(D,I,O,L){let B={},q=I.attributes,z=0,K=O.getAttributes();for(let H in K)if(K[H].location>=0){let Q=q[H];Q===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));let Se={};Se.attribute=Q,Q&&Q.data&&(Se.data=Q.data),B[H]=Se,z++}s.attributes=B,s.attributesNum=z,s.index=L}function _(){let D=s.newAttributes;for(let I=0,O=D.length;I<O;I++)D[I]=0}function m(D){p(D,0)}function p(D,I){let O=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;O[D]=1,L[D]===0&&(r.enableVertexAttribArray(D),L[D]=1),B[D]!==I&&(r.vertexAttribDivisor(D,I),B[D]=I)}function w(){let D=s.newAttributes,I=s.enabledAttributes;for(let O=0,L=I.length;O<L;O++)I[O]!==D[O]&&(r.disableVertexAttribArray(O),I[O]=0)}function C(D,I,O,L,B,q,z){z===!0?r.vertexAttribIPointer(D,I,O,B,q):r.vertexAttribPointer(D,I,O,L,B,q)}function y(D,I,O,L){_();let B=L.attributes,q=O.getAttributes(),z=I.defaultAttributeValues;for(let K in q){let H=q[K];if(H.location>=0){let R=B[K];if(R===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(R=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(R=D.instanceColor)),R!==void 0){let Q=R.normalized,Se=R.itemSize,Me=e.get(R);if(Me===void 0)continue;let Ve=Me.buffer,ke=Me.type,He=Me.bytesPerElement,Z=ke===r.INT||ke===r.UNSIGNED_INT||R.gpuType===_c;if(R.isInterleavedBufferAttribute){let ee=R.data,_e=ee.stride,Oe=R.offset;if(ee.isInstancedInterleavedBuffer){for(let me=0;me<H.locationSize;me++)p(H.location+me,ee.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<H.locationSize;me++)m(H.location+me);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let me=0;me<H.locationSize;me++)C(H.location+me,Se/H.locationSize,ke,Q,_e*He,(Oe+Se/H.locationSize*me)*He,Z)}else{if(R.isInstancedBufferAttribute){for(let ee=0;ee<H.locationSize;ee++)p(H.location+ee,R.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=R.meshPerAttribute*R.count)}else for(let ee=0;ee<H.locationSize;ee++)m(H.location+ee);r.bindBuffer(r.ARRAY_BUFFER,Ve);for(let ee=0;ee<H.locationSize;ee++)C(H.location+ee,Se/H.locationSize,ke,Q,Se*He,Se/H.locationSize*ee*He,Z)}}else if(z!==void 0){let Q=z[K];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(H.location,Q);break;case 3:r.vertexAttrib3fv(H.location,Q);break;case 4:r.vertexAttrib4fv(H.location,Q);break;default:r.vertexAttrib1fv(H.location,Q)}}}}w()}function S(){T();for(let D in n){let I=n[D];for(let O in I){let L=I[O];for(let B in L){let q=L[B];for(let z in q)h(q[z].object),delete q[z];delete L[B]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let I=n[D.id];for(let O in I){let L=I[O];for(let B in L){let q=L[B];for(let z in q)h(q[z].object),delete q[z];delete L[B]}}delete n[D.id]}function E(D){for(let I in n){let O=n[I];for(let L in O){let B=O[L];if(B[D.id]===void 0)continue;let q=B[D.id];for(let z in q)h(q[z].object),delete q[z];delete B[D.id]}}}function v(D){for(let I in n){let O=n[I],L=D.isInstancedMesh===!0?D.id:0,B=O[L];if(B!==void 0){for(let q in B){let z=B[q];for(let K in z)h(z[K].object),delete z[K];delete B[q]}delete O[L],Object.keys(O).length===0&&delete n[I]}}}function T(){A(),a=!0,s!==i&&(s=i,c(s.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function xy(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(r.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function vy(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==xi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let v=E===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ii&&E!==Fi&&!v&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),b=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:y,maxSamples:S,samples:b}}function yy(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Li,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let w=s?0:n,C=w*4,y=p.clippingState||null;l.value=y,y=h(g,u,C,f);for(let S=0;S!==C;++S)y[S]=t[S];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,y=f;C!==_;++C,y+=4)a.copy(d[C]).applyMatrix4(w,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var ya=4,Sy=6,My=20,by=256,Ro=new go,sm=new at,af=null,of=0,lf=0,cf=!1,wy=new J,_s=new J,rh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=wy}=s;af=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(af,of,lf),this._renderer.xr.enabled=cf,e.scissorTest=!1,va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),af=this._renderer.getRenderTarget(),of=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Oi,format:xi,colorSpace:Qa,depthBuffer:!1},i=am(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=am(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ty(s)),this._blurMaterial=Ay(s,e,t),this._ggxMaterial=Ey(s,e,t)}return i}_compileMaterial(e){let t=new qn(new Ji,e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,i,s){let l=new Sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(sm),d.toneMapping=Ni,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qn(new zr,new fs({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(sm),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[C],s.y,s.z)):y===1?(l.up.set(0,0,c[C]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[C],s.z)):(l.up.set(0,c[C],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[C]));let S=this._cubeSize;va(i,y*S,C>2?S:0,S,S),d.setRenderTarget(i),p&&d.render(_,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Xr||e.mapping===ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ro)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ya?n-g+ya:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,va(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,Ro),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,va(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,Ro)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-ya?i-this._lodMax+ya:0),u=4*(this._cubeSize-h);va(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Ro)}};function Ty(r){let e=[],t=[],n=r,i=r-ya+1+Sy;for(let s=0;s<i;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let p=0;p<d;p++){let w=p%3*2/3-1,C=p>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];g.set(y,f*u*p);for(let S=0;S<u;S++){let b=h[S*2]*2-1,E=h[S*2+1]*2-1;p===0?_s.set(1,E,b):p===1?_s.set(-b,1,-E):p===2?_s.set(-b,E,1):p===3?_s.set(-1,E,-b):p===4?_s.set(-b,-1,E):_s.set(b,E,-1),_s.toArray(_,(p*u+S)*f)}}let m=new Ji;m.setAttribute("position",new gi(g,f)),m.setAttribute("outputDirection",new gi(_,f)),t.push(new qn(m,null)),n>ya&&n--}return{lodMeshes:t,sizeLods:e}}function am(r,e,t){let n=new Wn(r,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function va(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ey(r,e,t){return new ti({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:by,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ay(r,e,t){return new ti({name:"SphericalGaussianBlur",defines:{SAMPLES:My,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:oh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function om(){return new ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function lm(){return new ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function oh(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sh=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new zr(5,5,5),s=new ti({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:$i});s.uniforms.tEquirect.value=t;let a=new qn(i,s),o=t.minFilter;return t.minFilter===qr&&(t.minFilter=jt),new fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};function Cy(r){let e=new WeakMap,t=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?a(u):s(u)}function s(u){if(u&&u.isTexture){let f=u.mapping;if(f===pc||f===mc)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new sh(g.height);return _.fromEquirectangularTexture(r,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===pc||f===mc,_=f===Xr||f===ms;if(g||_){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new rh(r)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let w=u.image;return g&&w&&w.height>0||_&&w&&l(w)?(n===null&&(n=new rh(r)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===pc?u.mapping=Xr:f===mc&&(u.mapping=ms),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Ry(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&us("WebGLRenderer: "+n+" extension not supported."),i}}}function Py(r,e,t,n){let i={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],r.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let w=f.array;_=f.version;for(let C=0,y=w.length;C<y;C+=3){let S=w[C+0],b=w[C+1],E=w[C+2];u.push(S,b,b,E,E,S)}}else{let w=g.array;_=g.version;for(let C=0,y=w.length/3-1;C<y;C+=3){let S=C+0,b=C+1,E=C+2;u.push(S,b,b,E,E,S)}}let m=new(g.count>=65535?ro:io)(u,1);m.version=_;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Iy(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(r.drawElementsInstanced(n,u,s,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ly(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dy(r,e,t){let n=new WeakMap,i=new Nt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let T=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],C=0;f===!0&&(C=1),g===!0&&(C=2),_===!0&&(C=3);let y=o.attributes.position.count*C,S=1;y>e.maxTextureSize&&(S=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let b=new Float32Array(y*S*4*d),E=new to(b,y,S,d);E.type=Fi,E.needsUpdate=!0;let v=C*4;for(let A=0;A<d;A++){let D=m[A],I=p[A],O=w[A],L=y*S*4*A;for(let B=0;B<D.count;B++){let q=B*v;f===!0&&(i.fromBufferAttribute(D,B),b[L+q+0]=i.x,b[L+q+1]=i.y,b[L+q+2]=i.z,b[L+q+3]=0),g===!0&&(i.fromBufferAttribute(I,B),b[L+q+4]=i.x,b[L+q+5]=i.y,b[L+q+6]=i.z,b[L+q+7]=0),_===!0&&(i.fromBufferAttribute(O,B),b[L+q+8]=i.x,b[L+q+9]=i.y,b[L+q+10]=i.z,b[L+q+11]=O.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new it(y,S)},n.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Ny(r,e,t,n,i){let s=new WeakMap;function a(c){let h=i.render.frame,d=c.geometry,u=e.get(c,d);if(s.get(u)!==h&&(e.update(u),s.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return u}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Uy={[Bu]:"LINEAR_TONE_MAPPING",[ku]:"REINHARD_TONE_MAPPING",[zu]:"CINEON_TONE_MAPPING",[vo]:"ACES_FILMIC_TONE_MAPPING",[Gu]:"AGX_TONE_MAPPING",[Hu]:"NEUTRAL_TONE_MAPPING",[Vu]:"CUSTOM_TONE_MAPPING"};function Fy(r,e,t,n,i,s){let a=new Wn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ji;c.setAttribute("position",new _i([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new _i([0,2,0,0,2,0],2));let h=new Ql({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new qn(c,h),u=new go(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,w=[],C=!1;this.setSize=function(y,S){a.setSize(y,S),o!==null&&o.setSize(y,S),l!==null&&l.setSize(y,S);for(let b=0;b<w.length;b++){let E=w[b];E.setSize&&E.setSize(y,S)}},this.setEffects=function(y){w=y,C=w.length>0&&w[0].isRenderPass===!0;let S=a.width,b=a.height;w.length>0&&o===null&&(o=new Wn(S,b,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),l=new Wn(S,b,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<w.length;E++){let v=w[E];v.setSize&&v.setSize(S,b)}},this.begin=function(y,S){if(_||y.toneMapping===Ni&&w.length===0)return!1;if(p=S,S!==null){let b=S.width,E=S.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return C===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Ni,!0},this.hasRenderPass=function(){return C},this.end=function(y,S){y.toneMapping=m,_=!0;let b=a,E=o;for(let v=0;v<w.length;v++){let T=w[v];T.enabled!==!1&&(T.render(y,E,b,S),T.needsSwap!==!1&&(b=E,E=E===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},ot.getTransfer(f)===pt&&(h.defines.SRGB_TRANSFER="");let v=Uy[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(d,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cm=new Mn,ff=new kr(1,1),Rm=new to,Pm=new Jl,Im=new lo,cm=[],hm=[],um=new Float32Array(16),fm=new Float32Array(9),dm=new Float32Array(4);function Ma(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=cm[i];if(s===void 0&&(s=new Float32Array(i),cm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function en(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function tn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function lh(r,e){let t=hm[e];t===void 0&&(t=new Int32Array(e),hm[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Oy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function By(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2fv(this.addr,e),tn(t,e)}}function ky(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;r.uniform3fv(this.addr,e),tn(t,e)}}function zy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4fv(this.addr,e),tn(t,e)}}function Vy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;dm.set(n),r.uniformMatrix2fv(this.addr,!1,dm),tn(t,n)}}function Gy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;fm.set(n),r.uniformMatrix3fv(this.addr,!1,fm),tn(t,n)}}function Hy(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;um.set(n),r.uniformMatrix4fv(this.addr,!1,um),tn(t,n)}}function Wy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2iv(this.addr,e),tn(t,e)}}function qy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3iv(this.addr,e),tn(t,e)}}function Yy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4iv(this.addr,e),tn(t,e)}}function Zy(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Jy(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;r.uniform2uiv(this.addr,e),tn(t,e)}}function Ky(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;r.uniform3uiv(this.addr,e),tn(t,e)}}function $y(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;r.uniform4uiv(this.addr,e),tn(t,e)}}function Qy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ff.compareFunction=t.isReversedDepthBuffer()?th:eh,s=ff):s=Cm,t.setTexture2D(e||s,i)}function jy(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pm,i)}function eS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Im,i)}function tS(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Rm,i)}function nS(r){switch(r){case 5126:return Oy;case 35664:return By;case 35665:return ky;case 35666:return zy;case 35674:return Vy;case 35675:return Gy;case 35676:return Hy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return Zy;case 36294:return Jy;case 36295:return Ky;case 36296:return $y;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return eS;case 36289:case 36303:case 36311:case 36292:return tS}}function iS(r,e){r.uniform1fv(this.addr,e)}function rS(r,e){let t=Ma(e,this.size,2);r.uniform2fv(this.addr,t)}function sS(r,e){let t=Ma(e,this.size,3);r.uniform3fv(this.addr,t)}function aS(r,e){let t=Ma(e,this.size,4);r.uniform4fv(this.addr,t)}function oS(r,e){let t=Ma(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lS(r,e){let t=Ma(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cS(r,e){let t=Ma(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hS(r,e){r.uniform1iv(this.addr,e)}function uS(r,e){r.uniform2iv(this.addr,e)}function fS(r,e){r.uniform3iv(this.addr,e)}function dS(r,e){r.uniform4iv(this.addr,e)}function pS(r,e){r.uniform1uiv(this.addr,e)}function mS(r,e){r.uniform2uiv(this.addr,e)}function gS(r,e){r.uniform3uiv(this.addr,e)}function _S(r,e){r.uniform4uiv(this.addr,e)}function xS(r,e,t){let n=this.cache,i=e.length,s=lh(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=ff:a=Cm;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function vS(r,e,t){let n=this.cache,i=e.length,s=lh(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Pm,s[a])}function yS(r,e,t){let n=this.cache,i=e.length,s=lh(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Im,s[a])}function SS(r,e,t){let n=this.cache,i=e.length,s=lh(t,i);en(n,s)||(r.uniform1iv(this.addr,s),tn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Rm,s[a])}function MS(r){switch(r){case 5126:return iS;case 35664:return rS;case 35665:return sS;case 35666:return aS;case 35674:return oS;case 35675:return lS;case 35676:return cS;case 5124:case 35670:return hS;case 35667:case 35671:return uS;case 35668:case 35672:return fS;case 35669:case 35673:return dS;case 5125:return pS;case 36294:return mS;case 36295:return gS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return vS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return SS}}var df=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nS(t.type)}},pf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=MS(t.type)}},mf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},hf=/(\w+)(\])?(\[|\.)?/g;function pm(r,e){r.seq.push(e),r.map[e.id]=e}function bS(r,e,t){let n=r.name,i=n.length;for(hf.lastIndex=0;;){let s=hf.exec(n),a=hf.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){pm(t,c===void 0?new df(o,r,e):new pf(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new mf(o),pm(t,d)),t=d}}}var Sa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);bS(o,l,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function mm(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var wS=37297,TS=0;function ES(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var gm=new Ze;function AS(r){ot._getMatrix(gm,ot.workingColorSpace,r);let e=`mat3( ${gm.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(r)){case ja:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function _m(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+ES(r.getShaderSource(e),o)}else return s}function CS(r,e){let t=AS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var RS={[Bu]:"Linear",[ku]:"Reinhard",[zu]:"Cineon",[vo]:"ACESFilmic",[Gu]:"AgX",[Hu]:"Neutral",[Vu]:"Custom"};function PS(r,e){let t=RS[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ih=new J;function IS(){ot.getLuminanceCoefficients(ih);let r=ih.x.toFixed(4),e=ih.y.toFixed(4),t=ih.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function DS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function NS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Io(r){return r!==""}function xm(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var US=/^[ \t]*#include +<([\w\d./]+)>/gm;function gf(r){return r.replace(US,OS)}var FS=new Map;function OS(r,e){let t=Je[e];if(t===void 0){let n=FS.get(e);if(n!==void 0)t=Je[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return gf(t)}var BS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(r){return r.replace(BS,kS)}function kS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Sm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var zS={[xo]:"SHADOWMAP_TYPE_PCF",[pa]:"SHADOWMAP_TYPE_VSM"};function VS(r){return zS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var GS={[Xr]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE_UV"};function HS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":GS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var WS={[ms]:"ENVMAP_MODE_REFRACTION"};function XS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":WS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var qS={[Ou]:"ENVMAP_BLENDING_MULTIPLY",[Bp]:"ENVMAP_BLENDING_MIX",[kp]:"ENVMAP_BLENDING_ADD"};function YS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":qS[r.combine]||"ENVMAP_BLENDING_NONE"}function ZS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function JS(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=VS(t),c=HS(t),h=XS(t),d=YS(t),u=ZS(t),f=LS(t),g=DS(s),_=i.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Io).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Io).join(`
`),p.length>0&&(p+=`
`)):(m=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),p=[Sm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Je.tonemapping_pars_fragment:"",t.toneMapping!==Ni?PS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,CS("linearToOutputTexel",t.outputColorSpace),IS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),a=gf(a),a=xm(a,t),a=vm(a,t),o=gf(o),o=xm(o,t),o=vm(o,t),a=ym(a),o=ym(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=w+m+a,y=w+p+o,S=mm(i,i.VERTEX_SHADER,C),b=mm(i,i.FRAGMENT_SHADER,y);i.attachShader(_,S),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(D){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(S)||"",L=i.getShaderInfoLog(b)||"",B=I.trim(),q=O.trim(),z=L.trim(),K=!0,H=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,b);else{let R=_m(i,S,"vertex"),Q=_m(i,b,"fragment");Ge("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+R+`
`+Q)}else B!==""?ze("WebGLProgram: Program Info Log:",B):(q===""||z==="")&&(H=!1);H&&(D.diagnostics={runnable:K,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:z,prefix:p}})}i.deleteShader(S),i.deleteShader(b),v=new Sa(i,_),T=NS(i,_)}let v;this.getUniforms=function(){return v===void 0&&E(this),v};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,wS)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=TS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=b,this}var KS=0,_f=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xf(e),t.set(e,n)),n}},xf=class{constructor(e){this.id=KS++,this.code=e,this.usedTimes=0}};function $S(r){return r===Zr||r===Eo||r===Ao}function QS(r,e,t,n,i,s){let a=new ha,o=new _f,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,T,A,D,I,O){let L=D.fog,B=I.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||q,z),H=K&&K.mapping===yo?K.image.height:null,R=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&ze("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=Q!==void 0?Q.length:0,Me=0;B.morphAttributes.position!==void 0&&(Me=1),B.morphAttributes.normal!==void 0&&(Me=2),B.morphAttributes.color!==void 0&&(Me=3);let Ve,ke,He,Z;if(R){let De=ji[R];Ve=De.vertexShader,ke=De.fragmentShader}else{Ve=v.vertexShader,ke=v.fragmentShader;let De=o.getVertexShaderStage(v),se=o.getFragmentShaderStage(v);o.update(v,De,se),He=De.id,Z=se.id}let ee=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Oe=I.isInstancedMesh===!0,me=I.isBatchedMesh===!0,Ue=!!v.map,Be=!!v.matcap,Pe=!!K,Xe=!!v.aoMap,$e=!!v.lightMap,V=!!v.bumpMap&&v.wireframe===!1,tt=!!v.normalMap,xt=!!v.displacementMap,Dt=!!v.emissiveMap,qe=!!v.metalnessMap,ft=!!v.roughnessMap,F=v.anisotropy>0,It=v.clearcoat>0,We=v.dispersion>0,P=v.retroreflectivity>0,x=v.iridescence>0,k=v.sheen>0,W=v.transmission>0,$=F&&!!v.anisotropyMap,ce=It&&!!v.clearcoatMap,ae=It&&!!v.clearcoatNormalMap,j=It&&!!v.clearcoatRoughnessMap,ne=x&&!!v.iridescenceMap,fe=x&&!!v.iridescenceThicknessMap,Ee=k&&!!v.sheenColorMap,de=k&&!!v.sheenRoughnessMap,ue=!!v.specularMap,le=!!v.specularColorMap,Ie=!!v.specularIntensityMap,Fe=W&&!!v.transmissionMap,N=W&&!!v.thicknessMap,he=!!v.gradientMap,te=!!v.alphaMap,pe=v.alphaTest>0,xe=!!v.alphaHash,ie=!!v.extensions,oe=Ni;v.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(oe=r.toneMapping);let re={shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:Ve,fragmentShader:ke,defines:v.defines,customVertexShaderID:He,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:me,batchingColor:me&&I._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&I.instanceColor!==null,instancingMorph:Oe&&I.morphTexture!==null,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ue,matcap:Be,envMap:Pe,envMapMode:Pe&&K.mapping,envMapCubeUVHeight:H,aoMap:Xe,lightMap:$e,bumpMap:V,normalMap:tt,displacementMap:xt,emissiveMap:Dt,normalMapObjectSpace:tt&&v.normalMapType===Gp,normalMapTangentSpace:tt&&v.normalMapType===jc,packedNormalMap:tt&&v.normalMapType===jc&&$S(v.normalMap.format),metalnessMap:qe,roughnessMap:ft,anisotropy:F,anisotropyMap:$,clearcoat:It,clearcoatMap:ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:j,dispersion:We,retroreflection:P,iridescence:x,iridescenceMap:ne,iridescenceThicknessMap:fe,sheen:k,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:ue,specularColorMap:le,specularIntensityMap:Ie,transmission:W,transmissionMap:Fe,thicknessMap:N,gradientMap:he,opaque:v.transparent===!1&&v.blending===ma&&v.alphaToCoverage===!1,alphaMap:te,alphaTest:pe,alphaHash:xe,combine:v.combine,mapUv:Ue&&g(v.map.channel),aoMapUv:Xe&&g(v.aoMap.channel),lightMapUv:$e&&g(v.lightMap.channel),bumpMapUv:V&&g(v.bumpMap.channel),normalMapUv:tt&&g(v.normalMap.channel),displacementMapUv:xt&&g(v.displacementMap.channel),emissiveMapUv:Dt&&g(v.emissiveMap.channel),metalnessMapUv:qe&&g(v.metalnessMap.channel),roughnessMapUv:ft&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:ce&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(v.sheenRoughnessMap.channel),specularMapUv:ue&&g(v.specularMap.channel),specularColorMapUv:le&&g(v.specularColorMap.channel),specularIntensityMapUv:Ie&&g(v.specularIntensityMap.channel),transmissionMapUv:Fe&&g(v.transmissionMap.channel),thicknessMapUv:N&&g(v.thicknessMap.channel),alphaMapUv:te&&g(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(tt||F),vertexNormals:!!B.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(Ue||te),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||B.attributes.normal===void 0&&tt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_e,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:oe,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&ot.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:Dt&&v.emissiveMap.isVideoTexture===!0&&ot.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ki,flipSided:v.side===Un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ie&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&v.extensions.multiDraw===!0||me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return re.vertexUv1s=l.has(1),re.vertexUv2s=l.has(2),re.vertexUv3s=l.has(3),l.clear(),re}function m(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let A in v.defines)T.push(A),T.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(p(T,v),w(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function w(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function C(v){let T=f[v.type],A;if(T){let D=ji[T];A=nm.clone(D.uniforms)}else A=v.uniforms;return A}function y(v,T){let A=h.get(T);return A!==void 0?++A.usedTimes:(A=new JS(r,T,v,i),c.push(A),h.set(T,A)),A}function S(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:c,dispose:E}}function jS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function eM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Mm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function bm(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,m,p){let w=r[e];return w===void 0?(w={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},r[e]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=g,w.materialVariant=a(u),w.groupOrder=_,w.renderOrder=u.renderOrder,w.z=m,w.group=p),e++,w}function l(u,f,g,_,m,p,w){w.reversedDepth===!0&&(m=-m);let C=o(u,f,g,_,m,p);g.transmission>0?n.push(C):g.transparent===!0?i.push(C):t.push(C)}function c(u,f,g,_,m,p){let w=o(u,f,g,_,m,p);g.transmission>0?n.unshift(w):g.transparent===!0?i.unshift(w):t.unshift(w)}function h(u,f){t.length>1&&t.sort(u||eM),n.length>1&&n.sort(f||Mm),i.length>1&&i.sort(f||Mm)}function d(){for(let u=e,f=r.length;u<f;u++){let g=r[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:h}}function tM(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new bm,r.set(n,[a])):i>=s.length?(a=new bm,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function nM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new at};break;case"SpotLight":t={position:new J,direction:new J,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new J,halfWidth:new J,halfHeight:new J};break}return r[e.id]=t,t}}}function iM(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var rM=0;function sM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aM(r){let e=new nM,t=iM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);let i=new J,s=new kt,a=new kt;function o(c){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,C=0,y=0,S=0,b=0,E=0,v=0,T=0,A=0;c.sort(sM);for(let I=0,O=c.length;I<O;I++){let L=c[I],B=L.color,q=L.intensity,z=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Zr?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*q,d+=B.g*q,u+=B.b*q;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],q);A++}else if(L.isSunLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Q=t.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize.copy(R.mapSize).multiply(R.getFrameExtents()),n.sunShadow[g]=Q,n.sunShadowMap[g]=K;let Se=R.getViewportCount();for(let Me=0;Me<Se;Me++)n.sunShadowMatrix[_+Me]=R.getMatrix(Me),n.sunShadowCascade[_+Me]=R._cascadeData[Me];_+=Se,g++}n.sun[f]=H,f++}else if(L.isDirectionalLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let R=L.shadow,Q=t.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=L.shadow.matrix,S++}n.directional[m]=H,m++}else if(L.isSpotLight){let H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(B).multiplyScalar(q),H.distance=z,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[w]=H;let R=L.shadow;if(L.map&&(n.spotLightMap[v]=L.map,v++,R.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[w]=R.matrix,L.castShadow){let Q=t.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,n.spotShadow[w]=Q,n.spotShadowMap[w]=K,E++}w++}else if(L.isRectAreaLight){let H=e.get(L);H.color.copy(B).multiplyScalar(q),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[C]=H,C++}else if(L.isPointLight){let H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){let R=L.shadow,Q=t.get(L);Q.shadowIntensity=R.intensity,Q.shadowBias=R.bias,Q.shadowNormalBias=R.normalBias,Q.shadowRadius=R.radius,Q.shadowMapSize=R.mapSize,Q.shadowCameraNear=R.camera.near,Q.shadowCameraFar=R.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=K,n.pointShadowMatrix[p]=L.shadow.matrix,b++}n.point[p]=H,p++}else if(L.isHemisphereLight){let H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(q),H.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[y]=H,y++}}C>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==w||D.rectAreaLength!==C||D.hemiLength!==y||D.numSunShadows!==g||D.numDirectionalShadows!==S||D.numPointShadows!==b||D.numSpotShadows!==E||D.numSpotMaps!==v||D.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=w,n.rectArea.length=C,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+v-T,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=w,D.rectAreaLength=C,D.hemiLength=y,D.numSunShadows=g,D.numDirectionalShadows=S,D.numPointShadows=b,D.numSpotShadows=E,D.numSpotMaps=v,D.numLightProbes=A,n.version=rM++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let w=0,C=c.length;w<C;w++){let y=c[w];if(y.isSunLight){let S=n.sun[d];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(y.isSpotLight){let S=n.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let S=n.rectArea[_];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let S=n.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function wm(r){let e=new aM(r),t=[],n=[],i=[];function s(u){d.camera=u,t.length=0,n.length=0,i.length=0}function a(u){t.push(u)}function o(u){n.push(u)}function l(u){i.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function oM(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new wm(r),e.set(i,[o])):s>=a.length?(o=new wm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var lM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cM=`uniform sampler2D shadow_pass;
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
}`,hM=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],uM=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Tm=new kt,Po=new J,uf=new J;function fM(r,e,t){let n=new ao,i=new it,s=new it,a=new Nt,o=new jl,l=new ec,c={},h=t.maxTextureSize,d={[Wr]:Un,[Un]:Wr,[Ki]:Ki},u=new ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:lM,fragmentShader:cM}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ji;g.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new qn(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xo;let p=this.type;this.render=function(b,E,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===vp&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xo);let T=r.getRenderTarget(),A=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending($i),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let O=p!==this.type;O&&E.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=b.length;L<B;L++){let q=b[L],z=q.shadow;if(z===void 0){ze("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let K=z.getFrameExtents();i.multiply(K),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,z.mapSize.y=s.y));let H=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=H,z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===pa){if(q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Wn(i.x,i.y,{format:Zr,type:Oi,minFilter:jt,magFilter:jt,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new kr(i.x,i.y,Fi),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=qi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ln,z.map.depthTexture.magFilter=ln}else q.isPointLight?(z.map=new sh(i.x),z.map.depthTexture=new $l(i.x,Ui)):(z.map=new Wn(i.x,i.y),z.map.depthTexture=new kr(i.x,i.y,Ui)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=qi,this.type===xo?(z.map.depthTexture.compareFunction=H?th:eh,z.map.depthTexture.minFilter=jt,z.map.depthTexture.magFilter=jt):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=ln,z.map.depthTexture.magFilter=ln);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);let R=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,v);for(let Q=0;Q<R;Q++){let Se=z.getCamera(Q);if(q.isPointLight){let Me=z.camera,Ve=z.matrix,ke=q.distance||Me.far;ke!==Me.far&&(Me.far=ke,Me.updateProjectionMatrix()),Po.setFromMatrixPosition(q.matrixWorld),Me.position.copy(Po),uf.copy(Me.position),uf.add(hM[Q]),Me.up.copy(uM[Q]),Me.lookAt(uf),Me.updateMatrixWorld(),Ve.makeTranslation(-Po.x,-Po.y,-Po.z),Tm.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Tm,Me.coordinateSystem,Me.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,Q),r.clear();else{Q===0&&(r.setRenderTarget(z.map),r.clear());let Me=z.getViewport(Q);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),I.viewport(a)}n=z.getFrustum(Q),y(E,v,Se,q,this.type)}z.isPointLightShadow!==!0&&this.type===pa&&w(z,v),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(T,A,D)};function w(b,E){let v=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Wn(i.x,i.y,{format:Zr,type:Oi}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,v,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,v,f,_,null)}function C(b,E,v,T){let A=null,D=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)A=D;else if(A=v.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let I=A.uuid,O=E.uuid,L=c[I];L===void 0&&(L={},c[I]=L);let B=L[O];B===void 0&&(B=A.clone(),L[O]=B,E.addEventListener("dispose",S)),A=B}if(A.visible=E.visible,A.wireframe=E.wireframe,T===pa?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:d[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let I=r.properties.get(A);I.light=v}return A}function y(b,E,v,T,A){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&A===pa)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);let O=e.update(b),L=b.material;if(Array.isArray(L)){let B=O.groups;for(let q=0,z=B.length;q<z;q++){let K=B[q],H=L[K.materialIndex];if(H&&H.visible){let R=C(b,H,T,A);b.onBeforeShadow(r,b,E,v,O,R,K),r.renderBufferDirect(v,null,O,R,b,K),b.onAfterShadow(r,b,E,v,O,R,K)}}}else if(L.visible){let B=C(b,L,T,A);b.onBeforeShadow(r,b,E,v,O,B,null),r.renderBufferDirect(v,null,O,B,b,null),b.onAfterShadow(r,b,E,v,O,B,null)}}let I=b.children;for(let O=0,L=I.length;O<L;O++)y(I[O],E,v,T,A)}function S(b){b.target.removeEventListener("dispose",S);for(let v in c){let T=c[v],A=b.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}function dM(r,e){function t(){let N=!1,he=new Nt,te=null,pe=new Nt(0,0,0,0);return{setMask:function(xe){te!==xe&&!N&&(r.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){N=xe},setClear:function(xe,ie,oe,re,De){De===!0&&(xe*=re,ie*=re,oe*=re),he.set(xe,ie,oe,re),pe.equals(he)===!1&&(r.clearColor(xe,ie,oe,re),pe.copy(he))},reset:function(){N=!1,te=null,pe.set(-1,0,0,0)}}}function n(){let N=!1,he=!1,te=null,pe=null,xe=null;return{setReversed:function(ie){if(he!==ie){let oe=e.get("EXT_clip_control");ie?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),he=ie;let re=xe;xe=null,this.setClear(re)}},getReversed:function(){return he},setTest:function(ie){ie?ee(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(ie){te!==ie&&!N&&(r.depthMask(ie),te=ie)},setFunc:function(ie){if(he&&(ie=em[ie]),pe!==ie){switch(ie){case Ol:r.depthFunc(r.NEVER);break;case Bl:r.depthFunc(r.ALWAYS);break;case kl:r.depthFunc(r.LESS);break;case sa:r.depthFunc(r.LEQUAL);break;case zl:r.depthFunc(r.EQUAL);break;case Vl:r.depthFunc(r.GEQUAL);break;case Gl:r.depthFunc(r.GREATER);break;case Hl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pe=ie}},setLocked:function(ie){N=ie},setClear:function(ie){xe!==ie&&(xe=ie,he&&(ie=1-ie),r.clearDepth(ie))},reset:function(){N=!1,te=null,pe=null,xe=null,he=!1}}}function i(){let N=!1,he=null,te=null,pe=null,xe=null,ie=null,oe=null,re=null,De=null;return{setTest:function(se){N||(se?ee(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(se){he!==se&&!N&&(r.stencilMask(se),he=se)},setFunc:function(se,Ne,Ae){(te!==se||pe!==Ne||xe!==Ae)&&(r.stencilFunc(se,Ne,Ae),te=se,pe=Ne,xe=Ae)},setOp:function(se,Ne,Ae){(ie!==se||oe!==Ne||re!==Ae)&&(r.stencilOp(se,Ne,Ae),ie=se,oe=Ne,re=Ae)},setLocked:function(se){N=se},setClear:function(se){De!==se&&(r.clearStencil(se),De=se)},reset:function(){N=!1,he=null,te=null,pe=null,xe=null,ie=null,oe=null,re=null,De=null}}}let s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,w=null,C=null,y=null,S=null,b=null,E=null,v=new at(0,0,0),T=0,A=!1,D=null,I=null,O=null,L=null,B=null,q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,K=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=K>=2);let R=null,Q={},Se=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Ve=new Nt().fromArray(Se),ke=new Nt().fromArray(Me);function He(N,he,te,pe){let xe=new Uint8Array(4),ie=r.createTexture();r.bindTexture(N,ie),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let oe=0;oe<te;oe++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,xe):r.texImage2D(he+oe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,xe);return ie}let Z={};Z[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(r.DEPTH_TEST),a.setFunc(sa),V(!1),tt(Iu),ee(r.CULL_FACE),Xe($i);function ee(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function _e(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function Oe(N,he){return u[N]!==he?(r.bindFramebuffer(N,he),u[N]=he,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=he),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=he),!0):!1}function me(N,he){let te=g,pe=!1;if(N){te=f.get(he),te===void 0&&(te=[],f.set(he,te));let xe=N.textures;if(te.length!==xe.length||te[0]!==r.COLOR_ATTACHMENT0){for(let ie=0,oe=xe.length;ie<oe;ie++)te[ie]=r.COLOR_ATTACHMENT0+ie;te.length=xe.length,pe=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,pe=!0);pe&&r.drawBuffers(te)}function Ue(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let Be={[ps]:r.FUNC_ADD,[Sp]:r.FUNC_SUBTRACT,[Mp]:r.FUNC_REVERSE_SUBTRACT};Be[bp]=r.MIN,Be[wp]=r.MAX;let Pe={[Tp]:r.ZERO,[Ep]:r.ONE,[Ap]:r.SRC_COLOR,[Uu]:r.SRC_ALPHA,[Dp]:r.SRC_ALPHA_SATURATE,[Ip]:r.DST_COLOR,[Rp]:r.DST_ALPHA,[Cp]:r.ONE_MINUS_SRC_COLOR,[Fu]:r.ONE_MINUS_SRC_ALPHA,[Lp]:r.ONE_MINUS_DST_COLOR,[Pp]:r.ONE_MINUS_DST_ALPHA,[Np]:r.CONSTANT_COLOR,[Up]:r.ONE_MINUS_CONSTANT_COLOR,[Fp]:r.CONSTANT_ALPHA,[Op]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(N,he,te,pe,xe,ie,oe,re,De,se){if(N===$i){m===!0&&(_e(r.BLEND),m=!1);return}if(m===!1&&(ee(r.BLEND),m=!0),N!==yp){if(N!==p||se!==A){if((w!==ps||S!==ps)&&(r.blendEquation(r.FUNC_ADD),w=ps,S=ps),se)switch(N){case ma:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lu:r.blendFunc(r.ONE,r.ONE);break;case Du:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nu:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ge("WebGLState: Invalid blending: ",N);break}else switch(N){case ma:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Lu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Du:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nu:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",N);break}C=null,y=null,b=null,E=null,v.set(0,0,0),T=0,p=N,A=se}return}xe=xe||he,ie=ie||te,oe=oe||pe,(he!==w||xe!==S)&&(r.blendEquationSeparate(Be[he],Be[xe]),w=he,S=xe),(te!==C||pe!==y||ie!==b||oe!==E)&&(r.blendFuncSeparate(Pe[te],Pe[pe],Pe[ie],Pe[oe]),C=te,y=pe,b=ie,E=oe),(re.equals(v)===!1||De!==T)&&(r.blendColor(re.r,re.g,re.b,De),v.copy(re),T=De),p=N,A=!1}function $e(N,he){N.side===Ki?_e(r.CULL_FACE):ee(r.CULL_FACE);let te=N.side===Un;he&&(te=!te),V(te),N.blending===ma&&N.transparent===!1?Xe($i):Xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let pe=N.stencilWrite;o.setTest(pe),pe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ee(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){D!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),D=N)}function tt(N){N!==_p?(ee(r.CULL_FACE),N!==I&&(N===Iu?r.cullFace(r.BACK):N===xp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),I=N}function xt(N){N!==O&&(z&&r.lineWidth(N),O=N)}function Dt(N,he,te){N?(ee(r.POLYGON_OFFSET_FILL),(L!==he||B!==te)&&(L=he,B=te,a.getReversed()&&(he=-he),r.polygonOffset(he,te))):_e(r.POLYGON_OFFSET_FILL)}function qe(N){N?ee(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function ft(N){N===void 0&&(N=r.TEXTURE0+q-1),R!==N&&(r.activeTexture(N),R=N)}function F(N,he,te){te===void 0&&(R===null?te=r.TEXTURE0+q-1:te=R);let pe=Q[te];pe===void 0&&(pe={type:void 0,texture:void 0},Q[te]=pe),(pe.type!==N||pe.texture!==he)&&(R!==te&&(r.activeTexture(te),R=te),r.bindTexture(N,he||Z[N]),pe.type=N,pe.texture=he)}function It(){let N=Q[R];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function We(){try{r.compressedTexImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function x(){try{r.texSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function k(){try{r.texSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function W(){try{r.compressedTexSubImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ce(){try{r.texStorage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ae(){try{r.texStorage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function j(){try{r.texImage2D(...arguments)}catch(N){Ge("WebGLState:",N)}}function ne(){try{r.texImage3D(...arguments)}catch(N){Ge("WebGLState:",N)}}function fe(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function Ee(N,he){d[N]!==he&&(r.pixelStorei(N,he),d[N]=he)}function de(N){Ve.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Ve.copy(N))}function ue(N){ke.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),ke.copy(N))}function le(N,he){let te=c.get(he);te===void 0&&(te=new WeakMap,c.set(he,te));let pe=te.get(N);pe===void 0&&(pe=r.getUniformBlockIndex(he,N.name),te.set(N,pe))}function Ie(N,he){let pe=c.get(he).get(N);l.get(he)!==pe&&(r.uniformBlockBinding(he,pe,N.__bindingPointIndex),l.set(he,pe))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},d={},R=null,Q={},u={},f=new WeakMap,g=[],_=null,m=!1,p=null,w=null,C=null,y=null,S=null,b=null,E=null,v=new at(0,0,0),T=0,A=!1,D=null,I=null,O=null,L=null,B=null,Ve.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ee,disable:_e,bindFramebuffer:Oe,drawBuffers:me,useProgram:Ue,setBlending:Xe,setMaterial:$e,setFlipSided:V,setCullFace:tt,setLineWidth:xt,setPolygonOffset:Dt,setScissorTest:qe,activeTexture:ft,bindTexture:F,unbindTexture:It,compressedTexImage2D:We,compressedTexImage3D:P,texImage2D:j,texImage3D:ne,pixelStorei:Ee,getParameter:fe,updateUBOMapping:le,uniformBlockBinding:Ie,texStorage2D:ce,texStorage3D:ae,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:de,viewport:ue,reset:Fe}}function pM(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,x){return g?new OffscreenCanvas(P,x):aa("canvas")}function m(P,x,k){let W=1,$=We(P);if(($.width>k||$.height>k)&&(W=k/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ce=Math.floor(W*$.width),ae=Math.floor(W*$.height);u===void 0&&(u=_(ce,ae));let j=x?_(ce,ae):u;return j.width=ce,j.height=ae,j.getContext("2d").drawImage(P,0,0,ce,ae),ze("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ce+"x"+ae+")."),j}else return"data"in P&&ze("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),P;return P}function p(P){return P.generateMipmaps}function w(P){r.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(P,x,k,W,$,ce=!1){if(P!==null){if(r[P]!==void 0)return r[P];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===r.RED&&(k===r.FLOAT&&(j=r.R32F),k===r.HALF_FLOAT&&(j=r.R16F),k===r.UNSIGNED_BYTE&&(j=r.R8),k===r.UNSIGNED_SHORT&&ae&&(j=ae.R16_EXT),k===r.SHORT&&ae&&(j=ae.R16_SNORM_EXT)),x===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.R8UI),k===r.UNSIGNED_SHORT&&(j=r.R16UI),k===r.UNSIGNED_INT&&(j=r.R32UI),k===r.BYTE&&(j=r.R8I),k===r.SHORT&&(j=r.R16I),k===r.INT&&(j=r.R32I)),x===r.RG&&(k===r.FLOAT&&(j=r.RG32F),k===r.HALF_FLOAT&&(j=r.RG16F),k===r.UNSIGNED_BYTE&&(j=r.RG8),k===r.UNSIGNED_SHORT&&ae&&(j=ae.RG16_EXT),k===r.SHORT&&ae&&(j=ae.RG16_SNORM_EXT)),x===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RG8UI),k===r.UNSIGNED_SHORT&&(j=r.RG16UI),k===r.UNSIGNED_INT&&(j=r.RG32UI),k===r.BYTE&&(j=r.RG8I),k===r.SHORT&&(j=r.RG16I),k===r.INT&&(j=r.RG32I)),x===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RGB8UI),k===r.UNSIGNED_SHORT&&(j=r.RGB16UI),k===r.UNSIGNED_INT&&(j=r.RGB32UI),k===r.BYTE&&(j=r.RGB8I),k===r.SHORT&&(j=r.RGB16I),k===r.INT&&(j=r.RGB32I)),x===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),k===r.UNSIGNED_INT&&(j=r.RGBA32UI),k===r.BYTE&&(j=r.RGBA8I),k===r.SHORT&&(j=r.RGBA16I),k===r.INT&&(j=r.RGBA32I)),x===r.RGB&&(k===r.UNSIGNED_SHORT&&ae&&(j=ae.RGB16_EXT),k===r.SHORT&&ae&&(j=ae.RGB16_SNORM_EXT),k===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),x===r.RGBA){let ne=ce?ja:ot.getTransfer($);k===r.FLOAT&&(j=r.RGBA32F),k===r.HALF_FLOAT&&(j=r.RGBA16F),k===r.UNSIGNED_BYTE&&(j=ne===pt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT&&ae&&(j=ae.RGBA16_EXT),k===r.SHORT&&ae&&(j=ae.RGBA16_SNORM_EXT),k===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function S(P,x){let k;return P?x===null||x===Ui||x===_a?k=r.DEPTH24_STENCIL8:x===Fi?k=r.DEPTH32F_STENCIL8:x===ga&&(k=r.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ui||x===_a?k=r.DEPTH_COMPONENT24:x===Fi?k=r.DEPTH_COMPONENT32F:x===ga&&(k=r.DEPTH_COMPONENT16),k}function b(P,x){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==ln&&P.minFilter!==jt?Math.log2(Math.max(x.width,x.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?x.mipmaps.length:1}function E(P){let x=P.target;x.removeEventListener("dispose",E),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(P){let x=P.target;x.removeEventListener("dispose",v),D(x)}function T(P){let x=n.get(P);if(x.__webglInit===void 0)return;let k=P.source,W=f.get(k);if(W){let $=W[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&A(P),Object.keys(W).length===0&&f.delete(k)}n.remove(P)}function A(P){let x=n.get(P);r.deleteTexture(x.__webglTexture);let k=P.source,W=f.get(k);delete W[x.__cacheKey],a.memory.textures--}function D(P){let x=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let $=0;$<x.__webglFramebuffer[W].length;$++)r.deleteFramebuffer(x.__webglFramebuffer[W][$]);else r.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)r.deleteFramebuffer(x.__webglFramebuffer[W]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=P.textures;for(let W=0,$=k.length;W<$;W++){let ce=n.get(k[W]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(k[W])}n.remove(P)}let I=0;function O(){I=0}function L(){return I}function B(P){I=P}function q(){let P=I;return P>=i.maxTextures&&ze("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),I+=1,P}function z(P){let x=[];return x.push(P.wrapS),x.push(P.wrapT),x.push(P.wrapR||0),x.push(P.magFilter),x.push(P.minFilter),x.push(P.anisotropy),x.push(P.internalFormat),x.push(P.format),x.push(P.type),x.push(P.generateMipmaps),x.push(P.premultiplyAlpha),x.push(P.flipY),x.push(P.unpackAlignment),x.push(P.colorSpace),x.join()}function K(P,x){let k=n.get(P);if(P.isVideoTexture&&F(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&k.__version!==P.version){let W=P.image;if(W===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(k,P,x);return}}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+x)}function H(P,x){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){_e(k,P,x);return}else P.isExternalTexture&&(k.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+x)}function R(P,x){let k=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){_e(k,P,x);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+x)}function Q(P,x){let k=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&k.__version!==P.version){Oe(k,P,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+x)}let Se={[Wl]:r.REPEAT,[Xi]:r.CLAMP_TO_EDGE,[Xl]:r.MIRRORED_REPEAT},Me={[ln]:r.NEAREST,[zp]:r.NEAREST_MIPMAP_NEAREST,[So]:r.NEAREST_MIPMAP_LINEAR,[jt]:r.LINEAR,[gc]:r.LINEAR_MIPMAP_NEAREST,[qr]:r.LINEAR_MIPMAP_LINEAR},Ve={[Wp]:r.NEVER,[Jp]:r.ALWAYS,[Xp]:r.LESS,[eh]:r.LEQUAL,[qp]:r.EQUAL,[th]:r.GEQUAL,[Yp]:r.GREATER,[Zp]:r.NOTEQUAL};function ke(P,x){if(x.type===Fi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===jt||x.magFilter===gc||x.magFilter===So||x.magFilter===qr||x.minFilter===jt||x.minFilter===gc||x.minFilter===So||x.minFilter===qr)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,Se[x.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,Se[x.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,Se[x.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,Me[x.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,Me[x.minFilter]),x.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,Ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ln||x.minFilter!==So&&x.minFilter!==qr||x.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function He(P,x){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,x.addEventListener("dispose",E));let W=x.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let ce=z(x);if(ce!==P.__cacheKey){$[ce]===void 0&&($[ce]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[ce].usedTimes++;let ae=$[P.__cacheKey];ae!==void 0&&($[P.__cacheKey].usedTimes--,ae.usedTimes===0&&A(x)),P.__cacheKey=ce,P.__webglTexture=$[ce].texture}return k}function Z(P,x,k){return Math.floor(Math.floor(P/k)/x)}function ee(P,x,k,W){let ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,k,W,x.data);else{ce.sort((Ee,de)=>Ee.start-de.start);let ae=0;for(let Ee=1;Ee<ce.length;Ee++){let de=ce[ae],ue=ce[Ee],le=de.start+de.count,Ie=Z(ue.start,x.width,4),Fe=Z(de.start,x.width,4);ue.start<=le+1&&Ie===Fe&&Z(ue.start+ue.count-1,x.width,4)===Ie?de.count=Math.max(de.count,ue.start+ue.count-de.start):(++ae,ce[ae]=ue)}ce.length=ae+1;let j=t.getParameter(r.UNPACK_ROW_LENGTH),ne=t.getParameter(r.UNPACK_SKIP_PIXELS),fe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let Ee=0,de=ce.length;Ee<de;Ee++){let ue=ce[Ee],le=Math.floor(ue.start/4),Ie=Math.ceil(ue.count/4),Fe=le%x.width,N=Math.floor(le/x.width),he=Ie,te=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(r.UNPACK_SKIP_ROWS,N),t.texSubImage2D(r.TEXTURE_2D,0,Fe,N,he,te,k,W,x.data)}P.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,j),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(r.UNPACK_SKIP_ROWS,fe)}}function _e(P,x,k){let W=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=r.TEXTURE_3D);let $=He(P,x),ce=x.source;t.bindTexture(W,P.__webglTexture,r.TEXTURE0+k);let ae=n.get(ce);if(ce.version!==ae.__version||$===!0){if(t.activeTexture(r.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let te=ot.getPrimaries(ot.workingColorSpace),pe=x.colorSpace===mr?null:ot.getPrimaries(x.colorSpace),xe=x.colorSpace===mr||te===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment);let ne=m(x.image,!1,i.maxTextureSize);ne=It(x,ne);let fe=s.convert(x.format,x.colorSpace),Ee=s.convert(x.type),de=y(x.internalFormat,fe,Ee,x.normalized,x.colorSpace,x.isVideoTexture);ke(W,x);let ue,le=x.mipmaps,Ie=x.isVideoTexture!==!0,Fe=ae.__version===void 0||$===!0,N=ce.dataReady,he=b(x,ne);if(x.isDepthTexture)de=S(x.format===Yr,x.type),Fe&&(Ie?t.texStorage2D(r.TEXTURE_2D,1,de,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,Ee,null));else if(x.isDataTexture)if(le.length>0){Ie&&Fe&&t.texStorage2D(r.TEXTURE_2D,he,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)ue=le[te],Ie?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ee,ue.data):t.texImage2D(r.TEXTURE_2D,te,de,ue.width,ue.height,0,fe,Ee,ue.data);x.generateMipmaps=!1}else Ie?(Fe&&t.texStorage2D(r.TEXTURE_2D,he,de,ne.width,ne.height),N&&ee(x,ne,fe,Ee)):t.texImage2D(r.TEXTURE_2D,0,de,ne.width,ne.height,0,fe,Ee,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ie&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,de,le[0].width,le[0].height,ne.depth);for(let te=0,pe=le.length;te<pe;te++)if(ue=le[te],x.format!==xi)if(fe!==null)if(Ie){if(N)if(x.layerUpdates.size>0){let xe=sf(ue.width,ue.height,x.format,x.type);for(let ie of x.layerUpdates){let oe=ue.data.subarray(ie*xe/ue.data.BYTES_PER_ELEMENT,(ie+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,ie,ue.width,ue.height,1,fe,oe)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,fe,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ne.depth,0,ue.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?N&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ne.depth,fe,Ee,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,de,ue.width,ue.height,ne.depth,0,fe,Ee,ue.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ie&&Fe&&t.texStorage2D(r.TEXTURE_2D,he,de,le[0].width,le[0].height);for(let te=0,pe=le.length;te<pe;te++)ue=le[te],x.format!==xi?fe!==null?Ie?N&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,te,de,ue.width,ue.height,0,ue.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ee,ue.data):t.texImage2D(r.TEXTURE_2D,te,de,ue.width,ue.height,0,fe,Ee,ue.data)}else if(x.isDataArrayTexture)if(Ie){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,de,ne.width,ne.height,ne.depth),N)if(x.layerUpdates.size>0){let te=sf(ne.width,ne.height,x.format,x.type);for(let pe of x.layerUpdates){let xe=ne.data.subarray(pe*te/ne.data.BYTES_PER_ELEMENT,(pe+1)*te/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,ne.width,ne.height,1,fe,Ee,xe)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ee,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,ne.width,ne.height,ne.depth,0,fe,Ee,ne.data);else if(x.isData3DTexture)Ie?(Fe&&t.texStorage3D(r.TEXTURE_3D,he,de,ne.width,ne.height,ne.depth),N&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ee,ne.data)):t.texImage3D(r.TEXTURE_3D,0,de,ne.width,ne.height,ne.depth,0,fe,Ee,ne.data);else if(x.isFramebufferTexture){if(Fe)if(Ie)t.texStorage2D(r.TEXTURE_2D,he,de,ne.width,ne.height);else{let te=ne.width,pe=ne.height;for(let xe=0;xe<he;xe++)t.texImage2D(r.TEXTURE_2D,xe,de,te,pe,0,fe,Ee,null),te>>=1,pe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in r){let te=r.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ne.parentNode!==te){te.appendChild(ne),d.add(x),te.onpaint=pe=>{let xe=pe.changedElements;for(let ie of d)xe.includes(ie.image)&&(ie.needsUpdate=!0)},te.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ne);else{let xe=r.RGBA,ie=r.RGBA,oe=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,xe,ie,oe,ne)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(le.length>0){if(Ie&&Fe){let te=We(le[0]);t.texStorage2D(r.TEXTURE_2D,he,de,te.width,te.height)}for(let te=0,pe=le.length;te<pe;te++)ue=le[te],Ie?N&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,fe,Ee,ue):t.texImage2D(r.TEXTURE_2D,te,de,fe,Ee,ue);x.generateMipmaps=!1}else if(Ie){if(Fe){let te=We(ne);t.texStorage2D(r.TEXTURE_2D,he,de,te.width,te.height)}N&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,fe,Ee,ne)}else t.texImage2D(r.TEXTURE_2D,0,de,fe,Ee,ne);p(x)&&w(W),ae.__version=ce.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function Oe(P,x,k){if(x.image.length!==6)return;let W=He(P,x),$=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+k);let ce=n.get($);if($.version!==ce.__version||W===!0){t.activeTexture(r.TEXTURE0+k);let ae=ot.getPrimaries(ot.workingColorSpace),j=x.colorSpace===mr?null:ot.getPrimaries(x.colorSpace),ne=x.colorSpace===mr||ae===j?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let fe=x.isCompressedTexture||x.image[0].isCompressedTexture,Ee=x.image[0]&&x.image[0].isDataTexture,de=[];for(let ie=0;ie<6;ie++)!fe&&!Ee?de[ie]=m(x.image[ie],!0,i.maxCubemapSize):de[ie]=Ee?x.image[ie].image:x.image[ie],de[ie]=It(x,de[ie]);let ue=de[0],le=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type),Fe=y(x.internalFormat,le,Ie,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,he=ce.__version===void 0||W===!0,te=$.dataReady,pe=b(x,ue);ke(r.TEXTURE_CUBE_MAP,x);let xe;if(fe){N&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Fe,ue.width,ue.height);for(let ie=0;ie<6;ie++){xe=de[ie].mipmaps;for(let oe=0;oe<xe.length;oe++){let re=xe[oe];x.format!==xi?le!==null?N?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Fe,re.width,re.height,0,re.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,0,0,re.width,re.height,le,Ie,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe,Fe,re.width,re.height,0,le,Ie,re.data)}}}else{if(xe=x.mipmaps,N&&he){xe.length>0&&pe++;let ie=We(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,pe,Fe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Ee){N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,de[ie].width,de[ie].height,le,Ie,de[ie].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,de[ie].width,de[ie].height,0,le,Ie,de[ie].data);for(let oe=0;oe<xe.length;oe++){let De=xe[oe].image[ie].image;N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,De.width,De.height,le,Ie,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Fe,De.width,De.height,0,le,Ie,De.data)}}else{N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le,Ie,de[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Fe,le,Ie,de[ie]);for(let oe=0;oe<xe.length;oe++){let re=xe[oe];N?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,0,0,le,Ie,re.image[ie]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,oe+1,Fe,le,Ie,re.image[ie])}}}p(x)&&w(r.TEXTURE_CUBE_MAP),ce.__version=$.version,x.onUpdate&&x.onUpdate(x)}P.__version=x.version}function me(P,x,k,W,$,ce){let ae=s.convert(k.format,k.colorSpace),j=s.convert(k.type),ne=y(k.internalFormat,ae,j,k.normalized,k.colorSpace),fe=n.get(x),Ee=n.get(k);if(Ee.__renderTarget=x,!fe.__hasExternalTextures){let de=Math.max(1,x.width>>ce),ue=Math.max(1,x.height>>ce);$===r.TEXTURE_3D||$===r.TEXTURE_2D_ARRAY?t.texImage3D($,ce,ne,de,ue,x.depth,0,ae,j,null):t.texImage2D($,ce,ne,de,ue,0,ae,j,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),ft(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,$,Ee.__webglTexture,0,qe(x)):($===r.TEXTURE_2D||$>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,$,Ee.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(P,x,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),x.depthBuffer){let W=x.depthTexture,$=W&&W.isDepthTexture?W.type:null,ce=S(x.stencilBuffer,$),ae=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ft(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(x),ce,x.width,x.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(x),ce,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ce,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ae,r.RENDERBUFFER,P)}else{let W=x.textures;for(let $=0;$<W.length;$++){let ce=W[$],ae=s.convert(ce.format,ce.colorSpace),j=s.convert(ce.type),ne=y(ce.internalFormat,ae,j,ce.normalized,ce.colorSpace);ft(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qe(x),ne,x.width,x.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,qe(x),ne,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ne,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Be(P,x,k){let W=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",E)),$.__webglTexture===void 0){$.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),ke(r.TEXTURE_CUBE_MAP,x.depthTexture);let fe=s.convert(x.depthTexture.format),Ee=s.convert(x.depthTexture.type),de;x.depthTexture.format===qi?de=r.DEPTH_COMPONENT24:x.depthTexture.format===Yr&&(de=r.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,de,x.width,x.height,0,fe,Ee,null)}}else K(x.depthTexture,0);let ce=$.__webglTexture,ae=qe(x),j=W?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,ne=x.depthTexture.format===Yr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===qi)ft(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,j,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ne,j,ce,0);else if(x.depthTexture.format===Yr)ft(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ne,j,ce,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,ne,j,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pe(P){let x=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==P.depthTexture){let W=P.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=W}if(P.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Be(x.__webglFramebuffer[W],P,W);else{let W=P.texture.mipmaps;W&&W.length>0?Be(x.__webglFramebuffer[0],P,0):Be(x.__webglFramebuffer,P,0)}else if(k){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=r.createRenderbuffer(),Ue(x.__webglDepthbuffer[W],P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ce)}}else{let W=P.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Ue(x.__webglDepthbuffer,P,!1);else{let $=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(P,x,k){let W=n.get(P);x!==void 0&&me(W.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Pe(P)}function $e(P){let x=P.texture,k=n.get(P),W=n.get(x);P.addEventListener("dispose",v);let $=P.textures,ce=P.isWebGLCubeRenderTarget===!0,ae=$.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=x.version,a.memory.textures++),ce){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let ne=0;ne<x.mipmaps.length;ne++)k.__webglFramebuffer[j][ne]=r.createFramebuffer()}else k.__webglFramebuffer[j]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)k.__webglFramebuffer[j]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(ae)for(let j=0,ne=$.length;j<ne;j++){let fe=n.get($[j]);fe.__webglTexture===void 0&&(fe.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&ft(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<$.length;j++){let ne=$[j];k.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let fe=s.convert(ne.format,ne.colorSpace),Ee=s.convert(ne.type),de=y(ne.internalFormat,fe,Ee,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),ue=qe(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,de,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,k.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),ke(r.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)me(k.__webglFramebuffer[j][ne],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne);else me(k.__webglFramebuffer[j],P,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(x)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let j=0,ne=$.length;j<ne;j++){let fe=$[j],Ee=n.get(fe),de=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),ke(de,fe),me(k.__webglFramebuffer,P,fe,r.COLOR_ATTACHMENT0+j,de,0),p(fe)&&w(de)}t.unbindTexture()}else{let j=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(j,W.__webglTexture),ke(j,x),x.mipmaps&&x.mipmaps.length>0)for(let ne=0;ne<x.mipmaps.length;ne++)me(k.__webglFramebuffer[ne],P,x,r.COLOR_ATTACHMENT0,j,ne);else me(k.__webglFramebuffer,P,x,r.COLOR_ATTACHMENT0,j,0);p(x)&&w(j),t.unbindTexture()}P.depthBuffer&&Pe(P)}function V(P){let x=P.textures;for(let k=0,W=x.length;k<W;k++){let $=x[k];if(p($)){let ce=C(P),ae=n.get($).__webglTexture;t.bindTexture(ce,ae),w(ce),t.unbindTexture()}}}let tt=[],xt=[];function Dt(P){if(P.samples>0){if(ft(P)===!1){let x=P.textures,k=P.width,W=P.height,$=r.COLOR_BUFFER_BIT,ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ae=n.get(P),j=x.length>1;if(j)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&($|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&($|=r.STENCIL_BUFFER_BIT)),j){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let Ee=n.get(x[fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,k,W,0,0,k,W,$,r.NEAREST),l===!0&&(tt.length=0,xt.length=0,tt.push(r.COLOR_ATTACHMENT0+fe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(tt.push(ce),xt.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,ae.__webglColorRenderbuffer[fe]);let Ee=n.get(x[fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let x=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function qe(P){return Math.min(i.maxSamples,P.samples)}function ft(P){let x=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function F(P){let x=a.render.frame;h.get(P)!==x&&(h.set(P,x),P.update())}function It(P,x){let k=P.colorSpace,W=P.format,$=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Qa&&k!==mr&&(ot.getTransfer(k)===pt?(W!==xi||$!==ii)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",k)),x}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=R,this.setTextureCube=Q,this.rebindTextures=Xe,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function mM(r,e){function t(n,i=mr){let s,a=ot.getTransfer(i);if(n===ii)return r.UNSIGNED_BYTE;if(n===xc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xu)return r.BYTE;if(n===qu)return r.SHORT;if(n===ga)return r.UNSIGNED_SHORT;if(n===_c)return r.INT;if(n===Ui)return r.UNSIGNED_INT;if(n===Fi)return r.FLOAT;if(n===Oi)return r.HALF_FLOAT;if(n===Ju)return r.ALPHA;if(n===Ku)return r.RGB;if(n===xi)return r.RGBA;if(n===qi)return r.DEPTH_COMPONENT;if(n===Yr)return r.DEPTH_STENCIL;if(n===$u)return r.RED;if(n===yc)return r.RED_INTEGER;if(n===Zr)return r.RG;if(n===Sc)return r.RG_INTEGER;if(n===Mc)return r.RGBA_INTEGER;if(n===Mo||n===bo||n===wo||n===To)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bc||n===wc||n===Tc||n===Ec)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Ic||n===Eo||n===Lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ac||n===Cc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Rc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Pc)return s.COMPRESSED_R11_EAC;if(n===Ic)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Eo)return s.COMPRESSED_RG11_EAC;if(n===Lc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Vc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yc||n===Zc||n===Jc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Yc)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kc||n===$c||n===Ao||n===Qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Kc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$c)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_a?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var gM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_M=`
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

}`,vf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new co(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ti({vertexShader:gM,fragmentShader:_M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qn(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yf=class extends Yi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new vf,p={},w=t.getContextAttributes(),C=null,y=null,S=[],b=[],E=new it,v=null,T=null,A=new Sn;A.viewport=new Nt;let D=new Sn;D.viewport=new Nt;let I=[A,D],O=new dc,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ee=S[Z];return ee===void 0&&(ee=new ua,S[Z]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(Z){let ee=S[Z];return ee===void 0&&(ee=new ua,S[Z]=ee),ee.getGripSpace()},this.getHand=function(Z){let ee=S[Z];return ee===void 0&&(ee=new ua,S[Z]=ee),ee.getHandSpace()};function q(Z){let ee=b.indexOf(Z.inputSource);if(ee===-1)return;let _e=S[ee];_e!==void 0&&(_e.update(Z.inputSource,Z.frame,c||a),_e.dispatchEvent({type:Z.type,data:Z.inputSource}))}function z(){i.removeEventListener("select",q),i.removeEventListener("selectstart",q),i.removeEventListener("selectend",q),i.removeEventListener("squeeze",q),i.removeEventListener("squeezestart",q),i.removeEventListener("squeezeend",q),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",K);for(let Z=0;Z<S.length;Z++){let ee=b[Z];ee!==null&&(b[Z]=null,S[Z].disconnect(ee))}L=null,B=null,m.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(C),f=null,u=null,d=null,i=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(E.width,E.height,!1),T!==null){let Z=T.camera;Z.fov=T.fov,Z.zoom=T.zoom,Z.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(C=e.getRenderTarget(),i.addEventListener("select",q),i.addEventListener("selectstart",q),i.addEventListener("selectend",q),i.addEventListener("squeeze",q),i.addEventListener("squeezestart",q),i.addEventListener("squeezeend",q),i.addEventListener("end",z),i.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,me=null;w.depth&&(me=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=w.stencil?Yr:qi,Oe=w.stencil?_a:Ui);let Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(Ue),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Wn(u.textureWidth,u.textureHeight,{format:xi,type:ii,depthTexture:new kr(u.textureWidth,u.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _e={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Wn(f.framebufferWidth,f.framebufferHeight,{format:xi,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function K(Z){for(let ee=0;ee<Z.removed.length;ee++){let _e=Z.removed[ee],Oe=b.indexOf(_e);Oe>=0&&(b[Oe]=null,S[Oe].disconnect(_e))}for(let ee=0;ee<Z.added.length;ee++){let _e=Z.added[ee],Oe=b.indexOf(_e);if(Oe===-1){for(let Ue=0;Ue<S.length;Ue++)if(Ue>=b.length){b.push(_e),Oe=Ue;break}else if(b[Ue]===null){b[Ue]=_e,Oe=Ue;break}if(Oe===-1)break}let me=S[Oe];me&&me.connect(_e)}}let H=new J,R=new J;function Q(Z,ee,_e){H.setFromMatrixPosition(ee.matrixWorld),R.setFromMatrixPosition(_e.matrixWorld);let Oe=H.distanceTo(R),me=ee.projectionMatrix.elements,Ue=_e.projectionMatrix.elements,Be=me[14]/(me[10]-1),Pe=me[14]/(me[10]+1),Xe=(me[9]+1)/me[5],$e=(me[9]-1)/me[5],V=(me[8]-1)/me[0],tt=(Ue[8]+1)/Ue[0],xt=Be*V,Dt=Be*tt,qe=Oe/(-V+tt),ft=qe*-V;if(ee.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(ft),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),me[10]===-1)Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let F=Be+qe,It=Pe+qe,We=xt-ft,P=Dt+(Oe-ft),x=Xe*Pe/It*F,k=$e*Pe/It*F;Z.projectionMatrix.makePerspective(We,P,x,k,F,It),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,ee){ee===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ee.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let ee=Z.near,_e=Z.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),O.near=D.near=A.near=ee,O.far=D.far=A.far=_e,(L!==O.near||B!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,B=O.far),O.layers.mask=Z.layers.mask|6,A.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;let Oe=Z.parent,me=O.cameras;Se(O,Oe);for(let Ue=0;Ue<me.length;Ue++)Se(me[Ue],Oe);me.length===2?Q(O,A,D):O.projectionMatrix.copy(A.projectionMatrix),T===null&&Z.isPerspectiveCamera&&(T={camera:Z,fov:Z.fov,zoom:Z.zoom}),Me(Z,O,Oe)};function Me(Z,ee,_e){_e===null?Z.matrix.copy(ee.matrixWorld):(Z.matrix.copy(_e.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ee.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ee.projectionMatrix),Z.projectionMatrixInverse.copy(ee.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=la*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Z){return p[Z]};let Ve=null;function ke(Z,ee){if(h=ee.getViewerPose(c||a),g=ee,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Oe=!1;_e.length!==O.cameras.length&&(O.cameras.length=0,Oe=!0);for(let Pe=0;Pe<_e.length;Pe++){let Xe=_e[Pe],$e=null;if(f!==null)$e=f.getViewport(Xe);else{let tt=d.getViewSubImage(u,Xe);$e=tt.viewport,Pe===0&&(e.setRenderTargetTextures(y,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(y))}let V=I[Pe];V===void 0&&(V=new Sn,V.layers.enable(Pe),V.viewport=new Nt,I[Pe]=V),V.matrix.fromArray(Xe.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(Xe.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set($e.x,$e.y,$e.width,$e.height),Pe===0&&(O.matrix.copy(V.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Oe===!0&&O.cameras.push(V)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Pe=d.getDepthInformation(_e[0]);Pe&&Pe.isValid&&Pe.texture&&m.init(Pe,i.renderState)}if(me&&me.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Pe=0;Pe<_e.length;Pe++){let Xe=_e[Pe].camera;if(Xe){let $e=p[Xe];$e||($e=new co,p[Xe]=$e);let V=d.getCameraImage(Xe);$e.sourceTexture=V}}}}for(let _e=0;_e<S.length;_e++){let Oe=b[_e],me=S[_e];Oe!==null&&me!==void 0&&me.update(Oe,ee,c||a)}Ve&&Ve(Z,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let He=new Em;He.setAnimationLoop(ke),this.setAnimationLoop=function(Z){Ve=Z},this.dispose=function(){}}},xM=new kt,Lm=new Ze;Lm.set(-1,0,0,0,1,0,0,0,1);function vM(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),C=w.envMap,y=w.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(xM.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Lm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yM(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function c(y,S){let b=i[y.id];b===void 0&&(m(y),b=h(y),i[y.id]=b,y.addEventListener("dispose",w));let E=S.program;n.updateUBOMapping(y,E);let v=e.render.frame;s[y.id]!==v&&(u(y),s[y.id]=v)}function h(y){let S=d();y.__bindingPointIndex=S;let b=r.createBuffer(),E=y.__size,v=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,E,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=i[y.id],b=y.uniforms,E=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let v=0,T=b.length;v<T;v++){let A=b[v];if(Array.isArray(A))for(let D=0,I=A.length;D<I;D++)f(A[D],v,D,E);else f(A,v,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,S,b,E){if(_(y,S,b,E)===!0){let v=y.__offset,T=y.value;if(Array.isArray(T)){let A=0;for(let D=0;D<T.length;D++){let I=T[D],O=p(I);g(I,y.__data,A),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(A+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,y.__data)}}function g(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function _(y,S,b,E){let v=y.value,T=S+"_"+b;if(E[T]===void 0)return typeof v=="number"||typeof v=="boolean"?E[T]=v:ArrayBuffer.isView(v)?E[T]=v.slice():E[T]=v.clone(),!0;{let A=E[T];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function m(y){let S=y.uniforms,b=0,E=16;for(let T=0,A=S.length;T<A;T++){let D=Array.isArray(S[T])?S[T]:[S[T]];for(let I=0,O=D.length;I<O;I++){let L=D[I],B=Array.isArray(L.value)?L.value:[L.value];for(let q=0,z=B.length;q<z;q++){let K=B[q],H=p(K),R=b%E,Q=R%H.boundary,Se=R+Q;b+=Q,Se!==0&&E-Se<H.storage&&(b+=E-Se),L.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=H.storage}}}let v=b%E;return v>0&&(b+=E-v),y.__size=b,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",y),S}function w(y){let S=y.target;S.removeEventListener("dispose",w);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function C(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:C}}var SM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;function MM(){return Qi===null&&(Qi=new Kl(SM,16,16,Zr,Oi),Qi.name="DFG_LUT",Qi.minFilter=jt,Qi.magFilter=jt,Qi.wrapS=Xi,Qi.wrapT=Xi,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var ah=class{constructor(e={}){let{canvas:t=$p(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=ii}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([Mc,Sc,yc]),p=new Set([ii,Ui,ga,_a,xc,vc]),w=new Uint32Array(4),C=new Int32Array(4),y=new J,S=null,b=null,E=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,I=null,O=null,L=null,B=null;this._outputColorSpace=fn;let q=0,z=0,K=null,H=-1,R=null,Q=new Nt,Se=new Nt,Me=null,Ve=new at(0),ke=0,He=t.width,Z=t.height,ee=1,_e=null,Oe=null,me=new Nt(0,0,He,Z),Ue=new Nt(0,0,He,Z),Be=!1,Pe=new ao,Xe=!1,$e=!1,V=new kt,tt=new J,xt=new Nt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function ft(){return K===null?ee:1}let F=n;function It(M,U){return t.getContext(M,U)}let We,P,x,k,W,$,ce,ae,j,ne,fe,Ee,de,ue,le,Ie,Fe,N,he,te,pe,xe,ie;try{let M={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),F===null){let U="webgl2";if(F=It(U,M),F===null)throw It(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}oe()}catch(M){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ge("WebGLRenderer: "+M.message),M}function oe(){We=new Ry(F),We.init(),pe=new mM(F,We),P=new vy(F,We,e,pe),x=new dM(F,We),P.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),O=F.createFramebuffer(),L=F.createFramebuffer(),B=F.createFramebuffer(),k=new Ly(F),W=new jS,$=new pM(F,We,x,W,P,pe,k),ce=new Cy(A),ae=new N0(F),xe=new _y(F,ae),j=new Py(F,ae,k,xe),ne=new Ny(F,j,ae,xe,k),N=new Dy(F,P,$),le=new yy(W),fe=new QS(A,ce,We,P,xe,le),Ee=new vM(A,W),de=new tM,ue=new oM(We),Fe=new gy(A,ce,x,ne,g,l),Ie=new fM(A,ne,P),ie=new yM(F,k,P,x),he=new xy(F,We,k),te=new Iy(F,We,k),k.programs=fe.programs,A.capabilities=P,A.extensions=We,A.properties=W,A.renderLists=de,A.shadowMap=Ie,A.state=x,A.info=k}_!==ii&&(T=new Fy(_,t.width,t.height,o,i,s));let re=new yf(A,F);this.xr=re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let M=We.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=We.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(He,Z,!1))},this.getSize=function(M){return M.set(He,Z)},this.setSize=function(M,U,Y=!0){if(re.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}He=M,Z=U,t.width=Math.floor(M*ee),t.height=Math.floor(U*ee),Y===!0&&(t.style.width=M+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(He*ee,Z*ee).floor()},this.setDrawingBufferSize=function(M,U,Y){He=M,Z=U,ee=Y,t.width=Math.floor(M*Y),t.height=Math.floor(U*Y),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===ii){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(me)},this.setViewport=function(M,U,Y,G){M.isVector4?me.set(M.x,M.y,M.z,M.w):me.set(M,U,Y,G),x.viewport(Q.copy(me).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(Ue)},this.setScissor=function(M,U,Y,G){M.isVector4?Ue.set(M.x,M.y,M.z,M.w):Ue.set(M,U,Y,G),x.scissor(Se.copy(Ue).multiplyScalar(ee).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(M){x.setScissorTest(Be=M)},this.setOpaqueSort=function(M){_e=M},this.setTransparentSort=function(M){Oe=M},this.getClearColor=function(M){return M.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,Y=!0){let G=0;if(M){let X=!1;if(K!==null){let ge=K.texture.format;X=m.has(ge)}if(X){let ge=K.texture.type,we=p.has(ge),ye=Fe.getClearColor(),Ce=Fe.getClearAlpha(),Le=ye.r,Qe=ye.g,st=ye.b;we?(w[0]=Le,w[1]=Qe,w[2]=st,w[3]=Ce,F.clearBufferuiv(F.COLOR,0,w)):(C[0]=Le,C[1]=Qe,C[2]=st,C[3]=Ce,F.clearBufferiv(F.COLOR,0,C))}else G|=F.COLOR_BUFFER_BIT}U&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),I=M},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),de.dispose(),ue.dispose(),W.dispose(),ce.dispose(),ne.dispose(),xe.dispose(),ie.dispose(),fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",At),re.removeEventListener("sessionend",yt),ct.stop()};function De(M){M.preventDefault(),ju("WebGLRenderer: Context Lost."),D=!0}function se(){ju("WebGLRenderer: Context Restored."),D=!1;let M=k.autoReset,U=Ie.enabled,Y=Ie.autoUpdate,G=Ie.needsUpdate,X=Ie.type;oe(),k.autoReset=M,Ie.enabled=U,Ie.autoUpdate=Y,Ie.needsUpdate=G,Ie.type=X}function Ne(M){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ae(M){let U=M.target;U.removeEventListener("dispose",Ae),Ye(U)}function Ye(M){qt(M),W.remove(M)}function qt(M){let U=W.get(M).programs;U!==void 0&&(U.forEach(function(Y){fe.releaseProgram(Y)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,Y,G,X,ge){U===null&&(U=Dt);let we=X.isMesh&&X.matrixWorld.determinantAffine()<0,ye=an(M,U,Y,G,X);x.setMaterial(G,we);let Ce=Y.index,Le=1;if(G.wireframe===!0){if(Ce=j.getWireframeAttribute(Y),Ce===void 0)return;Le=2}let Qe=Y.drawRange,st=Y.attributes.position,Re=Qe.start*Le,dt=(Qe.start+Qe.count)*Le;ge!==null&&(Re=Math.max(Re,ge.start*Le),dt=Math.min(dt,(ge.start+ge.count)*Le)),Ce!==null?(Re=Math.max(Re,0),dt=Math.min(dt,Ce.count)):st!=null&&(Re=Math.max(Re,0),dt=Math.min(dt,st.count));let Zt=dt-Re;if(Zt<0||Zt===1/0)return;xe.setup(X,G,ye,Y,Ce);let Ct,St=he;if(Ce!==null&&(Ct=ae.get(Ce),St=te,St.setIndex(Ct)),X.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*ft()),St.setMode(F.LINES)):St.setMode(F.TRIANGLES);else if(X.isLine){let xn=G.linewidth;xn===void 0&&(xn=1),x.setLineWidth(xn*ft()),X.isLineSegments?St.setMode(F.LINES):X.isLineLoop?St.setMode(F.LINE_LOOP):St.setMode(F.LINE_STRIP)}else X.isPoints?St.setMode(F.POINTS):X.isSprite&&St.setMode(F.TRIANGLES);if(X.isBatchedMesh)if(We.get("WEBGL_multi_draw"))St.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let xn=X._multiDrawStarts,be=X._multiDrawCounts,Dn=X._multiDrawCount,ut=Ce?ae.get(Ce).bytesPerElement:1,pi=W.get(G).currentProgram.getUniforms();for(let Hi=0;Hi<Dn;Hi++)pi.setValue(F,"_gl_DrawID",Hi),St.render(xn[Hi]/ut,be[Hi])}else if(X.isInstancedMesh)St.renderInstances(Re,Zt,X.count);else if(Y.isInstancedBufferGeometry){let xn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,be=Math.min(Y.instanceCount,xn);St.renderInstances(Re,Zt,be)}else St.render(Re,Zt)};function nt(M,U,Y,G){I!==null&&M.isNodeMaterial&&I.setObject(G,M),Xe===!0&&le.setState(M,Y,!1),M.transparent===!0&&M.side===Ki&&M.forceSinglePass===!1?(M.side=Un,M.needsUpdate=!0,Bt(M,U,G),M.side=Wr,M.needsUpdate=!0,Bt(M,U,G),M.side=Ki):Bt(M,U,G)}this.compile=function(M,U,Y=null){Y===null&&(Y=M),I!==null&&I.renderStart(M,U,Y),b=ue.get(Y),b.init(U),v.push(b),Y.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),M!==Y&&M.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(b.pushLight(X),X.castShadow&&b.pushShadow(X))}),b.setupLights(),I!==null&&I.updateLights(b.state.lightsArray),$e=this.localClippingEnabled,Xe=le.init(this.clippingPlanes,$e),Xe===!0&&le.setGlobalState(this.clippingPlanes,U),I!==null&&Ie.render(b.state.shadowsArray,Y,U);let G=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let ge=X.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){let ye=ge[we];nt(ye,Y,U,X),G.add(ye)}else nt(ge,Y,U,X),G.add(ge)}),b=v.pop(),I!==null&&I.renderEnd(),G},this.compileAsync=function(M,U,Y=null){let G=this.compile(M,U,Y);return new Promise(X=>{function ge(){if(G.forEach(function(we){let Ce=W.get(we).currentProgram;(Ce===void 0||Ce.isReady())&&G.delete(we)}),G.size===0){X(M);return}setTimeout(ge,10)}We.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Et=null;function sn(M){Et&&Et(M)}function At(){ct.stop()}function yt(){ct.start()}let ct=new Em;ct.setAnimationLoop(sn),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(M){Et=M,re.setAnimationLoop(M),M===null?ct.stop():ct.start()},re.addEventListener("sessionstart",At),re.addEventListener("sessionend",yt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;I!==null&&I.renderStart(M,U);let Y=re.enabled===!0&&re.isPresenting===!0,G=T!==null&&(K===null||Y)&&T.begin(A,K);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,U,K),b=ue.get(M,v.length),b.init(U),b.state.textureUnits=$.getTextureUnits(),v.push(b),V.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Pe.setFromProjectionMatrix(V,Di,U.reversedDepth),$e=this.localClippingEnabled,Xe=le.init(this.clippingPlanes,$e),S=de.get(M,E.length),S.init(),E.push(S),re.enabled===!0&&re.isPresenting===!0){let we=A.xr.getDepthSensingMesh();we!==null&&In(we,U,-1/0,A.sortObjects)}In(M,U,0,A.sortObjects),S.finish(),I!==null&&I.updateLights(b.state.lightsArray),A.sortObjects===!0&&S.sort(_e,Oe),qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,qe&&Fe.addToRenderList(S,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&le.beginShadows();let X=b.state.shadowsArray;if(Ie.render(X,M,U),Xe===!0&&le.endShadows(),(G&&T.hasRenderPass())===!1){let we=S.opaque,ye=S.transmissive;if(b.setupLights(),U.isArrayCamera){let Ce=U.cameras;if(ye.length>0)for(let Le=0,Qe=Ce.length;Le<Qe;Le++){let st=Ce[Le];_n(we,ye,M,st)}qe&&Fe.render(M);for(let Le=0,Qe=Ce.length;Le<Qe;Le++){let st=Ce[Le];wt(S,M,st,st.viewport)}}else ye.length>0&&_n(we,ye,M,U),qe&&Fe.render(M),wt(S,M,U)}K!==null&&z===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),G&&T.end(A),M.isScene===!0&&M.onAfterRender(A,M,U),xe.resetDefaultState(),H=-1,R=null,v.pop(),v.length>0?(b=v[v.length-1],$.setTextureUnits(b.state.textureUnits),Xe===!0&&le.setGlobalState(A.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,I!==null&&I.renderEnd()};function In(M,U,Y,G){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)Y=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)b.pushLightProbeGrid(M);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Pe)){G&&xt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(V);let we=ne.update(M),ye=M.material;ye.visible&&S.push(M,we,ye,Y,xt.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Pe))){let we=ne.update(M),ye=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),xt.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),xt.copy(we.boundingSphere.center)),xt.applyMatrix4(M.matrixWorld).applyMatrix4(V)),Array.isArray(ye)){let Ce=we.groups;for(let Le=0,Qe=Ce.length;Le<Qe;Le++){let st=Ce[Le],Re=ye[st.materialIndex];Re&&Re.visible&&S.push(M,we,Re,Y,xt.z,st,U)}}else ye.visible&&S.push(M,we,ye,Y,xt.z,null,U)}}let ge=M.children;for(let we=0,ye=ge.length;we<ye;we++)In(ge[we],U,Y,G)}function wt(M,U,Y,G){let{opaque:X,transmissive:ge,transparent:we}=M;b.setupLightsView(Y),Xe===!0&&le.setGlobalState(A.clippingPlanes,Y),G&&x.viewport(Q.copy(G)),X.length>0&&Ln(X,U,Y),ge.length>0&&Ln(ge,U,Y),we.length>0&&Ln(we,U,Y),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function _n(M,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let Re=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Wn(1,1,{generateMipmaps:!0,type:Re?Oi:ii,minFilter:qr,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let ge=b.state.transmissionRenderTarget[G.id],we=G.viewport||Q;ge.setSize(we.z*A.transmissionResolutionScale,we.w*A.transmissionResolutionScale);let ye=A.getRenderTarget(),Ce=A.getActiveCubeFace(),Le=A.getActiveMipmapLevel();A.setRenderTarget(ge),A.getClearColor(Ve),ke=A.getClearAlpha(),ke<1&&A.setClearColor(16777215,.5),A.clear(),qe&&Fe.render(Y);let Qe=A.toneMapping;A.toneMapping=Ni;let st=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),Xe===!0&&le.setGlobalState(A.clippingPlanes,G),Ln(M,Y,G),$.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge),We.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let dt=0,Zt=U.length;dt<Zt;dt++){let Ct=U[dt],{object:St,geometry:xn,material:be,group:Dn}=Ct;if(be.side===Ki&&St.layers.test(G.layers)){let ut=be.side;be.side=Un,be.needsUpdate=!0,Yt(St,Y,G,xn,be,Dn),be.side=ut,be.needsUpdate=!0,Re=!0}}Re===!0&&($.updateMultisampleRenderTarget(ge),$.updateRenderTargetMipmap(ge))}A.setRenderTarget(ye,Ce,Le),A.setClearColor(Ve,ke),st!==void 0&&(G.viewport=st),A.toneMapping=Qe}function Ln(M,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let X=0,ge=M.length;X<ge;X++){let we=M[X],{object:ye,geometry:Ce,group:Le}=we,Qe=we.material;Qe.allowOverride===!0&&G!==null&&(Qe=G),ye.layers.test(Y.layers)&&Yt(ye,U,Y,Ce,Qe,Le)}}function Yt(M,U,Y,G,X,ge){I!==null&&X.isNodeMaterial&&I.setObject(M,X),M.onBeforeRender(A,U,Y,G,X,ge),M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(A,U,Y,G,M,ge),X.transparent===!0&&X.side===Ki&&X.forceSinglePass===!1?(X.side=Un,X.needsUpdate=!0,A.renderBufferDirect(Y,U,G,X,M,ge),X.side=Wr,X.needsUpdate=!0,A.renderBufferDirect(Y,U,G,X,M,ge),X.side=Ki):A.renderBufferDirect(Y,U,G,X,M,ge),M.onAfterRender(A,U,Y,G,X,ge)}function Bt(M,U,Y){U.isScene!==!0&&(U=Dt);let G=W.get(M),X=b.state.lights,ge=b.state.shadowsArray,we=X.state.version,ye=fe.getParameters(M,X.state,ge,U,Y,b.state.lightProbeGridArray),Ce=fe.getProgramCacheKey(ye),Le=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Qe=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ce.get(M.envMap||G.environment,Qe),G.envMapRotation=G.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Le===void 0&&(M.addEventListener("dispose",Ae),Le=new Map,G.programs=Le);let st=Le.get(Ce);if(st!==void 0){if(G.currentProgram===st&&G.lightsStateVersion===we)return Gi(M,ye),st}else ye.uniforms=fe.getUniforms(M),I!==null&&M.isNodeMaterial&&I.build(M,Y,ye),M.onBeforeCompile(ye,A),st=fe.acquireProgram(ye,Ce),Le.set(Ce,st),G.uniforms=ye.uniforms;let Re=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Re.clippingPlanes=le.uniform),Gi(M,ye),G.needsLights=di(M),G.lightsStateVersion=we,G.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.sunLights.value=X.state.sun,Re.sunLightShadows.value=X.state.sunShadow,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.sunShadowMatrix.value=X.state.sunShadowMatrix,Re.sunShadowCascade.value=X.state.sunShadowCascade,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=st,G.uniformsList=null,st}function Qt(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Sa.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Gi(M,U){let Y=W.get(M);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function ks(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=M.length;Y<G;Y++){let X=M[Y];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function an(M,U,Y,G,X){U.isScene!==!0&&(U=Dt),$.resetTextureUnits();let ge=U.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,ye=K===null?A.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ot.workingColorSpace,Ce=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Le=ce.get(G.envMap||we,Ce),Qe=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,st=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!Y.morphAttributes.position,dt=!!Y.morphAttributes.normal,Zt=!!Y.morphAttributes.color,Ct=Ni;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ct=A.toneMapping);let St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,xn=St!==void 0?St.length:0,be=W.get(G),Dn=b.state.lights;if(Xe===!0&&($e===!0||M!==R)){let Tt=M===R&&G.id===H;le.setState(G,M,Tt)}let ut=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Dn.state.version||be.outputColorSpace!==ye||X.isBatchedMesh&&be.batching===!1||!X.isBatchedMesh&&be.batching===!0||X.isBatchedMesh&&be.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&be.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&be.instancing===!1||!X.isInstancedMesh&&be.instancing===!0||X.isSkinnedMesh&&be.skinning===!1||!X.isSkinnedMesh&&be.skinning===!0||X.isInstancedMesh&&be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&be.instancingMorph===!1&&X.morphTexture!==null||be.envMap!==Le||G.fog===!0&&be.fog!==ge||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==le.numPlanes||be.numIntersection!==le.numIntersection)||be.vertexAlphas!==Qe||be.vertexTangents!==st||be.morphTargets!==Re||be.morphNormals!==dt||be.morphColors!==Zt||be.toneMapping!==Ct||be.morphTargetsCount!==xn||!!be.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,be.__version=G.version);let pi=be.currentProgram;ut===!0&&(pi=Bt(G,U,X),I&&G.isNodeMaterial&&I.onUpdateProgram(G,pi,be));let Hi=!1,Cr=!1,Vs=!1,vt=pi.getUniforms(),Wt=be.uniforms;if(x.useProgram(pi.program)&&(Hi=!0,Cr=!0,Vs=!0),G.id!==H&&(H=G.id,Cr=!0),be.needsLights){let Tt=ks(b.state.lightProbeGridArray,X);be.lightProbeGrid!==Tt&&(be.lightProbeGrid=Tt,Cr=!0)}if(Hi||R!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),vt.setValue(F,"projectionMatrix",M.projectionMatrix),vt.setValue(F,"viewMatrix",M.matrixWorldInverse);let Pr=vt.map.cameraPosition;Pr!==void 0&&Pr.setValue(F,tt.setFromMatrixPosition(M.matrixWorld)),P.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(F,"isOrthographic",M.isOrthographicCamera===!0),R!==M&&(R=M,Cr=!0,Vs=!0)}if(be.needsLights&&(Dn.state.sunShadowMap.length>0&&vt.setValue(F,"sunShadowMap",Dn.state.sunShadowMap,$),Dn.state.directionalShadowMap.length>0&&vt.setValue(F,"directionalShadowMap",Dn.state.directionalShadowMap,$),Dn.state.spotShadowMap.length>0&&vt.setValue(F,"spotShadowMap",Dn.state.spotShadowMap,$),Dn.state.pointShadowMap.length>0&&vt.setValue(F,"pointShadowMap",Dn.state.pointShadowMap,$)),X.isSkinnedMesh){vt.setOptional(F,X,"bindMatrix"),vt.setOptional(F,X,"bindMatrixInverse");let Tt=X.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),vt.setValue(F,"boneTexture",Tt.boneTexture,$))}X.isBatchedMesh&&(vt.setOptional(F,X,"batchingTexture"),vt.setValue(F,"batchingTexture",X._matricesTexture,$),vt.setOptional(F,X,"batchingIdTexture"),vt.setValue(F,"batchingIdTexture",X._indirectTexture,$),vt.setOptional(F,X,"batchingColorTexture"),X._colorsTexture!==null&&vt.setValue(F,"batchingColorTexture",X._colorsTexture,$));let Rr=Y.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&N.update(X,Y,pi),(Cr||be.receiveShadow!==X.receiveShadow)&&(be.receiveShadow=X.receiveShadow,vt.setValue(F,"receiveShadow",X.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=MM()),Cr){if(vt.setValue(F,"toneMappingExposure",A.toneMappingExposure),be.needsLights&&Ht(Wt,Vs),ge&&G.fog===!0&&Ee.refreshFogUniforms(Wt,ge),Ee.refreshMaterialUniforms(Wt,G,ee,Z,b.state.transmissionRenderTarget[M.id]),be.needsLights&&be.lightProbeGrid){let Tt=be.lightProbeGrid;Wt.probesSH.value=Tt.texture,Wt.probesMin.value.copy(Tt.boundingBox.min),Wt.probesMax.value.copy(Tt.boundingBox.max),Wt.probesResolution.value.copy(Tt.resolution)}Sa.upload(F,Qt(be),Wt,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Sa.upload(F,Qt(be),Wt,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(F,"center",X.center),vt.setValue(F,"modelViewMatrix",X.modelViewMatrix),vt.setValue(F,"normalMatrix",X.normalMatrix),vt.setValue(F,"modelMatrix",X.matrixWorld),G.uniformsGroups!==void 0){let Tt=G.uniformsGroups;for(let Pr=0,Gs=Tt.length;Pr<Gs;Pr++){let Yd=Tt[Pr];ie.update(Yd,pi),ie.bind(Yd,pi)}}return pi}function Ht(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function di(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(M,U,Y){let G=W.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(M.texture).__webglTexture=U,W.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let Y=W.get(M);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,Y=0){K=M,q=U,z=Y;let G=null,X=!1,ge=!1;if(M){let ye=W.get(M);if(ye.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),Q.copy(M.viewport),Se.copy(M.scissor),Me=M.scissorTest,x.viewport(Q),x.scissor(Se),x.setScissorTest(Me),H=-1;return}else if(ye.__webglFramebuffer===void 0)$.setupRenderTarget(M);else if(ye.__hasExternalTextures)$.rebindTextures(M,W.get(M.texture).__webglTexture,W.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Qe=M.depthTexture;if(ye.__boundDepthTexture!==Qe){if(Qe!==null&&W.has(Qe)&&(M.width!==Qe.image.width||M.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(M)}}let Ce=M.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ge=!0);let Le=W.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?G=Le[U][Y]:G=Le[U],X=!0):M.samples>0&&$.useMultisampledRTT(M)===!1?G=W.get(M).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[Y]:G=Le,Q.copy(M.viewport),Se.copy(M.scissor),Me=M.scissorTest}else Q.copy(me).multiplyScalar(ee).floor(),Se.copy(Ue).multiplyScalar(ee).floor(),Me=Be;if(Y!==0&&(G=O),x.bindFramebuffer(F.FRAMEBUFFER,G)&&x.drawBuffers(M,G),x.viewport(Q),x.scissor(Se),x.setScissorTest(Me),X){let ye=W.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,Y)}else if(ge){let ye=U;for(let Ce=0;Ce<M.textures.length;Ce++){let Le=W.get(M.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Le.__webglTexture,Y,ye)}}else if(M!==null&&Y!==0){let ye=W.get(M.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,Y)}H=-1};function zs(M){let U=W.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=P.textureFormatReadable(M.format),U.__typeReadable=P.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,Y,G,X,ge,we,ye=0){if(!(M&&M.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){x.bindFramebuffer(F.FRAMEBUFFER,Ce);try{let Le=M.textures[ye],Qe=Le.format,st=Le.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Re=zs(Le);if(Re.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-G&&Y>=0&&Y<=M.height-X&&F.readPixels(U,Y,G,X,pe.convert(Qe),pe.convert(st),ge)}finally{let Le=K!==null?W.get(K).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(M,U,Y,G,X,ge,we,ye=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=W.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(U>=0&&U<=M.width-G&&Y>=0&&Y<=M.height-X){x.bindFramebuffer(F.FRAMEBUFFER,Ce);let Le=M.textures[ye],Qe=Le.format,st=Le.type;M.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);let Re=zs(Le);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),F.readPixels(U,Y,G,X,pe.convert(Qe),pe.convert(st),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Zt=K!==null?W.get(K).__webglFramebuffer:null;x.bindFramebuffer(F.FRAMEBUFFER,Zt);let Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await jp(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,dt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(dt),F.deleteSync(Ct),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,Y=0){let G=Math.pow(2,-Y),X=Math.floor(M.image.width*G),ge=Math.floor(M.image.height*G),we=U!==null?U.x:0,ye=U!==null?U.y:0;$.setTexture2D(M,0),F.copyTexSubImage2D(F.TEXTURE_2D,Y,0,0,we,ye,X,ge),x.unbindTexture()},this.copyTextureToTexture=function(M,U,Y=null,G=null,X=0,ge=0){let we,ye,Ce,Le,Qe,st,Re,dt,Zt,Ct=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(Y!==null)we=Y.max.x-Y.min.x,ye=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Qe=Y.min.y,st=Y.isBox3?Y.min.z:0;else{let Wt=Math.pow(2,-X);we=Math.floor(Ct.width*Wt),ye=Math.floor(Ct.height*Wt),M.isDataArrayTexture?Ce=Ct.depth:M.isData3DTexture?Ce=Math.floor(Ct.depth*Wt):Ce=1,Le=0,Qe=0,st=0}G!==null?(Re=G.x,dt=G.y,Zt=G.z):(Re=0,dt=0,Zt=0);let St=pe.convert(U.format),xn=pe.convert(U.type),be;U.isData3DTexture?($.setTexture3D(U,0),be=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),be=F.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),be=F.TEXTURE_2D),x.activeTexture(F.TEXTURE0),x.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Dn=x.getParameter(F.UNPACK_ROW_LENGTH),ut=x.getParameter(F.UNPACK_IMAGE_HEIGHT),pi=x.getParameter(F.UNPACK_SKIP_PIXELS),Hi=x.getParameter(F.UNPACK_SKIP_ROWS),Cr=x.getParameter(F.UNPACK_SKIP_IMAGES);x.pixelStorei(F.UNPACK_ROW_LENGTH,Ct.width),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ct.height),x.pixelStorei(F.UNPACK_SKIP_PIXELS,Le),x.pixelStorei(F.UNPACK_SKIP_ROWS,Qe),x.pixelStorei(F.UNPACK_SKIP_IMAGES,st);let Vs=M.isDataArrayTexture||M.isData3DTexture,vt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let Wt=W.get(M),Rr=W.get(U),Tt=W.get(Wt.__renderTarget),Pr=W.get(Rr.__renderTarget);x.bindFramebuffer(F.READ_FRAMEBUFFER,Tt.__webglFramebuffer),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pr.__webglFramebuffer);for(let Gs=0;Gs<Ce;Gs++)Vs&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(M).__webglTexture,X,st+Gs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,W.get(U).__webglTexture,ge,Zt+Gs)),F.blitFramebuffer(Le,Qe,we,ye,Re,dt,we,ye,F.DEPTH_BUFFER_BIT,F.NEAREST);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||W.has(M)){let Wt=W.get(M),Rr=W.get(U);x.bindFramebuffer(F.READ_FRAMEBUFFER,L),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,B);for(let Tt=0;Tt<Ce;Tt++)Vs?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Wt.__webglTexture,X,st+Tt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Wt.__webglTexture,X),vt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rr.__webglTexture,ge,Zt+Tt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Rr.__webglTexture,ge),X!==0?F.blitFramebuffer(Le,Qe,we,ye,Re,dt,we,ye,F.COLOR_BUFFER_BIT,F.NEAREST):vt?F.copyTexSubImage3D(be,ge,Re,dt,Zt+Tt,Le,Qe,we,ye):F.copyTexSubImage2D(be,ge,Re,dt,Le,Qe,we,ye);x.bindFramebuffer(F.READ_FRAMEBUFFER,null),x.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else vt?M.isDataTexture||M.isData3DTexture?F.texSubImage3D(be,ge,Re,dt,Zt,we,ye,Ce,St,xn,Ct.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(be,ge,Re,dt,Zt,we,ye,Ce,St,Ct.data):F.texSubImage3D(be,ge,Re,dt,Zt,we,ye,Ce,St,xn,Ct):M.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,Re,dt,we,ye,St,xn,Ct.data):M.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,Re,dt,Ct.width,Ct.height,St,Ct.data):F.texSubImage2D(F.TEXTURE_2D,ge,Re,dt,we,ye,St,xn,Ct);x.pixelStorei(F.UNPACK_ROW_LENGTH,Dn),x.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ut),x.pixelStorei(F.UNPACK_SKIP_PIXELS,pi),x.pixelStorei(F.UNPACK_SKIP_ROWS,Hi),x.pixelStorei(F.UNPACK_SKIP_IMAGES,Cr),ge===0&&U.generateMipmaps&&F.generateMipmap(be),x.unbindTexture()},this.initRenderTarget=function(M){W.get(M).__webglFramebuffer===void 0&&$.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$.setTextureCube(M,0):M.isData3DTexture?$.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$.setTexture2DArray(M,0):$.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){q=0,z=0,K=null,x.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}};function gr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Vm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oo={duration:.5,overwrite:!1,delay:0},Bf,dn,Lt,yi=1e8,bt=1/yi,Cf=Math.PI*2,wM=Cf/4,TM=0,Gm=Math.sqrt,EM=Math.cos,AM=Math.sin,nn=function(e){return typeof e=="string"},zt=function(e){return typeof e=="function"},xr=function(e){return typeof e=="number"},xh=function(e){return typeof e>"u"},nr=function(e){return typeof e=="object"},Jn=function(e){return e!==!1},kf=function(){return typeof window<"u"},ch=function(e){return zt(e)||nn(e)},Hm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,CM=/random\([^)]+\)/g,RM=/,\s*/g,Dm=/(?:-?\.?\d|\.)+/gi,zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ss=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vf=/[+-]=-?[.\d]+/,PM=/[^,'"\[\]\s]+/gi,IM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,er,Rf,Gf,si={},dh={},Wm,Xm=function(e){return(dh=wa(e,si))&&En},vh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bo=function(e,t){return!t&&console.warn(e)},qm=function(e,t){return e&&(si[e]=t)&&dh&&(dh[e]=t)||si},ko=function(){return 0},LM={suppressEvents:!0,isStart:!0,kill:!1},hh={suppressEvents:!0,kill:!1},DM={suppressEvents:!0},Hf={},Kr=[],Pf={},Ym,Yn={},Mf={},Nm=30,uh=[],Wf="",Xf=function(e){var t=e[0],n,i;if(nr(t)||zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=uh.length;i--&&!uh[i].targetTest(t););n=uh[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Jf(e[i],n)))||e.splice(i,1);return e},$r=function(e){return e._gsap||Xf(Si(e))[0]._gsap},qf=function(e,t,n){return(n=e[t])&&zt(n)?e[t]():xh(n)&&e.getAttribute&&e.getAttribute(t)||n},Fn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Ut=function(e){return Math.round(e*1e7)/1e7||0},Ms=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},NM=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ph=function(){var e=Kr.length,t=Kr.slice(0),n,i;for(Pf={},Kr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Yf=function(e){return!!(e._initted||e._startAt||e.add)},Zm=function(e,t,n,i){Kr.length&&!dn&&ph(),e.render(t,n,i||!!(dn&&t<0&&Yf(e))),Kr.length&&!dn&&ph()},Jm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(PM).length<2?t:nn(e)?e.trim():e},Km=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},UM=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},wa=function(e,t){for(var n in t)e[n]=t[n];return e},Um=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=nr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},mh=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},No=function(e){var t=e.parent||Ft,n=e.keyframes?UM(Tn(e.keyframes)):ai;if(Jn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},FM=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},$m=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},yh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Qr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},xs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},OM=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},If=function(e,t,n,i){return e._startAt&&(dn?e._startAt.revert(hh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},BM=function r(e){return!e||e._ts&&r(e.parent)},Fm=function(e){return e._repeat?Ta(e._tTime,e=e.duration()+e._rDelay)*e:0},Ta=function(e,t){var n=Math.floor(e=Ut(e/t));return e&&n===e?n-1:n},gh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Sh=function(e){return e._end=Ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||bt)||0))},Mh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ut(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Sh(e),n._dirty||xs(n,e)),e},Qm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=gh(e.rawTime(),t),(!t._dur||Go(0,t.totalDuration(),n)-t._tTime>bt)&&t.render(n,!0)),xs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-bt}},tr=function(e,t,n,i){return t.parent&&Qr(t),t._start=Ut((xr(n)?n:n||e!==Ft?vi(e,n,t):e._time)+t._delay),t._end=Ut(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$m(e,t,"_first","_last",e._sort?"_start":0),Lf(t)||(e._recent=t),i||Qm(e,t),e._ts<0&&Mh(e,e._tTime),e},jm=function(e,t){return(si.ScrollTrigger||vh("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},eg=function(e,t,n,i,s){if(Qf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ym!==Zn.frame)return Kr.push(e),e._lazy=[s,i],1},kM=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Lf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zM=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&kM(e)&&!(!e._initted&&Lf(e))||(e._ts<0||e._dp._ts<0)&&!Lf(e))?0:1,o=e._rDelay,l=0,c,h,d;if(o&&e._repeat&&(l=Go(0,e._tDur,t),h=Ta(l,o),e._yoyo&&h&1&&(a=1-a),h!==Ta(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||dn||i||e._zTime===bt||!t&&e._zTime){if(!e._initted&&eg(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?bt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&If(e,t,n,!0),e._onUpdate&&!n&&ri(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ri(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Qr(e,1),!n&&!dn&&(ri(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VM=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ea=function(e,t,n,i){var s=e._repeat,a=Ut(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ut(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Mh(e,e._tTime=e._tDur*o),e.parent&&Sh(e),n||xs(e.parent,e),e},Om=function(e){return e instanceof wn?xs(e):Ea(e,e._dur)},GM={_start:0,endTime:ko,totalDuration:ko},vi=function r(e,t,n){var i=e.labels,s=e._recent||GM,a=e.duration()>=yi?s.endTime(!1):e._dur,o,l,c;return nn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Uo=function(e,t,n){var i=xr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Jn(l.vars.inherit)&&l.parent;a.immediateRender=Jn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Xt(t[0],a,t[s+1])},jr=function(e,t){return e||e===0?t(e):t},Go=function(e,t,n){return n<e?e:n>t?t:n},pn=function(e,t){return!nn(e)||!(t=IM.exec(e))?"":t[1]},HM=function(e,t,n){return jr(n,function(i){return Go(e,t,i)})},Df=[].slice,tg=function(e,t){return e&&nr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&nr(e[0]))&&!e.nodeType&&e!==er},WM=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||tg(i,1)?(s=n).push.apply(s,Si(i)):n.push(i)})||n},Si=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):nn(e)&&!n&&(Rf||!Aa())?Df.call((t||Gf).querySelectorAll(e),0):Tn(e)?WM(e,n):tg(e)?Df.call(e,0):e?[e]:[]},Nf=function(e){return e=Si(e)[0]||Bo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?Bo("Invalid scope")||Gf.createElement("div"):e)}},ng=function(e){return e.sort(function(){return .5-Math.random()})},ig=function(e){if(zt(e))return e;var t=nr(e)?e:{each:e},n=vs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,h=i,d=i;return nn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],d=i[1]),function(u,f,g){var _=(g||t).length,m=a[_],p,w,C,y,S,b,E,v,T;if(!m){if(T=t.grid==="auto"?0:(t.grid||[1,yi])[1],!T){for(E=-yi;E<(E=g[T++].getBoundingClientRect().left)&&T<_;);T<_&&T--}for(m=a[_]=[],p=l?Math.min(T,_)*h-.5:i%T,w=T===yi?0:l?_*d/T-.5:i/T|0,E=0,v=yi,b=0;b<_;b++)C=b%T-p,y=w-(b/T|0),m[b]=S=c?Math.abs(c==="y"?y:C):Gm(C*C+y*y),S>E&&(E=S),S<v&&(v=S);i==="random"&&ng(m),m.max=E-v,m.min=v,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(T>_?_-1:c?c==="y"?_/T:T:Math.max(T,_/T))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=pn(t.amount||t.each)||0,n=n&&_<0?ib(n):n}return _=(m[u]-m.min)/m.max||0,Ut(m.b+(n?n(_):_)*m.v)+m.u}},Uf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ut(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(xr(n)?0:pn(n))}},rg=function(e,t){var n=Tn(e),i,s;return!n&&nr(e)&&(i=n=e.radius||yi,e.values?(e=Si(e.values),(s=!xr(e[0]))&&(i*=i)):e=Uf(e.increment)),jr(t,n?zt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=yi,h=0,d=e.length,u,f;d--;)s?(u=e[d].x-o,f=e[d].y-l,u=u*u+f*f):u=Math.abs(e[d]-o),u<c&&(c=u,h=d);return h=!i||c<=i?e[h]:a,s||h===a||xr(a)?h:h+pn(a)}:Uf(e))},sg=function(e,t,n,i){return jr(Tn(e)?!t:n===!0?!!(n=0):!i,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},XM=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},qM=function(e,t){return function(n){return e(parseFloat(n))+(t||pn(n))}},YM=function(e,t,n){return og(e,t,0,1,n)},ag=function(e,t,n){return jr(n,function(i){return e[~~t(i)]})},ZM=function r(e,t,n){var i=t-e;return Tn(e)?ag(e,r(0,e.length),t):jr(n,function(s){return(i+(s-e)%i)%i+e})},JM=function r(e,t,n){var i=t-e,s=i*2;return Tn(e)?ag(e,r(0,e.length-1),t):jr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ca=function(e){return e.replace(CM,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(RM);return sg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},og=function(e,t,n,i,s){var a=t-e,o=i-n;return jr(s,function(l){return n+((l-e)/a*o||0)})},KM=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=nn(e),o={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(h=[],d=e.length,u=d-2,c=1;c<d;c++)h.push(r(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(u,~~g);return h[_](g-_)},n=t}else i||(e=wa(Tn(e)?[]:{},e));if(!h){for(l in t)Kf.call(o,e,l,"get",t[l]);s=function(g){return td(g,o)||(a?e.p:e)}}}return jr(n,s)},Bm=function(e,t,n){var i=e.labels,s=yi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ri=function(e,t,n){var i=e.vars,s=i[t],a=Lt,o=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Kr.length&&ph(),o&&(Lt=o),h=l?s.apply(c,l):s.call(c),Lt=a,h},Lo=function(e){return Qr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dn),e.progress()<1&&ri(e,"onInterrupt"),e},ba,lg=[],cg=function(e){if(e)if(e=!e.name&&e.default||e,kf()||e.headless){var t=e.name,n=zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ko,render:td,add:Kf,kill:db,modifier:fb,rawVars:0},a={targetTest:0,get:0,getSetter:bh,aliases:{},register:0};if(Aa(),e!==i){if(Yn[t])return;ai(i,ai(mh(e,s),a)),wa(i.prototype,wa(s,mh(e,a))),Yn[i.prop=t]=i,e.targetTest&&(uh.push(i),Hf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}qm(t,i),e.register&&e.register(En,i,On)}else lg.push(e)},Mt=255,Do={aqua:[0,Mt,Mt],lime:[0,Mt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Mt],navy:[0,0,128],white:[Mt,Mt,Mt],olive:[128,128,0],yellow:[Mt,Mt,0],orange:[Mt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Mt,0,0],pink:[Mt,192,203],cyan:[0,Mt,Mt],transparent:[Mt,Mt,Mt,0]},bf=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Mt+.5|0},hg=function(e,t,n){var i=e?xr(e)?[e>>16,e>>8&Mt,e&Mt]:0:Do.black,s,a,o,l,c,h,d,u,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Do[e])i=Do[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Mt,i&Mt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Mt,e&Mt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Dm),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=bf(l+1/3,s,a),i[1]=bf(l,s,a),i[2]=bf(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(zf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Dm)||Do.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Mt,a=i[1]/Mt,o=i[2]/Mt,d=Math.max(s,a,o),u=Math.min(s,a,o),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ug=function(e){var t=[],n=[],i=-1;return e.split(_r).forEach(function(s){var a=s.match(Ss)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},km=function(e,t,n){var i="",s=(e+i).match(_r),a=t?"hsla(":"rgba(",o=0,l,c,h,d;if(!s)return e;if(s=s.map(function(u){return(u=hg(u,t,1))&&a+(t?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=ug(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(_r,"1").split(Ss),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(_r),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},_r=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Do)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),$M=/hsl[a]?\(/,Zf=function(e){var t=e.join(" "),n;if(_r.lastIndex=0,_r.test(t))return n=$M.test(t),e[1]=km(e[1],n),e[0]=km(e[0],n,ug(e[1])),!0},zo,Zn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,d,u,f,g=function _(m){var p=r()-i,w=m===!0,C,y,S,b;if((p>e||p<0)&&(n+=p-t),i+=p,S=i-n,C=S-a,(C>0||w)&&(b=++d.frame,u=S-d.time*1e3,d.time=S=S/1e3,a+=C+(C>=s?4:s-C),y=1),w||(l=c(_)),y)for(f=0;f<o.length;f++)o[f](S,u,b,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Wm&&(!Rf&&kf()&&(er=Rf=window,Gf=er.document||{},si.gsap=En,(er.gsapVersions||(er.gsapVersions=[])).push(En.version),Xm(dh||er.GreenSockGlobals||!er.gsap&&er||{}),lg.forEach(cg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,a-d.time*1e3+1|0)},zo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),zo=0,c=ko},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,w){var C=p?function(y,S,b,E){m(y,S,b,E),d.remove(C)}:m;return d.remove(m),o[w?"unshift":"push"](C),Aa(),C},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),Aa=function(){return!zo&&Zn.wake()},ht={},QM=/^[\d.\-M][\d.\-,\s]/,jM=/["']/g,eb=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(jM,"").trim():+c,i=l.substr(o+1).trim();return t},tb=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},nb=function(e){var t=(e+"").split("("),n=ht[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[eb(t[1])]:tb(e).split(",").map(Jm)):ht._CE&&QM.test(e)?ht._CE("",e):n},ib=function(e){return function(t){return 1-e(1-t)}},vs=function(e,t){return e&&(zt(e)?e:ht[e]||nb(e))||t},bs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Fn(e,function(o){ht[o]=si[o]=s,ht[a=o.toLowerCase()]=n;for(var l in s)ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ht[o+"."+l]=s[l]}),s},fg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},wf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Cf*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*AM((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:fg(o);return s=Cf/s,l.config=function(c,h){return r(e,c,h)},l},Tf=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:fg(n);return i.config=function(s){return r(e,s)},i};Fn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;bs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ht.Linear.easeNone=ht.none=ht.Linear.easeIn;bs("Elastic",wf("in"),wf("out"),wf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};bs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);bs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});bs("Circ",function(r){return-(Gm(1-r*r)-1)});bs("Sine",function(r){return r===1?1:-EM(r*wM)+1});bs("Back",Tf("in"),Tf("out"),Tf());ht.SteppedEase=ht.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-bt;return function(o){return((i*Go(0,a,o)|0)+s)*n}}};Oo.ease=ht["quad.out"];Fn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Wf+=r+","+r+"Params,"});var Jf=function(e,t){this.id=TM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qf,this.set=t?t.getSetter:bh},Vo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ea(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),zo||Zn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ea(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Aa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Mh(this,n),!s._dp||s.parent||Qm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===bt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Fm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Fm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ta(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-bt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?gh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-bt?0:this._rts,this.totalTime(Go(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Sh(this),OM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==bt&&(this._tTime-=bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ut(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Jn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gh(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=DM);var i=dn;return dn=n,Yf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Om(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Om(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(vi(this,n),Jn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Jn(i)),this._dur||(this._zTime=-bt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-bt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-bt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=zt(n)?n:Km,l=function(){var h=i.then;i.then=null,s&&s(),zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Lo(this)},r})();ai(Vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-bt,_prom:0,_ps:!1,_rts:1});var wn=(function(r){Vm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Jn(n.sortChildren),Ft&&tr(n.parent||Ft,gr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&jm(gr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Uo(0,arguments,this),this},t.from=function(i,s,a){return Uo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Uo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,No(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xt(i,s,vi(this,a),1),this},t.call=function(i,s,a){return tr(this,Xt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Xt(i,a,vi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,No(a).immediateRender=Jn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},t.staggerFromTo=function(i,s,a,o,l,c,h,d){return o.startAt=a,No(o).immediateRender=Jn(o.immediateRender),this.staggerTo(i,s,o,l,c,h,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ut(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,g,_,m,p,w,C,y,S,b,E;if(this!==Ft&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),u=h,y=this._start,C=this._ts,p=!C,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(u=Ut(h%m),h===l?(_=this._repeat,u=c):(S=Ut(h/m),_=~~S,_&&_===S&&(u=c,_--),u>c&&(u=c)),S=Ta(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),b&&_&1&&(u=c-u,E=1),_!==S&&!this._lock){var v=b&&S&1,T=v===(b&&_&1);if(_<S&&(v=!v),o=v?0:h%c?c:h,this._lock=1,this.render(o||(E?0:Ut(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,S=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=VM(this,Ut(o),Ut(u)),w&&(h-=u-(u=w._start))),this._tTime=h,this._time=u,this._act=!!C,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!S&&(ri(this,"onStart"),this._tTime!==h))return this;if(u>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||u>=f._start)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,a),u!==this._time||!this._ts&&!p){w=0,g&&(h+=this._zTime=-bt);break}}f=g}else{f=this._last;for(var A=i<0?i:u;f;){if(g=f._prev,(f._act||A<=f._end)&&f._ts&&w!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(A-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(A-f._start)*f._ts,s,a||dn&&Yf(f)),u!==this._time||!this._ts&&!p){w=0,g&&(h+=this._zTime=A?-bt:bt);break}}f=g}}if(w&&!s&&(this.pause(),w.render(u>=o?0:-bt)._zTime=u>=o?1:-1,this._ts))return this._start=y,Sh(this),this.render(i,s,a);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(y===this._start||Math.abs(C)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Qr(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(ri(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(xr(s)||(s=vi(this,s,i)),!(i instanceof Vo)){if(Tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(zt(i))i=Xt.delayedCall(0,i);else return this}return this!==i?tr(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-yi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Xt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return nn(i)?this.removeLabel(i):zt(i)?this.killTweensOf(i):(i.parent===this&&yh(this,i),i===this._recent&&(this._recent=this._last),xs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ut(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=vi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Xt.delayedCall(0,s||ko,a);return o.data="isPause",this._hasPause=1,tr(this,o,vi(this,i))},t.removePause=function(i){var s=this._first;for(i=vi(this,i);s;)s._start===i&&s.data==="isPause"&&Qr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Jr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Si(i),l=this._first,c=xr(s),h;l;)l instanceof Xt?NM(l._targets,o)&&(c?(!Jr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=vi(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,g=Xt.to(a,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||bt,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Ea(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,d||[])}},s));return u?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ai({startAt:{time:vi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Bm(this,vi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Bm(this,vi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+bt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ut(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return xs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),xs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=yi,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,tr(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ut(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ea(a,a===Ft&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Ft._ts&&(Zm(Ft,gh(i,Ft)),Ym=Zn.frame),Zn.frame>=Nm){Nm+=Kn.autoSleep||120;var s=Ft._first;if((!s||!s._ts)&&Kn.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},e})(Vo);ai(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var rb=function(e,t,n,i,s,a,o){var l=new On(this._pt,e,t,0,1,ed,null,s),c=0,h=0,d,u,f,g,_,m,p,w;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ca(i)),a&&(w=[n,i],a(w,e,t),n=w[0],i=w[1]),u=n.match(Sf)||[];d=Sf.exec(i);)g=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Ms(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Sf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Vf.test(i)||p)&&(l.e=0),this._pt=l,l},Kf=function(e,t,n,i,s,a,o,l,c,h){zt(i)&&(i=i(s||0,e,a));var d=e[t],u=n!=="get"?n:zt(d)?c?e[t.indexOf("set")||!zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=zt(d)?c?cb:mg:jf,g;if(nn(i)&&(~i.indexOf("random(")&&(i=Ca(i)),i.charAt(1)==="="&&(g=Ms(u,i)+(pn(u)||0),(g||g===0)&&(i=g))),!h||u!==i||Ff)return!isNaN(u*i)&&i!==""?(g=new On(this._pt,e,t,+u||0,i-(u||0),typeof d=="boolean"?ub:gg,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&vh(t,i),rb.call(this,e,t,u,i,f,l||Kn.stringFilter,c))},sb=function(e,t,n,i,s){if(zt(e)&&(e=Fo(e,s,t,n,i)),!nr(e)||e.style&&e.nodeType||Tn(e)||Hm(e))return nn(e)?Fo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Fo(e[o],s,t,n,i);return a},$f=function(e,t,n,i,s,a){var o,l,c,h;if(Yn[e]&&(o=new Yn[e]).init(s,o.rawVars?t[e]:sb(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new On(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ba))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Jr,Ff,Qf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,w=p&&p.data==="nested"?p.vars.targets:m,C=e._overwrite==="auto"&&!Bf,y=e.timeline,S=i.easeReverse||d,b,E,v,T,A,D,I,O,L,B,q,z,K;if(y&&(!u||!s)&&(s="none"),e._ease=vs(s,Oo.ease),e._rEase=S&&(vs(S)||e._ease),e._from=!y&&!!i.runBackwards,e._from&&(e.ratio=1),!y||u&&!i.stagger){if(O=m[0]?$r(m[0]).harness:0,z=O&&i[O.prop],b=mh(i,Hf),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?hh:LM),_._lazy=0),a){if(Qr(e._startAt=Xt.set(m,ai({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Jn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn||!o&&!f)&&e._startAt.revert(hh),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),v=ai({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Jn(l),immediateRender:o,stagger:0,parent:p},b),z&&(v[O.prop]=z),Qr(e._startAt=Xt.set(m,v)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn?e._startAt.revert(hh):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,bt,bt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Jn(l)||l&&!g,E=0;E<m.length;E++){if(A=m[E],I=A._gsap||Xf(m)[E]._gsap,e._ptLookup[E]=B={},Pf[I.id]&&Kr.length&&ph(),q=w===m?E:w.indexOf(A),O&&(L=new O).init(A,z||b,e,q,w)!==!1&&(e._pt=T=new On(e._pt,A,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(H){B[H]=T}),L.priority&&(D=1)),!O||z)for(v in b)Yn[v]&&(L=$f(v,b,e,q,A,w))?L.priority&&(D=1):B[v]=T=Kf.call(e,A,v,"get",b[v],q,w,0,i.stringFilter);e._op&&e._op[E]&&e.kill(A,e._op[E]),C&&e._pt&&(Jr=e,Ft.killTweensOf(A,B,e.globalTime(t)),K=!e.parent,Jr=0),e._pt&&l&&(Pf[I.id]=1)}D&&nd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,u&&t<=0&&y.render(yi,!0,!0)},ab=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,u,f;if(!c)for(c=e._ptCache[t]=[],u=e._ptLookup,f=e._targets.length;f--;){if(h=u[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ff=1,e.vars[t]="+=0",Qf(e,o),Ff=0,l?Bo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=Vt(n)+pn(d.e)),d.b&&(d.b=h.s+pn(d.b))},ob=function(e,t){var n=e[0]?$r(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=wa({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},lb=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Fo=function(e,t,n,i,s){return zt(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?Ca(e):e},dg=Wf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pg={};Fn(dg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return pg[r]=1});var Xt=(function(r){Vm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:No(i))||this;var l=o.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Ft,w=(Tn(n)||Hm(n)?xr(n[0]):"length"in i)?[n]:Si(n),C,y,S,b,E,v,T,A;if(o._targets=w.length?Xf(w):Bo("GSAP target "+n+" not found. https://gsap.com",!Kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||u||ch(c)||ch(h)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(C=o.timeline=new wn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:w}),C.kill(),C.parent=C._dp=gr(o),C._start=0,u||ch(c)||ch(h)){if(b=w.length,T=u&&ig(u),nr(u))for(E in u)~dg.indexOf(E)&&(A||(A={}),A[E]=u[E]);for(y=0;y<b;y++)S=mh(i,pg),S.stagger=0,D&&(S.easeReverse=D),A&&wa(S,A),v=w[y],S.duration=+Fo(c,gr(o),y,v,w),S.delay=(+Fo(h,gr(o),y,v,w)||0)-o._delay,!u&&b===1&&S.delay&&(o._delay=h=S.delay,o._start+=h,S.delay=0),C.to(v,S,T?T(y,v,w):0),C._ease=ht.none;C.duration()?c=h=0:o.timeline=0}else if(g){No(ai(C.vars.defaults,{ease:"none"})),C._ease=vs(g.ease||i.ease||"none");var I=0,O,L,B;if(Tn(g))g.forEach(function(q){return C.to(w,q,">")}),C.duration();else{S={};for(E in g)E==="ease"||E==="easeEach"||lb(E,g[E],S,g.easeEach);for(E in S)for(O=S[E].sort(function(q,z){return q.t-z.t}),I=0,y=0;y<O.length;y++)L=O[y],B={ease:L.e,duration:(L.t-(y?O[y-1].t:0))/100*c},B[E]=L.v,C.to(w,B,I),I+=B.duration;C.duration()<c&&C.to({},{duration:c-C.duration()})}}c||o.duration(c=C.duration())}else o.timeline=0;return f===!0&&!Bf&&(Jr=gr(o),Ft.killTweensOf(w),Jr=0),tr(p,gr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!g&&o._start===Ut(p._time)&&Jn(d)&&BM(gr(o))&&p.data!=="nested")&&(o._tTime=-bt,o.render(Math.max(0,-h)||0)),m&&jm(gr(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-bt&&!h?l:i<bt?0:i,u,f,g,_,m,p,w,C;if(!c)zM(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,C=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(u=Ut(d%_),d===l?(g=this._repeat,u=c):(m=Ut(d/_),g=~~m,g&&g===m?(u=c,g--):u>c&&(u=c)),p=this._yoyo&&g&1,p&&(u=c-u),m=Ta(this._tTime,_),u===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&u!==_&&this._initted&&(this._lock=a=1,this.render(Ut(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(eg(this,h?i:u,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=u<o;if(y!==this._inv){var S=y?o:c-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=S?(y?-1:1)/S:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=w=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=w=this._ease(u/c);if(this._from&&(this.ratio=w=1-w),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(ri(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(w,f.d),f=f._next;C&&C.render(i<0?i:C._dur*C._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&If(this,i,s,a),ri(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&If(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Qr(this,1),!s&&!(h&&!o)&&(d||o||p)&&(ri(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){zo||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Qf(this,c),h=this._ease(c/this._dur),ab(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(Mh(this,0),this.parent||$m(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Lo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Jr&&Jr.vars.overwrite!==!0)._first||Lo(this),this.parent&&a!==this.timeline.totalDuration()&&Ea(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Si(i):o,c=this._ptLookup,h=this._pt,d,u,f,g,_,m,p;if((!s||s==="all")&&FM(o,l))return s==="all"&&(this._pt=0),Lo(this);for(d=this._op=this._op||[],s!=="all"&&(nn(s)&&(_={},Fn(s,function(w){return _[w]=1}),s=_),s=ob(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){u=c[p],s==="all"?(d[p]=s,g=u,f={}):(f=d[p]=d[p]||{},g=s);for(_ in g)m=u&&u[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&yh(this,m,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Lo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Uo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Uo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Ft.killTweensOf(i,s,a)},e})(Vo);ai(Xt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Fn("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var e=new wn,t=Df.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var jf=function(e,t,n){return e[t]=n},mg=function(e,t,n){return e[t](n)},cb=function(e,t,n,i){return e[t](i.fp,n)},hb=function(e,t,n){return e.setAttribute(t,n)},bh=function(e,t){return zt(e[t])?mg:xh(e[t])&&e.setAttribute?hb:jf},gg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ub=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ed=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},td=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},fb=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},db=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?yh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},pb=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},nd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},On=(function(){function r(t,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||gg,this.d=l||this,this.set=c||jf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=pb,this.m=n,this.mt=s,this.tween=i},r})();Fn(Wf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Hf[r]=1});si.TweenMax=si.TweenLite=Xt;si.TimelineLite=si.TimelineMax=wn;Ft=new wn({sortChildren:!1,defaults:Oo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Kn.stringFilter=Zf;var ys=[],fh={},mb=[],zm=0,gb=0,Ef=function(e){return(fh[e]||mb).map(function(t){return t()})},Of=function(){var e=Date.now(),t=[];e-zm>2&&(Ef("matchMediaInit"),ys.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=er.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ef("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zm=e,Ef("matchMedia"))},_g=(function(){function r(t,n){this.selector=n&&Nf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=gb++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){zt(n)&&(s=i,i=n,n=zt);var a=this,o=function(){var c=Lt,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Nf(s)),Lt=a,d=i.apply(a,arguments),zt(d)&&a._r.push(d),Lt=c,a.selector=h,a.isReverted=!1,d};return a.last=o,n===zt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Xt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof wn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xt)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ys.length;a--;)ys[a].id===this.id&&ys.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),_b=(function(){function r(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){nr(n)||(n={matches:n});var a=new _g(0,s||this.scope),o=a.conditions={},l,c,h;Lt&&!a.selector&&(a.selector=Lt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=er.matchMedia(n[c]),l&&(ys.indexOf(a)<0&&ys.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Of):l.addEventListener("change",Of)));return h&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),_h={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return cg(i)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=Si(e)[0]);var s=$r(e||{}).get,a=n?Km:Jm;return n==="native"&&(n=""),e&&(t?a((Yn[t]&&Yn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Yn[o]&&Yn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var i=e.map(function(h){return En.quickSetter(h,t,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}e=e[0]||{};var a=Yn[t],o=$r(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var d=new a;ba._pt=0,d.init(e,n?h+n:h,ba,0,[e]),d.render(1,d),ba._pt&&td(1,ba)}:o.set(e,l);return a?c:function(h){return c(e,l,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=En.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(t,l,c,h)};return a.tween=s,a},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vs(e.ease,Oo.ease)),Um(Oo,e||{})},config:function(e){return Um(Kn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Yn[o]&&!si[o]&&Bo(t+" effect requires "+o+" plugin.")}),Mf[t]=function(o,l,c){return n(Si(o),ai(l||{},s),c)},a&&(wn.prototype[t]=function(o,l,c){return this.add(Mf[t](o,nr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ht[e]=vs(t)},parseEase:function(e,t){return arguments.length?vs(e,t):ht},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),i,s;for(n.smoothChildTiming=Jn(e.smoothChildTiming),Ft.remove(n),n._dp=0,n._time=n._tTime=Ft._time,i=Ft._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Xt&&i.vars.onComplete===i._targets[0]))&&tr(n,i,i._start-i._delay),i=s;return tr(Ft,n,0),n},context:function(e,t){return e?new _g(e,t):Lt},matchMedia:function(e){return new _b(e)},matchMediaRefresh:function(){return ys.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Of()},addEventListener:function(e,t){var n=fh[e]||(fh[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=fh[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ZM,wrapYoyo:JM,distribute:ig,random:sg,snap:rg,normalize:YM,getUnit:pn,clamp:HM,splitColor:hg,toArray:Si,selector:Nf,mapRange:og,pipe:XM,unitize:qM,interpolate:KM,shuffle:ng},install:Xm,effects:Mf,ticker:Zn,updateRoot:wn.updateRoot,plugins:Yn,globalTimeline:Ft,core:{PropTween:On,globals:qm,Tween:Xt,Timeline:wn,Animation:Vo,getCache:$r,_removeLinkedListItem:yh,reverting:function(){return dn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Bf=e}}};Fn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _h[r]=Xt[r]});Zn.add(wn.updateRoot);ba=_h.to({},{duration:0});var xb=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},vb=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=xb(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Af=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(nn(s)&&(l={},Fn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}vb(o,s)}}}},En=_h.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Af("roundProps",Uf),Af("modifiers"),Af("snap",rg))||_h;Xt.version=wn.version=En.version="3.15.0";Wm=1;kf()&&Aa();var yb=ht.Power0,Sb=ht.Power1,Mb=ht.Power2,bb=ht.Power3,wb=ht.Power4,Tb=ht.Linear,Eb=ht.Quad,Ab=ht.Cubic,Cb=ht.Quart,Rb=ht.Quint,Pb=ht.Strong,Ib=ht.Elastic,Lb=ht.Back,Db=ht.SteppedEase,Nb=ht.Bounce,Ub=ht.Sine,Fb=ht.Expo,Ob=ht.Circ;var xg,es,Pa,ld,As,Bb,vg,cd,kb=function(){return typeof window<"u"},yr={},Es=180/Math.PI,Ia=Math.PI/180,Ra=Math.atan2,yg=1e8,hd=/([A-Z])/g,zb=/(left|right|width|margin|padding|x)/i,Vb=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Gb=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Hb=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Wb=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xb=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Cg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Rg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},qb=function(e,t,n){return e.style[t]=n},Yb=function(e,t,n){return e.style.setProperty(t,n)},Zb=function(e,t,n){return e._gsap[t]=n},Jb=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Kb=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},$b=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Ot="transform",$n=Ot+"Origin",Qb=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in yr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=vr(i,o)}):this.tfm[e]=a.x?a[e]:vr(i,e),e===$n&&(this.tfm.zOrigin=a.zOrigin);else return ir.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Ot)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push($n,t,"")),e=Ot}(s||t)&&this.props.push(e,t,s[e])},Pg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jb=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(hd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=cd(),(!s||!s.isStart)&&!n[Ot]&&(Pg(n),i.zOrigin&&n[$n]&&(n[$n]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ig=function(e,t){var n={target:e,props:[],revert:jb,save:Qb};return e._gsap||En.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Lg,sd=function(e,t){var n=es.createElementNS?es.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):es.createElement(e);return n&&n.style?n:es.createElement(e)},oi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(hd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,La(t)||t,1)||""},Sg="O,Moz,ms,Ms,Webkit".split(","),La=function(e,t,n){var i=t||As,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Sg[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Sg[a]:"")+e},ad=function(){kb()&&window.document&&(xg=window,es=xg.document,Pa=es.documentElement,As=sd("div")||{style:{}},Bb=sd("div"),Ot=La(Ot),$n=Ot+"Origin",As.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lg=!!La("perspective"),cd=En.core.reverting,ld=1)},Mg=function(e){var t=e.ownerSVGElement,n=sd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Pa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Pa.removeChild(n),s},bg=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dg=function(e){var t,n;try{t=e.getBBox()}catch{t=Mg(e),n=1}return t&&(t.width||t.height)||n||(t=Mg(e)),t&&!t.width&&!t.x&&!t.y?{x:+bg(e,["x","cx","x1"])||0,y:+bg(e,["y","cy","y1"])||0,width:0,height:0}:t},Ng=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dg(e))},ns=function(e,t){if(t){var n=e.style,i;t in yr&&t!==$n&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(hd,"-$1").toLowerCase())):n.removeAttribute(t)}},ts=function(e,t,n,i,s,a){var o=new On(e._pt,t,n,0,1,a?Rg:Cg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},wg={deg:1,rad:1,turn:1},ew={grid:1,flex:1},is=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=As.style,l=zb.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",g,_,m,p;if(i===a||!s||wg[i]||wg[a])return s;if(a!=="px"&&!u&&(s=r(e,t,n,"px")),p=e.getCTM&&Ng(e),(f||a==="%")&&(yr[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[h],Vt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(u?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===es||!_.appendChild)&&(_=es.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Zn.time&&!m.uncache)return Vt(s/m.width*d);if(f&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=d+i,g=e[h],w?e.style[t]=w:ns(e,t)}else(f||a==="%")&&!ew[oi(_,"display")]&&(o.position=oi(e,"position")),_===e&&(o.position="static"),_.appendChild(As),g=As[h],_.removeChild(As),o.position="absolute";return l&&f&&(m=$r(_),m.time=Zn.time,m.width=_[h]),Vt(u?g*s/d:g&&s?d/g*s:0)},vr=function(e,t,n,i){var s;return ld||ad(),t in ir&&t!=="transform"&&(t=ir[t],~t.indexOf(",")&&(t=t.split(",")[0])),yr[t]&&t!=="transform"?(s=Xo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Th(oi(e,$n))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=wh[t]&&wh[t](e,t,n)||oi(e,t)||qf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?is(e,t,s,n)+n:s},tw=function(e,t,n,i){if(!n||n==="none"){var s=La(t,e,1),a=s&&oi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var o=new On(this._pt,e.style,t,0,1,ed),l=0,c=0,h,d,u,f,g,_,m,p,w,C,y,S;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=oi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=oi(e,t)||i,_?e.style[t]=_:ns(e,t)),h=[n,i],Zf(h),n=h[0],i=h[1],u=n.match(Ss)||[],S=i.match(Ss)||[],S.length){for(;d=Ss.exec(i);)m=d[0],w=i.substring(l,d.index),g?g=(g+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(g=1),m!==(_=u[c++]||"")&&(f=parseFloat(_)||0,y=_.substr((f+"").length),m.charAt(1)==="="&&(m=Ms(f,m)+y),p=parseFloat(m),C=m.substr((p+"").length),l=Ss.lastIndex-C.length,C||(C=C||Kn.units[t]||y,l===i.length&&(i+=C,o.e+=C)),y!==C&&(f=is(e,t,_,C)||0),o._pt={_next:o._pt,p:w||c===1?w:",",s:f,c:p-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Rg:Cg;return Vf.test(i)&&(o.e=0),this._pt=o,o},Tg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},nw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Tg[n]||n,t[1]=Tg[i]||i,t.join(" ")},iw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],yr[o]&&(l=1,o=o==="transformOrigin"?$n:Ot),ns(n,o);l&&(ns(n,Ot),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Xo(n,1),a.uncache=1,Pg(i)))}},wh={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new On(e._pt,t,n,0,0,iw);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Wo=[1,0,0,1,0,0],Ug={},Fg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Eg=function(e){var t=oi(e,Ot);return Fg(t)?Wo:t.substr(7).match(zf).map(Vt)},ud=function(e,t){var n=e._gsap||$r(e),i=e.style,s=Eg(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Wo:s):(s===Wo&&!e.offsetParent&&e!==Pa&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Pa.appendChild(e)),s=Eg(e),l?i.display=l:ns(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Pa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},od=function(e,t,n,i,s,a){var o=e._gsap,l=s||ud(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,d=o.xOffset||0,u=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],w=l[5],C=t.split(" "),y=parseFloat(C[0])||0,S=parseFloat(C[1])||0,b,E,v,T;n?l!==Wo&&(E=f*m-g*_)&&(v=y*(m/E)+S*(-_/E)+(_*w-m*p)/E,T=y*(-g/E)+S*(f/E)-(f*w-g*p)/E,y=v,S=T):(b=Dg(e),y=b.x+(~C[0].indexOf("%")?y/100*b.width:y),S=b.y+(~(C[1]||C[0]).indexOf("%")?S/100*b.height:S)),i||i!==!1&&o.smooth?(p=y-c,w=S-h,o.xOffset=d+(p*f+w*_)-p,o.yOffset=u+(p*g+w*m)-w):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[$n]="0px 0px",a&&(ts(a,o,"xOrigin",c,y),ts(a,o,"yOrigin",h,S),ts(a,o,"xOffset",d,o.xOffset),ts(a,o,"yOffset",u,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Xo=function(e,t){var n=e._gsap||new Jf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=oi(e,$n)||"0",h,d,u,f,g,_,m,p,w,C,y,S,b,E,v,T,A,D,I,O,L,B,q,z,K,H,R,Q,Se,Me,Ve,ke;return h=d=u=_=m=p=w=C=y=0,f=g=1,n.svg=!!(e.getCTM&&Ng(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),E=ud(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),od(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,E)),S=n.xOrigin||0,b=n.yOrigin||0,E!==Wo&&(D=E[0],I=E[1],O=E[2],L=E[3],h=B=E[4],d=q=E[5],E.length===6?(f=Math.sqrt(D*D+I*I),g=Math.sqrt(L*L+O*O),_=D||I?Ra(I,D)*Es:0,w=O||L?Ra(O,L)*Es+_:0,w&&(g*=Math.abs(Math.cos(w*Ia))),n.svg&&(h-=S-(S*D+b*O),d-=b-(S*I+b*L))):(ke=E[6],Me=E[7],R=E[8],Q=E[9],Se=E[10],Ve=E[11],h=E[12],d=E[13],u=E[14],v=Ra(ke,Se),m=v*Es,v&&(T=Math.cos(-v),A=Math.sin(-v),z=B*T+R*A,K=q*T+Q*A,H=ke*T+Se*A,R=B*-A+R*T,Q=q*-A+Q*T,Se=ke*-A+Se*T,Ve=Me*-A+Ve*T,B=z,q=K,ke=H),v=Ra(-O,Se),p=v*Es,v&&(T=Math.cos(-v),A=Math.sin(-v),z=D*T-R*A,K=I*T-Q*A,H=O*T-Se*A,Ve=L*A+Ve*T,D=z,I=K,O=H),v=Ra(I,D),_=v*Es,v&&(T=Math.cos(v),A=Math.sin(v),z=D*T+I*A,K=B*T+q*A,I=I*T-D*A,q=q*T-B*A,D=z,B=K),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Vt(Math.sqrt(D*D+I*I+O*O)),g=Vt(Math.sqrt(q*q+ke*ke)),v=Ra(B,q),w=Math.abs(v)>2e-4?v*Es:0,y=Ve?1/(Ve<0?-Ve:Ve):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Fg(oi(e,Ot)),z&&e.setAttribute("transform",z))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(f*=-1,w+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=u+a,n.scaleX=Vt(f),n.scaleY=Vt(g),n.rotation=Vt(_)+o,n.rotationX=Vt(m)+o,n.rotationY=Vt(p)+o,n.skewX=w+o,n.skewY=C+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[$n]=Th(c)),n.xOffset=n.yOffset=0,n.force3D=Kn.force3D,n.renderTransform=n.svg?sw:Lg?Og:rw,n.uncache=0,n},Th=function(e){return(e=e.split(" "))[0]+" "+e[1]},id=function(e,t,n){var i=pn(t);return Vt(parseFloat(t)+parseFloat(is(e,"x",n+"px",i)))+i},rw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Og(e,t)},ws="0deg",Ho="0px",Ts=") ",Og=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,w=n.target,C=n.zOrigin,y="",S=p==="auto"&&e&&e!==1||p===!0;if(C&&(d!==ws||h!==ws)){var b=parseFloat(h)*Ia,E=Math.sin(b),v=Math.cos(b),T;b=parseFloat(d)*Ia,T=Math.cos(b),a=id(w,a,E*T*-C),o=id(w,o,-Math.sin(b)*-C),l=id(w,l,v*T*-C+C)}m!==Ho&&(y+="perspective("+m+Ts),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||a!==Ho||o!==Ho||l!==Ho)&&(y+=l!==Ho||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ts),c!==ws&&(y+="rotate("+c+Ts),h!==ws&&(y+="rotateY("+h+Ts),d!==ws&&(y+="rotateX("+d+Ts),(u!==ws||f!==ws)&&(y+="skew("+u+", "+f+Ts),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Ts),w.style[Ot]=y||"translate(0, 0)"},sw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,w=n.forceCSS,C=parseFloat(a),y=parseFloat(o),S,b,E,v,T;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ia,c*=Ia,S=Math.cos(l)*d,b=Math.sin(l)*d,E=Math.sin(l-c)*-u,v=Math.cos(l-c)*u,c&&(h*=Ia,T=Math.tan(c-h),T=Math.sqrt(1+T*T),E*=T,v*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),S*=T,b*=T)),S=Vt(S),b=Vt(b),E=Vt(E),v=Vt(v)):(S=d,v=u,b=E=0),(C&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(C=is(f,"x",a,"px"),y=is(f,"y",o,"px")),(g||_||m||p)&&(C=Vt(C+g-(g*S+_*E)+m),y=Vt(y+_-(g*b+_*v)+p)),(i||s)&&(T=f.getBBox(),C=Vt(C+i/100*T.width),y=Vt(y+s/100*T.height)),T="matrix("+S+","+b+","+E+","+v+","+C+","+y+")",f.setAttribute("transform",T),w&&(f.style[Ot]=T)},aw=function(e,t,n,i,s){var a=360,o=nn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Es:1),c=l-i,h=i+c+"deg",d,u;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*yg)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*yg)%a-~~(c/a)*a)),e._pt=u=new On(e._pt,t,n,i,c,Gb),u.e=h,u.u="deg",e._props.push(n),u},Ag=function(e,t){for(var n in t)e[n]=t[n];return e},ow=function(e,t,n){var i=Ag({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,d,u,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ot]=t,o=Xo(n,1),ns(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],a[Ot]=t,o=Xo(n,1),a[Ot]=c);for(l in yr)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=pn(c),g=pn(h),d=f!==g?is(n,l,c,g):parseFloat(c),u=parseFloat(h),e._pt=new On(e._pt,o,l,d,u-d,rd),e._pt.u=g||0,e._props.push(l));Ag(o,i)};Fn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});wh[e>1?"border"+r:r]=function(o,l,c,h,d){var u,f;if(arguments.length<4)return u=a.map(function(g){return vr(o,g,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=u[_]=u[_]||u[(_-1)/2|0]}),o.init(l,f,d)}});var fd={name:"css",register:ad,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,h,d,u,f,g,_,m,p,w,C,y,S,b,E,v,T;ld||ad(),this.styles=this.styles||Ig(e),v=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(Yn[_]&&$f(_,t,n,i,e,s)))){if(f=typeof h,g=wh[_],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ca(h)),g)g(this,e,_,h,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",_r.lastIndex=0,_r.test(c)||(m=pn(c),p=pn(h),p?m!==p&&(c=is(e,_,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],nn(c)&&~c.indexOf("random(")&&(c=Ca(c)),pn(c+"")||c==="auto"||(c+=Kn.units[_]||pn(vr(e,_))||""),(c+"").charAt(1)==="="&&(c=vr(e,_))):c=vr(e,_),u=parseFloat(c),w=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),d=parseFloat(h),_ in ir&&(_==="autoAlpha"&&(u===1&&vr(e,"visibility")==="hidden"&&d&&(u=0),v.push("visibility",0,o.visibility),ts(this,o,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ir[_],~_.indexOf(",")&&(_=_.split(",")[0]))),C=_ in yr,C){if(this.styles.save(_),T=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=oi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=h,h=oi(e,"perspective"),A?e.style.perspective=A:ns(e,"perspective")}d=parseFloat(h)}if(y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Xo(e,t.parseTransform),b=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new On(this._pt,o,Ot,0,1,S.renderTransform,S,0,-1),y.dep=1),_==="scale")this._pt=new On(this._pt,S,"scaleY",S.scaleY,(w?Ms(S.scaleY,w+d):d)-S.scaleY||0,rd),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push($n,0,o[$n]),h=nw(h),S.svg?od(e,h,0,b,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==S.zOrigin&&ts(this,S,"zOrigin",S.zOrigin,p),ts(this,o,_,Th(c),Th(h)));continue}else if(_==="svgOrigin"){od(e,h,1,b,0,this);continue}else if(_ in Ug){aw(this,S,_,u,w?Ms(u,w+h):h);continue}else if(_==="smoothOrigin"){ts(this,S,"smooth",S.smooth,h);continue}else if(_==="force3D"){S[_]=h;continue}else if(_==="transform"){ow(this,h,e);continue}}else _ in o||(_=La(_)||_);if(C||(d||d===0)&&(u||u===0)&&!Vb.test(h)&&_ in o)m=(c+"").substr((u+"").length),d||(d=0),p=pn(h)||(_ in Kn.units?Kn.units[_]:m),m!==p&&(u=is(e,_,c,p)),this._pt=new On(this._pt,C?S:o,_,u,(w?Ms(u,w+d):d)-u,!C&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Xb:rd),this._pt.u=p||0,C&&T!==h?(this._pt.b=c,this._pt.e=T,this._pt.r=Wb):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Hb);else if(_ in o)tw.call(this,e,_,c,w?w+h:h);else if(_ in e)this.add(e,_,c||e[_],w?w+h:h,i,s);else if(_!=="parseTransform"){vh(_,h);continue}C||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}E&&nd(this)},render:function(e,t){if(t.tween._time||!cd())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vr,aliases:ir,getSetter:function(e,t,n){var i=ir[t];return i&&i.indexOf(",")<0&&(t=i),t in yr&&t!==$n&&(e._gsap.x||vr(e,"x"))?n&&vg===n?t==="scale"?Jb:Zb:(vg=n||{})&&(t==="scale"?Kb:$b):e.style&&!xh(e.style[t])?qb:~t.indexOf("-")?Yb:bh(e,t)},core:{_removeProperty:ns,_getMatrix:ud}};En.utils.checkPrefix=La;En.core.getStyleSaver=Ig;(function(r,e,t,n){var i=Fn(r+","+e+","+t,function(s){yr[s]=1});Fn(e,function(s){Kn.units[s]="deg",Ug[s]=1}),ir[i[13]]=r+","+e,Fn(n,function(s){var a=s.split(":");ir[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Fn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Kn.units[r]="px"});En.registerPlugin(fd);var Mi=En.registerPlugin(fd)||En,AA=Mi.core.Tween;function Bg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function lw(r,e,t){return e&&Bg(r.prototype,e),t&&Bg(r,t),r}var mn,Ch,cw,li,rs,ss,Na,zg,Cs,Ua,Vg,Sr,Bi,Gg,Hg=function(){return mn||typeof window<"u"&&(mn=window.gsap)&&mn.registerPlugin&&mn},Wg=1,Da=[],je=[],ki=[],Yo=Date.now,dd=function(e,t){return t},hw=function(){var e=Ua.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,je),i.push.apply(i,ki),je=n,ki=i,dd=function(a,o){return t[a](o)}},br=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},Zo=function(e){return!!~Vg.indexOf(e)},kn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Eh="scrollLeft",Ah="scrollTop",pd=function(){return Sr&&Sr.isPressed||je.cache++},Rh=function(e,t){var n=function i(s){if(s||s===0){Wg&&(li.history.scrollRestoration="manual");var a=Sr&&Sr.isPressed;s=i.v=Math.round(s)||(Sr&&Sr.iOS?1:0),e(s),i.cacheID=je.cache,a&&dd("ss",s)}else(t||je.cache!==i.cacheID||dd("ref"))&&(i.cacheID=je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},An={s:Eh,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Rh(function(r){return arguments.length?li.scrollTo(r,Kt.sc()):li.pageXOffset||rs[Eh]||ss[Eh]||Na[Eh]||0})},Kt={s:Ah,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:An,sc:Rh(function(r){return arguments.length?li.scrollTo(An.sc(),r):li.pageYOffset||rs[Ah]||ss[Ah]||Na[Ah]||0})},zn=function(e,t){return(t&&t._ctx&&t._ctx.selector||mn.utils.toArray)(e)[0]||(typeof e=="string"&&mn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},uw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Mr=function(e,t){var n=t.s,i=t.sc;Zo(e)&&(e=rs.scrollingElement||ss);var s=je.indexOf(e),a=i===Kt.sc?1:2;!~s&&(s=je.push(e)-1),je[s+a]||kn(e,"scroll",pd);var o=je[s+a],l=o||(je[s+a]=Rh(br(e,n),!0)||(Zo(e)?i:Rh(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=mn.getProperty(e,"scrollBehavior")==="smooth"),l},Ph=function(e,t,n){var i=e,s=e,a=Yo(),o=a,l=t||50,c=Math.max(500,l*3),h=function(g,_){var m=Yo();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},u=function(g){var _=o,m=s,p=Yo();return(g||g===0)&&g!==i&&h(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:h,reset:d,getVelocity:u}},qo=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},kg=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Xg=function(){Ua=mn.core.globals().ScrollTrigger,Ua&&Ua.core&&hw()},qg=function(e){return mn=e||Hg(),!Ch&&mn&&typeof document<"u"&&document.body&&(li=window,rs=document,ss=rs.documentElement,Na=rs.body,Vg=[li,rs,ss,Na],cw=mn.utils.clamp,Gg=mn.core.context||function(){},Cs="onpointerenter"in Na?"pointer":"mouse",zg=Gt.isTouch=li.matchMedia&&li.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in li||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bi=Gt.eventTypes=("ontouchstart"in ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Wg=0},500),Ch=1),Ua||Xg(),Ch};An.op=Kt;je.cache=0;var Gt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Ch||qg(mn)||console.warn("Please gsap.registerPlugin(Observer)"),Ua||Xg();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,w=n.onDrag,C=n.onPress,y=n.onRelease,S=n.onRight,b=n.onLeft,E=n.onUp,v=n.onDown,T=n.onChangeX,A=n.onChangeY,D=n.onChange,I=n.onToggleX,O=n.onToggleY,L=n.onHover,B=n.onHoverEnd,q=n.onMove,z=n.ignoreCheck,K=n.isNormalizer,H=n.onGestureStart,R=n.onGestureEnd,Q=n.onWheel,Se=n.onEnable,Me=n.onDisable,Ve=n.onClick,ke=n.scrollSpeed,He=n.capture,Z=n.allowClicks,ee=n.lockAxis,_e=n.onLockAxis;this.target=o=zn(o)||ss,this.vars=n,f&&(f=mn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,ke=ke||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(li.getComputedStyle(Na).lineHeight)||22);var Oe,me,Ue,Be,Pe,Xe,$e,V=this,tt=0,xt=0,Dt=n.passive||!h&&n.passive!==!1,qe=Mr(o,An),ft=Mr(o,Kt),F=qe(),It=ft(),We=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Bi[0]==="pointerdown",P=Zo(o),x=o.ownerDocument||rs,k=[0,0,0],W=[0,0,0],$=0,ce=function(){return $=Yo()},ae=function(re,De){return(V.event=re)&&f&&uw(re.target,f)||De&&We&&re.pointerType!=="touch"||z&&z(re,De)},j=function(){V._vx.reset(),V._vy.reset(),me.pause(),d&&d(V)},ne=function(){var re=V.deltaX=kg(k),De=V.deltaY=kg(W),se=Math.abs(re)>=i,Ne=Math.abs(De)>=i;D&&(se||Ne)&&D(V,re,De,k,W),se&&(S&&V.deltaX>0&&S(V),b&&V.deltaX<0&&b(V),T&&T(V),I&&V.deltaX<0!=tt<0&&I(V),tt=V.deltaX,k[0]=k[1]=k[2]=0),Ne&&(v&&V.deltaY>0&&v(V),E&&V.deltaY<0&&E(V),A&&A(V),O&&V.deltaY<0!=xt<0&&O(V),xt=V.deltaY,W[0]=W[1]=W[2]=0),(Be||Ue)&&(q&&q(V),Ue&&(m&&Ue===1&&m(V),w&&w(V),Ue=0),Be=!1),Xe&&!(Xe=!1)&&_e&&_e(V),Pe&&(Q(V),Pe=!1),Oe=0},fe=function(re,De,se){k[se]+=re,W[se]+=De,V._vx.update(re),V._vy.update(De),c?Oe||(Oe=requestAnimationFrame(ne)):ne()},Ee=function(re,De){ee&&!$e&&(V.axis=$e=Math.abs(re)>Math.abs(De)?"x":"y",Xe=!0),$e!=="y"&&(k[2]+=re,V._vx.update(re,!0)),$e!=="x"&&(W[2]+=De,V._vy.update(De,!0)),c?Oe||(Oe=requestAnimationFrame(ne)):ne()},de=function(re){if(!ae(re,1)){re=qo(re,h);var De=re.clientX,se=re.clientY,Ne=De-V.x,Ae=se-V.y,Ye=V.isDragging;V.x=De,V.y=se,(Ye||(Ne||Ae)&&(Math.abs(V.startX-De)>=s||Math.abs(V.startY-se)>=s))&&(Ue||(Ue=Ye?2:1),Ye||(V.isDragging=!0),Ee(Ne,Ae))}},ue=V.onPress=function(oe){ae(oe,1)||oe&&oe.button||(V.axis=$e=null,me.pause(),V.isPressed=!0,oe=qo(oe),tt=xt=0,V.startX=V.x=oe.clientX,V.startY=V.y=oe.clientY,V._vx.reset(),V._vy.reset(),kn(K?o:x,Bi[1],de,Dt,!0),V.deltaX=V.deltaY=0,C&&C(V))},le=V.onRelease=function(oe){if(!ae(oe,1)){Bn(K?o:x,Bi[1],de,!0);var re=!isNaN(V.y-V.startY),De=V.isDragging,se=De&&(Math.abs(V.x-V.startX)>3||Math.abs(V.y-V.startY)>3),Ne=qo(oe);!se&&re&&(V._vx.reset(),V._vy.reset(),h&&Z&&mn.delayedCall(.08,function(){if(Yo()-$>300&&!oe.defaultPrevented){if(oe.target.click)oe.target.click();else if(x.createEvent){var Ae=x.createEvent("MouseEvents");Ae.initMouseEvent("click",!0,!0,li,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),oe.target.dispatchEvent(Ae)}}})),V.isDragging=V.isGesturing=V.isPressed=!1,d&&De&&!K&&me.restart(!0),Ue&&ne(),p&&De&&p(V),y&&y(V,se)}},Ie=function(re){return re.touches&&re.touches.length>1&&(V.isGesturing=!0)&&H(re,V.isDragging)},Fe=function(){return(V.isGesturing=!1)||R(V)},N=function(re){if(!ae(re)){var De=qe(),se=ft();fe((De-F)*ke,(se-It)*ke,1),F=De,It=se,d&&me.restart(!0)}},he=function(re){if(!ae(re)){re=qo(re,h),Q&&(Pe=!0);var De=(re.deltaMode===1?l:re.deltaMode===2?li.innerHeight:1)*g;fe(re.deltaX*De,re.deltaY*De,0),d&&!K&&me.restart(!0)}},te=function(re){if(!ae(re)){var De=re.clientX,se=re.clientY,Ne=De-V.x,Ae=se-V.y;V.x=De,V.y=se,Be=!0,d&&me.restart(!0),(Ne||Ae)&&Ee(Ne,Ae)}},pe=function(re){V.event=re,L(V)},xe=function(re){V.event=re,B(V)},ie=function(re){return ae(re)||qo(re,h)&&Ve(V)};me=V._dc=mn.delayedCall(u||.25,j).pause(),V.deltaX=V.deltaY=0,V._vx=Ph(0,50,!0),V._vy=Ph(0,50,!0),V.scrollX=qe,V.scrollY=ft,V.isDragging=V.isGesturing=V.isPressed=!1,Gg(this),V.enable=function(oe){return V.isEnabled||(kn(P?x:o,"scroll",pd),a.indexOf("scroll")>=0&&kn(P?x:o,"scroll",N,Dt,He),a.indexOf("wheel")>=0&&kn(o,"wheel",he,Dt,He),(a.indexOf("touch")>=0&&zg||a.indexOf("pointer")>=0)&&(kn(o,Bi[0],ue,Dt,He),kn(x,Bi[2],le),kn(x,Bi[3],le),Z&&kn(o,"click",ce,!0,!0),Ve&&kn(o,"click",ie),H&&kn(x,"gesturestart",Ie),R&&kn(x,"gestureend",Fe),L&&kn(o,Cs+"enter",pe),B&&kn(o,Cs+"leave",xe),q&&kn(o,Cs+"move",te)),V.isEnabled=!0,V.isDragging=V.isGesturing=V.isPressed=Be=Ue=!1,V._vx.reset(),V._vy.reset(),F=qe(),It=ft(),oe&&oe.type&&ue(oe),Se&&Se(V)),V},V.disable=function(){V.isEnabled&&(Da.filter(function(oe){return oe!==V&&Zo(oe.target)}).length||Bn(P?x:o,"scroll",pd),V.isPressed&&(V._vx.reset(),V._vy.reset(),Bn(K?o:x,Bi[1],de,!0)),Bn(P?x:o,"scroll",N,He),Bn(o,"wheel",he,He),Bn(o,Bi[0],ue,He),Bn(x,Bi[2],le),Bn(x,Bi[3],le),Bn(o,"click",ce,!0),Bn(o,"click",ie),Bn(x,"gesturestart",Ie),Bn(x,"gestureend",Fe),Bn(o,Cs+"enter",pe),Bn(o,Cs+"leave",xe),Bn(o,Cs+"move",te),V.isEnabled=V.isPressed=V.isDragging=!1,Me&&Me(V))},V.kill=V.revert=function(){V.disable();var oe=Da.indexOf(V);oe>=0&&Da.splice(oe,1),Sr===V&&(Sr=0)},Da.push(V),K&&Zo(o)&&(Sr=V),V.enable(_)},lw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Gt.version="3.15.0";Gt.create=function(r){return new Gt(r)};Gt.register=qg;Gt.getAll=function(){return Da.slice()};Gt.getById=function(r){return Da.filter(function(e){return e.vars.id===r})[0]};Hg()&&mn.registerPlugin(Gt);var Te,ka,rt,_t,ui,mt,Cd,qh,ll,tl,Ko,Ih,Cn,Jh,Sd,Gn,Yg,Zg,za,h_,md,u_,Vn,Md,f_,d_,as,bd,Rd,Va,Pd,nl,wd,gd,Lh=1,Rn=Date.now,_d=Rn(),Ti=0,$o=0,Jg=function(e,t,n){var i=hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Kg=function(e,t){return t&&(!hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},fw=function r(){return $o&&requestAnimationFrame(r)},$g=function(){return Jh=1},Qg=function(){return Jh=0},rr=function(e){return e},Qo=function(e){return Math.round(e*1e5)/1e5||0},p_=function(){return typeof window<"u"},m_=function(){return Te||p_()&&(Te=window.gsap)&&Te.registerPlugin&&Te},Ns=function(e){return!!~Cd.indexOf(e)},g_=function(e){return(e==="Height"?Pd:rt["inner"+e])||ui["client"+e]||mt["client"+e]},__=function(e){return br(e,"getBoundingClientRect")||(Ns(e)?function(){return Xh.width=rt.innerWidth,Xh.height=Pd,Xh}:function(){return wr(e)})},dw=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=br(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?g_(s):e["client"+s])||0}},pw=function(e,t){return!t||~ki.indexOf(e)?__(e):function(){return Xh}},sr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=br(e,n))?a()-__(e)()[s]:Ns(e)?(ui[n]||mt[n])-g_(i):e[n]-e["offset"+i])},Dh=function(e,t){for(var n=0;n<za.length;n+=3)(!t||~t.indexOf(za[n+1]))&&e(za[n],za[n+1],za[n+2])},hi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},jo=function(e){return typeof e=="number"},Rs=function(e){return typeof e=="object"},Jo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Fa=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Oa=Math.abs,x_="left",v_="top",Id="right",Ld="bottom",Is="width",Ls="height",il="Right",rl="Left",sl="Top",al="Bottom",$t="padding",bi="margin",Ha="Width",Dd="Height",rn="px",wi=function(e){return rt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},mw=function(e){var t=wi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},jg=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wr=function(e,t){var n=t&&wi(e)[Sd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Te.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},y_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},gw=function(e){return function(t){return Te.utils.snap(y_(e),t)}},Nd=function(e){var t=Te.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},_w=function(e){return function(t,n){return Nd(y_(e))(t,n.direction)}},Nh=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},hn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Uh=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},e_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fh={toggleActions:"play",anticipatePin:0},Zh={top:0,left:0,center:.5,bottom:1,right:1},Vh=function(e,t){if(hi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Zh?Zh[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Oh=function(e,t,n,i,s,a,o,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,g=_t.createElement("div"),_=Ns(n)||br(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?mt:n.tagName==="IFRAME"?n.contentDocument.body:n,w=e.indexOf("start")!==-1,C=w?c:h,y="border-color:"+C+";font-size:"+d+";color:"+C+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(i===Kt?Id:Ld)+":"+(a+parseFloat(u))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=w,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Gh(g,0,i,w),g},Gh=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Ha]=1,s["border"+o+Ha]=0,s[n.p]=t+"px",Te.set(e,s)},et=[],Td={},cl,t_=function(){return Rn()-Ti>34&&(cl||(cl=requestAnimationFrame(Tr)))},Ba=function(){(!Vn||!Vn.isPressed||Vn.startX>mt.clientWidth)&&(je.cache++,Vn?cl||(cl=requestAnimationFrame(Tr)):Tr(),Ti||Fs("scrollStart"),Ti=Rn())},xd=function(){d_=rt.innerWidth,f_=rt.innerHeight},el=function(e){je.cache++,(e===!0||!Cn&&!u_&&!_t.fullscreenElement&&!_t.webkitFullscreenElement&&(!Md||d_!==rt.innerWidth||Math.abs(rt.innerHeight-f_)>rt.innerHeight*.25))&&qh.restart(!0)},Us={},xw=[],S_=function r(){return cn(Ke,"scrollEnd",r)||Ps(!0)},Fs=function(e){return Us[e]&&Us[e].map(function(t){return t()})||xw},ci=[],M_=function(e){for(var t=0;t<ci.length;t+=5)(!e||ci[t+4]&&ci[t+4].query===e)&&(ci[t].style.cssText=ci[t+1],ci[t].getBBox&&ci[t].setAttribute("transform",ci[t+2]||""),ci[t+3].uncache=1)},b_=function(){return je.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},Ud=function(e,t){var n;for(Gn=0;Gn<et.length;Gn++)n=et[Gn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));nl=!0,t&&M_(t),t||Fs("revert")},w_=function(e,t){je.cache++,(t||!Hn)&&je.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),hi(e)&&(rt.history.scrollRestoration=Rd=e)},Hn,Ds=0,n_,vw=function(){if(n_!==Ds){var e=n_=Ds;requestAnimationFrame(function(){return e===Ds&&Ps(!0)})}},T_=function(){mt.appendChild(Va),Pd=!Vn&&Va.offsetHeight||rt.innerHeight,mt.removeChild(Va)},i_=function(e){return ll(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ps=function(e,t){if(ui=_t.documentElement,mt=_t.body,Cd=[rt,_t,ui,mt],Ti&&!e&&!nl){hn(Ke,"scrollEnd",S_);return}T_(),Hn=Ke.isRefreshing=!0,nl||b_();var n=Fs("refreshInit");h_&&Ke.sort(),t||Ud(),je.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),nl=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),wd=1,i_(!0),et.forEach(function(i){var s=sr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),i_(!1),wd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),je.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),w_(Rd,1),qh.pause(),Ds++,Hn=2,Tr(2),et.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Hn=Ke.isRefreshing=!1,Fs("refresh")},Ed=0,Hh=1,ol,Tr=function(e){if(e===2||!Hn&&!nl){Ke.isUpdating=!0,ol&&ol.update(0);var t=et.length,n=Rn(),i=n-_d>=50,s=t&&et[0].scroll();if(Hh=Ed>s?-1:1,Hn||(Ed=s),i&&(Ti&&!Jh&&n-Ti>200&&(Ti=0,Fs("scrollEnd")),Ko=_d,_d=n),Hh<0){for(Gn=t;Gn-- >0;)et[Gn]&&et[Gn].update(0,i);Hh=1}else for(Gn=0;Gn<t;Gn++)et[Gn]&&et[Gn].update(0,i);Ke.isUpdating=!1}cl=0},Ad=[x_,v_,Ld,Id,bi+al,bi+il,bi+sl,bi+rl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Wh=Ad.concat([Is,Ls,"boxSizing","max"+Ha,"max"+Dd,"position",bi,$t,$t+sl,$t+il,$t+al,$t+rl]),yw=function(e,t,n){Ga(n);var i=e._gsap;if(i.spacerIsNative)Ga(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},vd=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ad.length,a=t.style,o=e.style,l;s--;)l=Ad[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Ld]=o[Id]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Is]=Yh(e,An)+rn,a[Ls]=Yh(e,Kt)+rn,a[$t]=o[bi]=o[v_]=o[x_]="0",Ga(i),o[Is]=o["max"+Ha]=n[Is],o[Ls]=o["max"+Dd]=n[Ls],o[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Sw=/([A-Z])/g,Ga=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Te.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Sw,"-$1").toLowerCase())}},Bh=function(e){for(var t=Wh.length,n=e.style,i=[],s=0;s<t;s++)i.push(Wh[s],n[Wh[s]]);return i.t=e,i},Mw=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Xh={left:0,top:0},r_=function(e,t,n,i,s,a,o,l,c,h,d,u,f,g){Pn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=u+(e.charAt(4)==="="?Vh("0"+e.substr(3),n):0));var _=f?f.time():0,m,p,w;if(f&&f.seek(0),isNaN(e)||(e=+e),jo(e))f&&(e=Te.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,e)),o&&Gh(o,n,i,!0);else{Pn(t)&&(t=t(l));var C=(e||"0").split(" "),y,S,b,E;w=zn(t,l)||mt,y=wr(w)||{},(!y||!y.left&&!y.top)&&wi(w).display==="none"&&(E=w.style.display,w.style.display="block",y=wr(w),E?w.style.display=E:w.style.removeProperty("display")),S=Vh(C[0],y[i.d]),b=Vh(C[1]||"0",n),e=y[i.p]-c[i.p]-h+S+s-b,o&&Gh(o,b,i,n-b<20||o._isStart&&b>20),n-=n-b}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var v=e+n,T=a._isStart;m="scroll"+i.d2,Gh(a,v,i,T&&v>20||!T&&(d?Math.max(mt[m],ui[m]):a.parentNode[m])<=v+1),d&&(c=wr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+rn))}return f&&w&&(m=wr(w),f.seek(u),p=wr(w),f._caScrollDist=m[i.p]-p[i.p],e=e/f._caScrollDist*u),f&&f.seek(_),f?e:Math.round(e)},bw=/(webkit|moz|length|cssText|inset)/i,s_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===mt){e._stOrig=s.cssText,o=wi(e);for(a in o)!+a&&!bw.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Te.core.getCache(e).uncache=1,t.appendChild(e)}},E_=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},kh=function(e,t,n){var i={};i[t.p]="+="+n,Te.set(e,i)},a_=function(e,t){var n=Mr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,h,d){var u=a.tween,f=l.onComplete,g={};c=c||n();var _=E_(n,c,function(){u.kill(),a.tween=0});return d=h&&d||0,h=h||o-c,u&&u.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){je.cache++,a.tween&&Tr()},l.onComplete=function(){a.tween=0,f&&f.call(u)},u=a.tween=Te.to(e,l),u};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},hn(e,"wheel",n.wheelHandler),Ke.isTouch&&hn(e,"touchmove",n.wheelHandler),s},Ke=(function(){function r(t,n){ka||r.register(Te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!$o){this.update=this.refresh=this.kill=rr;return}n=jg(hi(n)||jo(n)||n.nodeType?{trigger:n}:n,Fh);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,w=s.onSnapComplete,C=s.once,y=s.snap,S=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,v=s.fastScrollEnd,T=s.preventOverlaps,A=n.horizontal||n.containerAnimation&&n.horizontal!==!1?An:Kt,D=!d&&d!==0,I=zn(n.scroller||rt),O=Te.core.getCache(I),L=Ns(I),B=("pinType"in n?n.pinType:br(I,"pinType")||L&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=D&&n.toggleActions.split(" "),K="markers"in n?n.markers:Fh.markers,H=L?0:parseFloat(wi(I)["border"+A.p2+Ha])||0,R=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Se=dw(I,L,A),Me=pw(I,L),Ve=0,ke=0,He=0,Z=Mr(I,A),ee,_e,Oe,me,Ue,Be,Pe,Xe,$e,V,tt,xt,Dt,qe,ft,F,It,We,P,x,k,W,$,ce,ae,j,ne,fe,Ee,de,ue,le,Ie,Fe,N,he,te,pe,xe;if(R._startClamp=R._endClamp=!1,R._dir=A,m*=45,R.scroller=I,R.scroll=E?E.time.bind(E):Z,me=Z(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(h_=1,n.refreshPriority===-9999&&(ol=R)),O.tweenScroll=O.tweenScroll||{top:a_(I,Kt),left:a_(I,An)},R.tweenTo=ee=O.tweenScroll[A.p],R.scrubDuration=function(se){Ie=jo(se)&&se,Ie?le?le.duration(se):le=Te.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ie,paused:!0,onComplete:function(){return p&&p(R)}}):(le&&le.progress(1).kill(),le=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(d),de=0,l||(l=i.vars.id)),y&&((!Rs(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in mt.style&&Te.set(L?[mt,ui]:I,{scrollBehavior:"auto"}),je.forEach(function(se){return Pn(se)&&se.target===(L?_t.scrollingElement||ui:I)&&(se.smooth=!1)}),Oe=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?gw(i):y.snapTo==="labelsDirectional"?_w(i):y.directional!==!1?function(se,Ne){return Nd(y.snapTo)(se,Rn()-ke<500?0:Ne.direction)}:Te.utils.snap(y.snapTo),Fe=y.duration||{min:.1,max:2},Fe=Rs(Fe)?tl(Fe.min,Fe.max):tl(Fe,Fe),N=Te.delayedCall(y.delay||Ie/2||.1,function(){var se=Z(),Ne=Rn()-ke<500,Ae=ee.tween;if((Ne||Math.abs(R.getVelocity())<10)&&!Ae&&!Jh&&Ve!==se){var Ye=(se-Be)/qe,qt=i&&!D?i.totalProgress():Ye,nt=Ne?0:(qt-ue)/(Rn()-Ko)*1e3||0,Et=Te.utils.clamp(-Ye,1-Ye,Oa(nt/2)*nt/.185),sn=Ye+(y.inertia===!1?0:Et),At,yt,ct=y,In=ct.onStart,wt=ct.onInterrupt,_n=ct.onComplete;if(At=Oe(sn,R),jo(At)||(At=sn),yt=Math.max(0,Math.round(Be+At*qe)),se<=Pe&&se>=Be&&yt!==se){if(Ae&&!Ae._initted&&Ae.data<=Oa(yt-se))return;y.inertia===!1&&(Et=At-Ye),ee(yt,{duration:Fe(Oa(Math.max(Oa(sn-qt),Oa(At-qt))*.185/nt/.05||0)),ease:y.ease||"power3",data:Oa(yt-se),onInterrupt:function(){return N.restart(!0)&&wt&&Fa(R,wt)},onComplete:function(){R.update(),Ve=Z(),i&&!D&&(le?le.resetTo("totalProgress",At,i._tTime/i._tDur):i.progress(At)),de=ue=i&&!D?i.totalProgress():R.progress,w&&w(R),_n&&Fa(R,_n)}},se,Et*qe,yt-se-Et*qe),In&&Fa(R,In,ee.tween)}}else R.isActive&&Ve!==se&&N.restart(!0)}).pause()),l&&(Td[l]=R),u=R.trigger=zn(u||f!==!0&&f),xe=u&&u._gsap&&u._gsap.stRevert,xe&&(xe=xe(R)),f=f===!0?u:zn(f),hi(o)&&(o={targets:u,className:o}),f&&(g===!1||g===bi||(g=!g&&f.parentNode&&f.parentNode.style&&wi(f.parentNode).display==="flex"?!1:$t),R.pin=f,_e=Te.core.getCache(f),_e.spacer?ft=_e.pinState:(b&&(b=zn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),_e.spacerIsNative=!!b,b&&(_e.spacerState=Bh(b))),_e.spacer=We=b||_t.createElement("div"),We.classList.add("pin-spacer"),l&&We.classList.add("pin-spacer-"+l),_e.pinState=ft=Bh(f)),n.force3D!==!1&&Te.set(f,{force3D:!0}),R.spacer=We=_e.spacer,Ee=wi(f),ce=Ee[g+A.os2],x=Te.getProperty(f),k=Te.quickSetter(f,A.a,rn),vd(f,We,Ee),It=Bh(f)),K){xt=Rs(K)?jg(K,e_):e_,V=Oh("scroller-start",l,I,A,xt,0),tt=Oh("scroller-end",l,I,A,xt,0,V),P=V["offset"+A.op.d2];var ie=zn(br(I,"content")||I);Xe=this.markerStart=Oh("start",l,ie,A,xt,P,0,E),$e=this.markerEnd=Oh("end",l,ie,A,xt,P,0,E),E&&(pe=Te.quickSetter([Xe,$e],A.a,rn)),!B&&!(ki.length&&br(I,"fixedMarkers")===!0)&&(mw(L?mt:I),Te.set([V,tt],{force3D:!0}),j=Te.quickSetter(V,A.a,rn),fe=Te.quickSetter(tt,A.a,rn))}if(E){var oe=E.vars.onUpdate,re=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),oe&&oe.apply(E,re||[])})}if(R.previous=function(){return et[et.indexOf(R)-1]},R.next=function(){return et[et.indexOf(R)+1]},R.revert=function(se,Ne){if(!Ne)return R.kill(!0);var Ae=se!==!1||!R.enabled,Ye=Cn;Ae!==R.isReverted&&(Ae&&(he=Math.max(Z(),R.scroll.rec||0),He=R.progress,te=i&&i.progress()),Xe&&[Xe,$e,V,tt].forEach(function(qt){return qt.style.display=Ae?"none":"block"}),Ae&&(Cn=R,R.update(Ae)),f&&(!S||!R.isActive)&&(Ae?yw(f,We,ft):vd(f,We,wi(f),ae)),Ae||R.update(Ae),Cn=Ye,R.isReverted=Ae)},R.refresh=function(se,Ne,Ae,Ye){if(!((Cn||!R.enabled)&&!Ne)){if(f&&se&&Ti){hn(r,"scrollEnd",S_);return}!Hn&&Q&&Q(R),Cn=R,ee.tween&&!Ae&&(ee.tween.kill(),ee.tween=0),le&&le.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ge){return ge.vars.immediateRender&&ge.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var qt=Se(),nt=Me(),Et=E?E.duration():sr(I,A),sn=qe<=.01||!qe,At=0,yt=Ye||0,ct=Rs(Ae)?Ae.end:n.end,In=n.endTrigger||u,wt=Rs(Ae)?Ae.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),_n=R.pinnedContainer=n.pinnedContainer&&zn(n.pinnedContainer,R),Ln=u&&Math.max(0,et.indexOf(R))||0,Yt=Ln,Bt,Qt,Gi,ks,an,Ht,di,zs,M,U,Y,G,X;for(K&&Rs(Ae)&&(G=Te.getProperty(V,A.p),X=Te.getProperty(tt,A.p));Yt-- >0;)Ht=et[Yt],Ht.end||Ht.refresh(0,1)||(Cn=R),di=Ht.pin,di&&(di===u||di===f||di===_n)&&!Ht.isReverted&&(U||(U=[]),U.unshift(Ht),Ht.revert(!0,!0)),Ht!==et[Yt]&&(Ln--,Yt--);for(Pn(wt)&&(wt=wt(R)),wt=Jg(wt,"start",R),Be=r_(wt,u,qt,A,Z(),Xe,V,R,nt,H,B,Et,E,R._startClamp&&"_startClamp")||(f?-.001:0),Pn(ct)&&(ct=ct(R)),hi(ct)&&!ct.indexOf("+=")&&(~ct.indexOf(" ")?ct=(hi(wt)?wt.split(" ")[0]:"")+ct:(At=Vh(ct.substr(2),qt),ct=hi(wt)?wt:(E?Te.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Be):Be)+At,In=u)),ct=Jg(ct,"end",R),Pe=Math.max(Be,r_(ct||(In?"100% 0":Et),In,qt,A,Z()+At,$e,tt,R,nt,H,B,Et,E,R._endClamp&&"_endClamp"))||-.001,At=0,Yt=Ln;Yt--;)Ht=et[Yt]||{},di=Ht.pin,di&&Ht.start-Ht._pinPush<=Be&&!E&&Ht.end>0&&(Bt=Ht.end-(R._startClamp?Math.max(0,Ht.start):Ht.start),(di===u&&Ht.start-Ht._pinPush<Be||di===_n)&&isNaN(wt)&&(At+=Bt*(1-Ht.progress)),di===f&&(yt+=Bt));if(Be+=At,Pe+=At,R._startClamp&&(R._startClamp+=At),R._endClamp&&!Hn&&(R._endClamp=Pe||-.001,Pe=Math.min(Pe,sr(I,A))),qe=Pe-Be||(Be-=.01)&&.001,sn&&(He=Te.utils.clamp(0,1,Te.utils.normalize(Be,Pe,he))),R._pinPush=yt,Xe&&At&&(Bt={},Bt[A.a]="+="+At,_n&&(Bt[A.p]="-="+Z()),Te.set([Xe,$e],Bt)),f&&!(wd&&R.end>=sr(I,A)))Bt=wi(f),ks=A===Kt,Gi=Z(),W=parseFloat(x(A.a))+yt,!Et&&Pe>1&&(Y=(L?_t.scrollingElement||ui:I).style,Y={style:Y,value:Y["overflow"+A.a.toUpperCase()]},L&&wi(mt)["overflow"+A.a.toUpperCase()]!=="scroll"&&(Y.style["overflow"+A.a.toUpperCase()]="scroll")),vd(f,We,Bt),It=Bh(f),Qt=wr(f,!0),zs=B&&Mr(I,ks?An:Kt)(),g?(ae=[g+A.os2,qe+yt+rn],ae.t=We,Yt=g===$t?Yh(f,A)+qe+yt:0,Yt&&(ae.push(A.d,Yt+rn),We.style.flexBasis!=="auto"&&(We.style.flexBasis=Yt+rn)),Ga(ae),_n&&et.forEach(function(ge){ge.pin===_n&&ge.vars.pinSpacing!==!1&&(ge._subPinOffset=!0)}),B&&Z(he)):(Yt=Yh(f,A),Yt&&We.style.flexBasis!=="auto"&&(We.style.flexBasis=Yt+rn)),B&&(an={top:Qt.top+(ks?Gi-Be:zs)+rn,left:Qt.left+(ks?zs:Gi-Be)+rn,boxSizing:"border-box",position:"fixed"},an[Is]=an["max"+Ha]=Math.ceil(Qt.width)+rn,an[Ls]=an["max"+Dd]=Math.ceil(Qt.height)+rn,an[bi]=an[bi+sl]=an[bi+il]=an[bi+al]=an[bi+rl]="0",an[$t]=Bt[$t],an[$t+sl]=Bt[$t+sl],an[$t+il]=Bt[$t+il],an[$t+al]=Bt[$t+al],an[$t+rl]=Bt[$t+rl],F=Mw(ft,an,S),Hn&&Z(0)),i?(M=i._initted,md(1),i.render(i.duration(),!0,!0),$=x(A.a)-W+qe+yt,ne=Math.abs(qe-$)>1,B&&ne&&F.splice(F.length-2,2),i.render(0,!0,!0),M||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),md(0)):$=qe,Y&&(Y.value?Y.style["overflow"+A.a.toUpperCase()]=Y.value:Y.style.removeProperty("overflow-"+A.a));else if(u&&Z()&&!E)for(Qt=u.parentNode;Qt&&Qt!==mt;)Qt._pinOffset&&(Be-=Qt._pinOffset,Pe-=Qt._pinOffset),Qt=Qt.parentNode;U&&U.forEach(function(ge){return ge.revert(!1,!0)}),R.start=Be,R.end=Pe,me=Ue=Hn?he:Z(),!E&&!Hn&&(me<he&&Z(he),R.scroll.rec=0),R.revert(!1,!0),ke=Rn(),N&&(Ve=-1,N.restart(!0)),Cn=0,i&&D&&(i._initted||te)&&i.progress()!==te&&i.progress(te||0,!0).render(i.time(),!0,!0),(sn||He!==R.progress||E||_||i&&!i._initted)&&(i&&!D&&(i._initted||He||i.vars.immediateRender!==!1)&&i.totalProgress(E&&Be<-.001&&!He?Te.utils.normalize(Be,Pe,0):He,!0),R.progress=sn||(me-Be)/qe===He?0:He),f&&g&&(We._pinOffset=Math.round(R.progress*$)),le&&le.invalidate(),isNaN(G)||(G-=Te.getProperty(V,A.p),X-=Te.getProperty(tt,A.p),kh(V,A,G),kh(Xe,A,G-(Ye||0)),kh(tt,A,X),kh($e,A,X-(Ye||0))),sn&&!Hn&&R.update(),h&&!Hn&&!Dt&&(Dt=!0,h(R),Dt=!1)}},R.getVelocity=function(){return(Z()-Ue)/(Rn()-Ko)*1e3||0},R.endAnimation=function(){Jo(R.callbackAnimation),i&&(le?le.progress(1):i.paused()?D||Jo(i,R.direction<0,1):Jo(i,i.reversed()))},R.labelToScroll=function(se){return i&&i.labels&&(Be||R.refresh()||Be)+i.labels[se]/i.duration()*qe||0},R.getTrailing=function(se){var Ne=et.indexOf(R),Ae=R.direction>0?et.slice(0,Ne).reverse():et.slice(Ne+1);return(hi(se)?Ae.filter(function(Ye){return Ye.vars.preventOverlaps===se}):Ae).filter(function(Ye){return R.direction>0?Ye.end<=Be:Ye.start>=Pe})},R.update=function(se,Ne,Ae){if(!(E&&!Ae&&!se)){var Ye=Hn===!0?he:R.scroll(),qt=se?0:(Ye-Be)/qe,nt=qt<0?0:qt>1?1:qt||0,Et=R.progress,sn,At,yt,ct,In,wt,_n,Ln;if(Ne&&(Ue=me,me=E?Z():Ye,y&&(ue=de,de=i&&!D?i.totalProgress():nt)),m&&f&&!Cn&&!Lh&&Ti&&(!nt&&Be<Ye+(Ye-Ue)/(Rn()-Ko)*m?nt=1e-4:nt===1&&Pe>Ye+(Ye-Ue)/(Rn()-Ko)*m&&(nt=.9999)),nt!==Et&&R.enabled){if(sn=R.isActive=!!nt&&nt<1,At=!!Et&&Et<1,wt=sn!==At,In=wt||!!nt!=!!Et,R.direction=nt>Et?1:-1,R.progress=nt,In&&!Cn&&(yt=nt&&!Et?0:nt===1?1:Et===1?2:3,D&&(ct=!wt&&z[yt+1]!=="none"&&z[yt+1]||z[yt],Ln=i&&(ct==="complete"||ct==="reset"||ct in i))),T&&(wt||Ln)&&(Ln||d||!i)&&(Pn(T)?T(R):R.getTrailing(T).forEach(function(Gi){return Gi.endAnimation()})),D||(le&&!Cn&&!Lh?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",nt,i._tTime/i._tDur):(le.vars.totalProgress=nt,le.invalidate().restart())):i&&i.totalProgress(nt,!!(Cn&&(ke||se)))),f){if(se&&g&&(We.style[g+A.os2]=ce),!B)k(Qo(W+$*nt));else if(In){if(_n=!se&&nt>Et&&Pe+1>Ye&&Ye+1>=sr(I,A),S)if(!se&&(sn||_n)){var Yt=wr(f,!0),Bt=Ye-Be;s_(f,mt,Yt.top+(A===Kt?Bt:0)+rn,Yt.left+(A===Kt?0:Bt)+rn)}else s_(f,We);Ga(sn||_n?F:It),ne&&nt<1&&sn||k(W+(nt===1&&!_n?$:0))}}y&&!ee.tween&&!Cn&&!Lh&&N.restart(!0),o&&(wt||C&&nt&&(nt<1||!gd))&&ll(o.targets).forEach(function(Gi){return Gi.classList[sn||C?"add":"remove"](o.className)}),a&&!D&&!se&&a(R),In&&!Cn?(D&&(Ln&&(ct==="complete"?i.pause().totalProgress(1):ct==="reset"?i.restart(!0).pause():ct==="restart"?i.restart(!0):i[ct]()),a&&a(R)),(wt||!gd)&&(c&&wt&&Fa(R,c),q[yt]&&Fa(R,q[yt]),C&&(nt===1?R.kill(!1,1):q[yt]=0),wt||(yt=nt===1?1:3,q[yt]&&Fa(R,q[yt]))),v&&!sn&&Math.abs(R.getVelocity())>(jo(v)?v:2500)&&(Jo(R.callbackAnimation),le?le.progress(1):Jo(i,ct==="reverse"?1:!nt,1))):D&&a&&!Cn&&a(R)}if(fe){var Qt=E?Ye/E.duration()*(E._caScrollDist||0):Ye;j(Qt+(V._isFlipped?1:0)),fe(Qt)}pe&&pe(-Ye/E.duration()*(E._caScrollDist||0))}},R.enable=function(se,Ne){R.enabled||(R.enabled=!0,hn(I,"resize",el),L||hn(I,"scroll",Ba),Q&&hn(r,"refreshInit",Q),se!==!1&&(R.progress=He=0,me=Ue=Ve=Z()),Ne!==!1&&R.refresh())},R.getTween=function(se){return se&&ee?ee.tween:le},R.setPositions=function(se,Ne,Ae,Ye){if(E){var qt=E.scrollTrigger,nt=E.duration(),Et=qt.end-qt.start;se=qt.start+Et*se/nt,Ne=qt.start+Et*Ne/nt}R.refresh(!1,!1,{start:Kg(se,Ae&&!!R._startClamp),end:Kg(Ne,Ae&&!!R._endClamp)},Ye),R.update()},R.adjustPinSpacing=function(se){if(ae&&se){var Ne=ae.indexOf(A.d)+1;ae[Ne]=parseFloat(ae[Ne])+se+rn,ae[1]=parseFloat(ae[1])+se+rn,Ga(ae)}},R.disable=function(se,Ne){if(se!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Ne||le&&le.pause(),he=0,_e&&(_e.uncache=1),Q&&cn(r,"refreshInit",Q),N&&(N.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!L)){for(var Ae=et.length;Ae--;)if(et[Ae].scroller===I&&et[Ae]!==R)return;cn(I,"resize",el),L||cn(I,"scroll",Ba)}},R.kill=function(se,Ne){R.disable(se,Ne),le&&!Ne&&le.kill(),l&&delete Td[l];var Ae=et.indexOf(R);Ae>=0&&et.splice(Ae,1),Ae===Gn&&Hh>0&&Gn--,Ae=0,et.forEach(function(Ye){return Ye.scroller===R.scroller&&(Ae=1)}),Ae||Hn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,se&&i.revert({kill:!1}),Ne||i.kill()),Xe&&[Xe,$e,V,tt].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),ol===R&&(ol=0),f&&(_e&&(_e.uncache=1),Ae=0,et.forEach(function(Ye){return Ye.pin===f&&Ae++}),Ae||(_e.spacer=0)),n.onKill&&n.onKill(R)},et.push(R),R.enable(!1,!1),xe&&xe(R),i&&i.add&&!qe){var De=R.update;R.update=function(){R.update=De,je.cache++,Be||Pe||R.refresh()},Te.delayedCall(.01,R.update),qe=.01,Be=Pe=0}else R.refresh();f&&vw()},r.register=function(n){return ka||(Te=n||m_(),p_()&&window.document&&r.enable(),ka=$o),ka},r.defaults=function(n){if(n)for(var i in n)Fh[i]=n[i];return Fh},r.disable=function(n,i){$o=0,et.forEach(function(a){return a[i?"kill":"disable"](n)}),cn(rt,"wheel",Ba),cn(_t,"scroll",Ba),clearInterval(Ih),cn(_t,"touchcancel",rr),cn(mt,"touchstart",rr),Nh(cn,_t,"pointerdown,touchstart,mousedown",$g),Nh(cn,_t,"pointerup,touchend,mouseup",Qg),qh.kill(),Dh(cn);for(var s=0;s<je.length;s+=3)Uh(cn,je[s],je[s+1]),Uh(cn,je[s],je[s+2])},r.enable=function(){if(rt=window,_t=document,ui=_t.documentElement,mt=_t.body,Te){if(ll=Te.utils.toArray,tl=Te.utils.clamp,bd=Te.core.context||rr,md=Te.core.suppressOverwrites||rr,Rd=rt.history.scrollRestoration||"auto",Ed=rt.pageYOffset||0,Te.core.globals("ScrollTrigger",r),mt){$o=1,Va=document.createElement("div"),Va.style.height="100vh",Va.style.position="absolute",T_(),fw(),Gt.register(Te),r.isTouch=Gt.isTouch,as=Gt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Md=Gt.isTouch===1,hn(rt,"wheel",Ba),Cd=[rt,_t,ui,mt],Te.matchMedia?(r.matchMedia=function(h){var d=Te.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Te.addEventListener("matchMediaInit",function(){b_(),Ud()}),Te.addEventListener("matchMediaRevert",function(){return M_()}),Te.addEventListener("matchMedia",function(){Ps(0,1),Fs("matchMedia")}),Te.matchMedia().add("(orientation: portrait)",function(){return xd(),xd})):console.warn("Requires GSAP 3.11.0 or later"),xd(),hn(_t,"scroll",Ba);var n=mt.hasAttribute("style"),i=mt.style,s=i.borderTopStyle,a=Te.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=wr(mt),Kt.m=Math.round(o.top+Kt.sc())||0,An.m=Math.round(o.left+An.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(mt.setAttribute("style",""),mt.removeAttribute("style")),Ih=setInterval(t_,250),Te.delayedCall(.5,function(){return Lh=0}),hn(_t,"touchcancel",rr),hn(mt,"touchstart",rr),Nh(hn,_t,"pointerdown,touchstart,mousedown",$g),Nh(hn,_t,"pointerup,touchend,mouseup",Qg),Sd=Te.utils.checkPrefix("transform"),Wh.push(Sd),ka=Rn(),qh=Te.delayedCall(.2,Ps).pause(),za=[_t,"visibilitychange",function(){var h=rt.innerWidth,d=rt.innerHeight;_t.hidden?(Yg=h,Zg=d):(Yg!==h||Zg!==d)&&el()},_t,"DOMContentLoaded",Ps,rt,"load",Ps,rt,"resize",el],Dh(hn),et.forEach(function(h){return h.enable(0,1)}),l=0;l<je.length;l+=3)Uh(cn,je[l],je[l+1]),Uh(cn,je[l],je[l+2])}else if(_t){var c=function h(){r.enable(),_t.removeEventListener("DOMContentLoaded",h)};_t.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(gd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ih)||(Ih=i)&&setInterval(t_,i),"ignoreMobileResize"in n&&(Md=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Dh(cn)||Dh(hn,n.autoRefreshEvents||"none"),u_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=zn(n),a=je.indexOf(s),o=Ns(s);~a&&je.splice(a,o?6:2),i&&(o?ki.unshift(rt,i,mt,i,ui,i):ki.unshift(s,i))},r.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(hi(n)?zn(n):n).getBoundingClientRect(),o=a[s?Is:Ls]*i||0;return s?a.right-o>0&&a.left+o<rt.innerWidth:a.bottom-o>0&&a.top+o<rt.innerHeight},r.positionInViewport=function(n,i,s){hi(n)&&(n=zn(n));var a=n.getBoundingClientRect(),o=a[s?Is:Ls],l=i==null?o/2:i in Zh?Zh[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/rt.innerWidth:(a.top+l)/rt.innerHeight},r.killAll=function(n){if(et.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Us.killAll||[];Us={},i.forEach(function(s){return s()})}},r})();Ke.version="3.15.0";Ke.saveStyles=function(r){return r?ll(r).forEach(function(e){if(e&&e.style){var t=ci.indexOf(e);t>=0&&ci.splice(t,5),ci.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Te.core.getCache(e),bd())}}):ci};Ke.revert=function(r,e){return Ud(!r,e)};Ke.create=function(r,e){return new Ke(r,e)};Ke.refresh=function(r){return r?el(!0):(ka||Ke.register())&&Ps(!0)};Ke.update=function(r){return++je.cache&&Tr(r===!0?2:0)};Ke.clearScrollMemory=w_;Ke.maxScroll=function(r,e){return sr(r,e?An:Kt)};Ke.getScrollFunc=function(r,e){return Mr(zn(r),e?An:Kt)};Ke.getById=function(r){return Td[r]};Ke.getAll=function(){return et.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Ke.isScrolling=function(){return!!Ti};Ke.snapDirectional=Nd;Ke.addEventListener=function(r,e){var t=Us[r]||(Us[r]=[]);~t.indexOf(e)||t.push(e)};Ke.removeEventListener=function(r,e){var t=Us[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ke.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,h){var d=[],u=[],f=Te.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(g){d.length||f.restart(!0),d.push(g.trigger),u.push(g),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Pn(s)&&(s=s(),hn(Ke,"refresh",function(){return s=e.batchMax()})),ll(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Ke.create(c))}),t};var o_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},yd=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Gt.isTouch?" pinch-zoom":""):"none",e===ui&&r(mt,t)},zh={auto:1,scroll:1},ww=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Te.core.getCache(s),o=Rn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(zh[(l=wi(s)).overflowY]||zh[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ns(s)&&(zh[(l=wi(s)).overflowY]||zh[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},A_=function(e,t,n,i){return Gt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ww,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&hn(_t,Gt.eventTypes[0],c_,!1,!0)},onDisable:function(){return cn(_t,Gt.eventTypes[0],c_,!0)}})},Tw=/(input|label|select|textarea)/i,l_,c_=function(e){var t=Tw.test(e.target.tagName);(t||l_)&&(e._gsapAllow=!0,l_=t)},Ew=function(e){Rs(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=zn(e.target)||ui,h=Te.core.globals().ScrollSmoother,d=h&&h.get(),u=as&&(e.content&&zn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Mr(c,Kt),g=Mr(c,An),_=1,m=(Gt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,w=Pn(i)?function(){return i(o)}:function(){return i||2.8},C,y,S=A_(c,e.type,!0,s),b=function(){return y=!1},E=rr,v=rr,T=function(){l=sr(c,Kt),v=tl(as?1:0,l),n&&(E=tl(0,sr(c,An))),C=Ds},A=function(){u._gsap.y=Qo(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(y){requestAnimationFrame(b);var K=Qo(o.deltaY/2),H=v(f.v-K);if(u&&H!==f.v+f.offset){f.offset=H-f.v;var R=Qo((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",u._gsap.y=R+"px",f.cacheID=je.cache,Tr()}return!0}f.offset&&A(),y=!0},I,O,L,B,q=function(){T(),I.isActive()&&I.vars.scrollY>l&&(f()>l?I.progress(1)&&f(l):I.resetTo("scrollY",l))};return u&&Te.set(u,{y:"+=0"}),e.ignoreCheck=function(z){return as&&z.type==="touchmove"&&D(z)||_>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){y=!1;var z=_;_=Qo((rt.visualViewport&&rt.visualViewport.scale||1)/m),I.pause(),z!==_&&yd(c,_>1.01?!0:n?!1:"x"),O=g(),L=f(),T(),C=Ds},e.onRelease=e.onGestureStart=function(z,K){if(f.offset&&A(),!K)B.restart(!0);else{je.cache++;var H=w(),R,Q;n&&(R=g(),Q=R+H*.05*-z.velocityX/.227,H*=o_(g,R,Q,sr(c,An)),I.vars.scrollX=E(Q)),R=f(),Q=R+H*.05*-z.velocityY/.227,H*=o_(f,R,Q,sr(c,Kt)),I.vars.scrollY=v(Q),I.invalidate().duration(H).play(.01),(as&&I.vars.scrollY>=l||R>=l-1)&&Te.to({},{onUpdate:q,duration:H})}a&&a(z)},e.onWheel=function(){I._ts&&I.pause(),Rn()-p>1e3&&(C=0,p=Rn())},e.onChange=function(z,K,H,R,Q){if(Ds!==C&&T(),K&&n&&g(E(R[2]===K?O+(z.startX-z.x):g()+K-R[1])),H){f.offset&&A();var Se=Q[2]===H,Me=Se?L+z.startY-z.y:f()+H-Q[1],Ve=v(Me);Se&&Me!==Ve&&(L+=Ve-Me),f(Ve)}(H||K)&&Tr()},e.onEnable=function(){yd(c,n?!1:"x"),Ke.addEventListener("refresh",q),hn(rt,"resize",q),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){yd(c,!0),cn(rt,"resize",q),Ke.removeEventListener("refresh",q),S.kill()},e.lockAxis=e.lockAxis!==!1,o=new Gt(e),o.iOS=as,as&&!f()&&f(1),as&&Te.ticker.add(rr),B=o._dc,I=Te.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:E_(f,f(),function(){return I.pause()})},onUpdate:Tr,onComplete:B.vars.onComplete}),o};Ke.sort=function(r){if(Pn(r))return et.sort(r);var e=rt.pageYOffset||0;return Ke.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),et.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ke.observe=function(r){return new Gt(r)};Ke.normalizeScroll=function(r){if(typeof r>"u")return Vn;if(r===!0&&Vn)return Vn.enable();if(r===!1){Vn&&Vn.kill(),Vn=r;return}var e=r instanceof Gt?r:Ew(r);return Vn&&Vn.target===e.target&&Vn.kill(),Ns(e.target)&&(Vn=e),e};Ke.core={_getVelocityProp:Ph,_inputObserver:A_,_scrollers:je,_proxies:ki,bridge:{ss:function(){Ti||Fs("scrollStart"),Ti=Rn()},ref:function(){return Cn}}};m_()&&Te.registerPlugin(Ke);var Fd=[{id:"jaunt",source:"assets/Seedance 2 0 - Referenceuse The Exact Jaunt Portable Speaker As The Only Product Reference  Preserve 4K(1).mp4",title:"JAUNT \u2014 One Beat",category:"Audio / Product film",categories:["film","product"],width:1920,height:1080,video:!0,new:!0,duration:15.061,full:"assets/portfolio/jaunt.mp4",preview:"assets/portfolio/jaunt-preview.mp4",thumbnail:"assets/portfolio/jaunt.webp",posterTime:10.8,previewStart:8.561},{id:"tiktak-superhero",source:"assets/Dara\u2019s TikTak Superhero Adventure.png",title:"TikTak \u2014 Superhero Adventure",category:"TikTak / Character poster",categories:["poster","character","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Dara\u2019s TikTak Superhero Adventure.png",thumbnail:"assets/portfolio/tiktak-superhero.webp"},{id:"blood-orange-summer",source:"assets/Seedance 2_0 - 15-Second Premium Lifestyle Soda Commercial_ Emotional Summer Energy_ Ultra-Photoreal.mp4",title:"Blood Orange \u2014 A Taste of Summer",category:"Beverage / Lifestyle film",categories:["film","product"],width:1280,height:720,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blood-orange-summer.mp4",preview:"assets/portfolio/blood-orange-summer-preview.mp4",thumbnail:"assets/portfolio/blood-orange-summer.webp",posterTime:11.8,previewStart:8.569},{id:"blink-watch",source:"assets/Seedance 2_0 - Create a premium cinematic luxury watch advertisement for a brand called BLINK_Use th.mp4",title:"BLINK \u2014 A Moment in Time",category:"Watches / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blink-watch.mp4",preview:"assets/portfolio/blink-watch-preview.mp4",thumbnail:"assets/portfolio/blink-watch.webp",posterTime:6.8,previewStart:6.8},{id:"toyota",source:"assets/Toyota_web.mp4",title:"Toyota \u2014 Automotive Film",category:"Automotive / Brand film",categories:["film"],width:1880,height:1080,video:!0,new:!1,duration:78.4,full:"assets/portfolio/toyota.mp4",preview:"assets/portfolio/toyota-preview.mp4",thumbnail:"assets/portfolio/toyota.webp",posterTime:12,previewStart:12},{id:"dara-funfair",source:"assets/2.mp4",title:"Dara \u2014 The Funfair Adventure",category:"TikTak / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-funfair.mp4",preview:"assets/portfolio/dara-funfair-preview.mp4",thumbnail:"assets/portfolio/dara-funfair.webp",posterTime:14,previewStart:14}];var Od={projects:[{id:"forest-flight",source:"assets/forest-flight-original.mp4",title:"Forest Flight",category:"Nature / Cinematic film",categories:["film","vfx"],width:3840,height:2160,video:!0,new:!0,duration:14.5,full:"assets/portfolio/forest-flight.mp4",preview:"assets/portfolio/forest-flight-preview.mp4",thumbnail:"assets/portfolio/forest-flight.webp",posterTime:3,previewStart:0,delivery:{width:3840,height:2160,quality:20,maxrate:"11M",bufsize:"11M",previewWidth:1920,previewHeight:1080,previewQuality:22,previewDuration:14.5}},{id:"blink-logo-animation",source:"assets/blink-logo-animation-original.mp4",title:"BLINK \u2014 Logo Animation",category:"Brand identity / Motion",categories:["film","vfx"],width:3840,height:2160,video:!0,new:!0,duration:7.041667,full:"assets/portfolio/blink-logo-animation.mp4",preview:"assets/portfolio/blink-logo-animation-preview.mp4",thumbnail:"assets/portfolio/blink-logo-animation.webp",posterTime:3,previewStart:0,delivery:{width:3840,height:2160,quality:20,maxrate:"11M",bufsize:"11M",previewWidth:1920,previewHeight:1080,previewQuality:22,previewDuration:5}},{id:"desert-journey",source:"assets/desert-journey-original.mp4",title:"Desert Journey",category:"Characters / Cinematic film",categories:["film","character","vfx"],width:2206,height:946,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/desert-journey.mp4",preview:"assets/portfolio/desert-journey-preview.mp4",thumbnail:"assets/portfolio/desert-journey.webp",posterTime:5,previewStart:0,delivery:{width:2206,height:946,quality:20,maxrate:"11M",bufsize:"11M",previewWidth:1920,previewHeight:1080,previewQuality:22,previewDuration:5}},{id:"jaunt",source:"assets/Seedance 2 0 - Referenceuse The Exact Jaunt Portable Speaker As The Only Product Reference  Preserve 4K(1).mp4",title:"JAUNT \u2014 One Beat",category:"Audio / Product film",categories:["film","product"],width:1920,height:1080,video:!0,new:!0,duration:15.061,full:"assets/portfolio/jaunt.mp4",preview:"assets/portfolio/jaunt-preview.mp4",thumbnail:"assets/portfolio/jaunt.webp",posterTime:10.8,previewStart:8.561},{id:"blood-orange-summer",source:"assets/Seedance 2_0 - 15-Second Premium Lifestyle Soda Commercial_ Emotional Summer Energy_ Ultra-Photoreal.mp4",title:"Blood Orange \u2014 A Taste of Summer",category:"Beverage / Lifestyle film",categories:["film","product"],width:1280,height:720,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blood-orange-summer.mp4",preview:"assets/portfolio/blood-orange-summer-preview.mp4",thumbnail:"assets/portfolio/blood-orange-summer.webp",posterTime:11.8,previewStart:8.569},{id:"blink-watch",source:"assets/Seedance 2_0 - Create a premium cinematic luxury watch advertisement for a brand called BLINK_Use th.mp4",title:"BLINK \u2014 A Moment in Time",category:"Watches / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blink-watch.mp4",preview:"assets/portfolio/blink-watch-preview.mp4",thumbnail:"assets/portfolio/blink-watch.webp",posterTime:6.8,previewStart:6.8},{id:"tiktak-superhero",source:"assets/Dara\u2019s TikTak Superhero Adventure.png",title:"TikTak \u2014 Superhero Adventure",category:"TikTak / Character poster",categories:["poster","character","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Dara\u2019s TikTak Superhero Adventure.png",thumbnail:"assets/portfolio/tiktak-superhero.webp"},{id:"zero-lemon",source:"assets/hf_20260930_230457_450eef86-45bf-4454-853f-bb9d635c3e55.mp4",title:"Zero \u2014 Lemon in Motion",category:"Beverage / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/zero-lemon.mp4",preview:"assets/portfolio/zero-lemon-preview.mp4",thumbnail:"assets/portfolio/zero-lemon.webp",posterTime:11.5,previewStart:8.572},{id:"dara-funfair",source:"assets/2.mp4",title:"Dara \u2014 The Funfair Adventure",category:"TikTak / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-funfair.mp4",preview:"assets/portfolio/dara-funfair-preview.mp4",thumbnail:"assets/portfolio/dara-funfair.webp",posterTime:14,previewStart:14},{id:"blood-orange-rhythm",source:"assets/Seedance 2_0 - 15-Second Rhythm-Driven Global Soda Commercial_ Premium Sound Design_ Ultra-Photoreal.mp4",title:"Blood Orange \u2014 Find Your Rhythm",category:"Beverage / Product film",categories:["film","product"],width:1280,height:720,video:!0,new:!0,duration:15.069002,full:"assets/portfolio/blood-orange-rhythm.mp4",preview:"assets/portfolio/blood-orange-rhythm-preview.mp4",thumbnail:"assets/portfolio/blood-orange-rhythm.webp",posterTime:12,previewStart:8.569},{id:"tiktak-cozy",source:"assets/Dara with TikTak snacks, cozy room.png",title:"TikTak \u2014 A Little Everyday Joy",category:"TikTak / Character poster",categories:["poster","character","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Dara with TikTak snacks, cozy room.png",thumbnail:"assets/portfolio/tiktak-cozy.webp"},{id:"panda",source:"assets/hf_20260930_230458_602c55c7-0b2f-4b14-80e4-2bec2f7e0349.mp4",title:"Panda \u2014 The Perfect Crunch",category:"Snacks / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/panda.mp4",preview:"assets/portfolio/panda-preview.mp4",thumbnail:"assets/portfolio/panda.webp",posterTime:11.5,previewStart:8.572},{id:"zero-rice-poster",source:"assets/Warm Kitchen Rice Celebration.png",title:"Zero Rice \u2014 Made for Sharing",category:"Zero / Lifestyle poster",categories:["poster","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/Warm Kitchen Rice Celebration.png",thumbnail:"assets/portfolio/zero-rice-poster.webp"},{id:"dara-transformation",source:"assets/Dara\u2019s TikTak Hero Transformation.png",title:"Dara \u2014 Hero Transformation",category:"TikTak / Visual story",categories:["poster","character","product"],width:1672,height:941,video:!1,new:!0,full:"assets/Dara\u2019s TikTak Hero Transformation.png",thumbnail:"assets/portfolio/dara-transformation.webp"},{id:"tiktak-family",source:"assets/Warm family moments, crispy cheese puffs.png",title:"TikTak \u2014 Family Moments",category:"TikTak / Visual story",categories:["poster","product"],width:1672,height:941,video:!1,new:!0,full:"assets/Warm family moments, crispy cheese puffs.png",thumbnail:"assets/portfolio/tiktak-family.webp"},{id:"tiktak-crunch",source:"assets/TikTak Cheese Crunch in Motion.png",title:"TikTak \u2014 Cheese Crunch",category:"TikTak / Product poster",categories:["poster","product"],width:1122,height:1402,video:!1,new:!0,full:"assets/TikTak Cheese Crunch in Motion.png",thumbnail:"assets/portfolio/tiktak-crunch.webp"},{id:"zero-rice",source:"assets/hf_20260930_230457_46195c35-5fa4-4d89-9489-27e570017282.mp4",title:"Zero \u2014 Every Grain",category:"Food / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/zero-rice.mp4",preview:"assets/portfolio/zero-rice-preview.mp4",thumbnail:"assets/portfolio/zero-rice.webp",posterTime:11,previewStart:8.572},{id:"dara-character",source:"assets/dara.png",title:"Dara \u2014 Everyday Hero",category:"TikTak / Character design",categories:["poster","character"],width:1254,height:1254,video:!1,new:!0,full:"assets/dara.png",thumbnail:"assets/portfolio/dara-character.webp"},{id:"dara-snack",source:"assets/3.mp4",title:"Dara \u2014 Snack Break",category:"TikTak / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-snack.mp4",preview:"assets/portfolio/dara-snack-preview.mp4",thumbnail:"assets/portfolio/dara-snack.webp",posterTime:18,previewStart:18},{id:"gundakam",source:"assets/doy gundakam.mp4",title:"Gundakam \u2014 A Fresh Perspective",category:"Dairy / Product film",categories:["film","product"],width:1920,height:1080,video:!0,new:!0,duration:15.092971,full:"assets/portfolio/gundakam.mp4",preview:"assets/portfolio/gundakam-preview.mp4",thumbnail:"assets/portfolio/gundakam.webp",posterTime:11,previewStart:8.593},{id:"energy",source:"assets/hf_20260930_230458_782c2634-362c-4988-b3ca-a8c454f5838b.mp4",title:"Energy \u2014 Electric Red",category:"Beverage / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/energy.mp4",preview:"assets/portfolio/energy-preview.mp4",thumbnail:"assets/portfolio/energy.webp",posterTime:11.5,previewStart:8.572},{id:"ceylon-tea",source:"assets/hf_20260930_230459_bfdf752b-710d-4ac4-a486-bcf5af001ab0.mp4",title:"Ceylon Tea \u2014 The Golden Pour",category:"Tea / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/ceylon-tea.mp4",preview:"assets/portfolio/ceylon-tea-preview.mp4",thumbnail:"assets/portfolio/ceylon-tea.webp",posterTime:11.5,previewStart:8.572},{id:"hes-clean",source:"assets/hf_20260930_230459_d754f928-73d2-4180-97d9-a8d98f92a962.mp4",title:"HES \u2014 A Brighter Clean",category:"Home care / Product film",categories:["film","product"],width:720,height:1280,video:!0,new:!0,duration:15.072,full:"assets/portfolio/hes-clean.mp4",preview:"assets/portfolio/hes-clean-preview.mp4",thumbnail:"assets/portfolio/hes-clean.webp",posterTime:11.5,previewStart:8.572},{id:"dara-monster",source:"assets/final1.mp4",title:"Dara \u2014 The Jelly Monster",category:"TikTak / Animated film",categories:["film","character"],width:480,height:854,video:!0,new:!0,duration:22.833333,full:"assets/portfolio/dara-monster.mp4",preview:"assets/portfolio/dara-monster-preview.mp4",thumbnail:"assets/portfolio/dara-monster.webp",posterTime:15,previewStart:15},{id:"dara-city",source:"assets/2341.mp4",title:"Dara \u2014 City Adventure",category:"TikTak / Animated film",categories:["film","character"],width:480,height:854,video:!0,new:!0,duration:30.05,full:"assets/portfolio/dara-city.mp4",preview:"assets/portfolio/dara-city-preview.mp4",thumbnail:"assets/portfolio/dara-city.webp",posterTime:16,previewStart:16},{id:"jelly-monster",source:"assets/monster.png",title:"The Jelly Monster",category:"TikTak / Character design",categories:["poster","character"],width:1254,height:1254,video:!1,new:!0,full:"assets/monster.png",thumbnail:"assets/portfolio/jelly-monster.webp"},{id:"tiktak-pack",source:"assets/tiktak.png",title:"TikTak \u2014 Meet the Pack",category:"TikTak / Product poster",categories:["poster","product"],width:1094,height:1438,video:!1,new:!0,full:"assets/tiktak.png",thumbnail:"assets/portfolio/tiktak-pack.webp"},{id:"saffron",source:"assets/Produce-A-Finished-15-Second-Vertical-9 (1).mp4",title:"Saffron \u2014 The Caf\xE9 Ritual",category:"Coffee / Lifestyle film",categories:["film","product"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/saffron.mp4",preview:"assets/portfolio/saffron-preview.mp4",thumbnail:"assets/portfolio/saffron.webp",posterTime:5.5,previewStart:5.5},{id:"vista",source:"assets/Produce-A-Finished-15-Second-Vertical-9 (2).mp4",title:"Vista \u2014 Space to Breathe",category:"Architecture / Brand film",categories:["film"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/vista.mp4",preview:"assets/portfolio/vista-preview.mp4",thumbnail:"assets/portfolio/vista.webp",posterTime:6,previewStart:6},{id:"clear",source:"assets/Produce-A-Finished-15-Second-Vertical-9 (3).mp4",title:"CLEAR \u2014 A Fresh Start",category:"Home care / Product film",categories:["film","product"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/clear.mp4",preview:"assets/portfolio/clear-preview.mp4",thumbnail:"assets/portfolio/clear.webp",posterTime:10.5,previewStart:8.542},{id:"automotive-detail",source:"assets/Produce-A-Finished-15-Second-Vertical-9.mp4",title:"Automotive \u2014 In Every Detail",category:"Automotive / Product film",categories:["film","product"],width:594,height:1056,video:!0,new:!1,duration:15.041667,full:"assets/portfolio/automotive-detail.mp4",preview:"assets/portfolio/automotive-detail-preview.mp4",thumbnail:"assets/portfolio/automotive-detail.webp",posterTime:6,previewStart:6},{id:"iphone",source:"assets/work-iphone.jpg",title:"Apple \u2014 Cinematic Poster",category:"Technology / Product poster",categories:["poster","product"],width:2752,height:1536,video:!1,new:!1,full:"assets/work-iphone.jpg",thumbnail:"assets/portfolio/iphone.webp"},{id:"ford-film",source:"assets/work1.mp4",title:"Ford \u2014 Built for the Journey",category:"Automotive / Brand film",categories:["film"],width:720,height:1280,video:!0,new:!1,duration:15.06898,full:"assets/portfolio/ford-film.mp4",preview:"assets/portfolio/ford-film-preview.mp4",thumbnail:"assets/portfolio/ford-film.webp",posterTime:8,previewStart:8},{id:"rolex",source:"assets/work-rolex.jpg",title:"Rolex \u2014 Luxury in Detail",category:"Watches / Product poster",categories:["poster","product"],width:736,height:920,video:!1,new:!1,full:"assets/work-rolex.jpg",thumbnail:"assets/portfolio/rolex.webp"},{id:"hyper-motion",source:"assets/work2.mp4",title:"Product \u2014 Hyper-Motion",category:"Product / Motion film",categories:["film","product"],width:720,height:1280,video:!0,new:!1,duration:15.06898,full:"assets/portfolio/hyper-motion.mp4",preview:"assets/portfolio/hyper-motion-preview.mp4",thumbnail:"assets/portfolio/hyper-motion.webp",posterTime:3,previewStart:3},{id:"vfx-composite",source:"assets/work3.mp4",title:"VFX \u2014 Composite",category:"Visual effects / Film",categories:["film","vfx"],width:720,height:1280,video:!0,new:!1,duration:15.06898,full:"assets/portfolio/vfx-composite.mp4",preview:"assets/portfolio/vfx-composite-preview.mp4",thumbnail:"assets/portfolio/vfx-composite.webp",posterTime:1.5,previewStart:1.5},{id:"muse",source:"assets/work-muse.jpg",title:"Muse \u2014 Color & Flavor",category:"Beverage / Product poster",categories:["poster","product"],width:736,height:981,video:!1,new:!1,full:"assets/work-muse.jpg",thumbnail:"assets/portfolio/muse.webp"},{id:"haji-character",source:"assets/work-pizza.jpg",title:"Haji \u2014 Brand Character",category:"Character / Poster",categories:["poster","character"],width:1792,height:2400,video:!1,new:!1,full:"assets/work-pizza.jpg",thumbnail:"assets/portfolio/haji-character.webp"},{id:"kinetic",source:"assets/work4.mp4",title:"Social \u2014 Kinetic Edit",category:"Social / Motion film",categories:["film"],width:1280,height:720,video:!0,new:!1,duration:15.125,full:"assets/portfolio/kinetic.mp4",preview:"assets/portfolio/kinetic-preview.mp4",thumbnail:"assets/portfolio/kinetic.webp",posterTime:3,previewStart:3},{id:"haji-trex",source:"assets/films-trex.mp4",title:"Haji vs T-Rex",category:"Character / Animated film",categories:["film","character"],width:1920,height:1080,video:!0,new:!1,duration:9,full:"assets/portfolio/haji-trex.mp4",preview:"assets/portfolio/haji-trex-preview.mp4",thumbnail:"assets/portfolio/haji-trex.webp",posterTime:4,previewStart:2.5},{id:"ford-poster",source:"assets/work-ford.jpg",title:"Ford \u2014 Studio Key Art",category:"Automotive / Poster",categories:["poster","product"],width:736,height:920,video:!1,new:!1,full:"assets/work-ford.jpg",thumbnail:"assets/portfolio/ford-poster.webp"},{id:"zero-pack",source:"assets/work-zero.jpg",title:"Zero \u2014 Packaging Study",category:"Product / Poster",categories:["poster","product"],width:768,height:1344,video:!1,new:!1,full:"assets/work-zero.jpg",thumbnail:"assets/portfolio/zero-pack.webp"},{id:"toyota",source:"assets/Toyota_web.mp4",title:"Toyota \u2014 Automotive Film",category:"Automotive / Brand film",categories:["film"],width:1880,height:1080,video:!0,new:!1,duration:78.4,full:"assets/portfolio/toyota.mp4",preview:"assets/portfolio/toyota-preview.mp4",thumbnail:"assets/portfolio/toyota.webp",posterTime:12,previewStart:12}],studio:[{id:"studio-motion",source:"assets/film.mp4",title:"Product Motion",category:"Studio motion",categories:["film"],width:1080,height:1920,video:!0,new:!1,duration:15.092993,full:"assets/portfolio/studio-motion.mp4",preview:"assets/portfolio/studio-motion-preview.mp4",thumbnail:"assets/portfolio/studio-motion.webp",posterTime:3,previewStart:3}],hero:{source:"assets/Seedance 2 0 - Referenceuse The Exact Jaunt Portable Speaker As The Only Product Reference  Preserve 4K(1).mp4",preview:"assets/portfolio/jaunt-hero.mp4",thumbnail:"assets/portfolio/jaunt-hero.webp",start:.4,posterTime:4}};Mi.registerPlugin(Ke);var gt=r=>document.getElementById(r),Qh=document.documentElement,Ai=gt("scroller"),ar=gt("exhibition"),ul=matchMedia("(max-width: 767px)"),Rw=!!navigator.connection?.saveData,pl=(r,e=0,t=1)=>Math.max(e,Math.min(t,r)),$h=Co.lerp,Pw=new Set(Fd.map(r=>r.id)),Iw=[...Fd.map(r=>Od.projects.find(e=>e.id===r.id)).filter(Boolean),...Od.projects.filter(r=>!Pw.has(r.id))],Pt=Iw,gn=Qh.dataset.motion==="off",C_=!1,Ci=null,Wd=Qh.lang==="ckb"?"ku":Qh.lang,zd=new it,Vd=new it,Ar=0,R_=0,Vi=[],Qn=0,Ei=0,Bd={en:{"exhibit.title":"Step inside<br>the work.",prev:"Previous work",next:"Next work"},ku:{"exhibit.title":"\u0628\u0686\u06C6 \u0646\u0627\u0648<br>\u062C\u06CC\u0647\u0627\u0646\u06CC \u06A9\u0627\u0631\u06D5\u06A9\u0627\u0646.",prev:"\u06A9\u0627\u0631\u06CC \u067E\u06CE\u0634\u0648\u0648",next:"\u06A9\u0627\u0631\u06CC \u062F\u0648\u0627\u062A\u0631"},ar:{"exhibit.title":"\u0627\u062F\u062E\u0644 \u0625\u0644\u0649<br>\u0639\u0627\u0644\u0645 \u0627\u0644\u0623\u0639\u0645\u0627\u0644.",prev:"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0633\u0627\u0628\u0642",next:"\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u062A\u0627\u0644\u064A"}},kd=r=>(Bd[Wd]||Bd.en)[r]||Bd.en[r],fl=()=>Qh.dir==="rtl"?-1:1;function D_(){ar.querySelectorAll("[data-exp-i18n]").forEach(e=>e.innerHTML=kd(e.dataset.expI18n)),gt("exhibitPrev").setAttribute("aria-label",kd("prev")),gt("exhibitNext").setAttribute("aria-label",kd("next"));let r={en:"View all work",ku:"\u0647\u06D5\u0645\u0648\u0648 \u06A9\u0627\u0631\u06D5\u06A9\u0627\u0646 \u0628\u0628\u06CC\u0646\u06D5",ar:"\u0639\u0631\u0636 \u062C\u0645\u064A\u0639 \u0627\u0644\u0623\u0639\u0645\u0627\u0644"}[Wd]||"View all work";gt("exhibitGrid").setAttribute("aria-label",r),gt("exhibitGrid").title=r,tu(),un()}addEventListener("blink:language",r=>{Wd=r.detail,D_()});function Xd(r,e){dispatchEvent(new CustomEvent("blink:open-project",{detail:{id:r,trigger:e}}))}ar.querySelectorAll("[data-exhibit]").forEach(r=>r.addEventListener("click",e=>{e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),Xd(r.dataset.exhibit,r))}));var P_=0;function tu(){clearTimeout(P_),P_=setTimeout(()=>{Ke.refresh(),Vi.forEach(r=>r.measureFrame?.()),dispatchEvent(new Event("blink:layout")),un()},100)}function un(){!Ar&&!document.hidden&&(Ar=requestAnimationFrame(N_))}function N_(r){if(Ar=0,document.hidden||gt("viewer").open)return;let e=Math.min((r-R_)/1e3||.016,.05);R_=r,Vd.lerp(zd,1-Math.exp(-e*7));let t=!1;for(let n of Vi)!n.visible||n.failed||gn||(n.update(r/1e3,e),n.renderer.render(n.scene,n.camera),t||=n.animate||Vd.distanceTo(zd)>.001);t&&(Ar=requestAnimationFrame(N_))}addEventListener("pointermove",r=>{r.pointerType!=="touch"&&(zd.set((r.clientX/innerWidth-.5)*2,-(r.clientY/innerHeight-.5)*2),gn||un())},{passive:!0});document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ar),Ar=0,Vi.forEach(r=>r.pauseMedia?.())):(Vi.filter(r=>r.visible).forEach(r=>r.onVisible?.()),un())});new MutationObserver(()=>{gt("viewer").open?(cancelAnimationFrame(Ar),Ar=0,Vi.forEach(r=>r.pauseMedia?.())):(Vi.filter(r=>r.visible).forEach(r=>r.onVisible?.()),un())}).observe(gt("viewer"),{attributes:!0,attributeFilter:["open"]});var Gd=class{constructor(e,t,n){this.container=e,this.root=t,this.update=n,this.visible=!1,this.animate=!1,this.failed=!1,this.renderer=new ah({alpha:!0,antialias:!ul.matches,powerPreference:"low-power",preserveDrawingBuffer:!1}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,ul.matches?1.25:1.6)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=fn,this.renderer.toneMapping=vo,this.renderer.toneMappingExposure=1.25,this.camera=new Sn(42,1,.08,80),this.scene=new no,e.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.resize=()=>{let i=e.clientWidth,s=e.clientHeight;!i||!s||(this.renderer.setSize(i,s,!1),this.camera.aspect=i/s,this.camera.updateProjectionMatrix(),this.onResize?.(i,s),un())},this.ro=new ResizeObserver(this.resize),this.ro.observe(e),this.io=new IntersectionObserver(i=>{this.visible=i[0].isIntersecting,this.visible?(this.onVisible?.(),un()):this.pauseMedia?.()},{root:Ai,rootMargin:"120px",threshold:0}),this.io.observe(e),this.renderer.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),this.failed=!0,t.classList.remove("has-webgl"),this.pauseMedia?.(),eu()}),this.renderer.domElement.addEventListener("webglcontextrestored",()=>{this.failed=!1,t.classList.add("has-webgl"),eu(),un()}),this.resize(),Vi.push(this),t.classList.add("has-webgl")}dispose(){this.ro.disconnect(),this.io.disconnect(),this.pauseMedia?.(),this.video?.removeAttribute("src"),this.video?.load(),this.scene.traverse(e=>{e.geometry?.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>{n&&(n.map?.dispose(),n.dispose())})}),this.environmentTarget?.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}};function Lw(r,e=.45,t=0){return new ho({color:r,roughness:e,metalness:t})}function I_(r,e,t,n=[0,0,0],i=[1,1,1]){let s=new qn(r,e);return s.position.set(...n),s.scale.set(...i),t.add(s),s}function Dw(r){let e=new fs(r),t={value:0},n={value:new it(1/1280,1/720)};return e.userData.focusBlur=t,e.userData.focusTexel=n,e.onBeforeCompile=i=>{i.uniforms.focusBlur=t,i.uniforms.focusTexel=n,i.fragmentShader=`uniform float focusBlur;
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
   }`;i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",Je.map_fragment.replace("vec4 sampledDiffuseColor = texture2D( map, vMapUv );",s))},e.customProgramCacheKey=()=>"blink-focus-v1",e}var U_,zi=0,Wa=0;function nu(r){Qn=pl(r),Wa=Qn*(Pt.length-1)*.58;let e=Math.round(Qn*(Pt.length-1));if(e!==Ei||!gt("exhibitOpen").dataset.ready){Ei=e;let t=Pt[e];gt("exhibitOpen").dataset.ready="true",gt("exhibitOpen").textContent=t.title,gt("exhibitPosition").textContent=`${e+1} / ${Pt.length}`,gt("exhibitPrev").disabled=e===0,gt("exhibitNext").disabled=e===Pt.length-1,U_?.queueVideo?.()}gt("exhibition").style.setProperty("--exhibit-progress",Qn),un()}function Nw(){let r=gt("exhibition"),e=new Gd(gt("exhibitionWorld"),r,()=>{});U_=e,e.camera.fov=48,e.camera.updateProjectionMatrix(),e.scene.background=null;let t=new po(16777215,14211295,2.5);e.scene.add(t);let n=new fo,i=[],s=new Map,a=Lw(15066602,.7,.05);for(let y=0;y<7;y++){let S=new fr;e.scene.add(S);let b=I_(new zr(1,1,.055),a,S,[0,0,-.04]),E=I_(new ds(1,1),Dw({color:15066602}),S);i.push({group:S,frame:b,screen:E,index:-1})}function o(y,S){y.map!==S&&(y.map=S,y.color.set(S?16777215:15066602),y.needsUpdate=!0)}function l(){if(!e.visible||gn||e.failed)return;let y=Math.round(zi/.58),S=new Set;for(let b=Math.max(0,y-4);b<=Math.min(Pt.length-1,y+4);b++)S.add(Pt[b].id);for(let[b,E]of s)S.has(b)||(E.texture?.dispose(),s.delete(b));for(let b=Math.max(0,y-4);b<=Math.min(Pt.length-1,y+4);b++){let E=Pt[b];if(s.has(E.id))continue;let v={texture:null};s.set(E.id,v),n.load(E.thumbnail,T=>{if(s.get(E.id)!==v){T.dispose();return}T.colorSpace=fn,T.anisotropy=Math.min(4,e.renderer.capabilities.getMaxAnisotropy()),v.texture=T,un()},void 0,()=>un())}}e.onVisible=()=>{l(),e.queueVideo()};let c=document.createElement("video");c.muted=!0,c.defaultMuted=!0,c.playsInline=!0,c.loop=!0,c.preload="none",e.video=c;let h=-1,d=null,u=0;function f(){c.pause();for(let y of i)y.screen.material.map===d&&o(y.screen.material,s.get(Pt[y.index]?.id)?.texture||null);d?.dispose(),d=null,h=-1}e.pauseMedia=()=>{clearTimeout(u),f(),c.removeAttribute("src"),c.load()},e.resetCatalog=()=>{e.pauseMedia(),s.forEach(y=>y.texture?.dispose()),s.clear(),zi=0,i.forEach(y=>{y.index=-1,y.group.visible=!1})},e.queueVideo=()=>{clearTimeout(u),!(!e.visible||gn||Rw||document.hidden||e.failed||gt("viewer").open)&&(u=setTimeout(()=>{let y=Pt[Ei];if(!y.video){f(),e.animate=!1,un();return}if(h===Ei&&d){c.play().catch(()=>{}),un();return}f(),h=Ei,c.src=y.preview,c.load()},180))},c.addEventListener("loadeddata",()=>{!e.visible||gn||document.hidden||h!==Ei||gt("viewer").open||(d?.dispose(),d=new oo(c),d.colorSpace=fn,c.play().then(un).catch(un))}),c.addEventListener("error",()=>{f(),h=-1,un()});let g=new _o,_=new it;function m(y){let S=e.container.getBoundingClientRect();_.set((y.clientX-S.left)/S.width*2-1,-(y.clientY-S.top)/S.height*2+1),g.setFromCamera(_,e.camera);let b=g.intersectObjects(i.filter(E=>E.group.visible).map(E=>E.screen))[0];b&&Xd(Pt[b.object.userData.index].id,gt("exhibitOpen"))}Fw(e.container,m);let p=400,w=0;e.measureFrame=()=>{let y=e.container.getBoundingClientRect(),S=r.querySelector(".exhibition-heading").getBoundingClientRect(),b=r.querySelector(".exhibition-bottom").getBoundingClientRect(),E=S.bottom-y.top+28,v=b.top-y.top-32;p=Math.max(70,v-E),w=(E+v)/2-y.height/2,un()},e.onResize=e.measureFrame,e.measureFrame();let C=-1;return e.update=(y,S)=>{zi=gn?Wa:$h(zi,Wa,1-Math.exp(-S*8)),Math.abs(zi-Wa)<.001&&(zi=Wa),e.animate=Math.abs(zi-Wa)>.001||!c.paused;let b=Math.round(zi/.58),E=fl(),v=ul.matches?innerHeight<760?68:58:innerHeight<760?56:48,T=e.container.clientHeight/(2*Math.tan(Co.degToRad(v/2))*6.2);b!==C&&(l(),C=b),i.forEach((A,D)=>{let I=b+D-3,O=Pt[I];if(A.group.visible=!!O,!O)return;if(A.index!==I){A.index=I,A.screen.userData.index=I;let K=O.width/O.height,H=K>1?4.4:2.25,R=H/K;A.frame.scale.set(H+.018,R+.018,1),A.screen.scale.set(H,R,1)}let L=(I*.58-zi)*E;A.group.position.set(Math.sin(L)*8,-.12,-Math.cos(L)*8),A.group.rotation.y=-L;let B=1-Co.smoothstep(Math.abs(I-zi/.58),.08,1.1),q=Math.min(ul.matches?1.3:1.75,p/(A.screen.scale.y*T),e.container.clientWidth*.92/(A.screen.scale.x*T));A.group.scale.setScalar(q*$h(.62,1,B));let z=s.get(O.id)?.texture||null;o(A.screen.material,I===h&&d?d:z);for(let K of[A.screen.material]){let H=K.map?.image,R=H?.videoWidth||H?.width||O.width,Q=H?.videoHeight||H?.height||O.height;K.userData.focusTexel.value.set(1/R,1/Q),K.userData.focusBlur.value=(1-B)*12,K.map&&K.color.setScalar($h(.82,1,B))}}),e.camera.position.set(0,.25+w/T+Vd.y*.025,-1.8),e.camera.lookAt(0,-.12+w/T,-8),e.camera.fov=v,e.camera.updateProjectionMatrix()},nu(0),e}function jh(r){r=pl(r),Ci&&!gn&&(Ai.scrollTop=$h(Ci.start,Ci.end,r),Ke.update()),nu(r)}var fi={progress:0},dl=0,Er=null,hl=null,Kh=0,L_=0,qd=!1,iu=!1;function Os(){clearTimeout(dl),Er=null,hl=null,Mi.killTweensOf(fi)}function Bs(r){Os(),dispatchEvent(new Event("blink:scroll-control")),r=pl(r,0,Pt.length-1);let e=r/(Pt.length-1),t=Math.abs(r-Ei)>3;hl=e,Mi.killTweensOf(fi),fi.progress=Qn,t&&(zi=e*(Pt.length-1)*.58),Mi.to(fi,{progress:e,duration:gn||t?0:.5,ease:"power3.out",onUpdate:()=>jh(fi.progress)})}var Uw=matchMedia("(any-pointer: fine)");function Hd(){return Ci&&!gn&&!gt("viewer").open&&Ai.scrollTop>=Ci.start-1&&Ai.scrollTop<=Ci.end+1}Ai.addEventListener("wheel",r=>{if(r.ctrlKey||r.target.closest("input,textarea,select")||!Hd()){Os();return}let t=(Math.abs(r.deltaX)>Math.abs(r.deltaY)?r.deltaX*fl():r.deltaY)*(r.deltaMode===1?20:r.deltaMode===2?Ai.clientHeight:1);if(!t)return;if(iu=!1,Qn<1e-4&&t<0||Qn>.9999&&t>0){Os();return}r.preventDefault(),r.stopImmediatePropagation(),dispatchEvent(new Event("blink:scroll-control"));let n=performance.now();(Er===null||n-L_>240)&&(Er=Mi.isTweening(fi)&&hl!==null?hl:Qn,Kh=Math.round(Er*(Pt.length-1))),hl=null,L_=n,clearTimeout(dl),Mi.killTweensOf(fi),Er=pl(Er+t*.65/(Ci.end-Ci.start)),fi.progress=Qn,Mi.to(fi,{progress:Er,duration:.28,ease:"power2.out",onUpdate:()=>jh(fi.progress)}),dl=setTimeout(()=>{let i=Er*(Pt.length-1),s=Math.round(i);s===Kh&&Math.abs(i-Kh)>.18&&(s+=Math.sign(i-Kh)),Bs(s)},180)},{capture:!0,passive:!1});Ai.addEventListener("scroll",()=>{qd||iu||!Uw.matches||!Hd()||Er!==null||Mi.isTweening(fi)||(clearTimeout(dl),dl=setTimeout(()=>{if(!Hd())return;let r=Qn*(Pt.length-1);Math.abs(r-Math.round(r))>.006&&Bs(Math.round(r))},240))},{passive:!0});addEventListener("blink:page-navigation",Os);addEventListener("pointerdown",r=>{qd=!0,iu=r.pointerType==="touch",Os()},{capture:!0,passive:!0});for(let r of["pointerup","pointercancel"])addEventListener(r,()=>{qd=!1},{capture:!0,passive:!0});addEventListener("keydown",()=>{iu=!1,Os()},{capture:!0,passive:!0});function Fw(r,e){let t=null;r.addEventListener("pointerdown",s=>{!s.isPrimary||s.button!==0||gn||(Mi.killTweensOf(fi),t={id:s.pointerId,x:s.clientX,y:s.clientY,start:Qn,index:Ei,axis:null,delta:0})}),r.addEventListener("pointermove",s=>{if(!t||s.pointerId!==t.id)return;let a=s.clientX-t.x,o=s.clientY-t.y;if(!t.axis&&Math.hypot(a,o)>8&&(t.axis=Math.abs(a)>Math.abs(o)*1.15?"x":"y",t.axis==="x"&&(r.setPointerCapture(s.pointerId),r.classList.add("is-dragging"))),t.axis!=="x")return;s.cancelable&&s.preventDefault(),t.delta=-a*fl();let l=Math.max(180,Math.min(r.clientWidth*.7,600));jh(t.start+t.delta/l/(Pt.length-1))},{passive:!1});function n(s,a){if(!t||s.pointerId!==t.id)return;let o=t;if(t=null,r.classList.remove("is-dragging"),r.hasPointerCapture(s.pointerId)&&r.releasePointerCapture(s.pointerId),o.axis==="x"){let l=Math.round(Qn*(Pt.length-1));!a&&Math.abs(o.delta)>40&&l===o.index&&(l+=Math.sign(o.delta)),Bs(l)}else!a&&!o.axis&&Math.hypot(s.clientX-o.x,s.clientY-o.y)<8&&e(s)}r.addEventListener("pointerup",s=>n(s,!1)),r.addEventListener("pointercancel",s=>n(s,!0)),r.addEventListener("lostpointercapture",s=>{s.target===r&&n(s,!0)}),r.addEventListener("dragstart",s=>s.preventDefault());let i=0;r.addEventListener("wheel",s=>{if(gn||s.ctrlKey||Math.abs(s.deltaX)<=Math.abs(s.deltaY)||!s.deltaX)return;s.preventDefault(),Mi.killTweensOf(fi);let a=s.deltaMode===1?20:s.deltaMode===2?r.clientWidth:1;jh(Qn+s.deltaX*a*fl()/Math.max(180,r.clientWidth*.7)/(Pt.length-1)),clearTimeout(i),i=setTimeout(()=>Bs(Math.round(Qn*(Pt.length-1))),180)},{passive:!1})}gt("exhibitOpen").addEventListener("click",()=>Xd(Pt[Ei].id,gt("exhibitOpen")));gt("exhibitPrev").addEventListener("click",()=>Bs(Ei-1));gt("exhibitNext").addEventListener("click",()=>Bs(Ei+1));gt("exhibitOpen").addEventListener("keydown",r=>{(r.key==="ArrowRight"||r.key==="ArrowLeft")&&(r.preventDefault(),Bs(Ei+(r.key==="ArrowRight"?1:-1)*fl()))});function eu(){Os(),Ci?.kill(),Ci=null,ar.style.setProperty("--exhibit-distance",`${(Pt.length-1)*pl(innerHeight*.25,200,260)}px`),ar.classList.toggle("is-scrollable",!gn&&ar.classList.contains("has-webgl")),!gn&&ar.classList.contains("has-webgl")?Ci=Ke.create({trigger:ar,scroller:Ai,start:()=>`top top+=${gt("mainNav").offsetHeight}`,end:"bottom bottom",onUpdate:r=>nu(r.progress)}):Vi.forEach(r=>r.pauseMedia?.()),tu(),un()}function Ow(){if(!C_){C_=!0;try{Nw()}catch(r){console.warn("BLINK: showing ordinary exhibition links because WebGL is unavailable.",r.message)}}}function F_(){ar.classList.toggle("is-reduced",gn),D_(),gn||Ow(),eu(),gn||Vi.filter(r=>r.visible).forEach(r=>r.onVisible?.())}addEventListener("blink:motion",r=>{let e=gt("mainNav").offsetHeight,t=[...Ai.querySelectorAll(":scope > section")].find(i=>i.getBoundingClientRect().bottom>e),n=t?.getBoundingClientRect().top;gn=r.detail.paused,F_(),t===ar?Ai.scrollTop=ar.offsetTop-e:t&&(Ai.scrollTop+=t.getBoundingClientRect().top-n)});ul.addEventListener("change",()=>{Vi.forEach(r=>r.resize()),eu()});addEventListener("pagehide",r=>{r.persisted||(cancelAnimationFrame(Ar),Ci?.kill(),Vi.forEach(e=>e.dispose()))});addEventListener("pageshow",tu);F_();nu(0);location.hash&&requestAnimationFrame(()=>{let r=document.getElementById(location.hash.slice(1));r&&r.closest("#scroller")&&(Ai.scrollTop=r.offsetTop-gt("mainNav").offsetHeight)});document.fonts.ready.then(tu);
/*! For license information please see experience.js.LEGAL.txt */
