AFRAME.registerComponent("poster", {
  init: function () {
    this.posterContainer = this.el;
    this.createCards()
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "avatar",
        title: "Avatar",
        url: "./assets/thumbnails/avatar.jpg",
      },
      {
        id: "budapest",
        title: "Harry Potter",
        url: "./assets/thumbnails/harry.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Matrix",
        url: "./assets/thumbnails/matrix.jpg",
      },
      {
        id: "new-york-city",
        title: "Spiderman",
        url: "./assets/thumbnails/spiderman.jpg",
      },
    ];
    let prevoiusXPosition = -65;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 9;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderel=this.createBorder(position,item.id)
      // Thumbnail Element
      const thumbel=this.createPoster(item)
      borderel.appendChild(thumbel)
      // Title Text Element
      const titleel=this.createTitle(position,item)
      borderel.appendChild(titleel)
      this.posterContainer.appendChild(borderel);
    }
  },
  createBorder:function(position,id){
    const entityel=document.createElement("a-entity")
    entityel.setAttribute("id",id)
    entityel.setAttribute("visible",true)
    entityel.setAttribute("geometry",{primitive:"plane",width:18,height:26})
    entityel.setAttribute("position",position)
    entityel.setAttribute("material",{color:"white",opacity:1})
    
    return entityel
  },
  createPoster:function(item){
    const entityel2=document.createElement("a-entity")
    entityel2.setAttribute("visible",true)
    entityel2.setAttribute("geometry",{primitive:"plane",width:16,height:24})
    entityel2.setAttribute("material",{src:item.url})
    entityel2.setAttribute("position",{x:0,y:0,z:0.1})
    return entityel2
  },
  createTitle:function(position,item){
    const entityel3=document.createElement("a-entity")
    entityel3.setAttribute("text",{align:"center",color:"yellow",width:50,value:item.title})
    const pos=position
    pos.y=-16
    pos.x=0
    pos.z=0.1
    entityel3.setAttribute("position",pos)
    entityel3.setAttribute("visible",true)
    return entityel3
  }
});
