import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { SurgeonService } from '../../../../services/surgeon.service';


@Component({
  selector: 'app-hipprimary-postoperativescore',
  templateUrl: './hipprimary-postoperativescore.component.html',
  styleUrls: ['./hipprimary-postoperativescore.component.css']
})
export class HipprimaryPostoperativescoreComponent implements OnInit {

  constructor(
    private surgeonService: SurgeonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: Http
  ) { }

  currentUrl;
  patentId;
  patientname;
  patientage;
  patientsex;
  applypostoperativescpre;

  patient = {
    patientId: '',
    month: '',
    year: '',
    scoretype: 'postoperativescore',



    //harris hip score start
    harriship_pain: 0,
    harriship_walked: 0,
    harriship_socks: 0,
    harriship_transportation: 0,
    harriship_support: 0,
    harriship_limp: 0,
    harriship_stairs: 0,
    harriship_sitting: 0,
    harriship_30degrees: 0,
    harriship_10degrees: 0,
    harriship_10degreesextension: 0,
    harriship_discrepancy: 0,
    harriship_flexion: 0,
    harriship_abduction: 0,
    harriship_extRotation: 0,
    harriship_adduction: 0,
    harriship_hipscore: 0,
    totalharrishipscore: 0,

    //harris hip score start

    //sf36 score start
    totalsf36score: 0,
    sf36_generalhealth: 0,
    generalhealth: 0,
    sf36_ratehealth: 0,
    ratehealth: 0,
    sf36_vigorous: 0,
    vigorous: 0,
    sf36_moderate: 0,
    moderate: 0,
    sf36_lifting: 0,
    lifting: 0,
    sf36_severalflights: 0,
    severallights: 0,
    sf36_oneflights: 0,
    oneflights: 0,
    sf36_bending: 0,
    bending: 0,
    sf36_walking: 0,
    walking: 0,
    sf36_severalblocks: 0,
    severalblocks: 0,
    sf36_oneblock: 0,
    oneblock: 0,
    sf36_dressing: 0,
    dressing: 0,
    sf36_spentactivities: 0,
    spentactivities: 0,
    sf36_accomplished: 0,
    accomplished: 0,
    sf36_workactivities: 0,
    workactivities: 0,
    sf36_performing: 0,
    performing: 0,
    sf36_spentwork: 0,
    spentwork: 0,
    sf36_accomplishedless: 0,
    accomplishedless: 0,
    sf36_carefully: 0,
    carefully: 0,
    sf36_socialactivities: 0,
    socialactivities: 0,
    sf36_bodilypain: 0,
    bodilypain: 0,
    sf36_paininterfere: 0,
    paininterfere: 0,
    sf36_feelfull: 0,
    feelfull: 0,
    sf36_nervous: 0,
    nervous: 0,
    sf36_dumps: 0,
    dumps: 0,
    sf36_calm: 0,
    calm: 0,
    sf36_energy: 0,
    energy: 0,
    sf36_downhearted: 0,
    downhearted: 0,
    sf36_feelworn: 0,
    feelworn: 0,
    sf36_happyperson: 0,
    happyperson: 0,
    sf36_feeltired: 0,
    feeltired: 0,
    sf36_physicalhealth: 0,
    physicalhealth: 0,
    sf36_sick: 0,
    sick: 0,
    sf36_healthy: 0,
    healthy: 0,
    sf36_getworse: 0,
    getworse: 0,
    sf36_excellent: 0,
    excellent: 0,
    sf36_physicalscore: 0,
    sf36_rolelimitation: 0,
    sf36_emotional: 0,
    sf36_energyfatigue: 0,
    sf36_wellbeing: 0,
    sf36_Socialfunction: 0,
    sf36_pain: 0,
    sf36_health: 0,
    // sf36 score end


    //statification score start

    statification_joint6month: 0,
    statification_joint12month:0,
    statification_regular6month:0,
    statification_regular12month:0,
    statification_sport6month:0,
    statification_sport12month:0,
    statification_meet6month:0,
    statification_meet12month:0,
    statification_scale6month:0,
    statification_scale12month:0,
    statification_operation6month:0,
    statification_operation12month:0,
    statification_recommend6month:0,
    statification_recommend12month:0,
    totalstatificationscore: 0
    //statification score end
  }

 
  totalsf36score = '0';
  totalstatificationscore = '0';
  totalharrishipscore = '0';

  patientPreOperative() {
    this.router.navigate(['surgeon/Hip/hip-primary-preoperative/', this.patient.patientId]);
  }

  radiology() {
    this.router.navigate(['surgeon/Hip/hip-primary-radiology/', this.patient.patientId]);
  }
  intraoperative() {
    this.router.navigate(['surgeon/Hip/hip-primary-intraoperative/', this.patient.patientId]);
  }
  postoperative() {
    this.router.navigate(['surgeon/Hip/hip-primary-postoperative/', this.patient.patientId]);
  }
  postoperativescore() {
    this.router.navigate(['surgeon/Hip/hip-primary-postoperativescore/', this.patient.patientId]);
  }
  
   //harris hip score function start

   harrisscorepainChange(event: any) {
    this.patient.harriship_pain = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscorewalkedChange(event: any) {
    this.patient.harriship_walked = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscoresocksChange(event: any) {
    this.patient.harriship_socks = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscoretransportationChange(event: any) {
    this.patient.harriship_transportation = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscoresupportChange(event: any) {
    this.patient.harriship_support = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscorelimpChange(event: any) {
    this.patient.harriship_limp = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscorestairsChange(event: any) {
    this.patient.harriship_stairs = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscoresittingChange(event: any) {
    this.patient.harriship_sitting = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscore30degreesChange(event: any) {
    this.patient.harriship_30degrees = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscore10degreesChange(event: any) {
    this.patient.harriship_10degrees = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscore10degreesextensionChange(event: any) {
    this.patient.harriship_10degreesextension = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscorediscrepancyChange(event: any) {
    this.patient.harriship_discrepancy = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscoreflexionChange(event: any) {
    this.patient.harriship_flexion = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscoreabductionChange(event: any) {
    this.patient.harriship_abduction = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscoreextRotationChange(event: any) {
    this.patient.harriship_extRotation = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }

  harrisscoreadductionChange(event: any) {
    this.patient.harriship_adduction = event.target.value;
    this.patient.totalharrishipscore = +this.patient.harriship_pain + +this.patient.harriship_walked + + this.patient.harriship_socks +
      +this.patient.harriship_transportation + +this.patient.harriship_support + + this.patient.harriship_limp + +this.patient.harriship_stairs +
      +this.patient.harriship_sitting + + this.patient.harriship_30degrees + + this.patient.harriship_10degrees + +this.patient.harriship_10degreesextension +
      +this.patient.harriship_discrepancy + +this.patient.harriship_flexion + +this.patient.harriship_abduction +
      + this.patient.harriship_extRotation + +this.patient.harriship_adduction;
  }



  addharrishipscore(score) {
    console.log(score);
    this.surgeonService.surgeon_Patientharrishipscoure(score).subscribe(data => {
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        this.totalharrishipscore = dataPatientId.message[0].postoperativescores.harrishipscore.totalharrishipscore;
      });
    });
  }

  //harris hip score function end
  // sf36 scoring function start


  sf36scorevigorousChange(event: any) {
    this.patient.sf36_vigorous = event.target.value;
    this.patient.vigorous = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoremoderateChange(event: any) {
    this.patient.sf36_moderate = event.target.value;
    this.patient.moderate = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoreliftingChange(event: any) {
    this.patient.sf36_lifting = event.target.value;
    this.patient.lifting = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoreseveralflightsChange(event: any) {
    this.patient.sf36_severalflights = event.target.value;
    this.patient.severallights = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoreoneflightsChange(event: any) {
    this.patient.sf36_oneflights = event.target.value;
    this.patient.oneflights = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scorebendingChange(event: any) {
    this.patient.sf36_bending = event.target.value;
    this.patient.bending = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scorewalkingChange(event: any) {
    this.patient.sf36_walking = event.target.value;
    this.patient.walking = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;
  }

  sf36scoreseveralblockChange(event: any) {
    this.patient.sf36_severalblocks = event.target.value;
    this.patient.severalblocks = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;

  }

  sf36scoreoneblockChange(event: any) {
    this.patient.sf36_oneblock = event.target.value;
    this.patient.oneblock = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;

  }

  sf36scoredressingChange(event: any) {
    this.patient.sf36_dressing = event.target.value;
    this.patient.dressing = event.target.value / 10;
    this.patient.totalsf36score = this.patient.vigorous + +this.patient.moderate + + this.patient.lifting +
      +this.patient.severallights + +this.patient.oneflights + + this.patient.bending + +this.patient.walking +
      +this.patient.severalblocks + + this.patient.oneblock + + this.patient.dressing;

  }

  sf36scorespentactivitiesChange(event: any) {
    this.patient.sf36_spentactivities = event.target.value;
    this.patient.spentactivities = event.target.value / 4;
    this.patient.sf36_rolelimitation = +this.patient.spentactivities + + this.patient.accomplished +
      +this.patient.workactivities + +this.patient.performing;
  }

  sf36scorespentaccomplishedChange(event: any) {
    this.patient.sf36_accomplished = event.target.value;
    this.patient.accomplished = event.target.value / 4;
    this.patient.sf36_rolelimitation = +this.patient.spentactivities + + this.patient.accomplished +
      +this.patient.workactivities + +this.patient.performing;
  }

  sf36scoreworkactivitiesChange(event: any) {
    this.patient.sf36_workactivities = event.target.value;
    this.patient.workactivities = event.target.value / 4;
    this.patient.sf36_rolelimitation = +this.patient.spentactivities + + this.patient.accomplished +
      +this.patient.workactivities + +this.patient.performing;
  }

  sf36scoreperformingChange(event: any) {
    this.patient.sf36_performing = event.target.value;
    this.patient.performing = event.target.value / 4;
    this.patient.sf36_rolelimitation = +this.patient.spentactivities + + this.patient.accomplished +
      +this.patient.workactivities + +this.patient.performing;
  }

  sf36scorespentworkChange(event: any) {
    this.patient.sf36_spentwork = event.target.value;
    this.patient.spentwork = event.target.value / 3;
    this.patient.sf36_emotional = +this.patient.spentwork + +this.patient.accomplishedless + +this.patient.carefully;
  }

  sf36scoreaccomplishedlessChange(event: any) {
    this.patient.sf36_accomplishedless = event.target.value;
    this.patient.accomplishedless = event.target.value / 3;
    this.patient.sf36_emotional = +this.patient.spentwork + +this.patient.accomplishedless + +this.patient.carefully;
  }

  sf36scorecarefullyChange(event: any) {
    this.patient.sf36_carefully = event.target.value;
    this.patient.carefully = event.target.value / 3;
    this.patient.sf36_emotional = +this.patient.spentwork + +this.patient.accomplishedless + +this.patient.carefully;
  }

  sf36scorefeelfullChange(event: any) {
    this.patient.sf36_feelfull = event.target.value;
    this.patient.feelfull = event.target.value / 4;
    this.patient.sf36_energyfatigue = +this.patient.feelfull + +this.patient.energy + + this.patient.feelworn +
      +this.patient.feeltired;

  }

  sf36scoreenergyChange(event: any) {
    this.patient.sf36_energy = event.target.value;
    this.patient.energy = event.target.value / 4;
    this.patient.sf36_energyfatigue = +this.patient.feelfull + +this.patient.energy + + this.patient.feelworn +
      +this.patient.feeltired;

  }

  sf36scorefeelwornChange(event: any) {
    this.patient.sf36_feelworn = event.target.value;
    this.patient.feelworn = event.target.value / 4;
    this.patient.sf36_energyfatigue = +this.patient.feelfull + +this.patient.energy + + this.patient.feelworn +
      +this.patient.feeltired;

  }

  sf36scorefeeltiredChange(event: any) {
    this.patient.sf36_feeltired = event.target.value;
    this.patient.feeltired = event.target.value / 4;
    this.patient.sf36_energyfatigue = +this.patient.feelfull + +this.patient.energy + + this.patient.feelworn +
      +this.patient.feeltired;

  }

  sf36scorenervousChange(event: any) {
    this.patient.sf36_nervous = event.target.value;
    this.patient.nervous = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scoredumpsChange(event: any) {
    this.patient.sf36_dumps = event.target.value;
    this.patient.dumps = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scorecalmChange(event: any) {
    this.patient.sf36_calm = event.target.value;
    this.patient.calm = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scoredownheartedChange(event: any) {
    this.patient.sf36_downhearted = event.target.value;
    this.patient.downhearted = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scorehappypersonChange(event: any) {
    this.patient.sf36_happyperson = event.target.value;
    this.patient.happyperson = event.target.value / 5;
    this.patient.sf36_wellbeing = +this.patient.nervous + +this.patient.dumps + +this.patient.calm +
      +this.patient.downhearted + +this.patient.happyperson;
  }

  sf36scoresocialactivitiesChange(event: any) {
    this.patient.sf36_socialactivities = event.target.value;
    this.patient.socialactivities = event.target.value / 2;
    this.patient.sf36_Socialfunction = +this.patient.socialactivities + +this.patient.physicalhealth;
  }

  sf36scorephysicalhealthChange(event: any) {
    this.patient.sf36_physicalhealth = event.target.value;
    this.patient.physicalhealth = event.target.value / 2;
    this.patient.sf36_Socialfunction = +this.patient.socialactivities + +this.patient.physicalhealth;
  }

  sf36scorebodilypainChange(event: any) {
    this.patient.sf36_bodilypain = event.target.value;
    this.patient.bodilypain = event.target.value / 2;
    this.patient.sf36_pain = +this.patient.bodilypain + +this.patient.physicalhealth;
  }

  sf36scorepaininterfereChange(event: any) {
    this.patient.sf36_paininterfere = event.target.value;
    this.patient.paininterfere = event.target.value / 2;
    this.patient.sf36_pain = +this.patient.bodilypain + +this.patient.paininterfere;
  }

  sf36scorehealthChange(event: any) {
    this.patient.sf36_generalhealth = event.target.value;
    this.patient.generalhealth = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  sf36scoresickChange(event: any) {
    this.patient.sf36_sick = event.target.value;
    this.patient.sick = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  sf36scorehealthyChange(event: any) {
    this.patient.sf36_healthy = event.target.value;
    this.patient.healthy = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  sf36scoregetworseChange(event: any) {
    this.patient.sf36_getworse = event.target.value;
    this.patient.getworse = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  sf36scoreexcellentChange(event: any) {
    this.patient.sf36_excellent = event.target.value;
    this.patient.excellent = event.target.value / 5;
    this.patient.sf36_health = +this.patient.generalhealth + +this.patient.sick + +this.patient.healthy +
      +this.patient.getworse + +this.patient.excellent;
  }

  addsf36score(score) {
    console.log(score);
    this.surgeonService.surgeon_Patientsf36scoure(score).subscribe(data => {
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        this.totalsf36score = dataPatientId.message[0].postoperativescores.sf36score.sf36_physicalscore;
       
      });
    });
  }
  // sf36 scoring function end

  
//statification scoring function start

statificationscorejoint6Change(event: any) {
    this.patient.statification_joint6month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscorejoint12Change(event: any) {
    this.patient.statification_joint12month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscoreregular6Change(event: any) {
    this.patient.statification_regular6month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscoreregular12Change(event: any) {
    this.patient.statification_regular12month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscoresport6Change(event: any) {
    this.patient.statification_sport6month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscoresport12Change(event: any) {
    this.patient.statification_sport12month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscoremeet6Change(event: any) {
    this.patient.statification_meet6month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscoremeet12Change(event: any) {
    this.patient.statification_meet12month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscorescale6Change(event: any) {
    this.patient.statification_scale6month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscorescale12Change(event: any) {
    this.patient.statification_scale12month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscoreoperation6Change(event: any) {
    this.patient.statification_operation6month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscoreoperation12Change(event: any) {
    this.patient.statification_operation12month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscorerecommend6Change(event: any) {
    this.patient.statification_recommend6month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

  statificationscorerecommend12Change(event: any) {
    this.patient.statification_recommend12month = event.target.value;
    this.patient.totalstatificationscore = +this.patient.statification_joint6month + +this.patient.statification_joint12month + +this.patient.statification_regular6month +
      +this.patient.statification_regular12month+ +this.patient.statification_sport6month + + this.patient.statification_sport12month+
      +this.patient.statification_meet6month + +this.patient.statification_meet12month + +this.patient.statification_scale6month+ 
      +this.patient.statification_scale12month + +this.patient.statification_operation6month + + this.patient.statification_operation6month+
      +this.patient.statification_operation12month + + this.patient.statification_recommend6month+ + this.patient.statification_recommend12month;
  }

   addstatificationscore(score) {
    console.log(score);
    this.surgeonService.surgeon_PatientStatificationscoure(score).subscribe(data => {
      this.surgeonService.surgeon_GetLastPatientId().subscribe(dataPatientId => {
        this.totalstatificationscore = dataPatientId.message[0].postoperativescores.statificationscore.totalstatificationscore;
      });
    });
  }

  

//statification scoring function end

addPatientpostoperativescore(patient){
  this.surgeonService.surgeon_AddPatientRevisionPostoperativescore(patient).subscribe(data => {
    alert('Patient Details Added');

  });
}
  ngOnInit() {
    this.applypostoperativescpre = true;
    this.currentUrl = this.activatedRoute.snapshot.params;
    this.surgeonService.surgeon_SinglePatientId(this.currentUrl.id).subscribe(dataPatientId => {
      console.log(dataPatientId);
      console.log(dataPatientId.message.demography.firstname);
      this.patentId = dataPatientId.message.demography._id;
      this.patient.patientId = dataPatientId.message._id;
      this.patientname = dataPatientId.message.demography.firstname + '' + dataPatientId.message.demography.middlename + '' + dataPatientId.message.demography.lastname;
      this.patientage = dataPatientId.message.demography.age;
      this.patientsex = dataPatientId.message.demography.gender;
    });
  }

}
