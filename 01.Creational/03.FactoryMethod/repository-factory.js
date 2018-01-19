var RepositoryFactory = function(){
    this.getRepository = function(repositoryType){
        if(repositoryType === 'task'){
            return require('./task-repository');
        }

        if(repositoryType === 'user'){
            return require('./user-repository');
        }

        return null;
    }
}

module.exports = new RepositoryFactory();