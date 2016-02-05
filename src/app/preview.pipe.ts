import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({'name': 'preview'})
export class PreviewPipe implements PipeTransform {
  transform(text:string) : string {
    if (text.length < CUT_LENGTH + DELIMITER.length) {
      return text;
    }

    return text.substring(0, CUT_LENGTH) + DELIMITER;
  }
}

var CUT_LENGTH = 30;
var DELIMITER = "...";
