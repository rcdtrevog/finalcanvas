//1 forloop
import * as THREE from "three";


class SubAreaDrawer {
  constructor() {
  }
  temp(){
    console.log('Working________________________-')
  }
  selectingSubArea(activity){
    // Create a Set to store the processed mesh IDs
    const processedMeshIds = new Set();

    // Create a raycaster object
    const raycaster = new THREE.Raycaster();

    // Create a mouse vector to store the mouse position
    const mouse = new THREE.Vector2();

    // Add an event listener for mouse clicks
    wallEditor.renderer.domElement.addEventListener(activity, (event) => {
      // Calculate the mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Cast a ray from the mouse position
      raycaster.setFromCamera(mouse, wallEditor.camera);

      // Get the list of intersected objects
      const intersects = raycaster.intersectObjects(wallEditor.scene.children, true);
      // console.log(intersects.length)
      

      // Check if any meshes were intersected
      if (intersects.length > 0) {





        for (const intersect of intersects) {

          if(intersect.object.geometry.type = "SphereGeometry"){
            // console.log(intersect.object)
          }
          

          if(intersect.object.isMesh){

            // console.log(intersect.object)


            const intersectedMesh = intersect.object;
    
           // Check if the intersected object has a userData.id property
            if (intersectedMesh.geometry.userData.id !== undefined) {
            const meshID = intersectedMesh.geometry.userData.id;
                // Check if the mesh ID has already been processed
            if (!processedMeshIds.has(meshID)) {
              console.log('Mesh clicked:', meshID);

              for (const intersect of intersects) {

          
                if (intersect.object.isLineSegments) {
                  if (intersect.object.geometry.userData.id === meshID) {
                      // Check the current color state of the line
                      if (!intersect.object.userData.color || intersect.object.userData.color === 'red') {
                          // Create a new material with blue color
                          const newMaterial = intersect.object.material.clone();
                          newMaterial.color.set(0x0000ff);
                          intersect.object.material = newMaterial;
                          // Update the color state of the line to blue
                          intersect.object.userData.color = 'blue';
                      } else {
                          // Create a new material with red color
                          const newMaterial = intersect.object.material.clone();
                          newMaterial.color.set(0xff0000);
                          intersect.object.material = newMaterial;
                          // Update the color state of the line to red
                          intersect.object.userData.color = 'red';
                      }
                  }
              }
            }

              
              // for (const newIntersect of intersects) {
              //   if(newIntersect.object.isLineSegments){
              //     // newIntersect.object.material.color.set('blue')
              //     // console.log(intersectedMesh.material.color.getHex())
              //     if(intersectedMesh.material.color.getHex() === 0xff0000){
              //       // newIntersect.object.material.color = newIntersect.object.material.color.getHex() === 0x0000ff ? 0xff0000 : 0x0000ff   //blue
              //       newIntersect.object.material.color = 0x0000ff
              //     }
             

              //   }
              // }

              // wallEditor.linesArray.forEach((each)=>{
              //   if(each.subAreaGroupID === '1'){
              //     let newEach = each
              //     if(each.subAreaOutlineMesh){
              //       console.log(newEach)

              //     console.log(newEach.subAreaOutlineMesh.material.color = 0xff0000)
              //   }}
              // })
              // Iterate over each line in wallEditor.linesArray


              // wallEditor.linesArray.forEach((each) => {
              //   // Check if the line has a subAreaGroupID of '1'
              //   if (each.subAreaGroupID === '2') {
              //       // Check if the line has a subAreaOutlineMesh
              //       if (each.subAreaOutlineMesh) {
              //           // Create a copy of the material to avoid modifying the original material
              //           const newMaterial = each.subAreaOutlineMesh.material.clone();
              //           // Set the color of the new material to red (0xff0000)
              //           newMaterial.color.set(0x0000ff);
              //           // Assign the new material to the subAreaOutlineMesh
              //           each.subAreaOutlineMesh.material = newMaterial;
              //       }
              //   }
              // });

              // Iterate over each line in wallEditor.linesArray
              /////////////////////////////////////////////
              // wallEditor.linesArray.forEach((each) => {
              //   // Check if the line has a subAreaGroupID of '1'
              //   if (each.subAreaGroupID === meshID) {
              //       // Check if the line has a subAreaOutlineMesh
              //       if (each.subAreaOutlineMesh) {
              //           // Check the current color of the line
              //           if (each.color === 'red') {
              //               // Create a copy of the material to avoid modifying the original material
              //               const newMaterial = each.subAreaOutlineMesh.material.clone();
              //               // Set the color of the new material to blue (0x0000ff)
              //               newMaterial.color.set(0x0000ff);
              //               // Assign the new material to the subAreaOutlineMesh
              //               each.subAreaOutlineMesh.material = newMaterial;
              //               // Update the color state of the line
              //               each.color = 'blue';
              //           } else {
              //               // Create a copy of the material to avoid modifying the original material
              //               const newMaterial = each.subAreaOutlineMesh.material.clone();
              //               // Set the color of the new material back to red (0xff0000)
              //               newMaterial.color.set(0xff0000);
              //               // Assign the new material to the subAreaOutlineMesh
              //               each.subAreaOutlineMesh.material = newMaterial;
              //               // Update the color state of the line
              //               each.color = 'red';
              //           }
              //       }
              //   }
              // });
              ////////////////////////////////////////////////////////////////////



              this.toggleDots(meshID)


              processedMeshIds.add(meshID); // Add the mesh ID to the processed set

              // if (event.ctrlKey) {
              //   this.toggleDots(meshID)
              // }         

            }
          }
          }
        }
      }
    });
  }

  
  toggleDots(meshID){

    if (wallEditor.lineDots[meshID]) {
      wallEditor.lineDots[meshID].forEach((dot) => {
        dot.visible = !dot.visible;
      });
    }

    console.log(wallEditor.lineDots)

  }
}

export default SubAreaDrawer;
