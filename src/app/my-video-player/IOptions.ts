export interface IOptions{
    height:string,
    poster:string,
    width:string,
    preload:string,
    fluid: boolean,
      aspectRatio: string,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
}