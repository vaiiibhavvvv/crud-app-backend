import Item from "./model/items.js";
export const getItems = async (req,res) => {

    try {

        const items = await Item.find({});
        res.status(200).json(items);
        
    } catch (error) {
        res.status(500).json({message : error.message});
    }

};

export const getItem = async (req,res) =>{

    try {
        const {id} = req.params;
        const item = await Item.findById(id);

        if(!item){
            return res.status(404).json({message: "Item not found"});
        }
        res.status(200).json(item);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }

}

export const createItems = async(req,res) => {
    try {
        
        const item = await Item.create(req.body);
        res.status(200).json(item);

    } catch (error) {
        res.status(500).json({message: error.message});
    }

};

export const updateItem = async (req,res) => {
    try {
        
        const {id} = req.params;
        const item = await Item.findByIdAndUpdate(id, req.body);

        if(!item){
            return res.status(404).json({message: "Item not found"});
        }

        const updatedItem = await Item.findById(id);
        res.status(200).json(updatedItem);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const deleteItems = async(req,res) => {
    try {
        
        const {id} = req.params;
        const item = await Item.findByIdAndDelete(id);

        if(!item){
            return res.status(404).json({message: "Product not found"});
        }

        return res.status(200).json({message: "Product deleted successfully"})


    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
