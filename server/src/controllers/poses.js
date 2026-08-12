
module.exports = {
    // getPoses: (req, res) => {
    //     res.render("get_poses.ejs", { poses: null, error: null });
    // },

    showPoses: async(req, res) => {
        const url = "https://yoga-api-nzy4.onrender.com/v1";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

        const poses = await response.json();
        res.render("poses.ejs", {
            poses: poses,
        });
        } catch (error) {
            console.error(error.message);
        }
    }
    
}