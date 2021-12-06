import { Component, Input, OnInit } from '@angular/core'
import { Card } from '../app.component'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: Card
  @Input() index!: number

  title = 'My Card Title'
  text = 'My Semple Text'

  cardDate: Date = new Date()

  textColor = "blue"

  disabled = false

  number = 42

  array = [1, 1, 2, 3, 5, 8, 13]

  obj = {name: 'Mustafa', info: {age: 21, weight: 77, height: 185}}

  imgUrl = 'https://i1.wp.com/ilirhushi.me/wp-content/uploads/2018/03/angular_logo.png?fit=250%2C250&ssl=1'

  ngOnInit() {
    setTimeout( () => {
      this.imgUrl = 'https://cdn.iconscout.com/icon/free/png-256/vue-dot-js-3629145-3030285.png'
      this.disabled = true
    }, 3000)
  }

  changeTitle() {
    this.card.title = 'Другое название'
  }

  inputHandler(event: any) {
    const value = event.target.value
    this.card.title = value
  }

  changeHandler() {
    console.log(this.card.title);
    
  }

  getInfo() {
    return 'This is my info'
  }
}