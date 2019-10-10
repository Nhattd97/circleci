// Get repository
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}/"

// Get default branch
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}/branches/default"

// Get branchs
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}/branches"

// Get feature file
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}/raw/${externalFilePath}?at=refs/heads/${BranchName}"

// Get getHeadSHA
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}/branches?limit=500"

// Get getCommit
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}/commits/${sha}"

// Get listFeatureFiles
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/projects/${projectKey}/repos/${repositorySlug}/files/${featuresFolder}?at=refs/heads/${BranchName}&limit=${limit}&start=0"

// Get getUserAccessLevel
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/projects/${owner}"
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/repos?projectname=${projectname}&name=${repo}&permission=REPO_READ"
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/repos?projectname=${projectname}&name=${repo}&permission=REPO_WRITE"

// Get getUserProfile
"https://devops.vitality.co.uk/bitbucket/rest/api/1.0/users"


curl -s -w '\n\nTesting Website Response Time for :%{url_effective}\n\nLookup Time:\t\t%{time_namelookup}\nConnect Time:\t\t%{time_connect}\nPre-transfer Time:\t%{time_pretransfer}\nStart-transfer Time:\t%{time_starttransfer}\n\nTotal Time:\t\t%{time_total}\n' "http://localhost:18080/rest/api/2/issue/10000?fields=project,issuetype" -u "nhattran:admin123"