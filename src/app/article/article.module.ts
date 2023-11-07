export class Article {
  title: string;
  link: string;
  vote: number;
  constructor(title: string, link: string, vote?: number){
    this.title = title;
    this.link = link;
    this.vote = vote || 0;
  }

  voteUp() {
    this.vote += 1
  }

  voteDown() {
    this.vote > 0 ? this.vote -= 1 : this.vote = 0
  }

  domain():string | null {
    try {
      const domainAndPath = this.link.split('//')[1]

      return domainAndPath.split('/')[0]
  
    } catch (error) {
      return null
    }
  }
}