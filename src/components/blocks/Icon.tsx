import Image from "next/image";

type IconProps = {
    src: string
}

export const Icon = ({src}: IconProps) => {

     return (
         <>
             <div className={'inline-flex items-center justify-center '}>
                 <div className={'inline-flex items-center justify-center bg-icon rounded-full w-44 h-44'}>
                     <div className={'inline-flex items-center justify-center bg-white rounded-full w-32 h-32'}>
                         <Image
                             alt=''
                             src={src}
                             width={64}
                             height={64}
                             quality={100}
                         />
                     </div>

                 </div>
             </div>
         </>
     )
}
