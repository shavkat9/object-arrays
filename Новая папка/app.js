let movie = [
    {name: 'hello', likes: 550,},
    {name: 'Atlas', likes: 450,},
    {name: 'Sayxon', likes: 540,},
    {name: 'Hasan', likes: 300}
]

movie.forEach((kim) => {
   let res = `Kinolarimiz yoqimliyligi ${kim.likes} soni va kinolarimizni nomlari ${kim.name}` 
   console.log(res)
})
