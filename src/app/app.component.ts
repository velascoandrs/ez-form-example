import {Component} from '@angular/core';
import {Validators} from '@angular/forms';
import {PlosService} from './plos.service';
import {FileValidator} from '@gordon_freeman/ez-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'formularios';
  myConfiguration = [
    {
      controlName: 'uuid',
      type: {
        typeName: 'input'
      },
      disabled: true,
    },
    {
      controlName: 'password',
      type: {
        typeName: 'input',
        class: 'password',
      },
      validators: [
        Validators.required,
      ]
    },
    {
      controlName: 'birthday',
      placeholder: 'Enter your birthday date',
      hint: 'Enter a valid date',
      type: {
        typeName: 'date'
      },
      validators: [
        Validators.required,
      ]
    },
    {
      controlName: 'address',
      placeholder: 'Enter a complete address',
      type: {
        typeName: 'textarea',
        maxLength: 20,
      },
      validators: [
        Validators.required,
      ],
    },
    {
      controlName: 'email',
      validators: [
        Validators.required,
        Validators.email
      ],
      placeholder: 'Enter an email',
      type: {
        typeName: 'input',
        maxLength: 30,
      },
      errorMessages: {
        required: 'The email is mandatory',
        email: 'You must enter a valid email',
      },
      hint: 'Enter a valid email'
    },
    {
      controlName: 'civilState',
      placeholder: 'Choose a civil state',
      label: 'Civil state',
      hint: 'Please pick a Civil State',
      validators: [
        Validators.required
      ],
      type: {
        typeName: 'select',
        options: [
          {
            value: 1,
            label: 'Married'
          },
          {
            value: 2,
            label: 'Single'
          }
        ]
      },
    },
    {
      controlName: 'cities',
      type: {
        typeName: 'check',
        minRequired: 2,
        options: [
          {
            value: 1,
            label: 'Quito'
          },
          {
            value: 2,
            label: 'Cuenca'
          },
          {
            value: 3,
            label: 'Ambato'
          }
        ]
      },
      label: 'Cities',
      errorMessages: {
        required: 'select two cities at least',
      }
    },
    {
      controlName: 'favoriteFruit',
      validators: [
        Validators.required
      ],
      label: 'Favorite Fruit',
      type: {
        typeName: 'radio',
        options: [
          {
            value: 3,
            label: 'Apple'
          },
          {
            value: 1,
            label: 'Pear'
          },
          {
            value: 2,
            label: 'Pineapple'
          }
        ],
      },
    },
    {
      controlName: 'profilePicture',
      label: 'Profile Picture',
      hint: 'Please upload your profile picture',
      placeholder: 'Add your profile picture',
      type: {
        typeName: 'file',
        multiple: false,
        accept: 'image/*',
      },
    },
    {
      controlName: 'someFiles',
      label: 'Add Some Files',
      hint: 'Please upload your files',
      placeholder: 'Add Files',
      validators: [
        Validators.required,
        FileValidator.extensions(['png', 'jpg']),
        FileValidator.maxSize(500),
      ],
      errorMessages: {
        fileExtension: 'Please select png or jpg files only',
        required: 'Mandatory File',
        fileMaxSize: 'File size is larger than 500 kilobytes'
      },
      type: {
        typeName: 'file',
        multiple: true,
        accept: '*/*',
        showFile: true,
      },
    },
    {
      controlName: 'article',
      validators: [
        Validators.required
      ],
      label: 'Wikipedia article',
      placeholder: 'Example: DNA',
      type: {
        typeName: 'autocomplete',
        maxLength: 30,
        completeMethod: this.filterWikipediaArticleByTitle,
        nameAutoComplete: 'title',
        componentReference: this
      },
      errorMessages: {
        required: 'The article is mandatory',
      },
      hint: 'Search an article'
    },
  ];
  usuario = {
    uuid: 1234,
    email: 'juan.pecados@mail.com',
    civilState: 1,
    otherDate: '2015-02-16',
    birthday: '1999-02-16',
    favoriteFruit: 1,
    password: '12133',
    address: 'Av. 1231',
    cities: [1, 2],
    article: {id: 2894, title: 'Parbasdorf', country: 'AT', lat: '48.28333', lng: '16.6'},
  };

  myToasterConfig = {
    success: {
      type: 'info',
      title: 'GOOD',
      body: 'All right!!'
    },
    fail: {
      type: 'warning',
      title: 'BAD',
      body: 'Someting was wrong!!'
    }
  };

  escucharDatosDelFormulario(evento) {
    this.usuario = evento ? evento : undefined;
    if (this.usuario) {
      console.log('todo OK: ', this.usuario);
    } else {
      console.log('todo mal');
    }
  }
  constructor(
    private readonly _wikipediaService: PlosService
  ) {
  }
  filterWikipediaArticleByTitle(event, contexto) {
    return contexto._wikipediaService.findArticle(event.query ? event.query : event);
  }
}
