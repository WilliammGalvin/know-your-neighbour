var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/WilliammGalvin/know-your-neighbour.git',
        user: {
            name: 'Williammgalvin', // update to use your name
            email: 'liam.galvin@bell.net' // Update to use your email
        }
    },
    
    () => {
        console.log('Deploy Complete!')
    }
)