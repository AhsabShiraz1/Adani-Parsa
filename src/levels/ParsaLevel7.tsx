import { LevelProps } from '../interfaces';
import { useEffect, Suspense } from "react";
// import * as THREE from "three";
import Model from "../Model";
import { Environment } from "@react-three/drei";
import VideoPlayer from '../VideoPlayer';
import { Root, Container, Text } from "@react-three/uikit";

export default function ParsaLevel7({ setNotification }: LevelProps) {
  // const [componentKey, setComponentKey] = useState(0);


  useEffect(() => {
    setNotification("Please make sure you have worn the safety gear and stay 100m away as advised \n Click on the blast button to manually initiate blast ");
  }, [setNotification]);

 

  return (
    <>   
      <VideoPlayer
        key={"-video"}
        scale={[0.5, 0.5, 0.5]}
        src="/assets/parsa-blasting.mp4"
        position={[0, 1.2, -5]}
        rotation={[0, 0, 0]}
      />
      <Suspense fallback={null}>
        <Model 
          key={"-ground"}
          scale={0.5} 
          position={[4, -4.83, 85]} 
          rotation={[0, -Math.PI / 2 , 0]} 
          url="/assets/exploration-ground-v1.glb" 
        />
        
       
      </Suspense>
      <Environment 
        key={"-environment"}
        files="/assets/parsa-env-compressed.hdr"
        background 
        ground={{
          height: 30,     
          radius: 100,    
          scale: 230      
        }} 
      />
   
      <group position={[0, 2.45, -4]} rotation={[0, 0, 0]}>
        <Root>
          <Container
            padding={10}
            borderWidth={2}
            borderColor="white"
            borderRadius={8}
            backgroundColor="lightgrey"
          >
            <Container flexDirection="column" alignItems="center">
              <Text fontSize={12} fontWeight="bold">
                Click on the play button to start the video
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
    </>
  );
}
