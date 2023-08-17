import {Component, OnInit} from '@angular/core';
import {GalleryModule, Gallery, GalleryItem, ImageItem} from 'ng-gallery';
import {GalleryItemType} from "ng-gallery/lib/models/constants";



const data = [
    {
        srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
        previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    },
    {
        srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    },
    {
        srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    },
    {
        srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
        previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    },
];
@Component({
    selector: 'app-view-qr-code-device-manager',
    templateUrl: './view-qr-code-device-manager.component.html',
    styleUrls: ['./view-qr-code-device-manager.component.scss']
})

export class ViewQrCodeDeviceManagerComponent implements OnInit {
    imageData = data;
    galleryId = 'myLightbox';
    items: GalleryItem[] = []


    constructor(public gallery: Gallery) {
    }

    ngOnInit() {
        this.items = this.imageData.map(
            (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
        );
        const galleryRef = this.gallery.ref(this.galleryId);
        galleryRef.load(this.items);
    }
}
