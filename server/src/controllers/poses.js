
module.exports = {
    // getPoses: (req, res) => {
    //     res.render("get_poses.ejs", { poses: null, error: null });
    // },

    showPoses: async(req, res) => {
        const url = "https://yoga-api-nzy4.onrender.com/v1/poses";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

        const poses = await response.json();
        // console.log(poses);
        // for(pose of poses){

        // }
        res.render("poses", {
            poses: poses,
        });
        } catch (error) {
            console.error(error.message);
        }
    }
    
}