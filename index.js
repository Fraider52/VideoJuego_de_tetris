var  app  =  require ( 'express' ) ( ) ;
var  http  =  require ( 'http' ) . createServer ( aplicación ) ;
var  io  =  require ( 'socket.io' ) ( http ) ;

aplicación . get ( '/' ,  ( req ,  res )  =>  {
  res . sendFile ( __dirname  +  '/index.html' ) ;
} ) ;

io . on ( 'conexión' ,  ( enchufe )  =>  {
    zócalo . on ( 'mensaje de chat' ,  ( msg )  =>  {
      io . emit ( 'mensaje de chat' ,  msg ) ;
    } ) ;
  } ) ;

http . escuchar ( 3000 ,  ( )  =>  {
  consola . log ( 'escuchando en *: 3000' ) ;
} ) ;