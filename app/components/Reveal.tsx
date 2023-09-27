'use client'
import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
children: JSX.Element;
}
export const Reveal = ({ children }: Props) => {
    const ref = useRef();
    const isInView =useInView(ref,{once:false,amount:0.5});
    const mainControls = useAnimation();
    useEffect(()=>{
        if(isInView){
           mainControls.start("visible");
        }
    },[isInView]);
    return (
        <motion.div ref={ref}
         >
            <motion.div
                variants={{
                    hidden:{opacity:0, x:-75},
                    visible:{opacity:1,x:0},
                }}
                initial="hidden"
                whileInView="visible"
                animate={mainControls}
                transition={{duration:0.5,delay:0.25}}
            >{children}</motion.div>
        </motion.div>  
    )
}