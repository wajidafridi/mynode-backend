var Feedbackdb=require('../model/model');

// send all feedbacks
exports.getData= (req, res) => {
    Feedbackdb.find()
    .then(data=>{
        res.send({error:false,data});
    })
    .catch(err=>{
        res.status(500).send({ error: true, msg: err.message||`Error Occured while retriving record...` });
    })
    
}

// create new feedbacks
exports.create=(req, res) => {
    if (!req.body) {
        return res.status(400).send({ error: true, msg: "Content can not be empty..." });
    }

    const feedback = new Feedbackdb({
        description:req.body.description
    })
    
    feedback.save(feedback)
    .then(data=>{
        res.send({error:false,data});
    })
    .catch(err=>{
        res.status(500).send({ 
            error: true, msg: err.message || "Some error occurred while creating a create operation..."
        });
    })
    
}

// delete feedback by id
exports.delete = (req, res) => {
    const id=req.params.id;
    
    Feedbackdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({ error: true, msg: `record not found with id ${id}...` });
        }
        else{
            res.send({ error: false, msg: `record deleted successfully` });
        }
    })
    .catch(err=>{
        res.status(500).send({ error: true, msg: err.message||`could not delete record with id ${id}...` });
    })
}

// send specific feedbacks by id
exports.update= (req, res) => {
    if (!req.body) {
        return res.status(400).send({ error: true, msg: "Data to update can not be empty..." });
    }
    const id=req.params.id;

    Feedbackdb.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({ error: true, msg: `can not update record with id ${id}...` });
        }
        else{
            res.send({ error: false, msg: `record updated successfully` });
        }
    })
    .catch(err=>{
        res.status(500).send({ error: true, msg: err.message||`could not update record with id ${id}...` });
    })

}