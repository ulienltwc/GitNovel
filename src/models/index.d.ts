import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type HeaderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerHeader = {
  readonly id: string;
  readonly Logo?: string | null;
  readonly Menu?: string | null;
  readonly Account?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHeader = {
  readonly id: string;
  readonly Logo?: string | null;
  readonly Menu?: string | null;
  readonly Account?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Header = LazyLoading extends LazyLoadingDisabled ? EagerHeader : LazyHeader

export declare const Header: (new (init: ModelInit<Header, HeaderMetaData>) => Header) & {
  copyOf(source: Header, mutator: (draft: MutableModel<Header, HeaderMetaData>) => MutableModel<Header, HeaderMetaData> | void): Header;
}