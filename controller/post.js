const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient();


//home
exports.renderHome  = async (req,res) => {
const allUsers = await prisma.post.findMany()
    // console.log(allUsers);
    res.render("home",{allUsers})
}

//from addPost create
exports.renderAddPost = async(req,res) => {
    const {title,description} = req.body
    const post = await prisma.post.create({
        data : {
             title,
            description
        }
    })
    console.log(post);
    res.redirect("/")
}


//addPost
exports.addPost = (req,res) => {
    res.render("addPost")
}

//detail
exports.renderDetail = async (req,res) => {
    const id = Number(req.params.id)
    const post = await prisma.post.findUnique({
        where : {id : id}
    })
    res.render("detail",{post})
};

//delete
exports.renderDelete = async (req,res) => {
    const id = Number(req.params.id)
    const deletePost = await prisma.post.delete({
        where : {
            id : id
        }
    })
    res.redirect("/")
}




