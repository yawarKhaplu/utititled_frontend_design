url = "https://randomuser.me/api/"
url = "https://api.samplefaces.com/face"

user_data = "https://dummyjson.com/users"

const user_profile = document.querySelectorAll('.employee-card>div')
const user_profile_name = document.querySelectorAll('.employee-card>div>div>h3')
const user_profile_role = document.querySelectorAll('.employee-card>div>div>p')


get_five_user_data = async () => {
    try {
        const response = await fetch(user_data);
        const data = await response.json();
        console.log(data)
        return data.users.slice(0, 5);
    } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
    }
}

get_five_user_data().then((data) => {
    console.log(data)
})

user_count = 0
user_profile.forEach((user) => {
        getRandomuserImg().then((img)=>{
            console.log(img)
            user.style.backgroundImage = `url(${img})`;
            user.style.backgroundSize = "cover"
            user.style.backgroundPosition = "center"
            user.style.backgroundRepeat = "no-repeat"
            user_profile_name[user_count].innerText = "John Doe"
            user_profile_role[user_count].innerText = "Python Developer"
            user_count+=1;
        })
})

async function getRandomuserImg() {
    try {
      const response = await fetch(url);
      try{
        const data = await response.json();
        console.log(data)
        console.log(data.results[0].picture.large)
       
        // console.log(data.picture.large)
        // const imageUrl = data.results[0].picture.large;
        // return imageUrl;
        return data.results[0].picture.large
    }catch{
          return response.url;

      }
    } catch (error) {
      console.error('Error fetching user image:', error);
      return null;
    }
  }


getRandomuserImg().then((img)=>{
    console.log(img)
})