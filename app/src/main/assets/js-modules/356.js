__d(356,function(e,t,n,r){"use strict";var o=t(12),s=t(41),a=s.I18nManager,i=s.Image,c=(s.Platform,s.StyleSheet),u=s.TouchableOpacity,l=function(e){return o.createElement(u,{style:f.buttonContainer,onPress:e.onPress},o.createElement(i,{style:f.button,source:t(357)}))};l.propTypes={onPress:o.PropTypes.func.isRequired};var f=c.create({buttonContainer:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"},button:{height:24,width:24,margin:16,resizeMode:"contain",transform:[{scaleX:a.isRTL?-1:1}]}});n.exports=l});