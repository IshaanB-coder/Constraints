class Constraints{
constructor(bodyA, bodyB){
    var Options = {
        bodyA:bodyA,
        bodyB:bodyB,
        length: 40,
        stiffness: 1
    }
    this.chain = Matter.Constraint.create(Options)
    World.add(world, this.chain)
}
display() {
    var A = this.chain.bodyA.position
    var B = this.chain.bodyB.position
    line(A.x, A.y, B.x, B.y)
}
}